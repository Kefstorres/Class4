//console.log("Hello");

for(let i = 1; i < 5; i++) // correra cinco veces  i+=2; let i = 5; i >=0; i-- 
    {
        console.log ("Hellos: " + i);
    }

for( let i = 1; i < 10; i++)
    {
        let line: string = "*"; // String: es el tipo de variable 
        line = line. repeat(i);
        console.log(line);
    }

let a = 1;

while (a < 5) 
    {
        let line: string = "*";
        line = line.repeat(a);
        console.log(line);
        a++;
    }