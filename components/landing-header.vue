<template>
  <header class="landing-header">
    <a-row type="flex" justify="center" class="header-bar" >
      <a-col :span="12" class="landing-logo">
        <a-button type="link">
          <img src="/landing-logo.png" alt="anidesu logo"/>
        </a-button>
      </a-col>
      <a-col  :span="8" style="align-items: center; display: flex">
        <nav type="flex" class="nav landing-nav">
          <nuxt-link to="/anime" class="ant-btn ant-btn-default ant-btn-background-ghost">Аниме</nuxt-link>
          <a-button type="default" ghost>Регистрация</a-button>
          <a-button type="default" ghost>Войти</a-button>
        </nav>
      </a-col>
    </a-row>
  </header>
</template>

<style>
  .header-bar {
    height: 75px;
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
</style>
