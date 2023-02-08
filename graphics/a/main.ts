import '../../src/graphics.css'
import Graphics from '../../src/Graphics.svelte'

const app = new Graphics({
  target: document.getElementById('app'),
  props: {
    mirrorId: 'A',
  },
})

export default app
