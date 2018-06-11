<style lang="scss" scoped>
    .Rules {
        margin-top: 50px;
        &__text {
            font-size: 16px;
            margin-top: 15px;
        }
    }
</style>

<template lang="pug">
  .Rules
    div.Rules Punktisüsteem:
    div.Rules__text 5p – täpselt õige mängu tulemus (näide: ennustatud 4:2, mängu tulemus 4:2)
    div.Rules__text 3p – õige võitja ja väravatevahe (näide: ennustatud 5:3, mängu tulemus 4:2)
    div.Rules__text 3p – õige võitja ja ühe meeskonna väravate arv (näide: ennustatud 4:3, mängu tulemus 4:2)
    div.Rules__text 3p – viigi ära arvamine (näide: ennustatud 3:3, mängu tulemus 2:2)
    div.Rules__text 2p – õige võitja (näide: ennustatud 5:4, mängu tulemus 4:2)
    div.Rules__text 1p – õige vaid ühe meeskonna väravate arv (näide: ennustatud 1:2, mängu tulemus 4:2)
    div.Rules__text 1p – õige vaid ühe meeskonna väravate arv (näide: ennustatud 1:2, mängu tulemus 4:2)
    div.Rules__text Lisaks 5 lisapunkti, kui ennustuse esimeses pooles on täpselt arvatud tiitlivõitja.
</template>

<script>
export default {
  name: 'Rules'
}
</script>
