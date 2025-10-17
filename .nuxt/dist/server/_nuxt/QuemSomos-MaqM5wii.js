import { mergeProps, useSSRContext, ref, resolveComponent, withCtx, createVNode, toDisplayString, createBlock, openBlock, createTextVNode, unref, Fragment, renderList } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import { u as useCart } from "./useCart-D7Z5KYoA.js";
const _sfc_main$4 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<h2${ssrRenderAttrs(mergeProps({ class: "text-left font-bold text-2xl md:text-[32px] leading-none tracking-normal text-primary mt-12 mb-4" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</h2>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/tituloPrimary.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<button${ssrRenderAttrs(mergeProps({
    class: ["px-4 py-2 border rounded-full text-xs font-bold transition-colors duration-300 flex items-center justify-center h-9", [
      "border-[#BBBBBB] text-[#333333]",
      "hover:bg-primary hover:text-white"
    ]]
  }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</button>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/tertiaryButton.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$2 = {
  __name: "AdSpotCard",
  __ssrInlineRender: true,
  props: {
    id: {
      type: Number,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    image: String,
    type: String,
    title: String,
    address: String,
    direction: String,
    availability: {
      type: String,
      default: "Disponível imediatamente"
    }
  },
  setup(__props) {
    const { addToCart } = useCart();
    const isBumping = ref(false);
    const isLoading = ref(false);
    function handleClick() {
      if (isBumping.value) return;
      isBumping.value = true;
      isLoading.value = true;
      addToCart();
      setTimeout(() => {
        isBumping.value = false;
        isLoading.value = false;
      }, 500);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      const _component_TertiaryButton = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-100 lg:max-w-[300px] bg-white flex flex-col overflow-hidden hover:bg-[#F5F5F5] rounded-xl" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: `/${__props.url}`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative group rounded-xl overflow-hidden w-full h-50"${_scopeId}><img${ssrRenderAttr("src", __props.image)}${ssrRenderAttr("alt", __props.title)} class="w-full lg:max-w-[300px] h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"${_scopeId}><span class="absolute bottom-0 left-0 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-md"${_scopeId}>${ssrInterpolate(__props.type)}</span></div>`);
          } else {
            return [
              createVNode("div", { class: "relative group rounded-xl overflow-hidden w-full h-50" }, [
                createVNode("img", {
                  src: __props.image,
                  alt: __props.title,
                  class: "w-full lg:max-w-[300px] h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                }, null, 8, ["src", "alt"]),
                createVNode("span", { class: "absolute bottom-0 left-0 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-md" }, toDisplayString(__props.type), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="p-4 text-center flex flex-col justify-between flex-1 gap-1"><h3 class="font-semibold text-base leading-tight">${ssrInterpolate(__props.title)}</h3><p class="text-xs text-black-600 leading-snug mt-1">${ssrInterpolate(__props.address)}<br> ${ssrInterpolate(__props.direction)}</p><p class="mt-2 text-green-700 text-xs font-semibold flex justify-center items-center gap-1 mb-2"><span class="w-2 h-2 bg-green-500 rounded-full inline-block"></span> ${ssrInterpolate(__props.availability)}</p>`);
      _push(ssrRenderComponent(_component_TertiaryButton, {
        onClick: handleClick,
        class: { bump: isBumping.value },
        disabled: isLoading.value
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (isLoading.value) {
              _push2(`<span class="flex items-center justify-center"${_scopeId}><svg class="animate-spin h-5 w-5 mr-2 text-white" viewBox="0 0 24 24" fill="none"${_scopeId}><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"${_scopeId}></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"${_scopeId}></path></svg> Adicionando... </span>`);
            } else {
              _push2(`<span${_scopeId}>Adicionar ao Orçamento</span>`);
            }
          } else {
            return [
              isLoading.value ? (openBlock(), createBlock("span", {
                key: 0,
                class: "flex items-center justify-center"
              }, [
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
                createTextVNode(" Adicionando... ")
              ])) : (openBlock(), createBlock("span", { key: 1 }, "Adicionar ao Orçamento"))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AdSpotCard.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "AdSpotList",
  __ssrInlineRender: true,
  props: {
    spots: {
      type: Array,
      required: true
    },
    carousel: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}>`);
      if (__props.carousel) {
        _push(ssrRenderComponent(unref(Swiper), {
          spaceBetween: 16,
          slidesPerView: 1,
          modules: [unref(Navigation)],
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
          },
          breakpoints: {
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 }
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(__props.spots, (item, index) => {
                _push2(ssrRenderComponent(unref(SwiperSlide), { key: index }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_sfc_main$2, mergeProps({ ref_for: true }, item, { class: "mx-4 lg:mx-0" }), null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_sfc_main$2, mergeProps({ ref_for: true }, item, { class: "mx-4 lg:mx-0" }), null, 16)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(__props.spots, (item, index) => {
                  return openBlock(), createBlock(unref(SwiperSlide), { key: index }, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$2, mergeProps({ ref_for: true }, item, { class: "mx-4 lg:mx-0" }), null, 16)
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<div class="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"><!--[-->`);
        ssrRenderList(__props.spots, (item, index) => {
          _push(ssrRenderComponent(_sfc_main$2, mergeProps({ key: index }, { ref_for: true }, item), null, _parent));
        });
        _push(`<!--]--></div>`);
      }
      _push(`<button style="${ssrRenderStyle(__props.carousel ? null : { display: "none" })}" class="swiper-button-prev text-gray-400 hover:text-gray-600 text-2xl absolute -translate-y-1/2 z-10"></button><button style="${ssrRenderStyle(__props.carousel ? null : { display: "none" })}" class="swiper-button-next text-gray-400 hover:text-gray-600 text-2xl absolute -translate-y-1/2 z-10"></button></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AdSpotList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _imports_0 = "" + __buildAssetsURL("sobre.BQ3iLkDC.png");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-primary mt-8" }, _attrs))}><div class="container mx-auto"><div class="flex flex-col lg:flex-row items-center gap-8 pb-8 md:pb-0"><div class="lg:w-1/2 w-full"><img${ssrRenderAttr("src", _imports_0)} alt="Vista panorâmica da cidade" class="object-cover w-full h-auto mt-[-25px] rounded-t-lg"></div><div class="lg:w-1/2 w-full text-white mt-4"><h2 class="text-xl md:text-2xl font-semibold mb-6 text-[#FFEC1B]">Quem Somos</h2><p class="font-normal text-sm leading-relaxed mb-[10px]"> A BATTISTON PROPAGANDA LTDA, é uma empresa especializada na produção digital de cartazes de outdoor e lonas promocionais. A empresa foi fundada em 1994 com o nome de BATTISTON PROPAGANDA LTDA, para os ramos de produção serigráfica de outdoors e veiculação de peças de mídias internas e externas. <br><br> Em 2000 iniciou a substituição gradativa da produção serigráfica para digital. Com a evolução dos negócios e visando otimizar o atendimento aos clientes, em 2007 passou a operar somente na área de produção digital de cartazes promocionais em papel e lona, recentemente também conta com impressão e confecção de banners. </p></div></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/QuemSomos.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __nuxt_component_4 as _,
  _sfc_main$1 as a,
  __nuxt_component_5 as b
};
//# sourceMappingURL=QuemSomos-MaqM5wii.js.map
