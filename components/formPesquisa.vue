<template>
  <section
    class="w-full flex justify-center py-8 rounded-xl shadow-custom-light bg-primary/80 p-6 sm:p-8 shadow-xl mx-auto"
    :style="bgStyle"
  >
    <form class="flex flex-wrap gap-4 max-w-4xl w-full" @submit.prevent="handleSubmit">
      <input
        type="text"
        placeholder="CIDADE"
        class="flex-1 min-w-[150px] rounded-xl px-3 py-2 bg-[#f1f1f1] text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary"
      />
      <input
        type="text"
        placeholder="REGIÃO"
        class="flex-1 min-w-[150px] rounded-xl px-3 py-2 bg-[#f1f1f1] text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary"
      />
      <input
        type="text"
        placeholder="TIPO"
        class="flex-1 min-w-[150px] rounded-xl px-3 py-2 bg-[#f1f1f1] text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary"
      />

      <div class="w-full flex justify-center sm:w-auto">
        <SecondaryButton :disabled="loading" class="w-[176px]">
          <template v-if="loading">
            <svg class="animate-spin h-5 w-5 mr-2 text-white" viewBox="0 0 24 24" fill="none">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
              <path class="opacity-75" fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"/>
            </svg>
            Carregando...
          </template>
          <template v-else>
            <img src="/assets/lupa.png" alt="ícone de lupa" aria-hidden="true" />
            Pesquisar
          </template>
        </SecondaryButton>
      </div>
    </form>
  </section>
</template>


<script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';

  const router = useRouter();
  const loading = ref(false);

  const bgStyle = {
    backdropFilter: 'blur(2px)',
  };

  const handleSubmit = () => {
    loading.value = true;
    setTimeout(() => {
      router.push({ name: 'resultado' });
    }, 800);
  };
</script>
