<script>
import FormAddProduct from './components/FormAddProduct.vue';
import ProductList from './components/ProductList.vue';
import Loader from './components/Loader.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: "App",
  components: {
    FormAddProduct,
    ProductList,
    Loader
  },
  data(){
    return {
      selectedOption: '',

      options:[
        {name: 'min цена', value: 'min'},
        {name: 'max цена', value: 'max'},
        {name: 'по наименованию', value: 'name'},
      ],
    }
  },
  created () {
    this.setProduct()
  },
  watch: {
    selectedOption() {
      this.sortProductList(this.selectedOption)
    }
  },
  computed: {
    ...mapGetters(['productList', 'loading', 'errorMessage']),
    sortedProductList() {
      this.sortProductList(this.selectedOption)
    }
  },
  methods: {
    ...mapActions(['setProduct']),
    sortProductList(option) {
      switch (option) {
        case '':
          this.productList;
          break;
        case 'min':
          this.productList.sort(function(a, b){return a.price - b.price});
          break;
        case 'max':
          this.productList.sort(function(a, b){return b.price - a.price})
          break;
        case 'name':
           this.productList.sort(function(a, b){
             let nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
              if (nameA < nameB)
                return -1
              if (nameA > nameB)
                return 1
              return 0
           });
          break;
        default:
          console.log('Ошибка');
      }
    }
  },
}

</script>

<template>
  <div>
    <section class="catalog">
        <div class="catalog__header">
          <h1 class="catalog__header-title">
            Добавление товара
          </h1>
          <select v-model="selectedOption" class="catalog__header-select">
            <option disabled value="">по умолчанию</option>
            <option
              :value="option.value"
              v-for="(option,index) in options"
              :key="index"
              >
              {{ option.name }}
            </option>
          </select>
        </div>
        <div class="catalog__content">
          <FormAddProduct/>
          <ProductList
            :productList="productList"
          />
        </div>
      </section>
      <transition>
        <Loader v-if="loading"/>
      </transition>
  </div>
</template>

<style lang="scss">
@import './assets/scss/variables.scss';
@import "assets/scss/fonts.scss";
@import "assets/scss/components/body.scss";
@import "assets/scss/components/catalog/catalog.scss";
@import "assets/scss/components/catalog/catalog__header.scss";

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
</style>

