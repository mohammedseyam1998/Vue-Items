<template>
    <div>
        <nav class="nav" style="padding: 10px;">
    <h2 class="nav__header">Products</h2>
    <div class="nav__cart">
      <button @click="showCart = !showCart" style="background: none;
    border: 0;
    color: white;
    cursor: pointer;">
        <i class="fas fa-shopping-cart" style="font-size: 30px;"></i>
      </button>
      <span class="total-quantity" style="height: 20px;
    width: 20px;">{{ totalQuantity }}</span>
      <div v-if="showCart" class="cart-dropdown">
        <ul class="cart-dropdown__list">
          <li
            v-for="product in cart"
            :key="product.id"
          >
          <div class="wishList">
            <div class="row">
            <div class="col-3">
              <div class="item-img">
                <img :src="product.brand">
              </div>
            </div>
            <div class="col-3">{{ product.name }}</div>
            <div class="col-3">
              <span>{{product.quantity}} </span>
            </div>
            <div class="col-3">
             
              <button @click="removeFave(product)"  type="button" class="btn btn-danger mb-2">Delete</button>
              <button type="button" class="btn btn-primary">Action</button>
            </div>
          </div>
          </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    <section class="products">
    <div v-for="product in products" :key="product.id" class="product">
      <h3 class="product__header">{{ product.name }}</h3>
      <img
        :src="product.brand"
        :alt="product.name"
        class="product__image"
      >
      <div class="icons">
              <i  @click="updateCart(product)" class="far fa-heart fa-lg discount"></i>
              <i class="fas fa-eye fa-lg "></i>
          </div>
           <div class="item">
                        <ul class="list-unstyled slider-eval" style="padding: 0;">
                        <li class="active"><i class="fas fa-star" style="font-size: 18px;"></i></li>
                        <li class="active"><i class="fas fa-star" style="font-size: 18px;"></i></li>
                        <li class="active"><i class="fas fa-star" style="font-size: 18px;"></i></li>
                        <li class="active"><i class="fas fa-star" style="font-size: 18px;"></i></li>
                        <li><i class="fas fa-star" style="font-size: 18px;"></i></li>

                        </ul>
                        <p class="product__description ">{{ product.description }}</p>
                        <div class="progress-bar"><span class="fill-color"></span></div>
                        <span class="sold">sold:10</span>
                    </div>
    </div>
  </section> 
       <!-- <Carousel :value="products" :numVisible="4" :numScroll="3" :responsiveOptions="responsiveOptions">
	<template #item="slotProps">
		<div class="car-details">
			<div class="p-grid p-nogutter" style="position: relative;">
				<div class="p-col-12" style="min-height: 66px;">
          <img :src="slotProps.data.brand" alt="kljhbh">
          <i  @click="updateCart(product)" class="far fa-heart discount"> </i>
          <i class="fas fa-eye fa-lg showpass-icon"></i>
					
				</div>
				<div class="p-col-12 ">
                       <div class="item">

                        <p class="mt-2" style="color: #3927ca;font-weight: bold;" >{{slotProps.data.name}}</p>
                        <ul class="list-unstyled slider-eval" style="padding: 0;">
                        <li class="active"><i class="fas fa-star" style="font-size: 18px;"></i></li>
                        <li class="active"><i class="fas fa-star" style="font-size: 18px;"></i></li>
                        <li class="active"><i class="fas fa-star" style="font-size: 18px;"></i></li>
                        <li class="active"><i class="fas fa-star" style="font-size: 18px;"></i></li>
                        <li><i class="fas fa-star" style="font-size: 18px;"></i></li>

                        </ul>
                        <p class="price">{{slotProps.data.description}}</p>
                        <div class="progress-bar"><span class="fill-color"></span></div>
                        <span class="sold">sold:10</span>
                    </div>
				</div>
			</div>
		</div>
	</template>
</Carousel> -->
    </div>
