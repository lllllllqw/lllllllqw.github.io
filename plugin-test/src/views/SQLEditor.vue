<template>
<div style="text-align: left;">
  <codemirror ref="myCm" v-model="code" :options="cmOptions" style="width: 599px;"></codemirror>
  </div>
</template>

<script>
// require component
import { codemirror } from 'vue-codemirror'

// require styles
import 'codemirror/lib/codemirror.css'

// language js
import 'codemirror/mode/sql/sql.js'
// theme css
import 'codemirror/theme/base16-dark.css'
// more codemirror resources
// import 'codemirror/some-resource...'
export default {
  components: {
    codemirror
  },
  data() {
    return {
      code: 'select * from table_a',
      cmOptions: {
        // codemirror options
        tabSize: 4,
        mode: 'text/x-sql',
        theme: 'base16-dark',
        lineNumbers: true,
        line: true
        // more codemirror options, 更多 codemirror 的高级配置...
      }
    }
  },
  methods: {
    onCmReady(cm) {
      console.log('the editor is readied!', cm)
    },
    onCmFocus(cm) {
      console.log('the editor is focus!', cm)
    },
    onCmCodeChange(newCode) {
      console.log('this is new code', newCode)
      this.code = newCode
    }
  },
  computed: {
    codemirror() {
      return this.$refs.myCm.codemirror
    }
  },
  mounted() {
    console.log('this is current codemirror object', this.codemirror)
    // you can use this.codemirror to do something...
  }
}
</script>
