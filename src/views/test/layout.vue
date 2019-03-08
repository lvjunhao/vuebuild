<template>
    <el-container style='width:100%' id='autoLayout'>
        <!-- 左侧组件选项开始 -->
        <el-aside>
            <el-menu>
                <el-submenu v-for='item in menusList' :key='item.name' :index='item.name' class='firstNode'>
                    <template slot="title">{{ item.name }}</template>
                    <draggable :list='item.formComponents'
                            :options="{group:{ name:'form',pull:'clone',put:false},sort:false,ghostClass:'ghost'}"
                        >
                        <transition-group type='transition' :name="'flip-list'">
                            <el-menu-item-group v-for='itemLi in item.formComponents' :key='itemLi.type' class='secondNode'>
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
                    <el-button type="primary" icon="el-icon-check" size="mini" @click="hanleSaveLayout">保存布局</el-button>
                </el-button-group>
            </div>
            <el-form class='layoutContainer' label-width='90px'>
                <draggable :list='widgetForm.list'
                    :options="{group:'form', ghostClass: 'ghost'}"
                    @add="handleWidgetAdd"
                >
                    <transition-group type='transition' :name="'flip-list'" class='transitionSpan'>
                        <template v-for="(item, index) in widgetForm.list">
                            <form-item v-if="item && item.key"  :key="item.key" :element="item" :select.sync="widgetFormSelect" :index="index" :data="widgetForm" @showDialog='hanleShowDialog'></form-item>
                        </template>
                    </transition-group>
                </draggable>
            </el-form>
        </el-main>
        <!-- 渲染视图区域结束 -->

        <!-- 参数配置开始 -->
        <el-dialog title='配置属性' :visible.sync='configAttrDialog'>
            <el-form :model='widgetFormSelect' v-if='widgetFormSelect.options' label-width='90px'>
                <el-form-item label='提示信息' v-if='widgetFormSelect.options.placeholder'>
                    <el-input v-model='widgetFormSelect.options.placeholder' autocomplete='off'></el-input>
                </el-form-item>
                <el-form-item label='默认值' v-if='widgetFormSelect.options.defaultValue'>
                    <el-input v-model='widgetFormSelect.options.defaultValue' autocomplete='off'></el-input>
                </el-form-item>
            </el-form>
        </el-dialog>
        <!-- 参数配置结束 -->

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
import renderView from '~/layouts/renderView.vue'
import renderForm from '~/layouts/renderform.vue'
import formItem from '~/layouts/formitem';
import { formComponents } from '~/layouts/configs/formConfig.js'
import { elementComponents } from '~/layouts/configs/eleConfig.js'
export default {
    components:{
        draggable,
        renderView,
        renderForm,
        formItem
    },
    data () {
        return {
            configAttrDialog:false,
            isrefresh:false, // 刷新路由
            previewVisible: false,
            widgetFormSelect: {
                options:{}
            },
            widgetModels: {},
            jsonTemplate: '',
            jsonVisible: false,
            widgetForm: {
                id:'',
                path:'',
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
                    elementComponents
                }
            ]
        }
    },
    watch:{
        widgetFormSelect (newVal, oldVal) {
            console.log(newVal, oldVal);
        }
    },
    methods:{
        hanleShowDialog (v) {
            this.configAttrDialog = v;
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
        handleWidgetAdd (evt) {
            const newIndex = evt.newIndex
            //为拖拽到容器的元素添加唯一 key
            const key = Date.parse(new Date()) + '_' + Math.ceil(Math.random() * 99999);
            this.$set(this.widgetForm.list, newIndex, {
                ...this.widgetForm.list[newIndex],
                options: {
                ...this.widgetForm.list[newIndex].options,
                remoteFunc: 'func_' + key
                },
                key,
                // 绑定键值
                model: this.widgetForm.list[newIndex].type + '_' + key,
                rules: []
            })

            if (this.widgetForm.list[newIndex].type === 'radio' || this.widgetForm.list[newIndex].type === 'checkbox') {
                this.$set(this.widgetForm.list, newIndex, {
                ...this.widgetForm.list[newIndex],
                options: {
                    ...this.widgetForm.list[newIndex].options,
                    options: this.widgetForm.list[newIndex].options.datas.map(item => ({
                    ...item
                    }))
                }
                })
            }

            if (this.widgetForm.list[newIndex].type === 'grid') {
                this.$set(this.widgetForm.list, newIndex, {
                ...this.widgetForm.list[newIndex],
                columns: this.widgetForm.list[newIndex].columns.map(item => ({...item}))
                })
            }

            this.widgetFormSelect = this.widgetForm.list[newIndex]
        },
        // 保存布局
        hanleSaveLayout () {
            this.$prompt("请输入页面ID","提示",{
                confirmButtonText:'确定',
                cancelButtonText:'取消'
            }).then(({value}) => {
                let idArr = [];
                let newObj = JSON.parse(JSON.stringify(this.widgetForm));
                newObj.id = value;
                newObj.path = '/test/saveLayout/render';
                // 存入之前先检测ID是否唯一
                this.$store.getters.formlayouts.forEach(item => {
                    idArr.push(item.id);
                });
                if (idArr.indexOf(value) == -1 && value != undefined && value != 'undefined' && value != null && value != 'nlll' && value.indexOf(" ") == -1) {
                    this.$store.dispatch('setconfiglist',newObj);
                    this.$message({
                        type:'success',
                        message:'保存成功! 你保存的页面名称为 : ' + value
                    });
                    // 清空当前页面布局
                this.widgetForm.list = [];
                } else if (idArr.indexOf(value) != -1) {
                    this.$message({
                        type:'error',
                        message:'保存失败! 此页面ID已存在,保存失败'
                    })
                } else {
                    this.$message({
                        type:'error',
                        message:'保存失败! 页面ID不能为空获含有非法字符!'
                    });
                }
            }).catch(() => {
                this.$message({
                    type:'info',
                    message:'取消操作'
                });
            });
        }
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
    .layoutContainer > div > .transitionSpan{
        display: block;
        min-height: 150px;
    }
</style>
