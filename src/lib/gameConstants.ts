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
  [key: string]: { maxStar: number; position: number };
} = {
  リマ: {
    maxStar: 6,
    position: 105,
  },
  ミヤコ: {
    maxStar: 5,
    position: 125,
  },
  クウカ: {
    maxStar: 5,
    position: 130,
  },
  ジュン: {
    maxStar: 5,
    position: 135,
  },
  'ムイミ（ニューイヤー）': {
    maxStar: 5,
    position: 138,
  },
  'クウカ（オーエド）': {
    maxStar: 5,
    position: 140,
  },
  カオリ: {
    maxStar: 6,
    position: 145,
  },
  'サレン（クリスマス）': {
    maxStar: 5,
    position: 150,
  },
  'ツムギ（ハロウィン）': {
    maxStar: 5,
    position: 152,
  },
  'レイ（ニューイヤー）': {
    maxStar: 5,
    position: 153,
  },
  'リン（デレマス）': {
    maxStar: 5,
    position: 153.1,
  },
  ペコリーヌ: {
    maxStar: 6,
    position: 155,
  },
  'ペコリーヌ（プリンセス）': {
    maxStar: 5,
    position: 155.1,
  },
  ルカ: {
    maxStar: 5,
    position: 158,
  },
  'コッコロ（ニューイヤー）': {
    maxStar: 5,
    position: 159,
  },
  ノゾミ: {
    maxStar: 6,
    position: 160,
  },
  ムイミ: {
    maxStar: 5,
    position: 162,
  },
  'シズル（サマー）': {
    maxStar: 5,
    position: 163,
  },
  マコト: {
    maxStar: 5,
    position: 165,
  },
  'マコト（シンデレラ）': {
    maxStar: 5,
    position: 166,
  },
  カヤ: {
    maxStar: 5,
    position: 168,
  },
  'カヤ（タイムトラベル）': {
    maxStar: 5,
    position: 169,
  },
  'ヒヨリ（ニューイヤー）': {
    maxStar: 5,
    position: 170,
  },
  'リマ（シンデレラ）': {
    maxStar: 5,
    position: 173,
  },
  'ニノン（オーエド）': {
    maxStar: 5,
    position: 175,
  },
  アキノ: {
    maxStar: 6,
    position: 180,
  },
  'マコト（サマー）': {
    maxStar: 5,
    position: 180.1,
  },
  'ジュン（サマー）': {
    maxStar: 5,
    position: 182,
  },
  'クロエ（聖学祭）': {
    maxStar: 5,
    position: 184,
  },
  マツリ: {
    maxStar: 5,
    position: 185,
  },
  クロエ: {
    maxStar: 5,
    position: 185.1,
  },
  'マツリ（ハロウィン）': {
    maxStar: 5,
    position: 186,
  },
  'エリコ（バレンタイン）': {
    maxStar: 5,
    position: 187,
  },
  'アキノ（クリスマス）': {
    maxStar: 5,
    position: 189,
  },
  'アヤネ（クリスマス）': {
    maxStar: 5,
    position: 190,
  },
  'ルカ（サマー）': {
    maxStar: 5,
    position: 192,
  },
  ツムギ: {
    maxStar: 5,
    position: 195,
  },
  イノリ: {
    maxStar: 5,
    position: 197,
  },
  'ヒヨリ（プリンセス）': {
    maxStar: 5,
    position: 199,
  },
  ヒヨリ: {
    maxStar: 6,
    position: 200,
  },
  ミソギ: {
    maxStar: 6,
    position: 205,
  },
  アヤネ: {
    maxStar: 6,
    position: 210,
  },
  'ミソギ（ハロウィン）': {
    maxStar: 5,
    position: 212,
  },
  タマキ: {
    maxStar: 6,
    position: 215,
  },
  'タマキ（作業服）': {
    maxStar: 5,
    position: 216,
  },
  トモ: {
    maxStar: 5,
    position: 220,
  },
  チエル: {
    maxStar: 5,
    position: 222,
  },
  'チエル（聖学祭）': {
    maxStar: 5,
    position: 223,
  },
  'タマキ（サマー）': {
    maxStar: 5,
    position: 225,
  },
  エリコ: {
    maxStar: 5,
    position: 230,
  },
  'ペコリーヌ（サマー）': {
    maxStar: 5,
    position: 235,
  },
  クルミ: {
    maxStar: 6,
    position: 240,
  },
  ジータ: {
    maxStar: 6,
    position: 245,
  },
  'ペコリーヌ（ニューイヤー）': {
    maxStar: 5,
    position: 248,
  },
  レイ: {
    maxStar: 6,
    position: 250,
  },
  'イノリ（タイムトラベル）': {
    maxStar: 5,
    position: 252,
  },
  'イリヤ（クリスマス）': {
    maxStar: 5,
    position: 255,
  },
  'アンナ（サマー）': {
    maxStar: 5,
    position: 256,
  },
  'クリスティーナ（クリスマス）': {
    maxStar: 5,
    position: 265,
  },
  'ミフユ（作業服）': {
    maxStar: 5,
    position: 275,
  },
  シズル: {
    maxStar: 6,
    position: 285,
  },
  クリスティーナ: {
    maxStar: 5,
    position: 290,
  },
  'クルミ（クリスマス）': {
    maxStar: 5,
    position: 295,
  },
  'ツムギ（サマー）': {
    maxStar: 5,
    position: 355,
  },
  ミミ: {
    maxStar: 6,
    position: 360,
  },
  シノブ: {
    maxStar: 5,
    position: 365,
  },
  'ミミ（ハロウィン）': {
    maxStar: 5,
    position: 365.1,
  },
  シェフィ: {
    maxStar: 5,
    position: 368,
  },
  'ウヅキ（デレマス）': {
    maxStar: 5,
    position: 370,
  },
  'レイ（ハロウィン）': {
    maxStar: 5,
    position: 375,
  },
  'レイ（プリンセス）': {
    maxStar: 5,
    position: 377,
  },
  'シズル（バレンタイン）': {
    maxStar: 5,
    position: 385,
  },
  'マヒル（レンジャー）': {
    maxStar: 5,
    position: 390,
  },
  マヒル: {
    maxStar: 6,
    position: 395,
  },
  'トモ（マジカル）': {
    maxStar: 5,
    position: 402,
  },
  ユカリ: {
    maxStar: 6,
    position: 405,
  },
  'エリコ（サマー）': {
    maxStar: 5,
    position: 407,
  },
  'ユカリ（クリスマス）': {
    maxStar: 5,
    position: 408,
  },
  モニカ: {
    maxStar: 5,
    position: 410,
  },
  ニノン: {
    maxStar: 6,
    position: 415,
  },
  'ノゾミ（サマー）': {
    maxStar: 5,
    position: 417,
  },
  'ノゾミ（クリスマス）': {
    maxStar: 5,
    position: 418,
  },
  ミフユ: {
    maxStar: 6,
    position: 420,
  },
  'リン（レンジャー）': {
    maxStar: 5,
    position: 422,
  },
  イリヤ: {
    maxStar: 5,
    position: 425,
  },
  'カオリ（サマー）': {
    maxStar: 5,
    position: 425.1,
  },
  サレン: {
    maxStar: 6,
    position: 430,
  },
  アンナ: {
    maxStar: 5,
    position: 440,
  },
  'シノブ（ハロウィン）': {
    maxStar: 5,
    position: 440.1,
  },
  'ナナカ（サマー）': {
    maxStar: 5,
    position: 468,
  },
  'ミフユ（サマー）': {
    maxStar: 5,
    position: 495,
  },
  コッコロ: {
    maxStar: 6,
    position: 500,
  },
  'アユミ（ワンダー）': {
    maxStar: 5,
    position: 508,
  },
  アユミ: {
    maxStar: 5,
    position: 510,
  },
  'チカ（サマー）': {
    maxStar: 5,
    position: 520,
  },
  グレア: {
    maxStar: 5,
    position: 525,
  },
  'アオイ（作業服）': {
    maxStar: 5,
    position: 527,
  },
  'モニカ（マジカル）': {
    maxStar: 5,
    position: 528,
  },
  'アカリ（エンジェル）': {
    maxStar: 5,
    position: 530,
  },
  'ヨリ（エンジェル）': {
    maxStar: 5,
    position: 531,
  },
  'コッコロ（儀装束）': {
    maxStar: 5,
    position: 533,
  },
  'コッコロ（サマー）': {
    maxStar: 5,
    position: 535,
  },
  レム: {
    maxStar: 5,
    position: 540,
  },
  ラム: {
    maxStar: 5,
    position: 545,
  },
  リン: {
    maxStar: 5,
    position: 550,
  },
  'ミツキ（オーエド）': {
    maxStar: 5,
    position: 552,
  },
  'コッコロ（プリンセス）': {
    maxStar: 5,
    position: 555,
  },
  ラビリスタ: {
    maxStar: 5,
    position: 560,
  },
  'ネネカ（ニューイヤー）': {
    maxStar: 5,
    position: 562,
  },
  ミツキ: {
    maxStar: 5,
    position: 565,
  },
  'ハツネ（サマー）': {
    maxStar: 5,
    position: 567,
  },
  アカリ: {
    maxStar: 6,
    position: 570,
  },
  ヨリ: {
    maxStar: 6,
    position: 575,
  },
  'ユイ（儀装束）': {
    maxStar: 5,
    position: 578,
  },
  'サレン（サマー）': {
    maxStar: 5,
    position: 585,
  },
  'ミヤコ（ハロウィン）': {
    maxStar: 5,
    position: 590,
  },
  アリサ: {
    maxStar: 5,
    position: 625,
  },
  アン: {
    maxStar: 5,
    position: 630,
  },
  ルゥ: {
    maxStar: 5,
    position: 640,
  },
  'マホ（シンデレラ）': {
    maxStar: 5,
    position: 645,
  },
  ネネカ: {
    maxStar: 5,
    position: 660,
  },
  'アオイ（編入生）': {
    maxStar: 5,
    position: 680,
  },
  'キャル（ニューイヤー）': {
    maxStar: 5,
    position: 690,
  },
  'ミオ（デレマス）': {
    maxStar: 5,
    position: 695,
  },
  'ミサト（サマー）': {
    maxStar: 5,
    position: 697,
  },
  リノ: {
    maxStar: 6,
    position: 700,
  },
  スズナ: {
    maxStar: 5,
    position: 705,
  },
  'スズナ（サマー）': {
    maxStar: 5,
    position: 705.1,
  },
  シオリ: {
    maxStar: 5,
    position: 710,
  },
  'シオリ（マジカル）': {
    maxStar: 5,
    position: 712,
  },
  イオ: {
    maxStar: 5,
    position: 715,
  },
  'イオ（サマー）': {
    maxStar: 5,
    position: 715.1,
  },
  スズメ: {
    maxStar: 5,
    position: 720,
  },
  'スズメ（ニューイヤー）': {
    maxStar: 5,
    position: 722,
  },
  エミリア: {
    maxStar: 5,
    position: 725,
  },
  カスミ: {
    maxStar: 5,
    position: 730,
  },
  'カスミ（マジカル）': {
    maxStar: 5,
    position: 730.1,
  },
  'リノ（ワンダー）': {
    maxStar: 5,
    position: 730.2,
  },
  'ハツネ＆シオリ': {
    maxStar: 5,
    position: 732,
  },
  ミサト: {
    maxStar: 5,
    position: 735,
  },
  'カスミ（サマー）': {
    maxStar: 5,
    position: 738,
  },
  ナナカ: {
    maxStar: 5,
    position: 740,
  },
  'ユイ（ニューイヤー）': {
    maxStar: 5,
    position: 745,
  },
  'キャル（プリンセス）': {
    maxStar: 5,
    position: 747,
  },
  キャル: {
    maxStar: 6,
    position: 750,
  },
  ハツネ: {
    maxStar: 6,
    position: 755,
  },
  ミサキ: {
    maxStar: 5,
    position: 760,
  },
  ルナ: {
    maxStar: 5,
    position: 765,
  },
  'ユイ（プリンセス）': {
    maxStar: 5,
    position: 767,
  },
  'チカ（クリスマス）': {
    maxStar: 5,
    position: 770,
  },
  'スズメ（サマー）': {
    maxStar: 5,
    position: 775,
  },
  'キャル（サマー）': {
    maxStar: 5,
    position: 780,
  },
  アオイ: {
    maxStar: 6,
    position: 785,
  },
  チカ: {
    maxStar: 5,
    position: 790,
  },
  'マホ（サマー）': {
    maxStar: 5,
    position: 792,
  },
  マホ: {
    maxStar: 6,
    position: 795,
  },
  ユイ: {
    maxStar: 6,
    position: 800,
  },
  ユキ: {
    maxStar: 5,
    position: 805,
  },
  ユニ: {
    maxStar: 5,
    position: 807,
  },
  キョウカ: {
    maxStar: 6,
    position: 810,
  },
  'ミサキ（ハロウィン）': {
    maxStar: 5,
    position: 815,
  },
  'キョウカ（ハロウィン）': {
    maxStar: 5,
    position: 820,
  },
};
