/*
Step 1: 
const app = Vue.createApp({Options Object})
we add the Options object; this allows us to add some optional properties to config our app. It is not "optional", so at least an empty object needs to be passed.

This creates our Vue 'instance', which is the heart of Vue app, which powers everything. 

Step 2: 
On that options object, we added our 
data() <-- data option
which returned an object full of our data (right now, it's just product w/ a value of 'Socks)
*/

const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_green.jpg',
            url: 'https://google.com'
            
        }
    }
})
