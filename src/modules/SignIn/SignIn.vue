<style lang="scss" scoped>
    .SignIn {

    }
</style>

<template lang="pug">
    header.SignIn: .columns
        .column
            .column User
            input.input(type="text" hint="user" name="user" @keyup.enter="nextFromName")
        .column
            .column Password
            input.input(type="text" name="Password" @keyup.enter="logIn")
        .column: button.SignIn(type="submit" @click="logIn") Log In
</template>

<script>
export default {
  name: 'SignIn',
  data () {
    return {
      msg: 'Logime sisse, eksole'
    }
  },
  components: {
  }
}
</script>
