// //初始化变量时,不指定类型,自动推断
// let a = 1; //类型 number;
// let b = [1, null]; //类型 (number|null)

// //设置函数默认参数
// let c = (x = 1) => {};
// //确认函数返回值的时候
// let d = (x = 1) => x + 1;

// //上下文类型推断,根据左侧的事件绑定,推断出右侧的事件类型。
// window.onkeydown = (event: KeyboardEvent) => {
//     console.log(event.altKey);
// };

// //类型断言
// interface Foo {
//     bar: number
// }

// // let foo = {} as Foo;
// // foo.bar = 1;
// let foo: Foo = {
//     bar: 1
// };

// let s: string = 'a';
// s = null;

// //接口兼容性
// {
//     interface X {
//         a: any;
//         b: any;
//     }

//     interface Y {
//         a: any;
//         b: any;
//         c: any;
//     }

//     let x: X = {
//         a: 1,
//         b: 2
//     };
//     let y: Y = {
//         a: 1,
//         b: 2,
//         c: 3
//     };

//     //源类型必须具备目标类型的必要属性,成员少的可以兼容成员多的.
//     x = y;

//     //函数兼容性
//     type Handler = (a: number, b: number) => void;
//     const hof = (handler: Handler) => handler;

//     // 1)参数个数
//     let handler1 = (a: number) => {};
//     hof(handler1);

//     let handler2 = (a: number, b: number, c: number) => {};
//     // hof(handler2)

//     //可选参数和剩余参数
//     let a = (p1: number, p2: number) => {};
//     let b = (p1 ? : number, p2 ? : number) => {};
//     let c = (...args: number[]) => {};

//     a = b;
//     a = c;
//     b = c;
//     b = a;
//     c = a;
//     c = b;

//     // 2)参数类型
//     let handler3 = (a: string) => {}

//     // hof(handler3) 不兼容

//     interface Point3D {
//         x: number;
//         y: number;
//         z: number;
//     }

//     interface Point2D {
//         x: number;
//         y: number;
//     }

//     let p3d = (point: Point3D) => {};
//     let p2d = (point: Point2D) => {};
//     //成员个数多的兼容成员个数少的.
//     p3d = p2d; //兼容
//     // p2d = p3d; //不兼容

//     // 3)返回值类型
//     let f = () => ({
//         name: 'Alice'
//     });
//     let g = () => ({
//         name: 'Alice',
//         location: 'Beijing'
//     });
//     f = g;

//     // g = f; //不兼容

//     //函数重载兼容:参数个数,返回值类型.
//     function overload(a: number, b: number): number;

//     function overload(a: string, b: string): string;

//     function overload(a: any, b: any): any {}

//     //枚举类型兼容性
//     //枚举和number可以兼容.
//     enum Fruit {
//         Apple,
//         Banana
//     }
//     enum Color {
//         Red,
//         Yellow
//     }
//     let fruit: Fruit.Apple = 3;
//     let no: number = Fruit.Apple;
//     // let color:Color.Red = Fruit.Apple //不兼容

//     //类兼容性

// }

// //类型保护
// {
//     enum Type {
//         Strong,
//         Week
//     }

//     class Java {
//         helloJava() {
//             console.log('hello java')
//         }
//     }

//     class JavaScript {
//         helloJavaScript() {
//             console.log('hello javascript');
//         }
//     }

//     function isJava(lang: Java | JavaScript): lang is Java {
//         return (lang as Java).helloJava !== undefined
//     }

//     function getLanguage(type: Type, x: string | number) {
//         let lang = type === Type.Strong ? new Java() : new JavaScript()
//         if ((lang as Java).helloJava) {
//             (lang as Java).helloJava()
//         } else {
//             (lang as JavaScript).helloJavaScript()
//         }

//         // 1.instanceof
//         if (lang instanceof Java) {
//             lang.helloJava()
//         } else {
//             lang.helloJavaScript()
//         }

//         // 2. in
//         if ('helloJava' in lang) {
//             lang.helloJava()
//         } else {
//             lang.helloJavaScript()
//         }

//         // 3. typeof
//         if (typeof x === 'string') {
//             x.length
//         } else {
//             x.toFixed(2)
//         }

//         //4.保护函数
//         if (isJava(lang)) {
//             lang.helloJava()
//         } else {
//             lang.helloJavaScript()
//         }

//         return lang;
//     }
// }

// //交叉类型
// {
//     interface DogInterface {
//         run(): void
//     }

//     interface CatInterface {
//         jump(): void
//     }

//     let pet: DogInterface & CatInterface = {
//         run() {},
//         jump() {}
//     } //交叉类型


//     let a: number | string = 'a'
//     let b: 'a' | 'b' | 'c'
//     let c: 1 | 2 | 3
//     class Dog implements DogInterface {
//         run() {}
//         eat() {}
//     }

//     class Cat implements CatInterface {
//         jump() {}
//         eat() {}
//     }

//     enum Master {
//         Boy,
//         Girl
//     }

//     function getPet(master: Master) {
//         let pet = master === Master.Boy ? new Dog() : new Cat();
//         pet.eat() //如果一个对象是联合类型,在类型未确定的情况下,只能访问所有类型的共有成员
//         return pet;
//     }

//     interface Square {
//         kind: "square";
//         size: number
//     }

//     interface Rectangle {
//         kind: "rectangle";
//         width: number;
//         height: number
//     }

//     type Shape = Square | Rectangle | Circle
//     interface Circle{
//         kind: 'circle',
//         r: number
//     }

//     function area(s: Shape): number | never {
//         switch (s.kind) {
//             case 'square':
//                 return s.size * s.size
//             case 'rectangle':
//                 return s.height * s.width
//             default:
//                 return ((e: never) => {
//                     throw new Error(e)
//                 })(s) //检查s是不是never类型
//         }
//     }

//     console.log(area({kind:'circle',r:1}))
// }

{
	interface DogInterface {
		run(): void
	}

	interface CatInterface {
		jump(): void
	}

	const pet: DogInterface & CatInterface = {
		run() {
		},
		jump() {
		}
	}; // 交叉类型


	const a: number | string = 'a';
	// tslint:disable-next-line:prefer-const
	let b: 'a' | 'b' | 'c';
	let c: 1 | 2 | 3;

	class Dog implements DogInterface {
		public run() {
		}

		public eat() {
		}
	}

	class Cat implements CatInterface {
		public jump() {
		}

		public eat() {
		}
	}

	enum Master {
		Boy,
		Girl
	}

	function getPet(master: Master) {
		const pet = master === Master.Boy ? new Dog() : new Cat();
		// 如果一个对象是联合类型,在类型未确定的情况下,只能访问所有类型的共有成员
		pet.eat();
		return pet;
	}

	interface Square {
		kind: "square";
		size: number
	}

	interface Rectangle {
		kind: "rectangle";
		width: number;
		height: number
	}

	type Shape = Square | Rectangle | Circle

	interface Circle {
		kind: 'circle',
		r: number
	}

	function area(s: Shape): number | never {
		switch (s.kind) {
			case 'square':
				return s.size * s.size;
			case 'rectangle':
				return s.height * s.width;
			case 'circle':
				return Math.PI * s.r ** 2;
			default:
				return ((e: never) => {
					throw new Error(e)
				})(s) // 检查s是不是never类型
		}
	}

	console.log(area({
		kind: 'circle',
		r: 1
	}))
}
