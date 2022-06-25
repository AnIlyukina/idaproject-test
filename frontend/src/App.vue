<script>
import FormAddProduct from './components/FormAddProduct.vue';
import ProductList from './components/ProductList.vue';
import { mapActions, mapGetters } from 'vuex'

export default {
  name: "App",
  components: {
    FormAddProduct,
    ProductList
  },
  data(){
    return {
    }
  },
  created () {
    this.setProduct()
  },
  computed: {
    ...mapGetters(['productList'])
  },
  methods: {
    ...mapActions(['setProduct'])
  },
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

