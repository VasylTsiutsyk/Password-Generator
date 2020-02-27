<template>
  <div>
    <input class="input" type="text" v-model="password" readonly>
    <md-button class="md-icon-button  md-raised md-primary" @click="refresh">
        <i class="fa fa-refresh"> </i>
    </md-button>
    <div>
      <md-button class="md-primary md-raised" v-clipboard:copy="password" v-clipboard:success="onCopy" v-clipboard:error="onError">Copy</md-button>
    </div>
  </div>
</template>

<script>
import { toast } from '../toast';
import Password from '../password';
const pass = new Password();

export default {
  name: 'PasswordGenerator',
  props: ['options'],
  data() {
    return {
      password: '',
    };
  },
  methods: {
    generate() {
      const characters = [];
      for (let option in this.options) {
        if (this.options[option] === true) characters.push(pass[option.toUpperCase()]);
      }
      this.password = pass.create(this.options.length, characters.join(''));
    },
    refresh() {
      this.generate();
    },
    onCopy() {
      toast({ message: 'Copied!' });
    },
    onError() {
      toast({ message: `I didn't copy that!` });
    },
  },
  watch: {
    options: {
      handler: function() {
        this.generate();
      },
      deep: true,
    },
  },
  mounted() {
    this.generate();
  },
};
</script>

<style scoped>
.input{
  width: calc(100% - 75px);
  font-size: 14px;
  padding: 5px;
  margin: 5px;
}
</style>
