<template>
  <div class="login">
    <div class="section">
      <div class="container">
        <div class="columns ">
          <div class="column is-three-fifths is-offset-one-fifth">
            <div class="imageapp has-text-centered">
             <img src="static/images/codens.png" width="50%" class="logoapp">
            </div>
           <div class="columns">
            <div class="column box-login">
              <vue-form :state="formLogin" @submit.prevent="submit">
                <div class="field">
                 <validate tag="label">
                  <span class="is-pulled-left"><label class="label">Usuário</label></span>
                  <br>
                  <div class="control has-icons-left has-icons-right">
                    <input class="input" type="text" v-model="login.username" required name="username" placeholder="Usuário ou E-mail" autofocus="">
                    <span class="icon is-small is-left">
                      <i class="fas fa-user fas-icon"></i>
                    </span>
                    <div v-if="login.username.length > 0">
                     <span class="icon is-small is-right"><i class="fas fa-check"></i></span>
                    </div>
                    <field-messages name="username" show="$submitted && $touched" class="notice">
                      <div class="help_notice_sucess">
                        <span class="icon is-small is-right"><i class="fas fa-check"></i></span>
                      </div>
                      <div slot="required" class="tooltip tooltip_bottom">
                        <span class="glyphicon glyphicon-exclamation-sign"></span>
                          <i class="fas fa-exclamation spagin-5"></i> Preencha este campo.
                      </div>
                    </field-messages>
                    <!--<span class="icon is-small is-right">
                      <i class="fas fa-check"></i>
                    </span>-->
                  </div>
                  <!--<p class="help is-success">This username is available</p> is-success-->
                 </validate>
                </div>
                <div class="field field-password">
                 <validate tag="label">
                  <span class="is-pulled-left"><label class="label">Senha</label></span>
                  <br>
                  <div class="control has-icons-left has-icons-right">
                    <input class="input" type="password" placeholder="Password" name="password" v-model="login.password" required>
                    <span class="icon is-small is-left">
                      <i class="fas fa-key fas-icon"></i>
                    </span>
                    <div v-if="login.password.length > 0">
                     <span class="icon is-small is-right"><i class="fas fa-check"></i></span>
                    </div>
                    <field-messages name="password" show="$submitted && $touched || $submitted" class="notice">
                      <div class="help_notice_sucess">
                        <span class="icon is-small is-right"><i class="fas fa-check"></i></span>
                      </div>
                      <div slot="required" class="tooltip tooltip_bottom">
                        <span class="glyphicon glyphicon-exclamation-sign"></span>
                          <i class="fas fa-exclamation spagin-5"></i> Preencha este campo.
                      </div>
                    </field-messages>
                    <!--<span class="icon is-small is-right">
                      <i class="fas fa-check"></i>
                    </span>-->
                  </div>
                  <!--<p class="help is-success">This username is available</p> is-success-->
                  </validate>
                </div>
                <br>
                <div class="field">
                  <button type="submit" class="button button button-login is-link is-pulled-right">Entrar</button>
                </div>
                <br>
              </vue-form>
            </div>
            <div class="column box-text">
                <carousel :autoplay="true" :perPage="1" :autoplayTimeout="5000" :autoplayHoverPause="true" paginationActiveColor="#ffffff" paginationColor="#239fed" class="carrousel">
                  <slide class="slide">
                    <p class="title-box-text">
                      Você sabia?
                    </p><br>
                    <p class="text-box-text">
                      Uma das maiores dificuldades dos representantes e vendedores, é gerenciar seus dados.
                    </p>
                  </slide>
                  <slide class="slide">
                    <p class="title-box-text">
                      Um dado importante...
                    </p><br>
                    <p class="text-box-text">
                      Mais da metade dos representantes comerciais (68%) não utiliza nenhum software para acompanhar o seu trabalho.
                      <br><br>
                      <i>Revista "Venda-Mais"</i>.
                     </p>
                  </slide>
                  <slide class="slide">
                    <p class="title-box-text">
                      Nasceu o Abinf.
                    </p><br>
                    <p class="text-box-text">
                      E assim nasceu o Abinf, Ideal para representantes <br> comerciais e vendedores.
                      <br><br>
                      <i>"Codens"</i>
                     </p>
                  </slide>
                </carousel>
            </div>
           </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { Carousel, Slide } from 'vue-carousel'

export default {
  name: 'Login',
  data () {
    return {
      formLogin: {},
      login: {
        grant_type: 'password',
        client_id: '1',
        client_secret: 'bPWuRVs8W3qtU79wLxPrvggoL22er71Q2WUnWycC',
        username: '',
        password: '',
        scope: '*'
      }
    }
  },

  components: {
    Carousel,
    Slide
  },

  methods: {
    ...mapActions(['loginAuth', 'setMessage', 'setFetching']),

    submit: function () {
      if (this.formLogin.$valid) {
        this.setFetching({ fetching: true })
        // eslint-disable-next-line
        const { grant_type, client_id, client_secret, username, password, scope} = this.login

        this.loginAuth({ grant_type, client_id, client_secret, username, password, scope })
          .then(() => {
            this.setMessage({ type: 'invalid', message: [] })
            this.$router.push({ name: 'dashboard.view' })
            this.setFetching({ fetching: false })
          }).catch(() => {
            this.text = 'Usuário e senha inválidos.'
            this.$bus.$emit('alertInvalid', '<i class="fas fa-times-circle"></i> Credenciais invalidas', this.text)
          })
      }
    }
  }
}
</script>
