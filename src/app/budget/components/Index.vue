<template>
 <div class="index_product">
   <div class="actions is-pulled-right">
    <a class="button is-primary" v-on:click="register"><i class="fas fa-plus fas-spacing"> </i> Cadastrar Orçamentos</a>
   </div>
   <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth box-shadow">
     <thead>
      <tr>
        <th class="table-th-small">Cliente</th>
        <th class="table-th-small">teste</th>
        <th>Produto</th>
        <th class="table-th-meddle">teste</th>
        <th class="table-th-small">teste</th>
        <th class="table-th-small">teste</th>
      </tr>
     </thead>
     <tbody>
      <tr>
        <td>teste</td>
        <td>teste</td>
        <td>teste</td>
        <td>teste</td>
        <td>teste</td>
        <td>teste</td>
      </tr>
      <tr>
        <td>teste</td>
        <td>teste</td>
        <td>teste</td>
        <td>teste</td>
        <td>teste</td>
        <td>teste</td>
      </tr>
      <tr>
        <td>teste</td>
        <td>teste</td>
        <td>teste</td>
        <td>teste</td>
        <td>teste</td>
        <td>teste</td>
      </tr>
      <tr>
        <td>teste</td>
        <td>teste</td>
        <td>teste</td>
        <td>teste</td>
        <td>teste</td>
        <td>teste</td>
      </tr>
      <tr>
        <td>teste</td>
        <td>teste</td>
        <td>teste</td>
        <td>teste</td>
        <td>teste</td>
        <td>teste</td>
      </tr>
     </tbody>
    </table>
 </div>
</template>

<script>
export default {
  name: 'IndexClient',
  data () {
    return {
      title: 'Orçamentos',
      icon: 'fas fa-tags'
    }
  },

  methods: {
    register: function () {
      this.$router.push({ name: 'budget.create' })
    }
  }
}
</script>
