<template>
        <section class="flex flex-col flex-auto border-l border-gray-800">
            <modal name="create-task" :adaptive="true" height="auto" class="rounded-2xl">
                <div class=" text-gray-800 p-8 bg-gray-900">
                    <div class="flex flex-col justify-between w-full overflow-y-scroll">
                        <h2 class="text-lg font-bold text-left text-white">Add Task</h2>
                        <div class="w-full my-1">
                            <label for="" class="block text-sm text-left font-bold ml-1 mb-2 text-white">Task Name</label>
                            <input v-model="name_task" type="text"
                                class="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm">
                        </div>
                        <div class="w-full my-1">
                            <label for="" class="block text-sm text-left font-bold ml-1 mb-2 text-white">Priority</label>
                            <div class="inline-block relative w-full">
                                <select v-model="priority"
                                    class="block appearance-none mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center px-3 text-sm border-gray-300 rounded border">
                                    <option value="high">High</option>
                                    <option value="medium">Medium</option>
                                    <option value="low">Low</option>
                                </select>
                                <div
                                    class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20">
                                        <path
                                            d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                        </svg>
                                </div>
                            </div>
                        </div>
                        <div class="flex gap-2">
                            <div class="w-1/2">
                                <label for="" class="block text-sm text-left font-bold mb-2 text-white">Start Date</label>
                                <input v-model="startdate" type="date"
                                    class="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm">
                            </div>
                            <div class="w-1/2">
                                <label for="" class="block text-sm text-left font-bold ml-1 mb-2 text-white">Due Date</label>
                                <input type="date" v-model="duedate" class="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm" required />
                            </div>
                        </div>
                        <div class="w-full my-1">
                            <label for="" class="block text-sm text-left font-bold ml-1 mb-2 text-white">Assigment</label>
                            <div class="flex flex-wrap overflow-x-scroll">
                                <span v-for="(tag, index) in emailDomains" v-bind:key="index" class=" m-1 inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold bg-indigo-500 hover:bg-indigo-300 text-white hover:text-black cursor-pointer">
                                    {{ tag }}
                                    <button
                                        type="button"
                                        class="flex-shrink-0 -mr-0.5 ml-1.5 inline-flex hover:bg-indigo-400 p-1 rounded-full"
                                        v-on:click="removeTag(index)">
                                        <svg class="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
                                        <path stroke-linecap="round" stroke-width="1.5" d="M1 1l6 6m0-6L1 7" />
                                        </svg>
                                    </button>
                                </span>
                            </div>
                        </div>
                        <div class="flex mt-1 overflow-x-scroll bg-white rounded-md shadow-sm focus:outline-none focus:shadow-outline border border-gray-300">
                            <div class="flex-grow text-gray-700 text-center">
                                <select class="h-full rounded-lg py-2 pl-2 w-full pr-4 block appearance-none leading-normal transition duration-150 ease-in-out sm:text-sm sm:leading-5 outline-none" @change="processTagsOnKeyUpEvent($event.target.value)">
                                <option value="" >Pilih Anggota Tim</option>
                                <option v-for="team in teams" :value="team.name" :key="team.id">{{ team.name }}</option>
                                </select>
                            </div>
                        </div>
                        <label for="email" class="block text-sm text-left font-bold ml-1 mb-2 text-white mt-5">Deskripsi</label>
                        <div class="relative">
                            <textarea v-model="deskripsi" type="text" height="100px" class="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm" required aria-describedby="email-error"></textarea>
                        </div>
                        <div class="flex gap-1 justify-between">
                            <button @click="savetask()" class="text-center mt-5 w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm">
                            Save Task
                            </button>
                            <button @click="hidePopup" class="text-center mt-5 w-full border rounded-xl outline-none py-5  border-blue-700 text-white text-sm shadow-sm">
                            Cancel
                            </button>

                        </div>
                    </div>
                </div>
            </modal>
        <!-- chat header -->
        <div class="chat-header px-6 py-4 flex flex-row flex-none justify-between items-center shadow">
            <div class="flex">
                <!-- avatar -->
                <div class="w-12 h-12 mr-4 relative flex flex-shrink-0">
                    <img class="shadow-md rounded-full w-full h-full object-cover"
                        :src="avatar" alt="" />
                </div>
                <!-- avatar -->
                <!-- contact info -->
                <div class="text-sm text-left">
                    <p class="font-bold text-base">{{ names }}</p>
                    <p class="font-light">{{ detail }}</p>
                </div>
                <!-- contact info -->
            </div>

            <div class="flex">
                <router-link :to="'/diskusi/'+encoder(names+','+avatar)" class="block rounded-full text-gray-100 hover:bg-gray-700 bg-gray-800 w-10 h-10 p-2">
                    <svg  viewBox="0 0 24 24" id="meteor-icon-kit__solid-activity" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" clip-rule="evenodd" d="M23.9072 13.5C23.169 19.4195 18.1194 24 12 24C5.88057 24 0.830982 19.4195 0.0928345 13.5H6.99999C7.50152 13.5 7.96987 13.2493 8.24807 12.8321L10.144 9.98816L11.5204 18.2466C11.744 19.5879 13.4938 19.9635 14.2481 18.8321L17.8028 13.5H23.9072ZM0.0928345 10.5C0.830982 4.58053 5.88057 0 12 0C18.1194 0 23.169 4.58053 23.9072 10.5H17C16.4985 10.5 16.0301 10.7507 15.7519 11.1679L13.856 14.0118L12.4796 5.7534C12.256 4.4121 10.5062 4.03652 9.75192 5.16795L6.19722 10.5H0.0928345Z" fill="currentColor"></path></g></svg>
                </router-link>
                <!-- <a href="#" class="block rounded-full hover:bg-gray-700 bg-gray-800 w-10 h-10 p-2 ml-4">
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

                </a> -->
            </div>
        </div>
        <div class="chat-body md:p-4 pt-10 flex-1 overflow-y-scroll">
            <div class="text-end w-full px-4 md:10 md:mb-3">
                <span @click="showPopup" class="bg-blue-600 cursor-pointer px-5 py-3 rounded-full">Add Task</span>
            </div>
            <div class="md:py-10 md:px-5 md:flex">
                <div class="rounded-lg m-0 md:mx-2 my-1 bg-gray-800 p-5 mx-2 md:w-1/2 lg:w-1/3">
                    <div class="flex mb-10">
                        <h3 class="w-1/2 text-xl md:text-2xl">Created</h3>
                        <h3 class="w-1/2 text-right">{{ created.length }}/{{ sum }}</h3>
                    </div>
                    <div class="h-full" @drop="onDrop($event, 1)" @dragover.prevent @dragenter.prevent >
                    <div v-for="task in created" :key="task.id_task">
                        <div draggable @dragstart="startDrag($event, task, 1)">
                            <router-link class="drag-el" :to="'/detail/'+encoder(names+','+avatar+','+task.name+','+task.id_task)">
                                <div class="relative hover:bg-sky-100 hover:text-gray-800 flex items-center justify-between rounded-lg p-3">
                                        
                                    <div class="ml-4 mr-6 min-w-0 flex-auto inline-flex gap-4 items-center  group-hover:block">
                                        <i class="fa-sharp fa-solid fa-list-check"></i>
                                        <h3 class="text-left text-lg">{{ task.name }}</h3>
                                        <!-- <div class="flex items-center text-sm text-gray-600">
                                            <p class="truncate">{{ task.deskripsi }}</p>
                                        </div> -->
                                    </div>
                                </div>
                            </router-link>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="rounded-lg m-0 md:mx-2 my-1 bg-gray-800 p-5 mx-2 md:w-1/2 lg:w-1/3">
                    <div class="flex mb-10">
                        <h3 class="w-1/2 text-xl md:text-2xl">On Progress</h3>
                        <h3 class="w-1/2 text-right">{{ OnProgress.length }}/{{ sum }}</h3>
                    </div>
                    <div class="h-full" @drop="onDrop($event, 2)" @dragover.prevent @dragenter.prevent>
                        <div v-for="task in OnProgress" :key="task.id_task">
                            <div draggable @dragstart="startDrag($event, task, 2)">
                                <router-link :to="'/detail/'+encoder(names+','+avatar+','+task.name+','+task.id_task)">
                                    <div class="relative hover:bg-sky-100 hover:text-gray-800 flex items-center justify-between rounded-lg p-3">
                                        
                                        <div class="ml-4 mr-6 min-w-0 flex-auto inline-flex gap-4 items-center  group-hover:block">
                                            <i class="fa-sharp fa-solid fa-list-check"></i>
                                            <h3 class="text-left text-lg">{{ task.name }}</h3>
                                            <!-- <div class="flex items-center text-sm text-gray-600">
                                                <p class="truncate">{{ task.deskripsi }}</p>
                                            </div> -->
                                        </div>
                                    </div>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="rounded-lg m-0 md:mx-2 my-1 p-5 mx-2 md:w-1/2 lg:w-1/3 bg-gray-800">
                    <div class="flex mb-10">
                        <h3 class="w-1/2 text-xl md:text-2xl">Finished</h3>
                        <h3 class="w-1/2 text-right">{{ finished.length }}/{{ sum }}</h3>
                    </div>
                    <div class="h-full" @drop="onDrop($event, 3)" @dragover.prevent @dragenter.prevent>
                        <div v-for="task in finished" :key="task.id_task">
                            <div draggable @dragstart="startDrag($event, task, 2)">
                                <router-link :to="'/detail/'+encoder(names+','+avatar+','+task.name+','+task.id_task)">
                                    <div class="relative hover:bg-sky-100 hover:text-gray-800 flex items-center justify-between rounded-lg p-3">
                                        
                                        <div class="ml-4 mr-6 min-w-0 flex-auto inline-flex gap-4 items-center  group-hover:block">
                                            <i class="fa-sharp fa-solid fa-list-check"></i>
                                            <h3 class="text-left text-lg">{{ task.name }}</h3>
                                            <!-- <div class="flex items-center text-sm text-gray-600">
                                                <p class="truncate">{{ task.deskripsi }}</p>
                                            </div> -->
                                        </div>
                                    </div>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios';
    export default {
        name : 'dashboardtask',
        props: [
            'name'
        ],
        watch: { 
            name: function(newVal, oldVal) { // watch it
                this.detaildata();
                this.gettask();
            }
        },
        data() {
            return {
                names : '',
                detail : 'antmediahost.com',
                avatar : '',
                id : '',
                url : '',
                tasks   : [],
                created : [],
                OnProgress : [],
                finished : [],
                sum : 0,
                name_task : '',
                priority : '',
                startdate : '',
                duedate : '',
                assigment : '',
                deskripsi : '',
                emailDomain: '',
                emailDomains: [],
                teams : [],

            }
        },
        mounted() {
            this.url = process.env.VUE_APP_WEB
            this.getdatauser();
            this.detaildata();
            this.gettask();
        },
        methods: {
            sanitizeTag(value) {
                return value.replace(/<[^>]*>?/gm, '').trim();
            },
            addIfUnique(array, value) {
                return [...new Set(array).add(value)];
            },
            processTagsOnKeyUpEvent(value) {
                if (this.emailDomains.length < 20) {
                this.emailDomain = this.sanitizeTag(value);

                if (value.length > 0) {
                    this.revertTag();
                    let tags = [value];
                    tags.forEach((tag) => {
                        if (tag.length > 0) {
                        this.emailDomains = this.addIfUnique(this.emailDomains, tag);
                        }
                    });
                }
                } else {
                this.revertTag();
                }
            },
            removeTag(index) {
                this.emailDomains.splice(index, 1);
            },
            revertTag() {
                this.emailDomain = '';
            },
            showPopup() {
                this.$modal.show('create-task')
            },
            hidePopup() {
                this.$modal.hide('create-task')
            },
            // drag & drop
            startDrag(evt, item, pos) {
                evt.dataTransfer.dropEffect = 'move'
                evt.dataTransfer.effectAllowed = 'move'
                evt.dataTransfer.setData('itemID', item.id_task)
                evt.dataTransfer.setData('pos', pos)
            },
            onDrop(evt, to) {
                const itemID = evt.dataTransfer.getData('itemID')
                let poss = this.tasks.findIndex(function(e){
                    return e.id_task == itemID
                })
                switch(to){
                    case 1 :
                        this.tasks[poss].status = 'created'
                        this.filter(this.tasks)
                        this.updatestatustask(itemID,'created')
                        break;
                    case 2 :
                        this.tasks[poss].status = 'OnProgress'
                        this.filter(this.tasks)
                        this.updatestatustask(itemID,'OnProgress')
                        break;
                    case 3 :
                        this.tasks[poss].status = 'finished'
                        this.filter(this.tasks)
                        this.updatestatustask(itemID,'finished')
                        break;
                }
            },
            // end
            updatestatustask(id, status){
                let formData = new FormData();
                formData.append("status", status);
                axios.post(process.env.VUE_APP_BASE+"/task/"+id, formData, {
                    headers: {
                        "Authorization": `Bearer ${this.$cookies.get("login")}`
                    },
                }).then((response) => {
                    // console.log(response);
                    if(response.data.status){
                        this.$alert("", 'Success updated', 'success');
                    }else{
                        this.$alert(response.data.message, 'Error!', 'error');
                    }
                }).catch((error) => {
                    // console.log(error)
                    this.$alert(error.message, 'Error!', 'error');
                });
            },
            getdatauser(){
                axios.get(process.env.VUE_APP_BASE+'/whois',{
                    headers: {
                        "Authorization": `Bearer ${this.$cookies.get("login")}`
                    },
                    }).then(({data}) => {
                        this.myname = data.name
                        this.id = data.id
                        this.getdatateam()
                    }).catch((error) => {
                        // console.log(error)
                    });
            },
            getdatateam(){
                axios.get(process.env.VUE_APP_BASE+'/get-team',{
                    headers: {
                        "Authorization": `Bearer ${this.$cookies.get("login")}`
                    },
                    }).then(({data}) => {
                        // console.log('datateam',data.data)
                        let selfdata = this.myname
                        this.teams = data.data.filter(function(e){
                            return e.name !== selfdata
                        });
                    }).catch((error) => {
                        // console.log(error)
                    });
            },
            selectFile(){
                let fileInputElement = this.$refs.file
                fileInputElement.click();
            },
            savetask(){
                let data = [];
                this.emailDomains.forEach((item) => {
                data.push(this.teams.filter(function(e){
                    return e.name == item
                })[0].id)
                });
                let decode = atob(this.$route.params.workspace);
                let splitdetail = decode.split(','); 
                let names = splitdetail[0].toString();
                this.createTask = false;
                let formData = new FormData();
                formData.append("name", this.name_task);
                formData.append("priority", this.priority);
                formData.append("start_date", this.startdate);
                formData.append("due_date", this.duedate);
                formData.append("status", 'created');
                formData.append("assigment", this.id+','+data.toString());
                formData.append("deskripsi", this.deskripsi);
                formData.append("workspace", names);
                console.log(formData)
                axios.post(process.env.VUE_APP_BASE+'/task', formData, {
                headers: {
                "Content-Type": "multipart/form-data",
                "Authorization": `Bearer ${this.$cookies.get("login")}`
                },
                }).then((response) => {
                // console.log(response)
                this.$router.go()
                }).catch((error) => {
                this.$alert("", error,'error');
                });
            },
            parsingdata(data){
                this.show = data
            },
            encoder(msg){
                var encode = btoa(msg);
                return encode.replace('+','xMl3Jk').replace('/','Por21Ld').replace('==','Ml34').replace('=','Ml32');
            },
            createtask(){
                this.$emit("parsingdata", true);
            },
            detaildata(){
                let decode = atob(this.name);
                let splitdetail = decode.split(','); 
                this.names = splitdetail[0].toString();
                this.avatar = splitdetail[1];

            },
            gettask(){
                axios.get(process.env.VUE_APP_BASE+'/task/workspace/'+this.names,{
                    headers: {
                        "Authorization": `Bearer ${this.$cookies.get("login")}`
                    },
                    }).then(({data}) => {
                        this.tasks = data.data;
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