<template>
  <div class="">
    <notifications group="invalid" position="top right" />
    <notifications group="deletesuccess" position="top right"/>
    <notifications group="success" position="top right" />
    <notifications group="warning" position="top right" classes="warning"/>
  </div>
</template>
<script>

export default {
  name: 'Alerts',
  data () {
    return {
    }
  },

  methods: {
    alertSuccess: function (title, text) {
      this.$notify({
        group: 'success',
        title: title,
        text: text,
        type: 'success',
        duration: 3200
      })
    },

    alertInvalid: function (title, text) {
      this.$notify({
        group: 'invalid',
        title: title,
        text: text,
        type: 'error',
        duration: 3200
      })
    },

    alertWarning: function (title, text) {
      this.$notify({
        group: 'warning',
        title: title,
        text: text,
        type: 'warning',
        duration: 3200
      })
    },

    alertDeleting: function (text) {
      this.$notify({
        group: 'deletesuccess',
        title: '<i class="fas fa-trash"></i> Grupo Excluído.',
        text: text,
        type: 'success',
        duration: 3200
      })
    }
  },

  mounted () {
    this.$bus.$on('alertSuccess', (title, text) => this.alertSuccess(title, text))
    this.$bus.$on('alertInvalid', (title, text) => this.alertInvalid(title, text))
    this.$bus.$on('alertWarning', (title, text) => this.alertWarning(title, text))
    this.$bus.$on('alertDeleting', (text) => this.alertDeleting(text))
  }
}
</script>
