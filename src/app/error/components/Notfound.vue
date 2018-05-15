<template>
 <div>
  <header class="menu-notfound">
   <div class="is-pulled-left">
    <img src="static/images/logowhite2.png" class="logowhite">
   </div>
  </header>
  <div class="section">
    <div class="container">
      <div class="columns ">
        <div class="column is-three-fifths is-offset-one-fifth">
          <div class="has-text-centered">
            <h1 class="ops font-products">Ops!</h1>
            <p class="text404"><span class="font-products">404</span> Página não encontrada</p>
          </div>
        </div>
      </div>
      <hr>
      <div class="columns">
       <div class="column">
        <article class="message">
          <div class="message-header">
            <p>Por quê eu vejo este erro <i class="fas fa-question-circle"></i></p>
          </div>
          <div class="message-body">
            <ul>
              <li>Você tentou acessar ou digitou o endereço incorretamente.</li>
              <li>Ou este endereço não existe.</li>
              <br>
              <li v-on:click="backRoute()"><a class="button is-info is-outlined"> <i class="fas fa-undo-alt" style="margin-right:20px;"> </i> Voltar para página anterior</a></li>
            </ul>
          </div>
        </article>
       </div>
       <div class="column has-text-centered">
         <p class="branch-codens">O Abinf Pedidos é um produto da marca Codens<p>
         <img src="static/images/codens.png" class="logo-codens">
         <p class="site font-products"><a href="http://www.codens.com.br/" target="_blank"><i class="fas fa-globe"></i> wwww.codens.com.br</a></p>
       </div>
      </div>
    </div>
   </div>
 </div>
</template>

<script>
export default {
  name: 'Notfound',
  data () {
    return {
    }
  },

  methods: {
    backRoute: function () {
      this.$router.go(-1)
    }
  },

  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.menu-notfound{
  height:100px;
  background:#0073C4;
  margin-bottom:10px;
}

.logo-notfound{
  width:33%;
}

.logo-codens{
  width:50%;
}

.logowhite{
  margin-top:10px;
  margin-left:15px;
  width:110px;
}

.ops{
  font-size:90px;
  color:#0073C4;
  font-weight:600;
}

.text404{
  font-size:35px;
  font-family: 'Open Sans', Arial, sans-serif !important;
  color:#0a87db;
  font-weight:300;
}

.font-products{
  font-family: 'product_sansregular', Arial, sans-serif !important;
}

.text404 span{
  font-weight:500;
  font-size:45px;
}

.branch-codens{
  margin-bottom:20px;
  color:#9e9e9e;
}

.site{
  margin-top:20px;
  color:#0a87db;
}

.question{
  font-family: 'Open Sans', Arial, sans-serif !important;
  font-size:20px;
  color:#9e9e9e;
}
@media screen and (max-width: 767px) {}
</style>
