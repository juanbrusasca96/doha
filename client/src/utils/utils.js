export const Promo = 'Promo'

export const categories = ['Vino', 'Espumante', 'Aperitivo', 'Cerveza', 'Gaseosa', 'Jugo', 'Energizante', 'Vodka', 'Ron', 'Gin', 'Licor', 'Whiskey', 'Tequila', Promo, 'Consumo en el local'];

export const unitSizes=['-', 'ml', 'L', 'kg'];

export const colors =['-', 'Tinto', 'Blanco', 'Rosado', 'Rubia', 'Negra', 'Roja']

export function roundDecimals(number, decimals) {
    let numberRegexp = new RegExp('\\d\\.(\\d){' + decimals + ',}');    
    if (numberRegexp.test(number)) {         
        return Number(number.toFixed(decimals));
    } else {
        return Number(number.toFixed(decimals)) === 0 ? 0 : number;  
    }
}

export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }