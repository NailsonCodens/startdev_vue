<template>
  <div>
   <div class="index_product">
    <div class="columns is-desktop is-list">
     <div class="column column-divisor column-large column-list">
      <h2 class="title-container-free-list">
       <i class="fas fas fa-tags"></i>
        Grupos
        </h2>
        <div class="is-pulled-right pagination">
          <div class="block">
            <el-pagination
              @current-change="navigate"
              :current-page="pagination.current_page"
              :page-size="pagination.per_page"
              layout="total, prev, pager, next, jumper"
              :total="pagination.total">
            </el-pagination>
          </div>
        </div>
        <br><br>
       <div class="dashtable">
        <div class="operations is-clearfix">
          <div class="is-pulled-left">
          </div>
          <div class="is-pulled-right">
            <button class="button is-outlined is-small"><span class="button_operations pointer sort" v-on:click.prevent="sort('groupproduct')">Ordenar <i class="fas fa-sort-alpha-down"></i></span></button>
            <button class="button is-info is-small" v-show="Object.keys(check.checkgroupproduct).length > 0" v-on:click="allTrash()">Excluir {{ check.checkgroupproduct.length }}</button>
          </div>
        </div>
        <div class="search">
          <div class="control has-icons-left">
            <input class="input is-small" type="search" v-model="search" placeholder="Pesquisar">
            <span class="icon is-left">
              <i class="fas fa-search"></i>
            </span>
          </div>
        </div>
       </div>
       <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth box-shadow">
         <thead>
          <tr>
            <th class="wd-mobile">Grupo</th>
            <th class="table-th-small ">Editar</th>
            <th class="table-th-small">Excluir</th>
            <th class="has-text-centered hd-mobile table-th-min"><i class="fas fa-trash-alt"></i></th>
          </tr>
         </thead>
         <tbody>
          <tr v-for="(groupproduct, index) in groupproducts" :key="groupproduct.id">
            <td v-text="groupproduct.groupproduct"></td>
            <td class="has-text-centered edit" v-on:click="edit(index)"> <i class="fas fa-edit"></i> </td>
            <td class="has-text-centered trash" v-on:click="trash(index)"> <i class="fas fa-trash"></i> </td>
            <td class="has-text-centered hd-mobile">
              <input type="checkbox" name="checkgroupproduct[]" :id="groupproduct.id" :value="groupproduct.id" v-model="check.checkgroupproduct">
            </td>
          </tr>
         </tbody>
        </table>
        <ab-notlist v-if="groupproducts.length == 0" :message="notlist"></ab-notlist>
        <div class="is-pulled-right pagination pg-bottom">
          <div class="block">
            <el-pagination
              @current-change="navigate"
              :current-page="pagination.current_page"
              :page-size="pagination.per_page"
              layout="total, prev, pager, next, jumper"
              :total="pagination.total">
            </el-pagination>
            <br><br>
          </div>
        </div>
     </div>
     <div class="column is-one-third column-divisor column-small has-text-centered column-list">
     <gp-form :group="returndata"></gp-form>
     </div>
    </div>
   </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import GpForm from './Form'
import AbNotlist from '../../../../components/NotList'

