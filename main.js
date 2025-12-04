const fizzBuzz = {
    fizz : [],
    buzz : [],
    fizzBuzz : [],
    noFizzBuzz : []
}
for(let i = 1; i <= 100; i++){
    if(i % 3 === 0 && i % 5 === 0)fizzBuzz.fizzBuzz.push(i)
    else if(i % 3 === 0) fizzBuzz.fizz.push(i)
    else if(i % 5 === 0) fizzBuzz.buzz.push(i)
    else fizzBuzz.noFizzBuzz.push(i)
}

console.log(fizzBuzz)