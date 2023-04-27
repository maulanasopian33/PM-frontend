<template>
  <div class=" w-full flex antialiased text-gray-200 bg-gray-900 overflow-hidden">
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
          <ChatLeftsection v-show="leftsection"></ChatLeftsection>
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
          url : '',
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
          teams : [],
          leftsection : true,
		    }
    },
    components : {
          ChatLeftsection,
          DetailTask
      },
    mounted() {
      this.getstatus();
      this.getdatauser();
      this.getdatateam();
      if(window.innerWidth < '460'){
        this.leftsection = false
      }
    },
    methods: {
      getstatus() {
          if (this.$cookies.get("login") === null) {
            this.$router.push('/login')
          }
        },
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
          axios.get(process.env.VUE_APP_BASE+'/whois',{
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
        axios.post(process.env.VUE_APP_BASE+'/add-workspace', formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${this.$cookies.get("login")}`
        },
        }).then((response) => {
          this.$router.push('/dashboard/'+this.encoder(this.in_workspace_name+','+process.env.VUE_APP_WEB+'/uploads/image/'+this.avatar.name))
        }).catch((error) => {

          this.$alert("", error,'error');
          
        });
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
      }
    },
  }
</script>