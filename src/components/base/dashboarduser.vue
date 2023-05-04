<template>
    <div class="bg-gray-900 md:p-20 p-5 text-white text-left cursor-default">
        <h1 class="text-xl my-4">Dashboard</h1>
        <div class="bg-gray-800 w-full md:w-fit md:my-10 p-6 px-10 md:px-20 rounded-md">
            <div class="flex">
                <div class="md:w-2/3">
                    <h2 class="py-5 text-3xl">Welcome Back {{ myname }}</h2>
                    <span>"Pekerjaanmu itu akan mengisi sebagian besar hidupmu dan satu-satunya cara untuk benar-benar puas adalah melakukan apa yang kamu yakini, sebagai pekerjaan hebat. Dan satu-satunya cara untuk melakukan pekerjaan hebat adalah dengan mencintai apa yang Anda lakukan. Jika kamu belum menemukannya, teruslah mencari. Seperti halnya semua masalah hati, kamu akan tahu, kapan kamu akan menemukannya. " -Steve Job</span>
                    <p class="text-lg mt-4">CUAKKS..</p>
                </div>
                <div class="hidden md:block md:w-1/3">
                    <img src="/img/dashboarduser.svg" class="w-52">
                </div>
            </div>
        </div>
        <h2 class="text-xl my-4">Tasks List</h2>
        <div class="flex gap-2 cursor-default flex-col md:flex-row">
            <div class="bg-gray-800 md:w-1/3 p-5 rounded-md">
                <h2 class="font-medium text-lg my-2">Created</h2>
                <ul class="border border-gray-800 rounded overflow-hidden">
                    <li class='flex items-center px-4 py-2  hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-800 transition-all duration-300 ease-in-out'  v-for="data in created">
                        <i class="fa-solid fa-file"></i>
                        <a class="break-all px-4"><span class="font-bold text-blue-500">{{ data.workspace }}</span> - {{ data.name  }}</a>
                    </li>
                </ul>
                <span class="text-xs font-extralight text-gray-400">Total tasks : {{ created.length }} task </span>
            </div>
            <div class="bg-gray-800 md:w-1/3 p-5 rounded-md">
                <h2 class="font-medium text-lg my-2">On Progress</h2>
                <ul class="border border-gray-800 rounded overflow-hidden">
                    <li class='flex cursor-default items-center px-4 py-2  hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-800 transition-all duration-300 ease-in-out'  v-for="data in OnProgress">
                        <i class="fa-solid fa-file"></i>
                        <a class="break-all px-4"><span class="font-bold text-blue-500">{{ data.workspace }}</span> - {{ data.name  }}</a>
                    </li>
                </ul>
                <span class="text-xs font-extralight text-gray-400">Total tasks : {{ OnProgress.length }} task </span>
            </div>
            <div class="bg-gray-800 md:w-1/3 p-5 rounded-md">
                <h2 class="font-medium text-lg my-2">Finished</h2>
                <ul class="border border-gray-800 rounded overflow-hidden">
                    <li class='flex cursor-default items-center px-4 py-2  hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-800 transition-all duration-300 ease-in-out'  v-for="data in finished">
                        <i class="fa-solid fa-file"></i>
                        <a class="break-all px-4"><span class="font-bold text-blue-500">{{ data.workspace }}</span> - {{ data.name  }}</a>
                    </li>
                </ul>
                <span class="text-xs font-extralight text-gray-400">Total tasks : {{ finished.length }} task </span>
            </div>
        </div>

    </div>
</template>

<script>
    import whois from '@/plugin/whois';
    import axios from 'axios';
    export default {
        mixins : [whois],
        name : 'dashboarduser',
        data() {
            return {
                created : [],
                OnProgress : [],
                finished : [],
                myname:''
            }
        },
        mounted(){
            this.gettask()
        },
        methods: {
            gettask(){
                axios.get(process.env.VUE_APP_BASE+'/getbyassigment',{
                    headers: {
                        "Authorization": `Bearer ${this.$cookies.get("login")}`
                    },
                    }).then(({data}) => {
                        this.tasks = data;
                        this.sum = data.count;
                        this.filter(this.tasks)
                    }).catch((error) => {
                        this.$alert(error.message,'Error!','error');
                        // console.log(error)
                    });
            },
            filter(data){
                this.created = [];
                this.OnProgress = [];
                this.finished = [];
                data.forEach((item, index) => {
                    switch(item.status){
                        case 'created' :
                            this.created.push(item)
                            break;
                        case 'OnProgress' :
                            this.OnProgress.push(item)
                            break;
                        case 'finished' :
                            this.finished.push(item)
                            break;
                    }
                });
            }
        },
    }
</script>