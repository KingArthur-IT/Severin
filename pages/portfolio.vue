<template>
  <div class="section portfolio overflow-hidden">
    <Header pageLink="обо мне" langLink="итальянский" class="non-opacity" :class="{'show': isContentShown}"/>
    <div class="container portfolio__wrapper">
      <div  id="left-wrapper" 
            class="wrapper" 
            :class="{'transition-3s': isWrapperAnimation}" 
            :style="`transform: translateY(${leftWrapperY.currentPosition}%)`"
      >
        <Slider :id="'left-1'" class="marginBottom" :translateY="leftWrapperY.currentPosition"/>
        <Slider :id="'left-2'" class="marginBottom" :translateY="leftWrapperY.currentPosition"/>
        <Slider :id="'left-3'" class="marginBottom" :translateY="leftWrapperY.currentPosition"/>
        <Slider :id="'left-4'" class="marginBottom" :translateY="leftWrapperY.currentPosition"/>
        <Slider :id="'left-5'" class="marginBottom" :translateY="leftWrapperY.currentPosition"/>
        <Slider :id="'left-6'" class="marginBottom" :translateY="leftWrapperY.currentPosition"/>
        <!--
        <img src="../static/preview/1.png" class="preveiw marginBottom" />
        <img src="../static/preview/3.png" class="preveiw marginBottom" />
        <img src="../static/preview/5.png" class="preveiw marginBottom" />
        <img src="../static/preview/7.png" class="preveiw marginBottom" />
        <img src="../static/preview/9.png" class="preveiw marginBottom" />
        <img src="../static/preview/11.png" class="preveiw marginBottom" />
        -->
      </div>
      <div class="wrapper" :class="{'transition-3s': isWrapperAnimation}" :style="`transform: translateY(${rightWrapperY.currentPosition}%)`">
        <Slider :id="'right-1'" class="marginBottom" :translateY="rightWrapperY.currentPosition"/>
        <Slider :id="'right-2'" class="marginBottom" :translateY="rightWrapperY.currentPosition"/>
        <Slider :id="'right-3'" class="marginBottom" :translateY="rightWrapperY.currentPosition"/>
        <Slider :id="'right-4'" class="marginBottom" :translateY="rightWrapperY.currentPosition"/>
        <Slider :id="'right-5'" class="marginBottom" :translateY="rightWrapperY.currentPosition"/>
        <Slider :id="'right-6'" class="marginBottom" :translateY="rightWrapperY.currentPosition"/>
        <!--
        <img src="../static/preview/2.png" class="preveiw marginTop" />
        <img src="../static/preview/4.png" class="preveiw marginTop" />
        <img src="../static/preview/6.png" class="preveiw marginTop" />
        <img src="../static/preview/8.png" class="preveiw marginTop" />
        <img src="../static/preview/10.png" class="preveiw marginTop" />
        <img src="../static/preview/12.png" class="preveiw marginTop" />
        -->
      </div>
    </div>
    <Footer class="non-opacity portfolio__footer" :class="{'show': isContentShown}"/>
    <Drawer class="drawer" :class="{'openedMenu': isMenuOpened, 'closedMenu': !isMenuOpened}" />
  </div>
</template>


<script>
export default {
  components: {},

  data(){
    return {
      isContentShown: false,
      isWrapperAnimation: true,
      isMenuOpened: false,
      leftWrapperY: {
        currentPosition: 20,
        startPosition: -83,
        endPosition: 1,
        direction: 1
      },
      rightWrapperY: {
        currentPosition: -120,
        startPosition: -1.8,
        endPosition: -85.5,
        direction: -1
      }
    }
  },
  created () {
      if (process.client) { 
          window.addEventListener('wheel', this.handleWheel);
      };
      this.$nuxt.$on('toAboutPage', () => this.goToAboutPage());
      this.$nuxt.$on('menuToggle', () => this.toggleMenu());
      this.$nuxt.$on('closeDrawer', (page) => {
        this.isMenuOpened = false;
        if (page === 'about')
          this.goToAboutPage();
      });
  },
  mounted(){
    setTimeout(() => {
      this.isWrapperAnimation = false;
    }, 2000);
    setTimeout(() => {
      this.isContentShown = true;
      this.leftWrapperY.currentPosition = this.leftWrapperY.startPosition;
      this.rightWrapperY.currentPosition = this.rightWrapperY.startPosition;
    }, 500);
  },
  methods: {
    handleWheel (e) {
      //if enter animation is in process
      if (this.isWrapperAnimation) return;

      const scrollStep = e.deltaY * 0.01;
      //left wrapper scroll
      let posStep = this.leftWrapperY.direction * scrollStep;
      if (this.leftWrapperY.currentPosition + posStep < this.leftWrapperY.endPosition && this.leftWrapperY.currentPosition + posStep > this.leftWrapperY.startPosition)
        this.leftWrapperY.currentPosition += posStep;
      //rigth wrapper scroll
      posStep = this.rightWrapperY.direction * scrollStep;
      if (this.rightWrapperY.currentPosition + posStep > this.rightWrapperY.endPosition && this.rightWrapperY.currentPosition + posStep < this.rightWrapperY.startPosition)
        this.rightWrapperY.currentPosition += posStep;
    },
    goToAboutPage(){
      this.isWrapperAnimation = true;
      this.isContentShown = false;
      this.leftWrapperY.currentPosition = 20;
      this.rightWrapperY.currentPosition = -120;
      setTimeout(() => {
        this.$nuxt.$router.push('/about');
      }, 2500);
    },
    toggleMenu(){
      this.isMenuOpened = !this.isMenuOpened;
    }
  },
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

.portfolio{
  height: 100vh;
  position: relative;
}

.portfolio__wrapper{
  position: absolute;
}

.portfolio__footer{
  position: absolute;
  bottom: 0;
  z-index: 3;
}

.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 100%;
  width: 1024px;
  padding: 0 12px 0 12px;
}

.wrapper {
  width: 440px;
  transition: transform 0.2s linear;
}

.transition-3s{
  transition: transform 3.0s ease-in-out;
}


.preveiw {
  width: 440px;
  height: 600px;
  box-shadow: 0px 20.8333px 20.8333px rgba(0, 0, 0, 0.25);
  object-fit: cover;
}

.marginTop {
  margin: 200px 0 0 0;
}

.marginBottom {
  margin: 0 0 200px 0;
}

.non-opacity{
  opacity: 0;
  transition: opacity .5s ease-in-out;
}

.show{
  opacity: 1 !important;
}

@media (max-width: 1024px) {
  .preveiw {
    width: 100%;
    height: 480px;
    box-shadow: 0px 20.8333px 20.8333px rgba(0, 0, 0, 0.25);
  }

  .marginTop {
    margin: 120px 0 0 0;
  }

  .marginBottom {
    margin: 0 0 120px 0;
  }

  .wrapper {
    width: 41.667vw;
  }
}

@media (max-width: 768px) {
  .preveiw {
    height: 400px;
  }

  .marginTop {
    margin: 80px 0 0 0;
  }

  .marginBottom {
    margin: 0 0 80px 0;
  }

  @media (max-width: 568px) {
    .preveiw {
      height: 280px;
    }

  }

}

 @media (max-width: 375px) {
    .preveiw {
      height: 200px;
    }

  }
</style>
