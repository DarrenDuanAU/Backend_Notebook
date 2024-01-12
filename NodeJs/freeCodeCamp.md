# Node.js

```js
app.get('/api/v1/quary', (req, res) => {
  // (url = 'https//localhost:5600/api/v1/quary?name=john&id=4')
  console.log(req.quary)    // output: {name: 'john', id: '4'}  
})
```