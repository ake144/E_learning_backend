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


      console.log("from body", req.body);

      try {
        const header = {
          headers: {
            Authorization: `Bearer CHASECK_TEST-MWjP2uReB74uu0MY1IoxuYqP68QhvLaX`,
            "Content-Type": "application/json",
          },
        };
        const body = {
          amount: amount,
          currency: currency,
          email: email,
          first_name: first_name,
          last_name: last_name,
          phone_number: phone_number,
          tx_ref: tx_ref,
          return_url:redirect_url, // Set your return URL
        };
        let resp = "";
        await axios
          .post("https://api.chapa.co/v1/transaction/initialize", body, header)
          .then((response) => {
            resp = response;
          })
          .catch((error) => {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
            res.status(400).json({
              message: error,
            });
          });
        res.status(200).json(resp.data);
      } catch (e) {
        res.status(400).json({
          error_code: e.code,
          message: e.message,
        });
      }
    }


module.exports = {
  chappaPay,
};
