<template>
  <div class="section">
    <div class="container">
      <div class="descrWrapper">
        <span class="title">severin</span>
        <span class="subTitle">fotoshooting in tutta Italia</span>
      </div>
      <div class="buttonsWrapper">
        <div class="button margin">русский</div>
        <div class="button">italiano</div>
      </div>
      <div class="numberWrapper">
        <span class="number">+39 (320) 030 33 14</span>
      </div>
      <div class="socialMediaWrapper">
        <div class="socialMedia bottomMargin">Instagram</div>
        <div class="socialMedia">Facebook</div>
      </div>
    </div>
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
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: $accent;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1024px;
  padding: 0 12px 0 12px;
}

.descrWrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 0 80px 0;
}

.title {
  font-family: "Inter";
  font-weight: 100;
  font-size: 200px;
  text-transform: uppercase;
  color: $black;
  margin: 0 0 20px 0;
}

.subTitle {
  font-family: "Inter";
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 100%;
  color: $black;
}

.buttonsWrapper {
  display: flex;
  flex-direction: row;
  margin: 0 0 80px 0;
}

.button {
  font-family: "Inter";
  font-weight: 300;
  font-size: 16px;
  line-height: 100%;
  color: $black;
  border: 1px solid $black;
  padding: 22px 72px;
  transition: 0.5s;
  text-align: center;
  text-transform: uppercase;
}

.button:hover {
  background-color: $black;
  color: $accent;
  transition: 0.5s;
  cursor: pointer;
}

.margin {
  margin: 0 44px 0 0;
}

.numberWrapper {
  margin: 0 0 120px 0;
}

.number {
  font-family: "Inter";
  font-weight: 200;
  font-size: 20px;
  line-height: 140%;
  color: $black;
  transition: 0.5s;
  cursor: pointer;
  position: relative;
}

.number::after{
  content: '';
  position: absolute;
  background-color: $black;
  height: 1px;
  width: 100%;
  bottom: 0px;
  right: 0px;

}

.socialMediaWrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.socialMedia {
  font-family: "Inter";
  font-style: normal;
  font-weight: 200;
  font-size: 20px;
  line-height: 100%;
  color: $black;
  cursor: pointer;
}

.bottomMargin {
  margin: 0 0 20px 0;
}

@media (max-width: 1024px) {
  .title {
    font-family: "Inter";
    font-weight: 100;
    font-size: 160px;
    text-transform: uppercase;
    color: $black;
    margin: 0 0 20px 0;
  }

  .descrWrapper {
    margin: 0 0 60px 0;
  }

  .buttonsWrapper {
    margin: 0 0 60px 0;
  }

  .numberWrapper {
    margin: 0 0 60px 0;
  }
}

@media (max-width: 768px) {
  .title {
    font-size: 80px;
  }

  .descrWrapper {
    margin: 0 0 52px 0;
  }

  .buttonsWrapper {
    margin: 0 0 52px 0;
    flex-direction: column;
  }

  .button {
    font-size: 12px;
    padding: 14px 51px;
  }

  .margin {
    margin-right: 0px;
    margin-bottom: 24px;
  }

  .numberWrapper {
    margin: 0 0 52px 0;
  }

  .subTitle {
  font-size: 14px;
}
}

@media (max-width: 428px) {
  .title {
    font-size: 72px;
  }

  .number {
  font-size: 16px;
}


  .socialMedia {
  font-size: 16px;
}

.subTitle {
  font-size: 14px;
}


  
 
}
</style>
