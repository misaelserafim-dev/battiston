<template>
    <div class="w-100 lg:max-w-[300px] bg-white flex flex-col overflow-hidden hover:bg-[#F5F5F5] rounded-xl">
        <router-link :to="`/${url}`">
            <div class="relative group rounded-xl overflow-hidden w-full h-50">
                <img
                    :src="image"
                    :alt="title"
                    class="w-full lg:max-w-[300px] h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
                <span class="absolute bottom-0 left-0 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-md">
                    {{ type }}
                </span>
            </div>
        </router-link>

        <div class="p-4 text-center flex flex-col justify-between flex-1 gap-1">
            <h3 class="font-semibold text-base leading-tight">{{ title }}</h3>
            <p class="text-xs text-black-600 leading-snug mt-1">
                {{ address }}<br />
                {{ direction }}
            </p>

            <p class="mt-2 text-green-700 text-xs font-semibold flex justify-center items-center gap-1 mb-2">
                <span class="w-2 h-2 bg-green-500 rounded-full inline-block"></span>
                {{ availability }}
            </p>

            <TertiaryButton @click="handleClick" :class="{ bump: isBumping }" :disabled="isLoading">
                <span v-if="isLoading" class="flex items-center justify-center">
                    <svg class="animate-spin h-5 w-5 mr-2 text-white" viewBox="0 0 24 24" fill="none">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
                    <path class="opacity-75" fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"/>
                    </svg>
                    Adicionando...
                </span>
                <span v-else>Adicionar ao Orçamento</span>
            </TertiaryButton>

        </div>
    </div>

</template>

<script setup>
    import { ref } from 'vue'
    import { useCart } from '@/composables/useCart'
    const { addToCart } = useCart()

    const isBumping = ref(false)
    const isLoading = ref(false)

    function handleClick() {
        if (isBumping.value) return
        isBumping.value = true
        isLoading.value = true
        addToCart()
        setTimeout(() => {
            isBumping.value = false
            isLoading.value = false
        }, 500) 
    }

    defineProps({
        id: {
            type: Number,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
        image: String,
        type: String,
        title: String,
        address: String,
        direction: String,
        availability: {
            type: String,
            default: 'Disponível imediatamente',
        },
    })
</script>
