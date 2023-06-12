<template>
    <div class="flex flex-row justify-start">
        <!-- avatar chat -->
        <vue-easy-lightbox
                :visible="visibleimgpre"
                :imgs="imgspre"
                @hide="handleHide"
                ></vue-easy-lightbox>
        <div class="w-10 h-10 relative flex flex-shrink-0 mr-4 bg-purple-600 justify-center items-center rounded-full">
            <span class="text-lg font-medium text-center">{{ getAvatarFromName(from) }}</span>
        </div>
        <div class="messages text-sm text-gray-700 grid grid-flow-col gap-2">
            <div class="flex flex-col items-center group">
                <div class="px-1 py-3 text-left rounded-r-3xl rounded-b-3xl bg-gray-800 max-w-xs lg:max-w-md text-gray-200">
                    <a class="block w-64 h-64 relative flex flex-shrink-0 max-w-xs lg:max-w-md" href="#">
                        <img class="absolute shadow-md w-full h-full rounded-2xl object-cover"
                            :src="img" :alt="caption" @click="showSingle(img)" />
                    </a>
                    <span class="p-6">
                        {{ caption }}
                    </span>

                </div>
                <div class="px-1 py-2  rounded-lg w-full mt-1 bg-gray-800 max-w-xs lg:max-w-md text-center ">
                    <p @click="download(img)" class="cursor-pointer text-white"><i class="fa-solid fa-download"></i> Download </p>
                </div>
                <div v-show="false" class="flex my-2">
                    <button type="button"
                        class="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2">
                        <svg viewBox="0 0 20 20" class="w-full h-full fill-current">
                            <path d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2S12.2,11.215,12.2,10S11.216,7.8,10.001,7.8z
         M3.001,7.8C1.786,7.8,0.8,8.785,0.8,10s0.986,2.2,2.201,2.2S5.2,11.214,5.2,10S4.216,7.8,3.001,7.8z M17.001,7.8
        C15.786,7.8,14.8,8.785,14.8,10s0.986,2.2,2.201,2.2S19.2,11.215,19.2,10S18.216,7.8,17.001,7.8z" />
                        </svg>
                    </button>
                    <button type="button"
                        class="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2">
                        <svg viewBox="0 0 20 20" class="w-full h-full fill-current">
                            <path
                                d="M19,16.685c0,0-2.225-9.732-11-9.732V2.969L1,9.542l7,6.69v-4.357C12.763,11.874,16.516,12.296,19,16.685z" />
                        </svg>
                    </button>
                    <button type="button"
                        class="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2">
                        <svg viewBox="0 0 24 24" class="w-full h-full fill-current">
                            <path
                                d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.54-4.46a1 1 0 0 1 1.42-1.42 3 3 0 0 0 4.24 0 1 1 0 0 1 1.42 1.42 5 5 0 0 1-7.08 0zM9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import VueEasyLightbox from 'vue-easy-lightbox'
    export default {
        name: 'chatleftimg',
        props : ['caption','img', 'avatar','from'],
        components : {VueEasyLightbox},
        data(){
            return{
                // image preview
                visibleimgpre : false,
                imgspre : "",
                onHide : false,
                // [end] image preview
            }
        },
        methods: {
            getAvatarFromName(name) {
                const firstLetter = name.charAt(0).toUpperCase();
                return firstLetter;
            },
            showSingle(url){
                this.imgspre = url;
                this.visibleimgpre = true;
            },
            handleHide() {
                this.visibleimgpre = false
            },
            download(url){
                axios({
                    url: url,
                    method: 'GET',
                    responseType: 'blob',
                }).then((response) => {
                     var fileURL = window.URL.createObjectURL(new Blob([response.data]));
                     var fileLink = document.createElement('a');
                     const myArray = url.split("/");
                     fileLink.href = fileURL;
                     fileLink.setAttribute('download', myArray[myArray.length -1]);
                     document.body.appendChild(fileLink);
                     fileLink.click();
                });
            }
        },
    }
</script>