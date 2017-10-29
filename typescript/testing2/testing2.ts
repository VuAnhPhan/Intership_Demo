//String
var chuoi:string="Phan Anh";
console.log(chuoi);

//Number
var so:number=123456;
console.log(so);

//boolean
var bool:boolean=false;
console.log(bool);

//Mang3cua3 chuỗi- String Array
var chuoiArr:string[]=["Mot","Hai","Ba"];
console.log(chuoiArr);

//mang cua chuoi-number Array
var soArr:number[]=[1,2,3];
console.log(soArr);

//enum
enum Colo{Red,Green,Blue};
var c:Colo=Colo.Green; //trả về index của mảng:1
console.log(c);

var d:string=Colo[2];//trả về giá trị ở vị trí số 2:Blue
console.log(d);

//Obj
var obj:any={
    childObj:{

        grandchildObj:{


        }
    }
};
console.log(obj);

//ham khong can tra ve
function Khongcantrave(): void{
    console.log('Không cần trả về');
}

Khongcantrave();

