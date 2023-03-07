<template>
    <div class="w-full md:flex">
      <div class="md:w-1/2 w-full flex-none">
        <chatroom></chatroom>
      </div>
      <div class="md:w-1/2 w-full bg-black text-white p-10 px-5 overflow-y-scroll">

        <div class="flex">
          <h2 class="text-2xl font-bold">Lorem ipsum dolor sit amet, consectetur</h2>
          <span class="bg-blue-500 px-3 rounded-md w-16 h-7 text-center mx-3">high</span>
          <span class=" px-3 rounded-md w-8 h-7 text-center">V</span>
        </div>
        <div class="flex mt-8 gap-2">
          <div class="w-1/2 ">
            <span>Assigment</span>
            <select name="" id="" class="text-black px-4 py-2 w-full rounded-md">
              <option value="">Lorem, ipsum dolor.</option>
              <option value="">Lorem, ipsum dolor.</option>
              <option value="">Lorem, ipsum dolor.</option>
              <option value="">Lorem, ipsum dolor.</option>
            </select>
          </div>
          <div class="w-1/2">
            <span>Due Date</span>
            <input type="text" class="px-3 py-2 rounded-lg w-full text-black ">
          </div>
        </div>

        <!-- todo -->

        <div class="mt-3">
          <span>Tasks</span>
          <div class="bg-white w-full h-auto text-black p-2">
            <!-- todo item -->
            <div class="flex" v-for="item in todo">
              <!-- <span class="px-2 py-2 text-sm w-2/4">Lorem, ipsum dolor.</span> -->
              <input type="text" class="px-2 py-2 text-sm w-2/4" disabled :value="item.name">
              <select name="" id="" class="text-black text-sm px-2 py-2 rounded-md w-1/4" disabled>
                <option :selected="item.progress == 'Started'" value="Started">Started</option>
                <option :selected="item.progress == 'Progress'" value="Progress">Progress</option>
                <option :selected="item.progress == 'Finished'" value="Finished">Finished</option>
              </select>
              <!-- <span class="px-2 py-2 text-sm">12 sep 2022</span> -->
              <input type="text" class="px-2 py-2 text-sm w-1/4" disabled  :value="item.time">
              <button class="ml-4">
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

            <!-- input new todo -->
            <div class="flex">
              <!-- <span class="px-2 py-2 text-sm w-2/4">Lorem, ipsum dolor.</span> -->
              <input  v-model="nameTask" type="text" class="px-2 py-2 text-sm w-2/4" placeholder="new task">
              <select @change="progressTask = $event.target.value" id="" class="text-black text-sm px-2 py-2 rounded-md w-1/4">
                <option value="Started">Started</option>
                <option value="Progress">Progress</option>
                <option value="Finished">Finished</option>
              </select>
              <!-- <span class="px-2 py-2 text-sm">12 sep 2022</span> -->
              <input type="date" v-model="dateTask" class="px-2 py-2 text-sm w-1/4">
              <button class="ml-4" @click="pushtask()">
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
            <div class="bg-white mt-2">
              a
            </div>
          </div>
          <div class="w-1/2">
            <span>Attenment</span>
            <div class="bg-white mt-2">
              a
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import axios 
from 'axios';
import chatroom from '../base/chatroom.vue';
export default {
    name : 'detailtask',
    components : {
      chatroom
    },
    data() {
      return {
        todo : [],
      }
    },
    mounted() {
      this.getdatatask()
    },
    methods: {
      pushtask(){
        // console.log(this.progressTask)
        this.todo.push({name : this.nameTask, time : this.dateTask, progress : this.progressTask})
        this.nameTask.value = '';
      },
      getdatatask(){
          axios.get('http://localhost:8000/api/get-team',{
              headers: {
                  "Authorization": `Bearer ${this.$cookies.get("login")}`
              },
              }).then(({data}) => {
                  // console.log(data.data)
                  this.todo = data.data
              }).catch((error) => {
                  // console.log(error)
              });
      },
    },
}
</script>