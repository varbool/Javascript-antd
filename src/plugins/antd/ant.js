import {
  Button,
  Menu,
  Layout,
  Slider
} from 'ant-design-vue'

const ant = {
  install (Vue) {
    Vue.use(Button)
    Vue.use(Menu)
    Vue.use(Layout)
    Vue.use(Slider)
  }
}

export default ant
