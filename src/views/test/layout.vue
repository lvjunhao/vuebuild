<template>
    <el-container style='width:100%' id='autoLayout'>
        <!-- 左侧组件选项开始 -->
        <el-aside>
            <el-menu>
                <el-submenu v-for='item in menusList' :key='item.name' :index='item.name'>
                    <template slot="title">{{ item.name }}</template>
                    <draggable :list='item.formComponents'
                            :options="{group:{ name:'form',pull:'clone',put:false},sort:false,ghostClass:'ghost'}"
                            @end="handleMoveEnd"
                            @start="handleMoveStart"
                            @clone="cloneNode"
                            :move="handleMove"
                        >
                        <transition-group type='transition' :name="'flip-list'">
                            <el-menu-item-group v-for='itemLi in item.formComponents' :key='itemLi.type'>
                                <el-menu-item :index='itemLi.type' class='list-group-item'>{{ itemLi.name }}</el-menu-item>
                            </el-menu-item-group>
                        </transition-group>
                     </draggable>
                </el-submenu>
            </el-menu>   
        </el-aside>
        <!-- 左侧组件选项结束 -->

        <!-- 渲染视图区域开始 -->
        <el-main>
            <div class="header clearfix">
                <el-button-group style='float:right'>
                    <el-button type="primary" icon="el-icon-view" size="mini" @click="handlePreview">预览页面</el-button>
                    <el-button type="primary" icon="el-icon-tickets" size="mini" @click="handleGenerateJson">生成JSON</el-button>
                </el-button-group>
            </div>
            <layout-view :datas="widgetForm" :select.sync="widgetFormSelect"></layout-view>
        </el-main>
        <!-- 渲染视图区域结束 -->

        <!-- 预览页面开始 -->
        <render-view :visible="previewVisible" @on-close="previewVisible = false" ref="widgetPreview" @on-submit="handleTest" width="1000px">
            <render-form v-if="previewVisible" :data="widgetForm" :value="widgetModels" ref="generateForm"></render-form>
        </render-view>
        <!-- 预览页面结束 -->

        <!-- 预览json配置开始 -->
        <render-view :visible="jsonVisible" @on-close="jsonVisible = false" ref="jsonPreview" width="1000px">
            <textarea cols="20" rows="10" readonly id="jsoneditor" style="height: 50vh;width: 100%;resize:none">{{ jsonTemplate }}</textarea>
            <template slot="action">
                <el-button id="copybtn" type='primary' @click='copyFun' >复制</el-button>
            </template>
        </render-view>
        <!-- 预览json配置结束 -->

    </el-container>
</template>

<script>
import draggable from 'vuedraggable'
import layoutView from '~/layouts/form.vue'
import renderView from '~/layouts/renderView.vue'
import renderForm from '~/layouts/renderform.vue'
import { formComponents, gridComponents } from '@/utils/layoutConfig.js'
export default {
    components:{
        draggable,
        layoutView,
        renderView,
        renderForm
    },
    data () {
        return {
            previewVisible: false,
            widgetFormSelect: null,
            widgetModels: {},
            jsonTemplate: '',
            jsonVisible: false,
            widgetForm: {
                list: []
            },
            formComponents,
            menusList:[
                {
                    name:'表单元素',
                    formComponents
                },
                {
                    name:'栅格布局',
                    gridComponents
                }
            ]
        }
    },
    methods:{
        handleMoveStart () {
            
        },
        handleMoveEnd () {
            
        },
        cloneNode () {
            
        },
        handleMove () {

        },
        copyFun () {
            var copyjson = document.getElementById('jsoneditor');
            copyjson.select();
            document.execCommand("Copy"); // 执行浏览器复制命令
            this.$message({
                message: '复制成功,请在需要处黏贴',
                type: 'success'
            });
        },
        handlePreview () {
            this.previewVisible = true
        },
        handleTest () {
            this.$refs.generateForm.getData().then(data => {
                this.$alert(data, '').catch(e=>{})
                this.$refs.widgetPreview.end()
            }).catch(e => {
                this.$refs.widgetPreview.end()
            })
        },
        handleGenerateJson () {
            this.jsonVisible = true
            this.jsonTemplate = this.widgetForm
        },
    }
}
</script>

<style lang='scss' scoped>
    #index-layout .layout-container .bottom #page.el-main > .viewMain {
        height: 100%;
    }
    #autoLayout {
        #jsoneditor {
            color:#333;
            &:disabled {
                background-color: #f6f6f6;
            }
        }
        .el-aside {
            width: 200px!important;
            box-shadow: 2px 2px 2px #666;
            padding-top: 5px;
            .el-submenu {
                .el-menu-item-group__title {
                    padding: 0;
                }
                .el-menu-item-group {
                    height: auto;
                }
                .el-menu-item, .el-submenu__title {
                    height: auto;
                    line-height: 1;
                    padding:8px 0;
                }
            }
        }
    }
</style>
