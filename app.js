const axios = require('axios');
const moment = require('moment');

// Vonage API credentials
const apiKey = 'ea5b9b6c';
const apiSecret = 'LvqmXvsG0pMQXwy6';

// Specify the date range for call detail records
const startDate = moment().subtract(7, 'days').format('YYYY-MM-DD');
const endDate = moment().format('YYYY-MM-DD');

// Vonage Report API endpoint
const endpoint = `https://api.kaleyra.io/v1/`;

// Fetch call detail records
axios.get(`${endpoint}/cdr`, {
  auth: {
    username: apiKey,
    password: apiSecret
  },
  params: {
    start_date: startDate,
    end_date: endDate
  }
})
  .then(response => {
    const callRecords = response.data.items;

    // Analyze call volumes
    const totalCalls = callRecords.length;
    console.log(`Total Calls: ${totalCalls}`);

    // ... perform further analysis or calculations as needed

  })
  .catch(error => {
    console.error('Error fetching call detail records:', error.response.data);
  });
