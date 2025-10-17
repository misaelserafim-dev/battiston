import { mergeProps, useSSRContext, ref, withCtx, createBlock, openBlock, Fragment, createTextVNode, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import { publicAssetsURL } from "#internal/nuxt/paths";
import { useRouter } from "vue-router";
const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<button${ssrRenderAttrs(mergeProps({ class: "bg-secondary text-white font-semibold text-sm md:text-base px-3 py-2 md:px-4 md:py-3 hover:bg-secondary/90 transition rounded-xl flex items-center justify-center gap-2 duration-300 ease-in-out" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</button>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/secondaryButton.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _imports_0$1 = publicAssetsURL("/assets/lupa.png");
const _sfc_main$2 = {
  __name: "formPesquisa",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const loading = ref(false);
    const bgStyle = {
      backdropFilter: "blur(2px)"
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SecondaryButton = __nuxt_component_3;
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "w-full flex justify-center py-8 rounded-xl shadow-custom-light bg-primary/80 p-6 sm:p-8 shadow-xl mx-auto",
        style: bgStyle
      }, _attrs))}><form class="flex flex-wrap gap-4 max-w-4xl w-full"><input type="text" placeholder="CIDADE" class="flex-1 min-w-[150px] rounded-xl px-3 py-2 bg-[#f1f1f1] text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary"><input type="text" placeholder="REGIÃO" class="flex-1 min-w-[150px] rounded-xl px-3 py-2 bg-[#f1f1f1] text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary"><input type="text" placeholder="TIPO" class="flex-1 min-w-[150px] rounded-xl px-3 py-2 bg-[#f1f1f1] text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary"><div class="w-full flex justify-center sm:w-auto">`);
      _push(ssrRenderComponent(_component_SecondaryButton, {
        disabled: loading.value,
        class: "w-[176px]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (loading.value) {
              _push2(`<!--[--><svg class="animate-spin h-5 w-5 mr-2 text-white" viewBox="0 0 24 24" fill="none"${_scopeId}><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"${_scopeId}></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"${_scopeId}></path></svg> Carregando... <!--]-->`);
            } else {
              _push2(`<!--[--><img${ssrRenderAttr("src", _imports_0$1)} alt="ícone de lupa" aria-hidden="true"${_scopeId}> Pesquisar <!--]-->`);
            }
          } else {
            return [
              loading.value ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                (openBlock(), createBlock("svg", {
                  class: "animate-spin h-5 w-5 mr-2 text-white",
                  viewBox: "0 0 24 24",
                  fill: "none"
                }, [
                  createVNode("circle", {
                    class: "opacity-25",
                    cx: "12",
                    cy: "12",
                    r: "10",
                    stroke: "currentColor",
                    "stroke-width": "4"
                  }),
                  createVNode("path", {
                    class: "opacity-75",
                    fill: "currentColor",
                    d: "M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  })
                ])),
                createTextVNode(" Carregando... ")
              ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                createVNode("img", {
                  src: _imports_0$1,
                  alt: "ícone de lupa",
                  "aria-hidden": "true"
                }),
                createTextVNode(" Pesquisar ")
              ], 64))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></form></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/formPesquisa.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _imports_0 = publicAssetsURL("/images/fundo-banner.png");
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_FormPesquisa = _sfc_main$2;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative w-full min-h-[400px] md:min-h-[445px] flex items-center justify-center overflow-hidden bg-primary py-10 md:py-0" }, _attrs))}><div class="absolute inset-0 z-0"><img${ssrRenderAttr("src", _imports_0)} alt="Background Banner" class="w-full h-full object-cover opacity-20 lg:opacity-30"></div><div class="relative z-20 px-4 max-w-5xl mx-auto"><h1 class="text-white font-bold text-3xl sm:text-4xl lg:text-[48px] leading-tight sm:leading-snug lg:leading-[120%] tracking-normal mb-6 md:mb-8"> Há mais de 30 anos<br class="hidden sm:inline-block">divulgando sua marca </h1>`);
  _push(ssrRenderComponent(_component_FormPesquisa, null, null, _parent));
  _push(`</div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BannerPesquisa.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<h3${ssrRenderAttrs(mergeProps({ class: "text-left font-bold text-lg md:text-[24px] leading-none tracking-normal text-primary mb-4" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</h3>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/tituloSecondary.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __nuxt_component_0 as _,
  __nuxt_component_1 as a,
  __nuxt_component_3 as b
};
//# sourceMappingURL=tituloSecondary-BV7GcOXu.js.map
