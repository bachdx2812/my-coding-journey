<template>
  <header>
    <div class="pt-3 text-lg title white leading-[1.1em] mb-0">
      <span class="pb-16 borderbottom leading-[24px]">
        <span class="text-[#e1e1e1] mr-2 font-serif font-bold"> Input </span>
      </span>
    </div>
  </header>

  <article class="mb-0">
    <div class="pb-0 white col">
      <v-form @submit.prevent>
        <div class="mt-1 mb-1">
          <v-card>
            <v-card-title>
              <span class="text-gray-300 text-sm">
                Put the name of your desired `model` below
              </span>
            </v-card-title>
            <v-card-text>
              <v-text-field
                class="mt-1"
                label="Model Name"
                @update:modelValue="model.setName($event)"
              ></v-text-field>
            </v-card-text>
          </v-card>
        </div>

        <div class="mb-5" v-if="model.name">
          <v-card>
            <v-card-title>
              <span class="text-gray-300 text-sm"> Add Some Attributes </span>
              <span class="float-right">
                <v-btn
                  density="comfortable"
                  icon="mdi-plus"
                  size="small"
                  color="#37A47D"
                  @click="addNewAttribute"
                ></v-btn>
              </span>
            </v-card-title>

            <v-card v-for="attribute in model.attributes" :key="attribute.id">
              <v-card-text>
                <v-container>
                  <v-row fill-height fluid>
                    <v-col>
                      <v-text-field v-model="attribute.name" label="name"></v-text-field>
                    </v-col>

                    <v-col>
                      <v-combobox
                        v-model="attribute.type"
                        clearable
                        chips
                        label="type"
                        :items="types.map((t) => t.type)"
                      ></v-combobox>
                    </v-col>

                    <v-col>
                      <v-checkbox label="Nullable?" v-model="attribute.nullable"></v-checkbox>
                    </v-col>

                    <v-col>
                      <v-text-field v-model="attribute.defaultValue" label="default"></v-text-field>
                    </v-col>

                    <v-btn
                      class="float-right mt-6"
                      density="comfortable"
                      icon="mdi-delete"
                      size="small"
                      color="red-accent-4"
                      @click="removeAttribute(attribute)"
                    ></v-btn>
                  </v-row>
                </v-container>
              </v-card-text>
            </v-card>
          </v-card>
        </div>

        <v-btn type="submit" block class="mt-2" @click="generate">Generate</v-btn>
      </v-form>
    </div>
  </article>
</template>

<script setup>
const model = defineModel()

import types from '@/libs/generators/ruby/types'

function addNewAttribute() {
  model.value.addNewAttribute()
}

function removeAttribute(attribute) {
  model.value.removeAttribute(attribute)
}

async function generate() {
  await Promise.all([
    model.value.generateSchemaScript(),
    model.value.generateModelScript(),
    model.value.generateGraphqlInputScript(),
    model.value.generateGraphqlTypeScript()
  ])
}
</script>

<style scoped>
.remove-action {
  line-height: 3.5;
  display: inline-block;
  vertical-align: middle;
}
</style>
