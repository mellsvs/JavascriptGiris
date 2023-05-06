

    var ad=prompt("adınız");
    console.log("Adınız"+ad);
    var ogrno=prompt("okul numaranız");

    var cinsiyet=prompt("Cinsiyetiniz"); //erkek:true, kadın:false
    var ders=prompt("Ders adı");

    var not1=prompt("1.not: ");
    var not2=prompt("2.not:") ;
    var ortalama = (Number(not1)+Number(not2))/2;

    console.log("ders adı :"+ ders)
    console.log("ortalamanız:"+ortalama);