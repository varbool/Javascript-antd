<template>
  <a-layout id="components-layout-basic">
    <a-layout>
      <a-layout-sider
        style="min-height: 100vh; position: relative"
        :collapsed="collapsed"
        :trigger="null"
      >
        <div class="logo" />
        <a-menu
          theme="dark"
          mode="inline"
          :default-open-keys="['sub1']"
          :default-selected-keys="['1']"
        >
          <a-sub-menu key="sub1">
            <template v-slot:title>
              <icon-font type="icon-barchart" />
              <span>图表</span>
            </template>
            <a-menu-item key="1"> option1 </a-menu-item>
            <a-menu-item key="2"> option2 </a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub2">
            <template v-slot:title>
              <icon-font type="icon-user" />
              <span>用户</span>
            </template>
            <a-menu-item key="3"> option3 </a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub3">
            <template v-slot:title>
              <icon-font type="icon-setting" />
              <span>设置</span>
            </template>
            <a-menu-item key="4"> option4 </a-menu-item>
            <a-menu-item key="5"> option5 </a-menu-item>
            <a-menu-item key="6"> option6 </a-menu-item>
            <a-menu-item key="7"> option7 </a-menu-item>
          </a-sub-menu>
        </a-menu>

        <icon-font
          class="trigger"
          :type="collapsed ? 'icon-indent' : 'icon-outdent'"
          @click="toggleCollapsed"
        />
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
          header
        </a-layout-header>
        <a-layout-content
          class="content"
          :style="{
            margin: '24px 16px',
            padding: '24px',
            background: '#fff',
          }"
          >Content</a-layout-content
        >
        <a-layout-footer>Footer</a-layout-footer>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      collapsed: false
    }
  },
  methods: {
    toggleCollapsed () {
      this.collapsed = !this.collapsed
    }
  }

}
</script>

<style>
#components-layout-basic .trigger {
  position: absolute;
  left: 50%;
  bottom: 15px;
  font-size: 22px;
  cursor: pointer;
  transform: translateX(-50%);
  transition: color 0.3s;
}

#components-layout-basic .trigger:hover {
  color: #1890ff;
}

#components-layout-basic .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
