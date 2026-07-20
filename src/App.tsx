import './App.css'
import { HaruCat } from './HaruCat'

function App() {
  return (
    <main className="playground">
      <header className="playground__header">
        <p className="playground__eyebrow">React component library</p>
        <h1>haru-cat</h1>
        <p className="playground__description">
          ハルくんの表示や Props の動作を確認するための開発画面です。
        </p>
      </header>

      <section className="preview" aria-labelledby="preview-title">
        <div className="preview__header">
          <h2 id="preview-title">Preview</h2>
          <span>size</span>
        </div>
        <div className="preview__canvas">
          <figure className="preview__example">
            <HaruCat />
            <figcaption>Default (120px)</figcaption>
          </figure>
          <figure className="preview__example">
            <HaruCat size={160} />
            <figcaption>size=160</figcaption>
          </figure>
        </div>
      </section>
    </main>
  )
}

export default App
