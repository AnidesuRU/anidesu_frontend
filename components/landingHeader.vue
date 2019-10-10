<template>
  <header class="landing-header">
    <v-row no-gutters class="header-bar" >
      <v-col md="4" sm="6" class="landing-logo">
        <a href="/anime" class="logo-link ma-2">
          <img src="/landing-logo.png" alt="anidesu logo"/>
        </a>
      </v-col>
      <v-col md="4" sm="6" overflow="hidden">
        <v-app-bar-nav-icon color="white" large class="nav-mobile-menu" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <nav type="flex" class="nav landing-nav">
          <v-btn to="/anime" small nuxt-link outlined color="white">Аниме</v-btn>
          <v-btn small outlined color="white">Регистрация </v-btn>
          <v-btn small outlined color="white">Войти</v-btn>
        </nav>
      </v-col>
    </v-row>
  </header>
</template>

<style>
  .header-bar {
    height: 85px;
    align-items: center;
    justify-content: center;
  }
  .landing-header {
    padding-top: 60px;
  }
  .landing-header .landing-logo {
    z-index: 999;
  }

  .landing-header .landing-logo img {
    width: 250px;
  }
  .landing-nav button{
    margin-left: 15px;
  }
  .landing-nav {
    z-index: 999
  }

  @media (max-width: 750px) {
    .landing-nav {
      display: none;
    }
    .nav-mobile-menu {
      display: block;
    }
  }
  @media (min-width: 750px) {
    .nav-mobile-menu {
      display: none;
    }
    .hidden {
      display: none;
    }
  }
</style>

<script>
    export default {
        data: () => ({
            drawer: false,
            group: null,
        }),

        watch: {
            group () {
                this.drawer = false
            },
        },
    }
</script>
