<template>
  <Page useBackgroundImage>
    <div class="flex w-full flex-col items-center">
      <img class="my-8 h-40 w-full lg:mb-24" src="/BTP_isolated_black.svg">

      <p class="text-center text-lg font-semibold tracking-[0.5em] text-[#306D30] lg:text-2xl">
        A DAY OF HOUSE AND TECHNO
      </p>

      <div class="flex flex-col items-center rounded-md bg-white/25 p-2 lg:bg-transparent">
        <p class="my-16 text-4xl font-extrabold text-[#01150A]">
          LINEUP COMING SOON
        </p>
        <!-- <img class="mt-4 h-14" src="/Luttrell_black.svg">
        <p class="mb-4 hidden font-bold text-[#01150A] lg:mb-8 lg:block">
          SPECIAL SUNSET SET
        </p>

        <div class="flex w-2/3 flex-col items-center justify-between text-center lg:flex-row">
          <img class="mt-6 h-14 lg:mt-4 lg:w-1/3" src="/AZZECCA_black.svg">

          <div class="my-0 flex flex-col items-center lg:mx-16 lg:w-1/3">
            <img class="mt-4 h-20" src="/CharlesD_Black.svg">
            <p class="hidden lg:block">
              B2B
            </p>
            <img class="h-12 lg:mt-4" src="/Weska-Black.svg">
          </div>

          <img class="mt-4 h-14 lg:w-1/3" src="/embrz_black.svg">
        </div> -->
      </div>

      <a
        class="my-4 block rounded-full bg-[#306D30] px-4 py-2 lg:hidden" href="https://mydanceagenda.ticketsauce.com/e/beyond-the-pines-music-festival/tickets" target="_blank"
        rel="noopener noreferrer"
      >
        Buy Tickets
      </a>

      <ul class="flex list-disc text-center text-lg text-[#020502] lg:text-2xl">
        <li class="list-none">
          August 9th - 11th
        </li>
        <li class="mx-8">
          Chains Edge
        </li>
        <li>Ogilvie, MN</li>
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
