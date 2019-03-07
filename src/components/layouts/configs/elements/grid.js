export default {
    type:'grid',
    name:'栅格布局',
    options:{
        gutter:0, // 指定每一栏之间的间隔
        type:'', // 是否启用flex布局 (为flex即表示启用)
        justify:'', // flex布局下水平排列方式  可选值为: start/end/center/space-around/space-between
        align:'', // flex布局下垂直排列方式 可选值为 top/middle/bottom,
        // 上面为row的参数,下方为col的参数
    },
    columns:[
        {
            span:12, // 系统默认总宽度分成24份,12即表示占50%
            offset:0, // 栅格左侧的间隔格数
            pull:0, // 栅格向左移动格数
            push:0, // 栅格向右移动格数
            list:[]
        },
        {
            span:12,
            offset:0, // 栅格左侧的间隔格数
            pull:0, // 栅格向左移动格数
            push:0, // 栅格向右移动格数
            list:[]
        }
    ]
}
