const fun1 = (number) => {
    setTimeout(() => {
        let result = number * number;
            console.log(result);
    },1000);
}

const fun2 = (number) => {
    let result = number * 2;
    return result;
};

const razem = (n,fun1,fun2,cb) => {
    let number = n;
    fun1(number,(cb) => {
    });
    fun2(number,(cb) => {
        setTimeout(() => {
        },1000);
    });
    cb(`${fun2(fun1(number))}`);
};

razem(5,fun1, fun2, (dane) => {
    var wyn1 = fun1(5);
    var wyn2 = fun2(5);
    dane = [wyn1,wyn2];
    console.log(`Koniec: ${dane}`);
});

