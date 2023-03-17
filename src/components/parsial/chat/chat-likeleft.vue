<template>
    <div class="flex flex-row justify-start my-1">
        <!-- avatar chat -->
        <div class="w-10 h-10 relative flex flex-shrink-0 mr-4 bg-purple-600 justify-center items-center rounded-full">
            <span class="text-lg font-medium text-center">{{ getAvatarFromName(from) }}</span>
        </div>
        <!-- avatar chat -->
        <div class="messages text-sm text-gray-700 grid grid-flow-row gap-2">
            <div class="flex items-center group">
                <div class="px-0 py-0 rounded-t-full  rounded-r-full max-w-xs lg:max-w-md text-gray-200">
                    <svg width="89px" height="89px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.9 4.5C15.9 3 14.418 2 13.26 2c-.806 0-.869.612-.993 1.82-.055.53-.121 1.174-.267 1.93-.386 2.002-1.72 4.56-2.996 5.325V17C9 19.25 9.75 20 13 20h3.773c2.176 0 2.703-1.433 2.899-1.964l.013-.036c.114-.306.358-.547.638-.82.31-.306.664-.653.927-1.18.311-.623.27-1.177.233-1.67-.023-.299-.044-.575.017-.83.064-.27.146-.475.225-.671.143-.356.275-.686.275-1.329 0-1.5-.748-2.498-2.315-2.498H15.5S15.9 6 15.9 4.5zM5.5 10A1.5 1.5 0 0 0 4 11.5v7a1.5 1.5 0 0 0 3 0v-7A1.5 1.5 0 0 0 5.5 10z" fill="#1D47A1"></path></g></svg>
                    <p class="text-xs px-3 py-1 rounded-full text-left bg-gray-800">{{ from }}</p>
                </div>
                <button type="button"
                    class="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2">
                    <svg viewBox="0 0 20 20" class="w-full h-full fill-current">
                        <path d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2S12.2,11.215,12.2,10S11.216,7.8,10.001,7.8z
 M3.001,7.8C1.786,7.8,0.8,8.785,0.8,10s0.986,2.2,2.201,2.2S5.2,11.214,5.2,10S4.216,7.8,3.001,7.8z M17.001,7.8
C15.786,7.8,14.8,8.785,14.8,10s0.986,2.2,2.201,2.2S19.2,11.215,19.2,10S18.216,7.8,17.001,7.8z" />
                    </svg>
                </button>
                <button type="button"
                    class="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2">
                    <svg viewBox="0 0 20 20" class="w-full h-full fill-current">
                        <path
                            d="M19,16.685c0,0-2.225-9.732-11-9.732V2.969L1,9.542l7,6.69v-4.357C12.763,11.874,16.516,12.296,19,16.685z" />
                    </svg>
                </button>
                <button type="button"
                    class="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2">
                    <svg viewBox="0 0 24 24" class="w-full h-full fill-current">
                        <path
                            d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.54-4.46a1 1 0 0 1 1.42-1.42 3 3 0 0 0 4.24 0 1 1 0 0 1 1.42 1.42 5 5 0 0 1-7.08 0zM9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'chatLeftlike',
    props : ['avatar','from'],
    methods: {
        getAvatarFromName(name) {
            const firstLetter = name.charAt(0).toUpperCase();
            return firstLetter;
        },
    },
}
</script>