// <<<<< JS dates functions start >>>>>
    // There are 9 ways to create a new date object:
        1. new Date()
            // Example:
            const d = new Date();
            console.log(d)
            // output: Mon Apr 22 2024 15:27:29 GMT+0530 (India Standard Time)

        2. new Date(date string)
            // Example:
            const d = new Date("2024-12-25");
            console.log(d)
            // output: Wed Dec 25 2024 05:30:00 GMT+0530 (India Standard Time)

        // 7 numbers specify year, month, day, hour, minute, second, and millisecond (in that order):       
        3. new Date(year,month)
        4. new Date(year,month,day)
        5. new Date(year,month,day,hours)
        6. new Date(year,month,day,hours,minutes)
        7. new Date(year,month,day,hours,minutes,seconds)
        8. new Date(year,month,day,hours,minutes,seconds,ms)
            // Example: 
            const d = new Date(2018, 11, 24, 10, 33, 30, 0);
            console.log(d)
            //output: Mon Dec 24 2018 10:33:30 GMT+0530 (India Standard Time)
        9. new Date(milliseconds)
            // JavaScript Stores Dates as Milliseconds
            // JavaScript stores dates as number of milliseconds since January 01, 1970.
            // Zero time is January 01, 1970 00:00:00 UTC.
            // One day (24 hours) is 86 400 000 milliseconds.
            // Now the time is: 1713779732888 milliseconds past January 01, 1970
            // Example
            const d = new Date(100000000000);
            console.log(d);
            //output: Sat Mar 03 1973 15:16:40 GMT+0530 (India Standard Time)


    // months start with 0
        0 = Jan
        1 = Feb
        ...
        ...
        11 = Dec

    // One and two digit years will be interpreted as 19xx: (previous century)
        const d = new Date(96, 02, 27);
        console.log(d)

        const d = new Date(1996, 02, 27);
        console.log(d)
        // same output for above 2 console: Wed Mar 27 1996 00:00:00 GMT+0530 (India Standard Time)

        const d = new Date(9, 11, 24);
        console.log(d);
        //output: Fri Dec 24 1909 00:00:00 GMT+0530 (India Standard Time)
   
    // When you display a date object in HTML, it is automatically converted to a string, with the toString() method.
        const d = new Date();
        console.log(d.toString());
        //output: Mon Apr 22 2024 15:45:31 GMT+0530 (India Standard Time)

    //The toDateString() method converts a date to a more readable format:
        const d = new Date();
        console.log(d.toDateString());
        //output: Mon Apr 22 2024

    // The toUTCString() method converts a date to a string using the UTC standard:
        const d = new Date();
        console.log(d.toUTCString());
        //output: Mon, 22 Apr 2024 10:18:23 GMT

    // The toISOString() method converts a date to a string using the ISO standard:
        const d = new Date();
        console.log(d.toISOString());
        //output: 2024-04-22T10:19:07.415Z

    // Date Get Methods
        getFullYear()       Get year as a four digit number (yyyy)
        getMonth()          Get month as a number (0-11)
        getDate()           Get day as a number (1-31)
        getDay()            Get weekday as a number (0-6)
        getHours()          Get hour (0-23)
        getMinutes()        Get minute (0-59)
        getSeconds()        Get second (0-59)
        getMilliseconds()   Get millisecond (0-999)
        getTime()           Get time (milliseconds since January 1, 1970)

// <<<<< JS dates functions end >>>>>