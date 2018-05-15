<template>
 <div>
  <div class="columns is-desktop is-list">
   <div class="column column-divisor column-large-n column-list">
     <div class="actions is-pulled-right">
      <a class="button is-info" v-on:click="register"><i class="fas fa-plus fas-spacing"></i> <span class="hd-mobile">Cadastrar Clientes</span></a>
     </div>
     <div class="index_client index_page">
        <div class="is-pulled-right pagination is-clearfix">
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
               <div class="field">
                <p class="control has-icons-left">
                  <span class="select is-small is-info is-inverted">
                   <select v-model="typesearch" v-on:click="getType(typesearch)">
                    <option v-for="option in options" :key="option.value" v-bind:value="option.value">
                     {{ option.name }}
                    </option>
                   </select>
                  </span>
                  <span class="icon is-small is-left">
                   <i class="fas fa-search"></i>
                  </span>
                </p>
               </div>
              </div>
              <div class="is-pulled-right is-clearfix">
                <button class="button is-info is-small" v-show="Object.keys(checkcl.checkclient).length > 0" v-on:click="allTrash()">Excluir {{ checkcl.checkclient.length }}</button>
              </div>
            </div>
            <div class="search">
              <div class="control has-icons-left">
                <input class="input is-small" type="search" v-model="search" :placeholder="placeholder">
                <span class="icon is-left">
                  <i class="fas fa-search"></i>
                </span>
              </div>
            </div>
            <div class="action_sort">
              <span class="order_title">Ordenar por:</span>
              <span class="a_action_sort"><a href="javascript:void(0)" class="buttonsort button is-small" v-on:click.prevent="sort('id')">Código</a></span>
              <span class="a_action_sort"><a href="javascript:void(0)" class="buttonsort button is-small" v-on:click.prevent="sort('client')">Ciente</a></span>
              <span class="a_action_sort"><a href="javascript:void(0)" class="buttonsort button is-small" v-on:click.prevent="sort('cnpjcpf')">Cnpj ou Cpf</a></span>
              <span class="a_action_sort"><a href="javascript:void(0)" class="buttonsort button is-small" v-on:click.prevent="sort('reference')">Referencia</a></span>
              <span class="a_action_sort"><a href="javascript:void(0)" class="buttonsort button is-small" v-on:click.prevent="sort('group')">Grupo</a></span>
            </div>
            <div class="list">
              <ul class="ullisten">
                <li v-for="(client, index) in clients" :key="client.id">
                  <ul class="ulinternet_listen">
                    <li>
                      <div class="is-pulled-right">
                        <span class="select_check">Selecionar</span> <input type="checkbox" name="checkclient[]" :id="client.id" :value="client.id" v-model="checkcl.checkclient">
                      </div>
                    </li>
                    <li>
                      <div>
                        <p class="info_relevant">
                          <span v-text="client.cod"></span>
                          -
                          <span v-text="client.client"></span>
                        </p>
                      </div>
                    </li>
                    <li class="linespacing">
                      <span><i class="fas fa-phone" v-if="client.phone1 && client.phone1.length > 0"></i> {{ client.phone1 }}</span>
                      <span class="spacing_left" v-if="client.phone2 && client.phone2.length > 0"><i class="fas fa-mobile-alt"></i> {{ client.phone2 }}</span>
                      <span class="spacing_left" v-if="client.email && client.email.length > 0"><i class="fas fa-envelope"></i> {{ client.email }}</span>
                    </li>
                    <li class="linespacing hd-mobile">
                      <span><i class="fas fa-map"></i></span>
                      <span v-if="client.street && client.street.length > 0"> {{ client.street }} <span v-if="client.number && client.number.length > 0"> n° {{ client.number }} </span> </span>
                      <br>
                      <span v-if="client.cep && client.cep.length > 0"><i class="fas fa-globe"> </i>
                      {{ client.cep }} </span>
                    </li>
                    <li class="linespacing" v-if="client.city && client.city.length > 0 || client.uf && client.uf.length > 0">
                      <span><i class="fas fa-map-marker"></i> {{ client.city }} - {{ client.uf }}</span>
                    </li>
                    <br>
                    <li class="actions_list">
                      <span v-on:click="edit(index)"><i class="fas fa-edit"></i> Editar</span>
                      <span v-on:click="trash(index)" class="spacing_left"><i class="fas fa-trash"></i> Excluir</span>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
        </div>
     </div>
   </div>
  </div>
 </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
