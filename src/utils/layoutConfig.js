// 表单相关元素
export const formComponents = [
    // {
    //     type:'radio',
    //     name:'单选按钮组',
    //     options:{
    //         defaultvalue:'', // 默认选中 (某个label的值)
    //         datas:[
    //             {label:'1',value:'选项1'}, // label位按钮旁的文字提示  valu为选项值
    //             {label:'2',value:'选项2'},
    //             {label:'3',value:'选项3'}
    //         ]
    //     },
    //     style:{

    //     }
    // },
    // {
    //     type:'checkbox',
    //     name:'多选框',
    //     options:{
    //         defaultvalue:[], // 默认选中 (数组)
    //         datas:[
    //             {label:'1',value:'选项1'}, // label位按钮旁的文字提示  valu为选项值
    //             {label:'2',value:'选项2'},
    //             {label:'3',value:'选项3'}
    //         ]
    //     },
    //     style:{

    //     }
    // },
    {
        type: 'input',
        name: '单行文本',
        options: {
            defaultValue: '',
            required: false,
            dataType: 'string',
            pattern: '',
            placeholder: ''
        }
    },
    {
        type: 'textarea',
        name: '多行文本',
        options: {
            defaultValue: '',
            required: false,
            disabled: false,
            pattern: '',
            placeholder: ''
        }
    },
    {
        type: 'number',
        name: '计数器',
        options: {
            required: false,
            defaultValue: 0,
            min: '',
            max: '',
            step: 1,
            disabled: false,
            controlsPosition: ''
        }
    },
    {
        type: 'radio',
        name: '单选框组',
        options: {
            inline: false,
            defaultValue: '',
            showLabel: false,
            datas: [
                {
                    value: '选项1',
                    label: '选项1'
                },
                {
                    value: '选项2',
                    label: '选项2'
                },
                {
                    value: '选项3',
                    label: '选项3'
                }
            ],
            required: false,
            remote: false,
            remoteOptions: [],
            props: {
                value: 'value',
                label: 'label'
            },
            remoteFunc: ''
        }
    },
    {
        type: 'checkbox',
        name: '多选框组',
        options: {
            inline: false,
            defaultValue: [],
            showLabel: false,
            datas: [
                {
                    value: '选项1'
                },
                {
                    value: '选项2'
                },
                {
                    value: '选项3'
                }
            ],
            required: false,
            remote: false,
            remoteOptions: [],
            props: {
                value: 'value', 
                label: 'label'
            },
            remoteFunc: ''
        }
    },
    {
        type: 'time',
        name: '时间选择器',
        options: {
            defaultValue: '21:19:56',
            readonly: false,
            disabled: false,
            editable: true,
            clearable: true,
            placeholder: '',
            startPlaceholder: '',
            endPlaceholder: '',
            isRange: false,
            arrowControl: true,
            format: 'HH:mm:ss',
            required: false,
        }
    },
    {
        type: 'date',
        name: '日期选择器',
        options: {
            defaultValue: '',
            readonly: false,
            disabled: false,
            editable: true,
            clearable: true,
            placeholder: '',
            startPlaceholder: '',
            endPlaceholder: '',
            type: 'date',
            format: 'yyyy-MM-dd',
            timestamp: false,
            required: false,
        }
    }    
]

// 栅格布局元素
export const gridComponents = [
    {
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
]