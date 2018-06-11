<style lang="scss" scoped>
    .Personal {
        .table {
            border: 1px solid black;
        }
        .td {
            border: 1px solid black;
        }
        .tr {
            border: 1px solid black;
        }
    }
</style>

<template lang="pug">
  .Personal
    Names
    EsimenePool.is-pulled-left
    TeinePool.is-pulled-right
</template>

<script>
import EsimenePool from './components/EsimenePool.vue'
import TeinePool from './components/TeinePool.vue'
import Names from '../Predictions/components/Names.vue'

export default {
  name: 'Personal',
  props: {
    person: String
  },
  components: {
    EsimenePool,
    TeinePool,
    Names
  }
}
</script>
