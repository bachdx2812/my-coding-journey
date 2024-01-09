<template>
  <div class="mt-2 mb-20" id="content">
    <PageHeader title="Tips And Tricks"></PageHeader>

    <table class="text-emerald-400 tracking-[-0.5px]">
      <tbody>
        <tr v-for="(item, index) in tipsAndTricks">
          <td>
            <span class="mr-2 font-mono"> {{ index }}: </span>
          </td>
          <td>
            <router-link :to="item.path">{{ item.title }}</router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import PageHeader from '@/components/layouts/PageHeader.vue'

import tipsAndTricks from '@/constants/tipsAndTricks'
</script>
