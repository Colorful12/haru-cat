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
          <span>Fixed position</span>
        </div>
        <div className="preview__canvas">
          <p className="preview__hint">
            ハルくんは画面右下に固定表示されています。
          </p>
        </div>
      </section>

      <HaruCat position="bottom-right" size={120} />
    </main>
  )
}

export default App
