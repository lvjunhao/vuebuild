<template>
    <el-form class='layoutContainer'>
        <draggable :list='datas.list'
            :options="{group:'form', ghostClass: 'ghost'}"
            @end="handleMoveEnd"
            @add="handleWidgetAdd"
        >
            <template v-for="(item, index) in datas.list">
            <!-- <transition-group type='transition' :name="'flip-list'" class='item-transition'> -->
                <form-item v-if="item && item.key"  :key="item.key" :element="item" :select.sync="selectWidget" :index="index" :data="datas"></form-item>
            <!-- </transition-group> -->
            </template>
        </draggable>
    </el-form>
</template>

<script>
import draggable from 'vuedraggable';
import formItem from '~/layouts/formitem';
export default {
    components:{
        draggable,
        formItem,
    },
    props: ['datas', 'select'],
    data () {
        return {
            selectWidget: this.select
        }
    },
    // computed: {
    //     formdatas:{
    //         get() {
    //             return this.$store.getters.formlayouts
    //         },
    //         set(val) {
    //             console.log(1)
    //             this.$store.dispath('setconfiglist',formdatas.list)
    //         }
    //     }
    // },
    watch:{

    },
    methods:{
        handleMoveEnd ({newIndex, oldIndex}) {
            console.log('index', newIndex, oldIndex)
        },
        handleWidgetAdd (evt) {
            console.log('add', evt)
            const newIndex = evt.newIndex
            const to = evt.to
            //为拖拽到容器的元素添加唯一 key
            const key = Date.parse(new Date()) + '_' + Math.ceil(Math.random() * 99999)
            this.$set(this.datas.list, newIndex, {
                ...this.datas.list[newIndex],
                options: {
                ...this.datas.list[newIndex].options,
                remoteFunc: 'func_' + key
                },
                key,
                // 绑定键值
                model: this.datas.list[newIndex].type + '_' + key,
                rules: []
            })

            if (this.datas.list[newIndex].type === 'radio' || this.datas.list[newIndex].type === 'checkbox') {
                this.$set(this.datas.list, newIndex, {
                ...this.datas.list[newIndex],
                options: {
                    ...this.datas.list[newIndex].options,
                    options: this.datas.list[newIndex].options.datas.map(item => ({
                    ...item
                    }))
                }
                })
            }

            if (this.datas.list[newIndex].type === 'grid') {
                this.$set(this.datas.list, newIndex, {
                ...this.datas.list[newIndex],
                columns: this.datas.list[newIndex].columns.map(item => ({...item}))
                })
            }

            this.selectWidget = this.datas.list[newIndex]
        },
    },
    mounted () {
        
    }
}
</script>
<style scoped>
    .layoutContainer > div {
        min-height:150px;
    }
</style>

