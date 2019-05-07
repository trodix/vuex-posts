<template>
    <div class="book-list">
        <h1>List of Books</h1>
        <v-card class="book" v-for="book in books" :key="book.id">
          <v-card-title class="headline">{{ book.title }}</v-card-title>
          <v-card-text>{{ book.description }}</v-card-text>
          <v-card-actions>
            <v-layout>
              <v-btn fab small color="info" @click="openDialog(book)"> 
                <v-icon>edit</v-icon>
              </v-btn> 
              <v-btn fab small color="error" @click="removeBook(book.id)"> 
                <v-icon>remove</v-icon>
              </v-btn> 
            </v-layout>
          </v-card-actions>
        </v-card>
    </div>
</template>

<script>
import { mapState, mapActions, mapMutations} from "vuex";

export default {
    name: "BookList",
    methods: {
        ...mapActions('books', ["fetchBooks", "removeBook"]),
        ...mapMutations('books', ["openDialog"])
    },
    computed: {
        ...mapState('books', ["books"]),
    },
    created() {
        this.fetchBooks();
    }
}
</script>

<style scope>
    .book-list {
        width: 100%;
        min-width: 350px;
    }
</style>
