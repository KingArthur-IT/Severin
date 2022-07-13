<template>
  <div class="headerSection">
    <div class="headerContainer">
      <span class="link" @click="linkClick">{{ pageLink }}</span>
      <img src="/Logo.svg" alt="logoSeverin" class="headerLogo" />
      <nuxt-link v-if="$i18n.locale === 'ita'" class="link" :to="switchLocalePath('rus')">русский</nuxt-link>
      <nuxt-link v-else class="link" :to="switchLocalePath('ita')">italiano</nuxt-link>
    </div>
    <div class="headerMobileContainer">
        <img src="/Logo.svg" alt="logoSeverin" class="headerLogo" :class="{'non-visible': !isLogoVisible}"/>
        <div class="burgerWrapper">
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
    isLogoVisible: {
      type: Boolean,
      default: true
    }
  },
  methods:{
    linkClick(){
      if (this.pageLink === 'portfolio')
        this.$nuxt.$emit('toPortfolioPage');
      else this.$nuxt.$emit('toAboutPage');
    }
  },
  computed: {
    availableLocales () {
      return this.$i18n.locales;
    }
  },
  created(){
    this.$nuxt.$on('menuClick', () => this.$nuxt.$emit('menuToggle'));
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
  background-color: $accent;
  margin: 0 0 80px 0;
  padding: 40px 0 10px 0;
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
  text-decoration: none;
}

.headerMobileContainer {
  display: none;
  opacity: 1;
  transition: 0.5s ease-in-out;
}

.non-visible{
  opacity: 0 !important;
}

@media (max-width: 1024px) {
  .headerLogo {
      margin: 0 auto;
      transition: 0.5s ease-in-out;
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

  .burgerWrapper{
    position: absolute;
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