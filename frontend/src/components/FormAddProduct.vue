<template>
  <div class="catalog__form">
    <form
      class="catalog__form-fixed"
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
        <span>
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
        <span>
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
        <span>
          Поле является обязательным
        </span>
      </div>
      <button
        type="submit"
        class="catalog__form-button"
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
        product: {
        name: '',
        link: '',
        description: '',
        price: ''
      }
    }
  }
}
</script>

<style lang="scss">
@import "../assets/scss/components/catalog/catalog__form.scss";
</style>