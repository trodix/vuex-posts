<template>
    <div class="post-list">
        <PostAdd/>
        <h1>List of Posts</h1>
        <v-card v-for="post in posts" :key="post.id">
          <v-card-title class="headline">{{ post.title }}</v-card-title>
          <v-card-text>{{ post.body }}</v-card-text>
          <v-card-actions>
            <v-layout>
              <v-btn fab small color="info" @click="openDialog(post)"> 
                <v-icon>edit</v-icon>
              </v-btn> 
              <v-btn fab small color="error" @click="removePost(post.id)"> 
                <v-icon>remove</v-icon>
              </v-btn> 
            </v-layout>
          </v-card-actions>
        </v-card>
    </div>
</template>

<script>
import { mapState, mapActions, mapMutations} from "vuex";
import PostAdd from './PostAdd'

export default {
  components: { PostAdd },
  name: "PostList",
  methods: {
    ...mapActions('posts', ["fetchPosts", "removePost"]),
    ...mapMutations('posts', ["openDialog"])
  },
  computed: {
    ...mapState('posts', ["posts"]),
  },
  created() {
    this.fetchPosts();
  }
}
</script>

<style scoped>

</style>
