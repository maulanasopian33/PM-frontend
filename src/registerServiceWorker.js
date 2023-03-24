/* eslint-disable no-console */

import { register } from 'register-service-worker'
import Echo from "laravel-echo"
if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready () {
      // console.log(
      //   'App is being served from cache by a service worker.\n' +
      //   'For more details, visit https://goo.gl/AFskqB'
      // )
    },
    registered () {
      console.log('Service worker has been registered.')
      let myname = '';
      axios.get(process.env.VUE_APP_BASE + '/whois', {
        headers: {
          "Authorization": `Bearer ${this.$cookies.get("login")}`
        },
      }).then(({ data }) => {
        myname = data.name
        window.Pusher = Pusher;
        window.Echo = new Echo({
          broadcaster: 'pusher',
          cluster: 'ap1',
          key: '94e6a87800b6adf547b1' //Add your pusher key here
        });
        let channel = 'global-message'
        window.Echo.channel(channel).listen('GlobalMessage', (e) => {
          // this.message.push({from : e.msg.from, msg : e.msg.message, reply : e.msg.reply,time : e.msg.time,type : e.msg.type});
          console.log(e)
          if ('Notification' in window) {
            // cek apakah izin notifikasi telah diberikan
            if (Notification.permission === 'granted') {
              // tampilkan notifikasi
              if(e.from !== myname){
                new Notification(e.from, {
                  body: e.message
                });
              }
            } else {
              // minta izin untuk menampilkan notifikasi
              Notification.requestPermission().then(function (permission) {
                // jika izin diberikan, tampilkan notifikasi
                if (permission === 'granted') {
                  if(e.from !== myname){
                    new Notification(e.from, {
                      body: e.message
                    });
                  }
                }
              });
            }
          }
        });
      }).catch((error) => {
        // this.$alert(error.message, 'Error!', 'error');
      });
      
    },
    cached () {
      // console.log('Content has been cached for offline use.')
    },
    updatefound () {
      // console.log('New content is downloading.')
    },
    updated () {
      // console.log('New content is available; please refresh.')
    },
    offline () {
      // console.log('No internet connection found. App is running in offline mode.')
    },
    error (error) {
      // console.error('Error during service worker registration:', error)
    }
  })
}
