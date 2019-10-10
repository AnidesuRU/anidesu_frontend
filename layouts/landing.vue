<template>
  <div id="app">
    <v-app>
      <landingHeader/>
      <nuxt/>
      <appFooter/>
    </v-app>
  </div>
</template>

<script>
    import landingHeader from '@/components/landingHeader.vue'
    import appFooter from '@/components/appFooter.vue'
    export default {
        components: {
            landingHeader,
            appFooter
        },
    }
</script>
