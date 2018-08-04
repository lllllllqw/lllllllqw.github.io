<script>
import Counter from '../components/Counter'
import { connector } from '../store.js'

export default connector.connect({
  mapStateToProps: {
    total: state => state.count
  },
  mapCommitToProps: {
    onIncrease: 'increment',
    onDecrease: 'decrement'
  }
})(Counter)
</script>
