<template>
  <div class="menu">
    <div>
      <!--menu horizontal-->
      <ab-menu-h :menu="menu" v-on:actionMenu="activeMenu" v-on:logoutUser="logout"></ab-menu-h>
    </div>
    <!--menu vertical-->
    <nav class="is-pulled-left menu-vertical" v-show="menu == true">
     <ul>
      <li class="begin-menu">
        <div class="logo-system">
         <img src="../../static/images/c.jpg">
        </div>
        <div class="actionsuser">
         <router-link to="/company"><a href="javascript:void(0)" title="Empresa"><i class="fas fa-building fas-menu"></i></a>
         </router-link>
         <router-link to="/profile"><a href="javascript:void(0)" title="Perfil"><i class="fas fa-user-circle fas-menu"></i></a></router-link>
         <router-link to="/configuration"><a href="javascript:void(0)" title="Configuração do usuário"><i class="fas fa-cog fas-menu"></i></a></router-link>
         <a href="javascript:void(0)" title="Sair" v-on:click="logout()"><i class="fas fa-sign-out-alt fas-menu"></i></a>
        </div>
      </li>
      <hr class="hrtwo">
      <router-link to="/panel"><li class="li"><i class="fas fa-tachometer-alt fas-menu"></i> Dashboard</li></router-link>
      <hr class="hr">
      <a href="javascript:void(0)">
       <li class="li dropdown-li" v-on:click="dropdownreports = !dropdownreports">
        <i class="fas fa-chart-bar fas-menu"></i> Relatórios
        <i v-bind:class="{ 'fas-right fas fa-angle-down': dropdownreports === true, 'fas-right fas fa-angle-right': dropdownreports === false }" class="is-pulled-right fas-menu fas-menu"> </i>
       </li>
      </a>
      <transition name="fade">
       <ul v-show="dropdownreports">
         <router-link to="/recordclient"><li><i class="fas fa-user fas-menu"></i> Ficha do Cliente</li></router-link>
         <router-link to="/reportclient"><li><i class="fas fa-users fas-menu"></i> Clientes</li></router-link>
         <router-link to="/reporttalk"><li><i class="fas fa-comment fas-menu"></i> Conversação</li></router-link>
         <router-link to="/reportproduct"><li><i class="fas fa-tags fas-menu"></i> Produtos</li></router-link>
         <router-link to="/reportbudget"><li><i class="fas fa-clipboard-list fas-menu"></i> Orçamentos / Pedidos </li></router-link>
         <router-link to="/reportiten"><li><i class="fas fa-boxes fas-menu"></i> Itens</li></router-link>
       </ul>
      </transition>
      <a href="javascript:void(0)">
       <li class="li dropdown-li" v-on:click="dropdown = !dropdown">
        <i class="fas fa-users fas-menu"></i> Clientes
        <i v-bind:class="{ 'fas-right fas fa-angle-down': dropdown === true, 'fas-right fas fa-angle-right': dropdown === false }" class="is-pulled-right fas-menu fas-menu"> </i>
        </li>
      </a>
      <transition name="fade">
       <ul v-show="dropdown">
         <router-link :to="{ path: clients, query: { page: $route.query.page }}"><li v-on:click="clickclient()"><i class="fas fa-user fas-menu"></i> Clientes</li></router-link>
         <router-link to="/contact"><li><i class="fas fa-address-book fas-menu"></i> Contato</li></router-link>
         <router-link to="/talk"><li><i class="fas fa-comment-alt fas-menu"></i> Conversação</li></router-link>
         <router-link to="/comment"><li><i class="fas fa-comments fas-menu"></i> Observação</li></router-link>
         <router-link to="/itemcl"><li><i class="fas fa-box fas-menu"></i> Itens do cliente</li></router-link>
       </ul>
      </transition>
      <a href="javascript:void(0)">
       <li class="li dropdown-li" v-on:click="dropdownproduct = !dropdownproduct">
        <i class="fab fa-product-hunt"></i> Produtos
        <i v-bind:class="{ 'fas-right fas fa-angle-down': dropdownproduct === true, 'fas-right fas fa-angle-right': dropdownproduct === false }" class="is-pulled-right fas-menu"> </i>
       </li>
      </a>
      <transition name="fade">
       <ul v-show="dropdownproduct">
         <router-link :to="{ path: products, query: { page: $route.query.page }}" append><li v-on:click="clickproduct()"><i class="fas fa-tag fas-menu"></i> Produtos</li></router-link>
         <router-link :to="{ path: '/products/groupproduct?page=', query: { page: $route.query.page }}"><li v-on:click="clickgrouproduct()"><i class="fas fa-tags fas-menu"></i> Grupo de produtos </li></router-link>
       </ul>
      </transition>
      <router-link to="/budgets"><li class="li"><i class="fas fa-clipboard-list fas-menu fas-menu"></i> Orçamentos / Pedidos</li></router-link>
      <router-link to="/service"><li class="li"><i class="fas fa-file-alt fas-menu fas-menu"></i> Ordem de Serviços</li></router-link>
      <hr class="hr">
      <router-link to="/users"><li class="li"><i class="fas fa-user fas-menu"></i> Usuários</li></router-link>
      <router-link to="/format"><li class="li"><i class="fas fa-text-height fas-menu"></i> Formatação</li></router-link>
      <router-link to="/config"><li class="li"><i class="fas fa-cogs fas-menu"></i> Configuração</li></router-link>
      <br>
     </ul>
    </nav>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'MenuVertical',
  data () {
    return {
      menu: false,
      dropdown: false,
      dropdownproduct: false,
      dropdownreports: false,
      page: 1
    }
  },

  methods: {
    ...mapActions(['logoutAuth']),
    activeMenu: function () {
      this.menu = !this.menu
      this.$emit('actionbackMenu')
    },

    logout: function () {
      this.logoutAuth().then(() => {
        this.$router.push({ name: 'login.auth' })
      })
    },

    clickclient: function () {
      this.$router.push({ name: 'client', query: { page: 1 } })
    },

    clickproduct: function () {
      this.$router.push({ name: 'product', query: { page: 1 } })
    },

    clickgrouproduct: function () {
      this.$router.push({ name: 'groupproduct', query: { page: 1 } })
    }
  },

  computed: {
    products: function () {
      if (this.$route.name === 'product.create' || this.$route.name === 'product.edit') {
        var path = this.$route.path.split('/')
        var param = path[2]
        if (param === 'edit') {
          return '/products/' + param + '/' + this.$route.params.id + '?page='
        } else {
          return '/products/' + param + '?page='
        }
      } else {
        return '/products/product?page='
      }
    },

    clients: function () {
      if (this.$route.name === 'client.create' || this.$route.name === 'client.edit') {
        var path = this.$route.path.split('/')
        var param = path[2]
        if (param === 'edit') {
          return '/clients/' + param + '/' + this.$route.params.id + '?page='
        } else {
          return '/clients/' + param + '?page='
        }
      } else {
        return '/clients/client?page='
      }
    }
  }
}
</script>

