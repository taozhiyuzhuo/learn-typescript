{ //索引类型
  let obj = {
    a: 1,
    b: 2,
    c: 3
  }

  function getValues<T,K extends keyof T>(obj:T,keys: K[]):T[K][]{
    return keys.map(key=>obj[key])
  }

  console.log(getValues(obj,['a','b']))
  // 属性e不在obj里面
  // console.log(getValues(obj,['e','c']))
}

//keyof T
interface obj{
  a: number,
  b:string
}

let key: keyof obj

// T[k]
let value: obj['a']

//T extends U