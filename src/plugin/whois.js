import axios from 'axios';
export default {
    methods: {
        getdatauser() {
            axios.get(process.env.VUE_APP_BASE + '/whois', {
                headers: {
                    "Authorization": `Bearer ${this.$cookies.get("login")}`
                },
            }).then(({ data }) => {

                this.isadmin = data.admin
            }).catch((error) => {
                this.$alert(error.message, 'Error!', 'error');
            });
        },
    },
    mounted() {
        this.getdatauser();
      },
}