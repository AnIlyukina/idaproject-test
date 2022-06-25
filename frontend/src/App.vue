<script>
import FormAddProduct from './components/FormAddProduct.vue';
import ProductList from './components/ProductList.vue';

export default {
  name: 'App',
  components: {
    FormAddProduct,
    ProductList
  }
}


</script>

<template>
  <section class="catalog">
    <div class="catalog__header">
      <h1 class="catalog__header-title">
        Добавление товара
      </h1>
      <select class="catalog__header-select"/>
    </div>
    <div class="catalog__content">
      <FormAddProduct/>
      <ProductList/>
    </div>
  </section>
</template>

<style>

</style>
