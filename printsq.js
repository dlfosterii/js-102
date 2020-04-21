function printSquare(size){
    let x = size,y = size,chr;
    for(x=1; x <=5; x++)
    {
    for (y=1; y <=5; y++)
        {
        chr=chr+("*");        
        }
    console.log(chr);
    chr='';    
    }
    
}
printSquare(5)
