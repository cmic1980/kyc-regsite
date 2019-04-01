<template>
    <div>
        <h1>Shopping Cart Example</h1>
        <hr>
        <h2>Products</h2>
        <ProductList/>
        <hr>
        <ShoppingCart/>
    </div>
</template>

<script>
    import ProductList from '@/components/ProductList.vue'
    import ShoppingCart from '@/components/ShoppingCart.vue'

    export default {
        components: {ProductList, ShoppingCart},
        methods: {
            startHacking() {
                this.$notify({
                    title: 'It works!',
                    type: 'success',
                    message: 'We\'ve laid the ground work for you. It\'s time for you to build something epic!',
                    duration: 5000
                })
            }
        }
    }
</script>

<style>
    #app {
        font-family: Helvetica, sans-serif;
        text-align: center;
    }
</style>