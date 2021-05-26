var arrayUnique = function(a) {
    return a.reduce(function(p, c) {
        p[c.id] = {id: c.id, name: c.name};
        return p;
    }, []);
};

console.log(arrayUnique([
    { id: 'abc', name: 'Ala' }, 
    { id: 'def', name: 'Tomek' }, 
    { id: 'ghi', name: 'Jan' } 
]));