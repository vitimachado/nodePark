import app from './app'
import './utils/config'

console.log(process.env.NODE_ENV)
const port = process.env.PORT || 3030

const server = app.listen(port, () => {
  console.log('App listening at port %s', port)
})
