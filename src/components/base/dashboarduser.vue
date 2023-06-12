<template>
    <div class="bg-gray-900 md:p-20 p-5 text-white text-left cursor-default">
        <h1 class="text-xl my-4">Dashboard</h1>
        <div class="bg-gray-800 w-full md:w-fit md:my-10 p-6 px-10 md:px-20 rounded-md">
            <div class="flex">
                <div class="md:w-2/3">
                    <h2 class="py-5 text-3xl">Welcome Back {{ myname }}</h2>
                    <span>"Pekerjaanmu itu akan mengisi sebagian besar hidupmu dan satu-satunya cara untuk benar-benar puas adalah melakukan apa yang kamu yakini, sebagai pekerjaan hebat. Dan satu-satunya cara untuk melakukan pekerjaan hebat adalah dengan mencintai apa yang Anda lakukan. Jika kamu belum menemukannya, teruslah mencari. Seperti halnya semua masalah hati, kamu akan tahu, kapan kamu akan menemukannya. " -Steve Job</span>
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
                <span class="text-xs font-extralight text-gray-400">Total tasks : {{ sumcreated }} task </span>
                <ul class="border border-gray-800 rounded overflow-hidden" v-for="(data,index) in created">
                    <router-link :to="'/dashboard/'+encoder(filterworkspace(index).name+','+url+filterworkspace(index).avatar)">
                        <li class='flex cursor-default items-center px-4 py-2 hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-800 transition-all duration-300 ease-in-out' >
                            <i class="fa-sharp fa-solid fa-laptop-file"></i>
                            <div class="flex flex-row items-center justify-between w-full">
                                <a class="break-all px-4"><span class="font-bold text-blue-500">{{ index }}</span></a>
                                <router-link :to="'/dashboard/'+encoder(filterworkspace(index).name+','+url+filterworkspace(index).avatar)" v-show="data.length >= 3" class="bg-blue-500 text-white px-2 py-1 rounded-md">more</router-link>
                            </div>
                        </li>
                    </router-link>
                    <router-link v-for="item in data" :to="'/detail/'+encoder(filterworkspace(index).name+','+url+filterworkspace(index).avatar+','+item.name+','+item.id_task)">
                        <li class='flex cursor-pointer pl-10 items-center px-4 py-2  hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-800 transition-all duration-300 ease-in-out'>
                            <i class="fa-sharp fa-solid fa-list-check items-start"></i>
                            <div class="flex flex-col">
                                <a class="break-all px-4" >{{ item.name  }}</a>
                            </div>
                        </li>
                    </router-link>
                </ul>
            </div>
            <div class="bg-gray-800 md:w-1/3 p-5 rounded-md">
                <h2 class="font-medium text-lg my-2">On Progress</h2>
                <span class="text-xs font-extralight text-gray-400">Total tasks : {{ sumonprogress }} task </span>
                <ul class="border border-gray-800 rounded overflow-hidden" v-for="(data,index) in OnProgress">
                    <router-link :to="'/dashboard/'+encoder(filterworkspace(index).name+','+url+filterworkspace(index).avatar)">
                        <li class='flex cursor-pointer items-center px-4 py-2  hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-800 transition-all duration-300 ease-in-out' >
                            <i class="fa-sharp fa-solid fa-laptop-file"></i>
                            <div class="flex flex-row items-center justify-between w-full">
                                <a class="break-all px-4"><span class="font-bold text-blue-500">{{ index }}</span></a>
                                <router-link :to="'/dashboard/'+encoder(filterworkspace(index).name+','+url+filterworkspace(index).avatar)" v-show="data.length >= 3" class="bg-blue-500 text-white px-2 py-1 rounded-md">more</router-link>
                            </div>
                        </li>
                    </router-link>
                    <router-link v-for="item in data" :to="'/detail/'+encoder(filterworkspace(index).name+','+url+filterworkspace(index).avatar+','+item.name+','+item.id_task)">
                        <li class='flex cursor-default pl-10 items-center px-4 py-2  hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-800 transition-all duration-300 ease-in-out'>
                            <i class="fa-sharp fa-solid fa-list-check items-start"></i>
                            <div class="flex flex-col">
                                <a class="break-all px-4" >{{ item.name  }}</a>
                            </div>
                        </li>
                    </router-link>
                </ul>
            </div>
            <div class="bg-gray-800 md:w-1/3 p-5 rounded-md">
                <h2 class="font-medium text-lg my-2">Finished</h2>
                <span class="text-xs font-extralight text-gray-400">Total tasks : {{ this.sumfinished }} task </span>
                <ul class="border border-gray-800 rounded overflow-hidden" v-for="(data,index) in finished">
                    <router-link :to="'/dashboard/'+encoder(filterworkspace(index).name+','+url+filterworkspace(index).avatar)">
                        <li v-for="item in data" class='flex cursor-pointer items-center px-4 py-2  hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-800 transition-all duration-300 ease-in-out' >
                            <i class="fa-sharp fa-solid fa-laptop-file"></i>
                            <div class="flex flex-row items-center justify-between w-full">
                                <a class="break-all px-4"><span class="font-bold text-blue-500">{{ index }}</span> - {{ item.name  }}</a>
                            </div>
                        </li>
                    </router-link>
                </ul>
            </div>
        </div>

    </div>
