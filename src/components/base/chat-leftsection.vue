<template>
    <section
        class="flex flex-col flex-none overflow-auto group w-full lg:max-w-sm md:w-2/5 transition-all duration-300 ease-in-out">
        <div class="header p-4 flex flex-row justify-between items-center flex-none">
            <!-- brand icon -->
            <div class="h-20 relative flex flex-shrink-0">
                <router-link to="/dashboard">
                    <img class=" w-full h-full" alt="ravisankarchinnam"
                        src="/img/logo_banner_light.png" />
                </router-link>
            </div>
            <!-- brand icon -->
            <!-- Title app -->
            <!-- <p class="text-md font-bold block text-left">ProManage</p> -->
            <!-- title app -->
            <!-- create new message -->
            <div class="flex gap-1">
                <a @click="reload()"
                    class=" rounded-full hover:bg-gray-700 bg-gray-800 w-10 h-10 p-2 block">
                    <i class="fa-solid fa-rotate"></i>
                </a>
                <a @click="logout()"
                    class=" rounded-full hover:bg-gray-700 bg-gray-800 w-10 h-10 p-2 block">
                    <i class="fa-solid fa-right-from-bracket"></i>
                </a>
            </div>
            <!-- create new message -->
        </div>
        <!-- search box -->
        <div class="search-box p-4 flex-none">
            <form onsubmit="">
                <div class="relative">
                    <label>
                        <input
                            class="rounded-full py-2 pr-6 pl-10 w-full border border-gray-800 focus:border-gray-700 bg-gray-800 focus:bg-gray-900 focus:outline-none text-gray-200 focus:shadow-md transition duration-300 ease-in"
                            type="text" value="" placeholder="Search Messenger" />
                        <span class="absolute top-0 left-0 mt-2 ml-3 inline-block">
                            <svg viewBox="0 0 24 24" class="w-6 h-6">
                                <path fill="#bbb"
                                    d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                            </svg>
                        </span>
                    </label>
                </div>
            </form>
        </div>
        <!-- search box -->
        <!-- Story -->
        <!-- <div class="active-users flex flex-row p-2 overflow-auto w-0 min-w-full">
                    <div class="text-sm text-center mr-4">
                        <button class="flex flex-shrink-0 focus:outline-none block bg-gray-800 text-gray-600 rounded-full w-20 h-20"
                                type="button">
                            <svg class="w-full h-full fill-current" viewBox="0 0 24 24">
                                <path d="M17 11a1 1 0 0 1 0 2h-4v4a1 1 0 0 1-2 0v-4H7a1 1 0 0 1 0-2h4V7a1 1 0 0 1 2 0v4h4z"/>
                            </svg>
                        </button>
                        <p>Your Story</p>
                    </div>
                    <div class="text-sm text-center mr-4"><div class="p-1 border-4 border-blue-600 rounded-full"><div class="w-16 h-16 relative flex flex-shrink-0">
                        <img class="shadow-md rounded-full w-full h-full object-cover"
                             src="https://randomuser.me/api/portraits/women/12.jpg"
                             alt=""
                        />
                    </div></div><p>Anna</p></div>
                    <div class="text-sm text-center mr-4"><div class="p-1 border-4 border-transparent rounded-full"><div class="w-16 h-16 relative flex flex-shrink-0">
                        <img class="shadow-md rounded-full w-full h-full object-cover"
                             src="https://randomuser.me/api/portraits/men/75.jpg"
                             alt=""
                        />
                        <div class="absolute bg-gray-900 p-1 rounded-full bottom-0 right-0">
                            <div class="bg-green-500 rounded-full w-3 h-3"></div>
                        </div>
                    </div></div><p>Jeff</p></div>
                    <div class="text-sm text-center mr-4"><div class="p-1 border-4 border-blue-600 rounded-full"><div class="w-16 h-16 relative flex flex-shrink-0">
                        <img class="shadow-md rounded-full w-full h-full object-cover"
                             src="https://randomuser.me/api/portraits/women/42.jpg"
                             alt=""
                        />
                    </div></div><p>Cathy</p></div>
                    <div class="text-sm text-center mr-4"><div class="p-1 border-4 border-transparent rounded-full"><div class="w-16 h-16 relative flex flex-shrink-0">
                        <img class="shadow-md rounded-full w-full h-full object-cover"
                             src="https://randomuser.me/api/portraits/women/87.jpg"
                             alt=""
                        />
                        <div class="absolute bg-gray-900 p-1 rounded-full bottom-0 right-0">
                            <div class="bg-green-500 rounded-full w-3 h-3"></div>
                        </div>
                    </div></div><p>Madona</p></div>
                    <div class="text-sm text-center mr-4"><div class="p-1 border-4 border-transparent rounded-full"><div class="w-16 h-16 relative flex flex-shrink-0">
                        <img class="shadow-md rounded-full w-full h-full object-cover"
                             src="https://randomuser.me/api/portraits/women/23.jpg"
                             alt=""
                        />
                        <div class="absolute bg-gray-900 p-1 rounded-full bottom-0 right-0">
                            <div class="bg-green-500 rounded-full w-3 h-3"></div>
                        </div>
                    </div></div><p>Emma</p></div>
                    <div class="text-sm text-center mr-4"><div class="p-1 border-4 border-blue-600 rounded-full"><div class="w-16 h-16 relative flex flex-shrink-0">
                        <img class="shadow-md rounded-full w-full h-full object-cover"
                             src="https://randomuser.me/api/portraits/men/65.jpg"
                             alt=""
                        />
                    </div></div><p>Mark</p></div>
                    <div class="text-sm text-center mr-4"><div class="p-1 border-4 border-blue-600 rounded-full"><div class="w-16 h-16 relative flex flex-shrink-0">
                        <img class="shadow-md rounded-full w-full h-full object-cover"
                             src="https://randomuser.me/api/portraits/women/65.jpg"
                             alt=""
                        />
                    </div></div><p>Eva</p></div>
                    <div class="text-sm text-center mr-4"><div class="p-1 border-4 border-transparent rounded-full"><div class="w-16 h-16 relative flex flex-shrink-0">
                        <img class="shadow-md rounded-full w-full h-full object-cover"
                             src="https://randomuser.me/api/portraits/men/31.jpg"
                             alt=""
                        />
                        <div class="absolute bg-gray-900 p-1 rounded-full bottom-0 right-0">
                            <div class="bg-green-500 rounded-full w-3 h-3"></div>
                        </div>
                    </div></div><p>Max</p></div>
                    <div class="text-sm text-center mr-4"><div class="p-1 border-4 border-blue-600 rounded-full"><div class="w-16 h-16 relative flex flex-shrink-0">
                        <img class="shadow-md rounded-full w-full h-full object-cover"
                             src="https://randomuser.me/api/portraits/men/81.jpg"
                             alt=""
                        />
                    </div></div><p>Adam</p></div>
                </div> -->
        <!-- story -->
        <!-- contact -->
        <div class="contacts p-2 flex-1 overflow-y-scroll">
            <!-- normal contact -->
            <p class="text-left px-4 block group-hover:block">Workspace</p>
            <!-- <ContactNormal avatar="https://randomuser.me/api/portraits/women/61.jpg" name="Teknikal Support" msg="loremipsum" time="just now"></ContactNormal> -->
            <ContactNormal v-for="data in wokspacedata" :detail="data.deskripsi" :avatar='url + data.avatar' :name="data.name" msg="loremipsum" time="just now"></ContactNormal>
            
            <!-- normal contact -->
            <!-- unread contact -->
        </div>
        <!-- contact -->
    </section>
