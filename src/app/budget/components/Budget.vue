<template>
 <div>
  <ab-header :icon="icon"></ab-header>
  <div class="box-pages budget">
   <breadcrumbs/>
   <div class="box-table">
    <router-view class="router-view"/>
   </div>
  </div>
 </div>
</template>

<script>
export default {
  name: 'Budget',
  data () {
    return {
      icon: 'fas fa-clipboard-list'
    }
  },

  methods: {
  },

  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
