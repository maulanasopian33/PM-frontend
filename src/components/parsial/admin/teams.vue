<template>
    <div class="h-full md:p-10 p-2 overflow-y-scroll">
        <!-- end modal -->
        <modal name="my-modal" :adaptive="true" height="auto" class="rounded-2xl">
            <div class=" text-gray-800 p-8 bg-gray-900">
                <div class="flex justify-between w-full">
                        <h2 class="text-lg font-bold text-left text-white">Add Teams</h2>
                    </div>
                    <div class="flex w-full">
                        <div class="p-6">
                            <img ref="avatar"
                                src="/img/camera.png"
                                alt="" class="rounded-full w-20  h-20 border-[1px]">
                            <input ref="file" hidden type="file" @change="onFilePicked()">
                            <button @click=""
                                class="hidden mt-2 py-3 px-4 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm focus:ring-offset-gray-800">Select</button>
                        </div>
                        <div class="text-left p-6 w-4/6">
                            <label for="" class="mb-3 text-md font-bold text-white">Name</label>
                            <input v-model="team_name" type="text"
                                class="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm">
                        </div>

                    </div>
                    <div class="w-full my-2">
                        <label for="" class="block text-sm text-left font-bold ml-1 mb-2 text-white">Username</label>
                        <input v-model="team_username" type="text"
                            class="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm">
                    </div>
                    <div class="flex gap-2">
                        <div class="w-1/2">
                            <label for="" class="block text-sm text-left font-bold ml-1 mb-2 text-white">Email</label>
                            <input v-model="team_email" type="email"
                                class="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm">
                        </div>
                        <div class="w-1/2">
                            <label for="" class="block text-sm text-left font-bold ml-1 mb-2 text-white">No Wa</label>
                            <div class="relative">
                                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center px-3">
                                    <h2 class="text-lg font-semibold text-gray-900">+62</h2>
                                </div>
                                <input v-model="team_no" type="text" class="block w-full rounded-lg border border-gray-300 bg-white p-4 pl-16 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:focus:border-blue-500 dark:focus:ring-blue-500" placeholder="Nomor Whatsapp" required />
                            </div>
                        </div>
                    </div>
                    <label for="" class="block text-sm text-left font-bold ml-1 mb-2 text-white">Password</label>
                    <input v-model="team_password" type="password"
                                class="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm">
                    <button @click="saveTeam" :disabled="onsave"
                        class="disabled:bg-blue-400 text-center mt-5 w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm">
                        <i v-show="onsave" class="fa-solid fa-spinner fa-spin"></i> Save Data
                    </button>
                </div>
            </modal>
        <modal name="edit-modal" :adaptive="true" height="auto" class="rounded-2xl">
            <div class=" text-gray-800 p-8 bg-gray-900">
                <div class="flex justify-between w-full">
                        <h2 class="text-lg font-bold text-left text-white">Edit Teams</h2>
                    </div>
                    <div class="flex w-full">
                        <div class="p-6">
                            <img ref="avatar"
                                src="/img/camera.png"
                                alt="" class="rounded-full w-20  h-20 border-[1px]">
                            <input ref="file" hidden type="file" @change="onFilePicked()">
                            <button @click=""
                                class="hidden mt-2 py-3 px-4 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm focus:ring-offset-gray-800">Select</button>
                        </div>
                        <div class="text-left p-6 w-4/6">
                            <label for="" class="mb-3 text-md font-bold text-white">Name</label>
                            <input v-model="team_name" type="text"
                                class="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm">
                        </div>

                    </div>
                    <div class="w-full my-2">
                        <label for="" class="block text-sm text-left font-bold ml-1 mb-2 text-white">Username</label>
                        <input v-model="team_username" type="text"
                            class="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm">
                    </div>
                    <div class="flex gap-2">
                        <div class="w-1/2">
                            <label for="" class="block text-sm text-left font-bold ml-1 mb-2 text-white">Email</label>
                            <input v-model="team_email" type="email"
                                class="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm">
                        </div>
                        <div class="w-1/2">
                            <label for="" class="block text-sm text-left font-bold ml-1 mb-2 text-white">No Wa</label>
                            <div class="relative">
                                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center px-3">
                                    <h2 class="text-lg font-semibold text-gray-900">+62</h2>
                                </div>
                                <input v-model="team_no" type="text" class="block w-full rounded-lg border border-gray-300 bg-white p-4 pl-16 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:focus:border-blue-500 dark:focus:ring-blue-500" placeholder="Nomor Whatsapp" required />
                            </div>
                        </div>
                    </div>
                    <div class="flex-grow text-gray-700 text-center">
                        <label for="" class="block text-sm text-left font-bold ml-1 mb-2 text-white">Role User</label>
                        <select v-model="role" class="h-full rounded-lg py-2 pl-2 w-full pr-4 block appearance-none leading-normal transition duration-150 ease-in-out sm:text-sm sm:leading-5 outline-none">
                            <option value="1" :selected="role" key="1">Admin</option>
                            <option value="0" :selected="!role" key="0">User</option>
                        </select>
                    </div>
                    <div class="text-left text-white text-sm p-2">
                        <input @change="changepassword = !changepassword"
                            class="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] checked:bg-blue-900 bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-blue-900 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-blue-900 checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
                            type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label class="inline-block pl-[0.15rem] hover:cursor-pointer"
                            for="flexSwitchCheckDefault">Update Password</label>
                    </div>
                    <div v-show="changepassword">
                        <label for="" class="block text-sm text-left font-bold ml-1 mb-2 text-white">Password</label>
                        <input placeholder="****" v-model="team_password" type="password"
                        class="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm">
                    </div>
                    <button @click="updateteam" :disabled="onupdate"
                        class="disabled:bg-blue-400 text-center mt-5 w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm">
                        <i v-show="onupdate" class="fa-solid fa-spinner fa-spin"></i> Update Data
                    </button>
                </div>
            </modal>
            <div>
                <h2 class="text-2xl font-semibold text-left leading-tight text-white px-4">Teams</h2>
            </div>
            <div class="my-2 flex sm:flex-row flex-col px-4">
                <div class="flex flex-row mb-1 sm:mb-0 py-3">
                    <div class="relative">
                        <select
                            class="appearance-none h-full rounded-l border block w-full bg-transparent text-gray-200 border-gray-400 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-gray-900 focus:border-gray-500">
                            <option>5</option>
                            <option>10</option>
                            <option>20</option>
                        </select>
                        <div
                            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 bg-transparent text-gray-200 ">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </div>
                    </div>
                    <div class="relative">
                        <select
                            class=" h-full rounded-r border-t bg-transparent text-gray-200 sm:rounded-r-none sm:border-r-0 border-r border-b block appearance-none w-full focus:bg-gray-900 border-gray-400  py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r  focus:border-gray-500">
                            <option>All</option>
                            <option>Active</option>
                            <option>Inactive</option>
                        </select>
                        <div
                            class="pointer-events-none absolute inset-y-0 right-0 flex items-center bg-transparent text-gray-200 px-2 focus:bg-gray-900">
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
                        class="appearance-none bg-transparent focus:bg-gray-900 placeholder-gray-100 text-gray-200 rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full text-sm  focus:placeholder-gray-600 focus:text-gray-200 focus:outline-none" />
                </div>
                <button @click="showPopup()" class="bg-transparent text-gray-200 rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b md:mx-3 px-4 py-3 md:py-2 my-2">Add Teams</button>
            </div>
            <div class="overflow-x-scroll max-sm:w-[260px] max-w-screen-md lg:max-w-screen-lg  ml-4 mr-0 my-4">
                <table ref="table" class="w-full">
                    <thead class="bg-gray-800 text-gray-100">
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
                                    class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight cursor-pointer" @click="updateteams(item.id,item.name)">
                                    <span aria-hidden
                                        class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                    <span class="relative">Edit</span>
                                </span>
                                <span
                                    class="relative inline-block mt-2 px-3 py-1 font-semibold text-red-900 cursor-pointer leading-tight" @click="deletemember(item.name,item.id)">
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
            onsave : false,
            onupdate : false,
            team : [],
            team_email : '',
            team_name : '',
            team_username : '',
            team_no : '',
            team_password : '',
            widthtable : '',
            changepassword : false,
            idteam : '',
            role : false,
        }
    },
    mounted() {
        this.getdatateam()
        this.widthtable = 'w-['+this.$refs.table.clientWidth+'px]';
    },
    methods: {
        updateteams(id,name){
            this.idteam = id
            this.$modal.show('edit-modal')
            let data = this.team.filter(function(val){
              return val.name === name
            })
            this.team_name = data[0].name
            this.team_username = data[0].username
            this.team_email = data[0].email
            this.team_no = data[0].nomor
            this.role = data[0].admin
        },
        updateteam(){
            this.onupdate =true
            let formData = new FormData();
            if(this.changepassword){
                formData.append("password", this.team_password);
            }
            formData.append("name", this.team_name);
            formData.append("id", this.idteam);
            formData.append("username", this.team_username);
            formData.append("email", this.team_email);
            formData.append("nomor", this.team_no);
            formData.append("admin", Number(this.role));
            axios.post(process.env.VUE_APP_BASE+'/update-member', formData, {
            headers: {
              "Content-Type": "multipart/form-data",
              "Authorization": `Bearer ${this.$cookies.get("login")}`
            },
            }).then(({data}) => {
                if(data.status){
                    this.onupdate = false
                    this.getdatateam()
                    this.$modal.hide('edit-modal')
                    this.team_name = ''
                    this.team_username = ''
                    this.team_email = ''
                    this.team_no = ""
                    this.team_password = ''
                    this.$alert(data.message,'','success',{
                        confirmButtonText: 'OK',
                        showCancelButton: false,
                        showConfirmButton: false,
                        timer: 3000
                    });
                }else{
                    this.$alert(data.message,'Error!','error');
                    this.$modal.hide('edit-modal')
                }
            }).catch((error) => {
              this.$alert(error.message,'Error!','error');
            });
            this.changepassword = false
            this.team_password = ''
        },
        saveTeam(){
            this.onsave = true;
            let formData = new FormData();
            // formData.append("avatar", this.avatar);
            formData.append("name", this.team_name);
            formData.append("username", this.team_username);
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
                    this.team_name = ''
                    this.team_username = ''
                    this.team_email = ''
                    this.team_no = ""
                    this.team_password = ''
                    this.onsave = false;
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
                this.onsave = false;
                this.$alert(error.message,'Error!','error');
            });
        },
        getAvatarFromName(name) {
            const firstLetter = name.charAt(0).toUpperCase();
            return firstLetter;
        },
        showPopup() {
            this.$modal.show('my-modal')
            this.team_name = ''
            this.team_username = ''
            this.team_email = ''
            this.team_no = ""
            this.team_password = ''
          },
        getdatateam(){
          axios.get(process.env.VUE_APP_BASE+'/get-team',{
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
        this.$confirm('are you sure to delete '+item,"Are you sure?",'question').then((result) => {
          axios.delete(process.env.VUE_APP_BASE+'/destroymember/'+index,{
            headers: {
                "Authorization": `Bearer ${this.$cookies.get("login")}`
            },
            }).then(({data}) => {
                this.team.splice(index, 1)
                // let msg = this.me + ' menghapus todo ' +item
                // this.sendmsg(msg,'system','aaa','notif')
                // this.sendnotif(msg +" di task " + this.taskname +'/Project Manager','Project Manager','normal')
                this.getdatateam()
                this.$alert("", 'Deleted','success',{
                  confirmButtonText: 'OK',
                  showCancelButton: false,
                  showConfirmButton: false,
                  timer: 3000
                });
            }).catch((error) => {
                this.$alert(error.message,'Error!','error');
            });
        });
      },
    },
}
</script>