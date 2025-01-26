<script setup>
import { Check } from 'lucide-vue-next'

const tiers = [
  {
    name: 'Hobby',
    id: 'tier-hobby',
    href: '#',
    priceMonthly: '$29',
    description: 'The perfect plan if you\'re just getting started with our product.',
    features: ['25 products', 'Up to 10,000 subscribers', 'Advanced analytics', '24-hour support response time'],
    featured: false,
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    href: '#',
    priceMonthly: '$99',
    description: 'Dedicated support and infrastructure for your company.',
    features: [
      'Unlimited products',
      // 'Unlimited subscribers',
      'Advanced analytics',
      'Dedicated support representative',
      'Marketing automations',
      'Custom integrations',
    ],
    featured: true,
  },
]
</script>

<template>
  <div class="relative isolate bg-white ">
    <div class="mx-auto max-w-4xl text-center mb-10">
      <h2 class="text-base/7 font-semibold text-indigo-600">
        Pricing
      </h2>
      <p class="mt-2 text-balance font-semibold tracking-tight text-gray-900 text-xl">
        Choose the right plan for you
      </p>
    </div>
    <div class="mx-auto grid max-w-lg grid-cols-1 items-center gap-y-6  sm:gap-y-0 lg:max-w-2xl lg:grid-cols-2">
      <div v-for="(tier, tierIdx) in tiers" :key="tier.id" class="rounded-3xl p-4 ring-1 ring-gray-900/10" :class="[tier.featured ? 'relative bg-gray-900 shadow-2xl' : 'bg-white/60 sm:mx-8 lg:mx-0', tier.featured ? '' : tierIdx === 0 ? 'rounded-t-3xl sm:rounded-b-none lg:rounded-bl-3xl lg:rounded-tr-none' : 'sm:rounded-t-none lg:rounded-bl-none lg:rounded-tr-3xl']">
        <h3 :id="tier.id" class="text-base/7 font-semibold" :class="[tier.featured ? 'text-indigo-400' : 'text-indigo-600']">
          {{ tier.name }}
        </h3>
        <p class="mt-2 flex items-baseline gap-x-2">
          <span class="text-5xl font-semibold tracking-tight" :class="[tier.featured ? 'text-white' : 'text-gray-900']">{{ tier.priceMonthly }}</span>
          <span class="text-base" :class="[tier.featured ? 'text-gray-400' : 'text-gray-500']">/month</span>
        </p>
        <p class="mt-4 text-base/7" :class="[tier.featured ? 'text-gray-300' : 'text-gray-600']">
          {{ tier.description }}
        </p>
        <ul role="list" class="mt-4 space-y-3 text-sm/6 sm:mt-4" :class="[tier.featured ? 'text-gray-300' : 'text-gray-600']">
          <li v-for="feature in tier.features" :key="feature" class="flex gap-x-3">
            <Check class="h-6 w-5 flex-none" :class="[tier.featured ? 'text-indigo-400' : 'text-indigo-600']" aria-hidden="true" />
            {{ feature }}
          </li>
        </ul>
        <a :href="tier.href" :aria-describedby="tier.id" class="mt-4 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-6" :class="[tier.featured ? 'bg-indigo-500 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-indigo-500' : 'text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 focus-visible:outline-indigo-600']">Get started today</a>
      </div>
    </div>
  </div>
</template>
