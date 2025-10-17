import { ref, reactive, resolveComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { a as __nuxt_component_1 } from "./tituloSecondary-BV7GcOXu.js";
const _sfc_main = {
  __name: "Contato",
  __ssrInlineRender: true,
  setup(__props) {
    const formData = ref({
      name: "",
      phone: "",
      email: "",
      message: ""
    });
    const errors = reactive({
      name: "",
      phone: "",
      email: "",
      message: ""
    });
    const formStatus = ref("idle");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "Contato-section bg-[#ECECEC] py-16" }, _attrs))}><div class="container mx-auto px-4 lg:px-8">`);
      _push(ssrRenderComponent(__nuxt_component_1, null, {
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
      _push(`<div class="flex flex-col lg:flex-row gap-8 lg:gap-16 justify-center items-center"><div class="flex-1 w-full lg:w-2/3"><form class="grid grid-cols-1 md:grid-cols-2 gap-4 items-start"><div class="md:col-span-1 flex flex-col gap-4"><div><input type="text" placeholder="Nome"${ssrRenderAttr("value", formData.value.name)} class="${ssrRenderClass([{ "border-red-500 ring-red-500": errors.name, "focus:ring-secondary": !errors.name }, "flex-1 min-w-[150px] rounded-xl px-3 py-3 bg-[#fff] text-sm placeholder-gray-500 focus:outline-none focus:ring-2 w-full transition-all duration-200"])}">`);
      if (errors.name) {
        _push(`<p class="text-red-500 text-xs mt-1">${ssrInterpolate(errors.name)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><input type="tel" placeholder="Telefone"${ssrRenderAttr("value", formData.value.phone)} class="${ssrRenderClass([{ "border-red-500 ring-red-500": errors.phone, "focus:ring-secondary": !errors.phone }, "flex-1 min-w-[150px] rounded-xl px-3 py-3 bg-[#fff] text-sm placeholder-gray-500 focus:outline-none focus:ring-2 w-full transition-all duration-200"])}">`);
      if (errors.phone) {
        _push(`<p class="text-red-500 text-xs mt-1">${ssrInterpolate(errors.phone)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><input type="email" placeholder="E-mail"${ssrRenderAttr("value", formData.value.email)} class="${ssrRenderClass([{ "border-red-500 ring-red-500": errors.email, "focus:ring-secondary": !errors.email }, "flex-1 min-w-[150px] rounded-xl px-3 py-3 bg-[#fff] text-sm placeholder-gray-500 focus:outline-none focus:ring-2 w-full transition-all duration-200"])}">`);
      if (errors.email) {
        _push(`<p class="text-red-500 text-xs mt-1">${ssrInterpolate(errors.email)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="md:col-span-1 flex flex-col justify-between h-full"><div class="flex-grow flex flex-col"><textarea placeholder="Mensagem" rows="6" class="${ssrRenderClass([{ "border-red-500 ring-red-500": errors.message, "focus:ring-secondary": !errors.message }, "flex-1 min-w-[150px] min-h-[166px] rounded-xl px-3 py-2 bg-[#fff] text-sm placeholder-gray-500 focus:outline-none focus:ring-2 w-full resize-none transition-all duration-200"])}">${ssrInterpolate(formData.value.message)}</textarea>`);
      if (errors.message) {
        _push(`<p class="text-red-500 text-xs mt-1">${ssrInterpolate(errors.message)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex justify-end mt-4">`);
      if (formStatus.value === "idle" || formStatus.value === "error") {
        _push(`<button type="submit" class="py-2 px-6 bg-secondary text-white rounded-xl hover:bg-secondary-dark focus:outline-none focus:ring-2 focus:ring-secondary-dark transition-colors duration-200"${ssrIncludeBooleanAttr(formStatus.value === "submitting") ? " disabled" : ""}> Enviar </button>`);
      } else {
        _push(`<!---->`);
      }
      if (formStatus.value === "submitting") {
        _push(`<div class="flex items-center justify-center py-2 px-6 text-secondary"><svg class="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Enviando... </div>`);
      } else {
        _push(`<!---->`);
      }
      if (formStatus.value === "success") {
        _push(`<div class="flex items-center text-green-600 font-medium py-2 px-6"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> Mensagem enviada com sucesso! </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></form></div><div class="info-contato lg:w-1/3 text-gray-700 space-y-1 items-center justify-center font-bold text-base leading-loose tracking-normal"><div class="flex items-center gap-2">`);
      _push(ssrRenderComponent(_component_font_awesome_icon, {
        icon: ["fas", "phone"],
        class: "text-secondary text-2xl"
      }, null, _parent));
      _push(` (49) 3361-9000 </div><div class="flex items-center gap-2">`);
      _push(ssrRenderComponent(_component_font_awesome_icon, {
        icon: ["fab", "whatsapp"],
        class: "text-secondary text-2xl"
      }, null, _parent));
      _push(` <a href="https://wa.me/5549999647738" target="_blank" rel="noopener noreferrer">(49) 99964-7738</a> / <a href="https://wa.me/5549999647738?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20de%20publicidade." target="_blank" rel="noopener noreferrer">(49) 99993-0921</a></div><div class="flex items-center gap-2 font-normal">`);
      _push(ssrRenderComponent(_component_font_awesome_icon, {
        icon: ["fas", "envelope"],
        class: "text-secondary text-2xl"
      }, null, _parent));
      _push(` vendas@battiston.com.br </div></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Contato.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=Contato-o55NEcSU.js.map
