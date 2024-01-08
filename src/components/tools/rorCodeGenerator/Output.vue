<template>
  <div class="mb-10">
    <article class="mb-0">
      <div class="pt-5 pb-0 white col">
        <div class="mt-5">
          <h4 class="mt-10"></h4>

          <div class="pt-3 text-lg title white leading-[1.1em] mb-0">
            <span class="pb-16 borderbottom leading-[16px]">
              <span class="text-[#e1e1e1] mr-2 font-serif font-bold"> Schema File </span>

              <span class="float-right mt-3 ml-1">
                <v-btn
                  density="comfortable"
                  :icon="schemaScriptCopied ? 'mdi-check' : 'mdi-content-copy'"
                  size="small"
                  color="#37A47D"
                  @click="copySchemaScript"
                ></v-btn>

                <br />

                <v-btn
                  class="mt-1"
                  density="comfortable"
                  icon="mdi-content-save"
                  size="small"
                  color="#37A47D"
                  @click="saveFile(model.schemaFileName, model.schemaScript)"
                >
                </v-btn>
              </span>
            </span>

            <v-textarea
              auto-grow
              v-model="model.schemaScript"
              :label="model.schemaFileName"
            ></v-textarea>
          </div>

          <div class="pt-3 text-lg title white leading-[1.1em] mb-0">
            <span class="pb-16 borderbottom leading-[16px]">
              <span class="text-[#e1e1e1] mr-2 font-serif font-bold"> Model File </span>

              <span class="float-right mt-3 ml-1">
                <v-btn
                  density="comfortable"
                  :icon="modelScriptCopied ? 'mdi-check' : 'mdi-content-copy'"
                  size="small"
                  color="#37A47D"
                  @click="copyModelScript"
                ></v-btn>

                <br />

                <v-btn
                  class="mt-1"
                  density="comfortable"
                  icon="mdi-content-save"
                  size="small"
                  color="#37A47D"
                  @click="saveFile(model.modelFileName, model.modelScript)"
                >
                </v-btn>
              </span>
            </span>

            <v-textarea
              auto-grow
              v-model="model.modelScript"
              :label="model.modelFileName"
            ></v-textarea>
          </div>

          <div class="pt-3 text-lg title white leading-[1.1em] mb-0">
            <span class="pb-16 borderbottom leading-[16px]">
              <span class="text-[#e1e1e1] mr-2 font-serif font-bold"> Graphql Input File </span>

              <span class="float-right mt-3 ml-1">
                <v-btn
                  density="comfortable"
                  :icon="grapqlInputScriptCopied ? 'mdi-check' : 'mdi-content-copy'"
                  size="small"
                  color="#37A47D"
                  @click="copyGrapqlInputScript"
                ></v-btn>

                <br />

                <v-btn
                  class="mt-1"
                  density="comfortable"
                  icon="mdi-content-save"
                  size="small"
                  color="#37A47D"
                  @click="saveFile(model.graphqlInputFileName, model.graphqlInputScript)"
                >
                </v-btn>
              </span>
            </span>

            <v-textarea
              auto-grow
              v-model="model.graphqlInputScript"
              :label="model.graphqlInputFileName"
            ></v-textarea>
          </div>

          <div class="pt-3 text-lg title white leading-[1.1em] mb-0">
            <span class="pb-16 borderbottom leading-[16px]">
              <span class="text-[#e1e1e1] mr-2 font-serif font-bold"> Graphql Type File </span>

              <span class="float-right mt-3 ml-1">
                <v-btn
                  density="comfortable"
                  :icon="grapqlTypeScriptCopied ? 'mdi-check' : 'mdi-content-copy'"
                  size="small"
                  color="#37A47D"
                  @click="copyGrapqlTypeScript"
                ></v-btn>

                <br />

                <v-btn
                  class="mt-1"
                  density="comfortable"
                  icon="mdi-content-save"
                  size="small"
                  color="#37A47D"
                  @click="saveFile(model.graphqlTypeFileName, model.graphqlTypeScript)"
                >
                </v-btn>
              </span>
            </span>

            <v-textarea
              auto-grow
              v-model="model.graphqlTypeScript"
              :label="model.graphqlTypeFileName"
            ></v-textarea>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useClipboard } from '@vueuse/core'

import { saveAs } from 'file-saver'

function saveFile(fileName, fileContent) {
  const blob = new Blob([fileContent], { type: 'text/plain;charset=utf-8' })
  saveAs(blob, fileName)
}

const model = defineModel()
const { copy } = useClipboard()

const schemaScriptCopied = ref(false)

async function copySchemaScript() {
  await copy(model.value.schemaScript)
  schemaScriptCopied.value = true

  await new Promise((r) => setTimeout(r, 1500))

  schemaScriptCopied.value = false
}

const modelScriptCopied = ref(false)
async function copyModelScript() {
  await copy(model.value.modelScript)
  modelScriptCopied.value = true

  await new Promise((r) => setTimeout(r, 1500))

  schemaScriptCopied.value = false
}

const grapqlInputScriptCopied = ref(false)
async function copyGrapqlInputScript() {
  await copy(model.value.graphqlInputScript)
  grapqlInputScriptCopied.value = true

  await new Promise((r) => setTimeout(r, 1500))

  grapqlInputScriptCopied.value = false
}

const grapqlTypeScriptCopied = ref(false)
async function copyGrapqlTypeScript() {
  await copy(model.value.graphqlTypeScript)
  grapqlTypeScriptCopied.value = true

  await new Promise((r) => setTimeout(r, 1500))

  grapqlTypeScriptCopied.value = false
}
</script>
