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

实际上，middleware会在接收到req后，发送res前执行，所以叫middleware（中间件）。
```js
const express = require('express')
const app = express()

//  req => middleware => res

const logger = (req, res, next) => {
  const method = req.method
  const url = req.url
  const time = new Date().getFullYear()
  console.log(method, url, time)
  next()  // don't forget the next(), without it, the function won't automatically excute the next middleware or move on to next command.
}

// 注意middleware logger入参的位置
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


给所有route添加一个logger，为了避免重复，我们直接用app.use([logger, authorize])
```js
const express = require('express')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')
//  req => middleware => res
app.use([logger, authorize])
// 1， 注意这个use使用的位置，如果你想让所有的route使用这个middleware，我们就需要把这个use放在所有的route以前。注意：middleware会按列表内的顺序执行，也就是先执行logger，再执行authorize。

// app.use('/api', [logger, authorize])
// 2，如果添加一个url在之前，我们就会让对应的所有url执行这个middleware。

// api/home/about/products
app.get('/', (req, res) => {
  res.send('Home')
})

// app.use([logger, authorize])
// 3， 注意这个use使用的位置，如果你把use放到这里，上面的home page就不会执行这个middleware了，后面的route会执行这个middleware。

app.get('/about', (req, res) => {
  res.send('About')
})
app.get('/api/products', (req, res) => {
  res.send('Products')
})
app.get('/api/items', (req, res) => {
  console.log(req.user)
  res.send('Items')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})

```