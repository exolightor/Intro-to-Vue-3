const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        addToCart(id){
            this.cart.push(id);
        },
        removeItem(id){
            let index = this.cart.findIndex(e => e == e.id);
            this.cart.splice(index,1);
        }
    }
})
