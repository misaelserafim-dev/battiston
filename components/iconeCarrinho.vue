<template>
    <button class="bg-nu_yellow rounded-full p-2 relative" aria-label="Abrir carrinho">
        <NuxtLink to="/orcamento" class="text-white">
            <img src="@/public/assets/ico-car.png" alt="ícone do carrinho" />
            <span v-if="cartCount > 0" class="absolute -top-1 -right-1 bg-secondary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold animate-pulse">
            {{ cartCount }}
            </span>
        </NuxtLink>
    </button>
</template>

<script setup>
  import { useCart } from '@/composables/useCart'
  const { cartCount } = useCart()
</script>