<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <v-sheet width="600" class="mx-auto">
          <v-form @submit.prevent>
            <v-row>
              <v-text-field
                label="Model name"
                @update:modelValue="model.setName($event)"
              ></v-text-field>
            </v-row>

            <v-row>
              <h2>Attributes</h2>

              <v-container v-for="attribute in model.attributes" :key="attribute.id">
                <v-row>
                  <v-col>
                    <v-text-field v-model="attribute.name" label="Attribute name"></v-text-field>
                  </v-col>

                  <v-col>
                    <v-combobox
                      v-model="attribute.type"
                      clearable
                      chips
                      label="Attribute name"
                      :items="['string', 'text', 'bigint', 'integer', 'boolean']"
                    ></v-combobox>
                    <!-- TODO: move TYPES to another place -->
                  </v-col>

                  <v-col>
                    <v-btn
                      type="button"
                      icon="mdi-delete"
                      @click="removeAttribute(attribute)"
                    ></v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </v-row>

            <v-row>
              <v-btn type="button" block @click="addNewAttribute">Add Attribute</v-btn>
            </v-row>

            <v-row>
              <v-btn type="submit" block class="mt-2" @click="generate">Submit</v-btn>
            </v-row>
          </v-form>
        </v-sheet>
      </v-col>

      <v-col>
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
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { reactive } from 'vue'

import Model from '@/libs/generators/ruby/model'

const model = reactive(new Model('', []))

function addNewAttribute() {
  model.addNewAttribute()
}

function removeAttribute(attribute) {
  model.removeAttribute(attribute)
}

async function generate() {
  await model.generateSchemaScript()
  await model.generateModelScript()
}

import { useBreadcrumb } from '@bachdx/b-vuse'
const { setBreadcrumb } = useBreadcrumb()

setBreadcrumb({
  title: 'Generator',
  items: [
    {
      text: 'Home Page',
      href: '/'
    },
    {
      text: 'Ruby On Rails',
      active: true
    }
  ]
})
</script>
