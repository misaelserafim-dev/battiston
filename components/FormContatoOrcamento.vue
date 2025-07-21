<template>
  <div class="bg-white mt-8">
    <tituloSecondary>Dados para contato</tituloSecondary>

    <form @submit.prevent="submitForm">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="flex flex-col gap-4">
          <div>
            <label for="nome" class="sr-only">Nome</label>
            <input
              type="text"
              id="nome"
              v-model="formData.nome"
              @input="validateField('nome')"
              placeholder="Nome"
              class="flex-1 min-w-[150px] rounded-xl px-3 py-3 bg-[#fff] text-sm placeholder-gray-500 focus:outline-none focus:ring-2 w-full transition-all duration-200 border"
              :class="{ 'border-red-500 ring-red-500': errors.nome, 'border-black focus:ring-secondary': !errors.nome }"
            />
            <p v-if="errors.nome" class="text-red-500 text-xs mt-1">{{ errors.nome }}</p>
          </div>
          <div>
            <label for="telefone" class="sr-only">Telefone</label>
            <input
              type="tel"
              id="telefone"
              v-model="formData.telefone"
              @input="validateField('telefone')"
              placeholder="Telefone"
              class="flex-1 min-w-[150px] rounded-xl px-3 py-3 bg-[#fff] text-sm placeholder-gray-500 focus:outline-none focus:ring-2 w-full transition-all duration-200 border"
              :class="{ 'border-red-500 ring-red-500': errors.telefone, 'border-black focus:ring-secondary': !errors.telefone }"
            />
            <p v-if="errors.telefone" class="text-red-500 text-xs mt-1">{{ errors.telefone }}</p>
          </div>
          <div>
            <label for="email" class="sr-only">E-mail</label>
            <input
              type="email"
              id="email"
              v-model="formData.email"
              @input="validateField('email')"
              placeholder="E-mail"
              class="flex-1 min-w-[150px] rounded-xl px-3 py-3 bg-[#fff] text-sm placeholder-gray-500 focus:outline-none focus:ring-2 w-full transition-all duration-200 border"
              :class="{ 'border-red-500 ring-red-500': errors.email, 'border-black focus:ring-secondary': !errors.email }"
            />
            <p v-if="errors.email" class="text-red-500 text-xs mt-1">{{ errors.email }}</p>
          </div>
        </div>

        <div>
          <label for="mensagem" class="sr-only">Mensagem</label>
          <textarea
            id="mensagem"
            v-model="formData.mensagem"
            @input="validateField('mensagem')"
            placeholder="Mensagem"
            rows="7"
            class="resize-y rounded-xl px-3 py-3 bg-[#fff] text-sm placeholder-gray-500 focus:outline-none focus:ring-2 w-full transition-all duration-200 border"
            :class="{ 'border-red-500 ring-red-500': errors.mensagem, 'border-black focus:ring-secondary': !errors.mensagem }"
          ></textarea>
          <p v-if="errors.mensagem" class="text-red-500 text-xs mt-1">{{ errors.mensagem }}</p>
        </div>
      </div>

      <div class="mt-8 flex justify-start w-1/4">
        <secondaryButton
          v-if="formStatus === 'idle' || formStatus === 'error'"
          type="submit"
          class="w-full"
          :disabled="formStatus === 'submitting'"
        >
          ENVIAR
        </secondaryButton>

        <div v-if="formStatus === 'submitting'" class="flex items-center justify-center py-2 px-6 text-secondary w-full">
          <svg class="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Enviando...
        </div>

        <div v-if="formStatus === 'success'" class="flex items-center text-green-600 font-medium py-2 px-6 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Mensagem enviada com sucesso!
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';

const formData = ref({
  nome: '',
  telefone: '',
  email: '',
  mensagem: '',
});

const errors = reactive({
  nome: '',
  telefone: '',
  email: '',
  mensagem: '',
});

const formStatus = ref('idle');

const emit = defineEmits(['submit-contact-form']);

const validateField = (field) => {
  errors[field] = '';

  switch (field) {
    case 'nome':
      if (!formData.value.nome.trim()) {
        errors.nome = 'O nome é obrigatório.';
      }
      break;
    case 'telefone':
      if (!formData.value.telefone.trim()) {
        errors.telefone = 'O telefone é obrigatório.';
      } else if (!/^[0-9()\s-]+$/.test(formData.value.telefone)) {
        errors.telefone = 'Formato de telefone inválido.';
      }
      break;
    case 'email':
      if (!formData.value.email.trim()) {
        errors.email = 'O e-mail é obrigatório.';
      } else if (!/\S+@\S+\.\S+/.test(formData.value.email)) {
        errors.email = 'E-mail inválido.';
      }
      break;
    case 'mensagem':
      if (!formData.value.mensagem.trim()) {
        errors.mensagem = 'A mensagem é obrigatória.';
      } else if (formData.value.mensagem.trim().length < 10) {
        errors.mensagem = 'A mensagem deve ter pelo menos 10 caracteres.';
      }
      break;
    default:
      break;
  }
};

const validateAllFields = () => {
  validateField('nome');
  validateField('telefone');
  validateField('email');
  validateField('mensagem');


  return !Object.values(errors).some(error => error !== '');
};

const submitForm = async () => {
  formStatus.value = 'idle';

  if (!validateAllFields()) {
    formStatus.value = 'error'; 
    return;
  }

  formStatus.value = 'submitting';
  console.log('Dados do formulário de contato:', formData.value);

  try {
    await new Promise(resolve => setTimeout(resolve, 2000)); 

    formStatus.value = 'success';
    emit('submit-contact-form', formData.value);

    formData.value = {
      nome: '',
      telefone: '',
      email: '',
      mensagem: '',
    };
    Object.keys(errors).forEach(key => errors[key] = '');

    setTimeout(() => {
      formStatus.value = 'idle';
    }, 5000);

  } catch (err) {
    formStatus.value = 'error';
  }
};
</script>
