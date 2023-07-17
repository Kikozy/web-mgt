import { defineStore } from 'pinia'

export const usePageStore = defineStore('pageStore', {
  state() {
    return {
      nowPageMeta: <Array<String>>[],
      nowPagePath: <Array<String>>[],//存放路径
    }
  },
})
