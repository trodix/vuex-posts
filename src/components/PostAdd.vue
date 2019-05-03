<template>
  <v-dialog max-width="600px" v-model="dialog">
    <v-btn flat slot="activator" class="success">Add New Post</v-btn>
    <v-card>
      <v-card-title>
        <h2>Add a New Post</h2>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3" ref="form">
          <input type="text" v-model="editedPost.id" id="postId"/>
          <v-text-field v-model="editedPost.title" label="Title" prepend-icon="folder" :rules="inputRules"></v-text-field>
          <v-textarea v-model="editedPost.body" label="Body" prepend-icon="edit" :rules="inputRules"></v-textarea>

          <v-spacer></v-spacer>

          <v-btn flat @click="editPost(editedPost)" class="success mx-0 mt-3" :loading="loading">Add Post</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  name: "PostAdd",
  methods: {
    ...mapActions('posts', ["editPost"]),
    ...mapMutations('posts', ["openDialog", "dialog"])
  },
  computed: {
    ...mapState('posts', [
      "editedPost",
      "loading",
      "dialog"
    ])
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
  #postId {
    display: none;
  }
</style>
