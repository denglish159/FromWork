        // Include verbose commentary in the source code to tell me what each few lines are doing.
        
        // Print the numbers 1 to 1000 to the console. 
        var numbers = new Array(1000);

        //variables to call later for their total
        let sweet = 0;
        let salty = 0;
        let swns = 0;
        //string concantenation 
        let str = "";
        
        //count
        //let x = 0;

        for (let i = 1; i < 1000; i++) {
            numbers[i] = i; //This populates the array.  i = 1 is necessary because arrays are 0 index based and you want to store 1-1000 in it, NOT 0-999.
            //if statement
            // if (x == 20) {
            //     console.log("\n");
            //     x = 0;
            // }
                if (i%5==0 && i%3==0) {
                str += "Sweet'nSalty ";
                swns++;
            } else if(i%3==0) {
                str += "Sweet ";
                sweet++;
            } else if(i%5==0){
                str += "Salty ";
                salty++;
            } else {
                str += `${i} `;
            }

            //Print the numbers in groups of 20 per line with one space separating each number.  
            //HINT: Use string concatenation to print the 20-number strings to the console at a time.
            if (i % 20 === 0) {
                console.log(str);
                str = "";
            }
            
        }
        
        //console.log(concat.(`${numbers[1]}, ${numbers[2]}, ... ${numbers[20]}`));
        //console.log(`${numbers[i]}`);
    


        // After the numbers have all been printed, print out: 
        // How many "Sweet”
        // how many "Salty”  
        // how many "Sweet’nSalty" 
        console.log(`Total Sweet ~ ${sweet}`);
        console.log(`Total Salty ~ ${salty}`);
        console.log(`Total Sweet'nSalty ~ ${swns}`);
        // When the number is a multiple of three, print “Sweet” instead of the number on the console. 
        // If the number is a multiple of five, print “Salty” (instead of the number) to the console.    
        // For numbers which are multiples of three and five, print “Sweet’nSalty” to the console (instead of the number).    
        // Sweet, Salty, and Sweet’nSalty are three separate groups, so Sweet’nSalty does not increment Sweet or Salty (and vice versa).   