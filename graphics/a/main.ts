import '../../src/graphics/graphics.css'
import Graphics from '../../src/graphics/Graphics.svelte'

const app = new Graphics({
  target: document.getElementById('app'),
  props: {
    mirrorId: 'A',
  },
})

export default app
