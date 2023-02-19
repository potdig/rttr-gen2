import '~/browser/graphics/main-view.css'
import MainView from '~/browser/graphics/MainView.svelte'

const app = new MainView({
  target: document.getElementById('app'),
  props: {
    mirrorId: 'B',
  },
})

export default app
