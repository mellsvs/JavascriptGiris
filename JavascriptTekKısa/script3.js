var marka="opel";
var model ="astra";
var otomatik ='no';
/* if else statement*/
 
if(otomatik=='yes'){
    console.log("araç otomatiktir");
}
else{
    console.log("araç otomatik değil");
}
otomatik= true;
if(otomatik){
    console.log(marka+''+model+''+
    otomatik)
}
// === konulursa tipleri de kontrol edilir.
// switch durumu
var vites = prompt("vites kaç : ") ;
switch(vites){
    case '1':
        console.log("araç manuel");
        

    break;
    case '3':
    console.log("araç manuel");
    break;
    default:
        console.log('yanlış değer');
}