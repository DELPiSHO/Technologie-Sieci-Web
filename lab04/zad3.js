const fun1 = (number) => {
    let result = number * number;
    return result;
};

const fun2 = (number) => {
    let result = number * 2;
    return result;
};

const razemTab = (n,funTab,cb) => {
    let number = n;
    let result = [];
    funTab(number,(cb) => {

        setTimeout(() => {
            for(let i = 0;i< funTab.length;i++){
                if(i === 0){
                    result = funTab[i](cb);
                } else {
                    result = funtab[i](result[0],result[1],cb);
                }
            }
        },1000);
    });
    cb(`${funTab(result)}`);
}

var wyn1 = fun1(5);
var wyn2 = fun2(5);
funTab = [wyn1,wyn2];

razemTab(5,funTab,(dane) => {

    dane = funTab;
    console.log(`Koniec: ${dane}`);
});