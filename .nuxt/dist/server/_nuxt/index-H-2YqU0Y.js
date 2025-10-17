import { _ as __nuxt_component_0, b as __nuxt_component_3$1 } from "./tituloSecondary-BV7GcOXu.js";
import { _ as __nuxt_component_3 } from "./primaryButton-B0LArCSL.js";
import { _ as __nuxt_component_0$1 } from "./nuxt-link-BP_D6497.js";
import { _ as _sfc_main$1 } from "./Contato-o55NEcSU.js";
import { ref, withCtx, createTextVNode, createVNode, createBlock, openBlock, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderStyle } from "vue/server-renderer";
import { u as useCart } from "./useCart-D7Z5KYoA.js";
import { _ as _export_sfc, u as useRoute } from "../server.mjs";
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
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { addToCart } = useCart();
    const isLoading = ref(false);
    const route = useRoute();
    function handleClick() {
      isLoading.value = true;
      addToCart();
      setTimeout(() => {
        isLoading.value = false;
      }, 500);
    }
    const spot = {
      title: route.params.slug + " - Corupá",
      availability: "Disponível Imediatamente",
      type: "Frontlight",
      size: "9x3m",
      street: "Rua: R. Quintino Bocaiúva",
      neighborhood: "Bairro: Centro",
      direction: "Sentido: Av. General Osório",
      reference: "Referência: Ao lado do Posto Ipiranga",
      observations: "Observações: Com iluminação",
      mainImage: "/assets/ponto-img.png"
    };
    useHead({
      title: route.params.slug + " | Battiston Propaganda",
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
      const _component_BannerPesquisa = __nuxt_component_0;
      const _component_PrimaryButton = __nuxt_component_3;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_SecondaryButton = __nuxt_component_3$1;
      const _component_Contato = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-1c284669>`);
      _push(ssrRenderComponent(_component_BannerPesquisa, null, null, _parent));
      _push(`<div class="container mx-auto p-4" data-v-1c284669><section class="my-8" data-v-1c284669>`);
      _push(ssrRenderComponent(_component_PrimaryButton, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/",
              class: "text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Voltar`);
                } else {
                  return [
                    createTextVNode("Voltar")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtLink, {
                to: "/",
                class: "text-white"
              }, {
                default: withCtx(() => [
                  createTextVNode("Voltar")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="bg-white overflow-hidden md:flex pt-8" data-v-1c284669><div class="md:w-1/2 flex items-start justify-center" data-v-1c284669><img${ssrRenderAttr("src", spot.mainImage)}${ssrRenderAttr("alt", spot.title)} class="w-full h-auto object-cover max-h-[400px]" data-v-1c284669></div><div class="pl-0 md:pl-6 md:w-1/2 p-6 md:p-8 flex flex-col justify-between md:pt-8 lg:pt-0" data-v-1c284669><div data-v-1c284669><h2 class="text-primary font-bold text-2xl md:text-3xl lg:text-[32px] leading-tight mb-1 pl-4" data-v-1c284669>${ssrInterpolate(spot.title)}</h2><p class="text-green-600 font-semibold text-sm mb-4 pl-4" data-v-1c284669><span class="inline-block w-2 h-2 bg-green-600 rounded-full mr-1 align-middle" data-v-1c284669></span> ${ssrInterpolate(spot.availability)}</p><div class="text-gray-700 text-[14px] md:text-[14px] space-y-1 mb-6 leading-relaxed pl-4" data-v-1c284669><p data-v-1c284669><span class="font-bold text-primary" data-v-1c284669>Tipo:</span> ${ssrInterpolate(spot.type)}</p><p data-v-1c284669><span class="font-bold text-primary" data-v-1c284669>Tamanho:</span> ${ssrInterpolate(spot.size)}</p><p data-v-1c284669><span class="font-bold text-primary" data-v-1c284669>Rua:</span> ${ssrInterpolate(spot.street)}</p><p data-v-1c284669><span class="font-bold text-primary" data-v-1c284669>Bairro:</span> ${ssrInterpolate(spot.neighborhood)}</p><p data-v-1c284669><span class="font-bold text-primary" data-v-1c284669>Sentido:</span> ${ssrInterpolate(spot.direction)}</p><p data-v-1c284669><span class="font-bold text-primary" data-v-1c284669>Referência:</span> ${ssrInterpolate(spot.reference)}</p><p data-v-1c284669><span class="font-bold text-primary" data-v-1c284669>Observações:</span> ${ssrInterpolate(spot.observations)}</p></div></div><div class="btn-page-mod md:w-1/2 mt-6 md:mt-auto" data-v-1c284669>`);
      _push(ssrRenderComponent(_component_SecondaryButton, {
        class: "md:w-full rounded-full",
        disabled: isLoading.value,
        onClick: handleClick
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (isLoading.value) {
              _push2(`<span data-v-1c284669${_scopeId}>Adicionando...</span>`);
            } else {
              _push2(`<span data-v-1c284669${_scopeId}>Adicionar ao Orçamento</span>`);
            }
          } else {
            return [
              isLoading.value ? (openBlock(), createBlock("span", { key: 0 }, "Adicionando...")) : (openBlock(), createBlock("span", { key: 1 }, "Adicionar ao Orçamento"))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="mt-8 bg-white" data-v-1c284669><div class="md:col-span-2" data-v-1c284669><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2d-49.2733!3d-25.4284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDI1JzQyLjIiUyA0OcKwMTYnMjMuNyJX!5e0!3m2!1spt-BR!2sbr!4v1678901234567!5m2!1spt-BR!2sbr" width="100%" height="242" style="${ssrRenderStyle({ "border": "0" })}" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" data-v-1c284669></iframe></div></div></section></div>`);
      _push(ssrRenderComponent(_component_Contato, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[slug]/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1c284669"]]);
export {
  index as default
};
//# sourceMappingURL=index-H-2YqU0Y.js.map
