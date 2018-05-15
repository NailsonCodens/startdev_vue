<template>
  <div>
   <a click="goBack"></a>
   <ol class="breadcrumb">
    <li class="breadcrumb-item" v-if="crumb.meta.breadcrumb" v-for="(crumb, i) in $route.matched" :key="i">
     <!--Routes pages-->
     <router-link v-if="!$route.params.product && !$route.params.id" active-class="active" :to="{ path: crumb.path, query: { page: $route.query.page } }" :tag="i != $route.matched.length - 1 ? 'a' : 'span'">{{ crumb.meta.breadcrumb }}</router-link>
     <router-link v-if="$route.params.product || $route.params.id" active-class="active" :to="{ name: crumb.name, query: { page: $route.query.page } }" :tag="i != $route.matched.length - 1 ? 'a' : 'span'">{{ crumb.meta.breadcrumb }}</router-link>
    </li>
   </ol>
  </div>
</template>
<script>
export default {
  name: 'teste',
  data () {
    return {
    }
  },

  mounted () {
  }
}
</script>
