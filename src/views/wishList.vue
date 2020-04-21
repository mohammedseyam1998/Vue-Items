<template>
    <div>
         
      <span class="total-quantity">11111111{{ quantity }}</span>
      <div class="cart-dropdown">
        <ul class="cart-dropdown__list">
          <li
            v-for="product in products"
            :key="product.id"
          >
            {{ product.name }} ({{ product.quantity }})
          </li>
        </ul>
      </div>
    
    </div>
</template>
<script>

export default {
    props:['products','quantity'],
    data(){
        return{

        }
    }
}
</script>