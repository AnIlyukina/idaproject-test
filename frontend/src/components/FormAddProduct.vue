<template>
  <div class="catalog__form">
    <form
      class="catalog__form-fixed"
      @submit.prevent="addProduct"
    >
      <label class="catalog__form-label">
        <h5 class="catalog__form-label-title">
          Наименование товара
          <span
            class="catalog__form-label-required"
          />
        </h5>
        <input
          v-model="product.name"
          type="text"
          placeholder="Введите наименование товара"
          class="catalog__form-input"
          @input="validationName"
        >
      </label>
      <div class="catalog__form-error">
        <span
          v-if="errorValidation.name"
        >
            Поле является обязательным
        </span>
      </div>
      <label class="catalog__form-label">
        <h5 class="catalog__form-label-title">
          Описание товара
        </h5>
        <textarea
          v-model="product.description"
          placeholder="Введите описание товара"
          class="catalog__form-textarea"
          wrap="off"
          cols="30"
          rows="5"
        />
      </label>
      <div class="catalog__form-error"/>
      <label class="catalog__form-label">
        <h5 class="catalog__form-label-title">
          Ссылка на изображение товара
          <span
            class="catalog__form-label-required"
          />
        </h5>
        <input
          v-model="product.imageLink"
          type="text"
          class="catalog__form-input"
          placeholder="Введите ссылку"
          @input="validationImageLink"
        >
      </label>
      <div
        class="catalog__form-error">
        <span
          v-if="errorValidation.link">
          Поле является обязательным
        </span>
      </div>
      <label class="catalog__form-label">
        <h5 class="catalog__form-label-title">
          Цена товара
          <span
            class="catalog__form-label-required"
          />
        </h5>
        <input
          v-model="product.price"
          type="number"
          placeholder="Введите цену"
          class="catalog__form-input"
          @input="validationPrice"
        />
      </label>
      <div
        class="catalog__form-error">
        <span
          v-if="errorValidation.price">
          Поле является обязательным
        </span>
      </div>
      <button
        :disabled="isValidForm"
        type="submit"
        :class="[isValidForm ? 'disabled' : '', 'catalog__form-button']"
      >
        Добавить товар
      </button>
    </form>
  </div>

</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: "FormAddProduct",
  data() {
    return {
      errorValidation: {
        name: false,
        link: false,
        price: false
      },
      product: {
        name: '',
        imageLink: '',
        description: '',
        price: ''
      }
    }
  },
  props: {
    selectedOption: {
      type: String,
      default: ''
    }
  },
  computed: {
    isValidForm () {
      if (this.product.name === '' || this.product.imageLink === '' || this.product.price === ''){
        return true
      } else {
        return false
      }
    },
  },
  methods: {
    ...mapActions(['createProduct']),
    validationName(){
      this.product.name === '' ? this.errorValidation.name = true :  this.errorValidation.name = false
    },
    validationImageLink(){
      this.product.imageLink === '' ? this.errorValidation.link = true :  this.errorValidation.link = false
    },
    validationPrice(){
      this.product.price === '' ? this.errorValidation.price = true :  this.errorValidation.price = false
    },
    clearFields() {
      this.product = {
        name: '',
        imageLink: '',
        description: '',
        price: ''
      }
      this.selectedOption = ''
    },
    addProduct() {
      this.createProduct(this.product)   
      this.clearFields() 
    },
  }
}
</script>

<style lang="scss">
@import "../assets/scss/components/catalog/catalog__form.scss";
</style>