import '../../src/browser/graphics/graphics.css'
import Graphics from '../../src/browser/graphics/Graphics.svelte'

const app = new Graphics({
  target: document.getElementById('app'),
  props: {
    mirrorId: 'C',
  },
})

export default app
