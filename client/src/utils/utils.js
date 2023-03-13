export const Promo = 'Promo'

export const home = 'home'
export const purchase = 'purchase'
export const table = 'table'

export const categories = ['Vino', 'Espumante', 'Aperitivo', 'Cerveza', 'Gaseosa', 'Jugo', 'Energizante', 'Vodka', 'Ron', 'Gin', 'Licor', 'Whiskey', 'Tequila', Promo, 'Consumo en el local'];

export const unitSizes = ['-', 'ml', 'L', 'kg'];

export const colors = ['-', 'Tinto', 'Blanco', 'Rosado', 'Rubia', 'Negra', 'Roja']

export const sortOptions = ['A - Z', 'Precio']

export const newTable = 'Nueva mesa';
export const newProduct = 'Nuevo producto';
export const newPurchase = 'Nueva compra';
export const statistics = 'Estadisticas';
export const newPromo = 'Nueva promo'

export const pages = [newTable, newProduct, newPromo, newPurchase, statistics];

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

export const handleWheel = (e) => {
    e.target.blur();
}

export function updateStock(productsList, productsSelected) {
    let copyArray = productsList.filter(prod => productsSelected.find(p => p._id === prod._id))
    copyArray = copyArray.map(prod => ({ ...prod, stock: prod.stock + productsSelected.find(p => p._id === prod._id).stock, price: productsSelected.find(p => p._id === prod._id).price, purchasePrice: productsSelected.find(p => p._id === prod._id).purchasePrice, recommendedRetailPrice: productsSelected.find(p => p._id === prod._id).recommendedRetailPrice }))
    return copyArray;
}