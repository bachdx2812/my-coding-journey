<template>
  <section class="top-0 sm:w-1/3 xs:w-1/2">
    <header class="p-6 pl-0 sm:!pl-6">
      <div class="pt-6">
        <Logo></Logo>
      </div>
      <div class="mt-6 text-gray-400">
        <p class="mt-5 mb-5 font-mono text-sm">/* My web <br />development <br />having fun */</p>
      </div>
      <div class="mt-0 text-emerald-400 font-mono text-sm">
        <p><a href="/changelog">[changelog]</a></p>
        <p><a href="/roadmap">[roadmap]</a></p>
        <p><a href="/about">[about]</a></p>
      </div>
      <div class="mt-6">
        <table class="text-sm tracking-[-0.5px]">
          <tbody>
            <tr>
              <td><span class="text-[#e1e1e1] mr-2 font-mono"> 1: </span></td>
              <td>
                <router-link class="text-white hover:underline" to="/tools_and_libraries"
                  >Tools And Libraries</router-link
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="mt-10 text-gray-400 text-xs">
        <p>Copyright 2023</p>
        <p>My Coding Journey</p>
      </div>
    </header>
  </section>
</template>

<script setup>
import Logo from '@/components/layouts/Logo.vue'
</script>
