<template>
  <div class="mb-10">
    <header>
      <div class="pt-3 text-lg title white leading-[1.1em] mb-0">
        <span class="pb-16 borderbottom leading-[24px]">
          <span class="text-[#e1e1e1] mr-2 font-serif font-bold"> Input </span>
        </span>
      </div>
    </header>

    <article class="mb-0">
      <div class="pt-5 pb-0 white col">
        <v-form @submit.prevent>
          <div class="mt-1 mb-1">
            <span class="text-gray-300 text-md"> Put the name of your desired `model` below </span>

            <v-text-field
              class="mt-1"
              label="Model Name"
              @update:modelValue="model.setName($event)"
            ></v-text-field>
          </div>

          <div class="mb-5" v-if="model.name">
            <div class="text-gray-300 text-md mb-3">
              <span>Add Some Attributes</span>

              <span class="float-right">
                <v-btn
                  type="button"
                  icon="mdi-plus"
                  size="x-small"
                  block
                  @click="addNewAttribute"
                ></v-btn>
              </span>
            </div>

            <v-card v-for="attribute in model.attributes" :key="attribute.id" class="mt-2">
              <v-card-text>
                <v-text-field v-model="attribute.name" label="Attribute name"></v-text-field>

                <v-combobox
                  v-model="attribute.type"
                  clearable
                  chips
                  label="Attribute name"
                  :items="['string', 'text', 'bigint', 'integer', 'boolean']"
                ></v-combobox>
                <!-- TODO: move TYPES to another place -->
              </v-card-text>

              <v-card-actions class="float-right">
                <v-btn
                  type="button"
                  icon="mdi-delete"
                  size="x-small"
                  @click="removeAttribute(attribute)"
                ></v-btn>
              </v-card-actions>
            </v-card>
          </div>

          <v-btn type="submit" block class="mt-2" @click="generate">Generate</v-btn>
        </v-form>
      </div>
    </article>
  </div>
</template>

<script setup>
const model = defineModel()

function addNewAttribute() {
  model.value.addNewAttribute()
}

function removeAttribute(attribute) {
  model.value.removeAttribute(attribute)
}

async function generate() {
  await model.value.generateSchemaScript()
  await model.value.generateModelScript()
}
</script>

<style scoped>
.remove-action {
  line-height: 3.5;
  display: inline-block;
  vertical-align: middle;
}
</style>
