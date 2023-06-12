<template>
    <div class="flex flex-col md:flex-row w-full gap-5 bg-gray-900 h-full p-4 md:p-10 text-white text-left">
        <div class="w-full md:w-1/3 bg-gray-800 rounded-md p-5">
            <h1 class="font-semibold py-5 text-lg">Halo, {{ whoisdata.name }}</h1>
            <div class="flex flex-col ">
                <span :class="classpos1" @click="pos(1)" class="p-2 hover:bg-gray-900 rounded-md cursor-pointer">Profil</span>
                <span :class="classpos2" @click="pos(2)" class="p-2 hover:bg-gray-900 rounded-md cursor-pointer">Ubah Password</span>
            </div>
        </div>
        <div v-if="profil" class="bg-gray-800 w-full h-fit rounded-md p-7">
            <h1 class="py-5 font-semibold text-lg">Informasi Akun</h1>
            <div class="flex text-start flex-col md:flex-row md:items-center mb-2">
                <label for="nama" class="md:w-1/3">Nama Lengkap <span class="text-red-600">*</span></label>
                <input v-model="whoisdata.name" type="text" name="" id="nama"
                    class=" text-gray-100 autofill:bg-gray-800 bg-gray-800 py-3 px-4 block w-full border-2 border-gray-400 rounded-md text-sm focus:border-gray-500 focus:ring-gray-500 shadow-sm">
            </div>
            <div class="flex md:items-center text-start flex-col md:flex-row mb-2">
                <label for="nama" class="md:w-1/3">Username <span class="text-red-600">*</span></label>
                <input v-model="whoisdata.username" type="text" name="" id="nama"
                    class=" text-gray-100 autofill:bg-gray-800 bg-gray-800 py-3 px-4 block w-full border-2 border-gray-400 rounded-md text-sm focus:border-gray-500 focus:ring-gray-500 shadow-sm">
            </div>
            <div class="flex md:items-center text-start flex-col md:flex-row mb-2">
                <label for="nama" class="md:w-1/3">Email <span class="text-red-600">*</span></label>
                <input v-model="whoisdata.email" type="text" name="" id="nama"
                    class=" text-gray-100 autofill:bg-gray-800 bg-gray-800 py-3 px-4 block w-full border-2 border-gray-400 rounded-md text-sm focus:border-gray-500 focus:ring-gray-500 shadow-sm">
            </div>
            <div class="flex md:items-center text-start flex-col md:flex-row mb-2">
                <label for="nama" class="md:w-1/3">Nomor Whatsapp <span class="text-red-600">*</span></label>
                <input v-model="whoisdata.nomor" type="text" name="" id="nama"
                    class=" text-gray-100 autofill:bg-gray-800 bg-gray-800 py-3 px-4 block w-full border-2 border-gray-400 rounded-md text-sm focus:border-gray-500 focus:ring-gray-500 shadow-sm">
            </div>
            <div class="flex gap-2 mt-5 justify-end">
                <button @click="updatedata" :disabled="onsave" class="disabled:bg-blue-400 px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-400"><i v-show="onsave" class="fa-solid fa-spinner fa-spin"></i> Update</button>
                <button class="px-4 py-2 bg-orange-600 rounded-md hover:bg-orange-400">Kembali</button>
            </div>
        </div>
        <div v-else class="bg-gray-800 w-full h-fit rounded-md p-7">
            <h1 class="py-5 font-semibold text-lg">Ubah Password</h1>
            <div class="flex text-start flex-col md:flex-row md:items-center mb-2">
                <label for="newpassword" class="md:w-1/3">Password Baru <span class="text-red-600">*</span></label>
                <input v-model="newpassword" type="password" name="" id="newpassword"
                    class=" text-gray-100 autofill:bg-gray-800 bg-gray-800 py-3 px-4 block w-full border-2 border-gray-400 rounded-md text-sm focus:border-gray-500 focus:ring-gray-500 shadow-sm">
            </div>
            <div class="flex text-start flex-col md:flex-row md:items-center mb-2">
                <label for="verifypassword" class="md:w-1/3">Konfimasi Password <span class="text-red-600">*</span></label>
                <input v-model="verifypassword" type="password" name="" id="verifypassword"
                    class=" text-gray-100 autofill:bg-gray-800 bg-gray-800 py-3 px-4 block w-full border-2 border-gray-400 rounded-md text-sm focus:border-gray-500 focus:ring-gray-500 shadow-sm">
            </div>
            <div class="flex text-start flex-col md:flex-row md:items-center mb-2">
                <label for="oldpassword" class="md:w-1/3">Password Lama<span class="text-red-600">*</span></label>
                <input v-model="oldpassword" type="password" name="" id="oldpassword"
                    class=" text-gray-100 autofill:bg-gray-800 bg-gray-800 py-3 px-4 block w-full border-2 border-gray-400 rounded-md text-sm focus:border-gray-500 focus:ring-gray-500 shadow-sm">
            </div>
            <div class="flex gap-2 mt-5 justify-end">
                <button :disabled="onupdate" @click="updatepassword" class="disabled:bg-blue-400 px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-400"><i v-show="onupdate" class="fa-solid fa-spinner fa-spin"></i> Update</button>
                <button class="px-4 py-2 bg-orange-600 rounded-md hover:bg-orange-400">Kembali</button>
            </div>
        </div>
    </div>
</template>
<script>
import whois from '@/plugin/whois.js'
import axios from 'axios'
export default {
    name : 'profil',
    mixins : [whois],
    props : ['dataprofil'],
    data() {
        return {
            onsave : false,
            onupdate : false,
            profil : true,
            whoisdata : [],
            newpassword : '',
            oldpassword : '',
            verifypassword : '',
            classpos1 : 'bg-gray-900',
            classpos2 : ''
        }
    }, 
    mounted(){
        
    },
    created(){
    },
    methods : {
        pos(i){
            switch (i) {
                case 1:
                    this.classpos1 = 'bg-gray-900'
                    this.classpos2 = ''
                    this.profil = true
                    break;
                case 2:
                    this.classpos1 = ''
                    this.classpos2 = 'bg-gray-900'
                    this.profil = false
                    break;
            
                default:
                    break;
            }
        },
        updatepassword(){
            this.onupdate = true
            if (this.newpassword !== this.verifypassword) {
                this.$alert("Konfirmasi Password Tidak Sama",'Error!','error');
            }
            axios.post(process.env.VUE_APP_BASE+'/update/password', {
                        newpassword : this.newpassword,
                        oldpassword : this.oldpassword
                    }, {
            headers: {
              "Content-Type": "multipart/form-data",
              "Authorization": `Bearer ${this.$cookies.get("login")}`
            },
            }).then(({data}) => {
                this.onupdate = false
                if(data.status){
                    this.$modal.hide('edit-modal')
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
                this.onupdate = false
              this.$alert(error.message,'Error!','error');
            });
        },
        updatedata(){
            this.onsave = true;
            axios.post(process.env.VUE_APP_BASE+'/update-member', this.whoisdata, {
            headers: {
              "Content-Type": "multipart/form-data",
              "Authorization": `Bearer ${this.$cookies.get("login")}`
            },
            }).then(({data}) => {
                if(data.status){
                    this.$modal.hide('edit-modal')
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
                this.onsave =false
            }).catch((error) => {
                this.onsave =false
                this.$alert(error.message,'Error!','error');
            });
        },
        
    }
}
</script>