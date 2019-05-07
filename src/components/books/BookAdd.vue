<template>
  <v-dialog max-width="600px" v-model="dialog">
    <v-btn flat slot="activator" class="success">Add New Book</v-btn>
    <v-card>
      <v-card-title>
        <h2>Add a New Book</h2>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3" ref="form">
          <input type="text" v-model="editedBook.id" id="bookId"/>
          <v-text-field v-model="editedBook.isbn" label="Isbn" prepend-icon="folder" :rules="inputRules"></v-text-field>
          <v-text-field v-model="editedBook.title" label="Title" prepend-icon="folder" :rules="inputRules"></v-text-field>
          <v-textarea v-model="editedBook.description" label="Description" prepend-icon="edit" :rules="inputRules"></v-textarea>
          <v-text-field v-model="editedBook.author" label="Author" prepend-icon="edit" :rules="inputRules"></v-text-field>

          <v-menu v-model="menu" :close-on-content-click="false">
            <v-text-field slot="activator" :rules="inputRules"
              :value="formattedDate" clearable label="Publication Date" prepend-icon="date_range">
            </v-text-field>
            <v-date-picker v-model="editedBook.publicationDate" @change="menu = false"></v-date-picker>
          </v-menu>

          <v-spacer></v-spacer>

          <v-btn flat @click="editBook(editedBook)" class="success mx-0 mt-3" :loading="loading">Add Book</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
import format from 'date-fns/format'

export default {
  name: "BookAdd",
  methods: {
    ...mapActions('books', ["editBook"]),
    ...mapMutations('books', ["openDialog", "dialog"])
  },
  computed: {
    ...mapState('books', [
      "editedBook",
      "loading",
      "dialog"
    ]),
    formattedDate () {
      return this.editedBook.publicationDate ? format(this.editedBook.publicationDate, 'YYYY-MM-DD') : ''
    }
  },
  data() {
    return { 
      inputRules: [
        v => !!v || 'This field is required',
        v => v.length >= 3 || 'Minimum length is 3 characters'
      ],
      menu: false
    }
  }
}
</script>

<style scoped>
  #bookId {
    display: none;
  }
</style>
