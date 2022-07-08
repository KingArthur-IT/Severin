<template>
  <div class="footerSection">
    <div class="footerContainer">
      <div class="socialMediaWrapper">
        <span class="socialMedia margin">Instagram</span>
        <span class="socialMedia">Facebook</span>
      </div>
      <span class="data">©2022</span>
      <div class="socialContactWrapper">
        <span class="contact margin">+39 (320) 030 33 14</span>
        <span class="contact">galinaseverin@gmail.com</span>
      </div>
    </div>
    <div class="footerMobileContainer">
      <span class="contact magrigBottom">+39 (320) 030 33 14</span>
      <span class="data">©2022</span>
    </div>
  </div>
</template>



<script>
export default {
  components: {},
};
</script>



<style lang="scss" scoped>
.footerSection {
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: $accent;
  padding-bottom: 32px;
  margin: 80px 0 0 0;
}

.footerContainer {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  align-items: flex-end;
  width: 1024px;
  padding: 0 12px 0 12px;
}

.socialMediaWrapper {
  width: 33.33%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}

.socialMedia {
  font-family: "Inter";
  font-weight: 300;
  font-size: 16px;
  line-height: 100%;
}

.margin {
  margin: 0 0 8px 0;
}

.data {
  display: flex;
  width: 33.33%;
  justify-content: center;
  font-family: "Inter";
  font-weight: 300;
  font-size: 16px;
  line-height: 100%;
  text-transform: uppercase;
  color: $black;
}

.socialContactWrapper {
  width: 33.33%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
}

.contact {
  font-family: "Inter";
  font-weight: 300;
  font-size: 16px;
  line-height: 100%;
}

.footerMobileContainer {
  display: none;
}

@media (max-width: 1024px) {
  .footerSection {
    margin: 60px 0 0 0;
  }

  .footerContainer {
    display: none;
  }

  .footerMobileContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 0 12px 0 12px;
  }

  .magrigBottom {
    margin-bottom: 12px;
  }
}
</style>