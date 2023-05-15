<template>
  <Page>
    <div class="flex w-full flex-col items-center">
      <img class="my-8 h-40 w-full lg:mb-24" src="/BTP_isolated_black.svg">

      <p class="text-center text-lg font-semibold tracking-[0.5em] text-[#306D30] lg:text-2xl">
        A DAY OF HOUSE AND TECHNO
      </p>

      <img class="mt-4 h-14" src="/Luttrell_black.svg">
      <p class="mb-4 hidden font-bold text-[#01150A] lg:mb-8 lg:block">
        SPECIAL SUNSET SET
      </p>

      <div class="flex w-1/2 flex-col justify-between text-center lg:flex-row">
        <img class="mt-6 h-14 flex-1 lg:mt-4" src="/AZZECCA_black.svg">

        <div class="my-0 flex flex-1 flex-col items-center">
          <img class="mt-4 h-14" src="/CharlesD_Black.svg">
          <p class="hidden lg:block">
            B2B
          </p>
          <img class="mt-4 h-12" src="/Weska-Black.svg">
        </div>

        <img class="mt-4 max-h-14 flex-1" src="/embrz_black.svg">
      </div>

      <a
        class="mt-4 block rounded-full bg-[#306D30] px-4 py-2 lg:hidden" href="https://mydanceagenda.ticketsauce.com/e/beyond-the-pines-music-festival/tickets" target="_blank"
        rel="noopener noreferrer"
      >
        Buy Tickets
      </a>

      <ul class="mt-12 flex list-disc text-center text-lg text-[#87998F] lg:text-2xl lg:text-[#020502]">
        <li class="list-none">
          July 8th
        </li>
        <li class="mx-8">
          Blue Ribbon Pines
        </li>
        <li>East Bethel, MN</li>
      </ul>
    </div>

    <p class="mb-4 text-center text-base tracking-[0.75em] text-[#92A09B] lg:text-lg">
      DANCE AGENDA PRESENTS
    </p>
  </Page>
</template>

<script setup lang="ts">
import Page from '../components/Page.vue'
</script>
