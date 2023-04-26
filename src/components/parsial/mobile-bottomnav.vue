<template>
    <div class="w-full">
        <div class="px-7 bg-gray-900 shadow-lg rounded-2xl">
            <div class="flex">
                <div class="flex-1 group">
                    <a @click="setaction(0)" class="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-white">
                        <span class="block px-1 pt-1 pb-1">
                            <i :class="icon1" class="fa-solid text-2xl pt-1 mb-1 block"></i>
                            <!-- <i class="far fa-home text-2xl pt-1 mb-1 block"></i> -->
                            <span class="block text-xs pb-2">{{ item1 }}</span>
                            <span :class="class1" class="block w-5 mx-auto h-1 group-hover:bg-white rounded-full"></span>
                        </span>
                    </a>
                </div>
                <div class="flex-1 group">
                    <a @click="setaction(1)" class="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-white">
                        <span class="block px-1 pt-1 pb-1">
                            <i :class="icon2" class="fa-solid text-2xl pt-1 mb-1 block"></i>
                            <!-- <i class="far fa-home text-2xl pt-1 mb-1 block"></i> -->
                            <span class="block text-xs pb-2">{{ item2 }}</span>
                            <span :class="class2" class="block w-5 mx-auto h-1 group-hover:bg-white rounded-full"></span>
                        </span>
                    </a>
                </div>
                <div class="flex-1 group">
                    <a @click="setaction(2)" class="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-white">
                        <span class="block px-1 pt-1 pb-1">
                            <!-- <i class="far fa-cog text-2xl pt-1 mb-1 block"></i> -->
                            <i :class="icon3" class="fa-solid text-2xl pt-1 mb-1 block"></i>
                            <span class="block text-xs pb-2">{{item3}}</span>
                            <span :class="class3" class="block w-5 mx-auto h-1 group-hover:bg-white rounded-full"></span>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name : 'mobile-bottomnav',
        props : ['item1','icon1','item2','icon2','item3','icon3'],
        data() {
            return {
                class1 : '',
                class2 : 'bg-white',
                class3 : ''
            }
        },
        methods: {
            setaction(action){
                this.$emit('action', action);
                switch (action) {
                    case 0:
                        this.class1 = 'bg-white'
                        this.class2 = ''
                        this.class3 = ''
                        break;
                    case 1:
                        this.class2 = 'bg-white'
                        this.class1 = ''
                        this.class3 = ''
                        break;
                    case 2:
                        this.class3 = 'bg-white'
                        this.class2 = ''
                        this.class1 = ''
                        break;
                    default:
                        break;
                }
            }
        },
    }
</script>
