<template>
  <PageHeader title="Welcome To My Coding Journey"></PageHeader>
  <MenuItem v-for="menu in menus" :menu="menu"></MenuItem>
</template>

<script setup>
import menus from '@/constants/menus'

import PageHeader from '@/components/layouts/PageHeader.vue'
import MenuItem from '@/components/MenuItem.vue'
</script>
