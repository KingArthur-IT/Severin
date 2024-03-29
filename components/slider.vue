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
            <img    class="slider__preview-img" 
                    :src="require(`@/static/${folderName}/1.webp`)" 
                    rel="preload"
            >
            <nuxt-img   v-for="i in imgCount-1" :key="i"
                        class="slider__preview-img" 
                        :src="require(`@/static/${folderName}/${i+1}.webp`)" 
                        loading="lazy"
            />
        </div>
      </div>
      <div class="slider__controls-wrapper" :class="{'show': isOpened}">
          <div class="slider__controls-btns">
              <div class="slider__controls-btn" @click="prevImg" :class="{'non-active-btn': selectedImg === 1}">prev</div>
              <div class="slider__controls-btn" @click="nextImg" :class="{'non-active-btn': selectedImg === imgCount}">next</div>
          </div>
      </div>
      <div class="slider__img-list" :class="{'show': isOpened}">
          <div class="slider__img-wrapper" :style="`transform: translateX(${imgListTransform}%)`">
            <nuxt-img   v-for="i in imgCount" :key="i"
                        :class="{'active-img': i === selectedImg}"
                        :src="require(`@/static/${folderName}/${i}.webp`)" 
                        loading="lazy"
                        @click="selectedImg = i"
            />
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
        },
        wrapperId:{
            type: String,
            default: 'left-wrapper'
        },
        openedSliderId:{
            type: String,
            default: ''
        },
    },
    data(){
        return{
            transform: {x: 0, y: 0},
            isOpened: false,
            selectedImg: 1,
        }
    },
    methods:{
        openSlider(){
            if (this.transform.x !== 0 || this.transform.y !== 0 || this.openedSliderId !== '') return;

            this.isOpened = true;

            const offsetTop = document.getElementById(this.id).getBoundingClientRect().top;
            this.transform.y = 60 - offsetTop;

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
        },
        imgListTransform(){
            return -100.0 * (this.selectedImg - 2) / this.imgCount;
        },
    },
}
</script>

<style scoped>
.slider{
    transition: all 1.0s ease-in-out;
    z-index: 11;
}
.slider__preview-wrapper{
    width: 290px;
    height: 400px;
    box-shadow: 0px 20.8333px 20.8333px rgba(0, 0, 0, 0.25);
    object-fit: cover;
    transition: all 1.0s ease-in-out;
    margin-bottom: 20px;
    overflow: hidden;
    cursor: pointer;
}
.slider__preview{
    width: fit-content;
    display: flex;
    transition: transform 0.5s ease-in-out;
}
.slider__preview-img{
    width: 290px;
    height: 400px;
}

.slider__back-wrapper{
    opacity: 0;
    pointer-events: none;
    transition: opacity 1s ease-in-out;
    position: absolute;
}

.slider__back-wrapper.show{
    top: -40px;
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
    opacity: 0;
    pointer-events: none;
    transition: opacity 1s ease-in-out;
    margin-bottom: 20px;
    position: absolute;
    width: 100%;
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
    cursor: default;
}

.slider__img-list{
    width: 100%;
    overflow-x: hidden;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.5s ease-in-out;
    position: absolute;
    bottom: -160px;
}

.slider__img-wrapper{
    width: fit-content;
    display: flex;
    transition: transform 0.5s ease-in-out;
}

.slider__img-wrapper img{
    height: 100px;
    margin: 0 10px;
    border-radius: 10px;
    filter: brightness(1.5) contrast(0.5);
    cursor: pointer;
}

.active-img{
    filter: brightness(1.0) contrast(1.0) !important;
}

@media (max-width: 1024px) {
    .slider{
        width: 220px !important;
    }
    .slider__preview-img,
    .slider__preview-wrapper {
        width: 220px !important;
        height: 300px !important;
    }
    .slider__img-wrapper img{
        height: 82px;
        margin: 0 5px;
    }
    .slider__img-list{
        bottom: -140px;
    }
}

@media (max-width: 768px) {
    .slider{
      width: 280px !important;
    }
    .slider__preview-img,
    .slider__preview-wrapper {
        width: 280px !important;
        height: 400px !important;
    }
    .slider__img-wrapper img{
        height: 76px;
    }
    .slider__img-list{
        bottom: -140px;
    }
}

@media (max-width: 600px) {
    .slider{
      width: 180px !important;
  }
    .slider__preview-img,
    .slider__preview-wrapper {
        width: 180px !important;
        height: 280px !important;
    }
    .slider__img-wrapper img{
        height: 65px;
    }
    .slider__img-list{
        bottom: -120px;
    }
}

@media (max-width: 400px) {
    .slider{
      width: 150px !important;
    }
    .slider__preview-img,
    .slider__preview-wrapper {
        width: 150px !important;
        height: 220px !important;
    }
    .slider__img-wrapper img{
        height: 53px;
    }
    .slider__img-list{
        bottom: -110px;
    }
}

@media (max-width: 360px) {
    .slider{
      width: 120px !important;
    }
    .slider__preview-img,
    .slider__preview-wrapper {
        width: 120px !important;
        height: 170px !important;
    }
    .slider__img-wrapper img{
        height: 45px;
        margin: 0 3px;
    }
    .slider__img-list{
        bottom: -100px;
    }
}
</style>


</style>