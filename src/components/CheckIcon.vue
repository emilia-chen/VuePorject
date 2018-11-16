<template>
  <div>
    <div style="padding:15px;">
      <check-icon disabled :value.sync="demo1"> {{ $t('Do you agree?') }} ({{ demo1 }})</check-icon><button>你好</button>
      <br>
      <br>
      <check-icon disabled  :value.sync="demo2" type="plain"> {{ $t('Do you agree?') }} ({{ demo2 }})</check-icon>
    </div>
  </div>
</template>

<i18n>
'Do you agree?':
  zh-CN: 同意不？
</i18n>

<script>
import { CheckIcon } from 'vux'

export default {
  components: {
    CheckIcon
  },
  data () {
    return {
      demo1: true,
      demo2: true
    }
  }
}
</script>