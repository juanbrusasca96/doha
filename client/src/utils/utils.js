export const categories = ['Vino', 'Espumante', 'Aperitivo', 'Cerveza', 'Gaseosa', 'Jugo', 'Energizante', 'Vodka', 'Ron', 'Gin', 'Licor', 'Whiskey', 'Tequila', 'Promo', 'Consumo en el local']

export function roundDecimals(number, decimals) {
    let numberRegexp = new RegExp('\\d\\.(\\d){' + decimals + ',}');    
    if (numberRegexp.test(number)) {         
        return Number(number.toFixed(decimals));
    } else {
        return Number(number.toFixed(decimals)) === 0 ? 0 : number;  
    }
}