<template>
  <PageHeader title="My Self Made Tools And Libraries" />

  <v-row align="center" justify="center">
    <v-col v-for="item in toolsAndLibraries" :key="item.text" cols="auto">
      <v-card
        class="mx-auto"
        max-width="344"
        min-height="150"
        :title="item.name"
        :color="item.color"
        :prepend-icon="item.icon"
        :href="item.path"
      >
        <v-card-text>{{ item.description }}</v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import PageHeader from '@/components/layouts/PageHeader.vue'

import toolsAndLibraries from '@/constants/toolsAndLibraries'
</script>
