<template>
  <div class="bg-primary p-8 rounded-lg shadow-md flex flex-col md:flex-row items-center justify-between gap-4">
    <label for="numero-ponto" class="text-white text-base md:text-lg flex-shrink-0">
      Deseja adicionar mais alguma mídia? Digite aqui o número do ponto:
    </label>
    <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
      <input 
        type="text" 
        id="numero-ponto"
        placeholder="Número do Ponto" 
        class="focus:ring-secondary flex-1 min-w-[150px] rounded-xl px-3 py-3 bg-[#fff] text-sm placeholder-gray-500 focus:outline-none focus:ring-2 w-full transition-all duration-200"
      >
      <button class="bg-green-500 text-white font-bold py-3 px-6 rounded-xl hover:bg-green-600 transition-colors duration-200 w-full sm:w-auto text-sm sm:text-base">ADICIONAR PONTO</button>
    </div>
  </div>
</template>
