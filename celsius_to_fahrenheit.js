// Convert Celsius to Fahrenheit.

function celsiusToFahrenheit(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    console.log(`${celsius}°C is equal to ${fahrenheit}°F`);
    return fahrenheit;
}

celsiusToFahrenheit(0); // 0°C is equal to 32°F
celsiusToFahrenheit(100); // 100°C is equal to 212°F


//--------------------------------------------------------------------------
// with just return statement:

// function celsiusToFahrenheit2 (celsius) {
//     console.log(`${celsius}°C is equal to ${(celsius * 9/5) + 32}°F`);
//     return (celsius * 9/5) + 32;
// }
// celsiusToFahrenheit2(0); // 0°C is equal to 32°F