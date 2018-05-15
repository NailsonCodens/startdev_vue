<template>
  <header class="menu-horizontal">
    <div class="is-pulled-left container-left">
     <div class="">
      <img src="../../static/images/codens.png" class="logoapp-menu">
      <a href="javascript:void(0)">
       <span class="menu-hanbuger" v-on:click="menu"><i class="fas fa-bars"></i></span>
      </a>
     </div>
    </div>
    <div class="is-pulled-right actions-menu-h">
      <div class="is-pulled-left guide-begin hide-action">
       <p><i class="fas fa-map"></i> Guia inicial</p>
      </div>
      <div class="is-pulled-left action-icons hide-action" v-on:click="fullscreen">
        <i class="fas fa-desktop fas-menu"></i>
      </div>
      <div class="is-pulled-left action-icons">
        <i class="fas fa-bell fas-menu"></i>
      </div>
      <div class="is-pulled-right user-info"  v-on:click="show" v-click-out="hide">
       <a href="javascript:void(0)"><i class="fas fa-user"></i> {{ currentUser }} </a>
       <ul class="dropdown" :class="{active: visible}">
        <router-link to="/profile"><li><i class="fas fa-user-circle fas-menu"></i> Meus dados </li></router-link>
        <router-link to="/company"><li><i class="fas fa-building fas-menu"></i> Minha empresa </li></router-link>
        <router-link to="/configuration"><li><i class="fas fa-cog fas-menu"></i> Configuração</li></router-link>
        <li v-on:click="logout()" class="logout"><i class="fas fa-sign-out-alt fas-menu"></i>Logout</li>
       </ul>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'MenuHorizontal',

  data () {
    return {
      menuVertical: false,
      visible: false
    }
  },

  methods: {
    menu: function () {
      this.$emit('actionMenu', this.menu)
    },

    fullscreen: function () {
      console.log('clicou')
    },
    logout: function () {
      this.$emit('logoutUser')
    },

    show: function () {
      this.visible = !this.visible
    },
    hide: function () {
      this.visible = false
    }
  },

  computed: {
    ...mapGetters(['currentUser'])
  }
}
</script>

<style type="text/css">
.menu-horizontal{
  background: #fff;
  box-shadow: 0 2px 1px rgba(0,0,0,.0.6);
  width:100%;
  position:fixed;
  z-index:999;
  top:0px;
  height:40px;
}

.container-left{
  width:240px;
  border-right:1px solid #dedede;
  background:transparent;
  height:40px;
}

.menu-hanbuger{
  margin-left:70px !important;
  font-size:25px;
  color:#4e5359;
  cursor:pointer;
  background:transparent;
  z-index:99;
  top:4px !important;
}

/**dimiui o tamanho da coluna para fechar e abrir o menu**/
.column-menu-show{
  width:240px !important;
}

.column-menu-hide{
  width:0px !important;
}

.logoapp-menu{
  width:120px;
  margin-left:10px;
  margin-top:5px;
}

.actions-menu-h{
  height:40px;
  font-family: 'Open Sans', sans-serif !important;
}

.guide-begin{
  padding-top:8px;
  margin-right:20px;
  cursor:pointer;
}

.action-icons{
  padding-top:8px;
  cursor:pointer;
  height:40px;
  padding-left:15px;
  border-left:1px solid #dedede;
}

.user-info{
  padding-top:8px;
  height:40px;
  padding-left:10px;
  padding-right:10px;
  border-left:1px solid #dedede;
  cursor:pointer;
}

.user-info a{
  color:#4B4B4B;
}

.dropdown-user li{
  margin-bottom:10px;
}

.dropdown li:hover{
  background:#eeeeee;
  width:100% !important;
}

.dropdown {
  display: none;
}

.dropdown.active {
  background:#fff;
  margin-top:10px;
  width:180px;
  z-index:999;
  position:absolute;
  right:0px;
  border:1px solid #dedede;
  padding:5px 0px;
  display: block;
}

.dropdown.active li{
  padding-left:10px !important;
  margin-bottom:3px;
  padding-top:3px;
  height:30px;
  background:#;
}

.logout{
 margin-top:10px;
 padding-top:5px;
 border-top:1px solid #dedede;
}

@media screen and (max-width: 767px) {
  .actions-menu-h{
    height:40px;
    width:100%;
    background:#F8F8FF;
    font-family: 'Open Sans', sans-serif !important;
  }

  .container-left{
    width:100%;
    background:transparent;
  }

  .hide-action{
    display:none !important;
  }

  .menu-hanbuger{
    margin-right:10px !important;
    float:right !important;
    font-size:25px;
    color:#4e5359;
    cursor:pointer;
    background:transparent;
    z-index:99;
    top:4px !important;
  }

  .action-icons{
    padding-top:8px;
    cursor:pointer;
    height:40px;
    padding-left:20px;
  }

  .user-info{
    width:180px !important;
    padding-top:8px;
    height:40px;
    padding-left:20px;
    padding-right:0px;
    border-left:1px solid #dedede;
    cursor:pointer;
  }

  .dropdown.active {
    background:#fff;
    margin-top:10px;
    width:100%;
    z-index:999;
    position:absolute;
    right:0px;
    border:1px solid #dedede;
    padding:5px;
    display: block;
  }
}
</style>
