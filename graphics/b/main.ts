import '../../src/app.css'
import App from '../../src/App.svelte'

const app = new App({
  target: document.getElementById('app'),
  props: {
    mirrorId: 'B',
  },
})

export default app
