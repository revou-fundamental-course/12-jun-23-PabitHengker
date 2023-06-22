function konversi() {
    let celcius = parseFloat(document.getElementById('celcius').value)
    let fahrenheit = (celcius * 9/5) + 32
    document.getElementById('fahrenheit').value = fahrenheit
}  

function reset() {
    document.getElementById('celcius').value = " "
    document.getElementById('fahreheit').value = " "
}