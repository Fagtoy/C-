import { getStatus, hideDetailed, getDateFormat } from '@/mixins/main'
import { checkAccess } from '@/mixins/permissions'
import { mapState } from 'vuex'

export default {
  name: 'SailorRecordBookLineInfo',
  props: {
    sailorDocument: Object
  },
  data () {
    return {
      getStatus,
      checkAccess,
      hideDetailed,
      getDateFormat
    }
  },
  computed: {
    ...mapState({
      labelName: state => (state.main.lang === 'en') ? 'name_eng' : 'name_ukr'
    })
  }
}
