const wishlist = [   
    {  
        name: 'Czajnik',  
        netto: 100  
    },  
    {  
        name: 'Lodówka',  
        netto: 1300  
    },  
    {  
        name: 'Mikrofalówka',  
        netto: 340  
    },  
    {  
        name: 'Mikser',  
        netto: 120  
    },  
    {  
        name: 'Piekarnik',  
        netto: 2100  
    }  
];

const func = (tab,trans) => {
        let wynik = tab.reduce((acc,curr) => {
            acc.push(trans(curr));
            return acc;
        },[]);
        return wynik;
};

console.log(func(wishlist, x  => x.name + ' -> ' + x.netto));

