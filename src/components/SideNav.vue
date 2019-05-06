<template>
<div>
    <v-toolbar dark color="primary">
      <v-toolbar-side-icon @click.stop="drawer = !drawer">
          <v-icon>menu</v-icon>
      </v-toolbar-side-icon>

      <v-toolbar-title class="white--text">{{ toolbarTitle }}</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>refresh</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-toolbar>

    <v-layout wrap style="height: 200px;">

      <router-view></router-view>

      <v-navigation-drawer v-model="drawer" absolute temporary>
        <v-list class="pa-1">
          <v-list-tile avatar>
            <!-- <v-list-tile-avatar>
              <img src="https://randomuser.me/api/portraits/men/85.jpg">
            </v-list-tile-avatar> -->

            <v-list-tile-content>
              <v-list-tile-title>{{ sidenavTitle }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>

        <v-list class="pt-0" dense>
          <v-divider></v-divider>

          <v-list-tile v-for="link in links" :key="link.title" router :to="link.route">
            <v-list-tile-action>
              <v-icon>{{ link.icon }}</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{ link.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
    </v-layout>
</div>
</template>

<script>

export default {

  data() {
    return {
      drawer: false,
      sidenavTitle: "",
      toolbarTitle: "",
      links: [
        { title: 'Dashboard', icon: 'dashboard', route: '/' },
        { title: 'Posts', icon: 'dashboard', route: '/posts' }
      ]
    }
  }

}
</script>

<style scoped>

</style>
