<template>
    <div id='index-layout' class='indexlayout'>
        <el-container class='layout-container'>
            <!-- 顶部 -->
            <el-header class='top' :class='{ active:fullscreen }'>
                <div class="infos">
                    <router-link class="backHome" :to = "{ path:'/' }">
                        <span class='iconfont icon-home'></span>
                    </router-link>
                    <a class="outloding">
                        <span class='iconfont icon-tuichu'></span>
                    </a>
                    <span class='users'>
                        <i class='iconfont icon-user'></i>
                        <span class='dress'>全国海关信息中心（全国海关电子通关中心）</span>
                        <span class='role'>赵磊</span>
                        <!-- 权限下拉选择框 -->
                        <el-select v-model='optValue' popper-class='themeSelect' class='themeSelect'>
                            <el-option
                                v-for='item in options'
                                :key='item.value'
                                :value='item.value'
                            ></el-option>
                        </el-select>
                    </span>
                </div>
                <div class="top-right">
                    <span class='iconfont icon-theme' :class="{ active:isActive }" @click='themeShow'></span>
                    <span class='iconfont icon-full_screen' @click='fullScreen'></span>
                </div>
                <!-- 主题选择框 -->
                <div id='themeicon' :class="{ active:isActive }">
                    <ul class="themecon" id="choseTheme">
                        <li class="select">请选择主题</li>
                        <li v-for='item in themeList' :key='item.value' @click='choiceTheme(item)'><a>{{ item.value }}</a></li>
                    </ul>
                    <span class='el-icon-back arrow'></span>
                </div>
            </el-header>
            <el-container class='bottom'>
                <!-- 侧边栏 -->
                <el-aside :class ="{ active: lineActive }" id='mainSide'>
                    <!-- 菜单上方控制选项 -->
                    <div class="work">
                        <span class='iconfont icon-diannao'></span>
                        <span>我的工作台</span>
                    </div>
                    <!-- 侧边栏tab标签栏 -->
                    <el-tabs v-model="activeTag" @click='tagChange' class='scrollbar'>
                        <el-tab-pane label="我的定制" name='first'>
                            <!-- 侧边栏菜单 -->
                            <el-menu router unique-opened @select="handleSelect(currentMenus)" id='siderBar'>
                                <el-submenu v-for='item in menusList' :key='item.id' :index='item.path' :class='{ active:menus.first }' class='firstNode'>
                                    <template slot="title"><i class="el-icon-message"></i>{{ item.authName }}</template>
                                    <el-menu-item-group v-for='itemLi in item.children' :key='itemLi.id' :class='{ submenu:itemLi.children }' class='secondNode'>
                                        <el-menu-item :index='itemLi.path' :class='{ active:menus.second }'>{{ itemLi.authName }}</el-menu-item>
                                    </el-menu-item-group>
                                </el-submenu>
                            </el-menu>
                        </el-tab-pane>
                        <el-tab-pane label="我的查询" name='second'></el-tab-pane>
                        <el-tab-pane label="我的待办" name='third'>
                            <span slot='label'>
                                <el-badge :value='0' :max='99' class='badge-tip'></el-badge>
                                我的待办
                            </span>
                        </el-tab-pane>
                    </el-tabs>
                    <!-- 收缩侧边栏按钮 -->
                    <div class="line" :class ="{ active: lineActive }" @click='sidebarTrs'>
                        <img src="@imgs/slide.png" alt="">
                    </div>
                </el-aside>
                <!-- 主内容区域 -->
                <el-main :class ="{ active: lineActive }" id='page'>
                    <!-- 面包屑导航 -->
                    <!-- <el-breadcrumb separator='>'>
                        <el-breadcrumb-item :to='{path:"/"}' class='active'>数据维护</el-breadcrumb-item>
                        <el-breadcrumb-item :to='{path:"/"}'>文档展示</el-breadcrumb-item>
                        <el-breadcrumb-item :to='{path:"/"}'>数据展示</el-breadcrumb-item>
                    </el-breadcrumb> -->
                    <!-- 根据侧边栏路由注入不同组件切换内容区域的页面 -->
                    <transition :name="animateType" mode="out-in">
                        <keep-alive>
                            <!-- 渲染路由 -->
                            <router-view class='viewMain'></router-view>
                        </keep-alive>
                    </transition>
                </el-main>
            </el-container>
            <!-- loading加载组件 -->
            <sj-loading :loading='loading'></sj-loading>
        </el-container>
    </div>
