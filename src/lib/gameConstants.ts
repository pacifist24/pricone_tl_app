export const MAX_RANK = 22;
export const MAX_LV = 211;
export const MAX_SPECIAL_LV = 220;
export const MAX_STAR = 6;
export const MAX_PHASE = 5;
export const MAX_DAMAGE = 999999999;

export const BOSSES_INFO = {
  アクアリオス: {},
  アルゲティ: {},
  オークチーフ: {},
  オブシダンワイバーン: {},
  オルレオン: {},
  カルキノス: {},
  グラットン: {},
  ゴブリングレート: {},
  サイクロプス: {},
  シードレイク: {},
  スカイワルキューレ: {},
  ソードコブラ: {},
  ダークガーゴイル: {},
  ツインピッグス: {},
  ティタノタートル: {},
  トライロッカー: {},
  トルペドン: {},
  ニードルクリーパー: {},
  ネプテリオン: {},
  バジリスク: {},
  'マスター・センリ': {},
  マダムプリズム: {},
  マッドベア: {},
  ミノタウロス: {},
  ムーバ: {},
  ムシュフシュ: {},
  メガラバーン: {},
  メサルティム: {},
  メデューサ: {},
  ライデン: {},
  ライライ: {},
  ランドスロース: {},
  レイスロード: {},
  レサトパルト: {},
  ワイバーン: {},
  ワイルドグリフォン: {},
};

