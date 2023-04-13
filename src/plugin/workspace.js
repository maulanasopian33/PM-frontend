import axios from 'axios';
import eventBus from '@/plugin/eventBus';
export default {
    methods: {
        getworkspace(){
            axios.get(process.env.VUE_APP_BASE+'/get-workspace',{
                headers: {
                    "Authorization": `Bearer ${this.$cookies.get("login")}`
                },
                }).then(({data}) => {
                    this.wokspacedata = data;
                    eventBus.$emit('workspace', data);
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