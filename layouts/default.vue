<template>
  <div id="app">
    <v-app>
      <appHeader/>
      <nuxt/>
      <appFooter/>
    </v-app>
  </div>
</template>

<script>
    import appHeader from '@/components/appHeader.vue'
    import appFooter from '@/components/appFooter.vue'
    export default {
        components: {
            appFooter,
            appHeader
        },
    }
</script>

<style>
  body {
    margin: 0;
    padding: 0;
  }
</style>
