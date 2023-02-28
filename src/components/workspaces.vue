<template>
    <div class="h-screen w-full flex antialiased text-gray-200 bg-gray-900 overflow-hidden">
      <div class="flex-1 flex flex-col">
        <!-- Top header -->
          <div class="border-b-2 border-gray-800 p-2 flex flex-row z-20">
              <div class="bg-red-600 w-3 h-3 rounded-full mr-2"></div>
              <div class="bg-yellow-500 w-3 h-3 rounded-full mr-2"></div>
              <div class="bg-green-500 w-3 h-3 rounded-full mr-2"></div>
          </div>
          <!-- <router-link :to="pesan">Home</router-link>  -->
        <!-- Top header -->
          <main class="flex-grow flex flex-row min-h-0">
            <!-- Left Section -->
            <ChatLeftsection></ChatLeftsection>
            <!-- left Section -->
            <!-- Main Section / chatroom -->
            <dashboardtask></dashboardtask>
            <!-- <Chatroom></Chatroom> -->
            <!-- Main Section / chatroom -->
          </main>
      </div>
  </div>
  </template>
  <style>
    .group:hover .group-hover\:block {
      display: block;
    }
  
    .hover\:w-64:hover {
      width: 45%;
    }
  
  
    /* NO NEED THIS CSS - just for custom scrollbar which can also be configured in tailwind.config.js*/
    ::-webkit-scrollbar {
      width: 2px;
      height: 2px;
    }
  
    ::-webkit-scrollbar-button {
      width: 0px;
      height: 0px;
    }
  
    ::-webkit-scrollbar-thumb {
      background: #2d3748;
      border: 0px none #ffffff;
      border-radius: 50px;
    }
  
    ::-webkit-scrollbar-thumb:hover {
      background: #2b6cb0;
    }
  
    ::-webkit-scrollbar-thumb:active {
      background: #000000;
    }
  
    ::-webkit-scrollbar-track {
      background: #1a202c;
      border: 0px none #ffffff;
      border-radius: 50px;
    }
  
    ::-webkit-scrollbar-track:hover {
      background: #666666;
    }
  
    ::-webkit-scrollbar-track:active {
      background: #333333;
    }
  
    ::-webkit-scrollbar-corner {
      background: transparent;
    }
  </style>
  <script>
  import ChatLeftsection from './base/chat-leftsection.vue';
  import dashboardtask from './base/dashboardTask.vue';
  import Chatroom from './base/chatroom.vue';
    export default {
      name: 'WorkspacePage',
      data(){
        return{
                  pesan :  '/',
              }
      },
      components : {
            ChatLeftsection,
            Chatroom,
            Chatroom,
            dashboardtask
        },
      mounted(){
      },
      props: {
        msg: String
      }
    }
  </script>