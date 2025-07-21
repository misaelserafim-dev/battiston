<template>
  <div>
    <BannerPesquisa />

    <section class="BudgetCart-section py-8 md:py-12">
      <div class="container mx-auto px-4 lg:px-8">
        <h2 class="text-center text-primary text-2xl font-bold mb-8">Orçamento</h2>

        <div class="overflow-hidden">
          <div class="bg-primary text-white p-4 flex justify-between items-center rounded-t-lg">
            <h3 class="font-bold text-lg md:text-xl">Pontos selecionados:</h3>
            <button @click="closeCart" class="text-white hover:text-gray-300">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>

          <div>
            <ul>
              <li v-for="item in budgetItems" :key="item.id" class="flex flex-col sm:flex-row items-center border-gray-200 border-b pb-4 hover:bg-gray-50 p-4">
                <div class="flex-shrink-0 mb-3 sm:mb-0 sm:mr-4">
                  <NuxtLink :to="item.url"><img :src="item.image" :alt="item.title" class="w-250 h-40 object-cover rounded" /></NuxtLink>
                </div>

                <div class="flex-grow text-gray-700 text-center sm:text-left">
                  <div class="flex flex-wrap justify-center sm:justify-start gap-x-2 gap-y-1 text-sm md:text-base min-w-0">
                    <span class="flex items-center w-full justify-center sm:w-1/5 font-bold">{{ item.title }}</span> 
                    <span class="flex items-center w-full justify-center sm:w-1/6 font-semibold">{{ item.type }}</span>
                    <span class="flex items-center w-full justify-center sm:w-1/6">{{ item.size }}</span>
                    <span class="flex items-center w-full justify-center sm:w-1/5">{{ item.address }}</span>
                    <span class="flex items-center w-full sm:w-1/5 justify-center font-semibold">{{ item.illumination }}</span>
                  </div>
                </div>

                <div class="flex-shrink-0 mt-3 sm:mt-0 sm:ml-4">
                  <button @click="confirmRemoveItem(item)" class="text-gray-400 hover:text-red-600 transition-colors duration-200">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                  </button>
                </div>
              </li>
            </ul>

            <div v-if="budgetItems.length === 0" class="text-center text-gray-600 py-8">
              Nenhum ponto selecionado para o orçamento ainda.
            </div>
          </div>
        </div>

        <div class="mt-16">
          <AdicionarPonto />
        </div>

        <FormContatoOrcamento />
        
      </div>
    </section>

    <!-- modal confirmar exclusão -->
    <div v-if="showConfirmationModal" class="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50">
      <div class="bg-white rounded-lg shadow-xl p-6 m-4 max-w-sm w-full">
        <h3 class="text-lg font-bold text-gray-900 mb-4">Confirmar Exclusão</h3>
        <p class="text-gray-700 mb-6">Tem certeza de que deseja remover o item "<span class="font-semibold">{{ itemToRemove?.title }}</span>" do seu orçamento?</p>
        <div class="flex justify-end space-x-4">
          <button @click="cancelRemove" class="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition-colors duration-200">
            Cancelar
          </button>
          <button @click="removeItem" class="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors duration-200">
            Remover
          </button>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue';

const budgetItems = ref([
  {
    id: 1,
    url: 'ponto-42',
    image: '/assets/modelo.png',
    title: 'Ponto 42 - Corupá',
    type: 'Frontlight',
    size: '12x4m',
    address: 'R. Quintino Bocaiúva - Centro Sentido Av. General Osório',
    illumination: 'Iluminado',
  },
  {
    id: 2,
    url: 'ponto-43',
    image: '/assets/modelo.png',
    title: 'Ponto 43 - Corupá',
    type: 'Outdoor',
    size: '12x4m',
    address: 'R. Quintino Bocaiúva - Centro',
    direction: 'Sentido Av. General Osório',
    illumination: 'Não iluminado',
  },
  {
    id: 3,
    url: 'ponto-44',
    image: '/assets/modelo.png',
    title: 'Ponto 44 - Joinville',
    type: 'Painel Rodoviário',
    size: '10x3m',
    address: 'Av. Santos Dumont - Aventureiro',
    direction: 'Sentido Centro',
    illumination: 'Iluminado',
  },
]);

// Estados para a modal de confirmação
const showConfirmationModal = ref(false);
const itemToRemove = ref(null); // Armazena o item a ser removido

const confirmRemoveItem = (item) => {
  itemToRemove.value = item;
  showConfirmationModal.value = true;
};

const removeItem = () => {
  if (itemToRemove.value) {
    budgetItems.value = budgetItems.value.filter(item => item.id !== itemToRemove.value.id);
    console.log('Item removido:', itemToRemove.value.id);
    itemToRemove.value = null;
    showConfirmationModal.value = false;
  }
};

const cancelRemove = () => {
  itemToRemove.value = null;
  showConfirmationModal.value = false; 
};

const closeCart = () => {
  console.log('Carrinho fechado');
};

useHead({
  title: 'Orçamento | battiston Propaganda',
  meta: [
    { name: 'description', content: 'Explore os pontos de mídia exterior disponíveis em diversas localidades. Encontre o local ideal para sua campanha publicitária.' },
    { property: 'og:title', content: 'Resultados da Pesquisa de Mídia Exterior | Sua Empresa' },
    { property: 'og:description', content: 'Encontre os melhores pontos de publicidade exterior, como painéis rodoviários, outdoors e mídias digitais.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: '' }, 
    // { property: 'og:image', content: 'https://site.com.br/images/social-share-image.jpg' }, 
    { name: 'twitter:card', content: 'summary_large_image' },
    // { name: 'twitter:image', content: 'https://site.com.br/images/twitter-share-image.jpg' },
  ],
  link: [
    {
      rel: 'canonical',
      href: '',
    }
  ]
});
</script>