const togglePricing = document.querySelector('.toggle-pricing')

togglePricing.addEventListener('click', () => {
  const cardPrice = document.querySelectorAll('.card-price')
  const actualMode = togglePricing.classList[1]
  
  if ( actualMode != 'monthly' ) monthlyPrice(cardPrice)
  else annuallyPrice(cardPrice)

})

function annuallyPrice(prices) {
  const annualPrice = [199.99, 249.99, 399.99]

  for ( const price in prices ) {
    prices[price].innerHTML = annualPrice[price]

  }

  togglePricing.classList.remove('monthly')
  togglePricing.classList.add('annually')

}

function monthlyPrice(prices) {
  const monthPrice = [19.99, 24.99, 39.99]
  
  for ( const price in prices ) {
    prices[price].innerHTML = monthPrice[price]

  }

  togglePricing.classList.add('monthly')
  togglePricing.classList.remove('annually')

}