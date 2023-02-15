import GroupControl from '~/browser/dashboard/GroupControl.svelte'

const app = new GroupControl({
  target: document.getElementById('app'),
  props: {
    mirrorId: 'C',
  },
})

export default app
