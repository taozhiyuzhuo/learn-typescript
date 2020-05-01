//对象接口
interface List{
  readonly id: number; //只读属性不可以修改
  name: string;
  age?: number
  // [x:string]: any //字符串索引签名,可以得到多个属性
}

interface Result{
  data:List[]
}


function render(result:Result){
  result.data.forEach((value:List)=>{
    console.log(value.id,value.name)
    if(value.age){
      console.log(value.age)
    }
  })
}

//鸭式变形法
let result:Result = <Result>{
  data:[
    {id:1, name:'A', sex:'male'},
    {id:2, name:'B'}
  ]
}

render(result)

//会对额外字段进行检查
// render({
//   data:[
//     {id:1, name:'A', sex:'male'},
//     {id:2, name:'B'}
//   ]
// })

//类型断言
render({
  data:[
    {id:1, name:'A', sex:'male'},
    {id:2, name:'B'}
  ]
} as Result)

render(<Result>{
  data:[
    {id:1, name:'A', sex:'male'},
    {id:2, name:'B'}
  ]
})

interface StringArray{
  [index:number] : string
}

let chars:StringArray = ['A']


interface Names{
  [x:string]: any; 
  [z:number]: number; //类型要兼容
}

let names:Names;