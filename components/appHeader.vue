<template>
  <v-app-bar>
    <v-row class="header">
      <v-col lg="2" md="3" sm="4" class="nav app-nav">
          <v-btn text nuxt-link to="/">
            <img src="/landing-logo.png" height="60px" alt="anidesu logo"/>
          </v-btn>
      </v-col>
      <v-col lg="10" md="9" sm="8" class="nav-links">
          <v-btn small nuxt-link text>Новости</v-btn>
          <v-btn small nuxt-link text>Аниме</v-btn>
          <v-btn small nuxt-link text>Манга</v-btn>
          <v-btn small nuxt-link text>Проекты</v-btn>
          <v-btn small nuxt-link text>Подборки</v-btn>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<style>
  .app-nav {
    height: 58px;
  }
  .nav .logo-link img {
    height: 60px;
  }

  .nav-links {
    border-left: 1px solid hsla(0,0%,93.3%,.16);
  }

  .nav-links button {
    color: inherit;
    text-decoration: none;
    transition: .15s;
    outline: 0;
  }
</style>
