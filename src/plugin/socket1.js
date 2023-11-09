
import { io } from "socket.io-client";
export default {
  methods: {
    socket(){
      return io(process.env.VUE_APP_WEBSOCKET,{
        transportOptions: {
          polling: {
            extraHeaders: {
              'Authorization': process.env.VUE_APP_BEARER,
            },
          },
        },
      })
    },
    joinroom(from){
      this.socket().emit('join',from, ()=>{})
      return "berhasil join"
    },
    // sendnotif(to){
    //   this.socket().emit()
    // }
  },
}