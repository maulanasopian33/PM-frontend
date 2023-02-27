<template>
    <p class="p-4 text-center text-sm text-gray-500">{{ time }}</p>
</template>

<script>
    export default {
        name : 'chat-time',
        props : [ 'time']
    }
</script>