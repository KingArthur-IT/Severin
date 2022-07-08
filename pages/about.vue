<template>
  <div class="section">
    <Header pageLink="портфолио" langLink="итальянский" />
    <div class="container">
      <div class="firstWrapper">
        <img src="/Severin 1.png" class="aboutImg" />
      </div>
      <div class="secondWrapper">
        <div class="descrInner">
          <span class="title">Обо мне</span>
          <p class="descr top">
            Привет, меня зовут Галина, я живу и работаю фотографом в Тоскане, но
            и с большим удовольствием провожу фотосъемки по другим регионам
            Италии. Фотография- это не только моя работа, но и моя жизнь. Мне
            как-то подарили фотокамеру и тут случилась магия, с тех пор мы
            неразлучны.
          </p>
          <p class="descr">
            Я поклонник живых фотографий, эмоций и жизни в кадре. Мои съёмки
            проходят в формате непренуждённой прогулки, где вы наслаждайтесь
            моментом, а я переношу ваши эмоции на пленку. У вас на всю жизнь
            останется уникальная память о вашей поездке.
          </p>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>


<script>
export default {
  components: {},
};
</script>



<style lang="scss" scoped>
.section {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: $accent;
}

.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 100%;
  width: 1024px;
  max-width: 1024px;
  margin: 0 0 80px 0;
  padding: 0 12px 0 12px;
}

.aboutImg {
  width: 481px;
  height: 560px;
  object-fit: cover;
}

.secondWrapper {
  display: flex;
  align-items: center;
  max-width: 100%;
}

.firstWrapper {
  max-width: 100%;
}

.title {
  display: block;
  margin-bottom: 40px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 200;
  font-size: 32px;
  line-height: 160%;
  color: $black;
}

.descr {
  width: 471px;
  max-width: 100%;
  font-family: "Inter";
  font-weight: 300;
  font-size: 16px;
  line-height: 160%;
}

.top {
  margin: 0 0 20px 0;
}

@media (max-width: 1024px) {
  .aboutImg {
    width: 100%;
  }

  .container {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
  }

  .firstWrapper {
    margin: 0 0 40px 0;
    width: 100%;
    padding: 0 12px 0 12px;
  }

  .secondWrapper {
    width: 100%;
    justify-content: center;
    width: 100%;
    padding: 0 12px 0 12px;
  }

  .descrInner {
    width: 100%;
    padding: 0 12px 0 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .title {
    text-align: center;
  }

  .descr {
    text-align: center;
    max-width: 100%;
    width: 560px;
  }
}
</style>
