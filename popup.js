document.getElementById('searchBtn').addEventListener('click', function() {
  const coinName = document.getElementById('coinName').value.trim().toLowerCase();
  if (!coinName) return alert('Please enter a coin name');

  fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${coinName}&vs_currencies=usd`)
    .then(response => response.json())
    .then(data => {
      const price = data[coinName]?.usd;
      document.getElementById('price').innerText = price ? `${coinName.charAt(0).toUpperCase() + coinName.slice(1)} Price: $${price}` : 'Coin not found. Please check the name and try again.';
    })
    .catch(() => document.getElementById('price').innerText = 'Failed to fetch data. Try again later.');
});
