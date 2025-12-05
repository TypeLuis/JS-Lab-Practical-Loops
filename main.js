const fizzBuzz = () => {
    const fizzBuzz = {
        fizz : [],
        buzz : [],
        fizzBuzz : [],
        noFizzBuzz : []
    }
    for(let i = 1; i <= 100; i++){
        if(i % 15 === 0)fizzBuzz.fizzBuzz.push(i)
        else if(i % 3 === 0) fizzBuzz.fizz.push(i)
        else if(i % 5 === 0) fizzBuzz.buzz.push(i)
        else fizzBuzz.noFizzBuzz.push(i)
    }
    return fizzBuzz
}

console.log(fizzBuzz())



// My specialty (I love scraping data) 😁
const csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26"
const csv2 = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232"

const seperateCells = (csv) =>{

    let cells = ["", "", "", ""]
    
    let cellIndex = 0
    let rowIndex = 0
    let header = []
    const obj = {}
    
    const flush = () => {
        if(rowIndex === 0){
            header = [...cells] //spread current cells array into new array 
            rowIndex ++
        } else{
            obj[cells[1]] = {
                [header[0]] : cells[0],
                [header[1]] : cells[1],
                [header[2]] : cells[2],
                [header[3]] : cells[3]
            }
        }
    
        cells =  ["", "", "", ""]
        cellIndex = 0
    }

    for (let i = 0; i < csv.length; i++) {
        const char = csv[i]
    
        if (char === ",") {
            cellIndex++
        }
        else if (char === "\n") {
            flush()
        }
        else {
            cells[cellIndex] += char
        }
    }
    
    
    flush() // Handle last row if no newline at end
    return obj
}

console.table(seperateCells(csv))
console.table(seperateCells(csv2)) //ignore the fact the mass is the key 😅 can fix later if necessary
// console.log(seperateCells(csv2))