let str = ['Сайд','Тамик','СУЛИМАН','Насыр','Мохьмад','Альберт','Бойс','Андрей','Григорий','Ша1а'];
let accumulator = [];
    for (let i = 0; i < str.length; i++) {
       if(str[i][0] == "А"){
        accumulator.push(str[i])
       }
    }
console.log(accumulator)