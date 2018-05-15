<template>
  <div>
    <div class="columns is-desktop is-list">
     <div class="column column-divisor column-large-n column-list">
       <div class="actions is-pulled-right">
        <a class="button is-info" v-on:click="register"><i class="fas fa-plus fas-spacing"></i> <span class="hd-mobile">Cadastrar Produto</span></a>
       </div>
       <div class="index_product index_page">
          <div class="risebox is-pulled-left risediv">
            <a class="button is-small is-danger is-outlined" v-on:click="activeCollapse"><i class="far fa-money-bill-alt fas-spacing"></i> <span class="hd-mobile">Aumento de preço por grupo</span></a>
          </div>
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
          <br>
          <transition name="fade">
            <div class="show_collapse" v-show="collapse_rise === true">
              <div class="formrise">
                <vue-form ref="formrise" :state="formRise" @submit.prevent="submitRise" class="formrise">
                  <div class="columns is-desktop">
                  <div class="column is-one-fifth">
                   <div class="field">
                    <validate tag="label">
                      <span class="is-pulled-left"><label class="label labels">Aumento</label></span>
                      <br>
                      <div class="control has-icons-left has-icons-right">
                        <money class="input" v-model="rise.rise" name="rise" v-bind="percent" required></money>
                        <span class="required-input">* Campo Obrigatório</span>
                        <span class="icon is-small is-left">
                         <i class="fas fa-percent fas-icon"></i>
                        </span>
                        <div v-if="rise.rise != '0,00'">
                          <span class="icon is-small is-right"><i class="fas fa-check"></i></span>
                        </div>
                        <field-messages name="rise" show="$submitted || $submitted && $touched" class="notice">
                          <div v-if="rise.rise == '0,00'" class="tooltip tooltip_bottom">
                            <span class="glyphicon glyphicon-exclamation-sign"></span>
                              <i class="fas fa-exclamation spagin-5"></i> Preencha este campo.
                          </div>
                        </field-messages>
                      </div>
                    </validate>
                   </div>
                  </div>
                  <div class="column">
                   <div class="field">
                    <validate>
                      <span class="is-pulled-left"><label class="label labels">Grupo</label></span>
                      <br>
                      <div class="control has-icons-left has-icons-right">
                        <multiselect v-model="rise.group" name="group" required track-by="groupproduct" label="groupproduct" placeholder="Selecione" :options="Groupproduct" :searchable="true" :allow-empty="false" selectedLabel="Selecionado" deselectLabel="Pessione 'Enter' para remover" selectLabel="Pressione 'Enter' para adicionar">
                          <template slot="singleLabel" slot-scope="{ option }"><strong>{{ option.groupproduct }}</strong></template>
                          <span slot="noResult"><i class="fas fa-times-circle"></i> Nenhum resultado encontrado. Considere alterar a pesquisa.</span>
                        </multiselect>
                        <span class="required-input">* Campo Obrigatório</span>
                        <div v-if="rise.group.length > 0">
                          <span class="icon is-small is-right"><i class="fas fa-check"></i></span>
                        </div>
                        <field-messages name="group" show="$submitted || $submitted && $touched" class="notice">
                          <div class="help_notice_sucess">
                           <span class="icon is-small is-right"><i class="fas fa-check"></i></span>
                          </div>
                          <div slot="required" class="tooltip tooltip_bottom">
                            <span class="glyphicon glyphicon-exclamation-sign"></span>
                              <i class="fas fa-exclamation spagin-5"></i> Preencha este campo.
                          </div>
                        </field-messages>
                      </div>
                    </validate>
                   </div>
                  </div>
                  </div>
                  <div class="field">
                    <button type="submit" class="button button is-link is-small is-pulled-left">Aumentar</button>
                    <a v-on:click="resetRise" class="button button is-dark is-small is-pulled-left" style="margin-left:10px;">Cancelar</a>
                    <br>
                  </div>
                </vue-form>
               </div>
            </div>
          </transition>
          <br>
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
                <button class="button is-info is-small" v-show="Object.keys(checkprod.checkproduct).length > 0" v-on:click="allTrash()">Excluir {{ checkprod.checkproduct.length }}</button>
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
          </div>
         <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth box-shadow">
           <thead>
            <tr>
              <th class="table-th-small hd-mobile"><a title="Ordenar" href="javascript:void(0)" class="linksort" v-on:click.prevent="sort('cod')">Código</a></th>
              <th class="table-th-small hd-mobile">Unidade</th>
              <th class="wd-mobile"><a title="Ordenar" href="javascript:void(0)" class="linksort" v-on:click.prevent="sort('product')">Produto</a></th>
              <th class="table-th-meddle hd-mobile"><a title="Ordenar" href="javascript:void(0)" class="linksort" v-on:click.prevent="sort('groupproduct')">Grupo</a></th>
              <th class="table-th-meddle hd-mobile has-text-centered"><a title="Ordenar" href="javascript:void(0)" class="linksort" v-on:click.prevent="sort('price')">Preço</a></th>
              <th class="table-th-small has-text-centered">Editar</th>
              <th class="table-th-small has-text-centered">Excluir</th>
              <th class="has-text-centered hd-mobile table-th-min"><i class="fas fa-trash-alt"></i></th>
            </tr>
           </thead>
           <tbody>
            <tr v-for="(product, index) in products" :key="product.id">
              <td v-text="product.cod" class="hd-mobile has-text-centered"></td>
              <td v-text="product.unit" class="hd-mobile has-text-centered"></td>
              <td v-text="product.product"></td>
              <td v-text="product.groupproduct" class="hd-mobile"></td>
              <td class="hd-mobile has-text-centered">{{ product.price | currency }}</td>
              <td class="has-text-centered edit" v-on:click="edit(index)"> <i class="fas fa-edit"></i> </td>
              <td class="has-text-centered trash" v-on:click="trash(index)"> <i class="fas fa-trash"></i> </td>
              <td class="has-text-centered check hd-mobile">
                 <input type="checkbox" name="checkproduct[]" :id="product.id" :value="product.id" v-model="checkprod.checkproduct">
              </td>
            </tr>
           </tbody>
          </table>
          <ab-notlist v-if="products.length == 0" :message="notlist"></ab-notlist>
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
       </div>
     </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
