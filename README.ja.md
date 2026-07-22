# Haru Cat — a tiny cat living in your website

Haru Catは、小さなオリジナルキャラクター「ハルくん」をWebサイトの下部に表示するためのReactコンポーネントです。

最初のリリースでは静止画像を表示します。
アニメーションや新しい振る舞いは、今後のバージョンで追加する予定です。

[English](./README.md)

## インストール

```sh
npm install haru-cat
```

Haru CatはReact 18およびReact 19に対応しています。

## 使用方法

```tsx
import { HaruCat } from 'haru-cat'

export default function App() {
  return <HaruCat position="bottom-right" size={120} />
}
```

初期状態では、ハルくんが画面の右下に表示されます。

```tsx
<HaruCat />
```

画面下部の左端または中央にも配置できます。

```tsx
<HaruCat position="bottom-left" />
<HaruCat position="bottom-center" />
```

## Props

| Prop | 型 | 初期値 | 説明 |
| --- | --- | --- | --- |
| `position` | `'bottom-left' \| 'bottom-center' \| 'bottom-right'` | `'bottom-right'` | 画面下部での表示位置です。 |
| `size` | `number` | `120` | 画像の幅と高さをピクセル単位で指定します。 |
| `offset` | `number` | `16` | 画面下端、および左右配置の場合は画面の端からの距離をピクセル単位で指定します。 |
| `zIndex` | `number` | `9999` | コンポーネントのCSS `z-index`です。 |
| `className` | `string` | `undefined` | 外側の要素に設定するクラス名です。 |

コンポーネントには`position: fixed`と`pointer-events: none`が設定されています。
そのため、ハルくんは画面下部に表示され続け、Webサイト上のボタンやリンク操作を妨げません。

## TypeScript

Propsと表示位置の型をパッケージから読み込めます。

```tsx
import type { HaruCatPosition, HaruCatProps } from 'haru-cat'
```

## 開発

```sh
npm install
npm run dev
```

コード検査、ライブラリのビルド、公開ファイルの確認には、次のコマンドを使用します。

```sh
npm run lint
npm run build
npm pack --dry-run
```

プロジェクトの方針と今後の計画は、[Design Notes](https://github.com/Colorful12/haru-cat/blob/main/docs/design-notes.md)にまとめています。

## 制作者

Haru Catの開発者は[taki](https://x.com/taki73_cat)です。

ハルくんの正式名称は「ジト目猫のハル」（英語表記：Gray Cat Haru）です。
キャラクターおよび画像の制作者は[73cat](https://x.com/73cat_mina)です。

## ライセンス

プログラムとキャラクター画像には、異なるライセンスが適用されます。

- Haru Catのプログラムの著作権者はtakiです（Copyright (c) 2026 taki）。プログラムには[MIT License](./LICENSE-CODE.md)が適用されます。
- 「ジト目猫のハル」のキャラクターおよび画像の著作権者は73catです（Copyright (c) 2026 73cat）。キャラクターおよび画像には、別途[キャラクターおよび画像ライセンス](./LICENSE-ASSETS.ja.md)が適用されます。

キャラクターおよび画像にはMIT Licenseは適用されません。
条件を満たす個人の非商用Webサイトでの利用は、クレジット表記を含む所定の条件のもとで許可されます。
画像単体の再配布、商品化、AI・機械学習での利用は禁止されています。
商用利用には、公開または本番利用の前に73catから明示的な許可を得る必要があります。

Haru Catの利用や再配布を行う前に、[ライセンス案内](./LICENSE.ja.md)の全文を確認してください。
英語版の[licensing overview](./LICENSE.md)も用意しています。
