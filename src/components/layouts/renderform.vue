<template>
  <div>
    <el-form ref="generateForm" :model="models" :rules="rules">
      <template v-for="item in data.list">
          <render-form-item :key="item.key" :models.sync="models" :rules="rules" :widget="item"></render-form-item>
      </template>
    </el-form>
  </div>
</template>

<script>
import renderFormItem from '~/layouts/renderFormItem'

export default {
  components: {
    renderFormItem
  },
  props: ['data', 'value'],
  data () {
    return {
      models: {},
      rules: {}
    }
  },
  created () {
    this.generateModle(this.data.list)
  },
  methods: {
    generateModle (genList) {
      for (let i = 0; i < genList.length; i++) {
        if (genList[i].type === 'grid') {
          genList[i].columns.forEach(item => {
            this.generateModle(item.list)
          })
        } else {
          if (Object.keys(this.value).indexOf(genList[i].model) >= 0) {
            this.models[genList[i].model] = this.value[genList[i].model]
          } else {
            if (genList[i].type === 'blank') {
              this.models[genList[i].model] = genList[i].options.defaultType === 'String' ? '' : (genList[i].options.defaultType === 'Object' ? {} : [])
            } else {
              this.models[genList[i].model] = genList[i].options.defaultValue
            }
            
          }
          
          if (this.rules[genList[i].model]) {
            this.rules[genList[i].model] = [...this.rules[genList[i].model], ...genList[i].rules]
          } else {
            this.rules[genList[i].model] = [...genList[i].rules]
          }
          
        }
      }
    },
    getData () {
      return new Promise((resolve, reject) => {
        this.$refs.generateForm.validate(valid => {
          if (valid) {
            resolve(this.models)
          } else {
            reject(new Error('表单数据校验失败').message)
          }
        })
      })
    },
    refresh () {
      
    }
  },
  watch: {
    value: {
      deep: true,
      handler (val) {
        this.models = {...this.models, ...val}
      }
    }
  }
}
</script>
