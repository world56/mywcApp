import Axios from "axios";



export default {
    state:{

    },
    mutations: {
        dltz(state,obj){
            console.log('data',obj.data)
            if(obj.data=='dlok'){
                alert('账号验证成功');
         
                obj.url.push('/')
            }else{
                alert('请检查账号密码')
            }
        }
    },
    actions: {
        dllook(context,obj){
            let phone=obj.phone;
            let psw=obj.psw;
            Axios.post('http://127.0.0.1:4001/logins',{phone,psw}).then((msg)=>{
           
                    context.commit({
                        type:'dltz',
                        data:msg.data,
                        url:obj.url
                    })
                
            })

        }
    }
}