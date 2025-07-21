<template>
  <div>
    <header class="sticky top-0 bg-white shadow-sm z-50">
      <div class="container mx-auto px-4 py-3 flex items-center md:justify-between">
        <!-- Logo do site -->
        <LogoSite />

        <!-- Carrinho no mobile -->
        <div class="md:hidden relative ml-auto md:ml-0 mr-4">
          <IconeCarrinho />
        </div>

        <!-- Botão mobile (hambúrguer) -->
        <button class="md:hidden text-blue-900 focus:outline-none" @click="mobileMenuOpen = true" aria-label="Abrir menu">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <!-- Menu + Carrinho + Botão (desktop) -->
        <div class="hidden md:flex items-center space-x-6 ml-auto">
          <Menu class="primary-menu flex space-x-6 text-sm font-medium text-gray-800" />
          <IconeCarrinho class="hidden md:block" />
          <PrimaryButton>Mídia Kit</PrimaryButton>
        </div>
      </div>

      <!-- Menu mobile deslizante da direita -->
      <transition name="slide-right">
        <div v-if="mobileMenuOpen" class="fixed top-0 right-0 h-full w-full bg-white shadow-lg z-50 flex flex-col">
          <!-- Cabeçalho do menu com logo e botão fechar -->
          <div class="flex items-center justify-between px-4 py-3 border-b">
            <LogoSite />
            <button class="text-gray-700 focus:outline-none" @click="mobileMenuOpen = false" aria-label="Fechar menu">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <!-- Links do menu -->
          <Menu class="flex flex-col px-4 py-6 space-y-4 text-gray-800 font-medium text-base" @click.native="mobileMenuOpen = false" />
          <PrimaryButton class=" mx-4 self-start">Mídia Kit</PrimaryButton>
        </div>
      </transition>
    </header>

    <main class="flex-1">
      <slot />
    </main>

    <footer class="bg-primary py-6">
      <div class="container mx-auto px-4 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="text-white text-sm font-normal leading-tight tracking-normal text-center md:text-left">© Copyright Battiston Propaganda Ltda. Todos os direitos reservados</p>
        <font-awesome-icon :icon="['fab', 'instagram']" class="flex text-3xl text-nu_yellow w-[45px]"/>
      </div>
    </footer>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  const mobileMenuOpen = ref(false)
</script>

<style>
  .slide-right-enter-active,
  .slide-right-leave-active {
    transition: transform 0.3s ease;
  }
  .slide-right-enter-from,
  .slide-right-leave-to {
    transform: translateX(100%);
  }
  .slide-right-enter-to,
  .slide-right-leave-from {
    transform: translateX(0%);
  }
</style>
