function numCountW(start, end){
    let count = start
    while(count <= end){
        console.log(count)
        count += 1
    }

}
numCountW(0, 5)

function numCountF(start, end){
    for(let count=start; count <= end; count += 1){
        console.log(count);
        console.log(count);
    }
}
numCountF(0, 10)