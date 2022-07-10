<template>
  <div  :id="id" 
        class="slider"
        :style="`transform: translate(${transform.x}px, ${transform.y}px)`"
  >
      <div class="slider__back-wrapper" :class="{'show': isOpened}">
          <svg @click="closeSlider"  class="slider__back" viewBox="0 0 50 9" style="stroke: white; fill: white; width: 5rem; height: 5rem; color: rgb(40, 40, 41);">
              <path stroke="currentColor" fill="currentColor" d="m0 4.5 5-3m-5 3 5 3m45-3h-77"></path>
          </svg>
      </div>
      <div  class="slider__preview-wrapper" 
            :class="{'opened-preview': isOpened}"
            @click="openSlider" 
      >
        <div class="slider__preview" :style="`transform: translateX(${previewTransform}%)`">
            <img    v-for="i in imgCount" :key="i"
                    class="slider__preview-img" 
                    :src="require(`@/static/${folderName}/${i}.png`)" 
                    alt=""
          >
        </div>
      </div>
      <div class="slider__controls-wrapper" :class="{'show': isOpened}">
          <div class="slider__controls-btns">
              <div class="slider__controls-btn" @click="prevImg" :class="{'non-active-btn': selectedImg === 1}">prev</div>
              <div class="slider__controls-btn" @click="nextImg" :class="{'non-active-btn': selectedImg === imgCount}">next</div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        id:{
            type: String,
            required: true
        },
        folderName:{
            type: String,
            default: 'eighthSlider'
        },
        translateY:{
            type: Number,
            default: 0
        },
        imgCount: {
            type: Number,
            default: 1
        }
    },
    data(){
        return{
            transform: {x: 0, y: 0},
            isOpened: false,
            selectedImg: 1
        }
    },
    methods:{
        openSlider(){
            if (this.transform.x !== 0 && this.transform.y !== 0) return;

            this.isOpened = true;

            const offsetTop = document.getElementById(this.id).offsetTop;
            const wrapperHeight = document.getElementById('left-wrapper').clientHeight;
            this.transform.y = 20 - (offsetTop + wrapperHeight * this.translateY * 0.01);

            const offsetLeft = document.getElementById(this.id).getBoundingClientRect().left;
            const itemWidth = document.getElementById(this.id).clientWidth;
            this.transform.x = - offsetLeft + 0.5 * ( window.innerWidth) - 0.5 * itemWidth;

            this.$nuxt.$emit('openSlider', this.id);
        },
        closeSlider(){
            this.transform.y = 0;
            this.transform.x = 0;
            this.isOpened = false;

            this.$nuxt.$emit('closeSlider');
        },
        prevImg(){
            if (this.selectedImg > 1)
                this.selectedImg --;
        },
        nextImg(){
            if (this.selectedImg < this.imgCount)
                this.selectedImg ++;
        }
    },
    computed:{
        previewTransform(){
            return -100.0 * (this.selectedImg - 1) / this.imgCount;
        }
    }
}
</script>

<style scoped>
.slider{
    transition: all 1.0s ease-in-out;
    z-index: 11;
}
.slider__preview-wrapper{
    width: 440px;
    height: 600px;
    box-shadow: 0px 20.8333px 20.8333px rgba(0, 0, 0, 0.25);
    object-fit: cover;
    transition: all 1.0s ease-in-out;
    margin-bottom: 10px;
    overflow: hidden;
}
.slider__preview{
    width: fit-content;
    display: flex;
    transition: transform 0.5s ease-in-out;
}
.slider__preview-img{
    width: 440px;
    height: 600px;
}

.slider__controls-wrapper,
.slider__back-wrapper{
    opacity: 0;
    pointer-events: none;
    transition: opacity 1s ease-in-out;
}

.slider__back{
    height: 40px !important;
    cursor: pointer;
}

.show{
    opacity: 1 !important;
    pointer-events: all !important;
}

.slider__controls-wrapper{

}

.slider__controls-btns{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.slider__controls-btn{
    text-transform: uppercase;
    color: #282828;
    font-family: "Inter";
    cursor: pointer;
}

.opened-preview{
    box-shadow: none;
    border-radius: 10px;
}

.non-active-btn{
    color: #868585;
}

</style>