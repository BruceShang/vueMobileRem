<template>
    <div class="checkbox-component">
        <input type="checkbox"
               class="checkbox-component__input"
               :id="id"
               :name="name"
               :value="value"
               :class="className"
               :required="required"
               :disabled="disabled"
               @change="onChange"
               :checked="state">
        <label :for="id" class="checkbox-component__label">
          <span class="checkbox-component__indicator we-icon"></span>
            <slot></slot>
        </label>
    </div>
</template>

<script>
export default {
  model: {
    prop: 'modelValue',
    event: 'input',
  },
  props: {
    id: {
      type: String,
      default() {
        return `checkbox-id-${this._uid}`
      },
    },
    name: {
      type: String,
      default: null,
    },
    value: {
      default: null,
    },
    modelValue: {
      default: undefined,
    },
    className: {
      type: String,
      default: null,
    },
    checked: {
      type: Boolean,
      default: false,
    },
    required: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    model: {},
  },
  computed: {
    state() {
      if (this.modelValue === undefined) {
        return this.checked
      }
      if (Array.isArray(this.modelValue)) {
        return this.modelValue.indexOf(this.value) > -1
      }
      return !!this.modelValue
    },
  },
  mounted() {
    if (this.checked && !this.state) {
      this.toggle()
    }
  },
  methods: {
    onChange() {
      this.toggle()
    },
    toggle() {
      let value
      if (Array.isArray(this.modelValue)) {
        value = this.modelValue.slice(0)
        if (this.state) {
          value.splice(value.indexOf(this.value), 1)
        } else {
          value.push(this.value)
        }
      } else {
        value = !this.state
      }
      this.$emit('input', value)
    },
  },
  watch: {
    checked(newValue) {
      if (newValue !== this.state) {
        this.toggle()
      }
    },
  },
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .checkbox-component {
    display: inline-block;
    padding-left: 44px;
    position: relative;
    vertical-align: middle;

    &__input {
      height: 44px;
      opacity: 0;
      z-index: 1;
    }
    &__input:checked + label > span {
      border-color: #222;
      color: #222;
      font-size: 35px;
    }
    &__input,
    &__indicator {
      left: 0;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 44px;

    }
    &__indicator {
      border: 1px solid #ececec;
      color: #ececec;
      display: block;
      font-size: 0;
      height: 44px;
      line-height: 44px;
      text-align: center;
      width: 44px;
      border-radius: 3px;
      &::before {
        content: "\e61e";
      }
      // ^[1]__input:checked ^[1..-1]~ & {
      //   border-color: #222;
      //   color: #222;
      //   font-size: 35px;
      // }
    }
    &__label {
      // margin-left: 12px;  
    }
  }
</style>