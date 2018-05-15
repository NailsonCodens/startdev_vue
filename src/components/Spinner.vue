<template>
 <div class="container">
  <div class="lds-css ng-scope" v-show="fetching"><div style="width:100%;height:100%" class="lds-rolling"><div></div></div></div>
 </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['fetching'])
  }
}
</script>
<style type="text/css">
@keyframes lds-rolling {
  0% {
    -webkit-transform: translate(-50%, -50%) rotate(0deg);
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    -webkit-transform: translate(-50%, -50%) rotate(360deg);
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
@-webkit-keyframes lds-rolling {
  0% {
    -webkit-transform: translate(-50%, -50%) rotate(0deg);
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    -webkit-transform: translate(-50%, -50%) rotate(360deg);
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
.lds-rolling {
  position: fixed;
  z-index:99999;
  top: 60px;
  right: -10px;
}
.lds-rolling div,
.lds-rolling div:after {
  position: absolute;
  width: 30px;
  height: 30px;
  border: 5px solid #0073c4;
  border-top-color: transparent;
  border-radius: 50%;
}
.lds-rolling div {
  -webkit-animation: lds-rolling 1s linear infinite;
  animation: lds-rolling 1s linear infinite;
}
.lds-rolling div:after {
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
}
.lds-rolling {
  width: 40px !important;
  height: 40px !important;
  -webkit-transform: translate(-100px, -100px) scale(1) translate(100px, 100px);
  transform: translate(-100px, -100px) scale(1) translate(100px, 100px);
}
</style>
