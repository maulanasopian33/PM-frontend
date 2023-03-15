import Pusher from 'pusher-js'

const pusher = new Pusher(process.env.VUE_APP_PUSHERKEY, {
  cluster: process.env.VUE_APP_PUSHERCLUSTER
})

const PusherPlugin = {
  install(Vue) {
    Vue.prototype.$pusher = pusher
  }
}

export { pusher, PusherPlugin }
