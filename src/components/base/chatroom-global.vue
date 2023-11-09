<template>
    <section class="flex flex-col border-l h-screen border-gray-800">
        <!-- chat header -->
        <div class=" chat-header px-2 py-4 flex-shrink-0 justify-between items-center shadow">
            <div class="flex items-center">
                <button type="button" @click="$router.go(-1)"
                    class="flex flex-shrink-0 focus:outline-none rounded-full p-4 block text-blue-600 hover:text-blue-700 w-14 h-14">
                    <svg viewBox="0 0 1024 1024"><path fill="#ffffff" d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"></path><path fill="#ffffff" d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"></path></svg>
                </button>
                <!-- avatar -->
                <div class="w-12 h-12 mr-4 relative flex flex-shrink-0">
                    <img class="shadow-md rounded-full w-full h-full object-cover" :src="avatar" alt="" />
                </div>
                <!-- avatar -->
                <!-- contact info -->
                <div class="text-sm text-left">
                    <p class="font-bold text-base">Diskusi {{ name }}</p>
                    <p class="font-light">antmediahost.com</p>
                </div>
                <!-- contact info -->
            </div>

            <!-- <div class="flex">
                <a href="#" class="block rounded-full hover:bg-gray-700 bg-gray-800 w-10 h-10 p-2">
                    <svg viewBox="0 0 20 20" class="w-full h-full fill-current text-blue-500">
                        <path
                            d="M11.1735916,16.8264084 C7.57463481,15.3079672 4.69203285,12.4253652 3.17359164,8.82640836 L5.29408795,6.70591205 C5.68612671,6.31387329 6,5.55641359 6,5.00922203 L6,0.990777969 C6,0.45097518 5.55237094,3.33066907e-16 5.00019251,3.33066907e-16 L1.65110039,3.33066907e-16 L1.00214643,8.96910337e-16 C0.448676237,1.13735153e-15 -1.05725384e-09,0.445916468 -7.33736e-10,1.00108627 C-7.33736e-10,1.00108627 -3.44283713e-14,1.97634814 -3.44283713e-14,3 C-3.44283713e-14,12.3888407 7.61115925,20 17,20 C18.0236519,20 18.9989137,20 18.9989137,20 C19.5517984,20 20,19.5565264 20,18.9978536 L20,18.3488996 L20,14.9998075 C20,14.4476291 19.5490248,14 19.009222,14 L14.990778,14 C14.4435864,14 13.6861267,14.3138733 13.2940879,14.7059121 L11.1735916,16.8264084 Z" />
                    </svg>
                </a>
                <a href="#" class="block rounded-full hover:bg-gray-700 bg-gray-800 w-10 h-10 p-2 ml-4">
                    <svg viewBox="0 0 20 20" class="w-full h-full fill-current text-blue-500">
                        <path
                            d="M0,3.99406028 C0,2.8927712 0.894513756,2 1.99406028,2 L14.0059397,2 C15.1072288,2 16,2.89451376 16,3.99406028 L16,16.0059397 C16,17.1072288 15.1054862,18 14.0059397,18 L1.99406028,18 C0.892771196,18 0,17.1054862 0,16.0059397 L0,3.99406028 Z M8,14 C10.209139,14 12,12.209139 12,10 C12,7.790861 10.209139,6 8,6 C5.790861,6 4,7.790861 4,10 C4,12.209139 5.790861,14 8,14 Z M8,12 C9.1045695,12 10,11.1045695 10,10 C10,8.8954305 9.1045695,8 8,8 C6.8954305,8 6,8.8954305 6,10 C6,11.1045695 6.8954305,12 8,12 Z M16,7 L20,3 L20,17 L16,13 L16,7 Z" />
                    </svg>
                </a>
                <a href="#" class="block rounded-full hover:bg-gray-700 bg-gray-800 w-10 h-10 p-2 ml-4">
                    <svg viewBox="0 0 20 20" class="w-full h-full fill-current text-blue-500">
                        <path
                            d="M2.92893219,17.0710678 C6.83417511,20.9763107 13.1658249,20.9763107 17.0710678,17.0710678 C20.9763107,13.1658249 20.9763107,6.83417511 17.0710678,2.92893219 C13.1658249,-0.976310729 6.83417511,-0.976310729 2.92893219,2.92893219 C-0.976310729,6.83417511 -0.976310729,13.1658249 2.92893219,17.0710678 Z M9,11 L9,10.5 L9,9 L11,9 L11,15 L9,15 L9,11 Z M9,5 L11,5 L11,7 L9,7 L9,5 Z" />
                    </svg>

                </a>
            </div> -->
        </div>
        <!-- chat header -->
        <!-- chat body -->
        <div ref="chatbody" class="chat-body flex-grow p-4 overflow-y-scroll scroll-smooth">
            <div v-if="showchat">
                
                <div v-for="(chat, index) in message" :key="index">
                    <ChatTime :time="(index == new Date().toLocaleDateString()) ? 'Today' : index"></ChatTime>
                    <div v-for="(item, index) in chat" :key="index">
                        <chatLeftlike v-show="item.type === 'like'" v-if="item.from !== myname && item.from !== 'system'"
                            :from="item.from"></chatLeftlike>
                        <ChatLeftimg @click="showSingle(url + item.message)" v-if="item.type === 'file' && item.from !== myname && item.from !== 'system'" caption="" :from="item.from" :img="url + item.message" avatar="" ></ChatLeftimg>
                        <chatRightlike v-show="item.type === 'like'" v-if="item.from === myname"></chatRightlike>
                        <ChatRightimg  v-if="item.type === 'file' && item.from === myname" caption="" :img="url + item.message" ></ChatRightimg>
                        <ChatRightNormal v-show="item.type === 'normal'" v-if="item.from === myname" :msg="item.message">
                        </ChatRightNormal>
                        <ChatSystem v-if="item.from === 'system'" :msg="item.message"></ChatSystem>
                        <ChatLeftNormal v-show="item.type === 'normal'"
                            v-if="item.from !== myname && item.from !== 'system'" :msg="item.message" :from="item.from"
                            avatar="https://randomuser.me/api/portraits/women/61.jpg"></ChatLeftNormal>
                    </div>
                </div>
            </div>
            <div v-else>
                <section class="overflow-auto p-8 py-20 w-full h-full flex flex-col ">
                    <header v-if="this.files.length == 0"
                        class="border-dashed border-2 border-gray-400 py-12 flex flex-col justify-center items-center h-72">
                        <p class="mb-3 font-semibold text-white flex flex-wrap justify-center px-6">
                            <span>Drag and drop your</span>&nbsp;<span>files anywhere or</span>
                        </p>
                        <input @change="onFilePicked()" type="file" ref="file" multiple class="hidden" />
                        <button @click="selectFile()" id="button"
                            class="mt-2 rounded-sm px-3 py-1 bg-gray-800 hover:bg-gray-900 focus:shadow-outline focus:outline-none">
                            Upload a file
                        </button>
                    </header>
                    <div v-else class="w-full">
                        <article tabindex="0"
                            class="group hasImage w-full text-black h-3/4 rounded-md focus:outline-none focus:shadow-outline  cursor-pointer relative text-transparent hover:text-gray-700 shadow-sm">
                            <img :src="this.files[0].data" alt="upload preview"
                                class="img-preview w-full h-full max-w-sm m-auto sticky object-cover rounded-md bg-fixed" />

                            <section
                                class="flex flex-col rounded-md text-xs break-words w-full h-full z-20 absolute top-0 py-2 px-3">
                                <h1 class="flex-1">{{ this.files[0].name }}</h1>
                                <div class="flex">
                                    <span class="p-1">
                                        <i>
                                            <svg class="fill-current w-4 h-4 ml-auto pt-" xmlns="http://www.w3.org/2000/svg"
                                                width="24" height="24" viewBox="0 0 24 24">
                                                <path
                                                    d="M5 8.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5zm9 .5l-2.519 4-2.481-1.96-4 5.96h14l-5-8zm8-4v14h-20v-14h20zm2-2h-24v18h24v-18z" />
                                            </svg>
                                        </i>
                                    </span>

                                    <p class="p-1 size text-xs"></p>
                                    <button @click="deletefileup(0)"
                                        class="delete ml-auto focus:outline-none hover:bg-gray-300 p-1 rounded-md">
                                        <svg class="pointer-events-none fill-current w-4 h-4 ml-auto"
                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                            <path class="pointer-events-none"
                                                d="M3 6l3 18h12l3-18h-18zm19-4v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.316c0 .901.73 2 1.631 2h5.711z" />
                                        </svg>
                                    </button>
                                </div>
                            </section>
                        </article>
                    </div>
                    <!-- <p v-show="largeFilse" class="flex justify-center items-center px-3 py-2 bg-gray-800 rounded-md my-2"><svg width="25px" height="25px" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" fill="#ffffff" clip-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm-1.5-5.009c0-.867.659-1.491 1.491-1.491.85 0 1.509.624 1.509 1.491 0 .867-.659 1.509-1.509 1.509-.832 0-1.491-.642-1.491-1.509zM11.172 6a.5.5 0 0 0-.499.522l.306 7a.5.5 0 0 0 .5.478h1.043a.5.5 0 0 0 .5-.478l.305-7a.5.5 0 0 0-.5-.522h-1.655z"></path></g></svg><span>File terlalu besar mamank</span></p>
                    <ul id="gallery" class="flex flex-1 flex-wrap m-4">
                        <li v-if="this.files.length == 0"
                            class="h-full w-full text-center flex flex-col items-center justify-center items-center">
                            <img class="mx-auto w-32"
                                src="https://user-images.githubusercontent.com/507615/54591670-ac0a0180-4a65-11e9-846c-e55ffce0fe7b.png"
                                alt="no data" />
                            <span class="text-small text-gray-500">No files selected</span>
                        </li>
                        <li v-for="(file, index) in files" v-if="file.type =='img'" class="block p-1 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/8 h-24">
                            <article tabindex="0" class="group hasImage w-full h-full rounded-md focus:outline-none focus:shadow-outline bg-gray-100 cursor-pointer relative text-transparent hover:text-white shadow-sm">
                                <img :src="file.data" alt="upload preview" class="img-preview w-full h-full sticky object-cover rounded-md bg-fixed" />

                                <section class="flex flex-col rounded-md text-xs break-words w-full h-full z-20 absolute top-0 py-2 px-3">
                                    <h1 class="flex-1">{{ file.name }}</h1>
                                    <div class="flex">
                                    <span class="p-1">
                                        <i>
                                        <svg class="fill-current w-4 h-4 ml-auto pt-" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                            <path d="M5 8.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5zm9 .5l-2.519 4-2.481-1.96-4 5.96h14l-5-8zm8-4v14h-20v-14h20zm2-2h-24v18h24v-18z" />
                                        </svg>
                                        </i>
                                    </span>

                                    <p class="p-1 size text-xs"></p>
                                    <button @click="deletefileup(index)" class="delete ml-auto focus:outline-none hover:bg-gray-300 p-1 rounded-md">
                                        <svg class="pointer-events-none fill-current w-4 h-4 ml-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path class="pointer-events-none" d="M3 6l3 18h12l3-18h-18zm19-4v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.316c0 .901.73 2 1.631 2h5.711z" />
                                        </svg>
                                    </button>
                                    </div>
                                </section>
                            </article>
                        </li>
                        <li v-for="(file, index) in files" v-if="file.type =='file'" class="block p-1 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/8 h-24 text-black">
                            <article tabindex="0" class="group w-full h-full rounded-md focus:outline-none focus:shadow-outline elative bg-gray-100 cursor-pointer relative shadow-sm">
                            <img alt="upload preview" class="img-preview hidden w-full h-full sticky object-cover rounded-md bg-fixed" />

                            <section class="flex flex-col rounded-md text-xs break-words w-full h-full z-20 absolute top-0 py-2 px-3">
                                <h1 class="flex-1 group-hover:text-blue-800">{{ file.name }}</h1>
                                <div class="flex">
                                <span class="p-1 text-blue-800">
                                    <i>
                                    <svg class="fill-current w-4 h-4 ml-auto pt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path d="M15 2v5h5v15h-16v-20h11zm1-2h-14v24h20v-18l-6-6z" />
                                    </svg>
                                    </i>
                                </span>
                                <p class="p-1 size text-xs text-gray-700"></p>
                                <button @click="deletefileup(index)" class="delete ml-auto focus:outline-none hover:bg-gray-300 p-1 rounded-md text-gray-800">
                                    <svg class="pointer-events-none fill-current w-4 h-4 ml-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path class="pointer-events-none" d="M3 6l3 18h12l3-18h-18zm19-4v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.316c0 .901.73 2 1.631 2h5.711z" />
                                    </svg>
                                </button>
                                </div>
                            </section>
                            </article>
                        </li>
                    </ul>
                    <input type=""> -->
                </section>
            </div>
            <!-- <ChatSystem msg="mmsdamsdmasmdmmsadma"></ChatSystem> -->
            <!-- <ChatRightimg img="https://unsplash.com/photos/8--kuxbxuKU/download?force=true&w=640" caption="test ini pesannya"></ChatRightimg> -->
        </div>
        <!-- chat body -->
        <!-- chat footer -->
        <div class="chat-footer flex-shrink-0 h-24">
            <div class="flex flex-row items-center p-4">
                <button type="button" @click="showchat = !showchat"
                    class="flex flex-shrink-0 focus:outline-none mx-2 block text-blue-600 hover:text-blue-700 w-6 h-6">
                    <svg viewBox="0 0 20 20" class="w-full h-full fill-current">
                        <path
                            d="M10,1.6c-4.639,0-8.4,3.761-8.4,8.4s3.761,8.4,8.4,8.4s8.4-3.761,8.4-8.4S14.639,1.6,10,1.6z M15,11h-4v4H9  v-4H5V9h4V5h2v4h4V11z" />
                    </svg>
                </button>
                <button type="button" @click="showchat = !showchat"
                    class="flex flex-shrink-0 focus:outline-none mx-2 text-blue-600 hover:text-blue-700 w-6 h-6">
                    <svg viewBox="0 0 20 20" class="w-full h-full fill-current">
                        <path
                            d="M11,13 L8,10 L2,16 L11,16 L18,16 L13,11 L11,13 Z M0,3.99406028 C0,2.8927712 0.898212381,2 1.99079514,2 L18.0092049,2 C19.1086907,2 20,2.89451376 20,3.99406028 L20,16.0059397 C20,17.1072288 19.1017876,18 18.0092049,18 L1.99079514,18 C0.891309342,18 0,17.1054862 0,16.0059397 L0,3.99406028 Z M15,9 C16.1045695,9 17,8.1045695 17,7 C17,5.8954305 16.1045695,5 15,5 C13.8954305,5 13,5.8954305 13,7 C13,8.1045695 13.8954305,9 15,9 Z" />
                    </svg>
                </button>

                <div class="relative flex-grow">
                    <label>
                        <input
                            class="rounded-full py-2 pl-3 pr-10 w-full border border-gray-800 focus:border-gray-700 bg-gray-800 focus:bg-gray-900 focus:outline-none text-gray-200 focus:shadow-md transition duration-300 ease-in"
                            type="text" v-on:keyup.enter="sendmsg('normal')" v-model="txtchat" placeholder="Aa" />
                        <button type="button"
                            class="absolute top-0 right-0 mt-2 mr-3 flex flex-shrink-0 focus:outline-none block text-blue-600 hover:text-blue-700 w-6 h-6">
                            <svg viewBox="0 0 20 20" class="w-full h-full fill-current">
                                <path
                                    d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM6.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm7 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm2.16 3a6 6 0 0 1-11.32 0h11.32z" />
                            </svg>
                        </button>
                    </label>
                </div>
                <button @click="sendmsg('normal')" type="button"
                    class="flex flex-shrink-0 focus:outline-none mx-2 block text-blue-600 hover:text-blue-700 w-10 h-10">
                    <svg viewBox="0 0 24 24" class="w-full h-full fill-current">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path
                                d="M16.1391 2.95907L7.10914 5.95907C1.03914 7.98907 1.03914 11.2991 7.10914 13.3191L9.78914 14.2091L10.6791 16.8891C12.6991 22.9591 16.0191 22.9591 18.0391 16.8891L21.0491 7.86907C22.3891 3.81907 20.1891 1.60907 16.1391 2.95907ZM16.4591 8.33907L12.6591 12.1591C12.5091 12.3091 12.3191 12.3791 12.1291 12.3791C11.9391 12.3791 11.7491 12.3091 11.5991 12.1591C11.3091 11.8691 11.3091 11.3891 11.5991 11.0991L15.3991 7.27907C15.6891 6.98907 16.1691 6.98907 16.4591 7.27907C16.7491 7.56907 16.7491 8.04907 16.4591 8.33907Z">
                            </path>
                        </g>
                    </svg>
                </button>
                <button @click="sendmsg('like')" type="button"
                    class="flex flex-shrink-0 focus:outline-none mx-2 block text-blue-600 hover:text-blue-700 w-6 h-6">
                    <svg viewBox="0 0 20 20" class="w-full h-full fill-current">
                        <path
                            d="M11.0010436,0 C9.89589787,0 9.00000024,0.886706352 9.0000002,1.99810135 L9,8 L1.9973917,8 C0.894262725,8 0,8.88772964 0,10 L0,12 L2.29663334,18.1243554 C2.68509206,19.1602453 3.90195042,20 5.00853025,20 L12.9914698,20 C14.1007504,20 15,19.1125667 15,18.000385 L15,10 L12,3 L12,0 L11.0010436,0 L11.0010436,0 Z M17,10 L20,10 L20,20 L17,20 L17,10 L17,10 Z" />
                    </svg>
                </button>
            </div>
        </div>
        <!-- chat footer -->
    </section>
