<template>
  <div class="mt-2 mb-20" id="content">
    <PageHeader title="Changelog"></PageHeader>

    <ChangeLogPeriodComponent
      v-for="changeLogPeriod in changeLogs"
      :key="changeLogPeriod.period"
      :change-log-period="changeLogPeriod"
    ></ChangeLogPeriodComponent>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Components
import PageHeader from '@/components/layouts/PageHeader.vue'
import ChangeLogPeriodComponent from '@/components/ChangeLogPeriodItem.vue'

import ChangeLogPeriodModel from '@/models/changeLogPeriod'

const changeLogs = ref([])

async function fetchList() {
  changeLogs.value = await ChangeLogPeriodModel.fetchList()
}

fetchList()
</script>
