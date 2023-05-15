<template>
  <header class="absolute bg-[#0D2A10] w-full z-10">
    <nav class="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
      <router-link to="/" class="-m-1.5 p-1.5">
        <span class="sr-only">Beyond The Pines</span>
        <img class="h-10 w-auto text-purple-500" src="/DA_Logo.svg?color=green&shade=600" alt="">
      </router-link>

      <div class="flex lg:hidden">
        <button type="button" class="-m-2.5 inline-flex cursor-pointer items-center justify-center rounded-md p-2.5 text-white" @click="mobileMenuOpen = true">
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      <div class="hidden lg:flex lg:gap-x-12">
				<div
					v-for="item in navigation"
					:key="item.name"
				>
					<router-link
						v-if="!item.external"
						:to="item.disabled ? '#' : item.href"
						@click="handleClick(item.disabled, $event)"
						class="text-sm font-semibold leading-6"
						:class="item.disabled ? 'text-gray-400 cursor-not-allowed' : 'text-white'"
					>
						{{ item.name }}
					</router-link>
					<a
						v-else
						:href="item.disabled ? '/' : item.href"
						@click="handleClick(item.disabled, $event)"
						class="text-sm font-semibold leading-6"
						:class="item.disabled ? 'text-gray-400 cursor-not-allowed' : 'text-white'"
						target="_blank"
        		rel="noopener noreferrer"
					>
						{{ item.name }}
					</a>
				</div>
      </div>
    </nav>

    <Dialog as="div" class="lg:hidden" :open="mobileMenuOpen" @close="mobileMenuOpen = false">
      <div class="fixed inset-0 z-10" />
      <DialogPanel class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto sm:max-w-sm sm:ring-1 sm:ring-gray-900/10" :style="gradientStyle">
        <div class="flex items-center justify-between bg-[#0D2A10] p-6">
          <router-link to="/" class="-m-1.5 p-1.5">
            <span class="sr-only">Beyond the Pines</span>
            <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=green&shade=600" alt="">
          </router-link>
          <button type="button" class="-m-2.5 cursor-pointer rounded-md p-2.5" @click="mobileMenuOpen = false">
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="px-6 flow-root">
          <div class="space-y-2 py-6">
            <div v-for="item in navigation" :key="item.name"
						>
							<router-link
								v-if="!item.external"
								:to="item.disabled ? '#' : item.href"
								@click="handleClick(item.disabled, $event)"
								class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50"
								:class="item.disabled ? 'text-gray-400' : 'text-gray-900 cursor-pointer'"
							>
								{{ item.name }}
							</router-link>
							<a
								v-else
								:href="item.disabled ? '/' : item.href"
								@click="handleClick(item.disabled, $event)"
								class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50"
								:class="item.disabled ? 'text-gray-400' : 'text-gray-900 cursor-pointer'"
								target="_blank"
        				rel="noopener noreferrer"
							>
								{{ item.name }}
							</a>
						</div>
          </div>
        </div>
				<img src="../assets/mainbg_front_trees.png" alt="Your Image Description" class="absolute bottom-0 left-1/2 transform -translate-x-1/2" />
      </DialogPanel>
    </Dialog>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
	{ name: 'Home', href: '/', disabled: false, external: false },
	{ name: 'Info', href: '/info', disabled: false, external: false },
	{ name: 'Map', href: '/', disabled: true, external: false },
	{ name: 'Ticket', href: 'https://mydanceagenda.ticketsauce.com/e/beyond-the-pines-music-festival/tickets', disabled: false, external: true },
]

const mobileMenuOpen = ref(false)

const gradientStyle = ref({
	background: 'linear-gradient(0deg, #7F9387, #D0D0D2, #D0D0D2)',
})

const handleClick = (disabled: boolean, event: MouseEvent) => {
  if (disabled) {
    event.preventDefault()
  }
}
</script>
