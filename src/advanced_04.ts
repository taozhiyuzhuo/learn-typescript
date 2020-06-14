// 如果类型T可以赋值给类型U,那就是X类型,否则是Y类型
// T extends U? X: Y

type TypeName<T> =
	T extends string ? "string" :
		T extends number ? "number" :
			T extends boolean ? "boolean" :
				T extends undefined ? "undefined" :
					T extends Function ? "function" : "object";

type  T1 = TypeName<string>
type  T2 = TypeName<string[]>

//(A|B) extends U? X:Y
// A extends U? X:Y | B extends U? X:Y

type T3 = TypeName<string | string[]>
type Diff<T, U> = T extends U ? never : T;
type T4 = Diff<"a" | "b" | "c", "a" | "e">;
//Diff<"a","a"|"e"> | Diff<"b","a","e"> | Diff<"c","a"|"e">
// never | "b" | "c"
//never是"b","c"的联合类型,所以返回 "b","c"

type NotNull<T> = Diff<T, undefined | null>
type T5 = NotNull<string | number | undefined | null>

//Diff的内置类型是Exclude
//NotNull的内置实现是 NonNullable<T>
//Extract<T,U>
type T6 = Extract<"a" | "b" | "c", "a" | "e">

//ReturnType<T> 获取函数返回值类型

type T7 = ReturnType<() => string>
