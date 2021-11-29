#!/usr/bin/env node
import fetch from 'node-fetch';

const decodeHTML = async (input) => {
  const url = input.slice(2).join('')
  const response = await fetch(url)
  console.log(await response.text())
}
decodeHTML(process.argv)