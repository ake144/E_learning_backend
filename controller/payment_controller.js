const axios = require('axios');

async function chappaPay(req, res) {
    const {
        amount,
        currency,
        email,
        first_name,
        last_name,
        phone_number,
        redirect_url,
        tx_ref,
      } = req.body;

//

var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer CHASECK_TEST-MWjP2uReB74uu0MY1IoxuYqP68QhvLaX");
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "amount": `${amount}`,
  "currency": `${currency}`,
  "email": `${email}`,
  "first_name":`${first_name}`,
  "last_name": `${last_name}`,
  "phone_number": `${phone_number}` ,
  "tx_ref": `${tx_ref}`,
  "callback_url": "https://webhook.site/077164d6-29cb-40df-ba29-8a00e59a7e60",
  "return_url": `http://93.127.186.5:3008/my-courses`,
  "customization[title]": "Payment for my favourite merchant",
  "customization[description]": "I love online payments"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

const response=await fetch("https://api.chapa.co/v1/transaction/initialize", requestOptions)
const data=await response.json()
console.log(data,'dd')


res.json(data.data.checkout_url);



    }


module.exports = {
  chappaPay,
};
