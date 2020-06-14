// {
//声明合并
interface A {
	x: number;

	// y: string;
	foo(bar: number): number; //顺序3
	foo(bar: 'a'): number;
}

interface A {
	y: number;

	foo(bar: string): string; //加载顺序1

	foo(bar: number[]): number[]; ////加载顺序2
	foo(bar: 'b'): number;
}

// let a: A = {
// 	x: 1,
// 	y: 1,
// 	foo(bar: any): any {
// 		return bar;
// 	}
// };

//函数和命名空间合并
function Lib() {

}

namespace Lib {
	export let version = '1.0'
}

console.log(Lib.version);

//类和命名空间合并,相当于为类加了静态属性
class C_24 {

}

namespace C_24 {
	export let state = 1;
}
console.log(C_24.state);

//枚举和命名空间合并
enum Color {
	Red,
	Yellow,
	Bule
}

namespace Color {
	export function mix() {

	}
}
console.log(Color);
// }
