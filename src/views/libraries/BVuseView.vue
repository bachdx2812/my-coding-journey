<template>
  <PageHeader title="BVuse, a VueJS Library"></PageHeader>

  <BVuseSummary v-model="functions"></BVuseSummary>

  <BVuseItem v-for="item in functions" :item="item"></BVuseItem>
</template>

<script setup>
import { ref } from 'vue'

import PageHeader from '@/components/layouts/PageHeader.vue'
import BVuseSummary from '@/components/libraries/b-vuse/Summary.vue'
import BVuseItem from '@/components/libraries/b-vuse/Item.vue'

const functions = ref([
  {
    title: 'useBreadcrumb',
    github: 'https://github.com/bachdx2812/b-vuse?tab=readme-ov-file#usebreadcrumb',
    path: '/tools/b-vuse#useBreadcrumb',
    active: false,
    demoCode: `import { useBreadcrumb } from "@bachdx/b-vuse";
        const { setBreadcrumb } = useBreadcrumb();

        setBreadcrumb({
          title: "User List",
          items: [
            {
              text: "User",
              href: "/users",
            },
            {
              text: "List",
              active: true,
            },
          ],
        });`
  },
  {
    title: 'useQuery',
    github: 'https://github.com/bachdx2812/b-vuse?tab=readme-ov-file#usequery',
    path: '/tools/b-vuse#useQuery',
    active: false,
    demoCode: `const { queryInput, resetQuery, updateQuery } = useQuery({ perPage: 15 });`
  }
])

import { useGlobalStore } from '@/stores/global'
const globalStore = useGlobalStore()

import { watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

watch(
  () => route.fullPath,
  async () => {
    globalStore.setSidebarMenus(functions.value)

    if (route.hash) {
      const activeMenu = functions.value.find((e) => `#${e.title}` == route.hash)

      if (activeMenu) {
        functions.value.forEach((item) => (item.active = false))
        activeMenu.active = true
      }
    }
  },
  { immediate: true }
)
</script>
