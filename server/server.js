const path = require('path')

const express = require('express')

const port = process.env.PORT || 3000
const publicPath = path.join(__dirname, '..', 'public')
const app = express()

app.use(express.static(publicPath))

// Redirect all requests (that don't have a file/folder match in publicPath) to index.html.
// Similar to the historyApiFallback property on webpack devServer.
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'))
})

app.listen(port, () => {
  console.log('Server is up!')
})
