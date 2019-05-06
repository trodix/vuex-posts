import Vuex from 'vuex';
import Vue from 'vue';
import posts from './modules/posts';
import books from './modules/books';

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: {
    posts,
    books
  }
});