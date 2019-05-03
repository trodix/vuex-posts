<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vue</span>
        <span class="font-weight-light">Vuex Posts</span>
      </v-toolbar-title>
    </v-toolbar>
    <v-content>
      <PostList/>
    </v-content>
  </v-app>
</template>

<script>
import PostList from './components/PostList.vue'

export default {
  name: 'App',
  components: {
    PostList
  },
  data () {
    return {
      //
    }
  }
}
</script>
