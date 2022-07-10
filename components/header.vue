<template>
  <div class="headerSection">
    <div class="headerContainer">
      <span class="link" @click="linkClick">{{ pageLink }}</span>
      <img src="/Logo.svg" alt="logoSeverin" class="headerLogo" />
      <span class="link">{{ langLink }}</span>
    </div>
    <div class="headerMobileContainer">
        <img src="/Logo.svg" alt="logoSeverin" class="headerLogo" />
        <div class="burgerWrapper" @click="$nuxt.$emit('menuToggle')">
          <BurgerIcon />
        </div>
    </div>
  </div>
</template>



<script>
export default {
  components: {},
  props: {
    pageLink: String,
    langLink: String,
  },
  methods:{
    linkClick(){
      if (this.pageLink === 'портфолио')
        this.$nuxt.$emit('toPortfolioPage');
      else this.$nuxt.$emit('toAboutPage');
    }
  }
};
</script>



<style lang="scss" scoped>
.headerMobileContainer{
  position: relative;
}

.headerSection {
  width: 100%;
  display: flex;
  justify-content: center;
  //background-color: $accent;
  background: transparent;
  margin: 0 0 80px 0;
  padding: 40px 0 0 0;
  z-index: 3;
}

.headerContainer {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 1024px;
  padding: 0 12px 0 12px;
}

.link {
  font-family: "Inter";
  font-weight: 300;
  font-size: 16px;
  line-height: 100%;
  color: $black;
  cursor: pointer;
}

.headerMobileContainer {
  display: none;
}

@media (max-width: 1024px) {
  .headerLogo {
      margin: 0 auto;
    }

  .headerContainer {
    display: none;
  }

  .headerMobileContainer {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 100%;
  }

  .headerMobileWrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 67.339vw;
  }


  @media (max-width: 768px) {
    .headerLogo {
      width: 142px;
      margin: 0 auto;
    }

    .headerSection {
      margin: 0 0 40px 0;
    }
  }
}
</style>