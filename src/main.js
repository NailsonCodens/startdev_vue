// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import { sync } from 'vuex-router-sync'

import Vue from 'vue'

import App from './App'

import VueForm from 'vue-form'

import VueTheMask from 'vue-the-mask'

import ElementUI from 'element-ui'

import Multiselect from 'vue-multiselect'

import Notifications from 'vue-notification'

import VueCurrencyFilter from 'vue-currency-filter'

import money from 'v-money'

import locale from 'element-ui/lib/locale/lang/pt'

import router from './router'

import store from './store'

import httpAxios from './support/http'

import eventbus from './support/events/eventbus'

import 'element-ui/lib/theme-chalk/index.css'
import '../static/fontawesome-free-5.0.8/web-fonts-with-css/css/fontawesome-all.css'
import 'bulma/css/bulma.css'
import './assets/css/app.css'
import 'vue-multiselect/dist/vue-multiselect.min.css'

Vue.component('ab-menu-h', () => import('./components/MenuHorizontal'))
Vue.component('ab-menu-v', () => import('./components/MenuVertical'))
Vue.component('ab-header', () => import('./components/Header'))
Vue.component('ab-breadcrumb', () => import('./components/Breadcrumb'))

Vue.component('multiselect', Multiselect)

Vue.config.productionTip = false

Vue.use(VueForm)

Vue.use(VueTheMask)

Vue.use(VueCurrencyFilter, { symbol: 'R$', thousandsSeparator: '.', fractionCount: 2, fractionSeparator: ',', symbolPosition: 'front', symbolSpacing: true })

Vue.use(money, {precision: 4})

Vue.use(ElementUI, {locale})

Vue.use(Notifications)

Vue.use(httpAxios, { store, router })

Vue.use(eventbus)

Vue.directive('click-out', {
  bind: function (element, binding, node) {
    // verifica se o parametro da diretiva é diferente de um objeto do tipo function.
    if (typeof binding.value !== 'function') {
      var component = node.context.name
      var text = '[Vue-click-out:] a expressão informada deve ser uma função'
      if (component) {
        text += ' Component: ' + component
      }
      console.warn(text)
    }
    // cria o evento e atribui ao elemento
    var bubble = binding.modifiers.bubble
    var handler = function (evt) {
      if (bubble || (!element.contains(evt.target) && element !== evt.target)) {
        binding.value(evt)
      }
    }
    element.__vueClickOutside__ = handler
    // adiciona o evento que trata os cliques fora do component
    document.addEventListener('click', handler)
  },

  unbind: function (element) {
    // remove o evento que trata cliques fora do componente
    document.removeEventListener('click', element.__vueClickOutside__)
    element.__vueClickOutside__ = null
  }
})

sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>',
  data: {
    teste: 'sadasd'
  }
})
