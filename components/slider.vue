<template>
  <div  :id="id" 
        class="slider"
        :style="`transform: translate(${transform.x}px, ${transform.y}px)`"
  >
      <div class="slider__back-wrapper">
          <svg class="slider__back" viewBox="0 0 50 9" style="stroke: white; fill: white; width: 5rem; height: 5rem; color: rgb(40, 40, 41);">
              <path stroke="currentColor" fill="currentColor" d="m0 4.5 5-3m-5 3 5 3m45-3h-77"></path>
          </svg>
      </div>
      <div  class="slider__preview" 
            @click="openSlider" 
      >
          <img class="slider__preview-img" :src="require(`@/static/${folderName}/1.png`)" alt="">
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
        }
    },
    data(){
        return{
            transform: {x: 0, y: 0},
        }
    },
    methods:{
        openSlider(){
            const offsetTop = document.getElementById(this.id).offsetTop;
            const wrapperHeight = document.getElementById('left-wrapper').clientHeight;
            this.transform.y = 60 - (offsetTop + wrapperHeight * this.translateY * 0.01);

            const offsetLeft = document.getElementById(this.id).getBoundingClientRect().left;
            const itemWidth = document.getElementById(this.id).clientWidth;
            this.transform.x = - offsetLeft + 0.5 * ( window.innerWidth) - 0.5 * itemWidth;
        },
        closeSlider(){
            this.transform.y = 0;
            this.transform.x = 0;
        }
    }
}
</script>

<style scoped>
.slider{
    transition: transform 1.0s ease-in-out;
}
.slider__preview{
    
}
.slider__preview-img{
    width: 440px;
    height: 600px;
    box-shadow: 0px 20.8333px 20.8333px rgba(0, 0, 0, 0.25);
    object-fit: cover;
}
.slider__back{
    height: 40px !important;
}
</style>