export default {
  name: 'IndexGroupproduct',
  components: {
    GpForm,
    AbNotlist
  },
  data () {
    return {
      title: 'Grupo de Produtos',
      icon: 'fas fa-tags',
      returndata: [],
      check: {
        checkgroupproduct: []
      },
      search: '',
      notlist: 'Nenhum Grupo de produto ainda cadastrado.',
      sortColumn: '',
      init: false
    }
  },

  methods: {
    ...mapActions(['setGroupproducts', 'setFetching', 'setMessage']),

    scroll: function () {
      window.scrollTo(0, 0)
    },

    sort: function () {
      this.sortColumn = (this.sortColumn === '') ? 'desc' : ''
      this.fetchPaginate()
    },

    edit: function (index) {
      this.scroll()
      /* eslint-disable */
      //Hack para retirar do observer, ele gera um observer pois o objeto ainda não foi renderizado no componente pai 
      //Podemos resolver isso também pondo um v-if lenght no component pai para esperar a renderização
      const groupproduct = JSON.parse(JSON.stringify(this.groupproducts[index]))
      this.returndata = groupproduct
    },

    trash: function (index) {
      const groupproduct = JSON.parse(JSON.stringify(this.groupproducts[index]))
      this.$confirm(`Você está prestes a excluir o grupo ${ groupproduct.groupproduct }`,`Deseja excluir o grupo "${ groupproduct.groupproduct }" ?`, {
        confirmButtonText: 'Excluir',
        cancelButtonText: 'Cancelar',
        type: 'warning'
      }).then(() => {
         this.remove(groupproduct)
      }).catch(() => {
      })
    },

    remove: function (groupproduct) {
      this.$http.delete(`api/products/groupproduct/delgroupproduct/${ groupproduct.id }`).then(() => {
        this.fetchPaginate()
        this.fetchFullList()
        this.setMessage({ type: 'success', message: 'Grupo excluído com sucesso!' })

        this.text = this.messages.success
        this.$bus.$emit('alertDeleting', this.text)

      }) 
    },

    allTrash: function () {
      this.$confirm(`Você está prestes a excluir ${this.check.checkgroupproduct.length} grupo(s)`,`Deseja excluir estes grupo(s)?`, {
        confirmButtonText: 'Excluir',
        cancelButtonText: 'Cancelar',
        type: 'warning'
      }).then(() => {
        this.allRemove()
      }).catch(() => {
        this.reset()
      })     
    },

    allRemove: function () {
      this.$http.post('api/products/groupproduct/delallgroupproduct', this.check).then((data) => {
        this.fetchPaginate()
        this.fetchFullList()
        this.setMessage({ type: 'success', message: 'Grupo(s) excluído(s) com sucesso!' })
        this.text = this.messages.success
        this.$bus.$emit('alertDeleting', this.text)
        this.reset()        
      })      
    },

    fetch: function () {
      this.fetchPaginate()
      this.fetchFullList()
    },

    fetchPaginate: function () {
      this.setFetching({ fetching: true })
      this.$http.get(`api/products/groupproduct/groupproduct?page=${this.currentPage}&search=${this.search}&sort=${this.sortColumn}`).then(({ data }) => {
        this.setGroupproducts({
          list: data.data,
          pagination: data,
        })
        this.setFetching({ fetching: false })
      })
    },

    fetchFullList: function () {
      this.setFetching({ fetching: true })
      this.$http.get('api/products/groupproduct/grouproductselectsbox').then(({ data }) => {
        this.setGroupproducts({
          full_list: data,
        })        
        this.setFetching({ fetching: false })
      })
    },

    navigate (page) {
      this.$router.push({ name: 'groupproduct', query: { page } })
    },

    reset: function () {
      this.check.checkgroupproduct = []
    }
  },

  watch: {
    currentPage: 'fetchPaginate',
    search: function () {
      setTimeout(() => { this.fetchPaginate() }, 500)
      this.notlist = `Nenhum grupo "${this.search}" encontrado`
      this.$router.push({ name: 'groupproduct', query: { page: 1 } })
    }
  },

  computed: {
    ...mapState({
      fetching: state => state.fetching,
      pagination: state => state.Groupproduct.pagination,
      list: state => state.Groupproduct.list,
      messages: state => state.messages
    }),

    groupproducts () {
      return this.list
    },

    currentPage () {
      if (this.init === true) {
        return 1
      } else {
        return parseInt(this.$route.query.page)
      }
    }
  },

  beforeRouteLeave (to, from, next) {
    this.$bus.$off('groupproduct.created')
    this.$bus.$off('groupproduct.updated')
    this.$bus.$off('resetgroup')
    next()
  },

  mounted () {
    this.$bus.$on('groupproduct.created', this.fetch)
    this.$bus.$on('groupproduct.updated', this.fetch)
    this.$bus.$on('resetgroup', () => this.returndata = '')
    this.fetchPaginate()
  },

  created () {
  }
}
</script>
