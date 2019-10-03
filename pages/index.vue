<template>
  <div class="landing">
    <landing-header/>
    <section class="content">
      <a-row class="wrap">
        <a-col :span="20">
          <span class="signs">Аниме</span>
        </a-col>
      </a-row>
    </section>
    <section class="promo">
      <div class="container">
        <div class="feature">
          <div class="text">
            <h2>Отслеживай любимые аниме</h2>
            <p>Обновляй свой аниме лист и делись им с друзьями</p>
          </div>
          <div class="demo">
            <img src="https://i.imgur.com/lO6xTpy.png">
          </div>
        </div>
      </div>
    </section>
    <landing-footer/>
  </div>
</template>

<script>
    import LandingHeader from '@/components/landing-header.vue'
    import LandingFooter from '@/components/landing-footer.vue'
    export default {
        components: {
            LandingHeader,
            LandingFooter
        },
        data() {
            return {
                messages: ['лист', 'новости', 'сообщество'],
            }
        }
    }
</script>

<style>
  .promo .container {
    padding-left: 15%;
    padding-right: 15%;
    padding-top: 30px;
  }
  .feature .demo {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .feature .text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
  }

  .text *{
    color: white;
  }
  .feature {
    display: grid;
    grid-column-gap: 100px;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 200px;
  }
  .content {
    background: url('~static/background.jpg') center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    margin-top: -280px;
  }
  .content {
    min-height: 1200px;
  }
  .content .background {
    width:100%;
    margin-top: -250px;
    overflow: hidden;
  }

  .wrap {
    display: flex;
    justify-content: center;
    margin-left: 50px;
    margin-right: 50px;
    position: relative;
    z-index: 50;
  }

  .wrap .signs {
    color: white;
    font-size: 1.7rem;
    font-weight: 300;
    max-width: 1024px;
    width: 100%;
  }

  .promo {
    background: linear-gradient(180deg, #000000, #000000 700px);
    display: flex;
  }
</style>
