<template>
<<<<<<< HEAD
    <el-container class="container render">
        <i class='el-icon-d-caret' @click='collapsePanel'></i>
        <transition name='el-zoom-in-center'>
            <el-aside class='aside' v-show='collapse'>
                <h1>页面列表</h1>
                <p v-if="this.$store.getters.formlayouts.length==0" class='warning'>暂无页面可选!</p>
                <ul>
                    <li v-for='(item,index) in this.$store.getters.formlayouts' :key='item.id' @click='handleSelect(item,index)' :class='{active:isactive == index}'>{{ item.id }}</li>
                </ul>
            </el-aside>
        </transition>
        <el-main style='padding-bottom:0;padding-right:0;'>
            <render-form v-if='item.id == currentItem' v-for='item in this.$store.getters.formlayouts' :data="item" :value="widgetModels" ref="generateForm" :key='item.id'></render-form>
            <el-alert
                class='tips'
                v-if='!currentItem'
                title='警告'
                center
                close-text="知道了"
                type='warning'
                description="你必须先在左侧页面列表中选择要显示的页面,如无可选择的页面,请先去配置中自定义创建一个!"
                show-icon>
            </el-alert>
        </el-main>
    </el-container>
=======
    <div class="container">
        <render-form :data="widgetForm" :value="widgetModels" ref="generateForm"></render-form>
    </div>
>>>>>>> d1eba4dc99d027d145efe129062f743c2f726ff5
</template>

<script>
import renderForm from '~/layouts/renderform.vue';
export default {
    components:{
        renderForm
    },
    data () {
        return {
<<<<<<< HEAD
            isactive:'',
            collapse:true,
            currentItem:"",
            currentForm:null,
=======
            widgetForm:this.$store.getters.formlayouts,
>>>>>>> d1eba4dc99d027d145efe129062f743c2f726ff5
            widgetModels:{}
        }
    },
    mounted () {

<<<<<<< HEAD
    },
    methods:{
        handleSelect (v,index) {
            this.currentItem = v.id;
            this.isactive = index;
        },
        collapsePanel () {
            this.collapse = !this.collapse;
        }
=======
>>>>>>> d1eba4dc99d027d145efe129062f743c2f726ff5
    }
}
</script>

<style scoped lang='scss'>
    .container {
<<<<<<< HEAD
        padding: 0;
        position: relative;
        > i {
            position: absolute;
            left: -15px;
            top: 0;
            transform: rotate(-45deg);
            font-size: 16px;/*no*/
            color: #57f3f3;
            &:hover {
                cursor: pointer;
            }
        }
        .aside {
            max-width: 150px;
            box-shadow: 2px 2px 2px #666;
            > h1 {
                padding-top: 15px;
                text-align: center;
                font-size: 14px;/*no*/
            }
            .warning {
                color: #E6A23C;
                text-align: center;
                margin-top: 50px;
            }
            > ul {
                padding-top: 30px;
                // padding-left: 10%;
                padding-right: 10%;
                > li {
                    margin:4px 0;
                    padding:3px 0;
                    padding-left: 10%;
                    &:hover,&:active,&:focus,&.active {
                        cursor: pointer;
                        color: #fff000;
                        border: 1px solid;
                        border-radius: 4px;
                    }
                }
            }
        }
        .el-main {
            .tips p{
                font-size: 16px;/*no*/
            }
        }
=======
        padding:25px;
>>>>>>> d1eba4dc99d027d145efe129062f743c2f726ff5
    }
</style>
