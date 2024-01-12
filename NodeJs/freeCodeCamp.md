# Node.js

## 通过url的变量传递

这里有2种通过url传递变量的方法，一种是用params另一个是quary

quary：
```js
app.get('/api/v1/quary', (req, res) => {
  // (url = 'https//localhost:5600/api/v1/quary?name=john&id=4')
  // 这个url依然会到这段代码中处理，但是问号（ ？）后的内容会以quary object传递
  console.log(req.quary)    // output: {name: 'john', id: '4'}  
})
```

params
```js
app.get('/api/products/:productID', (req, res) => {
  console.log(req.params)
  const { productID } = req.params

  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  )
  if (!singleProduct) {
    return res.status(404).send('Product Does Not Exist')
  }

  return res.json(singleProduct)
})
```


## middleware

```js
const express = require('express')
const app = express()

//  req => middleware => res

const logger = (req, res, next) => {
  const method = req.method
  const url = req.url
  const time = new Date().getFullYear()
  console.log(method, url, time)
  next()
}

app.get('/', logger, (req, res) => {
  res.send('Home')
})
app.get('/about', logger, (req, res) => {
  res.send('About')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})

```