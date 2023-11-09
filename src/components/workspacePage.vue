<template>
  <div class="h-screen w-full flex antialiased text-gray-200 bg-gray-900 overflow-hidden">
    <!-- end modal create task -->
    <div class="flex-1 flex flex-col">
      <!-- Top header -->
        <div class="border-b-2 border-gray-800 p-2 flex flex-row z-20">
            <div class="bg-red-600 w-3 h-3 rounded-full mr-2"></div>
            <div class="bg-yellow-500 w-3 h-3 rounded-full mr-2"></div>
            <div class="bg-green-500 w-3 h-3 rounded-full mr-2"></div>
        </div>
        <!-- <router-link :to="pesan">Home</router-link>  -->
      <!-- Top header -->
        <main class="flex-grow flex flex-row min-h-0 w-screen">
          <!-- Left Section -->
          <ChatLeftsection v-show="leftsection"></ChatLeftsection>
          <dashboardtask v-show="maincontent" class="md:w-2/4 w-full" :name="this.$route.params.workspace" detail="antmediahost.com" avatar="/"></dashboardtask>
        </main>
        <MobileBottomnav item1="Workspace" icon1="fa-earth-asia" item2="Tasks" icon2="fa-list-check" item3="Back" icon3="fa-angle-left" @action="eventbottomnav" v-show="mobileview" class="bottom-0"></MobileBottomnav>
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
  input:checked + label {
    border-color: black;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
</style>
<script>
import ChatLeftsection from './base/chat-leftsection.vue';
import dashboardtask from './base/dashboardTask.vue';
import workspace from '@/plugin/workspace';
import MobileBottomnav from './parsial/mobile-bottomnav.vue';
  export default {
    mixins : [workspace],
    name: 'workspacepage',
    data(){
      return{
          mobileview : false,
          leftsection : true,
          maincontent : true
		    }
    },
    components : {
        ChatLeftsection,
        dashboardtask,
        MobileBottomnav
    },
    props: {
      msg: String
    },
    mounted() {
      if(window.innerWidth < '460'){
        this.mobileview = true
        this.leftsection = false
      }
    },
    methods: {
      eventbottomnav(value){
        switch(value){
          case 0 :
            this.leftsection = true
            this.maincontent = false
            break;
          case 1 :
            this.leftsection = false
            this.maincontent = true
            break;
          case 2 :
            this.$router.push('/dashboard');
            break;
        }
      },
      getstatus() {
          if (this.$cookies.get("login") == null) {
            this.$router.push('/login')
          }
        },
    }
  }
</script>