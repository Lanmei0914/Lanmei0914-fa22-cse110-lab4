1. What will happen at line 12 and why?
   At line 12 it will print i value which is 3. Beacuse i is defined by var keyward so the socpe of i is the hole function. And inside the for loop, since the prices array has length of 3 (3 element inside it). So the for loop will loop 3 times which means i will increment 3 time. Then the value of i should be 3.

2. What will happen at line 13 and why?
   At line 13 it will print discountedPrice value which is 150. Beacuse discountedPrice is defined by var keyward so the socpe of discountedPrice is the hole function. And inside the for loop, since the prices array has length of 3 (3 element inside it). So the for loop will loop 3 times which means discountedPrice will assign 3 times first time is 50 (prices[0] * 0.5), second time is 100 (prices[1] * 0.5) and last time is 150 (prices[2] * 0.5). After the for loop end discountedPrice's value will keep unchange as the last time assign. So it should be 150.

3. What will happen at line 14 and why?
   At line 14 it will print finalPrice value which is 150. Beacuse finalPrice is defined by var keyward so the socpe of finalPrice is the hole function. And inside the for loop, since the prices array has length of 3 (3 element inside it). So the for loop will loop 3 times which means finalPrice will assign 3 times first time.The Math.round() method will returns the value of a number rounded to the nearest integer. So the first time assign for finalPrice is 
   50 (Math.round(5000)/100), second time is 100 (Math.round(10000)/100) and last time is 150 (Math.round(15000)/100). After the for loop end finalPrice's value will keep unchange as the last time assign. So it should be 150.

4. What will this function return？
   This function will return discounted. discounted = [50, 100, 150]. It is an array with 3 elements. Because push() method will add a new item to the end of an array. So each time for loop iterate push() will add the finalPrice value to the end of discounted array. Since finalPrice and discounted both have scope of hole function. So we will add 50, 100, 150 to the array discounted. Finally it will return an array with [50, 100, 150] correctly.

5. What will happen at line 12 and why?
   The code cause an error. Because let keyword can only be accessed within the block it is defined in. i was defined in for loop block, so the scope of i is the for loop block. The line 12 is outside the for loop block so i is not defined at line 12.

6. What will happen at line 13 and why?
   The code cause an error. Because let keyword can only be accessed within the block it is defined in. discountedPrice was defined in for loop block, so the scope of discountedPrice is the for loop block. The line 13 is outside the for loop block so discountedPrice is not defined at line 13.

7. What will happen at line 14 and why?
   At line 14 it will print finalPrice value which is 150. Beacuse finalPrice is defined by let keyward, let keyword can only be accessed within the block it is defined in. finalPrice was defined in the function block, so the socpe of finalPrice is the still hole function. And inside the for loop, since the prices array has length of 3 (3 element inside it). So the for loop will loop 3 times which means finalPrice will assign 3 times first time.The Math.round() method will returns the value of a number rounded to the nearest integer. So the first time assign for finalPrice is 50 (Math.round(5000)/100), second time is 100 (Math.round(10000)/100) and last time is 150 (Math.round(15000)/100). After the for loop end finalPrice's value will keep unchange as the last time assign. So it should be 150.

8. What will this function return? Give a brief explantion.
   This function will return discounted. discounted = [50, 100, 150]. It is an array with 3 elements. Because push() method will add a new item to the end of an array. So each time for loop iterate push() will add the finalPrice value to the end of discounted array. Since finalPrice and discounted both have scope of hole function (we defined it at the function block), so line 9 will not cause any error. So we will add 50, 100, 150 to the array discounted. Finally it will return an array with [50, 100, 150] correctly.
   
9.  What will happen at line 11 and why?
   The code cause an error. Because let keyword can only be accessed within the block it is defined in. i was defined in for loop block, so the scope of i is the for loop block. The line 12 is outside the for loop block so i is not defined at line 12.

10. What will happen at line 12 and why?
   At line 12 it will print length value which is 3. Because the input arguement is [100, 200, 300]. It is an array which has 3 element. The prices.length will return the length of array (how many element are in the array). So the length should have value of 3.

11. What will this function return? 
    This function will return discounted. discounted = [50, 100, 150]. It is an array with 3 elements. Because push() method will add a new item to the end of an array. So each time for loop iterate push() will add the discountedPrice value to the end of discounted array. Even we know discounted is assign with const keyward but we can still modify it using push() method so line 8 will not cause any error. So we will add 50, 100, 150 to the array discounted as a new item. Finally it will return an array with [50, 100, 150] correctly.

12. Given the above Object, write the notation for:
    A. studnet.name
    B. student['Grad Year']
    C. student.greeting()
    D. student['Favorite Teacher'].name
    E. student.courseLoad[0]

13. Arithmetic
    A. '3' + 2 = '32' Because intergers map to their exact string representation
    B. '3' - 2 = 1 Because '3' map to number 3
    C. 3 + null = 3 Becuase null map to 0
    D. '3' + null = '3null' Becuase null map to their exact string representation
    E. true + 3 = 4 Because true map to 1
    F. false + null = 0 Because false map to 0, null also map to 0
    G. '3' + undefined = '3undefined' Becuase undefined map to their exact string representation
    H. '3' - undefined = NaN Because '3' map to number 3 and undefined map to number NaN. So the result is a type of number NaN.

14. Comparison
    A. '2' > 1 is true Because '2' map to number 2
    B. '2' < '12' is false Because dictionary order of '2' is greater than dictionary order of '12'
    C. 2 == '2' is true Because '2' map to number 2
    D. 2 === '2' is false Because 2 is type of number '2' is type of string
    E. true == 2 is false Because true is map to number 1
    F. true === Boolean(2) is true Because Boolean(2) will return a true which is bool type so true === true is true. 

15. Difference between the == and ===
    == will check the equality with the type conversion and === will checks the equality without type conversion which means if a and b are of different type a === b immediately returns false without an attempt to convert them. 

17. Waht will be the result? 
    The result will be an arry with the value [2, 4, 6]. When we called modifyArray() it will iterate through array [1, 2, 3]. And inside the for loop the callback() will actually call the doSomething() (because we send doSomething as a parameters to modifyArray()) So it will multiply 2 for each element inside the array and push them to newArr. Finally the modifyArray() will return the newArr.  

19. What is the output of the above code?
    The out put should be:
    1
    4
    3
    2