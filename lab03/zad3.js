const groupBy = (tab, keyGetter) => {
    const map = new Map();
    tab.forEach((item) => {
        const key = keyGetter(item);
        const collection = map.get(key);
        if (!collection) {
            map.set(key, [item])
        } else {
            collection.push(item);
        }
    });
    return map;
};

console.log(groupBy([3,2,4,4,3], n => n % 2 === 0))