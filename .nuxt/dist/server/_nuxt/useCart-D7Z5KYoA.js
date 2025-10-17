import { ref } from "vue";
const cartCount = ref(0);
function useCart() {
  function addToCart() {
    cartCount.value++;
  }
  function resetCart() {
    cartCount.value = 0;
  }
  return { cartCount, addToCart, resetCart };
}
export {
  useCart as u
};
//# sourceMappingURL=useCart-D7Z5KYoA.js.map
