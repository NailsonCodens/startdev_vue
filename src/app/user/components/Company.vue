<template>
 <div>
  <ab-header :icon="icon"></ab-header>
  <div class="box-pages user">
   <div class="box-form">
    <div class="columns is-desktop">
     <div class="column column-divisor column-large">
       <div class="box-w-divisor">
        <h2 class="title-container-free"><i class="fas fa-briefcase"></i> Dados da Empresa</h2>
        <vue-form :state="formCompany" @submit.prevent="submit">
          <div class="columns is-desktop">
           <div class="column is-one-third">
            <div class="field">
              <validate tag="label">
                <span class="is-pulled-left"><label class="label labels">CNPJ</label></span>
                <br>
                <div class="control has-icons-left has-icons-right">
                  <input class="input" type="text" v-model="company.cnpj" required name="cnpj" placeholder="Ex: 00.000.000/0000-00" autofocus="">
                  <span class="required-input">* Campo Obrigatório</span>
                  <span class="icon is-small is-left">
                   <i class="fas fa-briefcase fas-icon"></i>
                  </span>
                  <div v-if="company.cnpj.length > 3">
                   <span class="icon is-small is-right"><i class="fas fa-check"></i></span>
                  </div>
                  <field-messages name="cnpj" show="$submitted && $touched" class="notice">
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
                <span class="is-pulled-left"><label class="label labels">Razão Social</label></span>
                <br>
                <div class="control has-icons-left has-icons-right">
                  <input class="input" type="text" v-model="company.reason" required name="reason" placeholder="" autofocus="">
                  <span class="required-input">* Campo Obrigatório</span>
                  <span class="icon is-small is-left">
                   <i class="fas fa-user fas-icon"></i>
                  </span>
                  <div v-if="company.reason.length > 3">
                   <span class="icon is-small is-right"><i class="fas fa-check"></i></span>
                  </div>
                  <field-messages name="reason" show="$submitted && $touched" class="notice">
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
                <span class="is-pulled-left"><label class="label labels">Nome da Empresa</label></span>
                <br>
                <div class="control has-icons-left has-icons-right">
                  <input class="input" type="text" v-model="company.namefantasy" required name="namefantasy" placeholder="" autofocus="">
                  <span class="required-input">* Campo Obrigatório</span>
                  <span class="icon is-small is-left">
                   <i class="fas fa-user fas-icon"></i>
                  </span>
                  <div v-if="company.namefantasy.length > 3">
                   <span class="icon is-small is-right"><i class="fas fa-check"></i></span>
                  </div>
                  <field-messages name="namefantasy" show="$submitted && $touched" class="notice">
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
                <span class="is-pulled-left"><label class="label labels">E-mail</label></span>
                <br>
                <div class="control has-icons-left has-icons-right">
                  <input class="input" type="text" v-model="company.email" required name="email" placeholder="Ex: email@email.com.br" autofocus="">
                  <span class="required-input">* Campo Obrigatório</span>
                  <span class="icon is-small is-left">
                   <i class="fas fa-envelope fas-icon"></i>
                  </span>
                  <div v-if="company.email.length > 3">
                   <span class="icon is-small is-right"><i class="fas fa-check"></i></span>
                  </div>
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
           <div class="column">
            <div class="field">
              <validate tag="label">
                <span class="is-pulled-left"><label class="label labels">Telefone</label></span>
                <br>
                <div class="control has-icons-left has-icons-right">
                  <input class="input" type="text" v-model="company.phone1" required name="phone1" placeholder="Ex: (00) 00000-0000" autofocus="">
                  <span class="required-input">* Campo Obrigatório</span>
                  <span class="icon is-small is-left">
                   <i class="fas fa-phone fas-icon"></i>
                  </span>
                  <div v-if="company.phone1.length > 3">
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
                  <input class="input" type="text" v-model="company.phone2" required name="phone2" placeholder="Ex: (00) 00000-0000" autofocus="">
                  <span class="icon is-small is-left">
                   <i class="fas fa-mobile-alt fas-icon"></i>
                  </span>
                  <div v-if="company.phone2.length > 3">
                   <span class="icon is-small is-right"><i class="fas fa-check"></i></span>
                  </div>
                  <field-messages name="phone2" show="$submitted && $touched" class="notice">
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
           <div class="column is-one-quarter">
            <div class="field">
              <validate tag="label">
                <span class="is-pulled-left"><label class="label labels">Cep</label></span>
                <br>
                <div class="control has-icons-left has-icons-right">
                  <input class="input" type="text" v-model="company.cep" required name="cep" placeholder="Ex: 00-000.000" autofocus="">
                  <span class="required-input">* Campo Obrigatório</span>
                  <span class="icon is-small is-left">
                   <i class="fas fa-globe fas-icon"></i>
                  </span>
                  <div v-if="company.cep.length > 3">
                   <span class="icon is-small is-right"><i class="fas fa-check"></i></span>
                  </div>
                  <field-messages name="cep" show="$submitted && $touched" class="notice">
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
                <span class="is-pulled-left"><label class="label labels">Endereço</label></span>
                <br>
                <div class="control has-icons-left has-icons-right">
                  <input class="input" type="text" v-model="company.address" required name="address" placeholder="" autofocus="">
                  <span class="required-input">* Campo Obrigatório</span>
                  <span class="icon is-small is-left">
                   <i class="fas fa-address-book fas-icon"></i>
                  </span>
                  <div v-if="company.address.length > 3">
                   <span class="icon is-small is-right"><i class="fas fa-check"></i></span>
                  </div>
                  <field-messages name="address" show="$submitted && $touched" class="notice">
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
           <div class="column is-one-fifth">
            <div class="field">
              <validate tag="label">
                <span class="is-pulled-left"><label class="label labels">Número</label></span>
                <br>
                <div class="control has-icons-left has-icons-right">
                  <input class="input" type="text" v-model="company.number" required name="number" placeholder="" autofocus="">
                  <span class="icon is-small is-left">
                   <i class="fas fa-sort-numeric-up fas-icon"></i>
                  </span>
                  <div v-if="company.number.length > 3">
                   <span class="icon is-small is-right"><i class="fas fa-check"></i></span>
                  </div>
                  <field-messages name="number" show="$submitted && $touched" class="notice">
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
                <span class="is-pulled-left"><label class="label labels">Cidade</label></span>
                <br>
                <div class="control has-icons-left has-icons-right">
                  <input class="input" type="text" v-model="company.city" required name="city" placeholder="" autofocus="">
                  <span class="icon is-small is-left">
                   <i class="fas fa-user fas-icon"></i>
                  </span>
                  <div v-if="company.city.length > 3">
                   <span class="icon is-small is-right"><i class="fas fa-check"></i></span>
                  </div>
                  <field-messages name="city" show="$submitted && $touched" class="notice">
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
                <span class="is-pulled-left"><label class="label labels">Estado</label></span>
                <br>
                <div class="control has-icons-left has-icons-right">
                  <input class="input" type="text" v-model="company.district" required name="district" placeholder="" autofocus="">
                  <span class="icon is-small is-left">
                   <i class="fas fa-user fas-icon"></i>
                  </span>
                  <div v-if="company.district.length > 3">
                   <span class="icon is-small is-right"><i class="fas fa-check"></i></span>
                  </div>
                  <field-messages name="district" show="$submitted && $touched" class="notice">
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
            <button type="submit" class="button button button-login is-link is-pulled-right">Alterar</button>
          </div>
          <br>
        </vue-form>
       </div>
     </div>
     <div class="column is-one-quarter column-divisor column-small has-text-centered">
      <img src="https://bulma.io/images/placeholders/128x128.png" class="logo-company">
      <p class="name-company">Name Company</p>
     </div>
    </div>
   </div>
  </div>
 </div>
</template>

<script>
export default {
  name: 'Company',
  data () {
    return {
      icon: 'fas fa-building',
      formCompany: {},
      company: {
        cnpj: '',
        reason: '',
        namefantasy: '',
        phone1: '',
        phone2: '',
        email: '',
        cep: '',
        address: '',
        number: '',
        city: '',
        district: ''
      }
    }
  },

  methods: {
  },

  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo-company{
  margin-top:30px;
-webkit-border-radius: 100px;
-moz-border-radius: 100px;
border-radius: 100px;
}

.name-company{
  font-size:17px;
  font-family: 'Open Sans', Arial, sans-serif !important;
  color:#4a4a4a;
}
</style>
