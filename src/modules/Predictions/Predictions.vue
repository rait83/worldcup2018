<style lang="scss" scoped>
    .Predictions {

    }
</style>

<template lang="pug">
  .Predictions
    Names
    span.Predictions Ennustused, kõik
</template>

<script>
import Names from './components/Names.vue'

export default {
  name: 'Predictions',
  components: {
    Names
  }
}
</script>
