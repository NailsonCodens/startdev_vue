<template>
 <div>
  <ab-header :icon="icon"></ab-header>
  <div class="box-pages clients">
   <div>
     <div class="actions is-pulled-left">
       <a v-if="$route.name != 'client.view'" v-on:click.prevent="back" class="button"><i class="fas fa-undo-alt fas-spacing"></i> <span class="hd-mobile"> Voltar </span></a>
     </div>
   </div>
    <div style="height:32px;"><ab-breadcrumb v-if="$route.name != 'client.view'"></ab-breadcrumb></div>
   <div class="box-table">
    <router-view class="router-view"/>
   </div>
  </div>
 </div>
</template>

<script>
export default {
  name: 'Client',
  data () {
    return {
      icon: 'fas fa-user'
    }
  },

  methods: {
    back: function () {
      const page = this.$route.query.page
      this.$router.push({ name: 'client', query: { page } })
    }
  },

  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
