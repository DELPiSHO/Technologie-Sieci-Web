async function fun1(number) {
    let result = number
    return result;
}

async function fun2(number) {
    let result = number
    return result;
}

async function cb(numbers) {
    let result = fun1(numbers)+fun2(numbers);
    return result;
}

const razemTab = async(funTab, cb) => 
{
    let x = await Promise.all(funTab)
    //console.log(await cb(x));
    //return await cb(x);
}
