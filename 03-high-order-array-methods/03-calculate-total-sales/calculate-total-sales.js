function calculateTotalSalesWithTax(products, taxRate) {
  const totalWithoutTaxes = products.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

  const taxAmount = (totalWithoutTaxes * taxRate) / 100;
  const totalWithTaxes = totalWithoutTaxes + taxAmount;
  return parseFloat(totalWithTaxes.toFixed(2));
}

module.exports = calculateTotalSalesWithTax;
