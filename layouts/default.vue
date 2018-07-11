<template lang="pug">
  #page
    HeaderVue
    nuxt
    FooterVue
</template>

<script>
import HeaderVue from '@/components/layout/header/header.vue';
import FooterVue from '@/components/layout/footer/footer.vue';

export default {
  components: {
    HeaderVue,
    FooterVue
  }
}

</script>

<style lang="scss">
  
</style>
