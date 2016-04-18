## daily
1. *2016.03.21* 今天开始记学习日记，为下一步建立博客做一点素材的积累。

2. *2016.03.21* 破解版**webstorm**的安装。
    * 复制JetbrainsCrack-2.5.3.jar到D盘根目录
    * 找到idea安装目录/bin/idea.exe.vmoptions和idea64.exe.vmoptions
    * 追加一行"-javaagent:D:/JetbrainsCrack-2.5.3.jar"。
    * 注意，文件最后一定要有一行空白行

3. *2016.03.21* 《python核心编程》类关于**包装**内容。

4. *2016.03.22* 核心编程继续**包装**，进度13.16.4，twrapme.py例子书中有错误，看源码才改正错误。并做了实际验证，还用到了sleep()方法。

5. 廖学峰javascrip教程**变量提升**部分算作难点。

6. *2016.03.23* 《python核心编程》的**描述符**部分真是听的我云里雾里。
    * 大概体会是说**描述符**本质就是一个类，和**封装**的概念很相似。
    * 类描述符对于类而言。是不是相当于装饰器对于函数的意义？

7. *2016.03.23* 廖学峰的javascript教程。
    * 进度**闭包**；
    * 今天sort()高级函数是个坑，默认竟然是字典序的，需要传入一个比较函数作为参数。

8. *2016.03.24* **generator**是根据python中的概念来的，本质就是执行过程中**多次返回**。

9. javascript廖学峰中注意事项。
    * >不要使用new Number()、new Boolean()、new String()创建包装对象；
    * >用parseInt()或parseFloat()来转换任意类型到number；
    * >用String()来转换任意类型到string，或者直接调用某个对象的toString()方法；
    * >通常不必把任意类型转换为boolean再判断，因为可以直接写if (myVar) {...}；
    * >typeof操作符可以判断出number、boolean、string、function和undefined；
    * >判断Array要使用Array.isArray(arr)；
    * >判断null请使用myVar === null；
    * >判断某个全局变量是否存在用typeof window.myVar === 'undefined'；
    * >函数内部判断某个变量是否存在用typeof myVar === 'undefined'。

10. *2016.03.24*今天**属性和property()**部分的内容也似懂非懂，暂时跳过，开始撸ch14。

11. *2016.03.25*javascrip**sublime**配置：

`{
"cmd": ["/System/Library/Frameworks/JavaScriptCore.framework/Versions/A/Resources/jsc", "$file"],
"selector": "source.js"
}`

12. *2016.03.29*开始阅读**HTML5与CSS3权威指南（第二版）**
13. *2016.04.18*《Web前端工程师修炼之道》利用周末假期，将html部分过完了。开始修炼css部分。难点肯定是javascript部分，自己要做好准备。
14. *2016.04.15*百度前端学院的任务八卡壳了，要求使用bootstrap进行响应式的格栅布局设计，暂时无法解决。