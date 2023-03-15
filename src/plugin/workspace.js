import axios from 'axios';
export default {
    methods: {
        getworkspace(){
            axios.get(process.env.VUE_APP_BASE+'/get-workspace',{
                headers: {
                    "Authorization": `Bearer ${this.$cookies.get("login")}`
                },
                }).then(({data}) => {
                    this.wokspacedata = data;
                    this.url = process.env.VUE_APP_WEB

                }).catch((error) => {
                    console.log(error.response.status)
                    switch(error.response.status){
                        case 401 :
                            this.$cookies.remove("login")
                            this.$router.push('/login')
                        break;
                    }
                });
        },
        
    },
}