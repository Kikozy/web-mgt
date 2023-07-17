<template>
  <div class="component-global-menu" v-if="pageStore.nowPagePath[0]">
    <a-menu
      :style="{ width: '200px', height: '100%' }"
      :default-open-keys="[pageStore.nowPagePath[0].name]"
      :default-selected-keys="[pageStore.nowPagePath[1].name]"
      breakpoint="xl"
      @collapse="onCollapse"
    >
      <a-sub-menu v-for="routeItem of newRoute" :key="routeItem.meta.name">
        <template #title>{{ routeItem.meta.title }}</template>
        <a-menu-item
          v-for="routeChildrenItem of routeItem.children"
          :key="routeChildrenItem.meta.name"
          @click="handleClickTpPath(routeChildrenItem.name)"
          >{{ routeChildrenItem.meta.title }}</a-menu-item
        >
      </a-sub-menu>
    </a-menu>
  </div>
</template>
<script lang="ts" setup>
import { routes } from '@/route/index'
import { Message } from '@arco-design/web-vue'
import { onMounted, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { usePageStore } from '@/store/pageStore'

onMounted(() => {
  console.log('GlobalMenu mounted')
})

const pageStore: any = usePageStore()
const router = useRouter()

function onCollapse(_: any, type: string) {
  const content = type === 'responsive' ? '触发响应式收缩' : '点击触发收缩'
  Message.info({
    content,
    duration: 2000,
  })
}


let newRoute: Array<any> = reactive([])
let localRoutes = JSON.parse(JSON.stringify(routes)) //深度拷贝一份(遇到function会GG)

//过滤掉hidden为true的路由
for (const routeItem of localRoutes) {
  newRoute.push({
    path: routeItem.path,
    meta: routeItem.meta,
    redirect: routeItem.redirect,
    children: routeItem.children.filter((routeChildrenItem: any) => routeChildrenItem.meta.hidden !== true),
  })
}

// 路由的跳转
function handleClickTpPath(name: string) {
  router.push({ name })
}

// console.log('新的路由', newRoute)
</script>

<style scoped>
.component-global-menu {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background-color: var(--color-neutral-2);
}
</style>
