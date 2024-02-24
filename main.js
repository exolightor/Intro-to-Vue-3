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
            let i = this.cart.indexOf(id);
            i >= 0 ? this.cart.splice(i,1) : '';
        }
    }
})
