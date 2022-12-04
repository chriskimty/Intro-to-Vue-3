const app = Vue.createApp({
    data() {
        return {
            cart:0,
            product: 'Socks',
            brand: 'Vue Mastery',
            // image: './assets/images/socks_blue.jpg',
            selectedVariant: 0,
            // inStock: false,
            details: ['50% cotton', '30% wool', '20% polyester'],
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
        },updateVariant(index) {
            this.selectedVariant = index
        }
    },
    // Add computed properties (think of it like a calculator)
    // Benefit of this is that it caches the value (stores it away) and only updates when it needs to => boosts performance
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            // inside the [] is the index!
            return this.variants[this.selectedVariant].image
        },
        inStock() {
            // inside the [] is the index!
            return this.variants[this.selectedVariant].quantity
        },
        displaySale() {
            return this.onSale 
                ? `${this.brand} ${this.product} is on sale!`
                : ''
        }
    }
})
