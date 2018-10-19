const puppeteer = require('puppeteer');

(async () => {
	const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']}); // create puppeteer headless browser with no sandbox because we are running as root, otherwise the headless chrome will not run
	const page = await browser.newPage(); // create a new Page object
	await page.goto('https://google.com', {waitUntil: 'networkidle2'}); // consider navigation to be finished when there are no more than 2 network connections for at least 500 ms
	await page.pdf({path: 'hn.pdf', format: 'A4'}); // create a pdf based on the page visited

	await browser.close(); // need to close the browser when finished, otherwise it will keep running in the background
})();
