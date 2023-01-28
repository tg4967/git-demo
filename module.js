async function fn2(){
    return 10
}

async function fn3(num){
    return num + 10
}

async function fn4(num){
    return num + 11
}

async function fn5(num){
    return num + 15
}

try{
    let result = await fn2()
    result = await fn3(result)
    result = await fn4(result)
    result = await fn5(result)
    console.log("=========>",result);
    }catch(e){
        console.log(e);
    }

export const a = 10
