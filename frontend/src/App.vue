<script>
import FormAddProduct from './components/FormAddProduct.vue';
import ProductList from './components/ProductList.vue';

export default {
  name: 'App',
  components: {
    FormAddProduct,
    ProductList
  },
  data() {
    return {
      productList: [
        {
          name: 'Наименование товара',
          description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price: 10000,
          image: 'product.png'
        },
        {
          name: 'Наименование товара',
          description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price: 10000,
          image: 'product.png'
        },
         {
          name: 'Наименование товара',
          description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price: 10000,
          image: 'product.png'
        },
        {
          name: 'Наименование товара',
          description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price: 10000,
          image: 'product.png'
        },
         {
          name: 'Наименование товара',
          description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price: 10000,
          image: 'product.png'
        },
        {
          name: 'Наименование товара',
          description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price: 10000,
          image: 'product.png'
        },
         {
          name: 'Наименование товара',
          description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price: 10000,
          image: 'product.png'
        },
        {
          name: 'Наименование товара',
          description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price: 10000,
          image: 'product.png'
        }
      ]
    }
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
      <ProductList
        :productList="productList"
      />
    </div>
  </section>
</template>

<style lang="scss">
@import './assets/scss/variables.scss';
@import "assets/scss/fonts.scss";
@import "assets/scss/components/body.scss";
@import "assets/scss/components/catalog/catalog.scss";
@import "assets/scss/components/catalog/catalog__header.scss";
</style>

