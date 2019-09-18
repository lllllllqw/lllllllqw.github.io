import { from } from 'rxjs'

const ob = from(['1', '2', '3', '4'])

ob.subscribe({
  next: (val) => {
    console.log(val)
  },
})

