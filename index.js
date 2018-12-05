#!/usr/bin/env node
const readline = require('readline')
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

process.stdin.setRawMode(true)
process.stdin.resume()

console.log('Press any key to continue...')
rl.input.on('data', () => {
	process.exit()
})
