let broj_bodova = 0


let odgovor = prompt("Kako se zove protokol za prenos web stranica?");
if (odgovor == "http") {
    alert("Odgovor je tacan")
    broj_bodova = broj_bodova + 1;  
    // ovo je jedan nacin brojanja
}
else
    alert("Odgovor nije tacan");

odgovor = prompt("Kako se zove racunar koji servira nase fajlove?");
if (odgovor == "server") {
    alert("Odgovor je tacan")
    broj_bodova +=1;
    // ovo je drugi nacin brojanja, skraceniji
}
else
    alert("Odgovor nije tacan");

odgovor = prompt("Da li je kviz dobar?");
if (odgovor == "jeste") {
    alert("Odgovor je tacan")
    broj_bodova ++;
    // treci nacin brojanja, skracen skroz
}
else
    alert("Odgovor nije tacan");


alert("Osvojili ste ukupno " + broj_bodova + " boda-ova.");

