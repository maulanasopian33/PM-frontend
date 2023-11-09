<template>
    <div class="flex flex-row justify-end my-1">
        <div class="messages text-sm text-white grid grid-flow-row gap-2">
            <div class="flex items-end flex-col group">
                <div class="text-right py-3 px-2 rounded-t-3xl rounded-l-3xl bg-blue-700 max-w-xs lg:max-w-md">
                    <div class=" bg-blue-900/80 w-full text-left text-xs p-3 rounded-md flex gap-3 border-l-4 border-white cursor-pointer">
                        <div>
                            <svg fill="currentColor" width="30px" height="30px" viewBox="-2 -2 24 24"
                                xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin" class="jam jam-task-list"
                                stroke="currentColor">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path
                                        d="M6 0h8a6 6 0 0 1 6 6v8a6 6 0 0 1-6 6H6a6 6 0 0 1-6-6V6a6 6 0 0 1 6-6zm0 2a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4H6zm6 7h3a1 1 0 0 1 0 2h-3a1 1 0 0 1 0-2zm-2 4h5a1 1 0 0 1 0 2h-5a1 1 0 0 1 0-2zm0-8h5a1 1 0 0 1 0 2h-5a1 1 0 1 1 0-2zm-4.172 5.243L7.95 8.12a1 1 0 1 1 1.414 1.415l-2.828 2.828a1 1 0 0 1-1.415 0L3.707 10.95a1 1 0 0 1 1.414-1.414l.707.707z">
                                    </path>
                                </g>
                            </svg>
                        </div>
                        <div class="w-full">
                            <span class="text-gray-400">Todo list</span>
                            <p>{{ todoName }}</p>
                        </div>
                    </div>
                    <p :id="msg"
                        class="break-all px-6 py-1">
                        {{ message }}</p>
                    
                </div>
                <div class="flex my-2">
                        <button type="button" @click="chatpos(msg)"
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
    export default {
        name : 'ChatRightMention',
        props : ['msg'],
        data() {
            return {
                message : '',
                todoName : '',
                todoId : '',
            }
        },
        created() {
            try {
                let tempdata    = JSON.parse(this.msg);
                this.message    = tempdata['message'];
                this.todoName   = tempdata['todo']
                console.log(this.msg)
                
            } catch (error) {
                return true;
            }
        },
        methods : {
            chatpos(pos){
                // Mendapatkan posisi elemen berdasarkan ID
                const element = document.getElementById(pos);
                const rect = element.getBoundingClientRect();
                console.log(rect.y)

        },
        }
    }
</script>