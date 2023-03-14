<template>
    <p class="break-all px-4 py-2 my-3 w-auto text-center rounded-lg text-sm text-white bg-gray-800">{{ msg }}</p>
</template>

<script>
    export default {
        name : 'chat-system',
        props : [ 'msg']
    }
</script>