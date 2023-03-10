import axios from 'axios';
export default {
    methods: {
        getworkspace(){
            axios.get('http://localhost:8000/api/get-workspace',{
                headers: {
                    "Authorization": `Bearer ${this.$cookies.get("login")}`
                },
                }).then(({data}) => {
                    this.wokspacedata = data;

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