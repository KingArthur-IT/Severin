<template>
  <div class="section overflow-hidden">
    <Header :pageLink="'portfolio'" :isLogoVisible="!isMenuOpened" class="non-opacity" :class="{'show': isContentShown}"/>
    <div class="container about-hero" :class="{'show': isContentShown, 'hide': hideContent}">
      <div class="firstWrapper">
        <img src="/Severin 1.png" class="aboutImg" />
      </div>
      <div class="secondWrapper">
        <div class="descrInner">
          <span class="title">{{$t('about')}}</span>
          <p class="descr top">{{$t('description1')}}</p>
          <p class="descr">{{$t('description2')}}</p>
        </div>
      </div>
    </div>
    <Footer />
    <Drawer class="drawer" :class="{'openedMenu': isMenuOpened, 'closedMenu': !isMenuOpened}" />
  </div>
</template>


<script>
export default {
  components: {},
  data(){
    return {
      isContentShown: false,
      hideContent: false,
      isMenuOpened: false,
    }
  },
  created () {
      this.$nuxt.$on('toPortfolioPage', () => this.goToPortfolioPage());
      this.$nuxt.$on('menuToggle', () => this.toggleMenu());
      this.$nuxt.$on('closeDrawer', (page) => {
        if (page === 'portfolio'){
          this.isMenuOpened = false;
          this.goToPortfolioPage();
        }
        else {
          document.getElementById('burger').classList.remove('active');
          this.isMenuOpened = false;
        };
      })
  },
  mounted(){
    setTimeout(() => {
      this.isContentShown = true;
    }, 500);
  },
  methods:{
    goToPortfolioPage(){
      this.hideContent = true;
      this.isContentShown = false;
      setTimeout(() => {
        this.$nuxt.$router.push('/portfolio');
      }, 1000);
    },
    toggleMenu(){
      const isActive = document.getElementById('burger').classList.contains('active');
      this.isMenuOpened = !isActive;
    }
  }
};
</script>

<style lang="scss" scoped>
.about-hero{
  transform: translateY(150%);
  transition: transform 1.0s ease-in-out;
}

.hide{
  transform: translateY(-150%) !important;
}

.show{
  opacity: 1 !important;
  transform: translateY(0) !important;
}

.section {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: $accent;
  min-height: 100vh;
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

.title::first-letter{
  text-transform: uppercase;
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

.non-opacity{
  opacity: 0;
  transition: opacity .5s ease-in-out;
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
