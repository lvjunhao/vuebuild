<template>
    <div class="container">
        <render-form :data="widgetForm" :value="widgetModels" ref="generateForm"></render-form>
    </div>
</template>

<script>
import renderForm from '~/layouts/renderform.vue';
export default {
    components:{
        renderForm
    },
    data () {
        return {
            widgetForm:this.$store.getters.formlayouts,
            widgetModels:{}
        }
    },
    mounted () {

    }
}
</script>

<style scoped lang='scss'>
    .container {
        padding:25px;
    }
</style>
