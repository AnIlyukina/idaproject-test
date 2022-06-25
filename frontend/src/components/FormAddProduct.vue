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
          v-model="product.link"
          type="text"
          class="catalog__form-input"
          placeholder="Введите ссылку"
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
          onchange="applyMask"
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
        link: '',
        description: '',
        price: ''
      }
    }
  },
  watch: {
    'product.name'(newValue) {
      newValue === '' ? this.errorValidation.name = true :  this.errorValidation.name = false
    },
    'product.link'(newValue) {
      newValue === '' ? this.errorValidation.link = true :  this.errorValidation.link = false
    },
    'product.price'(newValue) {
      newValue === '' ? this.errorValidation.price = true :  this.errorValidation.price = false
    }
  },
  computed: {
    isValidForm () {
      if (this.product.name === '' || this.product.link === '' || this.product.price === ''){
        return true
      } else {
        return false
      }
    },
  },
  methods: {
    addProduct() {

    },
    applyMask(value){
      console.log('ds')
      this.product.price = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
    }
  }
}
</script>

<style lang="scss">
@import "../assets/scss/components/catalog/catalog__form.scss";
</style>