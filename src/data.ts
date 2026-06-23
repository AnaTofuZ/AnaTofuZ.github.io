import {
  faFacebook,
  faGithub,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const siteTitle = "AnaTofuZ's page";

export const profile = {
  name: "清水隆博　(Takahiro Shimizu)",
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
