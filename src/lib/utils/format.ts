export const formatPrice = (price: number) => {
    try {
        return new Intl.NumberFormat('ru-RU', {
            style: 'currency',
            currency: 'UZS',
            maximumFractionDigits: 0,
        }).format(price);
    } catch (e) {
        return `${price.toLocaleString()} UZS`;
    }
};
