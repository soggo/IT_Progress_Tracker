let ccy = [
	{ pholder: 'ONE HUNDRED', val: 100},
	{ pholder: 'TWENTY', val: 20},
	{ pholder: 'TEN', val: 10},
	{ pholder: 'FIVE', val: 5},
	{ pholder: 'ONE', val: 1},
	{ pholder: 'QUARTER', val: 0.25},
	{ pholder: 'DIME', val: 0.1},
	{ pholder: 'NICKEL', val: 0.05},
	{ pholder: 'PENNY', val: 0.01}
];

function checkCashRegister(price, cash, cid) {
 let result = {status: null, change: []};
 let change = cash - price;
 let register = cid.reduce(function(redVal, renc) {
 redVal.regSUm += renc[1];
 redVal[renc[0]] = renc[1];
 return redVal;
 }, {regSUm: 0});
 if(register.regSUm === change) {
 result.status = 'CLOSED';
 result.change = cid;
 return result;
 }
 if(register.regSUm < change) {
 result.status = 'INSUFFICIENT_FUNDS';
 return result;
 }
 let changeArr = ccy.reduce(function(redVal, renc) {
 let value = 0;
 while(register[renc.pholder] > 0 && change >= renc.val) {
 change -= renc.val;
 register[renc.pholder] -= renc.val;
 value += renc.val;
 change = Math.round(change * 100) / 100;
 }
 if(value > 0) {
 redVal.push([ renc.pholder, value ]);
 }
 return redVal;
 }, []);
 if(changeArr.length < 1 || change > 0) {
 result.status = 'INSUFFICIENT_FUNDS';
 return result;
 }
 result.status = 'OPEN';
 result.change = changeArr;
 return result;
}