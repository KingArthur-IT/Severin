export { default as BurgerIcon } from '../../components/burgerIcon.vue'
export { default as Drawer } from '../../components/drawer.vue'
export { default as DrawerMenu } from '../../components/drawerMenu.vue'
export { default as Footer } from '../../components/footer.vue'
export { default as Header } from '../../components/header.vue'
export { default as Slider } from '../../components/slider.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
