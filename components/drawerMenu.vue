<template>
  <div class="section">
    <div class="container">
      <img src="/closeIcon.svg" alt="logoSeverin" class="closeIcon" />
      <div class="pagesWrapper">
        <nuxt-link class="page pageMarginBottom" to="/portfolio">Портфолио</nuxt-link>
        <nuxt-link class="page pageMarginBottom" to="/about">Обо мне</nuxt-link>
      </div>
      <div class="buttonsWrapper">
        <span class="button marginRight">RU</span>
        <span class="button">IT</span>
      </div>
      <div class="contactsWrapper">
        <span class="contact marginBottom">+39 (320) 030 33 14</span>
        <span class="contact">galinaseverin@gmail.com</span>
      </div>
      <div class="socialMediaWrapper">
        <span class="social marginBottom">Instagram</span>
        <span class="social">Facebook</span>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  components: {},
};
</script>



<style lang="scss" scoped>
.section {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $accent;
  height: 100vh;
  width: 100%;
}

.container {
  width: 768px;
  max-width: 100%;
  padding: 0 12px 0 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;
}

.closeIcon {
  position: absolute;
  top: 24px;
  right: 24px;
  cursor: pointer;
}

.pagesWrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 52px;
}

.page {
  font-family: "Inter";
  font-weight: 100;
  font-size: 64px;
  line-height: 100%;
  cursor: pointer;
}

.pageMarginBottom {
  margin-bottom: 52px;
}

.buttonsWrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 52px;
}

.button {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid $black;
  width: 60px;
  height: 60px;
  font-family: "Inter";
  font-weight: 300;
  font-size: 16px;
  line-height: 100%;
  text-transform: uppercase;
  transition: 0.5s;
  cursor: pointer;
}

.button:hover {
  transition: 0.5s;
  background-color: $black;
  color: $accent;
}

.marginRight {
  margin-right: 20px;
}

.contactsWrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 52px;
}

.contact {
  font-family: "Inter";
  font-weight: 300;
  font-size: 20px;
  line-height: 100%;
  position: relative;
  cursor: pointer;
}

.contact::after {
  content: "";
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
  justify-content: center;
}

.social {
  font-family: "Inter";
  font-weight: 300;
  font-size: 20px;
  line-height: 100%;
  cursor: pointer;
}

.marginBottom {
  margin-bottom: 12px;
}

@media (max-width: 768px) {
  .page {
    font-size: 52px;
  }
}

@media (max-width: 428px) {
  .page {
    font-size: 50px;
  }

  .pageMarginBottom {
    margin-bottom: 32px;
  }

  .buttonsWrapper {
    margin-bottom: 32px;
  }

  .contactsWrapper {
    margin-bottom: 32px;
  }

  .button {
    font-size: 14px;
    width: 40px;
    height: 40px;
  }

  .button {
    font-size: 14px;
    width: 40px;
    height: 40px;
  }

  .contact, .social {
    font-size: 16px;
  }
}
</style>