let baseurl = 'https://api-m.sandbox.paypal.com';
const base64 = require('base-64');
let clientid =
  'AT5S1lplE8hAOoGPxuNZuYWhsIhpg0Z-6CwYBJFHj3lWZgIEy_Y5m28q02bCBadSeW1nDgN2_aPZPu27';
let secretkey =
  'EEu2jjT6DCwHCCQAy_Wjhf7Z12Rm9LfNBwVOuuQZQ5Snjfk1TsmANsM0nzuQsO-9zP4w99JnZ4CbsyJd';
let orderDetail = {
  intent: 'CAPTURE',
  purchase_units: [
    {
      items: [
        {
          name: 'T-Shirt',
          description: 'Green XL',
          quantity: '1',
          unit_amount: {
            currency_code: 'USD',
            value: '100.00',
          },
        },
      ],
      amount: {
        currency_code: 'USD',
        value: '100.00',
        breakdown: {
          item_total: {
            currency_code: 'USD',
            value: '100.00',
          },
        },
      },
    },
  ],
  application_context: {
    return_url: 'https://example.com/return',
    cancel_url: 'https://example.com/cancel',
  },
};
const generateToken = () => {
  var headers = new Headers();
  headers.append('Content-Type', 'application/x-www-form-urlencoded');
  headers.append(
    'Authorization',
    'Basic ' + base64.encode(`${clientid}:${secretkey}`),
  );
  var requestoption = {
    method: 'POST',
    headers: headers,
    body: 'grant_type=client_credentials',
  };
  return new Promise((resolve, reject) => {
    fetch(baseurl + '/v1/oauth2/token', requestoption)
      .then(response => response.text())
      .then(result => {
        console.log('resultprint', result);
        const {access_token} = JSON.parse(result);
        resolve(access_token);
      })
      .catch(error => {
        console.log('errorraised', error);
        reject(error);
      });
  });
};
const createorder = (token = '') => {
  var requestoption = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(orderDetail),
  };
  return new Promise((resolve, reject) => {
    fetch(baseurl + '/v2/checkout/orders', requestoption)
      .then(response => response.text())
      .then(result => {
        console.log('resultprint', result);
        const res = JSON.parse(result);
        resolve(res);
      })
      .catch(error => {
        console.log('errorraised', error);
        reject(error);
      });
  });
};
const capturepayment = (id, token = '') => {
  var requestoption = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };
  return new Promise((resolve, reject) => {
    fetch(baseurl + `/v2/checkout/orders/${id}/capture`, requestoption)
      .then(response => response.text())
      .then(result => {
        console.log('resultprint', result);
        const res = JSON.parse(result);
        resolve(res);
      })
      .catch(error => {
        console.log('errorraised', error);
        reject(error);
      });
  });
};
export default {
  generateToken,
  createorder,
  capturepayment,
};
