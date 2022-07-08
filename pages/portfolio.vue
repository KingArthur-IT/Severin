<template>
  <div class="section">
    <Header pageLink="обо мне" langLink="итальянский" />
    <div class="container">
      <div class="wrapper">
        <img src="../static/preview/1.png" class="preveiw marginBottom" />
        <img src="../static/preview/3.png" class="preveiw marginBottom" />
        <img src="../static/preview/5.png" class="preveiw marginBottom" />
        <img src="../static/preview/7.png" class="preveiw marginBottom" />
        <img src="../static/preview/9.png" class="preveiw marginBottom" />
        <img src="../static/preview/11.png" class="preveiw marginBottom" />
      </div>
      <div class="wrapper">
        <img src="../static/preview/2.png" class="preveiw marginTop" />
        <img src="../static/preview/4.png" class="preveiw marginTop" />
        <img src="../static/preview/6.png" class="preveiw marginTop" />
        <img src="../static/preview/8.png" class="preveiw marginTop" />
        <img src="../static/preview/10.png" class="preveiw marginTop" />
        <img src="../static/preview/12.png" class="preveiw marginTop" />
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
  padding: 0 12px 0 12px;
}

.wrapper {
  width: 440px;
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
