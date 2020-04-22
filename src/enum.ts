//数字枚举,如果不指定值,会从0开始
enum Role{
  Reporter, //0
  Developer, //1
  Maintainer,
  Owner,
  Guest
}

//字符串枚举
enum Message{
  Success = '恭喜你,成功了',
  Fail = '抱歉，失败了'
}

//异构枚举
enum Answer{
  N,
  Y = 'Yes'
}

enum Char{
  //const,编译时计算结果
  a,
  b =  Char.a,
  c = 1+3,
  //computed,编译时不会进行计算
  d= Math.random(),
  e = '123'.length
}

//常量枚举,编译时移除
const enum Month {
  Jan,
  Feb,
  Mar
}

let month = [Month.Jan, Month.Feb]


//枚举类型
enum E { a, b }
enum F { a=0,b=1}
enum G {a='apple', b='banana'}

let e:E =3;
let f:F =3
// e===f 不同枚举成员不可以比较

let e1:E.a;
let e2:E.b;
// e1===e2
let e3:E.a;
e1 === e3

let g1: G
let g2: G.a