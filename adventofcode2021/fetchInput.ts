import fetch from 'node-fetch';
require('dotenv').config();

export const fetchInput = async (url) => {
  const result = await fetch(url, {
    headers: {
      Cookie: process.env.COOKIE
    }
  })
  return await result.text()
}