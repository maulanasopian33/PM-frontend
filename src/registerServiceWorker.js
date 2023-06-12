/* eslint-disable no-console */

import { register } from 'register-service-worker'
import Echo from "laravel-echo"
import Pusher from 'pusher-js'
import axios  from 'axios'
import VueCookies from 'vue-cookies';
if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready () {
      // console.log(
      //   'App is being served from cache by a service worker.\n' +
      //   'For more details, visit https://goo.gl/AFskqB'
      // )
      // fetch(process.env.VUE_APP_BASE + '/whois',{
      //   headers: {
      //     'Authorization': `Bearer ${VueCookies.get("login")}`
      //   }})  
      // .then(function(res) {
      //   console.log(res.json());
      //  })

      

    },
    registered (sw) {
      // sw.showNotification('Notification with ServiceWorker')
      // console.log(sw)
      let myname = '';
      const getData = new Promise(function(resolve, reject) {
        fetch(process.env.VUE_APP_BASE + '/whois', {
          headers: {
            "Authorization": `Bearer ${VueCookies.get("login")}`
          },
        })
          .then(function(response) {
            if (response.ok) {
              return response.json();
            }
            throw new Error('Network response was not ok');
          })
          .then(function(data) {
            resolve(data);
          })
          .catch(function(error) {
            reject(error);
          });
      });

      getData.then(function(data) {
        window.Pusher = Pusher;
        window.Echo = new Echo({
          broadcaster: 'pusher',
          cluster :  'ap1',
          broadcaster: 'pusher',
          key: '94e6a87800b6adf547b1',
          cluster: 'ap1',
          forceTLS: true,
        });
        let channel = 'global-message'
        window.Echo.channel(channel).listen('GlobalMessage', (e) => {
          // this.message.push({from : e.msg.from, msg : e.msg.message, reply : e.msg.reply,time : e.msg.time,type : e.msg.type});
          if ('Notification' in window) {
            // cek apakah izin notifikasi telah diberikan
            if (Notification.permission === 'granted') {
              // tampilkan notifikasi
              if(e.from !== data.name){
                let messages = e.message
                let message = messages.split('/')
                sw.showNotification(message[1], {
                  body: message[0]
                })
                // new Notification(message[1], {
                //   body: message[0]
                // });
              }
            } else {
              // minta izin untuk menampilkan notifikasi
              Notification.requestPermission().then(function (permission) {
                // jika izin diberikan, tampilkan notifikasi
                if (permission === 'granted') {
                  if(e.from !== data.name){
                    let messages = e.message
                    let message = messages.split('/')
                    sw.showNotification(message[1], {
                      body: message[0]
                    })
                  }
                }
              });
            }
          }
        });
      }).catch(function(error) {
        console.error('There was a problem with the Promise:', error);
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
