<template>
    <div class="flex justify-between items-center p-3 hover:bg-gray-800 rounded-lg relative">
        <div class="w-16 h-16 relative flex flex-shrink-0">
            <img class="shadow-md rounded-full w-10 h-10 object-cover absolute ml-6"
                src="https://randomuser.me/api/portraits/men/22.jpg" alt="User2" />
            <img class="shadow-md rounded-full w-10 h-10 object-cover absolute mt-6"
                src="https://randomuser.me/api/portraits/men/55.jpg" alt="User2" />
            <img class="shadow-md rounded-full w-10 h-10 object-cover absolute mt-6"
                src="https://randomuser.me/api/portraits/men/55.jpg" alt="User2" />
            <img class="shadow-md rounded-full w-10 h-10 object-cover absolute mt-6"
                src="https://randomuser.me/api/portraits/men/55.jpg" alt="User2" />
            <img class="shadow-md rounded-full w-10 h-10 object-cover absolute mt-6"
                src="https://randomuser.me/api/portraits/men/55.jpg" alt="User2" />
            <div class="absolute bg-gray-900 p-1 rounded-full bottom-0 right-0">
                <div class="bg-green-500 rounded-full w-3 h-3"></div>
            </div>
        </div>
        <div class="flex-auto min-w-0 ml-4 mr-6 hidden md:block group-hover:block">
            <p>TailwindCSS Group</p>
            <div class="flex items-center text-sm text-gray-600">
                <div class="min-w-0">
                    <p class="truncate">Adam: Hurray, Version 2 is out now!!.
                    </p>
                </div>
                <p class="ml-2 whitespace-no-wrap">23 Jan</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : 'contactGroup',
    props : ['name','msg','avatar','time']
}
</script>