</template>

<script>
    import whois from '@/plugin/whois';
    import axios from 'axios';
    import workspace from '@/plugin/workspace';
    export default {
        mixins : [whois,workspace],
        name : 'dashboarduser',
        data() {
            return {
                created         : [],
                OnProgress      : [],
                finished        : [],
                wokspacedata    : [],
                sumfinished     : 0,
                sumonprogress   : 0,
                sumcreated      : 0,
                url             : process.env.VUE_APP_WEB,
                myname          : ''
            }
        },
        created(){
            this.getworkspace()
        },
        mounted(){
            this.gettask()
        },
        methods: {
            encoder(msg){
                var encode = btoa(msg); 
                return encode
            },
            filterworkspace(workspace){
                let data = this.wokspacedata.filter(function(el){
                                return workspace === el.name
                            })
                return {"name" : data[0].name, "avatar" : data[0].avatar}
            },
            gettask(){
                axios.get(process.env.VUE_APP_BASE+'/getbyassigment?order=dashboard',{
                    headers: {
                        "Authorization": `Bearer ${this.$cookies.get("login")}`
                    },
                    }).then(({data}) => {
                        this.created        = data.created.data
                        this.OnProgress     = data.onprogress.data
                        this.finished       = data.finished.data
                        this.sumcreated     = data.created.count
                        this.sumonprogress  = data.onprogress.count
                        this.sumfinished    = data.finished.count
                        // console.log(this.OnProgress)
                        // this.tasks = data;
                        // this.sum = data.count;
                        // this.filter(this.tasks)
                    }).catch((error) => {
                        this.$alert(error.message,'Error!','error');
                        // console.log(error)
                    });
            },
            group(datas) {
                // Membuat objek untuk menampung data terkelompokkan
                const groupeddata = {};
                // Iterasi setiap pesan chat dan kelompokkan berdasarkan tanggal
                datas.forEach(data => {
                    // const chatDate = new Date(data.time).toLocaleDateString();
                    if (groupeddata[data.workspace]) {
                        if(groupeddata[data.workspace].length < 3){
                            groupeddata[data.workspace].push(data);
                        }
                    } else {
                        groupeddata[data.workspace] = [data];
                    }
                });
                // for (const workspace in groupeddata) {
                //     // groupedChat[workspace].sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
                //     groupedChat[date].reverse();
                // }
                // Mengembalikan data terkelompokkan
                return groupeddata;
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
                // this.created = this.group(this.created)
                // this.created = this.group(this.created)
                this.sumfinished    = this.finished.length
                this.sumcreated     = this.created.length
                this.sumonprogress  = this.OnProgress.length
                this.created        = this.group(this.created)
                this.OnProgress     = this.group(this.OnProgress)
                this.finished       = this.group(this.finished)
            }
        },
    }
</script>