app.component('product-details', {
    props: {
        details: {
            type: Array,
            required: true
        }
    }, 
    template:
    /*html*/
    `<ul> Details: 
        <li v-for="detail in details">{{ detail }}</li>
    </ul>`
})