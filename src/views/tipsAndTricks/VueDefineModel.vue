<template>
  <PageHeader title="Vue Define Model"></PageHeader>

  <div class="mb-6 tweak-1 text-base max-w-xl lg:max-w-full text-[#e1e1e1]" id="content">
    <p>
      When working with vue ( composition api), we , in lots of cases, need to do the
      `parent-children` <strong> 2 ways binding</strong>
    </p>

    <p>
      Before <a href="https://blog.vuejs.org/posts/vue-3-3" target="blank">Version 3.3</a> released, we need quite
      lot of work to do
    </p>

    <h1>Before</h1>
    <p>
      <ul>
        <li>
          declare a prop <pre>const props = defineProps(['modelValue'])</pre>
        </li>
        <li>
          emit a corresponding update:propName event when it intends to update the prop
          <pre>const emit = defineEmits(['update:modelValue'])</pre>
        </li>
      </ul>
    </p>

    <h1>After</h1>
    <p>
      <ul>
        <li>
          3.3 simplifies the usage with the new <pre>const modelValue = defineModel()</pre> macro. The macro automatically registers a prop, and returns a ref that can be directly mutated:
        </li>
      </ul>
    </p>

    <Parent></Parent>

    <h1>Conclusion</h1>
    <p>
      <ul>
        <li>
          You can see that if you type in either `Before` or `After` input, the `Result` are outputed the same, 2 ways binding works
        </li>

        <li>
          When you type in `Before`, `After` also reflect the changes to the `input`
        </li>

        <li>
          But when you type in `After` Or `Directly changed in parent`, `Before` doesnt reflect the changes, this making `defineModel` are more reasonable to use
        </li>

        <li>
          You can check the code of `parent` and `children` <a href="https://github.com/bachdx2812/my-coding-journey/tree/main/src/components/tipsAndTricks/vueDefineModel" target="_blank">here</a> for more details 
        </li>
      </ul>
    </p>
  </div>
</template>

<script setup>
import PageHeader from '@/components/layouts/PageHeader.vue'

import Parent from '@/components/tipsAndTricks/vueDefineModel/Parent.vue'
</script>
