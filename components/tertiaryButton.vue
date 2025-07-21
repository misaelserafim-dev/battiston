<template>
  <button
    class="px-4 py-2 border rounded-full text-xs font-bold transition-colors duration-300 flex items-center justify-center h-9"
    :class="[
      'border-[#BBBBBB] text-[#333333]',
      'hover:bg-primary hover:text-white',
    ]"
  >
    <slot />
  </button>
</template>