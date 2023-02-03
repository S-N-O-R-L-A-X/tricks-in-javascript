每个函数都会创建一个 prototype 属性，这个属性是一个对象，包含应该由特定引用类型的实例
共享的属性和方法。实际上，这个对象就是通过调用构造函数创建的对象的原型。使用原型对象的好处
是，在它上面定义的属性和方法可以被对象实例共享。原来在构造函数中直接赋给对象实例的值，可以
直接赋值给它们的原型

无论何时，只要创建一个函数，就会按照特定的规则为这个函数创建一个 prototype 属性（指向
原型对象）。默认情况下，所有原型对象自动获得一个名为 constructor 的属性，指回与之关联的构
造函数。对前面的例子而言，Person.prototype.constructor 指向 Person。然后，因构造函数而
异，可能会给原型对象添加其他属性和方法。
在自定义构造函数时，原型对象默认只会获得 constructor 属性，其他的所有方法都继承自
Object。每次调用构造函数创建一个新实例，这个实例的内部[[Prototype]]指针就会被赋值为构
造函数的原型对象。脚本中没有访问这个[[Prototype]]特性的标准方式，但 Firefox、Safari 和 Chrome
会在每个对象上暴露__proto__属性，通过这个属性可以访问对象的原型。在其他实现中，这个特性
完全被隐藏了。关键在于理解这一点：实例与构造函数原型之间有直接的联系，但实例与构造函数之
间没有。
/**
 * Each function creates a prototype whose type is object. The prototype includes properties and
 * methods shared by specific
 */
