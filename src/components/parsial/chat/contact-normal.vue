<template>
    <router-link :to="name">
        <div class="flex justify-between items-center p-3 hover:bg-gray-800 rounded-lg relative">
            <div class="w-16 h-16 relative flex flex-shrink-0">
                <img class="shadow-md rounded-full w-full h-full object-cover"
                    :src="avatar" alt="" />
            </div>
            <div class="flex-auto min-w-0 ml-4 mr-6 hidden md:block group-hover:block">
                <h3 class="text-left text-lg">{{ name }}</h3>
                <div class="flex items-center text-sm text-gray-600">
                    <div class=" w-full flex">
                        <img class="shadow-md rounded-full w-5 h-w-5 border-white border-1 -mx-1"
                            src="https://randomuser.me/api/portraits/men/22.jpg" alt="User2" />
                        <img class="shadow-md rounded-full w-5 h-w-5 border-white border-1 -mx-1"
                            src="https://randomuser.me/api/portraits/men/22.jpg" alt="User2" />
                        <img class="shadow-md rounded-full w-5 h-w-5 border-white border-1 -mx-1"
                            src="https://randomuser.me/api/portraits/men/22.jpg" alt="User2" />
                        <img class="shadow-md rounded-full w-5 h-w-5 border-white border-1 -mx-1"
                            src="https://randomuser.me/api/portraits/men/22.jpg" alt="User2" />
                        <img class="shadow-md rounded-full w-5 h-w-5 border-white border-1 -mx-1"
                            src="https://randomuser.me/api/portraits/men/22.jpg" alt="User2" />
                    </div>
                    <!-- <div class="min-w-0">

                        <p class="truncate">{{ msg }}</p>
                    </div> -->
                    
                    <!-- <p class="ml-2 whitespace-no-wrap">{{ time }}</p> -->
                </div>
            </div>
        </div>
    </router-link>
</template>

<script>
    export default {
        name: 'contact-normal',
        props: ['name','msg','time','avatar']
    }
</script>