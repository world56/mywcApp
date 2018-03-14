import Axios from "axios";



export default {
    state:{

    },
    mutations: {
        regok(state,obj){
            console.log('data',obj.data)
            if(obj.data=='regok'){
                alert('注册成功');
                // this.$router.push('/Login')
                obj.url.push('/login')
            }else{
                alert('注册失败')
            }
        }
    },
    actions: {
        adduser(context,obj){
            Axios.post('http://127.0.0.1:4001/useradd',obj.param).then((msg)=>{
                
                context.commit({
                    type:'regok',
                    data:msg.data,
                    url:obj.url
                })
            })
        }
    }
}