<template>
	<div class="w-full mx-auto max-w-7xl px-6 py-20 sm:py-32 lg:px-8 lg:py-40">
		<div class="mx-auto max-w-4xl divide-y divide-gray-900/10">
			<h2 class="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
			<dl class="mt-10 space-y-6 divide-y divide-gray-900/10">
				<Disclosure as="div" v-for="faq in faqs" :key="faq.question" class="pt-6" v-slot="{ open }">
					<dt>
						<DisclosureButton class="flex w-full items-start justify-between text-left text-gray-900">
							<span class="text-base font-semibold leading-7">{{ faq.question }}</span>
							<span class="ml-6 flex h-7 items-center">
								<PlusSmallIcon v-if="!open" class="h-6 w-6" aria-hidden="true" />
								<MinusSmallIcon v-else class="h-6 w-6" aria-hidden="true" />
							</span>
						</DisclosureButton>
					</dt>
					<DisclosurePanel as="dd" class="mt-2 pr-12">
						<p class="text-base leading-7 text-gray-600">{{ faq.answer }}</p>
					</DisclosurePanel>
				</Disclosure>
			</dl>
		</div>
	</div>
</template>

<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/vue/24/outline'

const faqs = [
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
	{
    question: "How do you make holy water?",
    answer:
      "You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aut tempora vitae odio inventore fuga aliquam nostrum quod porro. Delectus quia facere id sequi expedita natus.",
  },
	{
    question: "What do you call someone with no body and no nose?",
    answer:
      "Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptas ipsa quia excepturi, quibusdam natus exercitationem sapiente tempore labore voluptatem.",
  },
  // More questions...
	// location
	// directions
	// parking
	// hours
	// contact
	// food/drink
	// bathrooms
	// host
	// activities
	// admission
	// map details
	// etc.
]
</script>
