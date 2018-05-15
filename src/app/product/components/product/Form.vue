<template>
  <div class="columns is-desktop is-list">
   <div class="column column-divisor column-large-n column-list">
    <div class="form-product">
      <h2 class="title-container-free-list">
       <i class="fas fa-pencil-alt" v-show="$route.name === 'product.edit'"></i>
       <i class="fas fa-plus-circle" v-show="$route.name === 'product.create'"></i>
       {{ this.$route.meta.subtitle }}
      </h2>
      <vue-form ref="formproduct" :state="formProduct" @submit.prevent="submit">
       <div class="columns is-desktop">
        <div class="column is-one-fifth">
         <div class="field">
          <validate tag="label">
           <span class="is-pulled-left"><label class="label labels">Código</label></span>
           <br>
           <div class="control has-icons-left has-icons-right">
            <input class="input" type="text" v-model="productform.cod" required name="cod" placeholder="Ex: ABC - 01" autofocus="">
            <span class="required-input">* Campo Obrigatório</span>
            <span class="icon is-small is-left">
             <i class="fas fa-key fas-icon"></i>
            </span>
            <div v-if="productform.cod.length > 0">
             <span class="icon is-small is-right"><i class="fas fa-check"></i></span>
            </div>
            <field-messages name="cod" show="$submitted || $submitted && $touched" class="notice">
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
        <div class="column">
         <div class="field">
          <validate tag="label">
           <span class="is-pulled-left"><label class="label labels">Produto</label></span>
           <br>
           <div class="control has-icons-left has-icons-right">
            <input class="input" type="text" v-model="productform.product" required name="product" placeholder="Ex: PRODUTO DEMONSTRAÇÃO" autofocus="">
            <span class="required-input">* Campo Obrigatório</span>
            <span class="icon is-small is-left">
             <i class="fas fa-tag fas-icon"></i>
            </span>
            <div v-if="productform.product.length > 0">
             <span class="icon is-small is-right"><i class="fas fa-check"></i></span>
            </div>
            <field-messages name="product" show="$submitted || $submitted && $touched" class="notice">
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
      <div class="columns is-desktop">
       <div class="column">
         <div class="field">
          <validate tag="label">
           <span class="is-pulled-left"><label class="label labels">Preço</label></span>
           <br>
           <div class="control has-icons-left has-icons-right">
            <money class="input" v-model="productform.price" name="price" v-bind="money" required></money>
            <span class="required-input">* Campo Obrigatório</span>
            <span class="icon is-small is-left">
             <i class="fas fa-money-bill-alt fas-icon"></i>
            </span>
            <div v-if="productform.price != '0,00'">
             <span class="icon is-small is-right"><i class="fas fa-check"></i></span>
            </div>
            <field-messages v-if="productform.price == '0,00'" name="product" show="$submitted || $submitted && $touched" class="notice">
              <div slot="required" class="tooltip tooltip_bottom">
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
          <validate tag="label">
           <span class="is-pulled-left"><label class="label labels">Ipi</label></span>
           <br>
           <div class="control has-icons-left has-icons-right">
            <money class="input" v-model="productform.ipi" name="ipi" v-bind="percent"></money>
            <span class="icon is-small is-left">
             <i class="fas fa-percent fas-icon"></i>
            </span>
            <div v-if="productform.ipi != '0,00'">
             <span class="icon is-small is-right"><i class="fas fa-check"></i></span>
            </div>
           </div>
          </validate>
         </div>
       </div>
       <div class="column">
         <div class="field">
          <validate tag="label">
           <span class="is-pulled-left"><label class="label labels">Unidade</label></span>
           <br>
           <div class="control has-icons-left has-icons-right">
            <input class="input" type="text" v-model="productform.unit" name="unit" placeholder="UN" autofocus="">
            <span class="icon is-small is-left">
             <i class="fas fa-boxes fas-icon"></i>
            </span>
            <div  v-show="productform.unit.length > 0">
             <span class="icon is-small is-right"><i class="fas fa-check"></i></span>
            </div>
           </div>
          </validate>
         </div>
       </div>
      </div>
      <div class="columns is-desktop">
       <div class="column is-one-fifth">
         <div class="field">
          <validate tag="label">
           <span class="is-pulled-left"><label class="label labels">Comissão</label></span>
           <br>
           <div class="control has-icons-left has-icons-right">
            <money class="input" v-model="productform.commission" name="commission" v-bind="percent"></money>
            <span class="icon is-small is-left">
             <i class="fas fa-percent fas-icon"></i>
            </span>
            <div v-if="productform.commission !== '0,00'">
             <span class="icon is-small is-right"><i class="fas fa-check"></i></span>
            </div>
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
              <multiselect v-model="productform.groupprod" name="groupprod" required track-by="groupproduct" label="groupproduct" placeholder="Selecione" :options="Groupproduct" :searchable="true" :allow-empty="false" selectedLabel="Selecionado" deselectLabel="Pessione 'Enter' para remover" selectLabel="Pressione 'Enter' para adicionar">
                <template slot="singleLabel" slot-scope="{ option }"><strong>{{ option.groupproduct }}</strong></template>
                <span slot="noResult"><i class="fas fa-times-circle"></i> Nenhum resultado encontrado. Considere alterar a pesquisa.</span>
              </multiselect>
              <span class="required-input">* Campo Obrigatório</span>
              <div v-if="productform.groupprod.length > 0">
                <span class="icon is-small is-right"><i class="fas fa-check"></i></span>
              </div>
              <field-messages name="groupprod" show="$submitted || $submitted && $touched" class="notice">
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
        <button type="submit" class="button button button-login is-link is-pulled-right">Salvar</button>
        <br><br>
       </div>
      </vue-form>
    </div>
   </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Formproduct',
  data () {
    return {
      formProduct: {},
      productform: {
        cod: '',
        product: '',
        ipi: '',
        unit: '',
        commission: '',
        price: '',
        groupprod: ''
      },
      product: {
        cod: '',
        product: '',
        ipi: '',
        unit: '',
        commission: '',
        price: '',
        groupprod: ''
      },
      money: {
        decimal: ',',
        thousands: '.',
        prefix: '',
        suffix: '',
        precision: 2,
        masked: true
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
    ...mapActions(['setGroupproducts', 'setFetching', 'resetMessages', 'setMessage']),

    fetch: function () {
      const product = this.$route.params.product
      if (product === undefined) {
        const id = this.$route.params.id
        if (id !== undefined) {
          this.setFetching({ fetching: true })
          this.$http.get(`api/products/product/productid/${id}`).then(({ data }) => {
            const product = data[0]
            this.productform = product
            this.setFetching({ fetching: false })
            this.productform.groupprod = { id: product.groupprod, groupproduct: product.groupproduct }
          })
        }
      } else {
        this.productform.id = product.id
        this.productform.cod = product.cod
        this.productform.product = product.product
        this.productform.price = product.price
        this.productform.unit = product.unit
        this.productform.ipi = product.ipi
        this.productform.commission = product.commission
        this.productform.groupprod = product.groupprod

        this.productform.groupprod = { id: product.groupprod, groupproduct: product.groupproduct }
      }
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

    submit: function () {
      this.product.id = this.productform.id
      this.product.cod = this.productform.cod
      this.product.product = this.productform.product
      this.product.price = this.productform.price
      this.product.unit = this.productform.unit
      this.product.ipi = this.productform.ipi
      this.product.commission = this.productform.commission
      this.product.groupprod = this.productform.groupprod.id

      // eslint-disable-next-line
      /*var pr = this.product.price
      var prc = pr.replace('.', '')
      parseFloat(this.product.price = prc.replace(',', '.'))*/

      if (this.valid) {
        if (this.editing) {
          this.update()
        } else {
          this.save()
        }
      }
    },

    save: function () {
      this.$http.post('api/products/product/addproduct', this.product).then((res) => {
        this.$bus.$emit('product.created')

        this.setFetching({ fetching: false })

        this.setMessage({type: 'success', message: 'Salvo com sucesso!'})
        this.text = this.messages.success
        this.$bus.$emit('alertSuccess', '<i class="fas fa-cloud"></i> Produto salvo com sucesso!', this.text)

        this.reset()
        this.$router.push({ name: 'product', query: { page: 1 } })
      }).catch(() => {
        this.text = this.messages.warning.errors.cod[0] + '.'
        this.$bus.$emit('alertWarning', '<i class="fas fa-clone"></i> Código duplicado.', this.text)
      })
    },

    update: function () {
      this.$http.put(`api/products/product/upproduct/${this.product.id}`, this.product).then(({ data }) => {
        this.setMessage({ type: 'upsuccess', message: 'Produto editado com sucesso!' })
        this.setFetching({ fetching: false })
        this.text = this.messages.upsuccess
        this.$bus.$emit('alertSuccess', '<i class="fas fa-edit"></i> Produto Alterado.', this.text)
        this.$bus.$emit('product.updated')
        this.reset()
        this.$router.push({ name: 'product', query: { page: this.$route.query.page } })
      }).catch((res) => {
        this.text = this.messages.warning.errors.cod[0] + '.'
        this.$bus.$emit('alertWarning', '<i class="fas fa-clone"></i> Este código já existe, atualização não possível.', this.text)
      })
    },

    reset () {
      this.product.id = 0
      this.productform.id = 0
      this.$refs.formproduct.reset()
    }
  },

  computed: {
    ...mapState(['messages']),
    ...mapState({
      Groupproduct: state => state.Groupproduct.full_list
    }),

    editing: function () {
      return this.productform.id > 0
    },

    valid: function () {
      this.resetMessages()
      if (this.formProduct.$valid !== true) {
        return false
      }

      return true
    }
  },

  mounted () {
    this.fetch()
    this.fetchGroupproduct()
  }
}
</script>
