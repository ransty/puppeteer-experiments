'use strict';

const puppeteer = require('puppeteer');
const devices = require('puppeteer/DeviceDescriptors');

(async() => {
	const browser = await puppeteer.launch({headless: false, args: ['--no-sandbox', '--disable-setuid-sandbox']});
	const page = await browser.newPage();

	await page.emulate(devices['iPhone X']);
	await page.goto('https://localhost:8080/nifi');
	await page.screenshot({path: 'full.png', fullPage: true});

})();
