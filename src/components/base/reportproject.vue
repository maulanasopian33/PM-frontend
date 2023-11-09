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
            <section class="flex flex-col flex-auto border-l border-gray-800">
                <div class="chat-header px-6 py-4 flex flex-row flex-none justify-between items-center shadow">
            <div class="flex">
                <!-- avatar -->
                <div class="w-12 h-12 mr-4 relative flex flex-shrink-0">
                    <img class="shadow-md rounded-full w-full h-full object-cover"
                        :src="avatar" alt="" />
                </div>
                <!-- avatar -->
                <!-- contact info -->
                <div class="text-sm text-left">
                    <p class="font-bold text-base">sadasd</p>
                    <p class="font-light">sdasd</p>
                </div>
                <!-- contact info -->
            </div>

            <div class="flex">
                <!-- <router-link class="block rounded-full text-gray-100 hover:bg-gray-700 bg-gray-800 w-10 h-10 p-2">
                    <svg  viewBox="0 0 24 24" id="meteor-icon-kit__solid-activity" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" clip-rule="evenodd" d="M23.9072 13.5C23.169 19.4195 18.1194 24 12 24C5.88057 24 0.830982 19.4195 0.0928345 13.5H6.99999C7.50152 13.5 7.96987 13.2493 8.24807 12.8321L10.144 9.98816L11.5204 18.2466C11.744 19.5879 13.4938 19.9635 14.2481 18.8321L17.8028 13.5H23.9072ZM0.0928345 10.5C0.830982 4.58053 5.88057 0 12 0C18.1194 0 23.169 4.58053 23.9072 10.5H17C16.4985 10.5 16.0301 10.7507 15.7519 11.1679L13.856 14.0118L12.4796 5.7534C12.256 4.4121 10.5062 4.03652 9.75192 5.16795L6.19722 10.5H0.0928345Z" fill="currentColor"></path></g></svg>
                </router-link> -->
            </div>
        </div>
        <div class="chat-body md:p-4 pt-10 flex-1 overflow-y-scroll">
            <!-- isi -->
            <table id="table" class="">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nama</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>sadasd</td>
                  <td>sadasd</td>
                  <td>sadasd</td>
                </tr>
                <tr>
                  <td>sadasd</td>
                  <td>sadasd</td>
                  <td>sadasd</td>
                </tr>
                <tr>
                  <td>sadasd</td>
                  <td>sadasd</td>
                  <td>sadasd</td>
                </tr>
                <tr>
                  <td>sadasd</td>
                  <td>sadasd</td>
                  <td>sadasd</td>
                </tr>
              </tbody>
            </table>
        </div>
            </section>
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
  <script >
import DataTable from 'datatables.net-dt';
  import ChatLeftsection from '@/components/base/chat-leftsection.vue';
  import MobileBottomnav from '@/components/parsial/mobile-bottomnav.vue';
    export default {
      // eslint-disable-next-line vue/multi-word-component-names
      name: 'reportproject',
      data(){
        return{
            mobileview : false,
            leftsection : true,
            maincontent : true,
              }
      },
      components : {
          ChatLeftsection,
          MobileBottomnav
      },
      props: {
        msg: String
      },
      mounted() {
        // eslint-disable-next-line no-undef
          // eslint-disable-next-line no-undef, no-unused-vars
          let table = new DataTable('#table', {
              responsive: true
          });
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