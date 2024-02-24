const app = Vue.createApp({
    data() {
        return {
            cart:0,
            product: 'Socks',
            brand: 'Vue Mastery',
            details: ['50% cotton', '30% wool', '20% polyester'],
            selectedVariant: 0,
            variants: [
              { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
              { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
            ],
            onSale: true
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateVariant(index) {
            this.selectedVariant = index;
        }
    },

    computed: {

        inStock(){
            return this.variants[this.selectedVariant].quantity;
        },

        title(){
            return this.brand + ' ' + this.product
        },

        image(){
            return this.variants[this.selectedVariant].image;
        },

        sale(){
            return this.onSale ? this.title + 'is on sale!' : '';
        }
    }
})
