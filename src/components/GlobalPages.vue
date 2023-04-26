<template>
  <div class="w-full flex antialiased bg-gray-900 text-gray-200 overflow-hidden">
    <div class="flex-1 flex flex-col">
      <!-- Top header -->
        <div class="border-b-2 border-gray-800 p-2 flex flex-row z-20">
            <div class="bg-red-600 w-3 h-3 rounded-full mr-2"></div>
            <div class="bg-yellow-500 w-3 h-3 rounded-full mr-2"></div>
            <div class="bg-green-500 w-3 h-3 rounded-full mr-2"></div>
        </div>
        <!-- <router-link :to="pesan">Home</router-link>  -->
      <!-- Top header -->
        <main class="flex flex-row flex-grow overflow-y-scroll">
          <!-- Left Section -->
          <ChatLeftsection v-show="leftsection" @parsing="show = $event" class=""></ChatLeftsection>
          <div v-show="maincontent" class="flex flex-row flex-grow">
            <Teams v-show="isadmin" v-if="hash === '#team'" class="md:w-full w-full"></Teams>
            <admindashboard v-show="isadmin" v-else class="w-full md:w-full sm:w-8/12"></admindashboard>
              <!-- Sidebar -->
            <aside v-show="isadmin"
              class="h-full w-16 flex flex-col space-y-10 items-center justify-center relative bg-gray-800 text-white">
              <!-- Profile -->
              <router-link to="/dashboard">
              <div @click="select(0)" :class="dashclass1"
              class="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-center" viewBox="0 0 24 24"
                    fill="currentColor">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M13.9931 3.43368C12.8564 2.42331 11.1436 2.42331 10.0069 3.43368L2.33565 10.2526C1.92286 10.6195 1.88568 11.2516 2.2526 11.6644C2.61952 12.0771 3.25159 12.1143 3.66437 11.7474L4.00001 11.4491L4.00001 17.0658C3.99996 17.9523 3.99992 18.7161 4.08215 19.3278C4.17028 19.9833 4.36903 20.6117 4.87869 21.1213C5.38835 21.631 6.0167 21.8297 6.67222 21.9179C7.28388 22.0001 8.04769 22 8.93418 22H15.0658C15.9523 22 16.7161 22.0001 17.3278 21.9179C17.9833 21.8297 18.6117 21.631 19.1213 21.1213C19.631 20.6117 19.8297 19.9833 19.9179 19.3278C20.0001 18.7161 20.0001 17.9523 20 17.0659L20 11.4491L20.3356 11.7474C20.7484 12.1143 21.3805 12.0771 21.7474 11.6644C22.1143 11.2516 22.0772 10.6195 21.6644 10.2526L13.9931 3.43368ZM12 16C11.4477 16 11 16.4477 11 17V19C11 19.5523 10.5523 20 10 20C9.44772 20 9 19.5523 9 19V17C9 15.3431 10.3431 14 12 14C13.6569 14 15 15.3431 15 17V19C15 19.5523 14.5523 20 14 20C13.4477 20 13 19.5523 13 19V17C13 16.4477 12.5523 16 12 16Z">
                    </path>
                  </svg>
                  
                </div>
              </router-link>
  
              <!-- Courses -->
              <div @click="select(1)" :class="dashclass2"
                class="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
                <router-link to="/dashboard#team">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M17.5,12 C20.5375661,12 23,14.4624339 23,17.5 C23,20.5375661 20.5375661,23 17.5,23 C14.4624339,23 12,20.5375661 12,17.5 C12,14.4624339 14.4624339,12 17.5,12 Z M17.5,13.9992349 L17.4101244,14.0072906 C17.2060313,14.0443345 17.0450996,14.2052662 17.0080557,14.4093593 L17,14.4992349 L16.9996498,16.9992349 L14.4976498,17 L14.4077742,17.0080557 C14.2036811,17.0450996 14.0427494,17.2060313 14.0057055,17.4101244 L13.9976498,17.5 L14.0057055,17.5898756 C14.0427494,17.7939687 14.2036811,17.9549004 14.4077742,17.9919443 L14.4976498,18 L17.0006498,17.9992349 L17.0011076,20.5034847 L17.0091633,20.5933603 C17.0462073,20.7974534 17.207139,20.9583851 17.411232,20.995429 L17.5011076,21.0034847 L17.5909833,20.995429 C17.7950763,20.9583851 17.956008,20.7974534 17.993052,20.5933603 L18.0011076,20.5034847 L18.0006498,17.9992349 L20.5045655,18 L20.5944411,17.9919443 C20.7985342,17.9549004 20.9594659,17.7939687 20.9965098,17.5898756 L21.0045655,17.5 L20.9965098,17.4101244 C20.9594659,17.2060313 20.7985342,17.0450996 20.5944411,17.0080557 L20.5045655,17 L17.9996498,16.9992349 L18,14.4992349 L17.9919443,14.4093593 C17.9549004,14.2052662 17.7939687,14.0443345 17.5898756,14.0072906 L17.5,13.9992349 Z M14.2540247,10 C15.0885672,10 15.8169906,10.4543496 16.2054276,11.1291814 C13.23532,11.7296535 11,14.3537833 11,17.5 C11,18.7891565 11.3752958,19.9906579 12.0225923,21.0012092 L12.002976,21 C9.51711551,21 7.50192738,18.9848119 7.50192738,16.4989513 L7.50192738,12.25 C7.50192738,11.0073593 8.5092867,10 9.75192738,10 L14.2540247,10 Z M7.40645343,10.000271 C6.89290875,10.5355324 6.56080951,11.2462228 6.50902592,12.0334718 L6.50192738,12.25 L6.50192738,16.4989513 C6.50192738,17.3455959 6.69319107,18.1475684 7.03486751,18.8640179 C6.70577369,18.9530495 6.35898976,19 6.00123996,19 C3.79141615,19 2,17.2085839 2,14.99876 L2,12.25 C2,11.059136 2.92516159,10.0843551 4.09595119,10.0051908 L4.25,10 L7.40645343,10.000271 Z M19.75,10 C20.9926407,10 22,11.0073593 22,12.25 L22.0008195,12.8103588 C20.8328473,11.6891263 19.2469007,11 17.5,11 L17.2568191,11.0044649 L17.2568191,11.0044649 C17.1013063,10.6296432 16.8768677,10.2893694 16.5994986,10.000271 L19.75,10 Z M18.5,4 C19.8807119,4 21,5.11928813 21,6.5 C21,7.88071187 19.8807119,9 18.5,9 C17.1192881,9 16,7.88071187 16,6.5 C16,5.11928813 17.1192881,4 18.5,4 Z M12,3 C13.6568542,3 15,4.34314575 15,6 C15,7.65685425 13.6568542,9 12,9 C10.3431458,9 9,7.65685425 9,6 C9,4.34314575 10.3431458,3 12,3 Z M5.5,4 C6.88071187,4 8,5.11928813 8,6.5 C8,7.88071187 6.88071187,9 5.5,9 C4.11928813,9 3,7.88071187 3,6.5 C3,5.11928813 4.11928813,4 5.5,4 Z">
                    </path>
                  </svg>
                </router-link>
              </div>
  
              <!-- Theme -->
              <div @click="select(2)" :class="dashclass3" 
                class="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
  
              <!-- Configuration -->
              <div @click="select(3)" :class="dashclass4" 
                class="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
            </aside>
          </div>
        </main>
        <MobileBottomnav item1="Workspace" icon1="fa-earth-asia" item2="Home" icon2="fa-house" item3="Settings" icon3="fa-gear" @action="eventbottomnav" v-show="mobileview" class="bottom-0"></MobileBottomnav>
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
import axios from 'axios';
import ChatLeftsection from './base/chat-leftsection.vue';
import dashboardtask from './base/dashboardTask.vue';
import admindashboard from './parsial/admin/dashboard.vue';
import whois from '@/plugin/whois.js'
import Teams from './parsial/admin/teams.vue';
import MobileBottomnav from './parsial/mobile-bottomnav.vue';
  export default {
    mixins : [whois],
    name: 'GlobalPage',
    data(){
      return{
			    pesan :  '/',
          avatar: null,
          show: false,
          in_deskripsi : '',
          isadmin : null,
          in_team : '',
          position : '',
          in_workspace_name : '',
          hash: location.hash,
          dashclass1 : 'bg-white text-gray-800',
          dashclass2 : '',
          dashclass3 : '',
          dashclass4 : '',
          mobileview : false,
          maincontent : true,
          leftsection : true
		    }
    },
    components : {
    ChatLeftsection,
    dashboardtask,
    admindashboard,
    Teams,
    MobileBottomnav
},
    watch:{
        $route (to, from){
            this.hash = to.hash
        }
    },
    props: {
      msg: String
    },
    mounted() {
      this.getdatauser();
      if(window.innerWidth < '460'){
        this.mobileview = true
        this.leftsection = false
      }
      // console.log(window.innerWidth)
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
        }
      },
      select(event){
        switch(event){
          case 0:
            this.dashclass1 = 'bg-white text-gray-800'
            this.dashclass2 = ''
            this.dashclass3 = ''
            this.dashclass4 = ''
            break;
          case 1:
            this.dashclass1 = ''
            this.dashclass2 = 'bg-white text-gray-800'
            this.dashclass3 = ''
            this.dashclass4 = ''
            break;
          case 2:
            this.dashclass1 = ''
            this.dashclass2 = ''
            this.dashclass3 = 'bg-white text-gray-800'
            this.dashclass4 = ''
            break;
          case 3:
            this.dashclass1 = ''
            this.dashclass2 = ''
            this.dashclass3 = ''
            this.dashclass4 = 'bg-white text-gray-800'
            break;
        }
      }
    },
  }
</script>