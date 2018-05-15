<template>
 <div>
  <ab-header :icon="icon"></ab-header>
  <div class="box-pages products">
   <div>
     <div class="actions is-pulled-left">
       <a v-if="$route.name != 'product.view' && $route.name != 'groupproduct'" v-on:click.prevent="back" class="button"><i class="fas fa-undo-alt fas-spacing"></i> <span class="hd-mobile"> Voltar </span></a>
     </div>
   </div>
    <div style="height:32px;"><ab-breadcrumb v-if="$route.name != 'product.view' && $route.name != 'groupproduct'"></ab-breadcrumb></div>
   <div class="box-table">
    <router-view class="router-view"/>
   </div>
  </div>
 </div>
</template>

<script>
export default {
  name: 'Product',
  data () {
    return {
      icon: 'fas fa-tag'
    }
  },

  methods: {
    back: function () {
      const page = this.$route.query.page
      this.$router.push({ name: 'product', query: { page } })
    }
  },

  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
