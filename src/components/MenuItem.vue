<template>
  <div>
    <a :id="props.menu.id"></a>
    <header class="mt-10">
      <div class="text-sm title white leading-[1.1em] mb-0">
        <div class="leading-[64px]">
          <span class="text-4xl font-bold">
            <span class="mr-2 text-[#e1e1e1] tracking-tight font-serif">{{
              props.menu.title
            }}</span>
          </span>
        </div>
      </div>
      <div class="mt-2 text-[0.9rem] text-gray-300 leading-relaxed tracking-tight">
        {{ props.menu.description }}
      </div>
    </header>
    <div class="py-5 grid md:grid-cols-2 gap-10">
      <div class="mb-10" v-for="item in props.menu.items">
        <header>
          <div class="pt-3 text-lg title white leading-[1.1em] mb-0">
            <span class="pb-16 borderbottom leading-[24px]">
              <span class="text-[#e1e1e1] mr-2 font-serif font-bold"> {{ item.title }} </span>
            </span>
          </div>
        </header>
        <article class="mb-0">
          <div class="pt-5 pb-0 white col">
            <span class="text-gray-300 text-sm tracking-tight">
              {{ item.description }}
            </span>
            <div class="mt-5">
              <h4 class="mt-10"></h4>
              <table class="text-emerald-400 font-mono tracking-[-1px]">
                <tbody>
                  <tr v-for="(menu, index) in item.menus">
                    <td>
                      <span class="text-[#e1e1e1] mr-2"> {{ index }}: </span>
                    </td>
                    <td>
                      <router-link :to="menu.path">{{ menu.name }}</router-link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  menu: Object
})
</script>
