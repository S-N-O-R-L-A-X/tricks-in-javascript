/**
 * Each function creates a prototype whose type is object. The prototype includes properties and
 * methods that should be shared by instances of a particular reference type. This object is the 
 * prototype of the object created by calling the constructor. The advantage of using a prototype
 * object is that the properties and methods defined on it can be shared by object instances. 
 * The value originally assigned directly to the object instance in the constructor can be assigned
 * directly to their prototype.
 * 
 * Whenever a function is created, a prototype property (pointing to the prototype object) is 
 * created for the function according to specific rules. By default, all prototype objects 
 * automatically get a property named constructor that points back to the constructor associated 
 * with them. Then, depending on the constructor, additional properties and methods may be added
 * to the prototype object.
 * 
 * When customizing the constructor, the prototype object only gets the constructor property by 
 * default, and all other methods inherit from the Object. Each time the constructor is called to 
 * create a new instance, the internal [[Prototype]] pointer of this instance is assigned as the 
 * prototype object of the constructor.
 * 
 * There is no standard way to access this [[Prototype]] feature in the script, but Firefox, 
 * Safari, and Chrome expose __proto__ property on each object through which the object's 
 * prototype can be accessed. 
 *  
 * There is a direct connection between the instance and the constructor prototype, 
 * but no connection between the instance and the constructor itself.
 * 
 * 每个函数都会创建一个 prototype 属性，这个属性是一个对象，包含应该由特定引用类型的实例共享的属性和方法。
 * 实际上，这个对象就是通过调用构造函数创建的对象的原型。使用原型对象的好处是，在它上面定义的属性和方法可以
 * 被对象实例共享。原来在构造函数中直接赋给对象实例的值，可以直接赋值给它们的原型。
 * 
 * 无论何时，只要创建一个函数，就会按照特定的规则为这个函数创建一个 prototype 属性（指向原型对象）。
 * 默认情况下，所有原型对象自动获得一个名为 constructor 的属性，指回与之关联的构造函数。然后，
 * 因构造函数而异，可能会给原型对象添加其他属性和方法。
 * 
 * 在自定义构造函数时，原型对象默认只会获得 constructor 属性，其他的所有方法都继承自Object。每次调用
 * 构造函数创建一个新实例时，这个实例的内部[[Prototype]]指针就会被赋值为构造函数的原型对象。
 * 
 * 脚本中没有访问这个[[Prototype]]特性的标准方式，但 Firefox、Safari 和 Chrome会在每个对象上暴露
 * __proto__属性，通过这个属性可以访问对象的原型。
 * 
 * 有一点非常重要：实例与构造函数原型之间有直接的联系，但实例与构造函数之间没有。
 */


function Person() { }

console.log(typeof Person.prototype); //object
console.log(Person.prototype);

console.log(Person.prototype.constructor === Person); // true
/* 
nodejs:
{}

chrome:
{ constructor: ƒ }
    constructor: ƒ Person()
    [[Prototype]]: Object
*/