<template>
  <div>
    <header class="mt-10">
      <div class="text-sm title white leading-[1.1em] mb-0">
        <div class="leading-[64px]">
          <span class="text-4xl font-bold">
            <span class="mr-2 text-[#e1e1e1] tracking-tight font-serif">
              b-vuse ( Inspired by <a href="https://vueuse.org/">VueUse</a> )
            </span>
          </span>
        </div>
      </div>
      <div class="mt-2 text-[0.9rem] text-gray-300 leading-relaxed tracking-tight">
        I made this `library` to use in my daily projects and also can help my collagues with their
        codes. Check for more details: <a href="https://github.com/bachdx2812/b-vuse">Github</a>
      </div>
    </header>
    <div class="py-5 grid md:grid-cols-1 gap-10">
      <div class="mb-10">
        <header>
          <div class="pt-3 text-lg title white leading-[1.1em] mb-0">
            <span class="pb-16 borderbottom leading-[24px]">
              <span class="text-[#e1e1e1] mr-2 font-serif font-bold"> Core Functions </span>
            </span>
          </div>
        </header>
        <article class="mb-0">
          <div class="pt-5 pb-0 white col">
            <span class="text-gray-300 text-sm tracking-tight">
              Here are short summary of the functions that this library provides
            </span>
            <div class="mt-5">
              <h4 class="mt-10"></h4>
              <table class="text-emerald-400 font-mono tracking-[-1px]">
                <tbody>
                  <tr v-for="(item, index) in functions">
                    <td>
                      <span class="text-[#e1e1e1] mr-2">{{ index + 1 }}: </span>
                    </td>
                    <td>
                      <a class="hover:underline" :href="item.url" target="_blank">{{
                        item.name
                      }}</a>
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
const functions = [
  {
    name: 'useBreadcrumb',
    url: 'https://github.com/bachdx2812/b-vuse?tab=readme-ov-file#usebreadcrumb'
  },
  {
    name: 'useQuery',
    url: 'https://github.com/bachdx2812/b-vuse?tab=readme-ov-file#usequery'
  }
]
</script>
