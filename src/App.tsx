import './App.css'
import haruImage from './assets/haru.svg'

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
          <span>Default</span>
        </div>
        <div className="preview__canvas">
          <img
            className="preview__image"
            src={haruImage}
            alt="ハルくんの仮画像"
            width="160"
            height="160"
          />
        </div>
      </section>
    </main>
  )
}

export default App
