import Axios from "axios";



export default {
    state: {
        list:[],
        gqlist:[]
    },
    mutations: {
        listm(state, obj) {
            // console.log('data', obj.data);
            state.list=obj.data
        },
        lookthis(state,obj){
            
            state.gqlist=obj.data;
            obj.url.push('/list')
            console.log(state.gqlist)
        }
    },
    actions: {
        listl(context, obj) {
            Axios.post('http://192.168.43.143:4001/listlook').then((msg) => {
                context.commit({
                    type: 'listm',
                    url: obj.url,
                    data:msg.data
                })

            })

        },
        ulgq(context,obj){
            console.log('我在store内')
            console.log(obj.id)
            Axios.post('http://192.168.43.143:4001/listxs',{id:obj.id}).then((msg)=>{
       
                context.commit({
                    type:'lookthis',
                    data:msg.data,
                    url:obj.url
                })
               
            })
        }
    }
}