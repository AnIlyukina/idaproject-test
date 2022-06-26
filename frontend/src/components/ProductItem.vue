<template>
    <div>
        <div class="catalog__product-icon-delete" @click="deleteItem"/>
        <img :src='product.imageLink' class="catalog__product-image"/>
        <div class="catalog__product-info">
            <h3 class="catalog__product-name">
                {{ product.name }}
            </h3>
            <p class="catalog__product-description">
                {{ product.description }}
            </p>
            <strong class="catalog__product-price">
                {{ product.price.toLocaleString() }} руб.
            </strong>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: "ProductItem",
  props: {
    product: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    ...mapActions(['deleteProduct']),
    deleteItem(){
      this.deleteProduct(this.product)
    }
  }
}
</script>

<style scoped>

</style>