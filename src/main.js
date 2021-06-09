import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ant from './plugins/antd/ant'

import { createFromIconfontCN } from '@ant-design/icons-vue'

const app = createApp(App)

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2599486_twi1vfjhkd.js'
})

app.component('IconFont', IconFont)

app.use(store).use(router).use(ant).mount('#app')
