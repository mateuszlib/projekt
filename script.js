var a =5 ;
//var b=10;

//var suma=a+b;
//var roznica=a-b;
//var iloczyn=a*b;
//var iloraz=a/b


//document.write(suma,"...");
//document.write(roznica,"...");
//document.write(iloczyn,"...");
//document.write(iloraz,"...","<br>");


//var liczba=5;
//var tekst="random";
//var ulamek=0.6;
//var logiczna=true;
//document.write(liczba,"...",tekst,"...",ulamek,"...",logiczna,"...","<br>");

//document.write("<ul>","<li>",liczba,"</li>","<li>",tekst,"</li>","<li>",ulamek,"</li>","<li>",logiczna,"</li>","</ul>","<br>")


//let x = 6;
//let z = Math.pow(x,2);
//document.write(z,"<br>");


//var dziesietny=13;
//var szesnastkowy=0xACB;
//var osemkowy=037;
//var notacjawykladnicza=0.12e-2;
//var dwojkowy=0101;


//var mn1=4;
//var mn2=5
//var w1=mn1*mn2;
//var w2=w1/mn2;



//document.write("<h3>",'Mnozenie:',mn1,"+",mn2,"=",w1,"</h3>","<br>",
//"<h3>",'Dzielenie:',w1,"/",mn2,"=",w2,"</h3>",)


function sumaLiczbParzystych(tablica) {
    let suma = 0;
    
    for (let i = 0; i <= tablica.length; i++) {
      if (tablica[i] % 2 == 0) {
        suma += tablica[i];
      }
    }
    
    return suma;
  }
  
  const liczby = [1, 2, 3, 4, 5, 6, 7, 8];
  const wynik = sumaLiczbParzystych(liczby);
  document.write(`Suma liczb parzystych: ` , wynik);

