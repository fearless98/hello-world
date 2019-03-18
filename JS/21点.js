var count = 0;
function cc(card){
	//json键值对 键名 : 值
	//键必须是字符串 值可以是字符串、数值、对象、数组、
	var cards = {
		2:1,3:1,4:1,5:1,6:1,
		7:0,8:0,9:0,
		10:-1,'J':-1,'Q':-1,'K':-1,'A':-1
	};
	count = count + cards[card];
	if (count>0) {
		return count + ' ' + "Bet";
	}else{
		return count + ' ' + "Hold";
	}
}
cc(2);cc(5);cc(7);cc('K');cc('A');