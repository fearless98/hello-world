function queue(arr,item){
	arr.push(item);
	item = arr.shift();
	return item;
}
var testArr = [5,6,7,8,9];

console.log("Before:" + JSON.stringify(testArr));
console.log(queue(testArr,1));
console.log("After:" + JSON.stringify(testArr));