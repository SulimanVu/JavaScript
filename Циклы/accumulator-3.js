let str = ['sql','php','js','c#','c++','cotlin','svift','python','angular','jquery'];
    let accumulator = [];
    for (let i = 0; i < str.length; i++) {
        if(str[i].length > 3){
            accumulator.push(str[i])
        }
        
    }
    console.log(accumulator)