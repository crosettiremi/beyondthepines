<template>
  <Nav />

  <section class="fog">
    <div class="fog-container pointer-events-none">
      <div class="fog-img fog-img-first" />
      <div class="fog-img fog-img-second" />
    </div>

    <div class="flex min-h-screen flex-col items-center justify-between bg-cover bg-center bg-no-repeat" :style="backgroundStyle">
      <slot />
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