export const CHARACTERS_INFO: {
  [key: string]: { maxStar: number; position: number; hasSpecial: boolean };
} = {
  リマ: {
    maxStar: 6,
    position: 105,
    hasSpecial: true,
  },
  ミヤコ: {
    maxStar: 5,
    position: 125,
    hasSpecial: true,
  },
  クウカ: {
    maxStar: 5,
    position: 130,
    hasSpecial: true,
  },
  ジュン: {
    maxStar: 5,
    position: 135,
    hasSpecial: true,
  },
  'ムイミ（ニューイヤー）': {
    maxStar: 5,
    position: 138,
    hasSpecial: false,
  },
  'クウカ（オーエド）': {
    maxStar: 5,
    position: 140,
    hasSpecial: true,
  },
  カオリ: {
    maxStar: 6,
    position: 145,
    hasSpecial: true,
  },
  'サレン（クリスマス）': {
    maxStar: 5,
    position: 150,
    hasSpecial: false,
  },
  'ツムギ（ハロウィン）': {
    maxStar: 5,
    position: 152,
    hasSpecial: false,
  },
  'レイ（ニューイヤー）': {
    maxStar: 5,
    position: 153,
    hasSpecial: true,
  },
  'リン（デレマス）': {
    maxStar: 5,
    position: 153.1,
    hasSpecial: true,
  },
  ペコリーヌ: {
    maxStar: 6,
    position: 155,
    hasSpecial: true,
  },
  'ペコリーヌ（プリンセス）': {
    maxStar: 5,
    position: 155.1,
    hasSpecial: false,
  },
  ルカ: {
    maxStar: 5,
    position: 158,
    hasSpecial: true,
  },
  'コッコロ（ニューイヤー）': {
    maxStar: 5,
    position: 159,
    hasSpecial: true,
  },
  ノゾミ: {
    maxStar: 6,
    position: 160,
    hasSpecial: true,
  },
  ムイミ: {
    maxStar: 5,
    position: 162,
    hasSpecial: true,
  },
  'シズル（サマー）': {
    maxStar: 5,
    position: 163,
    hasSpecial: false,
  },
  マコト: {
    maxStar: 5,
    position: 165,
    hasSpecial: true,
  },
  'マコト（シンデレラ）': {
    maxStar: 5,
    position: 166,
    hasSpecial: false,
  },
  カヤ: {
    maxStar: 5,
    position: 168,
    hasSpecial: true,
  },
  'カヤ（タイムトラベル）': {
    maxStar: 5,
    position: 169,
    hasSpecial: false,
  },
  'ヒヨリ（ニューイヤー）': {
    maxStar: 5,
    position: 170,
    hasSpecial: true,
  },
  'リマ（シンデレラ）': {
    maxStar: 5,
    position: 173,
    hasSpecial: false,
  },
  'ニノン（オーエド）': {
    maxStar: 5,
    position: 175,
    hasSpecial: true,
  },
  アキノ: {
    maxStar: 6,
    position: 180,
    hasSpecial: true,
  },
  'マコト（サマー）': {
    maxStar: 5,
    position: 180.1,
    hasSpecial: true,
  },
  'ジュン（サマー）': {
    maxStar: 5,
    position: 182,
    hasSpecial: true,
  },
  'クロエ（聖学祭）': {
    maxStar: 5,
    position: 184,
    hasSpecial: false,
  },
  マツリ: {
    maxStar: 5,
    position: 185,
    hasSpecial: true,
  },
  クロエ: {
    maxStar: 5,
    position: 185.1,
    hasSpecial: true,
  },
  'マツリ（ハロウィン）': {
    maxStar: 5,
    position: 186,
    hasSpecial: false,
  },
  'エリコ（バレンタイン）': {
    maxStar: 5,
    position: 187,
    hasSpecial: true,
  },
  'アキノ（クリスマス）': {
    maxStar: 5,
    position: 189,
    hasSpecial: false,
  },
  'アヤネ（クリスマス）': {
    maxStar: 5,
    position: 190,
    hasSpecial: true,
  },
  'ルカ（サマー）': {
    maxStar: 5,
    position: 192,
    hasSpecial: true,
  },
  ツムギ: {
    maxStar: 5,
    position: 195,
    hasSpecial: true,
  },
  イノリ: {
    maxStar: 5,
    position: 197,
    hasSpecial: true,
  },
  'ヒヨリ（プリンセス）': {
    maxStar: 5,
    position: 199,
    hasSpecial: false,
  },
  ヒヨリ: {
    maxStar: 6,
    position: 200,
    hasSpecial: true,
  },
  ミソギ: {
    maxStar: 6,
    position: 205,
    hasSpecial: true,
  },
  アヤネ: {
    maxStar: 6,
    position: 210,
    hasSpecial: true,
  },
  'ミソギ（ハロウィン）': {
    maxStar: 5,
    position: 212,
    hasSpecial: true,
  },
  タマキ: {
    maxStar: 6,
    position: 215,
    hasSpecial: true,
  },
  'タマキ（作業服）': {
    maxStar: 5,
    position: 216,
    hasSpecial: false,
  },
  トモ: {
    maxStar: 5,
    position: 220,
    hasSpecial: true,
  },
  チエル: {
    maxStar: 5,
    position: 222,
    hasSpecial: true,
  },
  'チエル（聖学祭）': {
    maxStar: 5,
    position: 223,
    hasSpecial: false,
  },
  'タマキ（サマー）': {
    maxStar: 5,
    position: 225,
    hasSpecial: true,
  },
  エリコ: {
    maxStar: 5,
    position: 230,
    hasSpecial: true,
  },
  'ペコリーヌ（サマー）': {
    maxStar: 5,
    position: 235,
    hasSpecial: true,
  },
  クルミ: {
    maxStar: 6,
    position: 240,
    hasSpecial: true,
  },
  ジータ: {
    maxStar: 6,
    position: 245,
    hasSpecial: true,
  },
  'ペコリーヌ（ニューイヤー）': {
    maxStar: 5,
    position: 248,
    hasSpecial: true,
  },
  レイ: {
    maxStar: 6,
    position: 250,
    hasSpecial: true,
  },
  'イノリ（タイムトラベル）': {
    maxStar: 5,
    position: 252,
    hasSpecial: false,
  },
  'イリヤ（クリスマス）': {
    maxStar: 5,
    position: 255,
    hasSpecial: true,
  },
  'アンナ（サマー）': {
    maxStar: 5,
    position: 256,
    hasSpecial: true,
  },
  'クリスティーナ（クリスマス）': {
    maxStar: 5,
    position: 265,
    hasSpecial: true,
  },
  'ミフユ（作業服）': {
    maxStar: 5,
    position: 275,
    hasSpecial: false,
  },
  シズル: {
    maxStar: 6,
    position: 285,
    hasSpecial: true,
  },
  クリスティーナ: {
    maxStar: 5,
    position: 290,
    hasSpecial: true,
  },
  'クルミ（クリスマス）': {
    maxStar: 5,
    position: 295,
    hasSpecial: true,
  },
  'ツムギ（サマー）': {
    maxStar: 5,
    position: 355,
    hasSpecial: false,
  },
  ミミ: {
    maxStar: 6,
    position: 360,
    hasSpecial: true,
  },
  シノブ: {
    maxStar: 5,
    position: 365,
    hasSpecial: true,
  },
  'ミミ（ハロウィン）': {
    maxStar: 5,
    position: 365.1,
    hasSpecial: true,
  },
  シェフィ: {
    maxStar: 5,
    position: 368,
    hasSpecial: false,
  },
  'ウヅキ（デレマス）': {
    maxStar: 5,
    position: 370,
    hasSpecial: true,
  },
  'レイ（ハロウィン）': {
    maxStar: 5,
    position: 375,
    hasSpecial: false,
  },
  'レイ（プリンセス）': {
    maxStar: 5,
    position: 377,
    hasSpecial: false,
  },
  'シズル（バレンタイン）': {
    maxStar: 5,
    position: 385,
    hasSpecial: true,
  },
  'マヒル（レンジャー）': {
    maxStar: 5,
    position: 390,
    hasSpecial: true,
  },
  マヒル: {
    maxStar: 6,
    position: 395,
    hasSpecial: true,
  },
  'トモ（マジカル）': {
    maxStar: 5,
    position: 402,
    hasSpecial: false,
  },
  ユカリ: {
    maxStar: 6,
    position: 405,
    hasSpecial: true,
  },
  'エリコ（サマー）': {
    maxStar: 5,
    position: 407,
    hasSpecial: false,
  },
  'ユカリ（クリスマス）': {
    maxStar: 5,
    position: 408,
    hasSpecial: false,
  },
  モニカ: {
    maxStar: 5,
    position: 410,
    hasSpecial: true,
  },
  ニノン: {
    maxStar: 6,
    position: 415,
    hasSpecial: true,
  },
  'ノゾミ（サマー）': {
    maxStar: 5,
    position: 417,
    hasSpecial: false,
  },
  'ノゾミ（クリスマス）': {
    maxStar: 5,
    position: 418,
    hasSpecial: true,
  },
  ミフユ: {
    maxStar: 6,
    position: 420,
    hasSpecial: true,
  },
  'リン（レンジャー）': {
    maxStar: 5,
    position: 422,
    hasSpecial: true,
  },
  イリヤ: {
    maxStar: 5,
    position: 425,
    hasSpecial: true,
  },
  'カオリ（サマー）': {
    maxStar: 5,
    position: 425.1,
    hasSpecial: true,
  },
  サレン: {
    maxStar: 6,
    position: 430,
    hasSpecial: true,
  },
  アンナ: {
    maxStar: 5,
    position: 440,
    hasSpecial: true,
  },
  'シノブ（ハロウィン）': {
    maxStar: 5,
    position: 440.1,
    hasSpecial: true,
  },
  'ナナカ（サマー）': {
    maxStar: 5,
    position: 468,
    hasSpecial: true,
  },
  'ミフユ（サマー）': {
    maxStar: 5,
    position: 495,
    hasSpecial: true,
  },
  コッコロ: {
    maxStar: 6,
    position: 500,
    hasSpecial: true,
  },
  'アユミ（ワンダー）': {
    maxStar: 5,
    position: 508,
    hasSpecial: true,
  },
  アユミ: {
    maxStar: 5,
    position: 510,
    hasSpecial: true,
  },
  'チカ（サマー）': {
    maxStar: 5,
    position: 520,
    hasSpecial: false,
  },
  グレア: {
    maxStar: 5,
    position: 525,
    hasSpecial: true,
  },
  'アオイ（作業服）': {
    maxStar: 5,
    position: 527,
    hasSpecial: false,
  },
  'モニカ（マジカル）': {
    maxStar: 5,
    position: 528,
    hasSpecial: false,
  },
  'アカリ（エンジェル）': {
    maxStar: 5,
    position: 530,
    hasSpecial: true,
  },
  'ヨリ（エンジェル）': {
    maxStar: 5,
    position: 531,
    hasSpecial: true,
  },
  'コッコロ（儀装束）': {
    maxStar: 5,
    position: 533,
    hasSpecial: false,
  },
  'コッコロ（サマー）': {
    maxStar: 5,
    position: 535,
    hasSpecial: true,
  },
  レム: {
    maxStar: 5,
    position: 540,
    hasSpecial: true,
  },
  ラム: {
    maxStar: 5,
    position: 545,
    hasSpecial: true,
  },
  リン: {
    maxStar: 5,
    position: 550,
    hasSpecial: true,
  },
  'ミツキ（オーエド）': {
    maxStar: 5,
    position: 552,
    hasSpecial: false,
  },
  'コッコロ（プリンセス）': {
    maxStar: 5,
    position: 555,
    hasSpecial: false,
  },
  ラビリスタ: {
    maxStar: 5,
    position: 560,
    hasSpecial: false,
  },
  'ネネカ（ニューイヤー）': {
    maxStar: 5,
    position: 562,
    hasSpecial: false,
  },
  ミツキ: {
    maxStar: 5,
    position: 565,
    hasSpecial: true,
  },
  'ハツネ（サマー）': {
    maxStar: 5,
    position: 567,
    hasSpecial: true,
  },
  アカリ: {
    maxStar: 6,
    position: 570,
    hasSpecial: true,
  },
  ヨリ: {
    maxStar: 6,
    position: 575,
    hasSpecial: true,
  },
  'ユイ（儀装束）': {
    maxStar: 5,
    position: 578,
    hasSpecial: false,
  },
  'サレン（サマー）': {
    maxStar: 5,
    position: 585,
    hasSpecial: true,
  },
  'ミヤコ（ハロウィン）': {
    maxStar: 5,
    position: 590,
    hasSpecial: true,
  },
  アリサ: {
    maxStar: 5,
    position: 625,
    hasSpecial: true,
  },
  アン: {
    maxStar: 5,
    position: 630,
    hasSpecial: true,
  },
  ルゥ: {
    maxStar: 5,
    position: 640,
    hasSpecial: true,
  },
  'マホ（シンデレラ）': {
    maxStar: 5,
    position: 645,
    hasSpecial: false,
  },
  ネネカ: {
    maxStar: 5,
    position: 660,
    hasSpecial: true,
  },
  'アオイ（編入生）': {
    maxStar: 5,
    position: 680,
    hasSpecial: true,
  },
  'キャル（ニューイヤー）': {
    maxStar: 5,
    position: 690,
    hasSpecial: false,
  },
  'ミオ（デレマス）': {
    maxStar: 5,
    position: 695,
    hasSpecial: true,
  },
  'ミサト（サマー）': {
    maxStar: 5,
    position: 697,
    hasSpecial: true,
  },
  リノ: {
    maxStar: 6,
    position: 700,
    hasSpecial: true,
  },
  スズナ: {
    maxStar: 5,
    position: 705,
    hasSpecial: true,
  },
  'スズナ（サマー）': {
    maxStar: 5,
    position: 705.1,
    hasSpecial: true,
  },
  シオリ: {
    maxStar: 5,
    position: 710,
    hasSpecial: true,
  },
  'シオリ（マジカル）': {
    maxStar: 5,
    position: 712,
    hasSpecial: true,
  },
  イオ: {
    maxStar: 5,
    position: 715,
    hasSpecial: true,
  },
  'イオ（サマー）': {
    maxStar: 5,
    position: 715.1,
    hasSpecial: true,
  },
  スズメ: {
    maxStar: 5,
    position: 720,
    hasSpecial: true,
  },
  'スズメ（ニューイヤー）': {
    maxStar: 5,
    position: 722,
    hasSpecial: true,
  },
  エミリア: {
    maxStar: 5,
    position: 725,
    hasSpecial: true,
  },
  カスミ: {
    maxStar: 5,
    position: 730,
    hasSpecial: true,
  },
  'カスミ（マジカル）': {
    maxStar: 5,
    position: 730.1,
    hasSpecial: true,
  },
  'リノ（ワンダー）': {
    maxStar: 5,
    position: 730.2,
    hasSpecial: true,
  },
  'ハツネ＆シオリ': {
    maxStar: 5,
    position: 732,
    hasSpecial: false,
  },
  ミサト: {
    maxStar: 5,
    position: 735,
    hasSpecial: true,
  },
  'カスミ（サマー）': {
    maxStar: 5,
    position: 738,
    hasSpecial: true,
  },
  ナナカ: {
    maxStar: 5,
    position: 740,
    hasSpecial: true,
  },
  'ユイ（ニューイヤー）': {
    maxStar: 5,
    position: 745,
    hasSpecial: true,
  },
  'キャル（プリンセス）': {
    maxStar: 5,
    position: 747,
    hasSpecial: false,
  },
  キャル: {
    maxStar: 6,
    position: 750,
    hasSpecial: true,
  },
  ハツネ: {
    maxStar: 6,
    position: 755,
    hasSpecial: true,
  },
  ミサキ: {
    maxStar: 5,
    position: 760,
    hasSpecial: true,
  },
  ルナ: {
    maxStar: 5,
    position: 765,
    hasSpecial: true,
  },
  'ユイ（プリンセス）': {
    maxStar: 5,
    position: 767,
    hasSpecial: false,
  },
  'チカ（クリスマス）': {
    maxStar: 5,
    position: 770,
    hasSpecial: true,
  },
  'スズメ（サマー）': {
    maxStar: 5,
    position: 775,
    hasSpecial: true,
  },
  'キャル（サマー）': {
    maxStar: 5,
    position: 780,
    hasSpecial: true,
  },
  アオイ: {
    maxStar: 6,
    position: 785,
    hasSpecial: true,
  },
  チカ: {
    maxStar: 5,
    position: 790,
    hasSpecial: true,
  },
  'マホ（サマー）': {
    maxStar: 5,
    position: 792,
    hasSpecial: true,
  },
  マホ: {
    maxStar: 6,
    position: 795,
    hasSpecial: true,
  },
  ユイ: {
    maxStar: 6,
    position: 800,
    hasSpecial: true,
  },
  ユキ: {
    maxStar: 5,
    position: 805,
    hasSpecial: true,
  },
  ユニ: {
    maxStar: 5,
    position: 807,
    hasSpecial: true,
  },
  キョウカ: {
    maxStar: 6,
    position: 810,
    hasSpecial: true,
  },
  'ミサキ（ハロウィン）': {
    maxStar: 5,
    position: 815,
    hasSpecial: true,
  },
  'キョウカ（ハロウィン）': {
    maxStar: 5,
    position: 820,
    hasSpecial: true,
  },
};