import AbNotlist from '../../../components/NotList'

export default {
  name: 'IndexClient',
  components: {
    AbNotlist
  },
  data () {
    return {
      title: 'Clientes',
      icon: 'fas fa-tags',
      checkcl: {
        checkclient: []
      },
      typesearch: 'client',
      placeholder: 'Pesquisar por Cliente',
      search: '',
      notlist: 'Nenhum produto ainda cadastrado.',
      columnSort: 'id',
      columnOrder: 'desc',
      options: [
        { name: 'Cliente', value: 'client' },
        { name: 'CNPJ/CPF', value: 'cnpjcpf' },
        { name: 'Referencia', value: 'reference' },
        { name: 'Rota', value: 'route' }
      ]
    }
  },

  methods: {
    ...mapActions(['setClients', 'setFetching', 'setMessage']),

    scroll: function () {
      window.scrollTo(0, 0)
    },

    sort: function (colum) {
      if (this.columnSort === colum) {
        this.columnOrder = (this.columnOrder === 'asc') ? 'desc' : 'asc'
      } else {
        this.columnSort = colum
        this.columnOrder = 'asc'
      }
      this.fetchPaginate()
    },

    register: function () {
      this.$router.push({ name: 'client.create', query: { page: this.currentPage } })
    },

    fetchPaginate: function () {
      this.setFetching({ fetching: true })
      this.$http.get(`api/clients/client/client?page=${this.currentPage}&search=${this.search}&typesearch=${this.typesearch}&sort=${this.columnOrder}&typesort=${this.columnSort}`).then(({ data }) => {
        this.setClients({
          list: data.data,
          pagination: data
        })
        this.setFetching({ fetching: false })
      })
    },

    navigate (page) {
      this.$router.push({ name: 'client', query: { page } })
    },

    getType (val) {
      if (val === 'client') {
        this.placeholder = 'Pesquisar por Cliente'
      } else if (val === 'cnpjcpf') {
        this.placeholder = 'Pesquisar por CNPJ ou CPF'
      } else if (val === 'reference') {
        this.placeholder = 'Pesquisar por Referencia'
      } else if (val === 'rota') {
        this.placeholder = 'Pesquisar por Rota'
      } else {
        this.placeholder = 'Pesquisar por Cliente'
      }
      this.typesearch = val
    },

    trash: function (index) {
      const client = JSON.parse(JSON.stringify(this.clients[index]))
      this.$confirm(`Você está prestes a excluir o cliente ${client.client}`, `Deseja excluir o cliente "${client.client}" ?`, {
        confirmButtonText: 'Excluir',
        cancelButtonText: 'Cancelar',
        type: 'warning'
      }).then(() => {
        this.remove(client)
      }).catch(() => {
      })
    },

    remove: function (client) {
      this.$http.delete(`api/clients/client/delclient/${client.id}`).then(() => {
        this.fetchPaginate()
        this.setMessage({ type: 'success', message: 'Cliente excluído com sucesso!' })
        this.text = this.messages.success
        this.$bus.$emit('alertDeleting', this.text)
      })
    },

    allTrash: function () {
      this.$confirm(`Você está prestes a excluir ${this.checkcl.checkclient.length} cliente(s)`, `Deseja excluir estes cliente(s)?`, {
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
      this.$http.post('api/clients/client/delallclient', this.checkcl).then(() => {
        this.fetchPaginate()
        this.setMessage({ type: 'success', message: 'Client(s) excluídos com sucesso!' })
        this.text = this.messages.success
        this.$bus.$emit('alertDeleting', this.text)
        this.reset()
      })
    },

    reset: function () {
      this.checkcl.checkclient = []
    }
  },

  watch: {
    currentPage: 'fetchPaginate',
    search: function () {
      setTimeout(() => { this.fetchPaginate() }, 500)
      this.notlist = `Nenhum cliente "${this.search}" encontrado`
      this.$router.push({ name: 'client', query: { page: 1 } })
    }
  },

  computed: {
    ...mapState({
      fetching: state => state.fetching,
      pagination: state => state.Client.pagination,
      list: state => state.Client.list,
      messages: state => state.messages
    }),

    clients () {
      return this.list
    },

    currentPage (val) {
      return parseInt(this.$route.query.page)
    }
  },

  mounted () {
    this.fetchPaginate()
  }
}
</script>
