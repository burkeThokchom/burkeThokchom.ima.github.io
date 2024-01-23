async function processPayment(API_ENDPOINT) {
    // Add logic here to handle the payment processing
    // You may want to use an AJAX request to send the amount to the server
    // and handle the payment processing on the server side.
    // For simplicity, a placeholder alert is used here.
    console.log(API_ENDPOINT)
    const currency = document.getElementById('currency').value;
    const amount = document.getElementById('amount').value;
    
    const obj = {currency, amount};
    const request = new Request(`${API_ENDPOINT}/pay`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj),
    });
    try{
        const resp = await fetch(request);
        const response = await resp.json();
        alert(response.message)
    }
    catch(error){
        alert('Error')
    }
    
    
}