import AbNotlist from '../../../../components/NotList'

export default {
  name: 'IndexProduct',
  components: {
    AbNotlist
  },
  data () {
    return {
      icon: 'fas fa-tag',
      title: 'Produtos',
      checkprod: {
        checkproduct: []
      },
      search: '',
      notlist: 'Nenhum produto ainda cadastrado.',
      columnSort: 'id',
      columnOrder: 'asc',
      typesearch: 'product',
      placeholder: 'Pesquisar por Produto',
      options: [
        { name: 'Produto', value: 'product' },
        { name: 'Código', value: 'cod' },
        { name: 'Grupo', value: 'groupproduct' }
      ],
      init: false,
      collapse_rise: false,
      formRise: {},
      rise: {
        rise: '0,00',
        group: ''
      },
      percent: {
        decimal: ',',
        thousands: '.',
        prefix: '',
        suffix: '',
        precision: 2,
        masked: true
      }
    }
  },

  methods: {
    ...mapActions(['setGroupproducts', 'setProducts', 'setFetching', 'setMessage']),

    scroll: function () {
      window.scrollTo(0, 0)
    },

    sort: function (colum) {
      if (this.columnSort === colum) {
        this.columnOrder = (this.columnOrder === 'desc') ? 'asc' : 'desc'
      } else {
        this.columnSort = colum
        this.columnOrder = 'desc'
      }
      this.fetch()
    },

    register: function () {
      this.$router.push({ name: 'product.create', query: { page: this.currentPage } })
    },

    edit: function (index) {
      const product = this.products[index]
      const { id } = this.products[index]
      this.$router.push({
        name: 'product.edit',
        params: { product, id },
        query: { page: this.currentPage }
      })
    },

    trash: function (index) {
      const product = JSON.parse(JSON.stringify(this.products[index]))
      this.$confirm(`Você está prestes a excluir o produto ${product.product}`, `Deseja excluir o produto "${product.cod}" ?`, {
        confirmButtonText: 'Excluir',
        cancelButtonText: 'Cancelar',
        type: 'warning'
      }).then(() => {
        this.remove(product)
      }).catch(() => {
      })
    },

    remove: function (product) {
      this.$http.delete(`api/products/product/delproduct/${product.id}`).then(() => {
        this.fetch()
        this.setMessage({ type: 'success', message: 'Produto excluído com sucesso!' })
        this.text = this.messages.success
        this.$bus.$emit('alertDeleting', this.text)
      })
    },

    allTrash: function () {
      this.$confirm(`Você está prestes a excluir ${this.checkprod.checkproduct.length} produto(s)`, `Deseja excluir estes produto(s)?`, {
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
      this.$http.post('api/products/product/delallproduct', this.checkprod).then(() => {
        this.fetch()
        this.setMessage({ type: 'success', message: 'Produto(s) excluído(s) com sucesso!' })
        this.text = this.messages.success
        this.$bus.$emit('alertDeleting', this.text)
        this.reset()
      })
    },

    fetch: function () {
      this.setFetching({ fetching: true })
      this.$http.get(`api/products/product/product?page=${this.currentPage}&search=${this.search}&typesearch=${this.typesearch}&sort=${this.columnOrder}&typesort=${this.columnSort}`).then(({ data }) => {
        this.setProducts({
          list: data.data,
          pagination: data
        })
        this.setFetching({ fetching: false })
      })
    },

    fetchGroupproduct: function () {
      if (!this.Groupproduct.length) {
        this.setFetching({ fetching: true })
        this.$http.get('api/products/groupproduct/grouproductselectsbox').then(({ data }) => {
          this.setGroupproducts({
            full_list: data
          })
          this.setFetching({ fetching: false })
        })
      }
    },

    navigate (page) {
      this.$router.push({ name: 'product', query: { page } })
    },

    getType (val) {
      if (val === 'products') {
        this.placeholder = 'Pesquisar por Produto'
      } else if (val === 'cod') {
        this.placeholder = 'Pesquisar por Código'
      } else if (val === 'groupproduct') {
        this.placeholder = 'Pesquisar por Grupo'
      } else {
        this.placeholder = 'Pesquisar por Produto'
      }
      this.typesearch = val
    },

    reset: function () {
      this.checkprod.checkproduct = []
    },

    activeCollapse: function () {
      this.collapse_rise = !this.collapse_rise
    },

    submitRise: function () {
      if (this.formRise.$valid) {
        this.rise.rise = this.rise.rise
        this.rise.group = this.rise.group.id

        this.$http.post('api/products/risergroup/addrise', this.rise).then((res) => {
          this.$bus.$emit('product.created')

          this.setFetching({ fetching: false })

          this.setMessage({type: 'success', message: 'Aumento realizado com sucesso!'})
          this.text = this.messages.success
          this.$bus.$emit('alertSuccess', '<i class="fas fa-cloud"></i> Aumento salvo com sucesso!', this.text)
          this.resetRise()
          this.$router.push({ name: 'product', query: { page: 1 } })
        })
      }
    },

    resetRise () {
      this.rise.rise = '0,00'
      this.rise.group = ''
      this.collapse_rise = false
      this.$refs.formrise.reset()
    }
  },

  watch: {
    currentPage: 'fetch',
    search: function () {
      setTimeout(() => { this.fetch() }, 500)
      this.notlist = `Nenhum produto "${this.search}" encontrado`
      this.$router.push({ name: 'product', query: { page: 1 } })
    }
  },

  computed: {
    ...mapState({
      fetching: state => state.fetching,
      pagination: state => state.Product.pagination,
      list: state => state.Product.list,
      messages: state => state.messages,
      Groupproduct: state => state.Groupproduct.full_list
    }),

    products () {
      return this.list
    },

    currentPage (val) {
      return parseInt(this.$route.query.page)
    }
  },

  beforeRouteLeave (to, from, next) {
    this.$bus.$off('product.created')
    this.$bus.$off('product.updated')
    next()
  },

  mounted () {
    this.$bus.$on('product.created', this.fetch)
    this.$bus.$on('product.updated', this.fetch)
    this.fetchGroupproduct()
    this.fetch()
  },

  created () {
  }
}
</script>
<style>
.risediv{
  margin-top:-15px !important;
}

.formrise{
  margin:12px;
}

</style>
