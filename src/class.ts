/**
 * 与ES6类不同的是,增加了类型注解
 * 类成员属性都是实例属性;类成员方法都是实例方法
 * 构造函数可以声明为被保护成员,作用是该类不能被实例化,只能被继承
 */
class Dog{
  constructor(name:string){
    this.name = name;
  }
  public name:string; //默认是public,可以显示声明
  private age?:number; //私有成员,只能在类的内部调用,不可以在实例和子类中调用
  protected pro(){} //受保护成员只能在类和子类中访问,不可以在实例中访问
  readonly legs: number =4 //只读属性不可以被更改,必须要初始化
  static food:string = 'boned' //静态成员,只能通过类名访问.可以被继承
  run(){}
}
console.log(Dog.prototype);//Dog { run: [Function] }
let dog = new Dog('wangwang');
console.log(dog);//Dog { name: 'wangwang' }


/**
 * 继承
 */
class Husky extends Dog{
  //构造函数的参数也可以添加修饰符,作用是将参数自动变为实例属性
  constructor(name:string,public color:string) {
    super(name);
    this.color = color;
  }

  // color: string
}

