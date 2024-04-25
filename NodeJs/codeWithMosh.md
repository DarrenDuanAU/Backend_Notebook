# Node.js

## Getting Started with Node
So, in this section, you learned that:
- Node is a runtime environment for executing JS code.
- Essentially, Node is a C++ program that embeds Chrome’s v8 engine, the fastest
JS engine in the world.
- We use Node to build fast and scalable networking applications. It’s a perfect
choice for building RESTful services.
- Node applications are single-threaded. That means a single thread is used to
serve all clients.
- Node applications are asynchronous or non-blocking by default. That means
when the application involves I/O operations (eg accessing the file system or the
network), the thread doesn’t wait (or block) for the result of the operation. It is
released to serve other clients.
- This architecture makes Node ideal for building I/O-intensive applications.
- You should avoid using Node for CPU-intensive applications, such as a video
encoding service. Because while executing these operations, other clients have
to wait for the single thread to finish its job and be ready to serve them.
- In Node, we don’t have browser environment objects such as window or the
document object. Instead, we have other objects that are not available in
browsers, such as objects for working with the file system, network, operating
system, etc. 

# Node Module system
- by default: a file is module (a function or variable defined in one module are scoped to that file)

```js
// 所有的variable和function默认都是private。
var url = 'http://mylogger.io/log';

function logger(message) {
  console.log(message)
}

//我们可以在export的时候改名。export的内容就类似于DVD player上面的按钮。
module.exports.logger = logger;
module.exports.endPoint = url;
```

# 开始一个新的node.js后端

```bash
mkdir npm-demo
cd npm-demo
npm init --yes



```
