<template>
  <BannerPesquisa />

  <div class="container mx-auto p-4">
    <section class="my-8">
      <tituloSecondary>Resultados da pesquisa - 50 pontos encontrados</tituloSecondary>
      <AdSpotList v-if="!isLoading && featuredSpots.length" :spots="featuredSpots" />

      <div class="flex justify-center mt-16">
        <PrimaryButton class="px-8 py-3 text-lg">Carregar mais</PrimaryButton>
      </div>

    </section>
  </div>
  
  <div class="container mx-auto p-4">
    <section class="my-8">
      <TituloPrimary>Pontos em Destaque</TituloPrimary>
      <div class="min-h-[350px]" >
        <AdSpotList v-if="!isLoading && featuredSpots.length" :spots="featuredSpots" carousel />
      </div>
    </section>
  </div>

  <QuemSomos />
  <Contato />

</template>

<script setup>
  import { ref, onMounted } from 'vue';
  import { fetchFeaturedAdSpots } from '~/utils/api/mockDataService.js'; 

  const featuredSpots = ref([]); 
  const isLoading = ref(true); 

  onMounted(async () => {
    try {
      isLoading.value = true;
      featuredSpots.value = await fetchFeaturedAdSpots(); 
    } catch (error) {
      console.error('Erro ao carregar pontos em destaque:', error);
    } finally {
      isLoading.value = false; 
    }
  });

useHead({
  title: 'Resultados da Pesquisa | Sua Empresa de Mídia Exterior',
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