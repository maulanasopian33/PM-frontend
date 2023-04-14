<template>
    <div class="h-full md:p-10 p-2 overflow-y-scroll">
        <!-- end modal -->
        <modal name="my-modal" :adaptive="true" height="auto" class="rounded-2xl">
            <div class=" text-gray-800 p-8 bg-white dark:bg-gray-900">
                <div class="flex justify-between w-full">
                        <h2 class="text-lg font-bold text-left dark:text-white">Add Teams</h2>
                    </div>
                    <div class="flex w-full">
                        <div class="p-6">
                            <img ref="avatar"
                                src="https://images.unsplash.com/photo-1531316282956-d38457be0993?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
                                alt="" class="rounded-full w-20  h-20 border-[1px]">
                            <input ref="file" hidden type="file" @change="onFilePicked()">
                            <button @click="selectFile()"
                                class="mt-2 py-3 px-4 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">Select</button>
                        </div>
                        <div class="text-left p-6 w-4/6">
                            <label for="" class="mb-3 text-md font-bold dark:text-white">Name</label>
                            <input v-model="team_name" type="text"
                                class="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm">
                        </div>

                    </div>
                    <div class="flex gap-2">
                        <div class="w-1/2">
                            <label for="" class="block text-sm text-left font-bold ml-1 mb-2 dark:text-white">Email</label>
                            <input v-model="team_email" type="email"
                                class="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm">
                        </div>
                        <div class="w-1/2">
                            <label for="" class="block text-sm text-left font-bold ml-1 mb-2 dark:text-white">No Wa</label>
                            <div class="relative">
                                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center px-3">
                                    <h2 class="text-lg font-semibold text-gray-900">+62</h2>
                                </div>
                                <input v-model="team_no" type="text" class="block w-full rounded-lg border border-gray-300 bg-white p-4 pl-16 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:focus:border-blue-500 dark:focus:ring-blue-500" placeholder="Nomor Whatsapp" required />
                            </div>
                        </div>
                    </div>
                    <label for="" class="block text-sm text-left font-bold ml-1 mb-2 dark:text-white">Password</label>
                    <input v-model="team_password" type="password"
                                class="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm">
                    <button @click="saveTeam"
                        class="text-center mt-5 w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm">
                        Save Data
                    </button>
                </div>
            </modal>
            <div>
                <h2 class="text-2xl font-semibold text-left leading-tight dark:text-white px-4">Teams</h2>
            </div>
            <div class="my-2 flex sm:flex-row flex-col px-4">
                <div class="flex flex-row mb-1 sm:mb-0 py-3">
                    <div class="relative">
                        <select
                            class="appearance-none h-full rounded-l border block w-full bg-white dark:bg-transparent dark:text-gray-200 border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-900 focus:border-gray-500">
                            <option>5</option>
                            <option>10</option>
                            <option>20</option>
                        </select>
                        <div
                            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 dark:bg-transparent dark:text-gray-200 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </div>
                    </div>
                    <div class="relative">
                        <select
                            class=" h-full rounded-r border-t dark:bg-transparent dark:text-gray-200 sm:rounded-r-none sm:border-r-0 border-r border-b block appearance-none w-full bg-white dark:focus:bg-gray-900 border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500">
                            <option>All</option>
                            <option>Active</option>
                            <option>Inactive</option>
                        </select>
                        <div
                            class="pointer-events-none absolute inset-y-0 right-0 flex items-center dark:bg-transparent dark:text-gray-200 px-2 text-gray-700 dark:focus:bg-gray-900">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="block relative py-3">
                    <span class="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                        <svg viewBox="0 0 24 24" class="h-4 w-4 fill-current text-gray-500">
                            <path
                                d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z">
                            </path>
                        </svg>
                    </span>
                    <input placeholder="Search"
                        class="appearance-none dark:bg-transparent dark:focus:bg-gray-900 dark:placeholder-gray-100 dark:text-gray-200 rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" />
                </div>
                <button @click="showPopup()" class="dark:bg-transparent dark:text-gray-200 rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b md:mx-3 px-4 py-3 md:py-2 my-2">Add Teams</button>
            </div>
            <div class="overflow-x-scroll max-sm:w-[290px] max-w-screen-md lg:max-w-screen-lg  ml-4 mr-0 my-4">
                <table ref="table" class="w-full">
                    <thead class="bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-100">
                        <tr>
                            <th
                                class="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold  uppercase tracking-wider">
                                Name
                            </th>
                            <th
                                class="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold  uppercase tracking-wider">
                                Email
                            </th>
                            <th
                                class="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider">
                                Created at
                            </th>
                            <th
                                class="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider">
                                Status
                            </th>
                        </tr>
                    </thead>
                    <tbody class="bg-white border-gray-200 text-gray-900 text-left">
                        <tr v-for="(item, index) in team" :key="index">
                            <td class="px-5 py-5 border-b text-sm">
                                <div class="flex items-center">
                                    <div class="flex-shrink-0 w-10 h-10">
                                        <div class="w-10 h-10 relative flex flex-shrink-0 mr-4 bg-blue-900 justify-center items-center rounded-full">
                                            <span class="text-lg font-bold text-center text-white">{{ getAvatarFromName(item.name) }}</span>
                                        </div>
                                    </div>
                                    <div class="ml-3">
                                        <p class=" whitespace-no-wrap">
                                            {{ item.name }}
                                        </p>
                                    </div>
                                </div>
                            </td>
                            <td class="px-5 py-5 border-b text-sm">
                                <p class="whitespace-no-wrap">{{ item.email  }}</p>
                            </td>
                            <td class="px-5 py-5 border-b text-sm">
                                <p class="whitespace-no-wrap">
                                    {{ item.created_at }}
                                </p>
                            </td>
                            <td class="px-5 py-5 border-b text-sm">
                                <span
                                    class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                    <span aria-hidden
                                        class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                    <span class="relative">Edit</span>
                                </span>
                                <span
                                    class="relative inline-block px-3 py-1 font-semibold text-gray-900 cursor-pointer leading-tight" @click="deletemember(item.name,item.id)">
                                    <span aria-hidden
                                        class="absolute inset-0 bg-red-500 opacity-50 rounded-full"></span>
                                    <span class="relative">Hapus</span>
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <!-- <div :class="widthtable" class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between">
                    <span class="text-xs xs:text-sm text-gray-900">
                        Showing 1 to 4 of 50 Entries
                    </span>
                    <div class="inline-flex mt-2 xs:mt-0">
                        <button
                            class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
                            Prev
                        </button>
                        <button
                            class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
                            Next
                        </button>
                    </div>
                </div> -->
            </div>
        </div>
