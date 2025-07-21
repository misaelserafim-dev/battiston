import { ref } from 'vue'

const cartCount = ref(0)

export function useCart() {
  function addToCart() {
    cartCount.value++
  }

  function resetCart() {
    cartCount.value = 0
  }

  return { cartCount, addToCart, resetCart }
}