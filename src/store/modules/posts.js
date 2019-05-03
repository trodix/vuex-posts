import axios from 'axios';
import { isNumber } from 'util';

const state = {
  posts: [],
  dialog: false,
  loading: false,
  editedPost: {
    id: null,
    title: "",
    body: ""
  }
};

const getters = {
  // allPosts: state => state.posts,
  // dialog: state => state.dialog,
  // loading: state => state.loading,
  // editedPost: state => state.editedPost,
};

const actions = {
  async fetchPosts({ commit }) {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );

    commit('setPosts', response.data);
  },
  async removePost({ commit }, id) {
    await axios.delete(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );

    commit('removePost', id);
  },
  async editPost({ commit }, postEdit) {
    let response = null;
    if (isNumber(postEdit.id)) {
      response = await axios.put(
        `https://jsonplaceholder.typicode.com/posts/${postEdit.id}`, postEdit
      );
    } else {
      response = await axios.post(
        `https://jsonplaceholder.typicode.com/posts`, postEdit
      );
    }
    
    commit('updatePost', response.data);
  },
  editDialog({ commit }, post) {
     commit('updatePost', post);
  }
};

const mutations = {
  setPosts: (state, posts) => (state.posts = posts),
  removePost: (state, id) => {
    state.posts = state.posts.filter(post => post.id !== id);
  },
  updatePost: (state, postEdit) => {
    state.dialog = false;
    const index = state.posts.findIndex(post => post.id === postEdit.id);
    if (index !== -1) {
      state.posts.splice(index, 1, postEdit);
    } else {
      state.posts.unshift(postEdit);
    }
    state.editedPost = {
      id: null,
      title: "",
      body: ""
    }
  },
  // closeDialog: (state) => (state.dialog = false),
  openDialog: (state, post) => {
    state.dialog = true;
    state.editedPost = post;
  },
  dialog: (state) => state.dialog = !state.dialog
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};