//第一种
function add1(x:number,y:number){
	return x+y
}
//第二种,定义一个变量
let add2:(x:number,y:number)=>number;

//第三种,类型别名
type add3 = (x:number,y:number)=>number

//第四种,接口
interface add4{
	(x:number,y:number):number
}

add1(1,2)

//可选参数必须位于必选参数之后
function add5(x:number,y?:number){
  return y? x+y:x;
}

add5(1)

//参数默认值
function add6(x:number,y=0,z:number,q=1){
  return x + y + z + q
}
add6(1,undefined,3)

//剩余参数,剩余参数是数组
function add7(x:number,...rest:number[]){
  return x + rest.reduce((pre,cur)=>pre+cur)
}

//函数重载
//查询重装列表,顺序依次从上向下.
function add8(...rest:number[]):number;
function add8(...rest:string[]):number;
function add8(...rest:any[]):any{
  let first = rest[0]
  if(typeof first==='string'){
    return rest.join('')
  }
  if(typeof first=== 'number'){
    return rest.reduce((pre,cur)=>pre+cur)
  }
}
console.log(add8(1,2,3))