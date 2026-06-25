import {
  faFacebook,
  faGithub,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const siteTitle = "AnaTofuZ's page";

export const profile = {
  name: "清水隆博",
  nameEn: "Takahiro Shimizu",
  handle: "@AnaTofuZ",
  location: "山梨県甲府市",
  photo: "/images/icon.png",
  socials: [
    { icon: faGithub, url: "https://github.com/AnaTofuZ" },
    { icon: faXTwitter, url: "https://x.com/AnaTofuZ" },
    { icon: faFacebook, url: "https://www.facebook.com/AnaTofuZ/" },
    { icon: faEnvelope, url: "mailto:anatofuz@gmail.com" },
  ],
};

export const nav = [
  { label: "Home", url: "https://anatofuz.net" },
  { label: "Talks", url: "/talks" },
  { label: "Tech Blog", url: "https://anatofuz.hatenablog.com/" },
  { label: "Diary", url: "https://anatofuz.hatenadiary.com/" },
];

export const careerTimeline = [
  {
    period: "2015 - 2019",
    title: "琉球大学工学部情報工学科",
    subtitle: "学士(工学)",
    type: "education" as const,
  },
  {
    period: "2019 - 2021",
    title: "琉球大学大学院理工学研究科情報工学専攻",
    subtitle: "修士(工学)",
    type: "education" as const,
  },
  {
    period: "2021/04 - 2024/12",
    title: "株式会社はてな",
    url: "https://hatena.co.jp/",
    subtitle: "webアプリケーションエンジニア (ノベルチーム)",
    type: "work" as const,
  },
  {
    period: "2025/01 - 2026/05",
    title: "株式会社コードタクト",
    url: "https://codetakt.com/",
    subtitle: "webアプリケーションエンジニア",
    type: "work" as const,
  },
  {
    period: "2026/06 - 現在",
    title: "Tebiki株式会社",
    url: "https://tebiki.co.jp/",
    subtitle: "webアプリケーションエンジニア",
    type: "work" as const,
  },
];

export const projects = [
  {
    name: "GraphQL::Houtou",
    url: "https://github.com/AnaTofuZ/GraphQL-Houtou",
    description:
      "高速なPerlのGraphQLフレームワーク",
  },
  {
    name: "ffccmmx",
    url: "https://github.com/AnaTofuZ/ffccmmx",
    description:
      "HTTP/2ベースで利用できるfcmのRubyクライアント",
  },
  {
    name: "宝灯桃汁3分タイマー",
    url: "https://mmj-timer-zero.anatofuz.net/",
    description:
      "宝灯桃汁の3分タイマー。コナミコマンドの隠し機能等あり",
  },
  {
    name: "うろ覚え宝灯桃汁スロットマシーン",
    url: "https://momojiruslot202504.anatofuz.net/",
    description:
      "宝灯桃汁の名前をうろ覚えで作れるスロットマシーン。Next.jsのSSGの練習",
  },
  {
    name: "Acme::MadokaMagica",
    url: "https://github.com/AnaTofuZ/perl-acme-MadokaMagica",
    description:
      "初めて作ったPerlモジュール。魔法少女まどか☆マギカの登場人物の情報が取得できます。",
  },
  {
    name: "琉球大学知能情報コース2020年新システム紹介",
    url: "https://ie.u-ryukyu.ac.jp/syskan/opening-introduction/",
    description:
      "修士2年のときにシステム管理チームとして、学科のシステムを構築しました",
  },
];

export const skills = [{ name: "Perl", percent: 70 }, { name: "Ruby", percent: 60 }];

export const hobbies = [
  "プログラミング",
  "Perl",
  "落語",
  "dlsiteで同人ゲーを買うこと",
  "バイク",
];

export const links = [
  {
    name: "SpeakerDeck",
    url: "https://speakerdeck.com/AnaTofuZ",
    description: "登壇資料を置いています",
  },
  {
    name: "Acme::AnaTofuZ",
    url: "https://anatofuz.hatenablog.com/",
    description: "技術ブログです",
  },
  {
    name: "Acme::AnaTofuZ::Scrapbox",
    url: "https://scrapbox.io/anatofuz/",
    description: "個人で使っている公開用のscrapboxです",
  },
];

export const talks = [
  {
    title: "Perl GraphQL 高速化バトル　2026年5月版",
    date: "2026-05-23",
    event: "湘.なんか #4",
    eventUrl: "https://shonanka.connpass.com/event/389138/",
    url: "https://speakerdeck.com/anatofuz/perl-graphql-gao-su-hua-batoru-2026nian-5yue-ban",
    thumbnail:
      "https://files.speakerdeck.com/presentations/3f6a4fb2142c41ee94ba56b28a1c590e/preview_slide_0.jpg",
  },
  {
    title: "k1LoW/deckのすすめ",
    date: "2025-08-31",
    event: "出張版！甲斐国もくもく会 in 北杜市",
    eventUrl: "https://kainokuni.connpass.com/event/354581/",
    url: "https://speakerdeck.com/anatofuz/decknosusume",
    thumbnail:
      "https://files.speakerdeck.com/presentations/6b019d8c02d142d5b3742cd2f3a751ed/preview_slide_0.jpg",
  },
  {
    title: "Perl1.0 Deep Drive 0.01",
    date: "2025-08-09",
    event: "ShizuokaTECH #1",
    eventUrl: "https://shizuoka-tech.connpass.com/event/350174/",
    url: "https://speakerdeck.com/anatofuz/perl1-dot-0-deep-drive-0-dot-01",
    thumbnail:
      "https://files.speakerdeck.com/presentations/608598428a184cdb9394e33b468e88ca/preview_slide_0.jpg",
  },
  {
    title: "Rubyの国のPerlMonger",
    date: "2025-08-02",
    event: "Hackers Champloo 2025",
    eventUrl: "https://hackers-champloo.connpass.com/event/360947/",
    url: "https://speakerdeck.com/anatofuz/rubynoguo-noperlmonger",
    thumbnail:
      "https://files.speakerdeck.com/presentations/a5ed05fd085b49cc9d6cf87bb19750d6/preview_slide_0.jpg",
  },
  {
    title: "Pythonで爆速でHello, World!する",
    date: "2025-05-24",
    event: "[Shingen.py] Pythonで学ぶKeycloakを用いたユーザー管理ハンズオン",
    eventUrl: "https://shingenpy.connpass.com/event/353887/",
    url: "https://speakerdeck.com/anatofuz/pythondebao-su-dehello-world-suru",
    thumbnail:
      "https://files.speakerdeck.com/presentations/15ff932a3f124266baf5394f519dd138/preview_slide_0.jpg",
  },
  {
    title: "思いつきで推しの誕生日記念コンテンツを2日で作る技術",
    date: "2025-04-27",
    event: "甲斐国もくもく会 x 山梨WordPress Meetup 〜春のLT大会〜",
    eventUrl: "https://kainokuni.connpass.com/event/345088/",
    url: "https://speakerdeck.com/anatofuz/si-itukidetui-sinodan-sheng-ri-ji-nian-kontentuwo2ri-dezuo-ruji-shu",
    thumbnail:
      "https://files.speakerdeck.com/presentations/accb4a815ae04fcb89b9cfb07377d84e/preview_slide_0.jpg",
  },
  {
    title: "AWSで雰囲気でつくる! VRChatの写真変換ピタゴラスイッチ",
    date: "2025-04-04",
    event: "JAWS-UG山梨 【第5回】勉強会",
    eventUrl: "https://jaws-ug-yamanashi.connpass.com/event/346675/",
    url: "https://speakerdeck.com/anatofuz/awsdefen-wei-qi-detukuru-vrchatnoxie-zhen-bian-huan-pitagorasuituti",
    thumbnail:
      "https://files.speakerdeck.com/presentations/c1c6a35df7094d6ea0d7d184096989bf/preview_slide_0.jpg",
  },
  {
    title: "ISUCON14 Perl実装の舞台裏",
    date: "2025-02-15",
    event: "湘.なんか #2",
    eventUrl: "https://shonanpm.connpass.com/event/340969/",
    url: "/work/2025/0215-syounanka/isucon.html",
    thumbnail: "/images/talks/isucon14-perl.jpg",
  },
  {
    title: "令和最新版 Perlコーディングガイド",
    date: "2024-10-05",
    event: "YAPC::Hakodate 2024",
    eventUrl: "https://yapcjapan.org/2024hakodate/",
    url: "https://speakerdeck.com/anatofuz/ling-he-zui-xin-ban-perlkodeingugaido",
    thumbnail:
      "https://files.speakerdeck.com/presentations/84680212be2945f89fbe7eba700be5c7/preview_slide_0.jpg",
  },
  {
    title: "rakulangで実装する! RubyVM",
    date: "2024-02-10",
    event: "YAPC::Hiroshima 2024",
    eventUrl: "https://yapcjapan.org/2024hiroshima/",
    url: "https://speakerdeck.com/anatofuz/rakulangdeshi-zhuang-suru-rubyvm",
    thumbnail:
      "https://files.speakerdeck.com/presentations/1d4ce430430f4c9d86fed4569dbe8fa2/preview_slide_0.jpg",
  },
  {
    title: "沖縄の大学で育った学生がエンジニアになるまで",
    date: "2023-10-06",
    event: "",
    url: "https://speakerdeck.com/anatofuz/chong-nawa-noda-xue-deyu-ttaxue-sheng-gaenzinianinarumade",
    thumbnail:
      "https://files.speakerdeck.com/presentations/b1a9a8e6e5d742cabfeaf8ff65fa9a01/preview_slide_0.jpg",
  },
  {
    title: "OpenAPI Generator Perl Clientでも型チューニングしたい!!",
    date: "2022-07-28",
    event: "吉祥寺.pm #30【オンライン】",
    eventUrl: "https://kichijojipm.connpass.com/event/254162/",
    url: "https://speakerdeck.com/anatofuz/openapi-generator-perl-clientdemoxing-tiyuningusitai",
    thumbnail:
      "https://files.speakerdeck.com/presentations/affed79dedcf455e88fdd8e7c79869c9/preview_slide_0.jpg",
  },
  {
    title: "perlimportsから探るPPIの世界",
    date: "2022-03-05",
    event: "YAPC::Japan::Online 2022",
    eventUrl: "https://yapcjapan.org/2022online/",
    url: "https://speakerdeck.com/anatofuz/perlimportskaratan-ruppifalseshi-jie",
    thumbnail:
      "https://files.speakerdeck.com/presentations/00130e0f14f742749c81bbf633abf08a/preview_slide_0.jpg",
  },
  {
    title: "GraphQLスキーマの設計で考えたこと",
    date: "2022-01-26",
    event: "Hatena Engineer Seminar #18",
    eventUrl: "https://hatena.connpass.com/event/235821/",
    url: "https://speakerdeck.com/anatofuz/graphqlsukimafalseshe-ji-dekao-etakoto",
    thumbnail:
      "https://files.speakerdeck.com/presentations/089b1b817ff54031af8438351b94b909/preview_slide_0.jpg",
  },
  {
    title: "インターネットアイドル目指して",
    date: "2020-05-03",
    event: "新入生歓迎LT大会 2020",
    url: "https://speakerdeck.com/anatofuz/intanetutoaidorumu-zhi-site",
    thumbnail:
      "https://files.speakerdeck.com/presentations/8a283ec2bf6f4a0982b0028d39949a31/preview_slide_0.jpg",
  },
  {
    title: "How to build traditional Perl interpreters.",
    date: "2019-08-08",
    event: "PerlCon 2019",
    eventUrl: "https://perlcon.eu/",
    url: "https://speakerdeck.com/anatofuz/how-to-build-traditional-perl-interpreters",
    thumbnail:
      "https://files.speakerdeck.com/presentations/188dad1494d24367b42b0d23b9e82b52/preview_slide_0.jpg",
  },
  {
    title: "レガシーPython散策",
    date: "2019-05-18",
    event: "PyConKyushu 2019",
    eventUrl: "https://kyushu.pycon.jp/2019/",
    url: "https://speakerdeck.com/anatofuz/regasipythonsan-ce",
    thumbnail:
      "https://files.speakerdeck.com/presentations/476eab534bc84e148258059029713247/preview_slide_0.jpg",
  },
  {
    title: "mv {C,Golang}- Perl1.0",
    date: "2019-01-26",
    event: "YAPC::Tokyo 2019",
    eventUrl: "https://yapcjapan.org/2019tokyo/",
    url: "https://speakerdeck.com/anatofuz/mv-c-golang-perl1-dot-0",
    thumbnail:
      "https://files.speakerdeck.com/presentations/a0afa7bdfc2641a6a5a30ef95d0da65e/preview_slide_0.jpg",
  },
  {
    title: "レガシーPerlビルド ~現代に蘇るPerl[1-2].0とPerl6~",
    date: "2019-01-26",
    event: "YAPC::Tokyo 2019",
    eventUrl: "https://yapcjapan.org/2019tokyo/",
    url: "https://speakerdeck.com/anatofuz/regasiperlbirudo-xian-dai-nisu-ruperl-1-2-dot-0toperl6",
    thumbnail:
      "https://files.speakerdeck.com/presentations/fcab33268e434ee180fdb58db9933717/preview_slide_0.jpg",
  },
  {
    title: "NQPとMoarVMと私",
    date: "2019-01-25",
    event: "YAPC::Tokyo 2019 前夜祭",
    eventUrl: "https://connpass.com/event/116310/",
    url: "https://speakerdeck.com/anatofuz/nqp-moarvm-anatofuz",
    thumbnail:
      "https://files.speakerdeck.com/presentations/ca05865d6efd4fb6a6f1c8b80d25e68c/preview_slide_0.jpg",
  },
  {
    title: "History from Perl 1.0 to Perl 6",
    date: "2018-09-14",
    event: "Roppongi.pm #1",
    eventUrl: "https://roppongipm.connpass.com/event/96924/",
    url: "https://speakerdeck.com/anatofuz/history-from-perl-1-dot-0-to-perl-6",
    thumbnail:
      "https://files.speakerdeck.com/presentations/b008b483c2b04a25b7670c31b91ef51f/preview_slide_0.jpg",
  },
  {
    title: "Okinawa.pm活動報告",
    date: "2018-06-30",
    event: "ハッカーズチャンプルー2018",
    url: "https://speakerdeck.com/anatofuz/hcmpl2018-okinawa-dot-pm",
    thumbnail:
      "https://files.speakerdeck.com/presentations/3db1a3bb2a5742b08a11b9ad875b5426/preview_slide_0.jpg",
  },
  {
    title: "雰囲気で構築するオレオレwebサイト",
    date: "2018-04-21",
    event: "GCPUG in Okinawa! #5",
    eventUrl: "https://okipug.connpass.com/event/80264/",
    url: "/work/gcpug/5/slide.html",
    thumbnail: "/images/talks/gcpug-okinawa-5.jpg",
  },
  {
    title: "Hello World ~我々は如何にしてプログラミングを学習していくべきか、その議論で見えた一筋の道標とは～",
    date: "2018-04-14",
    event: "新入生歓迎LT大会 2018",
    url: "https://speakerdeck.com/anatofuz/hello-world-wo-haru-he-nisitepuroguraminguwoxue-xi-site-ikubekika-sofalseyi-lun-dejian-eta-jin-falsedao-biao-toha",
    thumbnail:
      "https://files.speakerdeck.com/presentations/57d213e8b57d4b74832cf2fb521ccef2/preview_slide_0.jpg",
  },
  {
    title: "ドキドキPerl調査団 Part1",
    date: "2018-03-17",
    event: "Okinawa.pm #6",
    eventUrl: "https://okinawapm.connpass.com/event/81595/",
    url: "https://speakerdeck.com/anatofuz/dokidokiperldiao-cha-tuan-part1",
    thumbnail:
      "https://files.speakerdeck.com/presentations/f4cf16a14e9546f18a667f639a26ef2b/preview_slide_0.jpg",
  },
  {
    title: "実社会で使おう!! Acmeモジュール集",
    date: "2017-06-30",
    event: "YAPC::Fukuoka 前夜祭 LTソン",
    eventUrl: "https://yapcjapan.org/2017fukuoka/",
    url: "https://speakerdeck.com/anatofuz/shi-she-hui-deshi-ou-acmemoziyuruji",
    thumbnail:
      "https://files.speakerdeck.com/presentations/77076d83626f4a459f2f66fd6e30e739/preview_slide_0.jpg",
  },
  {
    title: "PerlMongerの生態について",
    date: "2017-04-01",
    event: "Okinawa.pm #4",
    eventUrl: "https://okinawapm.connpass.com/event/53409/",
    url: "https://speakerdeck.com/anatofuz/perlmongerfalsesheng-tai-nituite-okinawa-dot-pm-number-4",
    thumbnail:
      "https://files.speakerdeck.com/presentations/0bd988fef546481093b795183b46c785/preview_slide_0.jpg",
  },
  {
    title: "沖縄でPerlに入学したので勢いでLTしてみた",
    date: "2017-03-08",
    event: "YAPC::Kansai 2017 OSAKA",
    eventUrl: "https://yapcjapan.org/2017kansai/",
    url: "https://speakerdeck.com/anatofuz/chong-nawa-deperlniru-xue-sitafalsedeshi-ideltsitemita",
    thumbnail:
      "https://files.speakerdeck.com/presentations/db75056ab1db4876b3ee2f64f758bee4/preview_slide_0.jpg",
  },
];

export const redirects = [
  {
    path: "/momojiruslot202504/",
    to: "https://momojiruslot202504.anatofuz.net/",
    name: "momojiruslot202504",
  },
  {
    path: "/momojiru-2025-0906/",
    to: "https://momojiru-2025-0906.anatofuz.net/",
    name: "momojiru-2025-0906",
  },
  {
    path: "/mmj-timer-zero/",
    to: "https://mmj-timer-zero.anatofuz.net/",
    name: "mmj-timer-zero",
  },
];
