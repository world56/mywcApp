import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';



import reg from './reg';
import login from './login';
import home from './home';
import list from './list';





Vue.use(Vuex);


// let state={
//     a:'VEUX垃圾',
// }


export default new Vuex.Store({
    modules: {
       reg,
       login,
       home,
       list
    }
})