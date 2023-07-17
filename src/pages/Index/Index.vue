<template>
  <div class="pages-home">
    <h1>.</h1>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { getNowRouteMeta } from '@/utils/routerTools'
import { usePageStore } from '@/store/pageStore'
import { onMounted } from 'vue'

const pageStore = usePageStore()
const router = useRouter()
onMounted(() => {
  getNowRouteMeta(router)
  pageStore.$state.nowPageMeta.push('2233')
})


pageStore.$subscribe((args, state) => {
  console.log('%c pageStore Change ', 'color: white; background-color: #2274A5', args, state)
})

</script>

<style scoped>
.pages-home {
}
</style>
