export const siteTitle = "AnaTofuZ's page";

export const profile = {
  name: "Takahiro Shimizu",
  handle: "@AnaTofuZ",
  location: "甲府@山梨",
  photo: "/images/icon.png",
  socials: [
    { icon: "fab fa-github", url: "https://github.com/AnaTofuZ" },
    { icon: "fab fa-twitter", url: "https://twitter.com/AnaTofuZ" },
    { icon: "fab fa-facebook", url: "https://www.facebook.com/AnaTofuZ/" },
    { icon: "fas fa-envelope", url: "mailto:anatofuz@gmail.com" },
  ],
};

export const nav = [
  { label: "Home", url: "https://anatofuz.net" },
  { label: "Tech Blog", url: "https://anatofuz.hatenablog.com/" },
  { label: "Diary", url: "https://anatofuz.hatenadiary.com/" },
];

export const about =
  "沖縄でCbCやPerlを書いた後で京都でPerlでwebアプリケーションをやっていましたが、最近は山梨でRailsをしています";

export const experiences = [
  {
    role: "webアプリケーションエンジニア",
    entries: [
      {
        period: "2025/01/01 - 現在",
        company: "株式会社コードタクト",
        url: "https://codetakt.com/",
      },
      {
        period: "2021/04/01 - 2024/12/31",
        company: "株式会社はてな",
        url: "https://hatena.co.jp/",
      },
    ],
  },
];

export const education = [
  {
    degree: "修士(工学)",
    period: "2019 - 2021",
    school: "琉球大学大学院理工学研究科情報工学専攻",
  },
  { degree: "学部", period: "2015 - 2019", school: "琉球大学工学部情報工学科" },
];

export const projects = [
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

export const skills = [{ name: "Perl", percent: 70 }];

export const hobbies = [
  "プログラミング",
  "Perl考古学(Perl1.0, Perl2.0)",
  "Raku",
  "落語",
  "dlsiteで同人ゲーを買うこと",
];

export const links = [
  {
    name: "SpeakerDeck",
    url: "https://speakerdeck.com/AnaTofuZ",
    description: "登壇資料を置いています",
  },
  {
    name: "並列信頼研",
    url: "http://www.cr.ie.u-ryukyu.ac.jp/",
    description: "在籍している研究室です",
  },
  {
    name: "crgrowi",
    url: "https://growi.cr.ie.u-ryukyu.ac.jp/",
    description: "研究室のgrowiです",
  },
  {
    name: "雰囲気で構築するオレオレwebサイト",
    url: "https://www.anatofuz.net/work/gcpug/5/slide.html",
    description: "GCPUG in Okinawa!#5 での発表資料です",
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
