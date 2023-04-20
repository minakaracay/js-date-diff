var Tarih1 = new Date("12/28/2021"); //28 Aralık 2021
document.getElementById("Tarih1").innerHTML = Tarih1;  //Tarih1 id'li h4 alanıma seçtiğim günü yazdırdım
var Tarih2 = new Date(); //bugün
document.getElementById("Tarih2").innerHTML = Tarih2; //Tarih2 id'li h4 alanıma bugünü yazdırdım
var diff = new Date(Tarih2.getTime() - Tarih1.getTime()); //aralarındaki farkı yeni bir tarih olarak tanımladım
var yilFark = diff.getFullYear() - 1970; //getFullYear ile diff'in yılını aldım ve js'te default yıl 1970 olduğu için,1970'i çıkardım
var ayFark = diff.getMonth(); //getMonth ile diff'in ayını aldım
var gunFark = diff.getDate() - 1;  //getDate ile diff'in gününü aldım ve 1 çıkardım
if(yilFark == 0){ //eğer elde ettiğim yıl sayısı 0 ise
    if(ayFark == 0){  //eğer elde ettiğim ay sayısı 0 ise
        var sonuc =  "İki tarih arasındaki fark : " + gunFark + " gündür." ; 
        document.getElementById("sonuc").innerHTML=sonuc;
    }else{//elde ettiğim ay sayısı 0 değilse
        var sonuc = "İki tarih arasındaki fark : " + ayFark + " ay "+ gunFark + " gündür. "; 
        document.getElementById("sonuc").innerHTML=sonuc;
    }
}else{ //elde ettiğim yıl sayısı 0 değilse
    if(ayFark == 0){ //eğer elde ettiğim ay sayısı 0 ise
        var sonuc =  "İki tarih arasındaki fark : " + yilFark + " yıl "
        + gunFark + " gündür. "; 
        document.getElementById("sonuc").innerHTML=sonuc;
    }else{ //elde ettiğim ay sayısı 0 değilse
        var sonuc = "İki tarih arasındaki fark : "  + yilFark + " yıl "
        + ayFark + " ay "+ gunFark + " gündür. " ;
        document.getElementById("sonuc").innerHTML=sonuc;
    }
}