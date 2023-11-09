import Vue from 'vue';
import io from 'socket.io-client';

const socket = io(process.env.VUE_APP_WEBSOCKET, {
  transportOptions: {
    polling: {
      extraHeaders: {
        'Authorization': process.env.VUE_APP_BEARER,
      },
    },
  },
});

// Tambahkan fungsi-fungsi yang ingin Anda gunakan dari komponen Vue lainnya.
const socketPlugin = {
  install(Vue) {
    Vue.prototype.$socket = socket;
    Vue.prototype.$emitNotif = (data) => {
      socket.emit('sendMessage', data);
    };
    Vue.prototype.$joinroom = (data) => {
      socket.emit('join', data);
    };
    Vue.prototype.$onNotif = (callback) => {
        socket.on('receiveMessage',callback)
    }

    // Tambahkan fungsi lainnya di sini sesuai kebutuhan Anda.
  },
};

Vue.use(socketPlugin);
