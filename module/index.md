### node module

> 按照下面的顺序优先级查找

1. core module

```
    var h = require('http')
```

2. node_module

```
    npm install
```

3. local module

```
    var a = require('./b.js')
    a.sum 


    module.exports.sum = 9
    //exports.sum = 9
    //commonjs
```

4. 创建模块的几种方式

> 全局 (无module.exports等关键字)
> 

5. module.exports vs exports
> module.exports 可以赋值为任意类型
   exports 只能是对象object 是module.export的一个引用,实际上返回的还是module.exports,
   如果此时module.exports指针改变了，exports也就无用了

6. 模块共享

> 模块在第一次加载的后，会缓存
