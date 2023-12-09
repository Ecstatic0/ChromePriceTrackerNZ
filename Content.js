// Extract relevant information from the webpage
const productTitle = document.title;
const priceElement = document.getElementById('priceElementId');
const productPrice = priceElement ? priceElement.innerText : 'Price not found';

// Send the information to the background script
chrome.runtime.sendMessage({
  action: 'trackPrice',
  title: productTitle,
  price: productPrice
}, function(response) {
  // Handle the response from the background script if needed
  console.log('Response from background script:', response);
});
