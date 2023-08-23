export const applyDiscount = product => Math.round((product.price - (product.price * product.discountPercentage) / 100) * 100) / 100
