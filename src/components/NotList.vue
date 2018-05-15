<template>
  <div class="">
   <p class="notFound has-text-centered"><i class="fas fa-exclamation-circle"></i> {{ message }}</p>
  </div>
</template>
<script>
export default {
  name: 'NotList',

  props: ['message']
}
</script>
<style>
.notFound{
  width:100% !important;
  font-size:18px;
  color:#0074D7 !important;
  margin-top:20px;
  margin-bottom:10px;
}
</style>
