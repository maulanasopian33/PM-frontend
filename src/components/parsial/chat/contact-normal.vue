<template>
    <router-link :to="'/dashboard/'+encoder(name+','+avatar)">
        <div class="flex justify-between items-center p-3 hover:bg-gray-800 rounded-lg relative">
            <div class="w-16 h-16 relative flex flex-shrink-0">
                <img class="shadow-md rounded-full w-full h-full object-cover"
                    :src="avatar" alt="" />
            </div>
            <div class="flex-auto ml-4 mr-6 block group-hover:block">
                <h3 class="text-left text-lg">{{ name }}</h3>
                <div class="flex items-center text-sm text-gray-600">
                    <p class="truncate">{{ detail }}</p>
                </div>
            </div>
        </div>
    </router-link>
</template>

<script>
    export default {
        name: 'contact-normal',
        props: ['name','detail','time','avatar'],
        methods: {
            encoder(msg){
                var encode = btoa(msg); 
                return encode
            }
        },
    }
</script>