<template>
  <div class="home">

  </div>
</template>

<script>
// @ is an alias to /src
import { ref } from  'vue';
export default {
  name: 'HomeView',
  components: {
  },
  data() {
  		return {
  			pesan: ref([]),
  		}
  	},
  	mounted() {
  		console.log('Component mounted.')
  	},
  	created() {
  		window.Echo.channel('private-chat-dsadasdasd').listen('MessageCreated', (e) => {
  			console.log('data');
  			console.log(e.message);
  			this.pesan.push({
  				message: e.message,
  			});
  		});
  	},
}
</script>
