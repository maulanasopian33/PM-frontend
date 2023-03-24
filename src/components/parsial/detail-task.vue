<template>
    <div class="w-full md:flex">
      <div v-show="chatview" class="md:w-1/2 w-full flex-none">
        <chatroom  @statusview="detailview" :name="taskname" :avatar="avatar" :id_task="detail_idtask" :divisi="nameworkspace"></chatroom>
      </div>
      <div v-show="detailView" class="md:w-1/2 w-full bg-gray-900 text-white p-10 px-5 border-l-2 border-gray-600 h-full overflow-y-scroll">
        <div class="hidden max-sm:inline-flex  w-full h-12 text-white items-center px-2 justify-between">
          <div>
            <button class="hover:bg-gray-800 p-3 rounded-full" @click="$router.go(-1)">
              <svg class="fill-current" width="20px" height="20px" viewBox="0 0 1024 1024">
                <path
                  d="M222.927 580.115l301.354 328.512c24.354 28.708 20.825 71.724-7.883 96.078s-71.724 20.825-96.078-7.883L19.576 559.963a67.846 67.846 0 01-13.784-20.022 68.03 68.03 0 01-5.977-29.488l.001-.063a68.343 68.343 0 017.265-29.134 68.28 68.28 0 011.384-2.6 67.59 67.59 0 0110.102-13.687L429.966 21.113c25.592-27.611 68.721-29.247 96.331-3.656s29.247 68.721 3.656 96.331L224.088 443.784h730.46c37.647 0 68.166 30.519 68.166 68.166s-30.519 68.166-68.166 68.166H222.927z">
                </path>
              </svg>
            </button>
          </div>
          <div class="inline-flex">
            <button class="hover:bg-gray-800 p-3 rounded-full" @click="detailview(false)">
              <svg class="fill-current" width="30px" height="30px" viewBox="0 0 24 24">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21H16.5C17.8978 21 18.5967 21 19.1481 20.7716C19.8831 20.4672 20.4672 19.8831 20.7716 19.1481C21 18.5967 21 17.8978 21 16.5V12C21 7.02944 16.9706 3 12 3ZM8 11C8 10.4477 8.44772 10 9 10H15C15.5523 10 16 10.4477 16 11C16 11.5523 15.5523 12 15 12H9C8.44772 12 8 11.5523 8 11ZM11 15C11 14.4477 11.4477 14 12 14H15C15.5523 14 16 14.4477 16 15C16 15.5523 15.5523 16 15 16H12C11.4477 16 11 15.5523 11 15Z">
                </path>
              </svg>
            </button>
            <button class="hover:bg-gray-800 p-3 rounded-full relative">
              <svg class="fill-current" width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M19.3399 14.49L18.3399 12.83C18.1299 12.46 17.9399 11.76 17.9399 11.35V8.82C17.9399 6.47 16.5599 4.44 14.5699 3.49C14.0499 2.57 13.0899 2 11.9899 2C10.8999 2 9.91994 2.59 9.39994 3.52C7.44994 4.49 6.09994 6.5 6.09994 8.82V11.35C6.09994 11.76 5.90994 12.46 5.69994 12.82L4.68994 14.49C4.28994 15.16 4.19994 15.9 4.44994 16.58C4.68994 17.25 5.25994 17.77 5.99994 18.02C7.93994 18.68 9.97994 19 12.0199 19C14.0599 19 16.0999 18.68 18.0399 18.03C18.7399 17.8 19.2799 17.27 19.5399 16.58C19.7999 15.89 19.7299 15.13 19.3399 14.49Z">
                </path>
                <path
                  d="M14.8297 20.01C14.4097 21.17 13.2997 22 11.9997 22C11.2097 22 10.4297 21.68 9.87969 21.11C9.55969 20.81 9.31969 20.41 9.17969 20C9.30969 20.02 9.43969 20.03 9.57969 20.05C9.80969 20.08 10.0497 20.11 10.2897 20.13C10.8597 20.18 11.4397 20.21 12.0197 20.21C12.5897 20.21 13.1597 20.18 13.7197 20.13C13.9297 20.11 14.1397 20.1 14.3397 20.07C14.4997 20.05 14.6597 20.03 14.8297 20.01Z">
                </path>
              </svg>
              <span v-show="notif.status" class="top-0 left-7 absolute  text-xs w-5 h-5 bg-red-500 border-2 border-white dark:border-gray-800 rounded-full">{{ notif.length + 1 }}</span>
            </button>
          </div>
        </div>
        <div class="flex items-center">
          <h2 class="text-2xl font-bold px-3 py-1">{{ taskname }}</h2>
          <span class="bg-blue-500 px-3 rounded-md w-fit h-7 text-center mx-3">{{ detailpriority }}</span>
        </div>
        <p class="text-left text-sm p-3 bg-gray-800"> {{ taskdeskripsi }}</p>
        <div class="flex mt-8 gap-2">
          <div class="w-1/2 ">
            <span>Assigment</span>
            <select name="" id="" class=" p-4 w-full rounded-md bg-gray-800 text-white">
              <option v-for="item in taskassigment" :value="item">{{ item }}</option>
            </select>
          </div>
          <div class="w-1/2">
            <span>Due Date</span>
            <input :value="detailduedate" type="date" class="px-4 py-2 rounded-lg w-full bg-gray-800 text-white ">
          </div>
        </div>

        <!-- todo -->

        <div class="mt-3 text-left">
          <span class="px-4">To do List</span>
          <div class=" bg-gray-800 rounded-md text-white w-full h-auto  p-2">
            
            <!-- input new todo -->
            <div class="flex p-2">
              <input v-model="statustask" type="checkbox" value="1" class="w-5 rounded" >
              <input v-on:keyup.enter="pushtask()"  v-model="nameTask" type="text" class="ml-4 bg-gray-800 rounded-md text-white px-2 py-2 text-sm w-10/12" placeholder="new to do">
              
              <button class="ml-4 w-2/12" @click="pushtask()">
                <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M17 20.75H7C6.27065 20.75 5.57118 20.4603 5.05546 19.9445C4.53973 19.4288 4.25 18.7293 4.25 18V6C4.25 5.27065 4.53973 4.57118 5.05546 4.05546C5.57118 3.53973 6.27065 3.25 7 3.25H14.5C14.6988 3.25018 14.8895 3.32931 15.03 3.47L19.53 8C19.6707 8.14052 19.7498 8.33115 19.75 8.53V18C19.75 18.7293 19.4603 19.4288 18.9445 19.9445C18.4288 20.4603 17.7293 20.75 17 20.75ZM7 4.75C6.66848 4.75 6.35054 4.8817 6.11612 5.11612C5.8817 5.35054 5.75 5.66848 5.75 6V18C5.75 18.3315 5.8817 18.6495 6.11612 18.8839C6.35054 19.1183 6.66848 19.25 7 19.25H17C17.3315 19.25 17.6495 19.1183 17.8839 18.8839C18.1183 18.6495 18.25 18.3315 18.25 18V8.81L14.19 4.75H7Z"
                      fill="#1d582c"></path>
                    <path
                      d="M16.75 20H15.25V13.75H8.75V20H7.25V13.5C7.25 13.1685 7.3817 12.8505 7.61612 12.6161C7.85054 12.3817 8.16848 12.25 8.5 12.25H15.5C15.8315 12.25 16.1495 12.3817 16.3839 12.6161C16.6183 12.8505 16.75 13.1685 16.75 13.5V20Z"
                      fill="#1d582c"></path>
                    <path
                      d="M12.47 8.75H8.53001C8.3606 8.74869 8.19311 8.71403 8.0371 8.64799C7.88109 8.58195 7.73962 8.48582 7.62076 8.36511C7.5019 8.24439 7.40798 8.10144 7.34437 7.94443C7.28075 7.78741 7.24869 7.61941 7.25001 7.45V4H8.75001V7.25H12.25V4H13.75V7.45C13.7513 7.61941 13.7193 7.78741 13.6557 7.94443C13.592 8.10144 13.4981 8.24439 13.3793 8.36511C13.2604 8.48582 13.1189 8.58195 12.9629 8.64799C12.8069 8.71403 12.6394 8.74869 12.47 8.75Z"
                      fill="#1d582c"></path>
                  </g>
                </svg>
              </button>
            </div>
            <!-- todo item -->
            <div class="flex p-2" v-for="(item, index) in todo">
              <input @change="todochange($event,item.name)" :checked="item.status" type="checkbox" class="w-5 rounded" name="" id="">
              <span :class="'break-all ml-4 bg-gray-800 rounded-md text-white px-2 py-2 text-sm w-10/12'+ [item.status ? ' line-through' : '']">{{ item.name }}</span>
              <input hidden :value="item.name" type="text" class="ml-4 bg-gray-800 rounded-md text-white px-2 py-2 text-sm w-10/12" placeholder="new task">
              <!-- <input type="text" class="px-2 py-2 text-sm w-2/4" disabled :value="item.name"> -->
              <button class="ml-4 w-2/12" @click="deletetodo(item.name,index)">
                <svg fill="#e00000" width="25px" height="25px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                  stroke="#e00000">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M5.755,20.283,4,8H20L18.245,20.283A2,2,0,0,1,16.265,22H7.735A2,2,0,0,1,5.755,20.283ZM21,4H16V3a1,1,0,0,0-1-1H9A1,1,0,0,0,8,3V4H3A1,1,0,0,0,3,6H21a1,1,0,0,0,0-2Z">
                    </path>
                  </g>
                </svg>
              </button>
            </div>

            <!-- task item -->
          </div>
        </div>
        <!-- task -->
        <div class="flex max-sm:flex-col-reverse gap-6 mt-4">
          <div class="md:w-1/2 w-full">
            <div class="flex gap-5">
              <span class="w-2/3">Note</span>
              <span class="text-center px-4 bg-blue-700 rounded-md cursor-pointer">add</span>
            </div>
            <div class="bg-gray-800 rounded-md text-white w-full h-auto  p-2">
              a
            </div>
          </div>
          <div class="md:w-1/2 w-full">
            <span>attachment</span>
            <div class=" bg-gray-800 rounded-md text-white w-full h-auto  p-4 text-sm">
              <div class='flex justify-start px-4 cursor-pointer' v-for="attachment in attachments">
                <svg fill="#ffffff" width="20px" height="20px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M15.331 6H8.5v20h15V14.154h-8.169z"></path><path d="M18.153 6h-.009v5.342H23.5v-.002z"></path></g></svg>
                <a :href="url+ attachment.message" class="break-all px-4">{{ splitname(attachment.message)  }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>

import axios from 'axios';
import Echo from "laravel-echo"
import chatroom from '../base/chatroom.vue';
export default {
    name : 'detailtask',
    components : {
      chatroom
    },
    props : ['workspace'],
    data() {
      return {
        todo : [],
        notif : [],
        nameTask : '',
        me : '',
        url : process.env.VUE_APP_WEB,
        avatar : '',
        nameworkspace : '',
        taskname : '',
        taskdeskripsi : '',
        taskassigment : null,
        detailpriority : '',
        detailduedate : '',
        detail_idtask : '',
        statustask : 0,
        message : [],
        screenWidth: 0,
        attachments : [],
        detailView : true,
        chatview : true
      }
    },
    mounted() {
      this.decoder()
      this.getdatauser()
      this.screenWidth = window.innerWidth
      this.setview()
      window.addEventListener('resize', this.getWindowSize)
    },
    created() {
      
  	},
    methods: {
      splitname(data){
        return data.split('/')[3]
      },
      setview(){
        if(this.screenWidth < 640){
          this.chatview = false
          this.detailView = true
        }else{
          this.chatview = true
          this.detailView = true
        }
      },
      getWindowSize(){
        this.screenWidth = window.innerWidth
        this.setview()
      },
      detailview(data){
        if(data){
          this.chatview = false
          this.detailView = true
        }else{
          this.chatview = true
          this.detailView = false
        }
      },
      getchat(){
        let channel = 'chat-'+this.detail_idtask
        this.$echo.channel(channel).listen('chat', (e) => {
          // this.message.push({from : e.msg.from, msg : e.msg.message, reply : e.msg.reply,time : e.msg.time,type : e.msg.type});
          this.notif['status'] = true
          console.log(this.notif)
          this.gettodos()
          // this.pesan.push({
          // 	message: e.message,
          // });
        });
      },
      getchatdb() {
            axios.get(process.env.VUE_APP_BASE + '/chat/' + this.detail_idtask, {
                headers: {
                    "Authorization": `Bearer ${this.$cookies.get("login")}`
                },
            }).then(({ data }) => {
                this.attachments = data.data.filter(function (el) {
                  return el.type === "file";
                });
            }).catch((error) => {
                this.$alert(error.message, 'Error!', 'error');
            });
        },
      sendmsg(msg,from,time,type){
            let form = JSON.stringify({
                msg     : msg,
                from    : from,
                reply   : false,
                time    : new Date().toISOString().slice(0, 19).replace('T', ' '),
                type    : type
            })
            var config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: process.env.VUE_APP_BASE+'/chat/'+this.detail_idtask,
                headers: { 
                    "Authorization": `Bearer ${this.$cookies.get("login")}`,
                    "Content-Type": "application/json"
                },
                data : form
                };
            axios(config).then((response) => {
                this.txtchat = ''
            }).catch((error) => {
                this.$alert(error.message,'Error!','error');
            });
          },
      todochange(event,name){
        let formData = new FormData();
        formData.append("status", Number(event.target.checked));
        formData.append("name", name);
        axios.post(process.env.VUE_APP_BASE+'/todo/update',formData,{
            headers: {
                "Authorization": `Bearer ${this.$cookies.get("login")}`
            },
            }).then(({data}) => {
                // this.todo.splice(item, 1)
                let msg = '';
                if(event.target.checked){
                  msg = this.me + ' mengubah status todo ' +name+' selesai'
                }else{
                  msg = this.me + ' mengubah status todo ' +name+' belum selesai'
                }
                this.nameTasks = ''
                this.sendmsg(msg,'system','aaa','notif')
                this.$alert("", 'updated','success',{
                  confirmButtonText: 'OK',
                  showCancelButton: false,
                  showConfirmButton: false,
                  timer: 3000
                });
                
            }).catch((error) => {
                this.$alert(error.message,'Error!','error');
            });
      },
      deletetodo(item,index){
        this.$confirm('are you sure to delete '+item,"Are you sure?",'question').then(() => {
          axios.delete(process.env.VUE_APP_BASE+'/todo/'+item,{
            headers: {
                "Authorization": `Bearer ${this.$cookies.get("login")}`
            },
            }).then(({data}) => {
                this.todo.splice(index, 1)
                let msg = this.me + ' menghapus todo ' +item
                this.sendmsg(msg,'system','aaa','notif')
                this.$alert("", 'Deleted','success',{
                  confirmButtonText: 'OK',
                  showCancelButton: false,
                  showConfirmButton: false,
                  timer: 3000
                });
            }).catch((error) => {
                this.$alert(error.message,'Error!','error');
            });
        });
      },
      decoder(){
        let decode = atob(this.$route.params.workspace);
        let splitdetail = decode.split(','); 
        this.nameworkspace = splitdetail[0].toString();
        this.avatar = splitdetail[1].toString();
        // this.parsingtaskname = splitdetail[2].toString();
        this.getdatatask(splitdetail[2].toString())
        this.getchat()
        // this.avatar = splitdetail[1];
      },
      getdatauser(){
          axios.get(process.env.VUE_APP_BASE+'/whois',{
              headers: {
                  "Authorization": `Bearer ${this.$cookies.get("login")}`
              },
              }).then(({data}) => {
                  
                  this.me = data.name
              }).catch((error) => {
                this.$alert("", error.message,'error');
              });
      },
      getdatatask(data){
        axios.get(process.env.VUE_APP_BASE+'/task/bytask/'+data,{
          headers: {
              "Authorization": `Bearer ${this.$cookies.get("login")}`
          },
          }).then(({data}) => {
              this.taskname = data.data[0].name;
              // this.taskassigment = data.data[0].assigment.split(',');
              this.getassigment(data.data[0].assigment.split(','))
              this.detailpriority = data.data[0].priority
              this.detailduedate = data.data[0].due_date.split(' ')[0]
              this.detail_idtask = data.data[0].id_task
              this.taskdeskripsi = data.data[0].deskripsi

              this.gettodos()
              this.getchat()
              this.getchatdb()
              // this.assigmentdata = detaildata.assigment.split(',')
              // this.todo = data.data
          }).catch((error) => {
            this.$alert("", error.message,'error');
          });
      },
      getassigment(items){
        axios.get(process.env.VUE_APP_BASE+'/get-team',{
          headers: {
              "Authorization": `Bearer ${this.$cookies.get("login")}`
          },
          }).then(({data}) => {
              // console.log('datateam',data.data)
              // this.assigment = data.data.filter(function(e){
              //   return e.name !== selfdata
              // });
              let datas = [];
              items.forEach((item) => {
                datas.push(data.data.filter(function(e){
                  return e.id == item
                })[0].name)
              });
              this.taskassigment = datas
          }).catch((error) => {
            this.$alert("", error.message,'error');
              // console.log(error)
          });
      },
      pushtask(){
        let formData = new FormData();
        formData.append("id_task", this.detail_idtask);
        formData.append("name", this.nameTask);
        formData.append("status", Number(this.statustask));
        axios.post(process.env.VUE_APP_BASE+"/todo", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${this.$cookies.get("login")}`
        },
        }).then((response) => {
          this.todo.push({name : this.nameTask, status : this.statustask})
          this.$alert("", 'Success Create','success',{
                  confirmButtonText: 'OK',
                  showCancelButton: false,
                  showConfirmButton: false,
                  timer: 3000
                });
          let msg = this.me + ' membuat todo baru untuk task ' +this.taskname
          this.nameTask = ''
          this.statustask = false
          this.sendmsg(msg,'system','aaa','notif')
        }).catch((error) => {
          this.$alert(error.message,'Error!','error');
        });
      },
      gettodos(){
          axios.get(process.env.VUE_APP_BASE+'/todo/'+this.detail_idtask,{
              headers: {
                  "Authorization": `Bearer ${this.$cookies.get("login")}`
              },
              }).then(({data}) => {
                  // console.log(data)
                  this.todo = data
              }).catch((error) => {
                  // console.log(error)
                  this.$alert(error.message,'Error!','error');
              });
      },
    },
}
</script>