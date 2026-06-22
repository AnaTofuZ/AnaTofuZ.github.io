---
marp: true
---

# perlimportsから探るPPIの世界

- YAPC::Japan::Online2022   03/05
- 八雲アナグラ(AnaTofuZ)

---
# 自己紹介
- 八雲アナグラ(@AnaTofuZ)
- Okinawa.pm -> ???
- 最近は京都にいます
- 株式会社はてなノベルチーム
![height:5cm](https://pbs.twimg.com/profile_images/1421081998748094465/5zw5EYGM_400x400.jpg)

---
# ※今日のトークについて
- 途中でピザが来ます
- 来たら受け取りに行きます

---
# 今日の内容
- perlimportsの雰囲気とPPIの雰囲気がわかる

---
# 今日の内容
- perlimportsとは
    - perlimportsの紹介
    - perlのuse問題
    - 使い方
- perlimportsとPPI
    - 静的解析とは
    - PPIの紹介
    - perlimportsの処理の一部分を眺める

---
# perlimportsとは
- [The Perl and Raku Conference (In the Cloud) 2021](https://tprc2021cic.sched.com/event/jLwz/perlimports-or-where-did-that-symbol-come-from)で発表されたツール
    - https://metacpan.org/dist/App-perlimports
- 作者はOALDERS(Olaf Alders)さん
    - 最近静的解析ツールにハマっているっぽい
        - App::perlimports
            - 今日の内容
        - App::perlvars
            - コード上で未使用の変数検出ツール

---
# perlimportsとは
- perlのuse(モジュールロード)をいい感じにするのを助けてくれるツール
    - 具体的には**どの関数がどのモジュールから持ってきたかを明示的に作る規約のレール**になるもの
    - ソースコードの情報を解析するのに**静的解析**を使用している
- goimportsインスパイア
- Perlで実装されている

---
# 静的解析
- 静的(コード実行することなしに)、コード情報を解析する手法
    - コードに問題がないかを検出するlinterや、見た目をいい感じに整形するformatterなどはおおよそ何かしらの形で静的解析をしている
- 逆にコード実行してコード情報を解析する商法に「**動的解析**」がある
    - マルチスレッド環境におけるバグの発見などは動的解析のほうが望ましい
    - Perlにおいても動的解析を使った課題解決はよく利用される
        - https://techblog.cartaholdings.co.jp/entry/2020/05/07/120000
- Perlにおける静的解析の現状はこの後お話します

---
# perlimportsが解決したい問題

---
# Q. `encode_json`はどこから来ているでしょう

```perl
use strict;
use warnings;

use JSON;

print encode_json({hoge => 'hello', isBool => \0});
```
---
# Q. `encode_json`はどこから来ているでしょう
- A. 標準関数?

```perl
use strict;
use warnings;

use JSON;

print encode_json({hoge => 'hello', isBool => \0});
```

---
# Q. `encode_json`はどこから来ているでしょう
- A. ~~標準関数?~~

```perl
use strict;
use warnings;

use JSON;

print encode_json({hoge => 'hello', isBool => \0});
```

---
# Q. `encode_json`はどこから来ているでしょう
- A. ~~標準関数?~~
- A. `JSON`がエクスポートしている

```perl
use strict;
use warnings;

use JSON;

print encode_json({hoge => 'hello', isBool => \0});
```

---
# Perlのモジュールロードの方法
- 大きく分けて2種類
    - `require`
    - `use`
- それぞれ次の違いがある

|ロード方法| ロードタイミング | 副作用|
| - | - | - |
| **require** | require文実行時(逐次)| ない|
| **use** | コンパイルタイム | importを実行する |

---
# ロードタイミングの比較
- `require`は文実行時
- `use`はコンパイルタイム
    - 具体的にどういう挙動の差を見せるか確認する
    - 存在しない`Hoge`モジュールをロードする例題を考える

---
# ロードタイミングの比較
- `require`の場合

```perl
#!/usr/bin/env perl

use strict;
use warnings;

print "before require\n";

require Hoge;

print "after require\n";
```

---
# ロードタイミングの比較
- `require`の場合

```perl
#!/usr/bin/env perl

use strict;
use warnings;

print "before require\n";

require Hoge;

print "after require\n";
```

- `require`の直前のprint文が実行されている
    - 逐次的に処理される

```zsh
❯ perl hoge.pl
before require
Can't locate Hoge.pm in @INC (you may need to install the Hoge module)
(@INC contains: ...) at hoge.pl line 8.
```

---
# ロードタイミングの比較
- `use`の場合

```perl
#!/usr/bin/env perl

use strict;
use warnings;

print "before use\n";

use Hoge;

print "after use\n";
```


---
# ロードタイミングの比較
- `use`の場合

```perl
#!/usr/bin/env perl

use strict;
use warnings;

print "before use\n";

use Hoge;

print "after use\n";
```

- 何もprintされずに終了する
    - スクリプトの実行前にuseが処理される

```
❯ perl hoge.pl
Can't locate Hoge.pm in @INC (you may need to install the Hoge module)
(@INC contains: ... ) at hoge.pl line 8.
BEGIN failed--compilation aborted at hoge.pl line 8.
```

---
# useの実態
- 実際は次の構文と等価
```perl
use Hoge;
```
```perl
BEGIN {
    require Hoge;
    Hoge->import();
}
```
- BEGINブロック
    - Perlでコンパイルタイム(最初)に実行したい処理を書けるブロック
- BEGINブロック内で`require`して`import`を実行する

---
# import

- Perlの規約的にuseしたタイミングで実行される関数
- 何を書くかはオブジェクトを書く人に委ねられている
- よく`use`した先で通常の関数の様に使いたいモジュール定義の関数をエクスポート(輸出)する処理が書かれている
    - エクスポートしない場合はJSONの例では`JSON->encode_json`の様に扱わなければならない
    - この煩わしさを解消したいケースなどで関数エクスポートが使われる
    - エクスポート以外にも使うことができる


---
# エクスポート以外のimport
- Class::Accessor::Liteではオブジェクトのアクセサなどの定義にimportを活用している
- use時に`()`の中身に文字列以外を渡しているケースはだいたい独自にimportを書いている

```perl
use Class::Accessor::Lite (
    new => 1,
    ro  => [ qw(baz) ],
    wo  => [ qw(hoge) ],
);
```

```perl
sub import { #一部
    shift;
    my %args = @_;
    my $pkg = caller(0);
    my %key_ctor = (
        rw => \&_mk_accessors,
        ro => \&_mk_ro_accessors,
...
```

---
# 関数エクスポートをするimport
- 様々なやり方があるが、最近はExporterを使うのが主流
- Exporterモジュールを継承、もしくはuseすると自動でエクスポート処理を`import`として登録する

```perl
package Hoge::First;
use strict;
use warnings;
use feature qw/say/;

use Exporter 'import';

our @EXPORT = (qw/hoge/);　#サブルーチンの名前を文字列で配列の中にいれるとEXPORTされる

sub hoge {
  say 'this is first!';
}

1;
```

---
# 関数エクスポートをするimport
- `@EXPORT`に登録されているシンボル(関数名)をエクスポートする
    - このコードでは`hoge`がエクスポートされる

```perl
package Hoge::First;
use strict;
use warnings;
use feature qw/say/;

use Exporter 'import';

our @EXPORT = (qw/hoge/);　#サブルーチンの名前を文字列で配列の中にいれるとEXPORTされる

sub hoge {
  say 'this is first!';
}

1;
```
---
# 関数エクスポートしたものをuseする
- `hoge`メソッドをHoge::First, Hoge::Secondでそれぞれ定義、エクスポートする

```perl
#!/usr/bin/env perl
use strict;
use warnings;

use Hoge::First;
use Hoge::Second;

hoge();
```
---
# 関数エクスポートしたものをuseする
- `hoge`メソッドをHoge::First, Hoge::Secondでそれぞれ定義、エクスポートする
    - この場合呼び出される`hoge`は最後にロードした`Hoge::Second`のものになる

```perl
#!/usr/bin/env perl
use strict;
use warnings;

use Hoge::First;
use Hoge::Second;

hoge();
```

```zsh
❯ perl -Ilib hoge.pl
this is second!
```

---
# 関数エクスポートが起こしがちな問題
- 先程の例の様に、同名の関数をエクスポートしていた場合、ロード順によって呼び出される関数の実態が変わってしまう
- そもそもどこで定義している関数なのか探しにくい

---
# 関数エクスポートが起こしがちな問題
- 先程の例の様に、同名の関数をエクスポートしていた場合、ロード順によって呼び出される関数の実態が変わってしまう
- そもそもどこで定義している関数なのか探しにくい
- → **何をどこから持ってきたのか明示的に書けばわかりやすい!**

---
# EXPORT_OK
- `@EXPORT`に詰めたシンボルは無条件でエクスポートされてしまう
- 対して`@EXPORT_OK`はデフォルトではすべてをロードせず、use時にインポートしたい関数名を書くことを強制させられる

```perl
use JSON qw(encode_json); # encode_jsonがインポートされる
```

- `@EXPORT`の場合も関数名を`use モジュール名`の後ろに列挙すると指定したもののみインポートできる
    - 空を指定すると何もインポートしない

```perl
use JSON qw(); # encode_jsonはインポートされないので使えない
```

---
# EXPORTのまとめ
- Perlはモジュールを`use`する時に、モジュールにimportがあれば実行する
- importには関数エクスポートがしばしば定義されていて、関数をインポートすると、モジュール側で定義した関数を呼び出したスクリプトファイル内で定義した様に使える
- しばしばどこで関数を定義したかわからなくなるので、`use`の際にインポートしたい関数名だけ列挙することができる

---
# perlimportsが解決したい課題
- **どの関数がどのモジュールによってエクスポートされてるかを明示的に書きたい!!**
    - **これをシステマティックにやってほしい!!**

---
# perlimportsとは
- perlのuse(モジュールロード)をいい感じにするのを助けてくれるツール
- CLIツールなので編集したいPerlファイルにたいして実行する
- 実行するとuseにコード中に使用している関数に対応する`qw()`指定を自動でつけてくれる

---
# 混沌としたコード

```perl
use MyPkg::One;
use MyPkg::Two;
use MyPkg::Three;
use MyPkg::Four;


f1();
f2();
MyPkg::Three->f3();
```
- f1はMyPkg::OneがEXPORTしているものを使っている
- f2はMyPkg::TwoがEXPORT_OKしているが、コード上は指定を忘れている→

---
# useしているモジュールの実装

```perl
package MyPkg::Two;

use strict;
use warnings;

use Exporter 'import';
our @EXPORT_OK = qw(f2);

sub f2 {
  print "f2\n";
}

1;
```
- f2はMyPkg::TwoがEXPORT_OKで宣言している
    - useするものを書かないとf2がインポートされない
    - 先程のコードではインポートしきれていないのでf2の実行で処理が止まってしまう

---
# perlimportsを使えば混沌としたコードも

```perl
use MyPkg::One;
use MyPkg::Two;
use MyPkg::Three;
use MyPkg::Four;


f1();
f2();
MyPkg::Three->f3();
```
- f1はMyPkg::OneがEXPORTしているものを使っている
- f2はMyPkg::TwoがEXPORT_OKしているが、コード上は指定を忘れている
- f3はフルパスで呼び出している
- `MyPkg::Four`はuseしているが特に使っていない

---
# perlimportsを使えば混沌としたコードも

```zsh
$ perlimports --libs lib --no-preserve-unused  main.pl
```

```perl
use MyPkg::One qw( f1 );
use MyPkg::Two qw( f2 );
use MyPkg::Three ();


f1();
f2();
MyPkg::Three->f3();
```
- `f1`, `f2`が適切にインポートされた
- 特に関数をインポートしない`MyPkg::Three`は`()`を指定するようになった
- 使用していない`MyPkg::Four`は`use`が消えた


---
# perlimportsのツラミポイント
- Class::Accessor::Liteなど、`import`を関数エクスポート以外に使っているケースのものは、明示的に無視するようにperlimportsに教える必要がある
    - 関数エクスポートしていないとみなされて `()`になってしまうケースが有る
    - 最近修正されつつあるので発生しないものもある

```perl
use Class::Accessor::Lite (
    rw => [qw/ hoge/],
);
```

```perl
use Class::Accessor::Lite ();
```

---
# 特定のモジュールを無視する方法
- 色々な方法で無視することが可能だが、最近出た正規表現で無視するモジュール名を指定する方法が便利
    - 無視するモジュール名の規則を書いたファイルをperlimportsにわたす

```zsh
$ perlimports --ignore-modules-pattern-filename ignore.txt hoge.pl
```

```perl
^Class
^Acme::AnaTofuZ
```


---
# perlimportsの思想
- 基本的にすべての関数エクスポートは明示的に行いたい
    - 関数エクスポートしないuseであるならば、絶対にエクスポートにしないように強制してくる

```perl
    use Acme::AnaTofuZ;
```
- これだとAcme::AnaTofuZ側が`@EXPORT`で宣言されていた場合何かをエクスポートしてくる可能性がある
    - ==> こんな感じに書き換えてくる

```perl
    use Acme::AnaTofuZ ();
```
- やろうとしてることはわかるけどなんか見た目がアレ...


---
# perlimportsまとめ
- いい感じにuseするのを助けてくれるツール
    - どこから来たかわからない関数を実行しなくて良いので使うのがおすすめ
    - 若干思想が強い癖はある
- 静的解析をして使用しているモジュールを特定している
- 👉 静的解析について見ていくぞ!!!

---
# 静的解析(おさらい)
- 静的(**コード実行することなしに**)、コード情報を解析する手法
    - コードに問題がないかを検出するlinterや、見た目をいい感じに整形するformatterなどはおおよそ何かしらの形で静的解析をしている
- 逆にコード実行してコード情報を解析する商法に「**動的解析**」がある
    - マルチスレッド環境におけるバグの発見などは動的解析のほうが望ましい

---
# 静的解析とPerl
- Perlの静的解析はめちゃくちゃ難しいとされている
    - >Nothing but perl can parse Perl
        - Perlのコードはperl(処理系)以外はパースできない
    - 静的解析するツールを作成するのが極めて困難
    - perl処理系が何かしらの静的解析で使いやすいAPIを提供している訳でもない

---
# ちなみに何でPerlの解析が難しいのか
- PPIのドキュメントにある例を見ると以下の状況
```perl
@result = (dothis $foo, $bar);
```
- Perlは関数呼び出しの`()`を省略できるので、`dothis`は何かしらの関数呼び出しである
- しかしこの記述だと次のどちらかに相当するのかパット見で判断つかない

```perl
@result = (dothis($foo), $bar);
@result = dothis($foo, $bar);
```

---
# なぜ判断つかないのか
```perl
@result = (dothis($foo), $bar);
@result = dothis($foo, $bar);
```

- 通常は関数呼び出しは後ろの引数をすべて取る
- Perlは関数プロトタイプ機能があり、引数を1つだけに成約することができる
- `BEGIN`ブロック内で何かしらの成約が追加されている可能性がある
    - 例えば特定の状況で`dothis`の実態を切り替えるなど
- はたまたまだ`dothis`が宣言されていない可能性がある
- ...むずい!!!

---
# 静的解析とPerl
- Perlの静的解析はめちゃくちゃ難しいとされている
    - >Nothing but perl can parse Perl
        - Perlのコードはperl(処理系)以外はパースできない
    - 静的解析するツールを作成するのが極めて困難
    - perl処理系が何かしらの静的解析で使いやすいAPIを提供している訳でもない
- **それでも先人がツールを作成しているので巨人の肩に乗るのが良い**
    - 今回はperlimportsが使っているPPIを見ていきます
    - 他にもPerlの静的解析ツールは色々生み出されています
    - ライブラリの特性などを見る場合はYAPC::Tokyoの発表がおすすめです
        - [Perl5の静的解析入門](https://speakerdeck.com/mackee/the-static-analysis-of-perl5)


---
# PPI
- Perlで書かれたperlインタプリタの助けなしに動作するPerlの静的解析ツール
- 2022/02/27現在の最新バージョンは1.272
- ソースコードはGitHubのPerl::Criticチームが持っている
    - https://github.com/Perl-Critic/PPI

---
# PPIの特徴
- Round Trip Safe(往復安全)
    - PPI <-> Perlの変換を何回繰り返しても同じ結果になる
        - 空白やコメントも含めてPPIがPerlスクリプトを解析した結果を保持する
- 大体のPerlプログラムを解析できる
    > At time of writing there are only 28 non-Acme Perl modules in CPAN that PPI is incapable of parsing.
    - 解析出来なかったものはそもそもぶっ壊れているモジュールだったとのこと

---
# PPIの構成
- 大きくPPI::TokenizerとPPI::Lexerで構成されている
    - 解析した結果はPerl Document Object Model(PDOM)として返る

## PDOM
- ソースコードを表現した木構造のPerlのオブジェクト
    - いわゆる抽象構文木に相当するもの
- Perlコードに対応する要素は`PPI::Element`として表現され、PDOMはその集合を持つ
- PDOMはあくまでPPIが作った解析用のオブジェクトモデル
    - perl処理系のオブジェクトモデルとは異なっている
- PPIを活用する場合基本はこのPDOMを取り回すことになる

---
# PDOMを眺める
- PPIにはPDOMを出力できるDumperが付随している
```perl
my $hoge = "hello";
```
- ソースコードの左側に表示されているのが対応する`PPI::Element`
- まとまりがインデントで表現されていると捉えればわかりやすい
```perl
PPI::Document
  PPI::Statement::Variable
    PPI::Token::Word    'my'
    PPI::Token::Whitespace      ' '
    PPI::Token::Symbol          '$hoge'
    PPI::Token::Whitespace      ' '
    PPI::Token::Operator        '='
    PPI::Token::Whitespace      ' '
    PPI::Token::Quote::Double   '"hello"'
    PPI::Token::Structure       ';'
  PPI::Token::Whitespace        '\n'
```

---

# PPI::Element
- Perlのコードに対応するPPI上の表現
- なんかいいかんじにコード情報にアクセスするインターフェイスが整っている
- 例えば`"hoge"`の様なダブルクォーテーションで囲われたなにかに対応する`PPI::Token::Quote::Double`がある


---

- 例えばPerlコード上の`"hoge"`に対応するElementを見てみる
    - `PPI::Token::Quote::Double->string`で中身を感じに文字列化することができる

```perl
my $quote_tokens = $doc->find(
    sub { $_[1]->isa('PPI::Token::Quote::Double') }
);


my $quote = $quote_tokens->[0];
say $quote->string; # hello
```

- PerlコードとPPI::Elementの対応がわかれば、 PPIのインターフェイスを通じてPerlのコード情報をPerlで操作することができる
    - 難しそうな静的解析も普段のPerlプログラミングのレイヤーに

---
# useに相当するPPI::Element
- `perlimports`は`use`をいい感じにするモジュール
    - `use`がPPI::Elementでどう表現されるかを把握しておくと何をやっているかがわかりやすい
- `PPI::Statement::Include`があり、以下の例はすべて`Statement::Include`として解釈される

```perl
use 5.006;
use strict;
use My::Module;
use constant FOO => 'Foo';
require Foo::Bar;
require "Foo/Bar.pm";
require $foo if 1;
no strict 'refs';
```

---
# use JSON;をPPI::Elementに
- 例えば次の特に何もインポートするシンボルを指定していないuseをPPI::Elementに変換してみる
```perl
use JSON;
```

- 1つめの`PPI::Token::Word`に`use`が格納されている
- ２つめの`PPI::Token::Word`にモジュール名が格納されている

```perl
PPI::Document
  PPI::Statement::Include
    PPI::Token::Word    'use'
    PPI::Token::Whitespace      ' '
    PPI::Token::Word    'JSON'
    PPI::Token::Structure       ';'
  PPI::Token::Whitespace        '\n'
```
---
# use JSON qw(encode_json);をPPI::Elementに
- `encode_json`を指定した状態でPPI::Elementに変換する
```perl
use JSON qw(encode_json);
```
- 2つめのWordの後ろに`QuoteLike::Words`がある
    - ここにインポートしたい関数の名前がある

```
PPI::Document
  PPI::Statement::Include
    PPI::Token::Word    'use'
    PPI::Token::Whitespace      ' '
    PPI::Token::Word    'JSON'
    PPI::Token::Whitespace      ' '
    PPI::Token::QuoteLike::Words        'qw(encode_json)'
    PPI::Token::Structure       ';'
  PPI::Token::Whitespace        '\n'
```
---
# use JSON qw(encode_json);をPPI::Elementに
- 何もインポートしない`()`を指定した状態でPPI::Elementに変換する
```perl
use JSON ();
```
- 2つめのWordの後ろに`Structure::List`がある
    - 今回のケースではその中身は空文字

```
PPI::Document
  PPI::Statement::Include
    PPI::Token::Word    'use'
    PPI::Token::Whitespace      ' '
    PPI::Token::Word    'JSON'
    PPI::Token::Whitespace      ' '
    PPI::Structure::List        ( ... )
    PPI::Token::Structure       ';'
  PPI::Token::Whitespace        '\n'
```
---
# PPI::Statement::Includeからたぐるモジュールuseの構成
- 以下の状況を満たすPDOMは`use`しているものであると判断できる
    - PPI::Statement::Includeのブロックであること
    - 最初の`PPI::Token::Word`が`use`であること
    - 次の`PPI::Token::Word`が呼び出すモジュール名であること
        - 指定がある場合で`qw`を使っていた場合は次に`PPI::Token::QuoteLike::Words`があり、なにか入っている
        - 素朴な`()`の場合は`PPI::Structure::List`が来ており、空白の場合は中身がないこと
    - ※ `use Exporter 'import';`など、`()`を使わないケースもあるので必ずしもこの条件が全てではない


---
# perlimportsの処理を眺める
- 実際に`use`を解析している箇所を眺めてみます
    - findメソッドで指定した条件に一致するPDOMを取り出す事ができる
    - これは`PPI::Statement::Include`でかつ`use`のものを指定している
        - 先程まで見ていたケースのPDOMを取り出す

```perl
sub _build_original_imports {
#...
    my $found = $self->ppi_document->find(
        sub {
            $_[1]->isa('PPI::Statement::Include')
                && !$_[1]->pragma     # no pragmas
                && !$_[1]->version    # Perl version requirement
                && $_[1]->type
                && $_[1]->type eq 'use';
        }
    ) || [];
```

---
# useを取り出してきた後は
- perlimportsは今現在どのモジュールが何をインポートしているかを把握する必要がある
    - 現状は、`モジュール名 => [インポートしているシンボル]`のhashrefを作る

- 入力されたコード
```perl
 use Carp;
 use Data::Dumper qw( Dumper );
 use POSIX ();
```

- perlimportsが作る内部データ構造
 ```perl
 {
     Carp => undef,
     'Data::Dumper' => ['Dumper'],
     POSIX => [],
 }
```

---
# useするモジュール名
- PPI::Statement::Documentのmoduleメソッドを使うと、useしているモジュール名が取得できる
    - `use Carp;`であれば `Carp`が取得できる

- 実際のperlimportsでモジュール名を取得している箇所
```perl
    for my $include ( @{$found} ) {
        my $pkg = $include->module;
```

---
# useする際に指定しているシンボル名

- PDOMでの表現を再度確認
```perl
use JSON qw(encode_json);
```
- 2つめのWordの後ろに`QuoteLike::Words`の中にシンボルがある
    - Wordsの中を見ていけばよい
```
PPI::Document
  PPI::Statement::Include
    PPI::Token::Word    'use'
    PPI::Token::Whitespace      ' '
    PPI::Token::Word    'JSON'
    PPI::Token::Whitespace      ' '
    PPI::Token::QuoteLike::Words        'qw(encode_json)'
    PPI::Token::Structure       ';'
  PPI::Token::Whitespace        '\n'
```

---
# useする際に指定しているシンボル名
- 気合でループしてシンボルを探している
    - よいですね

```perl
    for my $child ( $include->schildren ) {
        if ( $child->isa('PPI::Structure::List')
            && !defined $imports ) {
            $imports = [];
        }
        if (   !$child->isa('PPI::Token::QuoteLike::Words')
            && !$child->isa('PPI::Token::Quote::Single') ) {
            next;
        }
        my @imports = $child->literal;
        if ( defined $imports ) {
            push( @{$imports}, $child->literal );
        }
        else {
            $imports = [ $child->literal ];
        }
    }
    return $imports;
```
---
# 読める気になってきましたね?
- PPI::Documentとさえ仲良くなればいい感じにコードが読める...!!
    - あとは気合

---
# まとめ
- `use`をいい感じにするperlimportsがある
- perlimportsは静的解析ツールのPPIを使っている
- PPIはむずそうだが、PPI::Elementと仲良くなれば普通のPerlコード
    - PPIと仲良くなると最近のいいツールのコールドリーディングができる