</template>
<script>
import swal from 'sweetalert'
export default {
    data() {
	return {
    showCart: false,
        products: [
        {
          id: 1,
          name: 'Product 1',
          description: 'This is an awesome product',
          brand:[require("../assets/img1.png")],
          quantity: 0,
        },
        {
          id: 2,
          name: 'Product 2',
          description: 'This is an awesome product',
          brand:[require("../assets/img2.png")],
          quantity: 0,
        },
        {
          id: 3,
          name: 'Product 3',
          description: 'This is an awesome product',
          brand:[require("../assets/img3.png")],
          quantity: 0,
        },
         {
          id: 4,
          name: 'Product 4',
          description: 'This is an awesome product',
          brand:[require("../assets/img4.png")],
          quantity: 0,
        },
        ],
        wishlist: [],
}

},
  computed: {
    cart() {
      return this.products.filter(product => product.quantity > 0);
    },
    totalQuantity() {
      return this.products.reduce(
        (total, product) => total + product.quantity,
        0
      );
    }
  },
methods:{
   updateCart(product) {      
        for (let i = 0; i < this.products.length; i++) {
          if (this.products[i].id === product.id) {
              this.products[i].quantity++;
              this.wishlist.push(this.products[i])
              console.log(this.wishlist)
               localStorage.setItem('store', JSON.stringify(this.wishlist[i]))
               
            }
           
        }
        },
      removeFave(product) {
      swal("Are you sure to delete this item?", {
      buttons: ["No", "Yes"],
      }).then(willDelete => {
        if(willDelete){
           this.wishlist.splice(product, 1)
          localStorage.setItem('wishlist', JSON.stringify(this.wishlist))
               
            }
           
        }
          
        
       
      )
      
    }
  ,
  goWishList(){
    this.$router.push('/wishlist')
  }
}
}
</script>
<style>
.wishList {
  border: 2px dashed #ccc;
  padding:10px
} 
.wishList .border-bottom{border-bottom: 2px solid #ccc; padding: 10px}
.wishList .item-img {
  width: 130px;
  height: 130px;
  background-color: #fff;
  padding: 2px;
}
.wishList .item-img img {
  width: 100%;
  height:100%
}

.wishList .item-row:last-child{border-bottom:none}
     .nav__cart .cart-dropdown {
    background: white;
    border: 1px solid lightgray;
    border-radius: 10px;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
    color: #333;
    font-size: 1.3rem;
    overflow: auto;
    padding: 0 1rem;
    position: absolute;
    right: 0;
    width: 500px;
}
.nav__cart .cart-dropdown .cart-dropdown__list {
    list-style: none;
}
        li {
          margin: 1rem 0;
        }
      



.products {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
  .product {
    border: 1px solid lightgray;
    border-radius: 10px;
    margin: 2rem;
    padding: 1rem;
  }
    .product__header {
      font-size: 2rem;
      text-align: center;
    }
    
    .product__description {
      font-size: 1.3rem;
      margin-top: 1rem;
    }




.cart {
  margin-top: 2rem;
  text-align: center;
}
  .cart__button {
    background: lightblue;
    border: 0;
    color: white;
    cursor: pointer;
    font-size: 1.5rem;
    font-weight: bold;
    height: 2.5rem;
    width: 2.5rem;
  }
  
  .cart__quantity {
    font-size: 1.5rem;
    margin: 0 1rem;
  }

.nav {
  align-items: center;
  background: salmon;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 50px;
}
    
    i {
      font-size: 10px;
    }
  .nav__cart {
    position: relative;
    }
     .total-quantity {
      align-items: center;
      background: lightblue;
      border-radius: 50%;
      display: flex;
      font-weight: bold;
      height: 10px;
      justify-content: center;
      padding: 0.5rem;
      position: absolute;
      right: -10px;
      top: -10px;
      width: 10px;
    }
#pv_id_1{
width: 100%;
}
.item .price{
  font-size:15px;
  color: rgb(189, 32, 32);
  font-weight: bold;
}
 .item .progress-bar{
  width:80%;
  margin: 0 auto;
  height:8px;
  background-color:rgb(206, 206, 206);
  margin-bottom: 5px;

}
.item .progress-bar .fill-color{
  background: rgb(192, 216, 126);
  display: block;
  width:80%;
  height:100%
}
 .item .sold {
  font-size: 15px;
  margin-left: -140px;
}
 .item .slider-eval li{
  display: inline-block;
}

.item .slider-eval li.active i{
  color:#f5ce41;

}
.discount{
  padding: 5px 8px;
  background-color: #ff712d;
  color: #fff;
  border-radius: 50%;
  margin-right: 10px;
  
}
.product img{
 height: 200px;
    width: 200px;
}

</style>
