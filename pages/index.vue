<template>
  <div class="landing">
    <section class="content">
    </section>
    <section class="promo">
      <div class="container">
        <div class="feature">
          <div class="text col-lg-4 col-md-4 col-sm-12">
            <h3>Отслеживай любимые аниме</h3>
            <p>Обновляй свой аниме лист и делись им с друзьями</p>
          </div>
          <div class="demo col-lg-8 col-md-8 col-sm-12">
            <img src="https://i.imgur.com/lO6xTpy.png">
          </div>
        </div>
        <div class="feature">
          <div class="demo col-lg-8 col-md-8 col-sm-12">
            <img src="https://i.imgur.com/lO6xTpy.png">
          </div>
          <div class="text col-lg-4 col-md-4 col-sm-12">
            <h3>Оповещения о выходе новых серий</h3>
            <p>Подписывайся и получай уведомления в свое мессенджеры</p>
          </div>
        </div>
        <div class="feature">
          <div class="text col-lg-4 col-md-4 col-sm-12">
            <h3>Создай свой проект по переводу</h3>
            <p>Выкладывай свои переводы и гибко настраивай монетизацию</p>
          </div>
          <div class="demo col-lg-8 col-md-8 col-sm-12">
            <img src="https://i.imgur.com/lO6xTpy.png">
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
    export default {
        layout: 'landing',
    }
</script>

<style>
  .promo .container {
    padding-left: 10%;
    padding-right: 10%;
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
    color: #346181;
  }

  .text *{
    color: inherit;
    text-decoration: none;
    transition: .15s;
    outline: 0;
  }
  .feature {
    display: flex;
    margin-bottom: 100px;
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

  @media (max-width: 1040px) {
    .promo .container {
      display:flex;
      flex-flow: column;
    }
    .feature {
      display:flex;
      flex-flow: column;
    }
    .feature .demo {
      order: 1
    }
  }
</style>
