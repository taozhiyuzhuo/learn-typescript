interface Human{
  name: string;
  eat():void;
}

/**
 *
 * 类实现接口时,必须实现接口中所有的属性.
 * @class Asina
 * @implements {Human}
 */
class Asina implements Human{
  constructor(name:string){
    this.name = name;
  }
  name: string;
  eat(){}
}

interface Man extends Human{
  run():void
}

interface Child{
  cry():void
}

interface Boy extends Man,Child{
}
let boy:Boy = {
 name:'boy',
 run(){},
 eat(){},
 cry(){}
}

class Auto{
  state = 1
  // private state2 = 0;
}

interface AutoInterface extends Auto{
}

class C implements AutoInterface{
  state = 1
}

class Bus extends Auto implements AutoInterface{

}