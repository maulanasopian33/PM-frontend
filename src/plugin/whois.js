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
                this.id = data.id
                this.myname = data.name
                this.whoisdata = data
            }).catch((error) => {
                this.$alert(error.message, 'Error!', 'error');
            });
        },
    },
    mounted() {
        this.getdatauser();
      },
}