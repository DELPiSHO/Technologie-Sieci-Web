const fun1 = (number) => {
    let result = number * number;
    return result;
}

const fun2 = (number) => {
    let result = number + 10;
    return result;
}

const poKolei = (n,fun1,fun2,cb) => {
    let liczba = n;
    let wynik1;
    let wynik2;
    fun1(liczba,(cb) => {   
            setTimeout(() => {
            }, 1000);
            fun2(liczba,(cb) => { 
                setTimeout(() => {
                }, 1000);
        });
    });
    cb(`${fun2(fun1(liczba))}`);
}

poKolei(4,fun1, fun2, (dane) => {
    console.log(`Koniec: ${dane}`);
});