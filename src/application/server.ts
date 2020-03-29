import app from './app'

app.get('/', (req, res) => {
  res.send('Hello WOrld')
})

app.listen(3000, () => console.log('Server running at http://localhost:3000'))
