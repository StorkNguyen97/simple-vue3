<script setup lang="ts">
import useProducts from "../composables/products";

const { products } = await useProducts();
</script>

<template>
  <div>
    <h1>Products</h1>

    <div class="products">
      <div class="app-card" v-for="product in products" :key="product.id">
        <div class="app-card__body product">
          <img
            class="product__image"
            :src="product.images[0]"
            :alt="product.title"
          />
          <div class="product__content">
            <div class="product__content--title">
              {{ product.title }}
            </div>
            <div class="product__content__row">
              <div class="product__content__row--description">
                {{ product.description }}
              </div>
              <div class="product__content__row--price">
                ${{ Number(product.price) }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.products {
  grid-gap: 1.5rem;
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-top: 1rem;
}
.app-card {
  background-color: #fff;
  border: 1px solid #ebeef5;
  border-radius: 4px;
  color: #303133;
  overflow: hidden;
  transition: 0.3s;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  &__body {
    padding: 0;
  }
}
.product {
  &__image {
    width: 100%;
  }

  &__content {
    padding: 24px;

    &--title {
      font-size: 18px;
      font-weight: 700;
    }

    &__row {
      display: flex;
      justify-content: space-between;
      margin-top: 1rem;
      &--description {
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }

      &--price {
        margin-left: 1rem;
      }
    }
  }
}

h1 {
  margin: 40px 0 0;
}
</style>
