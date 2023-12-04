<script setup></script>

<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <v-sheet width="600" class="mx-auto">
          <v-form @submit.prevent>
            <v-row>
              <v-text-field v-model="model.name" label="Model name"></v-text-field>
            </v-row>

            <v-row>
              <v-btn type="button" block class="mt-2" @click="addNewAttribute">Add Attribute</v-btn>
            </v-row>

            <div v-for="attribute in model.attributes">
              <v-row>
                <v-col>
                  <v-text-field v-model="attribute.name" label="Attribute name"></v-text-field>
                </v-col>

                <v-col>
                  <v-text-field v-model="attribute.type" label="Attribute name"></v-text-field>
                </v-col>
              </v-row>
            </div>

            <v-btn type="submit" block class="mt-2" @click="generateSchemaFile">Submit</v-btn>
          </v-form>
        </v-sheet>
      </v-col>

      <v-col>
        <v-textarea v-model="result" label="Result"></v-textarea>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, reactive } from 'vue'

import ModelAttribute from '@/libs/generators/ruby/modelAttribute'
import Model from '@/libs/generators/ruby/model'

const model = reactive(new Model('UserBook', []))
const result = ref('')

function addNewAttribute() {
  model.addNewAttribute()
}

async function generateSchemaFile() {
  result.value = await model.generateSchemaFile()

  console.log(result.value)
}
</script>
