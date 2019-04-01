<template>
    <el-table
            :data="products"
            stripe
            style="width: 100%">
        <el-table-column
                prop="title"
                label="Title"
                width="180">
        </el-table-column>
        <el-table-column
                prop="price"
                label="Price"
                width="180">
        </el-table-column>
        <el-table-column
                fixed="right"
                label="Actions"
                width="180">
            <template slot-scope="scope">
                <el-button
                        :disabled="!scope.row.inventory"
                        @click="addProductToCart(scope.row)" >Add to cart</el-button>

            </template>
        </el-table-column>
    </el-table>

</template>

<script>
    import {mapState, mapActions} from 'vuex'

    export default {
        computed: mapState({
            products: state => state.products.all
        }),
        methods: mapActions('cart', [
            'addProductToCart'
        ]),
        created() {
            this.$store.dispatch('products/getAllProducts')
        }
    }
</script>
