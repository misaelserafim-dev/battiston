<template>
  <div class="relative">
    <Swiper
      v-if="carousel"
      :spaceBetween="16"
      :slidesPerView="1"
      :modules="[Navigation]"
      :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }"
      :breakpoints="{
        640: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 }
      }"
    >
      <SwiperSlide v-for="(item, index) in spots" :key="index">
        <AdSpotCard v-bind="item" class="mx-4 lg:mx-0" />
      </SwiperSlide>
    </Swiper>
    
    <div v-else class="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <AdSpotCard v-for="(item, index) in spots" :key="index" v-bind="item" />
    </div>

    <button v-show="carousel" class="swiper-button-prev text-gray-400 hover:text-gray-600 text-2xl absolute -translate-y-1/2 z-10"></button>
    <button v-show="carousel" class="swiper-button-next text-gray-400 hover:text-gray-600 text-2xl absolute -translate-y-1/2 z-10"></button>

  </div>
</template>

<script setup>
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Navigation } from 'swiper/modules'
  import 'swiper/css'
  import 'swiper/css/navigation'

  import AdSpotCard from '@/components/AdSpotCard.vue'

  const props = defineProps({
    spots: {
      type: Array,
      required: true,
    },
    carousel: {
      type: Boolean,
      default: false,
    },
  })
</script>
