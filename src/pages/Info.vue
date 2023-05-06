<template>
  <Nav />
  <div class="flex min-h-screen flex-col items-center justify-between bg-cover bg-center bg-no-repeat" :style="backgroundStyle">
    <div>Info</div>
  </div>
</template>

<script setup lang="ts">
import Nav from '../components/Nav.vue'
import backgroundImage from '../assets/Main_BG_Greens.png'

const backgroundStyle = {
	backgroundImage: `url(${backgroundImage})`,
}
</script>
