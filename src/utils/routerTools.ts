import { Router } from "vue-router";

export function getNowRouteMeta(router: Router) {
  console.log('查询到的路由', router.currentRoute.value.meta)
}
