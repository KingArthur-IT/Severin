<template>
  <div class="section portfolio overflow-hidden" :class="{'h-120': openedSliderId !== ''}"
       v-touch:moving="movingTouchHandle"
       v-touch:start="startTouchHandle"
       v-touch:end="endTouchHandle"
       @wheel.prevent
  >
    <Header :pageLink="$t('about')" class="non-opacity" :isLogoVisible="!isMenuOpened" :class="{'show': isContentShown, 'non-event': openedSliderId !== ''}"/>
    <div class="container portfolio__wrapper">
      <div  id="left-wrapper" 
            class="wrapper" 
            :class="{'transition-3s': isWrapperAnimation, 'non-event': openedSliderId.includes('right'), 'wrapper-hide': isOutAnimation}" 
            :style="`transform: translate(${leftWrapperY.currentPositionX}%, ${leftWrapperY.currentPosition}%)`"
      >
        <Slider v-for="(name, i) in folders.filter((item, index) => {return index % 2 === 0} )" :key="i"
                :id="`left-${i}`" 
                :folderName="name.name"
                :imgCount="name.imgCount"
                class="marginBottom" 
                :translateY="leftWrapperY.currentPosition"
                :class="{'non-opacity': openedSliderId !== '' & openedSliderId !== `left-${i}`}"
                :wrapperId="'left-wrapper'"
        />
      </div>
      <div  id="right-wrapper" 
            class="wrapper" 
            :class="{'transition-3s': isWrapperAnimation, 'non-event': openedSliderId.includes('left'), 'wrapper-hide': isOutAnimation}" 
            :style="`transform: translate(${rightWrapperY.currentPositionX}%, ${rightWrapperY.currentPosition}%)`">
        <Slider v-for="(name, i) in folders.filter((item, index) => {return index % 2 === 1} )" :key="i"
                :id="`right-${i}`" 
                :folderName="name.name"
                :imgCount="name.imgCount"
                class="marginBottom" 
                :translateY="rightWrapperY.currentPosition"
                :class="{'non-opacity': openedSliderId !== '' & openedSliderId !== `right-${i}`}"
                :wrapperId="'right-wrapper'"
        />
      </div>
    </div>
    <Footer class="non-opacity portfolio__footer" :class="{'show': isFooterVisible && !isMenuOpened, 'non-event': openedSliderId !== ''}"/>
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
      isOutAnimation: false,
      isMenuOpened: false,
      leftWrapperY: {
        currentPositionX: 0,
        currentPosition: 20,
        startPosition: -88,
        endPosition: 1,
        direction: 1
      },
      rightWrapperY: {
        currentPositionX: 0,
        currentPosition: -120,
        startPosition: 0.5,
        endPosition: -77.5,
        direction: -1
      },
      openedSliderId: '',
      touchStart: -1,
      folders: [
        {name: 'firstSlider', imgCount: 9},
        {name: 'secondSlider', imgCount: 8},
        {name: 'thirdSlider', imgCount: 8},
        {name: 'fourthSlider', imgCount: 8},
        {name: 'fifthSlider', imgCount: 6},
        {name: 'sixthSlider', imgCount: 7},
        {name: 'seventhSlider', imgCount: 9},
        {name: 'eighthSlider', imgCount: 7},
        {name: 'ninthSlider', imgCount: 9},
        {name: 'tenthSlider', imgCount: 6},
        {name: 'eleventhSlider', imgCount: 8},
        {name: 'twelfthSlider', imgCount: 14},
        {name: 'thirteenthSlider', imgCount: 10},
        {name: 'fourteenthSlider', imgCount: 8},
        {name: 'fifteenthSlider', imgCount: 10},
        {name: 'sixteenthSlider', imgCount: 5},
        {name: 'seventeenthSlider', imgCount: 7},
      ]
    }
  },
  created () {
      if (process.client) { 
          window.addEventListener('wheel', this.handleWheel);
      };
      this.$nuxt.$on('toAboutPage', () => this.goToAboutPage());
      this.$nuxt.$on('menuToggle', () => this.toggleMenu());
      this.$nuxt.$on('closeDrawer', (page) => {
        if (page === 'about'){
          this.isMenuOpened = false;
          this.goToAboutPage();
        }
        else {
          document.getElementById('burger').classList.remove('active');
          this.isMenuOpened = false;
        }
      });

      this.$nuxt.$on('openSlider', (id) => {
        this.isContentShown = false;
        this.openedSliderId = id;
      });
      this.$nuxt.$on('closeSlider', () => {
        this.isContentShown = true;
        this.openedSliderId = '';
      });
  },
  mounted(){
    this.leftWrapperY.currentPositionX = 0.0;
    this.rightWrapperY.currentPositionX = 0.0;
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
    moveWrapper(scrollStep){
      //left wrapper scroll
      let posStep = this.leftWrapperY.direction * scrollStep;
      if (this.leftWrapperY.currentPosition + posStep < this.leftWrapperY.endPosition && this.leftWrapperY.currentPosition + posStep > this.leftWrapperY.startPosition)
        this.leftWrapperY.currentPosition += posStep;
      //rigth wrapper scroll
      posStep = this.rightWrapperY.direction * scrollStep;
      if (this.rightWrapperY.currentPosition + posStep > this.rightWrapperY.endPosition && this.rightWrapperY.currentPosition + posStep < this.rightWrapperY.startPosition)
        this.rightWrapperY.currentPosition += posStep;
    },
    handleWheel (e) {
      //if enter animation is in process
      if (this.isWrapperAnimation || this.openedSliderId !== '') return;

      const scrollStep = e.deltaY * 0.01;
      this.moveWrapper(scrollStep);
    },
    goToAboutPage(){
      //this.isWrapperAnimation = true;
      this.isOutAnimation = true;
      this.isContentShown = false;
      this.leftWrapperY.currentPosition += 2;
      this.rightWrapperY.currentPosition += 2;
      this.leftWrapperY.currentPositionX = -2;
      this.rightWrapperY.currentPositionX = 2;
      //this.leftWrapperY.currentPosition = 20;
      //this.rightWrapperY.currentPosition = -120;
      setTimeout(() => {
        this.$nuxt.$router.push('/about');
      }, 500);
    },
    toggleMenu(){
      const isActive = document.getElementById('burger').classList.contains('active');
      this.isMenuOpened = !isActive;
    },
    endTouchHandle(e){
      this.startTouchHandle = -1;
    },
    startTouchHandle(e){
      this.startTouchHandle = e.changedTouches[0].clientY;
    },
    movingTouchHandle(e){
      if (this.startTouchHandle > 0){
        const direction = Math.sign(e.changedTouches[0].clientY - this.startTouchHandle);
        this.moveWrapper(direction * 0.2);
      }
    },
  },
  computed: {
    isFooterVisible(){
      const delta = 10;
      const isLeftWrapperDown = Math.abs(this.leftWrapperY.currentPosition - this.leftWrapperY.endPosition) < delta;
      const isRightWrapperDown = Math.abs(this.rightWrapperY.currentPosition - this.rightWrapperY.endPosition) < delta;
      return this.isContentShown && isLeftWrapperDown && isRightWrapperDown;
    }
  }
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

.non-event{
  pointer-events: none;
}

.h-120{
  height: 120vh;
}

.wrapper-hide{
  opacity: 0 !important;
  transition: all 0.5s ease-in-out !important;
}

@media (max-width: 1024px) {
  .container{
    justify-content: space-around;
  }

  .marginTop {
    margin: 120px 0 0 0;
  }

  .marginBottom {
    margin: 0 0 120px 0;
  }

  .wrapper {
    width: 350px;
  }
}

@media (max-width: 768px) {
  .marginTop {
    margin: 80px 0 0 0;
  }

  .marginBottom {
    margin: 0 0 80px 0;
  }

  .wrapper{
    width: 280px !important;
  }
}

@media (max-width: 568px) {
  .wrapper{
    width: 180px !important;
  }
}

@media (max-width: 375px) {
  .wrapper{
    width: 150px !important;
  }
}
</style>
