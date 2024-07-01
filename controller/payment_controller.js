async function chappaPay(req,res){

    const {amount,currency,email,first_name,last_name,phone_number,tx_ref,  redirect_url,
        payment_options,
        customizations,
    }=req.body
    var myHeaders = new Headers();

    myHeaders.append("Authorization", "Bearer CHASECK_TEST-zlrlXn86lN1GoNLulVWs7dGzCPxVfKzs");
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "amount": `${amount}`,
        "currency": currency,
        "email": email,
        "first_name": first_name,
        "last_name": last_name,
        "phone_number": phone_number,
        "tx_ref": tx_ref,
        "return_url": redirect_url,
        "tx_ref": tx_ref,
        "callback_url": "https://webhook.site/077164d6-29cb-40df-ba29-8a00e59a7e60",
        "return_url": "https://www.google.com/",
        "payment_options": payment_options,
        "customizations": customizations
      });

var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };


  try {
    const response = await fetch("https://api.chapa.co/v1/transaction/initialize", requestOptions);

    if (response.status != 200) {
        throw new Error(response.statusText);
    }

    const data = await response.json(); 
    return res.status(200).json({ data: data.data });
} catch (error) {
    return res.status(401).json({ error: error.message });
}

   

}

module.exports = {
    chappaPay
}