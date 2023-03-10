export default {
    data() {
      return {
        msg: 'Hello World',
      }
    },
    created: function () {
    },
    methods: {
      displayMessage: function () {
        console.log('Now printing from a mixin function')
      },
    },
  }