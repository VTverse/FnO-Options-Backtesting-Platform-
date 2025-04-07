const axios = require('axios');

exports.getOptionData = async (symbol) => {
  try {
    // Mocked NSE API call - Replace with actual NSE API if available
    // Example: const response = await axios.get(`https://www.nseindia.com/api/option-chain-indices?symbol=${symbol}`);
    return {
      symbol,
      data: [
        { strikePrice: 18000, callOI: 1200, putOI: 800 },
        { strikePrice: 18100, callOI: 1100, putOI: 900 }
      ]
    };
  } catch (err) {
    throw new Error('Failed to fetch option data');
  }
};
