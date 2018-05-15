<template>
  <div class="header">
    <h1 class="title-page">
     <i v-bind:class="icon" class="fas-spacing"></i>
     <span v-if="$route.meta.nameview">{{ $route.meta.nameview }}</span>
     <span v-if="$route.meta.subtitle"> - {{ $route.meta.subtitle }}</span>
    </h1>
  </div>
</template>

<script>
export default {
  name: 'Header',

  props: ['title', 'icon'],

  data () {
    return {
    }
  }
}
</script>
<style scoped>
.header{
  background:#E8EAED;
  height:40px;
  padding-top:4px;
  margin-bottom:0px;
  margin-left:1px;
  margin-top:-5px;
}

.header h1{
  font-family: 'product_sansregular', sans-serif !important;
  font-size:22px;
  color:#4e5359;
}

.title-page{
  margin-left:15px;
}

@media screen and (max-width: 767px) {
  .header{
    width:100%;
    height:40px;
    margin-left:1px;
    margin-top:35px;
  }

  .header h1{
    font-family: 'product_sansregular', sans-serif !important;
    font-size:17px;
    color:#4e5359;
  }
}
</style>