</template>

<script>

import ChatLeftimg from '../parsial/chat/chat-leftimg.vue';
import ChatLeftNormal from '../parsial/chat/chat-leftNormal.vue';
import chatLeftlike from '@/components/parsial/chat/chat-likeleft.vue'
import ChatRightimg from '../parsial/chat/chat-rightimg.vue';
import ChatRightNormal from '../parsial/chat/chat-rightNormal.vue';
import chatRightlike from '@/components/parsial/chat/chat-likeright.vue'
import ChatSystem from '../parsial/chat/chat-system.vue';
import ChatTime from '../parsial/chat/chat-time.vue';
// import Echo from "laravel-echo"
// import Pusher from "pusher-js"
import axios from 'axios'
export default {
    name: "chatroom-global",
    props: ['divisi'],
    components: { ChatLeftNormal, ChatTime, ChatLeftimg, ChatRightNormal, ChatRightimg, ChatSystem, chatLeftlike, chatRightlike },
    data() {
        return {
            wokspacedata : [],
            message: [],
            subtitle : '',
            gettaskname : '',
            msgrender: [],
            txtchat: '',
            showchat: true,
            myname: '',
            url: '',
            files: [],
            upload: [],
            name : '',
            avatar : '',
            largeFile: false,
            detailview : false,
            test : '',
        }
    },
    mounted() {
        this.getworkspace();
        document.addEventListener('uploadfile', this.uploadfileevent);
    },
    created() {
        this.url = process.env.VUE_APP_WEB
        this.getdatauser()
        
        // setTimeout(() => {
        //     this.getchat()
        //     this.listenchat()
        //     // this.getdatatask(this.id_workspace)
        // }, 3000);
    },
    methods: {
        uploadfileevent(event) {
            this.showchat = false;
            const data = event.detail;
            var imageContent = data.split(';')[1].split(',')[1];
            // Lakukan apa yang perlu dilakukan dengan data di sini
            let filename = "Promanage-"+ Math.ceil(Math.random()*9999999999999) + '.jpg'
            var file = new File([this.base64ToArrayBuffer(imageContent)], filename, {type: 'image/png'});
            this.upload = file;
            const fileReader = new FileReader()
            fileReader.addEventListener('load', () => {
                this.files.push({ data: fileReader.result, name: this.upload.name, type: 'img' })
            })
            fileReader.readAsDataURL(file)
        },
        base64ToArrayBuffer(base64){
            var binaryString = window.atob(base64);
            var length = binaryString.length;
            var bytes = new Uint8Array(length);
            for (var i = 0; i < length; i++) {
                bytes[i] = binaryString.charCodeAt(i);
            }
            return bytes.buffer;
        },
        scrollToBottom() {
            this.$nextTick(() => {
                const chatBody = this.$refs.chatbody;
                chatBody.scrollTop = chatBody.scrollHeight;
            });
        },
        getworkspace(){
            axios.get(process.env.VUE_APP_BASE+'/get-workspace',{
                headers: {
                    "Authorization": `Bearer ${this.$cookies.get("login")}`
                },
                }).then(({data}) => {
                    this.wokspacedata = data;
                    // console.log(data)
                    this.decoder()

                }).catch((error) => {
                    console.log(error.response.status)
                    // switch(error.response.status){
                    //     case 401 :
                    //         this.$cookies.remove("login")
                    //         this.$router.push('/login')
                    //     break;
                    // }
                });
        },
        decoder(){
            let data = this.$route.params.workspace;
            let decode = atob(data.replace('xMl3Jk','+').replace('Por21Ld','/').replace('Ml34','==').replace('Ml32','='));
            let splitdetail = decode.split(','); 
            this.name = splitdetail[0].toString();
            this.avatar = splitdetail[1].toString();
            // this.parsingtaskname = splitdetail[2].toString();)
            // console.log(splitdetail)
            let thisworkspace = this.wokspacedata.filter(function(el){
                                    return splitdetail[0].toString() === el.name
                                })
            this.subtitle = thisworkspace[0].name
            this.id_workspace = thisworkspace[0].id
            this.getchat()
            this.listenchat()
            // this.avatar = splitdetail[1];
        },
        callto(){
            this.$emit('statusview', true)
        },
        deletefileup(index) {
            this.files.splice(index, 1)
            this.showchat = true
        },
        groupChatByDate(chatData) {
            // Membuat objek untuk menampung data terkelompokkan
            const groupedChat = {};
            // Iterasi setiap pesan chat dan kelompokkan berdasarkan tanggal
            chatData.forEach(chat => {
                const chatDate = new Date(chat.time).toLocaleDateString();

                if (groupedChat[chatDate]) {
                    groupedChat[chatDate].push(chat);
                } else {
                    groupedChat[chatDate] = [chat];
                }
            });
            for (const date in groupedChat) {
                groupedChat[date].sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
                // groupedChat[date].reverse();
            }
            // Mengembalikan data terkelompokkan
            return groupedChat;
        },
        getdatauser() {
            axios.get(process.env.VUE_APP_BASE + '/whois', {
                headers: {
                    "Authorization": `Bearer ${this.$cookies.get("login")}`
                },
            }).then(({ data }) => {

                this.myname = data.name
            }).catch((error) => {
                this.$alert(error.message, 'Error!', 'error');
            });
        },
        sendnotif(msg,from,type){
            let form = JSON.stringify({
                message : msg,
                from    : from,
                reply   : false,
                time    : new Date().toISOString().slice(0, 19).replace('T', ' '),
                type    : type
            })
            var config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: process.env.VUE_APP_BASE+'/sendNotif',
                headers: { 
                    "Authorization": `Bearer ${this.$cookies.get("login")}`,
                    "Content-Type": "application/json"
                },
                data : form
                };
            axios(config).then(() => {
                
            }).catch((error) => {
                this.$alert(error.message,'Error Send Notif!','error');
            });
          },
          getdatatask(data){
                axios.get(process.env.VUE_APP_BASE+'/task/bytask/'+data,{
                headers: {
                    "Authorization": `Bearer ${this.$cookies.get("login")}`
                },
                }).then(({data}) => {
                    this.gettaskname = data.data.data[0].name;
                    // this.assigmentdata = detaildata.assigment.split(',')
                    // this.todo = data.data
                }).catch((error) => {
                    this.$alert("Get Task Datas", error.message,'error');
                });
            },
        sendmsg(type) {
            if (this.showchat) {
                let form = '';
                switch (type) {
                    case 'like':
                        form = JSON.stringify({
                            msg: 'like',
                            from: this.myname,
                            reply: false,
                            type: type
                        })
                        break;
                    case 'normal':
                        form = JSON.stringify({
                            msg: this.txtchat,
                            from: this.myname,
                            reply: false,
                            type: type
                        })
                }
                var config = {
                    method: 'post',
                    maxBodyLength: Infinity,
                    url: process.env.VUE_APP_BASE + '/workspace/chat/' + this.id_workspace,
                    headers: {
                        "Authorization": `Bearer ${this.$cookies.get("login")}`,
                        "Content-Type": "application/json"
                    },
                    data: form
                };
                axios(config).then(() => {
                    this.sendnotif(this.myname + " Mengirimkan Pesan/"+this.gettaskname,this.myname,'normal')
                    this.txtchat = ''
                }).catch((error) => {
                    this.$alert(error.message, 'Error!', 'error');
                });
            } else {
                this.sendfile()
            }

        },
        sendfile() {
            this.$loading(true)
            let formData = new FormData();
            formData.append("msg", this.upload);
            formData.append("type", "file");
            formData.append("from", this.myname);
            formData.append("reply", 0);
            formData.append("time", new Date().toISOString().slice(0, 19).replace('T', ' '));
            axios.post(process.env.VUE_APP_BASE + '/workspace/chat/' + this.id_workspace, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${this.$cookies.get("login")}`
                },
            }).then(() => {
                this.showchat = true;
                this.sendnotif("mengirimkan file",this.myname,'image')
                
                this.$loading(false)
                this.files = [];
                // this.$router.go(this.$router.currentRoute)
            }).catch((error) => {
                this.$loading(false)
                this.$alert(error.message, 'Error!', 'error');
            });
        },
        scrolltobottom(){
            // console.log(this.$refs.chatbody.scrollHeight);
            // this.$refs.chatbody.scrollTo(0,this.$refs.chatbody.clientHeight)
            // console.log(this.$refs.chatbody.clientHeight)
        },
        listenchat() {
            let channel = 'chat-' + this.id_workspace
            this.$echo.channel(channel).listen('chat', (e) => {
                this.msgrender.push({ from: e.msg.from, message: e.msg.message, reply: e.msg.reply, time: e.msg.time, type: e.msg.type });
                this.message = this.groupChatByDate(this.msgrender)
                this.scrollToBottom();
            });
        },
        getchat() {
            axios.get(process.env.VUE_APP_BASE + '/workspace/chat/' + this.id_workspace, {
                headers: {
                    "Authorization": `Bearer ${this.$cookies.get("login")}`
                },
            }).then(({ data }) => {
                this.message = this.groupChatByDate(data.data)
                this.msgrender = data.data
                this.scrollToBottom();
                // console.log(data.data)
                // this.scrolltobottom()
            }).catch((error) => {
                this.$alert(error.message, 'Error!', 'error');
            });
        },
        onFilePicked() {
            if (this.$refs.file.files[0].size > 20971520) {
                this.largeFile = true
                setTimeout(() => {
                    this.largeFile = false
                }, 2000);
            } else {
                this.upload = this.$refs.file.files[0]
                const isImage = this.upload.type.match("image.*")
                if (isImage) {
                    const fileReader = new FileReader()
                    fileReader.addEventListener('load', () => {
                        this.files.push({ data: fileReader.result, name: this.upload.name, type: 'img' })
                    })
                    fileReader.readAsDataURL(this.upload)
                } else {
                    this.files.push({ data: "", name: this.upload.name, type: 'file' })
                }
            }
        },
        selectFile() {
            let fileInputElement = this.$refs.file
            fileInputElement.click();
        },


    },
}
</script>