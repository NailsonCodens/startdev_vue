<template>
  <div class="form-product">
    <h2 class="title-container-free-list">
     <i class="fas fa-plus-circle"></i>
      Cadastro
    </h2>
    <vue-form ref="formgroupproduct" :state="formGroupproduct" @submit.prevent="submit">
     <div class="columns is-desktop">
      <div class="column">
       <div class="field">
        <validate tag="label">
         <span class="is-pulled-left"><label class="label labels">Grupo de Produto</label></span>
         <br>
         <div class="control has-icons-left has-icons-right">
          <input class="input" type="text" v-model="groupprod.groupproduct" required maxlength="255" minlength="2" name="groupproduct" placeholder="ABC" autofocus="">
          <span class="required-input">* Campo Obrigatório</span>
          <span class="icon is-small is-left">
           <i class="fas fa-tags fas-icon"></i>
          </span>
          <div v-if="groupprod.groupproduct && groupprod.groupproduct.length > 0">
           <span class="icon is-small is-right"><i class="fas fa-check"></i></span>
          </div>
          <field-messages name="groupproduct" show="$submitted || $submitted && $touched" class="notice">
            <div class="help_notice_sucess">
             <span class="icon is-small is-right"><i class="fas fa-check"></i></span>
            </div>
            <div slot="required" class="tooltip tooltip_bottom">
             <span class="glyphicon glyphicon-exclamation-sign"></span>
             <i class="fas fa-exclamation spagin-5"></i> Preencha este campo.
            </div>
            <div slot="maxlength" class="tooltip tooltip_bottom">
             <span class="glyphicon glyphicon-exclamation-sign"></span>
             <i class="fas fa-exclamation spagin-5"></i> O grupo deve conter no máximo 255 caracteres.
            </div>
            <div slot="minlength" class="tooltip tooltip_bottom">
             <span class="glyphicon glyphicon-exclamation-sign"></span>
             <i class="fas fa-exclamation spagin-5"></i> O grupo deve conter no minimo 2 caracteres.
            </div>
          </field-messages>
         </div>
        </validate>
       </div>
      </div>
     </div>
     <div class="field">
      <button type="submit" class="is-pulled-right button buttons is-link is-pulled-right">Salvar</button>
      <button v-on:click="reset" type="reset" class="is-pulled-right button buttons is-dark bt-reset is-pulled-right">Limpar</button>
      <br><br>
     </div>
    </vue-form>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Formgroupproduct',

  props: ['group'],

  data () {
    return {
      formGroupproduct: {},
      groupprod: {
        id: '',
        groupproduct: ''
      },
      text: ''
    }
  },

  watch: {
    group: function (val) {
      this.groupprod.id = this.group.id
      this.groupprod.groupproduct = this.group.groupproduct
    }
  },

  computed: {
    ...mapState(['messages']),

    editing: function () {
      return this.group.id > 0
    },

    valid: function () {
      this.resetMessages()
      if (this.formGroupproduct.$valid !== true) {
        return false
      }

      return true
    }
  },

  methods: {
    ...mapActions(['setFetching', 'resetMessages', 'setMessage']),

    submit: function () {
      if (this.valid) {
        if (this.editing) {
          this.update()
        } else {
          this.save()
        }
      }
    },

    save: function () {
      this.$http.post('api/products/groupproduct/addgroupproduct', this.groupprod).then((res) => {
        this.$bus.$emit('groupproduct.created')

        this.setFetching({ fetching: false })

        this.setMessage({type: 'success', message: 'Salvo com sucesso!'})
        this.text = this.messages.success
        this.$bus.$emit('alertSuccess', '<i class="fas fa-cloud"></i> Grupo salvo com sucesso!', this.text)

        this.reset()
      }).catch(() => {
        this.text = this.messages.warning.errors.groupproduct[0] + '.'
        this.$bus.$emit('alertWarning', '<i class="fas fa-clone"></i> Dados duplicados.', this.text)
      })
    },

    update: function () {
      this.$http.put(`/api/products/groupproduct/upgroupproduct/${this.group.id}`, this.groupprod).then(({ data }) => {
        this.$bus.$emit('groupproduct.updated')
        this.setFetching({ fetching: false })
        this.setMessage({ type: 'upsuccess', message: 'Grupo editado com sucesso!' })

        this.text = this.messages.upsuccess
        this.$bus.$emit('alertSuccess', '<i class="fas fa-edit"></i> Grupo Alterado.', this.text)
        this.reset()
      }).catch((res) => {
        this.text = this.messages.warning.errors.groupproduct[0] + '.'
        this.$bus.$emit('alertWarning', '<i class="fas fa-clone"></i> Este grupo já existe, atualização não possível.', this.text)
      })
    },

    reset () {
      this.groupprod.id = 0
      this.groupprod.groupproduct = null
      this.$bus.$emit('resetgroup')
      this.$refs.formgroupproduct.reset()
    }
  }
}
</script>