</template>

<script>
import axios from 'axios';
export default {
    name : "teams",
    data() {
        return {
            team : [],
            team_email : '',
            team_name : '',
            team_no : '',
            team_password : '',
            widthtable : ''
        }
    },
    mounted() {
        this.getdatateam()
        this.widthtable = 'w-['+this.$refs.table.clientWidth+'px]';
    },
    methods: {
        saveTeam(){
            let formData = new FormData();
            // formData.append("avatar", this.avatar);
            formData.append("name", this.team_name);
            formData.append("email", this.team_email);
            formData.append("nomor", this.team_no);
            formData.append("password", this.team_password);
            axios.post(process.env.VUE_APP_BASE+'/add-member', formData, {
            headers: {
              "Content-Type": "multipart/form-data",
              "Authorization": `Bearer ${this.$cookies.get("login")}`
            },
            }).then(({data}) => {
                if(data.status){
                    this.getdatateam()
                    this.$modal.hide('my-modal')
                    this.$alert(data.message,'','success',{
                        confirmButtonText: 'OK',
                        showCancelButton: false,
                        showConfirmButton: false,
                        timer: 3000
                    });
                }else{
                    this.$alert(data.message,'Error!','error');
                    this.$modal.hide('my-modal')
                }
            }).catch((error) => {
              console.log(error)
              this.$alert(error.message,'Error!','error');
            });
        },
        getAvatarFromName(name) {
            const firstLetter = name.charAt(0).toUpperCase();
            return firstLetter;
        },
        showPopup() {
            this.$modal.show('my-modal')
          },
        getdatateam(){
          axios.get('http://localhost:8000/api/get-team',{
              headers: {
                  "Authorization": `Bearer ${this.$cookies.get("login")}`
              },
              }).then(({data}) => {
                  this.team = data.data
                  
              }).catch((error) => {
                  // console.log(error)
              });
      },
      deletemember(item,index){
        this.$confirm('are you sure to delete '+item,"Are you sure?",'question').then(() => {
          axios.delete(process.env.VUE_APP_BASE+'/destroymember/'+index,{
            headers: {
                "Authorization": `Bearer ${this.$cookies.get("login")}`
            },
            }).then(({data}) => {
                console.log(data)
                this.team.splice(index, 1)
                // let msg = this.me + ' menghapus todo ' +item
                // this.sendmsg(msg,'system','aaa','notif')
                // this.sendnotif(msg +" di task " + this.taskname +'/Project Manager','Project Manager','normal')
                this.$alert("", 'Deleted','success',{
                  confirmButtonText: 'OK',
                  showCancelButton: false,
                  showConfirmButton: false,
                  timer: 3000
                });
            }).catch((error) => {
                this.$alert(error.message,'Error!','error');
                console.log(error)
            });
        });
      },
    },
}
</script>