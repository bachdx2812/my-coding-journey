<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col v-for="item in supportedLanguages" :key="item.text" cols="auto">
        <v-card
          class="mx-auto"
          max-width="344"
          :title="item.name"
          color="#E0115F"
          :prepend-icon="item.icon"
          :href="item.path"
        >
          <v-card-text>{{ item.description }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>
import supportedLanguages from '../constants/supportedLanguages'
</script>
