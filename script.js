// JavaScript program to find quotient of array elements 
        // Function to calculate the quotient of every element of the array 
        function calculate(array1, array2, a1, a2) 
        { 
            let mul = 1; 
            // This is to Calculate the product of all elements 
            for (let i = 0 ; i < a2 ; i++) 
                if (array2[i] != 0) 
                    mul = mul * array2[i]; 
            // This will calculate the quotient of every array element
            for (let i = 0 ; i < a1 ; i++) 
            { 
                let x = Math.floor(array1[i] / mul); 
                document.write(x + " "); 
            } 
        }
            let array1 = [20,46,90,80,120]; 
            let array2 = [2,2,5,4,2]; 
            let a1 = array1.length; 
            let a2 = array2.length; 
            calculate(array1, array2, a1, a2); 

            [[1,2,3],[4,5,6],7,8,9[[10,11,12,[13,4,112]],136,14],];