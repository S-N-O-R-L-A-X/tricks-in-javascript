ECMA-262 uses inner property to descibe characteristics of property. These properties cannot be visited by developer. To specify a property as inner property, use syntax as `[[prop]]`.
The inner property of object can be divided into two kinds: data and visitor.


1. 数据属性
数据属性包含一个保存数据值的位置。值会从这个位置读取，也会写入到这个位置。数据属性有4个特性描述它们的行为。
- [[Configurable]]：表示属性是否可以通过 delete 删除并重新定义，是否可以修改它的特性，以及是否可以把它改为访问器属性。默认情况下，所有直接定义在对象上的属性的这个特性都是 true，如前面的例子所示。
- [[Enumerable]]：表示属性是否可以通过 for-in 循环返回。默认情况下，所有直接定义在对象上的属性的这个特性都是 true，如前面的例子所示。
- [[Writable]]：表示属性的值是否可以被修改。默认情况下，所有直接定义在对象上的属性的这个特性都是 true，如前面的例子所示。
- [[Value]]：包含属性实际的值。这就是前面提到的那个读取和写入属性值的位置。这个特性的默认值为 undefined。
在像前面例子中那样将属性显式添加到对象之后，[[Configurable]]、[[Enumerable]]和[[Writable]]都会被设置为 true，而[[Value]]特性会被设置为指定的值。比如：
let person = { 
 name: "Nicholas" 
}; 
这里，我们创建了一个名为 name 的属性，并给它赋予了一个值"Nicholas"。这意味着[[Value]]特性会被设置为"Nicholas"，之后对这个值的任何修改都会保存这个位置。
要修改属性的默认特性，就必须使用 Object.defineProperty()方法。这个方法接收 3 个参数：
要给其添加属性的对象、属性的名称和一个描述符对象。最后一个参数，即描述符对象上的属性可以包含：configurable、enumerable、writable 和 value，跟相关特性的名称一一对应。根据要修改的特性，可以设置其中一个或多个值。

2. 访问器属性
访问器属性不包含数据值。相反，它们包含一个获取（getter）函数和一个设置（setter）函数，不过这两个函数不是必需的。在读取访问器属性时，会调用获取函数，这个函数的责任就是返回一个有效的值。在写入访问器属性时，会调用设置函数并传入新值，这个函数必须决定对数据做出什么修改。访问器属性有 4 个特性描述它们的行为。
- [[Configurable]]：表示属性是否可以通过 delete 删除并重新定义，是否可以修改它的特性，以及是否可以把它改为数据属性。默认情况下，所有直接定义在对象上的属性的这个特性都是 true。
- [[Enumerable]]：表示属性是否可以通过 for-in 循环返回。默认情况下，所有直接定义在对象上的属性的这个特性都是 true。
- [[Get]]：获取函数，在读取属性时调用。默认值为 undefined。
- [[Set]]：设置函数，在写入属性时调用。默认值为 undefined。
访问器属性是不能直接定义的，必须使用 Object.defineProperty()。在不支持 Object.defineProperty()的浏览器中没有办法修改[[Configurable]]或[[Enumerable]]。

