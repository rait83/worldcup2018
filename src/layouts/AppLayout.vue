<style lang="scss" scoped>
  .AppLayout {
  }
</style>

<template lang="pug">
  .AppLayout
    AppHeader
    router-view
</template>

<script>
import AppHeader from '../components/Header/AppHeader'

export default {
  name: 'AppLayout',

  components: {
    AppHeader
  }
}
</script>
