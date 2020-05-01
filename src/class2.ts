/**
 * 抽象类,只能继承,不能实例化
 */
abstract class Animal{
  eat(){
    console.log('eat');
  }
  //抽象方法,不指定方法的具体实现
  // 明确知道子类有其他的实现
  abstract sleep():void
}

class Dog2 extends Animal{
  constructor(name:string){
    super()
    this.name = name
  }
  name:string
  run(){}
  sleep(){
    console.log('dog sleep');
  }
}

let dog2 = new Dog2('wangwang')
console.log(dog2);


class Cat extends Animal{
  sleep(){
    console.log('cat sleep');
  }
}

let cat = new Cat()
let animals: Animal[] = [dog2,cat]
animals.forEach(i=>{
  i.sleep()
})


/**
 *
 * 使用this类型实现链式调用
 * @class WorkFlow
 */
class WorkFlow{
  step1(){
    return this;
  }

  step2(){
    return this;
  }
}

new WorkFlow().step1().step2()

class MyFlow extends WorkFlow{
  next(){
    return this;
  }
}

new MyFlow().next().step1().next()