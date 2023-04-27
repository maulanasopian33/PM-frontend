<template>
        <!-- Container -->
    <div class="bg-gray-200 flex flex-wrap shadow-xl min-h-screen w-full content-center justify-center py-10">
        <!-- <vue-multiple-themes
      :defaultTheme="'Pallet12'"
      >

    </vue-multiple-themes> -->
        <!-- Login component -->
        <div class="flex shadow-md">
            <!-- Login form -->
            <div class="flex flex-wrap content-center justify-center rounded-l-md bg-white"
                style="width: 24rem; height: 32rem;">
                <div class="w-72">
                    <!-- Heading -->
                    <img src="/img/icons/icon.png" class="h-20 mx-auto"/>
                    <h1 class="text-xl font-semibold">Welcome back</h1>
                    <small class="text-gray-400">Welcome back! Please enter your details</small>

                    <!-- Form -->
                    <form class="mt-4" @submit.prevent="postlogin">
                        <div class="mb-3">
                            <label class="mb-2 block text-xs font-semibold">Email/Username</label>
                            <input type="text" v-model="loginData.email" placeholder="Enter your email or username"
                                class="block w-full rounded-md border border-gray-300 focus:border-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-800 py-1 px-1.5 text-gray-500" />
                        </div>

                        <div class="mb-3">
                            <label class="mb-2 block text-xs font-semibold">Password</label>
                            <input type="password" v-model="loginData.password" placeholder="*****"
                                class="block w-full rounded-md border border-gray-300 focus:border-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-800 py-1 px-1.5 text-gray-500" />
                        </div>

                        <div class="mb-3 flex flex-wrap content-center">
                            <input id="remember" type="checkbox" v-model="remember" class="mr-1 checked:bg-gray-800" /> <label
                                for="remember"  class="mr-auto text-xs font-semibold">Remember for 30 days</label>
                            <a href="#" class="text-xs font-semibold text-gray-800">Forgot password?</a>
                        </div>

                        <div class="mb-3">
                            <button
                                class="mb-1.5 block w-full text-center bg-gray-800 text-white hover:bg-gray-500 px-2 py-1.5 rounded-md">Sign
                                in</button>
                        </div>
                    </form>

                    <!-- Footer -->
                    <div class="text-center">
                        <span class="text-xs text-gray-400 font-semibold">Don't have account?</span>
                        <a href="#" class="text-xs font-semibold text-gray-800">Sign up</a>
                    </div>
                </div>
            </div>

            <!-- Login banner -->
            <div class="flex hidden md:block flex-wrap content-center justify-center rounded-r-md" style="width: 24rem; height: 32rem;">
                <img class="w-full h-full bg-center bg-no-repeat bg-cover rounded-r-md"
                    src="/img/Promanage-login-hero.png">
            </div>

        </div>

        <!-- Credit -->
        <div class="mt-5 w-full">
            <p class="text-center flex justify-center font-bold">Powered by  <a target="_blank" href="https://www.instagram.com/_inubayuaji/"
                    class="text-purple-700"><img class="h-6" src="https://www.antmediahost.com/wp-content/uploads/2021/12/Logo-AntMediaHost.webp"/></a>.
            </p>
        </div>
    </div>
</template>

<script>
//   import VueMultipleThemes from "vue-multiple-themes";
import axios from 'axios'
    export default {
        name : 'login',
        data(){
            return{
                loginData:{
                    email : '',
                    password : ''
                },
                remember : false,
            }
        },
        components : {
            // VueMultipleThemes,
        },
        mounted(){
            this.getstatus();
        },
        methods: {
            getstatus(){
                if(this.$cookies.get("login") !== null){
                    this.$router.push('/dashboard')
                }
            },
            postlogin(){
                this.$loading(true)
                axios
                    .post(process.env.VUE_APP_BASE+'/login',{
                        email : this.loginData.email,
                        password : this.loginData.password
                    })
                    .then(({data}) => {
                        this.$loading(false)
                        // this.$alert("", 'Berhasil Login', 'success');
                        if (this.remember) {
                            this.$cookies.set("login",data.data.token,60 * 60 * 24 * 30)
                        }else{
                            this.$cookies.set("login",data.data.token)
                        }
                        this.$router.push('/dashboard')
                    }).catch((error) => {
                        console.clear();
                        this.$loading(false)
                        this.$alert("", error.response.data.message,'error');
                    });
            }
        },
    }
</script>