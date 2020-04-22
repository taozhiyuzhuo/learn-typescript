//原始类型
let bool:boolean = true
let num: number =123
let str: string = 'abc'

//数组
let arr1: number[] = [1,2,3]
let arr2: string[] = ['a','b','c']
let arr3: Array<string|number> = [1,'a']

//元组
let tuple: [number,string] = [0,'1']
tuple.push(2)// 可以push但是无法拿到值
// tuple[2]


//函数
//函数的返回值类型可以不写, ts的类型推断
let add = (x:number,y:number):number => x+y
//定义函数类型,但是没有具体实现
let compute:(x:number,y:number)=> number
compute=(a,b)=>a+b;

//对象
// let obj: object // 表示非原始类型(非string/boolean/number/symbol/null/undefined)
//  obj: Object // TypeScript定义的标准JavaScript Object接口(按ctr可查看)
//  obj: {} // 表示一个空对象类型

let obj:{x:number,y:number} = {x:1, y:2}
obj.x = 3

//symbol
let s1:symbol =Symbol()
let s2 = Symbol()
console.log(s1===s2); //false

//undefined, null;只能赋值给他们自己
let un:undefined =undefined;
let nu: null = null;
//是其他类型的子类型,可以赋值;但是要开启strictNullChecks
num = undefined;

//或者定义混合类型
let num1: number| undefined|null = 1;
num1 = null
num1 = undefined;


//void 没有返回值
let noRetur = ()=>{}

//any,不指定变量类型,默认为any
let x
x = 1;
x = 'a'

//never ,永远不会有返回值
let error = ()=>{
  throw new Error('error')
}

let endless = ()=>{
  while(true){}
}