</template>

<script>
import loading from '~/subtools/loading.vue'
// import Table from '~/Table.vue'
// let echarts = require('echarts')
export default {
    components:{
        'sj-loading': loading,
        // 'sj-table': Table
    },
    data () {
        return {
            // 页面切换动画种类
            animateType:'fade',
            // 页面切换动画集合
            animateArray:['fade','slide-fade','bounce','el-zoom-in-center'],
            // 全屏
            fullscreen:false,
            // 主题框选择是否弹出
            isActive:false,
            // 主题名称
            theme:'blue',
            // 侧边标签栏当前默认显示内容
            activeTag:'first',
            // 侧边栏收缩
            lineActive:false,
            // 权限下拉选择框
            options:[
                {value:'1',value:'监控指挥中心'},
                {value:'2',value:'系统管理员'},
                {value:'3',value:'应用管理员'},
                {value:'4',value:'普通用户'},
            ],
            // 左侧菜单选中效果
            menus:{
                first:'',
                second:''
            },
            // 权限下拉选择框 默认值
            optValue:'监控指挥中心',
            // 主题风格list
            themeList:[
                {value:'深空蓝',url:'static/theme/blue/blue.css'},
                {value:'暗夜黑',url:'static/theme/black/black.css'},
                {value:'科幻青',url:'static/theme/cyan/cyan.css'}
            ],
            // 记录选中的菜单项
            currentMenus:{'path':'table'},
            // loading动画
            loading:false,
            // 左侧菜单权限
            menusList:[
                {
                    id:'1',
                    authName:'测试功能demo',
                    path:'/test',
                    children:[
                        {
                            id:'1-1',
                            authName:'表格操作',
                            path:'/test/table'
                        },
                        {
                            id:'1-2',
                            authName:'表单可视化配置',
                            path:'/test/layout'
                        },
                        {
                            id:'1-3',
                            authName:'表单配置demo',
                            path:'/test/setting1'
                        },
                        {
                            id:'1-4',
                            authName:'已配置页面',
                            path:'/test/render'
                        }
                    ]
                },
                {
                    id:'2',
                    authName:'导航二',
                    path:'2',
                    children:[
                        {
                            id:'2-1',
                            authName:'选项1',
                            path:'2-1'
                        },
                        {
                            id:'2-2',
                            authName:'选项2',
                            path:'2-2'
                        }
                    ]
                },
                {
                    id:'3',
                    authName:'导航三',
                    path:'3',
                    children:[
                        {
                            id:'3-1',
                            authName:'选项1',
                            path:'3-1'
                        },
                        {
                            id:'3-2',
                            authName:'选项2',
                            path:'3-2'
                        }
                    ]
                }
            ]
        }
    },
    watch:{
        // 监听路由变化
        '$route.path' (newVal,oldVal) {
            let index = this.getRoundForm(0,this.animateArray.length-1)
            this.animateType = this.animateArray[index]
        }
    },
    mounted () {

    },
    methods:{
        // 主题选择框是否拉下
        themeShow () {
            this.isActive = !this.isActive
        },
        // 侧边标签栏切换
        tagChange (tab,event) {
            console.log(tab,event)
        },
        // 侧边栏伸缩
        sidebarTrs () {
            this.lineActive = !this.lineActive
        },
        // 全屏
        fullScreen () {
            this.fullscreen = !this.fullscreen
        },
        // 切换主题
        choiceTheme (v) {
            this.isActive = false;
            this.loading = true;
            document.querySelector('#theme').href = v.url;
            // 加1.5s延迟,如果不加会导致切换时偶尔卡顿
            setTimeout(() => {
                this.loading = false;
            },1500);
            // 保存到本地
            localStorage.setItem('themeVal',v.url);
        },
        handleSelect (v,key,keypath) {
            // console.log(v,key)
        },
        // 选取数组里随机一项 参数1为第一个可能的值 参数2为数组的最大索引值
        getRoundForm (first,sum) {
            let choice = sum - first + 1; // 可能的结果集
            return Math.floor(Math.random() * choice + first);
        }
    }
}
</script>

<style lang='scss'>
    @import '@styles/index.scss';
</style>
