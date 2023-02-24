<template>
    <div class="flex justify-between items-center p-3 hover:bg-gray-800 rounded-lg relative">
        <div class="w-16 h-16 relative flex flex-shrink-0">
            <img class="shadow-md rounded-full w-full h-full object-cover"
                :src="avatar" alt="" />
            <!-- online -->
            <div class="absolute bg-gray-900 p-1 rounded-full bottom-0 right-0">
                <div class="bg-green-500 rounded-full w-3 h-3"></div>
            </div>
            <!-- online -->
        </div>
        <div class="flex-auto min-w-0 ml-4 mr-6 hidden md:block group-hover:block">
            <p class="font-bold">{{ name }}</p>
            <div class="flex items-center text-sm font-bold">
                <div class="min-w-0">
                    <!-- messagge -->
                    <p class="truncate">{{ msg }}</p>
                    <!-- message -->
                </div>
                <!-- reamming -->
                <p class="ml-2 whitespace-no-wrap">{{ time }}</p>
            </div>
        </div>
        <!-- notif unread -->
        <div class="bg-blue-700 w-3 h-3 rounded-full flex flex-shrink-0 hidden md:block group-hover:block">
        </div>
    </div>
</template>

<script>
export default {
    name : 'ContactUnread',
    props: ['name','msg','time','avatar']
}
</script>