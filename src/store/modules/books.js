import axios from 'axios';
import { isNumber } from 'util';

const state = {
    books: [],
    dialog: false,
    loading: false,
    editedBook: {
      id: null,
      title: "",
      description: "",
      isbn: "",
      author: "",
      publicationDate: null,
      reviews: []
    }
};

const getters = {

};

const actions = {
    async fetchBooks({ commit }) {
        const response = await axios.get(
            'https://localhost:8000/api/books.json'
        );

        commit('setBooks', response.data);
    },
    async removeBook({ commit }, id) {
        await axios.delete(
            `https://localhost:8000/api/books/${id}.json`
        );

        commit('removeBook', id);
    },
    async editBook({ commit }, bookEdit) {
        let response = null;
        if (isNumber(bookEdit.id)) {
            response = await axios.put(
            `https://localhost:8000/api/books/${bookEdit.id}.json`, bookEdit
            );
        } else {
            response = await axios.post(
            `https://localhost:8000/api/books.json`, bookEdit
            );
        }
        
        commit('updateBook', response.data);
    },
    editDialog({ commit }, book) {
        commit('updateBook', book);
    }
};

const mutations = {
    setBooks: (state, books) => (state.books = books),
    removeBook: (state, id) => {
        state.books = state.books.filter(book => book.id !== id);
    },
    updateBook: (state, bookEdit) => {
        state.dialog = false;
        const index = state.books.findIndex(book => book.id === bookEdit.id);
        if (index !== -1) {
            state.books.splice(index, 1, bookEdit);
        } else {
            state.books.unshift(bookEdit);
        }
        state.editedBook = {
            id: null,
            title: "",
            description: "",
            isbn: "",
            author: "",
            publicationDate: "",
            reviews: []
        }
    },
    // closeDialog: (state) => (state.dialog = false),
    openDialog: (state, book) => {
        state.dialog = true;
        state.editedBook = book;
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