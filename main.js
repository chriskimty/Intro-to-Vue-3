const app = Vue.createApp({
    data() {
        return {
            // setting cart as array that has id of the product we pushed into it (this is more realistic)
            cart: [],
            premium: true
        }
    },
    methods: {
        updateCart(id) {
            this.cart.push(id)
        },
        removeItems(id) {
            // my solution
            this.cart.pop(id)
            // suggested solution: 
            //   const index = this.cart.indexOf(id)
            //     if (index > -1) {
            //         this.cart.splice(index, 1)
            //     }
        }
    }
})
