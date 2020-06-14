//映射类型
interface Obj {
	a: string;
	b: number;
	c: boolean;
}

//所有属性变成只读
type  ReadonlyObj = Readonly<Obj>
const readonlyObj: ReadonlyObj = {
	a: 'a',
	b: 1,
	c: false
};
// 不可以赋值
// readonlyObj.a = '1'

//所有属性变成可选
type PartialObj = Partial<Obj>
const partialObj: PartialObj = {
	b: 1
};

type PickObj = Pick<Obj, 'a' | "b">//同态
//pick的属性不可以少,其他的属性不可以赋值
const pickObj: PickObj = {
	a: '1',
	b: 2,
};

type RecordObj = Record<'x' | 'y', Obj> //非同态


