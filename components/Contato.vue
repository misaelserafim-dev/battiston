<template>
  <section class="Contato-section bg-[#ECECEC] py-16">
    <div class="container mx-auto px-4 lg:px-8">
      <TituloSecondary>Contato</TituloSecondary>
      <div class="flex flex-col lg:flex-row gap-8 lg:gap-16 justify-center items-center">
        <div class="flex-1 w-full lg:w-2/3">
          <form @submit.prevent="handleSubmit" class="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
            <div class="md:col-span-1 flex flex-col gap-4">
              <div>
                <input
                  type="text"
                  placeholder="Nome"
                  v-model="formData.name"
                  @input="validateField('name')"
                  :class="{ 'border-red-500 ring-red-500': errors.name, 'focus:ring-secondary': !errors.name }"
                  class="flex-1 min-w-[150px] rounded-xl px-3 py-3 bg-[#fff] text-sm placeholder-gray-500 focus:outline-none focus:ring-2 w-full transition-all duration-200"
                />
                <p v-if="errors.name" class="text-red-500 text-xs mt-1">{{ errors.name }}</p>
              </div>

              <div>
                <input
                  type="tel"
                  placeholder="Telefone"
                  v-model="formData.phone"
                  @input="validateField('phone')"
                  :class="{ 'border-red-500 ring-red-500': errors.phone, 'focus:ring-secondary': !errors.phone }"
                  class="flex-1 min-w-[150px] rounded-xl px-3 py-3 bg-[#fff] text-sm placeholder-gray-500 focus:outline-none focus:ring-2 w-full transition-all duration-200"
                />
                <p v-if="errors.phone" class="text-red-500 text-xs mt-1">{{ errors.phone }}</p>
              </div>

              <div>
                <input
                  type="email"
                  placeholder="E-mail"
                  v-model="formData.email"
                  @input="validateField('email')"
                  :class="{ 'border-red-500 ring-red-500': errors.email, 'focus:ring-secondary': !errors.email }"
                  class="flex-1 min-w-[150px] rounded-xl px-3 py-3 bg-[#fff] text-sm placeholder-gray-500 focus:outline-none focus:ring-2 w-full transition-all duration-200"
                />
                <p v-if="errors.email" class="text-red-500 text-xs mt-1">{{ errors.email }}</p>
              </div>
            </div>

            <div class="md:col-span-1 flex flex-col justify-between h-full">
              <div class="flex-grow flex flex-col">
                <textarea
                  placeholder="Mensagem"
                  v-model="formData.message"
                  @input="validateField('message')"
                  rows="6"
                  :class="{ 'border-red-500 ring-red-500': errors.message, 'focus:ring-secondary': !errors.message }"
                  class="flex-1 min-w-[150px] min-h-[166px] rounded-xl px-3 py-2 bg-[#fff] text-sm placeholder-gray-500 focus:outline-none focus:ring-2 w-full resize-none transition-all duration-200"
                ></textarea>
                <p v-if="errors.message" class="text-red-500 text-xs mt-1">{{ errors.message }}</p>
              </div>
              
              <div class="flex justify-end mt-4">
                <button
                  v-if="formStatus === 'idle' || formStatus === 'error'"
                  type="submit"
                  class="py-2 px-6 bg-secondary text-white rounded-xl hover:bg-secondary-dark focus:outline-none focus:ring-2 focus:ring-secondary-dark transition-colors duration-200"
                  :disabled="formStatus === 'submitting'"
                >
                  Enviar
                </button>

                <div v-if="formStatus === 'submitting'" class="flex items-center justify-center py-2 px-6 text-secondary">
                  <svg class="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Enviando...
                </div>

                <div v-if="formStatus === 'success'" class="flex items-center text-green-600 font-medium py-2 px-6">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Mensagem enviada com sucesso!
                </div>
              </div>
            </div>
          </form>
        </div>

        <div class="info-contato lg:w-1/3 text-gray-700 space-y-1 items-center justify-center font-bold text-base leading-loose tracking-normal">
          <div class="flex items-center gap-2">
            <font-awesome-icon :icon="['fas', 'phone']" class="text-secondary text-2xl" /> (49) 3361-9000
          </div>
          <div class="flex items-center gap-2">
            <font-awesome-icon :icon="['fab', 'whatsapp']" class="text-secondary text-2xl" /> <a href="https://wa.me/5549999647738" target="_blank" rel="noopener noreferrer">(49) 99964-7738</a> / 
            <a href="https://wa.me/5549999647738?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20de%20publicidade." target="_blank" rel="noopener noreferrer">(49) 99993-0921</a>
          </div>
          <div class="flex items-center gap-2 font-normal">
            <font-awesome-icon :icon="['fas', 'envelope']" class="text-secondary text-2xl" /> vendas@battiston.com.br
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue';
import TituloSecondary from './tituloSecondary.vue';

const formData = ref({
  name: '',
  phone: '',
  email: '',
  message: '',
});

const errors = reactive({
  name: '',
  phone: '',
  email: '',
  message: '',
});

const formStatus = ref('idle'); 

const validateField = (field) => {
  errors[field] = '';
  switch (field) {
    case 'name':
      if (!formData.value.name.trim()) {
        errors.name = 'O nome é obrigatório.';
      }
      break;
    case 'phone':
      if (!formData.value.phone.trim()) {
        errors.phone = 'O telefone é obrigatório.';
      } else if (!/^[0-9()\s-]+$/.test(formData.value.phone)) {
        errors.phone = 'Formato de telefone inválido.';
      }
      break;
    case 'email':
      if (!formData.value.email.trim()) {
        errors.email = 'O e-mail é obrigatório.';
      } else if (!/\S+@\S+\.\S+/.test(formData.value.email)) {
        errors.email = 'E-mail inválido.';
      }
      break;
    case 'message':
      if (!formData.value.message.trim()) {
        errors.message = 'A mensagem é obrigatória.';
      } else if (formData.value.message.trim().length < 10) {
        errors.message = 'A mensagem deve ter pelo menos 10 caracteres.';
      }
      break;
  }
};

const validateForm = () => {
  validateField('name');
  validateField('phone');
  validateField('email');
  validateField('message');

  return !Object.values(errors).some(error => error !== '');
};

const handleSubmit = async () => {
  formStatus.value = 'idle';

  if (!validateForm()) {
    formStatus.value = 'error'; 
    console.error('Formulário possui erros de validação.');
    return;
  }

  formStatus.value = 'submitting';
  console.log('Dados do formulário:', formData.value);

  try {
    await new Promise(resolve => setTimeout(resolve, 2000)); 

    formStatus.value = 'success';
    formData.value = {
      name: '',
      phone: '',
      email: '',
      message: '',
    };
    Object.keys(errors).forEach(key => errors[key] = ''); 

    setTimeout(() => {
      formStatus.value = 'idle';
    }, 5000); 

  } catch (err) {
    console.error('Erro ao enviar o formulário:', err);
    formStatus.value = 'error';
  }
};
</script>

<style scoped>
</style>