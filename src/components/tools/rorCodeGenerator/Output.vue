<template>
  <div class="mb-10">
    <article class="mb-0">
      <div class="pt-5 pb-0 white col">
        <div class="mt-5">
          <h4 class="mt-10"></h4>

          <div class="pt-3 text-lg title white leading-[1.1em] mb-0">
            <span class="pb-16 borderbottom leading-[16px]">
              <span class="text-[#e1e1e1] mr-2 font-serif font-bold"> Schema File </span>
            </span>
            <v-textarea
              auto-grow
              v-model="model.schemaScript"
              :label="`${model.tableName}.schema`"
            ></v-textarea>
          </div>

          <div class="pt-3 text-lg title white leading-[0.8em] mb-0">
            <span class="pb-16 borderbottom leading-[16px]">
              <span class="text-[#e1e1e1] mr-2 font-serif font-bold"> Model File </span>
            </span>

            <v-textarea
              auto-grow
              v-model="model.modelScript"
              :label="`${model.modelFileName}.rb`"
            ></v-textarea>
          </div>

          <div class="pt-3 text-lg title white leading-[1.1em] mb-0">
            <span class="pb-16 borderbottom leading-[16px]">
              <span class="text-[#e1e1e1] mr-2 font-serif font-bold"> Graphql Input File </span>
            </span>
            <v-textarea
              auto-grow
              v-model="model.graphqlInputScript"
              :label="`${model.graphqlInputFileName}.rb`"
            ></v-textarea>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script setup>
const model = defineModel()
</script>
