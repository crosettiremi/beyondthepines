<template>
  <div class="relative flex flex-col">
    <Nav />

    <section class="fog z-0">
      <div v-if="useBackgroundImage" class="fog-container pointer-events-none">
        <div class="fog-img fog-img-first" />
        <div class="fog-img fog-img-second" />
      </div>

      <div class="flex min-h-screen flex-col items-center justify-between bg-cover bg-center bg-no-repeat pt-20" :style="backgroundStyle">
        <slot />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import Nav from '../components/Nav.vue'
import backgroundImage from '../assets/Main_BG_Greens.png'

const props = defineProps<{ useBackgroundImage?: boolean }>()

const backgroundStyle = {
	backgroundImage: props.useBackgroundImage ? `url(${backgroundImage})` : 'linear-gradient(180deg, #E4E4E6 0%, #7C8C81 100%)',
}
</script>
