function log<T>(value:T):T{
  console.log(value);
  return value;
}

//第一种制定类型.
log<string[]>(['a','b'])

//第二种,利用ts的类型推断
log(['a','b']);



//使用类型别名,
// type Log = <T>(value:T)=>T
// let myLog:Log = log


//接口泛型
interface Log <T=string>{
  (value:T):T
}

// let myLog: Log<number>  = log

let myLog:Log = log
myLog('1')

{
  class Log<T>{
    //不能应用于静态成员
    run(value:T){
      console.log(value)
      return value
    }
  }

  let log1 = new Log<number>()
  log1.run(2)

  let log2 = new Log()
  log2.run({a:1})
}

//泛型约束
interface Length{
  length:number
}
function log1<T extends Length>(value:T):T{
  console.log(value,value.length)
  return value
}
log1([1])
log1('123')
log1({length:1});
