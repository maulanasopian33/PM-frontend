<template>
  <div class="h-screen w-full flex antialiased text-gray-200 bg-gray-900 overflow-hidden">
    <!-- modal create workspace -->
    <div v-if="show" class=" w-full h-full bg-opacity-30 bg-white fixed z-30 flex items-center justify-center">
      <div class="w-2/4 bg-[#2a2a2c] h-4/5 text-gray-300 rounded-lg p-10 text-left">
        <div class="flex justify-between">
          <h2 class="text-lg text-left">Create Workspace</h2>
          <span @click="show = false" class="cursor-pointer">
            <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM15.36 14.3C15.65 14.59 15.65 15.07 15.36 15.36C15.21 15.51 15.02 15.58 14.83 15.58C14.64 15.58 14.45 15.51 14.3 15.36L12 13.06L9.7 15.36C9.55 15.51 9.36 15.58 9.17 15.58C8.98 15.58 8.79 15.51 8.64 15.36C8.35 15.07 8.35 14.59 8.64 14.3L10.94 12L8.64 9.7C8.35 9.41 8.35 8.93 8.64 8.64C8.93 8.35 9.41 8.35 9.7 8.64L12 10.94L14.3 8.64C14.59 8.35 15.07 8.35 15.36 8.64C15.65 8.93 15.65 9.41 15.36 9.7L13.06 12L15.36 14.3Z" fill="#FFFFFF"></path> </g></svg>
          </span>
        </div>
        <div class="border-b-[1px] border-gray-500 mt-2"></div>
        <div class="flex">
          <div class="p-6">
            <img ref="avatar" src="https://images.unsplash.com/photo-1531316282956-d38457be0993?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80" alt="" class="rounded-full w-20  h-20 border-[1px]">
            <input ref="file" hidden type="file" @change="onFilePicked()">
            <button @click="selectFile()" class="mt-2 bg-gray-300 text-black text-sm px-4 py-1 rounded" >Select</button>
          </div>
          <div class="text-left p-6">
            <label for="" class="mb-3">Workspace name</label>
            <input v-model="in_workspace_name" type="text" class="my-2 border-0 px-3 py-2 placeholder-blueGray-300 text-black bg-gray-400 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
          </div>
          
        </div>
        <label for="" class="mb-3 text-left">Add Member</label>
        <input v-model="in_team" type="text" class="my-2 border-0 px-3 py-2 placeholder-blueGray-300 text-black bg-gray-400 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
        <textarea v-model="in_deskripsi" class="my-2 border-0 px-3 py-2 placeholder-blueGray-300 text-black bg-gray-400 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Deskripsi"></textarea>
        <button @click="saveworkspace()" class="mt-2 bg-gray-300 text-black text-sm px-8 py-2 rounded" >Create Workspace</button>
      </div>
    </div>
    <!-- end modal create workspace -->
    <div class="flex-1 flex flex-col">
      <!-- Top header -->
        <div class="border-b-2 border-gray-800 p-2 flex flex-row z-20">
            <div class="bg-red-600 w-3 h-3 rounded-full mr-2"></div>
            <div class="bg-yellow-500 w-3 h-3 rounded-full mr-2"></div>
            <div class="bg-green-500 w-3 h-3 rounded-full mr-2"></div>
        </div>
        <!-- <router-link :to="pesan">Home</router-link>  -->
      <!-- Top header -->
        <main class="flex-grow flex flex-row min-h-0 h-full">
          <!-- Left Section -->
          <ChatLeftsection @parsing="show = $event"></ChatLeftsection>
          <DetailTask ></DetailTask>
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
  input:checked + label {
    border-color: black;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
</style>
<script>
import axios from 'axios';
import ChatLeftsection from './base/chat-leftsection.vue';
import DetailTask from './parsial/detail-task.vue';
  export default {
    name: 'workspacepage',
    data(){
      return{
			    pesan :  '/',
          url : 'http://localhost:8000/api/add-workspace',
          avatar: null,
          show: false,
          createTask : false,
          in_deskripsi : '',
          id  : '',
          in_team : '',
          in_workspace_name : '',
          name_task : '',
          priority : '',
          startdate : '',
          duedate : '',
          assigment : '',
          deskripsi : '',
          emailDomain: '',
          emailDomains: [],
          teams : []
		    }
    },
    components : {
          ChatLeftsection,
          DetailTask
      },
    mounted() {
      this.getdatauser();
      this.getdatateam();
    },
    methods: {
          sanitizeTag(value) {
      return value.replace(/<[^>]*>?/gm, '').trim();
    },
    addIfUnique(array, value) {
      return [...new Set(array).add(value)];
    },
    processTagsOnKeyUpEvent(value) {
      if (this.emailDomains.length < 20) {
        this.emailDomain = this.sanitizeTag(value);

        if (value.length > 0) {
          this.revertTag();
            let tags = [value];
            tags.forEach((tag) => {
              if (tag.length > 0) {
                this.emailDomains = this.addIfUnique(this.emailDomains, tag);
              }
            });
        }
      } else {
        this.revertTag();
      }
    },
    removeTag(index) {
      this.emailDomains.splice(index, 1);
    },
    revertTag() {
      this.emailDomain = '';
    },
      getdatauser(){
          axios.get('http://localhost:8000/api/whois',{
              headers: {
                  "Authorization": `Bearer ${this.$cookies.get("login")}`
              },
              }).then(({data}) => {
                  
                  this.id = data.id
              }).catch((error) => {
                  // console.log(error)
              });
      },
      getdatateam(){
        console.log(process.env.URL_BASE_API);
          // axios.get('http://localhost:8000/api/get-team',{
          //     headers: {
          //         "Authorization": `Bearer ${this.$cookies.get("login")}`
          //     },
          //     }).then(({data}) => {
          //         console.log(data.data)
          //         this.teams = data.data
          //     }).catch((error) => {
          //         // console.log(error)
          //     });
      },
      selectFile(){
        let fileInputElement = this.$refs.file
        fileInputElement.click();
      },
      saveworkspace(){
        // this.$root.$refs.A.getworkspace();
        this.show = false;
        let formData = new FormData();
        formData.append("avatar", this.avatar);
        formData.append("name", this.in_workspace_name);
        formData.append("assigment", this.in_team);
        formData.append("deskripsi", this.in_workspace_name);
        axios.post(this.url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${this.$cookies.get("login")}`
        },
        }).then((response) => {
          console.log(this.avatar);
          this.$router.push('/dashboard/'+this.encoder(this.in_workspace_name+',http://localhost:8000/uploads/image/'+this.avatar.name))
        }).catch((error) => {
          console.log(error)
          // this.$alert("", 'Success create workspace','success');
        });
        // console.log(formData)
      },
      parsingdata(data){
          this.show = data
      },
      encoder(msg){
          var encode = btoa(msg); 
          return encode
      },
      onFilePicked () {
        this.avatar = this.$refs.file.files[0];
        // let filename = files[0].name
        const fileReader = new FileReader()
        fileReader.addEventListener('load', () => {
          this.$refs.avatar.src = fileReader.result
        })
        fileReader.readAsDataURL(this.avatar)
        // this.image = files[0]
        // console.log('aa')
      }
    },
  }
</script>