<style type="text/css">
.menu-vertical{
 background:#272c33;
 width:240px;
 text-align:left;
 height:100%;
 font-size:13px;
 z-index:9;
 position:fixed;
 top:0px;
 height:100vh;
 overflow: auto;
-webkit-box-shadow: 3px 0px 5px 0px rgba(191,191,191,1);
-moz-box-shadow: 3px 0px 5px 0px rgba(191,191,191,1);
box-shadow: 3px 0px 5px 0px rgba(191,191,191,1);
}

nav ul li{
 padding:15px 15px;
}

nav ul .li:hover{
 background:#3d4247;
}

.li ul > ul{
  margin-top:0px;
  margin-left:0px !important;
}

nav ul ul{
  background:#30353a !important;
}

nav ul ul li{
  color:#fff;
  padding-left:30px;
}

nav ul ul li:hover{
  background:#3d4247 !important;
  color:#fff;
}

.begin-menu{
  height:120px;
  padding-top:50px;
}

.logo-system{
  width:25%;
  margin-left:75px;
}

.logo-system img{
  border-radius: 60%;
  -webkit-box-shadow: -1px 1px 5px 1px rgba(0,0,0,1);
  -moz-box-shadow: -1px 1px 5px 1px rgba(0,0,0,1);
  box-shadow: -1px 1px 5px 1px rgba(0,0,0,1);
}

.actionsuser{
  background:transparent;
  height:20px;
  color:#fff;
  margin-top:10px !important;
  margin-bottom:20px !important;
  margin-left:35px !important;
}

.dropdown-span{
  background:red;
  width:200px !important;
  height:20px !important;
}

nav a, .dropdown-li{
 color:#fff !important;
 cursor:pointer !important;
}

.activeRoute{
  color:#0072c9 !important;
}
/*#1E90FF*/

nav ul ul .activeRouteExact > li{
  background:#0072c9 !important;
  color:#fff;
}

.activeRouteExact > li{
  background:#0072c9 !important;
  color:#fff;
}

.fas-menu, .fab{
 margin-right:18px;
}

nav ul ul li .fas, nav ul ul li.fab{
 margin-right:10px !important;
}

.menu-vertical i{
  font-size:17px !important;
}

.fas-right{
  margin-left:70px !important;
}

.menu-horizontal{
  background: #fff;
  box-shadow: 0 2px 1px rgba(0,0,0,.15);
  width:100%;
  position:fixed;
  top:0px;
  height:45px;
}

.hrtwo{
  background:#464d54 !important;
  color:#464d54 !important;
  width:80% !important;
  margin-left:20px !important;
  margin-bottom:8px !important;
}

.hr{
  background:#464d54 !important;
  color:#464d54 !important;
  width:80% !important;
  margin-left:20px !important;
  margin-top:10px !important;
  margin-bottom:10px !important;
}
</style>
