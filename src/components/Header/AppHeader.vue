
<style lang="scss" scoped>
    .AppHeader {
        margin:0;
        padding: 0;

        &__links {
            margin-right: 25px;
            margin-left: 25px;
            font-size: 20px;
        }
        &__logo {
            width: 100%;
            margin-top: -45px;
        }
        &__next {
            background-color: antiquewhite;
            heigh: 60px;
        }
    }
</style>

<template lang="pug">
    .AppHeader
        .columns
            .column
                img.AppHeader__logo(src="@/assets/Banner_en.jpg")
            .navbar
              router-link.AppHeader__links(to="/home") Avaleht
              router-link.AppHeader__links(to="/make_preds") Ennusta!
              router-link.AppHeader__links(to="/my_preds") Minu ennustused
              router-link.AppHeader__links(to="/preds") Kõik ennustused
              router-link.AppHeader__links(to="/rules") Reeglid
            .column
              span.AppHeader__next Next game:
</template>

<script>
export default {
  name: 'AppHeader',
  methods: {
    onItemClick (item) {
      this.$router.push(`/${item}/`)
    }
  }
}
</script>
