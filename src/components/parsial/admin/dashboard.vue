<template>
  <div class="overflow-y-scroll">
    <modal name="my-modal" :adaptive="true" height="auto" class="rounded-2xl">
      <div class=" text-gray-800 p-8 bg-gray-900">
        <div class="flex justify-between w-full">
          <h2 class="text-lg font-bold text-left text-white">Create Workspace</h2>
        </div>
        <div class="flex w-full">
          <div class="p-6">
            <img ref="avatar" src="/img/camera.png" alt="" class="rounded-full w-20  h-20 border-[1px]">
            <input ref="file" hidden type="file" @change="onFilePicked()">
            <button @click="selectFile()" class="mt-2 py-3 px-4 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800" >Select</button>
          </div>
          <div class="text-left p-6 w-4/6">
            <label for="" class="mb-3 text-md font-bold text-white">Workspace name</label>
            <input v-model="in_workspace_name" type="text" class="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm">
          </div>
          
        </div>
        <label for="" class="block text-sm text-left font-bold ml-1 mb-2 text-white">Assigment</label>
        <div class="flex flex-wrap overflow-x-scroll">
            <span v-for="(tag, index) in emailDomains" v-bind:key="index" class=" m-1 inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold bg-indigo-500 hover:bg-indigo-300 text-white hover:text-black cursor-pointer">
              {{ tag }}
              <button
                type="button"
                class="flex-shrink-0 -mr-0.5 ml-1.5 inline-flex hover:bg-indigo-400 p-1 rounded-full"
                v-on:click="removeTag(index)">
                <svg class="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
                  <path stroke-linecap="round" stroke-width="1.5" d="M1 1l6 6m0-6L1 7" />
                </svg>
              </button>
            </span>
        </div>
        <div class="flex mt-1 overflow-x-scroll bg-white rounded-md shadow-sm focus:outline-none focus:shadow-outline border border-gray-300">
          <div class="flex-grow text-gray-700 text-center">
            <select class="h-full rounded-lg py-2 pl-2 w-full pr-4 block appearance-none leading-normal transition duration-150 ease-in-out sm:text-sm sm:leading-5 outline-none" @change="processTagsOnKeyUpEvent($event.target.value)">
              <option value="" >Pilih Anggota Tim</option>
              <option v-for="team in teams" :value="team.name" :key="team.id">{{ team.name }}</option>
            </select>
          </div>
        </div>
        <label for="email" class="block text-sm text-left font-bold ml-1 mb-2 text-white mt-5">Deskripsi</label>
        <div class="relative">
          <textarea v-model="in_deskripsi" type="text" height="100px" class="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm" required aria-describedby="email-error"></textarea>
        </div>
        <button @click="saveworkspace" :disabled="onsave" class="disabled:bg-blue-400 text-center mt-5 w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm">
          <i v-show="onsave" class="fa-solid fa-spinner fa-spin"></i> Save Data
        </button>
      </div>      
    </modal>
    <modal name="edit-modal" :adaptive="true" height="auto" class="rounded-2xl">
      <div class=" text-gray-800 p-8 bg-gray-900">
        <div class="flex justify-between w-full">
          <h2 class="text-lg font-bold text-left text-white">Edit Workspace</h2>
        </div>
        <div class="flex w-full">
          <div class="p-6">
            <img ref="avatar" :src="this.avataredit" alt="" class="rounded-full w-20  h-20 border-[1px]">
            <input ref="file" hidden type="file" @change="onFilePicked()">
            <button @click="selectFile()" class="mt-2 py-3 px-4 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800" >Select</button>
          </div>
          <div class="text-left p-6 w-4/6">
            <label for="" class="mb-3 text-md font-bold text-white">Workspace name</label>
            <input v-model="in_workspace_name" type="text" class="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm">
          </div>
          
        </div>
        <label for="" class="block text-sm text-left font-bold ml-1 mb-2 text-white">Assigment</label>
        <div class="flex flex-wrap overflow-x-scroll">
            <span v-for="(tag, index) in emailDomains" v-bind:key="index" class=" m-1 inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold bg-indigo-500 hover:bg-indigo-300 text-white hover:text-black cursor-pointer">
              {{ tag }}
              <button
                type="button"
                class="flex-shrink-0 -mr-0.5 ml-1.5 inline-flex hover:bg-indigo-400 p-1 rounded-full"
                v-on:click="removeTag(index)">
                <svg class="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
                  <path stroke-linecap="round" stroke-width="1.5" d="M1 1l6 6m0-6L1 7" />
                </svg>
              </button>
            </span>
        </div>
        <div class="flex mt-1 overflow-x-scroll bg-white rounded-md shadow-sm focus:outline-none focus:shadow-outline border border-gray-300">
          <div class="flex-grow text-gray-700 text-center">
            <select class="h-full rounded-lg py-2 pl-2 w-full pr-4 block appearance-none leading-normal transition duration-150 ease-in-out sm:text-sm sm:leading-5 outline-none" @change="processTagsOnKeyUpEvent($event.target.value)">
              <option value="" >Pilih Anggota Tim</option>
              <option v-for="team in teams" :value="team.name" :key="team.id">{{ team.name }}</option>
            </select>
          </div>
        </div>
        <label for="email" class="block text-sm text-left font-bold ml-1 mb-2 text-white mt-5">Deskripsi</label>
        <div class="relative">
          <textarea v-model="in_deskripsi" type="text" height="100px" class="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm" required aria-describedby="email-error"></textarea>
        </div>
        <button @click="updateworkspace" :disabled="onupdate" class="disabled:bg-blue-400 text-center mt-5 w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm">
          <i v-show="onupdate" class="fa-solid fa-spinner fa-spin"></i> Update Data
        </button>
      </div>      
    </modal>

    <div class="overflow-y-scroll w-full md:p-10 p-4">
      <div class="container p-0 md:p-10 bg-gray-800 rounded-lg ">
        <div class="flex-1 p-10 sm:p-0">
          <div class="flex justify-between items-center">
            <h3 class="text-xl font-extralight text-white/50">Workspace</h3>
          </div>
          <div class="mb-10 sm:mb-0 mt-10 grid gap-4 grid-cols-1 xl:grid-cols-4 lg:grid-cols-">
            <div @click="showPopup"
              class="group bg-gray-900/30 py-20 px-4 flex flex-col space-y-0 items-center cursor-pointer rounded-md hover:bg-gray-900/40 hover:smooth-hover">
              <a class="bg-gray-900/70 text-white/50 group-hover:text-white group-hover:smooth-hover flex w-20 h-20 rounded-full items-center justify-center"
                href="#">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </a>
              <a class="text-white/50 group-hover:text-white group-hover:smooth-hover text-center" href="#">Create workspace</a>
            </div>
            <div v-for="data in wokspacedata" class="relative group bg-gray-900 py-10 sm:py-20 px-4 flex flex-col space-y-0 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover">
              <img class="w-20 h-20 object-cover object-center rounded-full mb-8"
                :src="url + data.avatar"
                :alt="data.name" />
              <h4 class="text-white text-md font-bold capitalize text-center break-all">{{ data.name }}</h4>
              <p class="text-white/50 text-sm break-all">{{ data.deskripsi }}</p>
              <div class="absolute -bottom-2 md:bottom-5 flex gap-2">
                <button @click="showedit(data.id, data.name)" class="bg-yellow-700 text-white px-2 text-sm md:px-4 py-1 md:py-2 w-full rounded-md">Edit</button>
                <button class="bg-red-700 text-white px-4 py-2 w-full rounded-md" @click="deleteworkspace(data.id, data.name)">Hapus</button>

              </div>
              <p class="absolute top-2 text-white/20 inline-flex items-center text-xs"><span
                  class="mr-2 w-2 h-2 block bg-green-500 rounded-full group-hover:animate-pulse"></span> {{ data.assigment.split(',').length }} Orang</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import workspace from '@/plugin/workspace';
    import axios from 'axios';
    export default {
        mixins : [workspace],
        name : 'admindashboard',
        data() {
          return {
            onsave : false,
            onupdate : false,
            wokspacedata : [],
            avatar: null,
            in_deskripsi : '',
            id  : '',
            myname : '',
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
            avataredit : '',
            updatework : false,
            curentUpadateId : ''
          }
        },
        mounted() {
          this.getworkspace();
          this.getdatateam();
        },
        methods: {
          showPopup() {
            this.$modal.show('my-modal')
            this.in_workspace_name = ''
            this.emailDomains = []
            this.in_deskripsi = ''

          },
          showedit(id,name) {
            this.curentUpadateId = id
            this.$modal.show('edit-modal')
            let data = this.wokspacedata.filter(function(val){
              return val.name === name
            })
            let assigments = data[0].assigment.split(',')
            assigments.forEach(element => {
              this.processTagsOnKeyUpEvent(this.teams.filter(function(val){
                return val.id == element
              })[0].name)
            });
            this.in_workspace_name = data[0].name
            this.in_deskripsi = data[0].deskripsi
            this.avataredit = process.env.VUE_APP_WEB + data[0].avatar
            // console.log(data[0])
          },
          deleteworkspace(id, name){
            this.$confirm('are you sure to delete workspace ' + name, "Are you sure?", 'question').then(() => {
              axios.delete(process.env.VUE_APP_BASE + '/workspace/' + id, {
                headers: {
                  "Authorization": `Bearer ${this.$cookies.get("login")}`
                },
              }).then(({data}) => {
                this.$alert("", 'Deleted', 'success', {
                  confirmButtonText: 'OK',
                  showCancelButton: false,
                  showConfirmButton: false,
                  timer: 3000
                });
                location.reload()
              }).catch((error) => {
                this.$alert(error.message, 'Error!', 'error');
                console.log(error)
              });
            });
          },
          updateworkspace(){
            this.onupdate = true;
            let data = [];
            this.emailDomains.forEach((item) => {
              data.push(this.teams.filter(function(e){
                return e.name == item
              })[0].id)
            });
            let formData = new FormData();
            formData.append("avatar", this.avatar);
            formData.append("id", this.curentUpadateId);
            formData.append("name", this.in_workspace_name);
            formData.append("assigment", data.toString());
            formData.append("deskripsi", this.in_deskripsi);
            formData.append("avatar_updated", Number(this.updatework));
            axios.post(process.env.VUE_APP_BASE+'/workspace/update', formData, {
            headers: {
              "Content-Type": "multipart/form-data",
              "Authorization": `Bearer ${this.$cookies.get("login")}`
            },
            }).then((response) => {
              this.$modal.hide('edit-modal')
              this.onupdate = false
              location.reload()
              this.avatar = null
              this.curentUpadateId = ''
              this.in_workspace_name = ''
              this.in_deskripsi = ''
              this.updatework = false;
            }).catch((error) => {
              this.onupdate = false
              console.log(error)
            });
            // console.log(formData)
          },
          saveworkspace(){
            this.onsave = true;
            let data = [];
            this.emailDomains.forEach((item) => {
              data.push(this.teams.filter(function(e){
                return e.name == item
              })[0].id)
            });
            // console.log(this.avatar)
            // this.show = false;
            let formData = new FormData();
            formData.append("avatar", this.avatar);
            formData.append("name", this.in_workspace_name);
            formData.append("assigment", data.toString());
            formData.append("deskripsi", this.in_deskripsi);
            // formData.append("deskripsi", this.in_deskripsi);
            axios.post(process.env.VUE_APP_BASE+'/add-workspace', formData, {
            headers: {
              "Content-Type": "multipart/form-data",
              "Authorization": `Bearer ${this.$cookies.get("login")}`
            },
            }).then((response) => {
              this.$modal.hide('my-modal')
              this.onsave = false;
              this.in_workspace_name = '';
              this.in_deskripsi = "";
              location.reload()
            }).catch((error) => {
              console.log(error)
            });
            // console.log(formData)
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
          getdatateam(){
            axios.get(process.env.VUE_APP_BASE+'/get-team',{
              headers: {
                  "Authorization": `Bearer ${this.$cookies.get("login")}`
              },
              }).then(({data}) => {
                  // console.log('datateam',data.data)
                  let selfdata = this.myname
                  this.teams = data.data.filter(function(e){
                    return e.name !== selfdata
                  });
              }).catch((error) => {
                  // console.log(error)
              });
          },
          
          onFilePicked () {
            this.avatar = this.$refs.file.files[0];
            this.updatework = true;
            // let filename = files[0].name
            const fileReader = new FileReader()
            fileReader.addEventListener('load', () => {
              this.$refs.avatar.src = fileReader.result
            })
            fileReader.readAsDataURL(this.avatar)
            // this.image = files[0]
            // console.log('aa')
          },
          selectFile(){
            let fileInputElement = this.$refs.file
            fileInputElement.click();
          },
        },
    }

</script>