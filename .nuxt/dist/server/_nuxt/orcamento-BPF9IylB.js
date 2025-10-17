import { a as __nuxt_component_1, b as __nuxt_component_3, _ as __nuxt_component_0 } from "./tituloSecondary-BV7GcOXu.js";
import { _ as __nuxt_component_0$1 } from "./nuxt-link-BP_D6497.js";
import { mergeProps, useSSRContext, ref, reactive, withCtx, createTextVNode, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import { u as useHead } from "./v3-g5dMHDyS.js";
import "#internal/nuxt/paths";
import "vue-router";
import "D:/labtrack/templatePropaganda/node_modules/ufo/dist/index.mjs";
import "ofetch";
import "D:/labtrack/templatePropaganda/node_modules/hookable/dist/index.mjs";
import "D:/labtrack/templatePropaganda/node_modules/unctx/dist/index.mjs";
import "D:/labtrack/templatePropaganda/node_modules/h3/dist/index.mjs";
import "D:/labtrack/templatePropaganda/node_modules/radix3/dist/index.mjs";
import "D:/labtrack/templatePropaganda/node_modules/defu/dist/defu.mjs";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/vue-fontawesome";
import "@fortawesome/free-solid-svg-icons";
import "@fortawesome/free-brands-svg-icons";
import "D:/labtrack/templatePropaganda/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-primary p-8 rounded-lg shadow-md flex flex-col md:flex-row items-center justify-between gap-4" }, _attrs))}><label for="numero-ponto" class="text-white text-base md:text-lg flex-shrink-0"> Deseja adicionar mais alguma mídia? Digite aqui o número do ponto: </label><div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto"><input type="text" id="numero-ponto" placeholder="Número do Ponto" class="focus:ring-secondary flex-1 min-w-[150px] rounded-xl px-3 py-3 bg-[#fff] text-sm placeholder-gray-500 focus:outline-none focus:ring-2 w-full transition-all duration-200"><button class="bg-green-500 text-white font-bold py-3 px-6 rounded-xl hover:bg-green-600 transition-colors duration-200 w-full sm:w-auto text-sm sm:text-base">ADICIONAR PONTO</button></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AdicionarPonto.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = {
  __name: "FormContatoOrcamento",
  __ssrInlineRender: true,
  emits: ["submit-contact-form"],
  setup(__props, { emit: __emit }) {
    const formData = ref({
      nome: "",
      telefone: "",
      email: "",
      mensagem: ""
    });
    const errors = reactive({
      nome: "",
      telefone: "",
      email: "",
      mensagem: ""
    });
    const formStatus = ref("idle");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_tituloSecondary = __nuxt_component_1;
      const _component_secondaryButton = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white mt-8" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_tituloSecondary, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Dados para contato`);
          } else {
            return [
              createTextVNode("Dados para contato")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<form><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div class="flex flex-col gap-4"><div><label for="nome" class="sr-only">Nome</label><input type="text" id="nome"${ssrRenderAttr("value", formData.value.nome)} placeholder="Nome" class="${ssrRenderClass([{ "border-red-500 ring-red-500": errors.nome, "border-black focus:ring-secondary": !errors.nome }, "flex-1 min-w-[150px] rounded-xl px-3 py-3 bg-[#fff] text-sm placeholder-gray-500 focus:outline-none focus:ring-2 w-full transition-all duration-200 border"])}">`);
      if (errors.nome) {
        _push(`<p class="text-red-500 text-xs mt-1">${ssrInterpolate(errors.nome)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><label for="telefone" class="sr-only">Telefone</label><input type="tel" id="telefone"${ssrRenderAttr("value", formData.value.telefone)} placeholder="Telefone" class="${ssrRenderClass([{ "border-red-500 ring-red-500": errors.telefone, "border-black focus:ring-secondary": !errors.telefone }, "flex-1 min-w-[150px] rounded-xl px-3 py-3 bg-[#fff] text-sm placeholder-gray-500 focus:outline-none focus:ring-2 w-full transition-all duration-200 border"])}">`);
      if (errors.telefone) {
        _push(`<p class="text-red-500 text-xs mt-1">${ssrInterpolate(errors.telefone)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><label for="email" class="sr-only">E-mail</label><input type="email" id="email"${ssrRenderAttr("value", formData.value.email)} placeholder="E-mail" class="${ssrRenderClass([{ "border-red-500 ring-red-500": errors.email, "border-black focus:ring-secondary": !errors.email }, "flex-1 min-w-[150px] rounded-xl px-3 py-3 bg-[#fff] text-sm placeholder-gray-500 focus:outline-none focus:ring-2 w-full transition-all duration-200 border"])}">`);
      if (errors.email) {
        _push(`<p class="text-red-500 text-xs mt-1">${ssrInterpolate(errors.email)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div><label for="mensagem" class="sr-only">Mensagem</label><textarea id="mensagem" placeholder="Mensagem" rows="7" class="${ssrRenderClass([{ "border-red-500 ring-red-500": errors.mensagem, "border-black focus:ring-secondary": !errors.mensagem }, "resize-y rounded-xl px-3 py-3 bg-[#fff] text-sm placeholder-gray-500 focus:outline-none focus:ring-2 w-full transition-all duration-200 border"])}">${ssrInterpolate(formData.value.mensagem)}</textarea>`);
      if (errors.mensagem) {
        _push(`<p class="text-red-500 text-xs mt-1">${ssrInterpolate(errors.mensagem)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="mt-8 flex justify-start w-1/4">`);
      if (formStatus.value === "idle" || formStatus.value === "error") {
        _push(ssrRenderComponent(_component_secondaryButton, {
          type: "submit",
          class: "w-full",
          disabled: formStatus.value === "submitting"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` ENVIAR `);
            } else {
              return [
                createTextVNode(" ENVIAR ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (formStatus.value === "submitting") {
        _push(`<div class="flex items-center justify-center py-2 px-6 text-secondary w-full"><svg class="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Enviando... </div>`);
      } else {
        _push(`<!---->`);
      }
      if (formStatus.value === "success") {
        _push(`<div class="flex items-center text-green-600 font-medium py-2 px-6 w-full"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> Mensagem enviada com sucesso! </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></form></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FormContatoOrcamento.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "orcamento",
  __ssrInlineRender: true,
  setup(__props) {
    const budgetItems = ref([
      {
        id: 1,
        url: "ponto-42",
        image: "/assets/modelo.png",
        title: "Ponto 42 - Corupá",
        type: "Frontlight",
        size: "12x4m",
        address: "R. Quintino Bocaiúva - Centro Sentido Av. General Osório",
        illumination: "Iluminado"
      },
      {
        id: 2,
        url: "ponto-43",
        image: "/assets/modelo.png",
        title: "Ponto 43 - Corupá",
        type: "Outdoor",
        size: "12x4m",
        address: "R. Quintino Bocaiúva - Centro",
        direction: "Sentido Av. General Osório",
        illumination: "Não iluminado"
      },
      {
        id: 3,
        url: "ponto-44",
        image: "/assets/modelo.png",
        title: "Ponto 44 - Joinville",
        type: "Painel Rodoviário",
        size: "10x3m",
        address: "Av. Santos Dumont - Aventureiro",
        direction: "Sentido Centro",
        illumination: "Iluminado"
      }
    ]);
    const showConfirmationModal = ref(false);
    const itemToRemove = ref(null);
    useHead({
      title: "Orçamento | battiston Propaganda",
      meta: [
        { name: "description", content: "Explore os pontos de mídia exterior disponíveis em diversas localidades. Encontre o local ideal para sua campanha publicitária." },
        { property: "og:title", content: "Resultados da Pesquisa de Mídia Exterior | Sua Empresa" },
        { property: "og:description", content: "Encontre os melhores pontos de publicidade exterior, como painéis rodoviários, outdoors e mídias digitais." },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "" },
        // { property: 'og:image', content: 'https://site.com.br/images/social-share-image.jpg' }, 
        { name: "twitter:card", content: "summary_large_image" }
        // { name: 'twitter:image', content: 'https://site.com.br/images/twitter-share-image.jpg' },
      ],
      link: [
        {
          rel: "canonical",
          href: ""
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_BannerPesquisa = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_AdicionarPonto = __nuxt_component_2;
      const _component_FormContatoOrcamento = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_BannerPesquisa, null, null, _parent));
      _push(`<section class="BudgetCart-section py-8 md:py-12"><div class="container mx-auto px-4 lg:px-8"><h2 class="text-center text-primary text-2xl font-bold mb-8">Orçamento</h2><div class="overflow-hidden"><div class="bg-primary text-white p-4 flex justify-between items-center rounded-t-lg"><h3 class="font-bold text-lg md:text-xl">Pontos selecionados:</h3><button class="text-white hover:text-gray-300"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div><div><ul><!--[-->`);
      ssrRenderList(budgetItems.value, (item) => {
        _push(`<li class="flex flex-col sm:flex-row items-center border-gray-200 border-b pb-4 hover:bg-gray-50 p-4"><div class="flex-shrink-0 mb-3 sm:mb-0 sm:mr-4">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: item.url
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", item.image)}${ssrRenderAttr("alt", item.title)} class="w-250 h-40 object-cover rounded"${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  src: item.image,
                  alt: item.title,
                  class: "w-250 h-40 object-cover rounded"
                }, null, 8, ["src", "alt"])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div><div class="flex-grow text-gray-700 text-center sm:text-left"><div class="flex flex-wrap justify-center sm:justify-start gap-x-2 gap-y-1 text-sm md:text-base min-w-0"><span class="flex items-center w-full justify-center sm:w-1/5 font-bold">${ssrInterpolate(item.title)}</span><span class="flex items-center w-full justify-center sm:w-1/6 font-semibold">${ssrInterpolate(item.type)}</span><span class="flex items-center w-full justify-center sm:w-1/6">${ssrInterpolate(item.size)}</span><span class="flex items-center w-full justify-center sm:w-1/5">${ssrInterpolate(item.address)}</span><span class="flex items-center w-full sm:w-1/5 justify-center font-semibold">${ssrInterpolate(item.illumination)}</span></div></div><div class="flex-shrink-0 mt-3 sm:mt-0 sm:ml-4"><button class="text-gray-400 hover:text-red-600 transition-colors duration-200"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg></button></div></li>`);
      });
      _push(`<!--]--></ul>`);
      if (budgetItems.value.length === 0) {
        _push(`<div class="text-center text-gray-600 py-8"> Nenhum ponto selecionado para o orçamento ainda. </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="mt-16">`);
      _push(ssrRenderComponent(_component_AdicionarPonto, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_FormContatoOrcamento, null, null, _parent));
      _push(`</div></section>`);
      if (showConfirmationModal.value) {
        _push(`<div class="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50"><div class="bg-white rounded-lg shadow-xl p-6 m-4 max-w-sm w-full"><h3 class="text-lg font-bold text-gray-900 mb-4">Confirmar Exclusão</h3><p class="text-gray-700 mb-6">Tem certeza de que deseja remover o item &quot;<span class="font-semibold">${ssrInterpolate((_a = itemToRemove.value) == null ? void 0 : _a.title)}</span>&quot; do seu orçamento?</p><div class="flex justify-end space-x-4"><button class="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition-colors duration-200"> Cancelar </button><button class="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors duration-200"> Remover </button></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/orcamento.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=orcamento-BPF9IylB.js.map
