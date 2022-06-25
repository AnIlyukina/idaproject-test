<template>
    <div>
        <div class="catalog__product-icon-delete"/>
        <img :src='"./src/assets/images/" + product.image'/>
        <div class="catalog__product-info">
            <h3 class="catalog__product-name">
                {{ product.name }}
            </h3>
            <p class="catalog__product-description">
                {{ product.description }}
            </p>
            <strong class="catalog__product-price">
                {{ product.price }} руб.
            </strong>
        </div>
    </div>
</template>

<script>
export default {
  name: "ProductItem",
  props: {
    product: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>

</style>