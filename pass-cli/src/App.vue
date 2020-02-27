<template>
  <div id="app">
    <md-button class="md-primary md-raised" @click="showDialog = true">Generate password</md-button>
    <md-dialog :md-active.sync="showDialog">    
      <div class="dialog-wrap">
        <h1>Customize your password</h1>
        <PasswordGenerator :options="options" />
        <span class="notice-place"></span>
        <RangeField :length="options.length" @updateLength="onUpdateLength" />
        <div class="options">
          <CheckboxField :options="{name: 'lower',value: options.lower, label: 'Lowercase'}" @updateOption="onUpdateOption" />
          <CheckboxField :options="{name: 'upper',value: options.upper, label: 'Uppercase'}" @updateOption="onUpdateOption" />
          <CheckboxField :options="{name: 'digits',value: options.digits, label: 'Digits'}" @updateOption="onUpdateOption" />
          <CheckboxField :options="{name: 'symbols',value: options.symbols, label: 'Symbols'}" @updateOption="onUpdateOption" />
        </div>
      </div>
    </md-dialog>
  </div>
</template>

<script>
import PasswordGenerator from './components/PasswordGenerator';
import RangeField from './components/RangeField';
import CheckboxField from './components/CheckboxField';


export default {
  name: 'app',
  data() {
    return {
      showDialog:false,
      options: {
        length: 6,
        lower: true,
        upper: true,
        digits: true,
        symbols: false,
      },
    };
  },
  components: {
    PasswordGenerator,
    RangeField,
    CheckboxField,
  },
  methods: {
    onUpdateLength(value) {
      this.options.length = value;
    },
    onUpdateOption(target) {
      this.options[target.name] = target.checked;
    },
  },
};
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Roboto+Slab:700);
@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);

.dialog-wrap{
  height: 100%;
  width: 500px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.options {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.notice-place{
  position:fixed;
  top: 120px;
  left: 120px;
}
</style>
