<template>
  <div
    class="burger"
    id="burger"
    :class="{ 'active': isBurgerActive }"
    @click.prevent="toggle"
  >
    <slot>
        <svg class="closed" width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="17" height="1" fill="black"/>
            <rect y="5" width="17" height="1" fill="black"/>
            <rect y="10" width="17" height="1" fill="black"/>
        </svg>
        <svg class="opened" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L20 20" stroke="black"/>
            <path d="M20 1L1 20" stroke="black"/>
        </svg>
    </slot>
  </div>
</template>
<script>
export default {
  data: () => ({
    isBurgerActive: false,
  }),
  methods: {
    toggle() {
      this.$nuxt.$emit('menuClick'); 
      this.isBurgerActive = !this.isBurgerActive;
    },
  },
};
</script>
<style scoped>
#burger{
  cursor: pointer;
}
.closed{
  display: block;
  width: 19px;
  height: 19px;
}
.opened{
  display: none;
  width: 19px;
  height: 19px;
}
.active .closed{
  display: none !important;
}
.active .opened{
  display: block !important;
}

</style>