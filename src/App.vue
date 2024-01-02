<template>
  <div class="px-10">
    <div class="flex flex-row flex-wrap px-3">
      <Sidebar></Sidebar>

      <section class="w-full xs:w-1/2 sm:w-2/3">
        <div class="mb-20">
          <RouterView />
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'

import Sidebar from '@/components/layouts/Sidebar.vue'
</script>