</template>

<script>
import axios from 'axios';
import ContactNormal from '../parsial/chat/contact-normal.vue';
import ContactUnread from '../parsial/chat/contact-unread.vue';
import NewWorkspace from '../parsial/chat/new-workspace.vue';
import workspace from '@/plugin/workspace';
import eventBus from '@/plugin/eventBus';
    export default {
        mixins : [workspace],
        name: 'chat-leftsection',
        data() {
            return {
                modalshow : false,
                admin : false,
                wokspacedata : [],
                url : ''
            }
        },
        components : {
            ContactNormal,
            ContactUnread,
            NewWorkspace
        },
        created() {

        },
        mounted() {
            this.getworkspace();
            this.url = process.env.VUE_APP_WEB
            // eventBus.$on('workspace', (data) => {
            //     this.wokspacedata = data;
            // });
        },
        methods: {
            reload(){
                location.reload()
            },
            parsingdata(data){
                this.$emit("parsing", data);
                this.modalshow = data 
            },
            logout(){
                this.$confirm('are you sure to logout ',"Are you sure?",'question').then(() => {
                    this.$cookies.remove("login");
                    this.$alert("",'Logout','success',{
                            confirmButtonText: 'OK',
                            showCancelButton: false,
                            showConfirmButton: false,
                            timer: 3000
                    });
                    this.$router.push('/login')
                });
            }
        },
    }
</script>