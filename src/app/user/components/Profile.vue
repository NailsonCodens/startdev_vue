<template>
 <div>
  <ab-header :icon="icon"></ab-header>
  <div class="box-pages user">
   <div class="box-form">
    <div class="columns is-desktop">
     <div class="column column-divisor column-large-n">
       <div class="box-w-divisor">
        <h2 class="title-container-free"><i class="fas fa-address-card"></i> Meus dados</h2>
        <vue-form :state="formProfile" @submit.prevent="submit">
         <div class="columns is-desktop">
          <div class="column">
           <div class="field">
            <validate tag="label">
             <span class="is-pulled-left"><label class="label labels">Nome</label></span>
             <br>
             <div class="control has-icons-left has-icons-right">
              <input class="input" type="text" v-model="profile.name" required name="name" placeholder="Ex: João" autofocus="">
              <span class="required-input">* Campo Obrigatório</span>
              <span class="icon is-small is-left">
               <i class="fas fa-user fas-icon"></i>
              </span>
              <div v-if="profile.name.length > 3">
               <span class="icon is-small is-right"><i class="fas fa-check"></i></span>
              </div>
              <field-messages name="name" show="$submitted && $touched" class="notice">
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
             <span class="is-pulled-left"><label class="label labels">Celular</label></span>
             <br>
             <div class="control has-icons-left has-icons-right">
              <input class="input" type="text" v-model="profile.phone1" v-mask="'(##) ####-####', '(##) #####-####'" required name="phone1" placeholder="Ex: (00) 00000-0000" autofocus="">
              <span class="required-input">* Campo Obrigatório</span>
              <span class="icon is-small is-left">
               <i class="fas fa-phone fas-icon"></i>
              </span>
              <div v-if="profile.phone1.length >= 14">
               <span class="icon is-small is-right"><i class="fas fa-check"></i></span>
              </div>
              <field-messages name="phone1" show="$submitted && $touched" class="notice">
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
             <span class="is-pulled-left"><label class="label labels">Celular</label></span>
             <br>
             <div class="control has-icons-left has-icons-right">
              <input class="input" type="text" v-model="profile.phone2" v-mask="'(##) ####-####', '(##) #####-####'"  required name="phone2" placeholder="Ex: (00) 00000-0000" autofocus="">
              <span class="icon is-small is-left">
               <i class="fas fa-phone fas-icon"></i>
              </span>
              <div v-if="profile.phone2.length >= 14">
               <span class="icon is-small is-right"><i class="fas fa-check"></i></span>
              </div>
              <field-messages name="phone2" show="$submitted && $touched" class="notice">
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
             <span class="is-pulled-left"><label class="label labels">Telefone</label></span>
             <br>
             <div class="control has-icons-left has-icons-right">
              <input class="input" type="text" v-model="profile.phone3" v-mask="'(##) ####-####', '(##) #####-####'" required name="phone3" placeholder="Ex: (00) 00000-0000" autofocus="">
              <span class="icon is-small is-left">
               <i class="fas fa-mobile-alt fas-icon"></i>
              </span>
              <div v-if="profile.phone3.length >= 14">
               <span class="icon is-small is-right"><i class="fas fa-check"></i></span>
              </div>
              <field-messages name="phone3" show="$submitted && $touched" class="notice">
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
              <span class="is-pulled-left"><label class="label labels">E-mail</label></span>
              <br>
              <div class="control has-icons-left has-icons-right">
                <input class="input" type="text" v-model="profile.email" required name="email" placeholder="Ex: email@email.com.br" autofocus="">
                <span class="required-input">* Campo Obrigatório</span>
                <span class="icon is-small is-left">
                 <i class="fas fa-envelope fas-icon"></i>
                </span>
                <field-messages name="email" show="$submitted && $touched" class="notice">
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
              <span class="is-pulled-left"><label class="label labels">Senha</label></span>
              <br>
              <div class="control has-icons-left has-icons-right">
                <input class="input" type="password" v-model="profile.password" required name="password" placeholder="Ex: email@email.com.br" autofocus="">
                <span class="required-input">* Campo Obrigatório</span>
                <span class="icon is-small is-left">
                 <i class="fas fa-key fas-icon"></i>
                </span>
                <div v-if="profile.password.length > 0">
                 <span class="icon is-small is-right"><i class="fas fa-check"></i></span>
                </div>
                <field-messages name="password" show="$submitted && $touched" class="notice">
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
          <button type="submit" class="button button button-login is-link is-pulled-right">Alterar</button>
          <br><br>
         </div>
        </vue-form>
       </div>
     </div>
    </div>
   </div>
  </div>
 </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Profile',
  data () {
    return {
      icon: 'fas fa-user-circle',
      formProfile: {},
      profile: {
        name: '',
        email: '',
        password: '',
        phone1: '',
        phone2: '',
        phone3: ''
      }
    }
  },

  methods: {
    ...mapActions(['setProfiles', 'setFetching']),

    fetch: function () {
      this.setFetching({ fetching: true })

      this.$http.get('api/uslog/me').then(({ data }) => {
        this.setProfiles({
          list: data
        })
      })

      this.setFetching({ fetching: false })
    }
  },

  computed: {
    ...mapState({
      fetching: state => state.fetching,
      list: state => state.Profile.list
    }),

    productValue () {
      return this.list
    }
  },

  mounted () {
    this.fetch()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
