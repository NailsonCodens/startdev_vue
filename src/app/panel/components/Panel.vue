<template>
 <div>
  <ab-header :title="title" :icon="icon"></ab-header>
  <div class="box-pages clients">
   <div class="box-table">
    <router-view class="router-view"/>
   </div>
  </div>
 </div>
</template>

<script>
export default {
  name: 'Painel',
  data () {
    return {
      viewInfo: true,
      title: 'Dashboard',
      icon: 'fas fa-tachometer-alt'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box-shadow{
 box-shadow: 2px 2px 15px 0px #ccc;
 background:#fff;
 height:120px;
 margin:10px;
}

.content-gadgets{
 margin-top:-5px;
}

.icon-box-shadow{
 font-size:29px;
 color:#0073C4;
}

.icon-number{
 font-size:29px;
 color:#9C9C9C !important;
 font-family: 'product_sansregular', sans-serif !important;
}

.icon-text{
 font-size:14px;
 color:#757575;
 margin-top:-7px;
 font-family: 'product_sansregular', sans-serif !important;
}

.click-view{
 margin-bottom:50px !important;
 font-size:20px;
}

.icons-view{
 color:#0073C4 !important;
}

.text-view{
 font-size:12px !important;
 color:#0073C4;
}
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
