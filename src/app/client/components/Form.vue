<template>
  <div class="columns is-desktop is-list">
   <div class="column column-divisor column-large-n column-list">
    <div class="form-client">
      <h2 class="title-container-free-list">
       <i class="fas fa-pencil-alt" v-show="$route.name === 'client.edit'"></i>
       <i class="fas fa-plus-circle" v-show="$route.name === 'client.create'"></i>
       {{ this.$route.meta.subtitle }}
      </h2>
      <vue-form ref="formclient" :state="formClient" @submit.prevent="submit">
       <div class="columns is-desktop">
        <div class="column is-one-fifth">
         <div class="field">
          <validate tag="label">
           <span class="is-pulled-left"><label class="label labels">Código</label></span>
           <br>
           <div class="control has-icons-left has-icons-right">
            <input class="input" type="text" v-model="clientform.cod" required name="cod" placeholder="Ex: 10000">
            <span class="required-input">* Campo Obrigatório</span>
            <span class="icon is-small is-left">
             <i class="fas fa-key fas-icon"></i>
            </span>
            <div v-if="clientform.cod.length > 0">
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
        <div class="column is-half">
         <div class="field">
          <validate tag="label">
           <span class="is-pulled-left"><label class="label labels">Cliente</label></span>
           <br>
           <div class="control has-icons-left has-icons-right">
            <input class="input" type="text" v-model="clientform.client" required name="client" placeholder="Ex: CODENS S.I LTDA">
            <span class="required-input">* Campo Obrigatório</span>
            <span class="icon is-small is-left">
             <i class="fas fa-user fas-icon"></i>
            </span>
            <div v-if="clientform.client.length > 0">
             <span class="icon is-small is-right"><i class="fas fa-check"></i></span>
            </div>
            <field-messages name="client" show="$submitted || $submitted && $touched" class="notice">
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
           <span class="is-pulled-left"><label class="label labels">Referência</label></span>
           <br>
           <div class="control has-icons-left has-icons-right">
            <input class="input" type="text" v-model="clientform.reference" name="reference" placeholder="Ex: CODENS">
            <span class="icon is-small is-left">
             <i class="fas fa-user fas-icon"></i>
            </span>
            <div v-if="clientform.reference.length > 0">
             <span class="icon is-small is-right"><i class="fas fa-check"></i></span>
            </div>
           </div>
          </validate>
         </div>
        </div>
       </div>
       <div class="columns is-desktop">
         <div class="column">
           <div class="field">
            <validate tag="label">
             <span class="is-pulled-left"><label class="label labels">CNPJ/CPF</label></span>
             <br>
             <div class="control has-icons-left has-icons-right">
              <input class="input" type="text" v-model="clientform.cnpjcpf" required name="cnpjcpf" placeholder="00.000.000/0000-00">
              <span class="required-input">* Campo Obrigatório</span>
              <span class="icon is-small is-left">
               <i class="fas fa-briefcase fas-icon"></i>
              </span>
              <div v-if="clientform.cnpjcpf.length > 0">
               <span class="icon is-small is-right"><i class="fas fa-check"></i></span>
              </div>
              <field-messages name="cnpjcpf" show="$submitted || $submitted && $touched" class="notice">
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
             <span class="is-pulled-left"><label class="label labels">Grupo</label></span>
             <br>
             <div class="control has-icons-left has-icons-right">
              <multiselect v-model="clientform.group" name="group" required track-by="group" label="group" placeholder="Selecione" :options="Groupclient" :searchable="true" :allow-empty="false" selectedLabel="Selecionado" deselectLabel="Pessione 'Enter' para remover" selectLabel="Pressione 'Enter' para adicionar">
                <template slot="singleLabel" slot-scope="{ option }"><strong>{{ option.group }}</strong></template>
                <span slot="noResult"><i class="fas fa-times-circle"></i> Nenhum resultado encontrado. Considere alterar a pesquisa.</span>
              </multiselect>
              <span class="required-input">* Campo Obrigatório</span>
              <div v-if="clientform.group.length > 0">
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
         <div class="column">
           <div class="field">
            <validate tag="label">
             <span class="is-pulled-left"><label class="label labels">Ramo</label></span>
             <br>
             <div class="control has-icons-left has-icons-right">
              <multiselect v-model="clientform.branch" name="branch" track-by="branch" label="branch" placeholder="Selecione" :options="Groupbranch" :searchable="true" :allow-empty="false" selectedLabel="Selecionado" deselectLabel="Pessione 'Enter' para remover" selectLabel="Pressione 'Enter' para adicionar">
                <template slot="singleLabel" slot-scope="{ option }"><strong>{{ option.branch }}</strong></template>
                <span slot="noResult"><i class="fas fa-times-circle"></i> Nenhum resultado encontrado. Considere alterar a pesquisa.</span>
              </multiselect>
              <div v-if="clientform.branch.length > 0">
               <span class="icon is-small is-right"><i class="fas fa-check"></i></span>
              </div>
             </div>
            </validate>
           </div>
         </div>
         <div class="column">
           <div class="field">
            <validate tag="label">
             <span class="is-pulled-left"><label class="label labels">Rota</label></span>
             <br>
             <div class="control has-icons-left has-icons-right">
              <multiselect v-model="clientform.route" name="route" required track-by="route" label="route" placeholder="Selecione" :options="Groupbranch" :searchable="true" :allow-empty="false" selectedLabel="Selecionado" deselectLabel="Pessione 'Enter' para remover" selectLabel="Pressione 'Enter' para adicionar">
                <template slot="singleLabel" slot-scope="{ option }"><strong>{{ option.route }}</strong></template>
                <span slot="noResult"><i class="fas fa-times-circle"></i> Nenhum resultado encontrado. Considere alterar a pesquisa.</span>
              </multiselect>
              <span class="required-input">* Campo Obrigatório</span>
              <div v-if="clientform.route.length > 0">
               <span class="icon is-small is-right"><i class="fas fa-check"></i></span>
              </div>
              <field-messages name="route" show="$submitted || $submitted && $touched" class="notice">
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
             <span class="is-pulled-left"><label class="label labels">Inscrição Estadual</label></span>
             <br>
             <div class="control has-icons-left has-icons-right">
              <input class="input" type="text" v-model="clientform.ie" name="ie" placeholder="">
              <span class="icon is-small is-left">
               <i class="fas fa-file-alt fas-icon"></i>
              </span>
              <div v-if="clientform.ie.length > 0">
               <span class="icon is-small is-right"><i class="fas fa-check"></i></span>
              </div>
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
              <input class="input" type="text" v-model="clientform.phone1" name="phone1" placeholder="(41) 9 0000-0000">
              <span class="icon is-small is-left">
               <i class="fas fa-phone fas-icon"></i>
              </span>
              <div v-if="clientform.phone1.length > 0">
               <span class="icon is-small is-right"><i class="fas fa-check"></i></span>
              </div>
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
              <input class="input" type="text" v-model="clientform.phone2" name="phone2" placeholder="(41) 9 0000-0000">
              <span class="icon is-small is-left">
               <i class="fas fa-mobile-alt fas-icon"></i>
              </span>
              <div v-if="clientform.phone2.length > 0">
               <span class="icon is-small is-right"><i class="fas fa-check"></i></span>
              </div>
             </div>
            </validate>
           </div>
         </div>
         <div class="column">
           <div class="field">
            <validate tag="label">
             <span class="is-pulled-left"><label class="label labels">Endereço Eletrônico</label></span>
             <br>
             <div class="control has-icons-left has-icons-right">
              <input class="input" type="text" v-model="clientform.phone2" name="site" placeholder="Site, Facebook ou Instagran">
              <div v-if="clientform.site.length > 0">
               <span class="icon is-small is-right"><i class="fas fa-check"></i></span>
              </div>
             </div>
            </validate>
           </div>
         </div>
         <div class="column">
           <div class="field">
            <validate tag="label">
             <span class="is-pulled-left"><label class="label labels">E-mail</label></span>
             <br>
             <div class="control has-icons-left has-icons-right">
              <input class="input" type="text" v-model="clientform.email" name="email" placeholder="email@email.com.br">
              <span class="icon is-small is-left">
               <i class="fas fa-envelope fas-icon"></i>
              </span>
              <div v-if="clientform.email.length > 0">
               <span class="icon is-small is-right"><i class="fas fa-check"></i></span>
              </div>
             </div>
            </validate>
           </div>
         </div>
       </div>
       <div class="columns is-desktop">
         <div class="column">
           <div class="field">
            <validate tag="label">
             <span class="is-pulled-left"><label class="label labels">Cep</label></span>
             <br>
             <div class="control has-icons-left has-icons-right">
              <input class="input" type="text" v-model="clientform.cep" name="cep" placeholder="81-250.300">
              <span class="icon is-small is-left">
               <i class="fas fa-globe fas-icon"></i>
              </span>
              <span class="required-input">* Campo Obrigatório</span>
              <div v-if="clientform.cep.length > 0">
               <span class="icon is-small is-right"><i class="fas fa-check"></i></span>
              </div>
              <field-messages name="cep" show="$submitted || $submitted && $touched" class="notice">
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
              <input class="input" type="text" v-model="clientform.street" name="street" placeholder="">
              <span class="icon is-small is-left">
               <i class="fas fa-address-book fas-icon"></i>
              </span>
              <div v-if="clientform.street.length > 0">
               <span class="icon is-small is-right"><i class="fas fa-check"></i></span>
              </div>
             </div>
            </validate>
           </div>
         </div>
         <div class="column is-2">
           <div class="field">
            <validate tag="label">
             <span class="is-pulled-left"><label class="label labels">Número</label></span>
             <br>
             <div class="control has-icons-left has-icons-right">
              <input class="input" type="number" v-model="clientform.number" name="number" placeholder="">
              <span class="icon is-small is-left">
               <i class="fas fa-sort-numeric-up fas-icon"></i>
              </span>
              <div v-if="clientform.number.length || clientform.number.length > 0">
               <span class="icon is-small is-right"><i class="fas fa-check"></i></span>
              </div>
             </div>
            </validate>
           </div>
         </div>
         <div class="column">
           <div class="field">
            <validate tag="label">
             <span class="is-pulled-left"><label class="label labels">Complemento</label></span>
             <br>
             <div class="control has-icons-left has-icons-right">
              <input class="input" type="text" v-model="clientform.complements" name="complements" placeholder="">
              <div v-if="clientform.complements.length > 0">
               <span class="icon is-small is-right"><i class="fas fa-check"></i></span>
              </div>
             </div>
            </validate>
           </div>
         </div>
         <div class="column">
           <div class="field">
            <validate tag="label">
             <span class="is-pulled-left"><label class="label labels">Cidade</label></span>
             <br>
             <div class="control has-icons-left has-icons-right">
              <multiselect v-model="clientform.city" name="city" track-by="city" label="city" placeholder="Selecione" :options="Groupbranch" :searchable="true" :allow-empty="false" selectedLabel="Selecionado" deselectLabel="Pessione 'Enter' para remover" selectLabel="Pressione 'Enter' para adicionar">
                <template slot="singleLabel" slot-scope="{ option }"><strong>{{ option.city }}</strong></template>
                <span slot="noResult"><i class="fas fa-times-circle"></i> Nenhum resultado encontrado. Considere alterar a pesquisa.</span>
              </multiselect>
              <div v-if="clientform.city.length > 0">
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
             <span class="is-pulled-left"><label class="label labels">UF</label></span>
             <br>
             <div class="control has-icons-left has-icons-right">
              <multiselect v-model="clientform.uf" name="uf" track-by="uf" label="uf" placeholder="Selecione" :options="Groupbranch" :searchable="true" :allow-empty="false" selectedLabel="Selecionado" deselectLabel="Pessione 'Enter' para remover" selectLabel="Pressione 'Enter' para adicionar">
                <template slot="singleLabel" slot-scope="{ option }"><strong>{{ option.uf }}</strong></template>
                <span slot="noResult"><i class="fas fa-times-circle"></i> Nenhum resultado encontrado. Considere alterar a pesquisa.</span>
              </multiselect>
              <div v-if="clientform.uf.length > 0">
               <span class="icon is-small is-right"><i class="fas fa-check"></i></span>
              </div>
             </div>
            </validate>
           </div>
         </div>
         <div class="column">
           <div class="field">
            <validate tag="label">
             <span class="is-pulled-left"><label class="label labels">Representadas</label></span>
             <br>
             <div class="control has-icons-left has-icons-right">
              <multiselect v-model="clientform.idsrepresents" name="idsrepresents" track-by="idsrepresents" label="idsrepresents" placeholder="Selecione" :options="Groupbranch" :searchable="true" :allow-empty="false" selectedLabel="Selecionado" deselectLabel="Pessione 'Enter' para remover" selectLabel="Pressione 'Enter' para adicionar">
                <template slot="singleLabel" slot-scope="{ option }"><strong>{{ option.idsrepresents }}</strong></template>
                <span slot="noResult"><i class="fas fa-times-circle"></i> Nenhum resultado encontrado. Considere alterar a pesquisa.</span>
              </multiselect>
              <div v-if="clientform.idsrepresents || clientform.idsrepresents.length > 0">
               <span class="icon is-small is-right"><i class="fas fa-check"></i></span>
              </div>
             </div>
            </validate>
           </div>
         </div>
       </div>
      </vue-form>
    </div>
   </div>
  </div>
</template>

<script>
export default {
  name: 'Formproduct',
  data () {
    return {
      formClient: {},
      clientform: {
        cod: '',
        dateupdate: '',
        client: '',
        reference: '',
        cnpjcpf: '',
        group: '',
        branch: '',
        route: '',
        ie: '',
        phone1: '',
        phone2: '',
        cep: '',
        street: '',
        number: '',
        complements: '',
        neighborhood: '',
        city: '',
        uf: '',
        email: '',
        site: '',
        idsrepresents: ''
      }
    }
  }
}
</script>
