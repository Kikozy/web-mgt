<template>
  <div class="root-container">
    <!-- 菜单区域 -->
    <div class="area-menu">
      <global-menu />
    </div>
    <!-- 内容区域 -->
    <div class="area-content">
      <!-- 页面地址 -->
      <div class="pages-path">
        <span v-for="pathItem of pageStore.$state.nowPagePath">{{ pathItem.title }} /</span>
      </div>
      <!-- 页面内容 -->
      <div class="pages-content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import GlobalMenu from '@/components/GlobalMenu.vue'
import { usePageStore } from '@/store/pageStore'
import { useRouter } from 'vue-router'
import { onMounted, watch } from 'vue'

const router = useRouter()
const pageStore: any = usePageStore()

//监听pageStore变化
pageStore.$subscribe(
  (_: any, state: any) => {
    console.log('%c pageStore Change ', 'color: white; background-color: #2274A5', state)
  },
  { detached: true }//保留监听
)

//监听当前路由变化，并把路由信息存入pageStore
watch(
  () => router.currentRoute.value,
  (newValue: any) => {
    console.log(newValue)
    let tempRoutePath = []
    for (const routeItem of newValue.matched) {
      tempRoutePath.push(routeItem.meta)
    }
    pageStore.$patch({
      nowPagePath: [...tempRoutePath],
    })
  }
)
onMounted(() => {
  console.log('App mounted')
})
</script>

<style lang="scss" scoped>
.root-container {
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: var(--color-neutral-2);
  .area-menu {
  }
  .area-content {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    margin: 25px 80px;
    border-radius: 8px;
    background-color: #ffffff;
    padding: 20px;
    .pages-path {
      width: 100%;
      color: #666666;
    }
    .pages-content {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
