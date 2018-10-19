'use strict';

const puppeteer = require('puppeteer');

(async() => {
	const browser = await puppeteer.launch({headless: false, args: ['--no-sandbox', '--disable-setuid-sandbox']});
	const page = await browser.newPage();

	await page.goto('https://google.com');

	await page.type('#gs_lc0 input', 'test');
	
	await page.keyboard.press(String.fromCharCode(13)); // press enter


	await browser.close();
})();
