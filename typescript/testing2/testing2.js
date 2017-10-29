//String
var chuoi = "Phan Anh";
console.log(chuoi);
//Number
var so = 123456;
console.log(so);
//boolean
var bool = false;
console.log(bool);
//Mang3cua3 chuỗi- String Array
var chuoiArr = ["Mot", "Hai", "Ba"];
console.log(chuoiArr);
//mang cua chuoi-number Array
var soArr = [1, 2, 3];
console.log(soArr);
//enum
var Colo;
(function (Colo) {
    Colo[Colo["Red"] = 0] = "Red";
    Colo[Colo["Green"] = 1] = "Green";
    Colo[Colo["Blue"] = 2] = "Blue";
})(Colo || (Colo = {}));
;
var c = Colo.Green; //trả về index của mảng:1
console.log(c);
var d = Colo[2]; //trả về giá trị ở vị trí số 2:Blue
console.log(d);
//Obj
var obj = {
    childObj: {
        grandchildObj: {}
    }
};
console.log(obj);
//ham khong can tra ve
function Khongcantrave() {
    console.log('Không cần trả về');
}
Khongcantrave();
