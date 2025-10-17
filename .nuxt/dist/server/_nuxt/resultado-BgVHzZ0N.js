import { _ as __nuxt_component_0, a as __nuxt_component_1 } from "./tituloSecondary-BV7GcOXu.js";
import { a as _sfc_main$1, _ as __nuxt_component_4, b as __nuxt_component_5 } from "./QuemSomos-MaqM5wii.js";
import { _ as __nuxt_component_3 } from "./primaryButton-B0LArCSL.js";
import { _ as _sfc_main$2 } from "./Contato-o55NEcSU.js";
import { ref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { u as useHead } from "./v3-g5dMHDyS.js";
import "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "D:/labtrack/templatePropaganda/node_modules/hookable/dist/index.mjs";
import "D:/labtrack/templatePropaganda/node_modules/unctx/dist/index.mjs";
import "D:/labtrack/templatePropaganda/node_modules/h3/dist/index.mjs";
import "vue-router";
import "D:/labtrack/templatePropaganda/node_modules/radix3/dist/index.mjs";
import "D:/labtrack/templatePropaganda/node_modules/defu/dist/defu.mjs";
import "D:/labtrack/templatePropaganda/node_modules/ufo/dist/index.mjs";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/vue-fontawesome";
import "@fortawesome/free-solid-svg-icons";
import "@fortawesome/free-brands-svg-icons";
import "swiper/vue";
import "swiper/modules";
import "./useCart-D7Z5KYoA.js";
import "D:/labtrack/templatePropaganda/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main = {
  __name: "resultado",
  __ssrInlineRender: true,
  setup(__props) {
    const featuredSpots = ref([]);
    const isLoading = ref(true);
    useHead({
      title: "Resultados da Pesquisa | Sua Empresa de Mídia Exterior",
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
      const _component_tituloSecondary = __nuxt_component_1;
      const _component_AdSpotList = _sfc_main$1;
      const _component_PrimaryButton = __nuxt_component_3;
      const _component_TituloPrimary = __nuxt_component_4;
      const _component_QuemSomos = __nuxt_component_5;
      const _component_Contato = _sfc_main$2;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_BannerPesquisa, null, null, _parent));
      _push(`<div class="container mx-auto p-4"><section class="my-8">`);
      _push(ssrRenderComponent(_component_tituloSecondary, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Resultados da pesquisa - 50 pontos encontrados`);
          } else {
            return [
              createTextVNode("Resultados da pesquisa - 50 pontos encontrados")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (!isLoading.value && featuredSpots.value.length) {
        _push(ssrRenderComponent(_component_AdSpotList, { spots: featuredSpots.value }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex justify-center mt-16">`);
      _push(ssrRenderComponent(_component_PrimaryButton, { class: "px-8 py-3 text-lg" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Carregar mais`);
          } else {
            return [
              createTextVNode("Carregar mais")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section></div><div class="container mx-auto p-4"><section class="my-8">`);
      _push(ssrRenderComponent(_component_TituloPrimary, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Pontos em Destaque`);
          } else {
            return [
              createTextVNode("Pontos em Destaque")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="min-h-[350px]">`);
      if (!isLoading.value && featuredSpots.value.length) {
        _push(ssrRenderComponent(_component_AdSpotList, {
          spots: featuredSpots.value,
          carousel: ""
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section></div>`);
      _push(ssrRenderComponent(_component_QuemSomos, null, null, _parent));
      _push(ssrRenderComponent(_component_Contato, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/resultado.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=resultado-BgVHzZ0N.js.map
