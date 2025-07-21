<template>
  <div>
    <BannerPesquisa />

    <div class="container mx-auto p-4">
      <section class="my-8">
        <PrimaryButton><NuxtLink to="/" class="text-white">Voltar</NuxtLink></PrimaryButton>

        <div class="bg-white overflow-hidden md:flex pt-8">
          <div class="md:w-1/2 flex items-start justify-center">
            <img
              :src="spot.mainImage"
              :alt="spot.title"
              class="w-full h-auto object-cover max-h-[400px]"
            />
          </div>

          <div class="pl-0 md:pl-6 md:w-1/2 p-6 md:p-8 flex flex-col justify-between md:pt-8 lg:pt-0">
            <div>
              <h2 class="text-primary font-bold text-2xl md:text-3xl lg:text-[32px] leading-tight mb-1 pl-4">
                {{ spot.title }}
              </h2>
              <p class="text-green-600 font-semibold text-sm mb-4 pl-4">
                <span class="inline-block w-2 h-2 bg-green-600 rounded-full mr-1 align-middle"></span>
                {{ spot.availability }}
              </p>

              <div class="text-gray-700 text-[14px] md:text-[14px] space-y-1 mb-6 leading-relaxed pl-4">
                <p><span class="font-bold text-primary">Tipo:</span> {{ spot.type }}</p>
                <p><span class="font-bold text-primary">Tamanho:</span> {{ spot.size }}</p>
                <p><span class="font-bold text-primary">Rua:</span> {{ spot.street }}</p>
                <p><span class="font-bold text-primary">Bairro:</span> {{ spot.neighborhood }}</p>
                <p><span class="font-bold text-primary">Sentido:</span> {{ spot.direction }}</p>
                <p><span class="font-bold text-primary">Referência:</span> {{ spot.reference }}</p>
                <p><span class="font-bold text-primary">Observações:</span> {{ spot.observations }}</p>
              </div>
            </div>

            <div class="btn-page-mod md:w-1/2 mt-6 md:mt-auto">
                <SecondaryButton class="md:w-full rounded-full" :disabled="isLoading" @click="handleClick">
                  <span v-if="isLoading">Adicionando...</span><span v-else>Adicionar ao Orçamento</span>
                </SecondaryButton>
              </div>
            </div>
          </div>

          <div class="mt-8 bg-white">
            <div class="md:col-span-2">
             <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2d-49.2733!3d-25.4284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDI1JzQyLjIiUyA0OcKwMTYnMjMuNyJX!5e0!3m2!1spt-BR!2sbr!4v1678901234567!5m2!1spt-BR!2sbr"
              width="100%"
              height="242"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>

        </div>
      </section>
    </div>
    
    <Contato />
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import { useCart } from '@/composables/useCart'
  const { addToCart } = useCart()

  const isLoading = ref(false)
  const route = useRoute()

  function handleClick() {
    isLoading.value = true
    addToCart()
    setTimeout(() => {
      isLoading.value = false
    }, 500) 
  }

  const spot = {
    id: 1,
    title: route.params.slug + ' - Corupá',
    availability: 'Disponível Imediatamente',
    type: 'Frontlight',
    size: '9x3m',
    street: 'Rua: R. Quintino Bocaiúva',
    neighborhood: 'Bairro: Centro',
    direction: 'Sentido: Av. General Osório',
    reference: 'Referência: Ao lado do Posto Ipiranga',
    observations: 'Observações: Com iluminação',
    mainImage: '/assets/ponto-img.png',
    mapIframeUrl: 'https://www.google.com/maps/place/LabTrack/@-28.691914,-49.3810989,17z/data=!3m1!4b1!4m6!3m5!1s0x952183ea1a5c29e5:0xdc2cd3581d40d070!8m2!3d-28.6919187!4d-49.378524!16s%2Fg%2F11hz2zhf8w?entry=ttu&g_ep=EgoyMDI1MDcxNS4xIKXMDSoASAFQAw%3D%3D', 
  };

  useHead({
    title: route.params.slug  +' | Battiston Propaganda',
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


<style scoped>
.btn-page-mod  button {
  border-radius: 30px !important;
}
</style>  