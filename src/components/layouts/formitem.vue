<template>
  <el-form-item class="widget-view "
      v-if="element && element.key" 
      :class="{active: selectWidget.key == element.key, 'is_req': element.options.required}"
      :label="element.name"
      @click.native="handleSelectWidget(index)"
    >
        <template v-if="element.type == 'input'">
          <el-input 
            v-model="element.options.defaultValue"
            :placeholder="element.options.placeholder"
          ></el-input>
        </template>

        <template v-if="element.type == 'textarea'">
          <el-input type="textarea" :rows="5"
            v-model="element.options.defaultValue"
            :disabled="element.options.disabled"
            :placeholder="element.options.placeholder"
          ></el-input>
        </template>

        <template v-if="element.type == 'number'">
          <el-input-number 
            v-model="element.options.defaultValue" 
            :disabled="element.options.disabled"
            :controls-position="element.options.controlsPosition"
          ></el-input-number>
        </template>

        <template v-if="element.type == 'radio'">
          <el-radio-group v-model="element.options.defaultValue"
          >
            <el-radio
              :label="item.value" v-for="(item, index) in element.options.options" :key="item.value + index"
            >
              {{element.options.showLabel ? item.label : item.value}}
            </el-radio>
          </el-radio-group>
        </template>

        <template v-if="element.type == 'checkbox'">
          <el-checkbox-group v-model="element.options.defaultValue"
          >
            <el-checkbox
              :label="item.value" v-for="(item, index) in element.options.options" :key="item.value + index"
            >
              {{element.options.showLabel ? item.label : item.value}}
            </el-checkbox>
          </el-checkbox-group>
        </template>

        <template v-if="element.type == 'time'">
          <el-time-picker 
            v-model="element.options.defaultValue"
            :is-range="element.options.isRange"
            :placeholder="element.options.placeholder"
            :start-placeholder="element.options.startPlaceholder"
            :end-placeholder="element.options.endPlaceholder"
            :readonly="element.options.readonly"
            :disabled="element.options.disabled"
            :editable="element.options.editable"
            :clearable="element.options.clearable"
            :arrowControl="element.options.arrowControl"
          >
          </el-time-picker>
        </template>

        <template v-if="element.type == 'date'">
          <el-date-picker
            v-model="element.options.defaultValue"
            :type="element.options.type"
            :is-range="element.options.isRange"
            :placeholder="element.options.placeholder"
            :start-placeholder="element.options.startPlaceholder"
            :end-placeholder="element.options.endPlaceholder"
            :readonly="element.options.readonly"
            :disabled="element.options.disabled"
            :editable="element.options.editable"
            :clearable="element.options.clearable"
          >
          </el-date-picker>
        </template>

        <template v-if="element.type == 'rate'">
          <el-rate v-model="element.options.defaultValue"
            :max="element.options.max"
            :disabled="element.options.disabled"
            :allow-half="element.options.allowHalf"
          ></el-rate>
        </template>

        <template v-if="element.type == 'color'">
          <el-color-picker 
            v-model="element.options.defaultValue"
            :disabled="element.options.disabled"
            :show-alpha="element.options.showAlpha"
          ></el-color-picker>
        </template>

        <template v-if="element.type == 'select'">
          <el-select
            v-model="element.options.defaultValue"
            :disabled="element.options.disabled"
            :multiple="element.options.multiple"
            :clearable="element.options.clearable"
            :placeholder="element.options.placeholder"
          >
            <el-option v-for="item in element.options.options" :key="item.value" :value="item.value" :label="element.options.showLabel?item.label:item.value"></el-option>
          </el-select>
        </template>

        <template v-if="element.type=='switch'">
          <el-switch
            v-model="element.options.defaultValue"
            :disabled="element.options.disabled"
          >
          </el-switch>
        </template>

        <template v-if="element.type=='slider'">
          <el-slider 
            v-model="element.options.defaultValue"
            :min="element.options.min"
            :max="element.options.max"
            :disabled="element.options.disabled"
            :step="element.options.step"
            :show-input="element.options.showInput"
            :range="element.options.range"
          ></el-slider>
        </template>

        <!-- 操作按钮组 -->
        <div class='tools'>
            <span @click.stop="handleWidgetClone(index)" v-if="selectWidget.key == element.key">
                <i class='el-icon-circle-plus'></i>
            </span>
            <span @click.stop="settingConfig(index)" v-if="selectWidget.key == element.key">
                <i class='el-icon-setting'></i>
            </span>
            <span @click.stop="handleWidgetDelete(index)" v-if="selectWidget.key == element.key">
                <i class='el-icon-remove'></i>
            </span>
        </div>

    </el-form-item>
</template>

<script>
export default {
  props: ['element', 'select', 'index', 'data'],
  data () {
    return {
      selectWidget: this.select
    }
  },
  methods: {
    handleSelectWidget (index) {
      this.selectWidget = this.data.list[index]
    },
    handleWidgetDelete (index) {
        // 判断当前操作元素
        if (this.data.list.length - 1 === index) {
            if (index === 0) {
                this.selectWidget = {}
            } else {
                this.selectWidget = this.data.list[index - 1]
            }
        } else {
            this.selectWidget = this.data.list[index + 1]
        }

        this.$confirm('此操作将删除当前元素,是否继续?','提示',{
            confimButtonText:'确定',
            cancelButtonText:'取消',
            type:'warning'
        }).then(() => {
            this.$nextTick(() => {
                this.data.list.splice(index, 1) // 执行删除操作
            });
            // 删除提示
            this.$message({
                type:'warning',
                message:'删除成功!'
            });
        }).catch(() => {
            this.$message({
                type:'info',
                message:'已取消操作'
            });
        });
    },
    handleWidgetClone (index) {
      let cloneData = {
        ...this.data.list[index],
        options: {...this.data.list[index].options},
        key: Date.parse(new Date()) + '_' + Math.ceil(Math.random() * 99999)
      }

      if (this.data.list[index].type === 'radio' || this.data.list[index].type === 'checkbox') {

        cloneData = {
          ...cloneData,
          options: {
            ...cloneData.options,
            options: cloneData.options.options.map(item => ({...item}))
          }
        }
      }

      this.data.list.splice(index, 0, cloneData)

      this.$nextTick(() => {
        this.selectWidget = this.data.list[index + 1]
      })
    },
    settingConfig (index) {

    }
  },
  watch: {
    select (val) {
      this.selectWidget = val
    },
    selectWidget: {
      handler (val) {
        this.$emit('update:select', val)
      },
      deep: true
    }
  }
}
</script>
<style lang='scss' scoped>
    .tools {
        position: absolute;
        top: 0;
        right: 0;
        > span i {
            color: #a5b6cc;
            font-size: 16px; /*no*/
            margin:0 2px;
            transition: color .2s linear;
            &:hover {
                color: #5cb6ff;
                cursor: pointer;
            }
        }
    }
</style>
