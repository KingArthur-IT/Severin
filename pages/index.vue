<template>
  <div class="section">
    <div class="container">
      <div class="descrWrapper">
        <div class="overflow-hidden title-wrapper">
          <span class="title" :class="{'show': isContentShown}">severin</span>
        </div>
        <div class="overflow-hidden">
          <span class="subTitle" :class="{'show': isContentShown}">fotoshooting in tutta Italia</span>
        </div>
      </div>
      <div class="buttonsWrapper non-opacity" :class="{'show': isContentShown}">
        <div class="button margin" @click="goToPortfolioPage('rus')">русский</div>
        <div class="button" @click="goToPortfolioPage('ita')">italiano</div>
      </div>
      <div class="numberWrapper non-opacity" :class="{'show': isContentShown}">
        <span class="number">+39 (320) 030 33 14</span>
      </div>
      <div class="socialMediaWrapper non-opacity" :class="{'show': isContentShown}">
        <div class="socialMedia bottomMargin">Instagram</div>
        <div class="socialMedia">Facebook</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data(){
    return {
      isContentShown: false
    }
  },

  mounted(){
    this.isContentShown = true;
  },

  methods:{
    goToPortfolioPage(lang){
      this.isContentShown = false;
      setTimeout(() => {
        this.$nuxt.$router.push('/portfolio');
      }, 1750);
    }
  }
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

.title-wrapper{
  margin: 0 0 30px 0;
}

.title {
  font-family: "Inter";
  font-weight: 100;
  font-size: 200px;
  text-transform: uppercase;
  color: $black;
  line-height: 80%;
  display: block;
  transform: translateY(120%);
  transition: transform 1.0s ease-in-out;
}

.subTitle {
  font-family: "Inter";
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 115%;
  color: $black;
  display: block;
  transform: translateY(100%);
  transition: transform 1.0s ease-in-out;
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

.show{
    transform: translateY(0) !important;
    opacity: 1 !important;
  }
  
.non-opacity{
    opacity: 0;
    transition: opacity 1.75s ease-in-out;
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
