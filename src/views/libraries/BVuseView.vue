<template>
  <PageHeader title="BVuse, a VueJS Library"></PageHeader>

  <div>
    <header class="mt-10">
      <div class="text-sm title white leading-[1.1em] mb-0">
        <div class="leading-[64px]">
          <span class="text-4xl font-bold">
            <span class="mr-2 text-[#e1e1e1] tracking-tight font-serif">
              A collection of VueJS composables ( Inspired by
              <a href="https://vueuse.org/">VueUse</a> )
            </span>
          </span>
        </div>
      </div>
      <div class="mt-2 text-[0.9rem] text-gray-300 leading-relaxed tracking-tight">
        I made this `library` to use in my daily projects and also can help my collagues with their
        codes.
      </div>
    </header>

    <div class="py-5 grid md:grid-cols-1 gap-10">
      <div class="mb-5">
        <article class="mb-0">
          <div class="pt-5 pb-0 white col">
            <span class="text-gray-300 text-sm tracking-tight">
              Here are short summary of the functions that this library provides
            </span>

            <BVuseItem v-for="item in functions" :item="item"></BVuseItem>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import PageHeader from '@/components/layouts/PageHeader.vue'
import BVuseItem from '@/components/libraries/b-vuse/Item.vue'

const functions = ref([
  {
    title: 'useBreadcrumb',
    github: 'https://github.com/bachdx2812/b-vuse?tab=readme-ov-file#usebreadcrumb',
    path: '/libraries/b-vuse#useBreadcrumb',
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
    path: '/libraries/b-vuse#useQuery',
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

<style scoped>
a {
  color: var(--c-blue);
}
</style>
