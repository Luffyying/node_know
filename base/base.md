#### 简单介绍node

1. 创建一个server

2. 使用curl工具访问服务器 
```
    curl -i -X GET http://127.0.0.1:8080
```

3. 调试文件

```
    node debug xx.js
```
> debug \>help(进入node模式，查看帮助)

    list(n) 显示前后各n行代码
    sb(8) setbreakpoint 设置第八行为断点
    cont  继续
    重启服务 激活断点
    repl 查看当前断点下的各个变量内容
    退出 
    
