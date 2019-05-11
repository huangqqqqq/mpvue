import Vue from 'vue'
import Vuex from 'vuex'

import home from './home'
import banner from './banner'
import cart from './cart'
import user from './user'

Vue.use(Vuex);



const store = new Vuex.Store({
    modules: {
        home,
        banner,
        cart,
        user
    }
});

export default store;
