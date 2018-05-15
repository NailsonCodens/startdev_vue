<template>
 <div>
  <a href="javascript:void(0)" class="click-view" v-on:click="viewInfo = !viewInfo">
   <i v-bind:class="{ 'fas fa-eye': viewInfo === true, 'fas fa-eye-slash': viewInfo === false }" class="icons-view"></i>
   <span v-if="viewInfo === true" class="text-view">Esconder</span>
   <span v-if="viewInfo === false" class="text-view">Mostrar</span>
  </a>
  <div class="columns is-desktop" v-show="viewInfo">
    <div class="column box-shadow">
     <div class="content-gadgets has-text-centered">
       <span class="icon-box-shadow"><i class="fas fa-money-bill-alt"></i></span>
       <p class="icon-number">5000,00</p>
       <p class="icon-text">Total de vendas</p>
     </div>
    </div>
    <div class="column box-shadow">
     <div class="content-gadgets has-text-centered">
       <span class="icon-box-shadow"><i class="fas fa-money-bill-alt"></i></span>
       <p class="icon-number">3400,00</p>
       <p class="icon-text">Vendas / Mês</p>
     </div>
    </div>
    <div class="column box-shadow">
     <div class="content-gadgets has-text-centered">
       <span class="icon-box-shadow"><i class="fas fa-clipboard-list"></i></span>
       <p class="icon-number">2500</p>
       <p class="icon-text">Orçamentos</p>
     </div>
    </div>
    <div class="column box-shadow">
     <div class="content-gadgets has-text-centered">
       <span class="icon-box-shadow"><i class="fas fa-clipboard-check"></i></span>
       <p class="icon-number">1357</p>
       <p class="icon-text">Pedidos</p>
     </div>
    </div>
  </div>
 </div>
</template>

<script>
export default {
  name: 'IndexDashboard',
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
