{
    const zakup_prostora = 200;
    const predavac = 400;
    const potrosni_materijal = 100;
    const razno = 50;
    const marketing = 200;
    const komunalije = 100;
    const cena_po_polazniku = 50;
    const broj_polaznika = 25;
    const porez = 0.2;

    const prihodi = broj_polaznika * cena_po_polazniku
    const rashodi = zakup_prostora + predavac + potrosni_materijal + razno + marketing + komunalije


    const bilans = prihodi - rashodi
    const bilans_sa_porezom = bilans * 0.8;

    if (bilans > 0)
        alert("Bilans sa porezom je " + bilans_sa_porezom + " eura");
    else
        alert(bilans);

    console.log(bilans_sa_porezom)

}