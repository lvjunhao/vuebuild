export default {
    type: 'radio',
    name: '单选按钮',
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
}