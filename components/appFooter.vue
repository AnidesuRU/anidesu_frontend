<template>
  <v-footer>
    <div class="footer-container">
      <div class="links">
        <section class="social">
          <v-btn to="#" nuxt-link text color="white" block>Vkontakte</v-btn>
          <v-btn to="#" nuxt-link text color="white" block>Twitter</v-btn>
          <v-btn to="#" nuxt-link text color="white" block>Telegram</v-btn>
        </section>
        <section class="site-info">
          <v-btn to="#" nuxt-link text color="white" block>Рекламодателям</v-btn>
          <v-btn to="#" nuxt-link text color="white" block>Terms and Conditions</v-btn>
          <v-btn to="#" nuxt-link text color="white" block>SiteMap</v-btn>
        </section>
      </div>
    </div>
  </v-footer>
</template>

<style>
  footer {
    background: #1b1d1d;
    color: #7a858f;
    font-family: Overpass,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
    font-weight: 600;
    min-height: 100px;
    padding: 50px 30px;
    text-align: left;
    width: 100%;
  }
  .footer-container {
   display: flex;
   margin: 0 auto;
   min-width: 320px;
   padding-left: 20px;
   padding-right: 20px;
   width: 100%;
 }
  @media (min-width: 1540px) {
    .footer-container {
      max-width: 1520px;
      padding-left: 100px;
      padding-right: 100px;
    }
  }
 .footer-container .links {
   font-size: 1rem;
   margin-left: auto;
   display: flex;
 }

 .links section {
   margin-left: 60px;
 }

  .links button {
    display: block;
    color: inherit;
    text-decoration: none;
    transition: .15s;
    outline: 0;
    padding: 5px;
    font-size: 0.5rem;
  }
</style>
