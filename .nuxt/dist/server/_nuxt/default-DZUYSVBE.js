import { resolveComponent, mergeProps, withCtx, createVNode, useSSRContext, unref, createBlock, createCommentVNode, openBlock, toDisplayString, createTextVNode, ref } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import { _ as __nuxt_component_0$1 } from "./nuxt-link-BP_D6497.js";
import { u as useCart } from "./useCart-D7Z5KYoA.js";
import { _ as __nuxt_component_3 } from "./primaryButton-B0LArCSL.js";
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
const _imports_0$1 = "" + __buildAssetsURL("logo.DaTKzOO2.png");
const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_router_link = resolveComponent("router-link");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex-shrink-0" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_router_link, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0$1)} alt="Logo" class="h-10 w-auto"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0$1,
            alt: "Logo",
            class: "h-10 w-auto"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LogoSite.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
const _imports_0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAZCAYAAAArK+5dAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKVSURBVHgBvVXNjhJBEK7qBS+b6BxVSBxvexPfAC/G48ALiHcTHJ4An2CyiQc9LbyAjEdPwhPI3rzZm8hCoonowWwWmLJqfkjPbPMTQ/ySpqerq7v+vmqw0gi+goBUdxK2+3BgKB5zHi5g1BNjrhe4cECoycB/vAKqE0JPDC0QzuCAQHPBEXziqR5h2Z2+f3kBB0AptyIYs8m6ooVmY/CvIIAx8l1lgNelwsYck1lnMl47PDmmrAiUGvLZ9LzLo8bC2oK/S7YDEVBrNuiM5LviBQErv7oc+A9tukwKh+v2MyLqTsPOqcgclh0jxOlWsBPRufzea755YNtdircMJsk4k81DX5gpA3YaKIOKD6roum7XoEfyuyL8ZUolTcR12COCJPdRUoub1wO64u330F9HwGmrUaKvdxrQHC7FilizKnAxY/YZWCVFF+wVASjOL6W5LoLlLqX5NgzEaYuQhnsZoAg04tqrNYRBKUVzESiVOHNFeJ4zgBDF3XtExctiJjlFJmUMAqScAS6uyOfCpoIBpWMFhZ4pz5iEdF3L6yeFXxBeGFG5MmV1yTXat9Af3m8EmtvcqzaDLqcmLCcs0qlnrqkvuZbOzxgkKVsqaElhWLuXOpGHUGzJXUgbaLkPhHURwZNZ6Gu0KdzlMHmjraRZLMXdBsWp4dr4cjn8D+Cmjap32iaIJJIPUptNepJSfjWfSy/cAujrgudWA5VmcMaJbGVrzmdjGvqh5XKX6/XZqJeeFF5dZTnkmJfHSghtsIA9bxfI4Fa9oL7VwJWNPQSbcEOXn4c7Ww2k1R8WLPTAAs5vv+CH/kM4MmVHtoPHJ89GqMBhymn+d3t7GXbe2fR+f/mob5885S5GiWTIT/qLH6E/M3X+Ajv7BXUW9s8sAAAAAElFTkSuQmCC";
const _sfc_main$2 = {
  __name: "iconeCarrinho",
  __ssrInlineRender: true,
  setup(__props) {
    const { cartCount } = useCart();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<button${ssrRenderAttrs(mergeProps({
        class: "bg-nu_yellow rounded-full p-2 relative",
        "aria-label": "Abrir carrinho"
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/orcamento",
        class: "text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="ícone do carrinho"${_scopeId}>`);
            if (unref(cartCount) > 0) {
              _push2(`<span class="absolute -top-1 -right-1 bg-secondary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold animate-pulse"${_scopeId}>${ssrInterpolate(unref(cartCount))}</span>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: "ícone do carrinho"
              }),
              unref(cartCount) > 0 ? (openBlock(), createBlock("span", {
                key: 0,
                class: "absolute -top-1 -right-1 bg-secondary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold animate-pulse"
              }, toDisplayString(unref(cartCount)), 1)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</button>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/iconeCarrinho.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<nav${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "hover:text-blue-400"
  }, {
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
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "hover:text-blue-400"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Quem somos`);
      } else {
        return [
          createTextVNode("Quem somos")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "hover:text-blue-400"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Contato`);
      } else {
        return [
          createTextVNode("Contato")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</nav>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Menu.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const mobileMenuOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LogoSite = __nuxt_component_0;
      const _component_IconeCarrinho = _sfc_main$2;
      const _component_Menu = __nuxt_component_2;
      const _component_PrimaryButton = __nuxt_component_3;
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      _push(`<div${ssrRenderAttrs(_attrs)}><header class="sticky top-0 bg-white shadow-sm z-50"><div class="container mx-auto px-4 py-3 flex items-center md:justify-between">`);
      _push(ssrRenderComponent(_component_LogoSite, null, null, _parent));
      _push(`<div class="md:hidden relative ml-auto md:ml-0 mr-4">`);
      _push(ssrRenderComponent(_component_IconeCarrinho, null, null, _parent));
      _push(`</div><button class="md:hidden text-blue-900 focus:outline-none" aria-label="Abrir menu"><svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path></svg></button><div class="hidden md:flex items-center space-x-6 ml-auto">`);
      _push(ssrRenderComponent(_component_Menu, { class: "primary-menu flex space-x-6 text-sm font-medium text-gray-800" }, null, _parent));
      _push(ssrRenderComponent(_component_IconeCarrinho, { class: "hidden md:block" }, null, _parent));
      _push(ssrRenderComponent(_component_PrimaryButton, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Mídia Kit`);
          } else {
            return [
              createTextVNode("Mídia Kit")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      if (mobileMenuOpen.value) {
        _push(`<div class="fixed top-0 right-0 h-full w-full bg-white shadow-lg z-50 flex flex-col"><div class="flex items-center justify-between px-4 py-3 border-b">`);
        _push(ssrRenderComponent(_component_LogoSite, null, null, _parent));
        _push(`<button class="text-gray-700 focus:outline-none" aria-label="Fechar menu"><svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg></button></div>`);
        _push(ssrRenderComponent(_component_Menu, {
          class: "flex flex-col px-4 py-6 space-y-4 text-gray-800 font-medium text-base",
          onClick: ($event) => mobileMenuOpen.value = false
        }, null, _parent));
        _push(ssrRenderComponent(_component_PrimaryButton, { class: "mx-4 self-start" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Mídia Kit`);
            } else {
              return [
                createTextVNode("Mídia Kit")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header><main class="flex-1">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main><footer class="bg-primary py-6"><div class="container mx-auto px-4 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4"><p class="text-white text-sm font-normal leading-tight tracking-normal text-center md:text-left">© Copyright Battiston Propaganda Ltda. Todos os direitos reservados</p>`);
      _push(ssrRenderComponent(_component_font_awesome_icon, {
        icon: ["fab", "instagram"],
        class: "flex text-3xl text-nu_yellow w-[45px]"
      }, null, _parent));
      _push(`</div></footer></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=default-DZUYSVBE.js.map
