<template>
  <div id="app">
    <v-app>
      <SideNav sidenavTitle="MaterialBook App" toolbarTitle="MaterialBook App" />
    </v-app>
  </div>
</template>
<script>
import SideNav from '@/components/SideNav.vue'; // @ is an alias to /src

export default {
  components: {
    SideNav
  }
}
</script>
<style>
  
</style>