<template>
        <section class="flex flex-col flex-auto border-l border-gray-800">
        <!-- chat header -->
        <div class="chat-header px-6 py-4 flex flex-row flex-none justify-between items-center shadow">
            <div class="flex">
                <!-- avatar -->
                <div class="w-12 h-12 mr-4 relative flex flex-shrink-0">
                    <img class="shadow-md rounded-full w-full h-full object-cover"
                        src="https://via.placeholder.com/150/0000FF/808080?Text=logo" alt="" />
                </div>
                <!-- avatar -->
                <!-- contact info -->
                <div class="text-sm text-left">
                    <p class="font-bold text-base">{{ name }}</p>
                    <p class="font-light">{{ detail }}</p>
                </div>
                <!-- contact info -->
            </div>

            <div class="flex">
                <a href="#" class="block rounded-full hover:bg-gray-700 bg-gray-800 w-10 h-10 p-2">
                    <svg  viewBox="0 0 24 24" id="meteor-icon-kit__solid-activity" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" clip-rule="evenodd" d="M23.9072 13.5C23.169 19.4195 18.1194 24 12 24C5.88057 24 0.830982 19.4195 0.0928345 13.5H6.99999C7.50152 13.5 7.96987 13.2493 8.24807 12.8321L10.144 9.98816L11.5204 18.2466C11.744 19.5879 13.4938 19.9635 14.2481 18.8321L17.8028 13.5H23.9072ZM0.0928345 10.5C0.830982 4.58053 5.88057 0 12 0C18.1194 0 23.169 4.58053 23.9072 10.5H17C16.4985 10.5 16.0301 10.7507 15.7519 11.1679L13.856 14.0118L12.4796 5.7534C12.256 4.4121 10.5062 4.03652 9.75192 5.16795L6.19722 10.5H0.0928345Z" fill="#3B82F6"></path></g></svg>
                </a>
                <a href="#" class="block rounded-full hover:bg-gray-700 bg-gray-800 w-10 h-10 p-2 ml-4">
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

                </a>
            </div>
        </div>
        <div class="chat-body md:p-4 flex-1 overflow-y-scroll">
            <div class="text-end w-full px-4">
                <a href="" class="bg-orange-500 px-5 py-3 rounded-full">Add Task</a>
            </div>
            <div class="md:py-10 md:px-5 md:flex">
                <div class="rounded-lg mx-2 my-1 border border-2 border-gray-800 p-5 w-full md:w-1/3">
                    <div class="flex">
                        <h3 class="w-1/2 text-2xl">Created</h3>
                        <h3 class="w-1/2 text-right">2/3</h3>
                    </div>
                    <router-link :to="name">
                        <div class="relative my-2 flex items-center justify-between rounded-lg border border-gray-400 p-3 hover:bg-gray-800">
                            <div class="relative flex h-16 w-16 flex-shrink-0">
                                <img class="h-full w-full rounded-full object-cover shadow-md" :src="avatar" alt="" />
                            </div>
                            <div class="ml-4 mr-6 min-w-0 flex-auto group-hover:block">
                                <h3 class="text-left text-lg">{{ name }}</h3>
                                <div class="flex items-center text-sm text-gray-600">
                                    <div class="flex w-full">
                                        <img class="h-w-5 border-1 -mx-1 w-5 rounded-full border-white shadow-md"
                                            src="https://randomuser.me/api/portraits/men/22.jpg" alt="User2" />
                                        <img class="h-w-5 border-1 -mx-1 w-5 rounded-full border-white shadow-md"
                                            src="https://randomuser.me/api/portraits/men/22.jpg" alt="User2" />
                                        <img class="h-w-5 border-1 -mx-1 w-5 rounded-full border-white shadow-md"
                                            src="https://randomuser.me/api/portraits/men/22.jpg" alt="User2" />
                                        <img class="h-w-5 border-1 -mx-1 w-5 rounded-full border-white shadow-md"
                                            src="https://randomuser.me/api/portraits/men/22.jpg" alt="User2" />
                                        <img class="h-w-5 border-1 -mx-1 w-5 rounded-full border-white shadow-md"
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
                </div>
                <div class="rounded-lg mx-2 my-1 border border-2 border-gray-800 p-5 w-full md:w-1/3">
                    <div class="flex">
                        <h3 class="w-1/2 text-xl">On Progress</h3>
                        <h3 class="w-1/2 text-right">2/3</h3>
                    </div>
                    <router-link :to="name">
                        <div class="relative my-2 flex items-center justify-between rounded-lg border border-gray-400 p-3 hover:bg-gray-800">
                            <div class="relative flex h-16 w-16 flex-shrink-0">
                                <img class="h-full w-full rounded-full object-cover shadow-md" :src="avatar" alt="" />
                            </div>
                            <div class="ml-4 mr-6 min-w-0 flex-auto group-hover:block">
                                <h3 class="text-left text-lg">{{ name }}</h3>
                                <div class="flex items-center text-sm text-gray-600">
                                    <div class="flex w-full">
                                        <img class="h-w-5 border-1 -mx-1 w-5 rounded-full border-white shadow-md"
                                            src="https://randomuser.me/api/portraits/men/22.jpg" alt="User2" />
                                        <img class="h-w-5 border-1 -mx-1 w-5 rounded-full border-white shadow-md"
                                            src="https://randomuser.me/api/portraits/men/22.jpg" alt="User2" />
                                        <img class="h-w-5 border-1 -mx-1 w-5 rounded-full border-white shadow-md"
                                            src="https://randomuser.me/api/portraits/men/22.jpg" alt="User2" />
                                        <img class="h-w-5 border-1 -mx-1 w-5 rounded-full border-white shadow-md"
                                            src="https://randomuser.me/api/portraits/men/22.jpg" alt="User2" />
                                        <img class="h-w-5 border-1 -mx-1 w-5 rounded-full border-white shadow-md"
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
                </div>
                <div class="rounded-lg mx-2 my-1 p-5 w-full md:w-1/3 border border-2 border-gray-800">
                    <div class="flex">
                        <h3 class="w-1/2 text-2xl">Finished</h3>
                        <h3 class="w-1/2 text-right">2/3</h3>
                    </div>
                    <router-link :to="name">
                        <div
                            class="relative my-2 flex items-center justify-between rounded-lg border border-gray-400 p-3 hover:bg-gray-800">
                            <div class="relative flex h-16 w-16 flex-shrink-0">
                                <img class="h-full w-full rounded-full object-cover shadow-md" :src="avatar" alt="" />
                            </div>
                            <div class="ml-4 mr-6 hidden min-w-0 flex-auto group-hover:block md:block">
                                <h3 class="text-left text-lg">{{ name }}</h3>
                                <div class="flex items-center text-sm text-gray-600">
                                    <div class="flex w-full">
                                        <img class="h-w-5 border-1 -mx-1 w-5 rounded-full border-white shadow-md"
                                            src="https://randomuser.me/api/portraits/men/22.jpg" alt="User2" />
                                        <img class="h-w-5 border-1 -mx-1 w-5 rounded-full border-white shadow-md"
                                            src="https://randomuser.me/api/portraits/men/22.jpg" alt="User2" />
                                        <img class="h-w-5 border-1 -mx-1 w-5 rounded-full border-white shadow-md"
                                            src="https://randomuser.me/api/portraits/men/22.jpg" alt="User2" />
                                        <img class="h-w-5 border-1 -mx-1 w-5 rounded-full border-white shadow-md"
                                            src="https://randomuser.me/api/portraits/men/22.jpg" alt="User2" />
                                        <img class="h-w-5 border-1 -mx-1 w-5 rounded-full border-white shadow-md"
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
                    <router-link :to="name">
                        <div
                            class="relative my-2 flex items-center justify-between rounded-lg border border-gray-400 p-3 hover:bg-gray-800">
                            <div class="relative flex h-16 w-16 flex-shrink-0">
                                <img class="h-full w-full rounded-full object-cover shadow-md" :src="avatar" alt="" />
                            </div>
                            <div class="ml-4 mr-6 hidden min-w-0 flex-auto group-hover:block md:block">
                                <h3 class="text-left text-lg">{{ name }}</h3>
                                <div class="flex items-center text-sm text-gray-600">
                                    <div class="flex w-full">
                                        <img class="h-w-5 border-1 -mx-1 w-5 rounded-full border-white shadow-md"
                                            src="https://randomuser.me/api/portraits/men/22.jpg" alt="User2" />
                                        <img class="h-w-5 border-1 -mx-1 w-5 rounded-full border-white shadow-md"
                                            src="https://randomuser.me/api/portraits/men/22.jpg" alt="User2" />
                                        <img class="h-w-5 border-1 -mx-1 w-5 rounded-full border-white shadow-md"
                                            src="https://randomuser.me/api/portraits/men/22.jpg" alt="User2" />
                                        <img class="h-w-5 border-1 -mx-1 w-5 rounded-full border-white shadow-md"
                                            src="https://randomuser.me/api/portraits/men/22.jpg" alt="User2" />
                                        <img class="h-w-5 border-1 -mx-1 w-5 rounded-full border-white shadow-md"
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
                    <router-link :to="name">
                        <div
                            class="relative my-2 flex items-center justify-between rounded-lg border border-gray-400 p-3 hover:bg-gray-800">
                            <div class="relative flex h-16 w-16 flex-shrink-0">
                                <img class="h-full w-full rounded-full object-cover shadow-md" :src="avatar" alt="" />
                            </div>
                            <div class="ml-4 mr-6 hidden min-w-0 flex-auto group-hover:block md:block">
                                <h3 class="text-left text-lg">{{ name }}</h3>
                                <div class="flex items-center text-sm text-gray-600">
                                    <div class="flex w-full">
                                        <img class="h-w-5 border-1 -mx-1 w-5 rounded-full border-white shadow-md"
                                            src="https://randomuser.me/api/portraits/men/22.jpg" alt="User2" />
                                        <img class="h-w-5 border-1 -mx-1 w-5 rounded-full border-white shadow-md"
                                            src="https://randomuser.me/api/portraits/men/22.jpg" alt="User2" />
                                        <img class="h-w-5 border-1 -mx-1 w-5 rounded-full border-white shadow-md"
                                            src="https://randomuser.me/api/portraits/men/22.jpg" alt="User2" />
                                        <img class="h-w-5 border-1 -mx-1 w-5 rounded-full border-white shadow-md"
                                            src="https://randomuser.me/api/portraits/men/22.jpg" alt="User2" />
                                        <img class="h-w-5 border-1 -mx-1 w-5 rounded-full border-white shadow-md"
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
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name : 'dashboardtask',
        props: ['name','detail','avatar'],
        data() {
            return {
                name : '',
                detail : '',
                avatar : ''

            }
        }
    }
</script>