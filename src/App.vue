<template>
  <div class="px-10">
    <div class="flex flex-row flex-wrap px-3">
      <Sidebar></Sidebar>

      <section class="w-full xs:w-1/2 sm:w-2/3">
        <div class="mb-20">
          <RouterView />

          <div class="justify-center ml-16">
            <v-progress-circular v-if="loading" indeterminate color="amber"></v-progress-circular>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import { storeToRefs } from 'pinia'

import { useGlobalStore } from '@/stores/global'

import Sidebar from '@/components/layouts/Sidebar.vue'

const globalStore = useGlobalStore()
const { loading } = storeToRefs(globalStore)

import { watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

watch(
  () => route.fullPath,
  async () => {
    globalStore.resetSidebarMenus()
  }
)

globalStore.resetSidebarMenus()
</script>
