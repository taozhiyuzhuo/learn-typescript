import {a, b, c, P} from './a' //批量导入
import {f as F} from './a' //导入时起别名
import * as All from './a' //导入模块中的所有成员,绑定在All上
import myFunction from './a' //不加{},导入默认
console.log(a, b, c);

let p: P = {
	x: 1,
	y: 2
};

console.log(All);
