<template>
  <div id="app">
   <ab-spinner></ab-spinner>
   <ab-alerts></ab-alerts>
   <div>
    <ab-menu-v v-on:actionbackMenu="activebackMenu"  v-show="$route.meta.requiresAuth == true"></ab-menu-v>
   <div class="" v-bind:class="{ 'none' : $route.path === '/notfound', 'structure-app':  $route.path != '/notfound' }">
    <div class="columns is-mobile">
     <div  class="is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd" v-bind:class="showhide" v-show="backmenu === true">
     </div>
     <div class="column column-route">
      <router-view class="router-view"/>
     </div>
    </div>
   </div>
   </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AbAlerts from './components/Alerts'
import AbSpinner from './components/Spinner'

export default {
  name: 'App',
  components: {
    AbAlerts,
    AbSpinner
  },

  data () {
    return {
      backmenu: false
    }
  },

  computed: {
    ...mapGetters(['Navigation']),
    showhide: function () {
      if (this.$route.path === '/' || this.$route.path === '/notfound') {
        return 'column-menu-hide'
      } else {
        return 'column column-menu-show'
      }
    }
  },

  methods: {
    activebackMenu: function () {
      this.backmenu = !this.backmenu
    }
  }
}
</script>

<style>
#app{
  height:100%;
}

.router-view{
  height:100%;
}

.column-route{
}

</style>
