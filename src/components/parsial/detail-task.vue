<template>
    <div class="w-full md:flex">
      <div class="md:w-1/2 w-full flex-none">
        <chatroom :name="taskname" :avatar="avatar" :id_task="detail_idtask" :divisi="nameworkspace"></chatroom>
      </div>
      <div class="md:w-1/2 w-full bg-gray-900 text-white p-10 px-5 border-l-2 border-gray-600">

        <div class="flex">
          <h2 class="text-2xl font-bold px-3 py-1">{{ taskname }}</h2>
          <span class="bg-blue-500 px-3 rounded-md w-fit h-7 text-center mx-3">{{ detailpriority }}</span>
          <span class=" px-3 rounded-md w-8 h-7 text-center">V</span>
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
        <div class="flex gap-6 mt-4">
          <div class="w-1/2">
            <div class="flex gap-5">
              <span class="w-2/3">Note</span>
              <span class="text-center px-4 bg-blue-700 rounded-md cursor-pointer">add</span>
            </div>
            <div class="bg-gray-800 rounded-md text-white w-full h-auto  p-2">
              a
            </div>
          </div>
          <div class="w-1/2">
            <span>attachment</span>
            <div class=" bg-gray-800 rounded-md text-white w-full h-auto  p-4 text-sm">
              <div class='inline-flex'>
                <svg fill="#ffffff" width="20px" height="20px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M15.331 6H8.5v20h15V14.154h-8.169z"></path><path d="M18.153 6h-.009v5.342H23.5v-.002z"></path></g></svg>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
              <div class='inline-flex'>
                <svg fill="#ffffff" width="20px" height="20px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M15.331 6H8.5v20h15V14.154h-8.169z"></path><path d="M18.153 6h-.009v5.342H23.5v-.002z"></path></g></svg>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
              <div class='inline-flex'>
                <svg fill="#ffffff" width="20px" height="20px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M15.331 6H8.5v20h15V14.154h-8.169z"></path><path d="M18.153 6h-.009v5.342H23.5v-.002z"></path></g></svg>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>

import axios from 'axios';
import { process } from 'ipaddr.js';
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
        nameTask : '',
        me : '',
        avatar : '',
        nameworkspace : '',
        taskname : '',
        taskdeskripsi : '',
        taskassigment : null,
        detailpriority : '',
        detailduedate : '',
        detail_idtask : '',
        statustask : 0,
        message : []
      }
    },
    mounted() {
      this.decoder()
      this.getdatauser()
    },
    created() {
      
  	},
    methods: {
      getchat(){
        let channel = 'chat-'+this.detail_idtask
        this.$echo.channel(channel).listen('chat', (e) => {
          // this.message.push({from : e.msg.from, msg : e.msg.message, reply : e.msg.reply,time : e.msg.time,type : e.msg.type});
          this.gettodos()
          // this.pesan.push({
          // 	message: e.message,
          // });
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
                this.$alert("", 'updated','success');
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
          this.$alert("", 'Success Create','success');
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