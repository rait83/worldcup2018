<style lang="scss" scoped>
    .Names {
        &__players {
            margin-right: 20px;
            margin-left: 15px;
        }
    }
</style>

<template lang="pug">
  .Names
    router-link.Names__players(to="Rait") Rait
    router-link.Names__players(to="Rauno") Rauno
    router-link.Names__players(to="Siim") Siim
    router-link.Names__players(to="Fred") Fred
    router-link.Names__players(to="Karel") Karel
    router-link.Names__players(to="Slezin") Slezin
    router-link.Names__players(to="Hanno") Hanno
    router-link.Names__players(to="Indrek") Indrek
    router-link.Names__players(to="Karl") Karl
    router-link.Names__players(to="Kristo") Kristo
    router-link.Names__players(to="Ragnar") Ragnar
</template>

<script>
export default {
  name: 'Names',
  props: {
    person: String
  }
}
</script>
