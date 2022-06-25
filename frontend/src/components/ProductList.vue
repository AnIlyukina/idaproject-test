<template>
    <div class="catalog__product-list">
        <ul class="catalog__product-list-grid">
            <li
                v-for="product,index in productList"
                :key="index"
                class="catalog__product-item"
                >
            <ProductItem
                :product="product"
            />
            </li>
        </ul>
    </div>
</template>

<script>
import ProductItem from "./ProductItem.vue";
export default {
  name: "ProductList",
  components: {
    ProductItem
  },
  props: {
    productList: Array,
    default() {
      return []
    }
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="scss">
@import "../assets/scss/components/catalog/catalog__prodict-list.scss";
</style>