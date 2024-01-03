<template>
  <div class="mb-10">
    <header>
      <div class="pt-3 text-lg title white leading-[1.1em] mb-0">
        <span class="pb-16 borderbottom leading-[24px]">
          <span class="text-[#e1e1e1] mr-2 font-serif font-bold"> Output </span>
        </span>
      </div>
    </header>
    <article class="mb-0">
      <div class="pt-5 pb-0 white col">
        <span class="text-gray-300 text-sm tracking-tight">
          Auto generated `migration schema file`
        </span>

        <div class="mt-5">
          <h4 class="mt-10"></h4>
          <v-container>
            <v-row>
              <v-textarea
                auto-grow
                v-model="model.schemaScript"
                :label="`${model.tableName}.schema`"
              ></v-textarea>
            </v-row>

            <v-row>
              <v-textarea
                auto-grow
                v-model="model.modelScript"
                :label="`${model.modelFileName}.rb`"
              ></v-textarea>
            </v-row>
          </v-container>
        </div>
      </div>
    </article>
  </div>
</template>

<script setup>
const model = defineModel()
</script>
