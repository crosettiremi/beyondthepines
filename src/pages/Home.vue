<template>
  <Nav />

  <section class="fog">
    <div class="fog-container">
      <div class="fog-img fog-img-first" />
      <div class="fog-img fog-img-second" />
    </div>

    <div class="flex min-h-screen flex-col items-center justify-between bg-cover bg-center bg-no-repeat" :style="backgroundStyle">
      <img class="mb-4 h-40 w-full bg-white" href="">

      <div class="mb-20 flex w-full flex-col items-center">
        <p class="text-2xl font-semibold tracking-[0.5em] text-[#306D30]">
          A DAY OF HOUSE AND TECHNO
        </p>

        <h1 class="mt-8 text-8xl font-bold text-[#09301D]">
          Luttrell
        </h1>
        <p class="mb-8 font-bold text-[#01150A]">
          SPECIAL SUNSET SET
        </p>

        <div class="flex w-1/2 flex-col justify-between text-center lg:flex-row">
          <h2 class="flex-1 text-5xl font-semibold text-[#09301D]">
            AZZECCA
          </h2>

          <div class="my-6 flex flex-auto flex-col items-center lg:my-0">
            <h2 class="text-5xl font-semibold text-[#09301D]">
              CHARLES
            </h2>
            <p>B2B</p>
            <h2 class="text-5xl font-semibold text-[#09301D]">
              WESKA
            </h2>
          </div>

          <h2 class="flex-1 text-5xl font-semibold text-[#09301D]">
            EMBRZ
          </h2>
        </div>

        <ul class="mt-8 flex list-disc text-2xl text-[#020502]">
          <li class="list-none">
            July 8th
          </li>
          <li class="mx-8">
            Blue Ribbon Pines
          </li>
          <li>East Bethel, MN</li>
        </ul>
      </div>

      <p class="mb-4 text-lg tracking-[0.75em] text-[#92A09B]">
        DANCE AGENDA PRESENTS
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import Nav from '../components/Nav.vue'
import backgroundImage from '../assets/Main_BG_Greens.png'

const backgroundStyle = {
	backgroundImage: `url(${backgroundImage})`,
}
</script>
