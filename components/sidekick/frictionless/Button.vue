<script setup lang="ts">
defineProps({
  blank: {
    type: Boolean,
    required: false,
    default: false
  },
  href: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div>
    <NuxtLink :to="href" :target="blank ? '_blank' : undefined" class="btn-primary w-64 py-4 px-8 rounded-xl bg-action cursor-pointer box-shadow-lower ease duration-200 hover:box-shadow-both hover:bg-tertiary text-center text-shadow-none font-primary uppercase text-white font-bold">
      <slot />
    </NuxtLink>
  </div>
</template>

  <!-- <div class="btn-primary w-48 p-4 mt-16 rounded-xl bg-action cursor-pointer box-shadow-lower ease duration-200 hover:box-shadow-both hover:bg-tertiary text-center text-shadow-none font-primary uppercase text-white font-bold">
    <NuxtLink to="/get-started">
      Get Started
    </NuxtLink>
  </div> -->

<style scoped>
.ButtonLink {
  position: relative;
  padding: 5px 15px;
  color: white;
  background-image: linear-gradient(160deg, #059669, #059669);
  border-radius: 0.3rem;
  cursor: pointer;
  user-select: none;
  transition: box-shadow 0.6s;
}
.ButtonLink:hover {
  box-shadow: 0 0 60px 2px #059669, 0.5rem 0.5rem 30px #059669;
}
.ButtonLink:after {
  content: '';
  position: absolute;
  top: 2px;
  right: 2px;
  bottom: 2px;
  left: 2px;
  border-radius: 0.75rem;
  pointer-events: none;
}
</style>
