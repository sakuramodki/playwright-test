const {
    webkit,
    chromium,
    firefox,
    devices,
} = require('playwright');

// iPhone11のデバイス情報を取得
const iPhone11 = devices['iPhone 11 Pro'];

describe('スマホ版トップページ', (): void => {
    test('トップページが表示される', async (): Promise<any> => {
        const browser = await chromium.launch();
        const context = await browser.newContext({
            ...iPhone11
        });

        const page = await context.newPage();
        await page.goto('https://www.yahoo.co.jp/');
        const url = await page.url();

        await page.screenshot({path: 'screenshot/smartphone.png'});
        await browser.close();

        expect(url).toBe('https://m.yahoo.co.jp/');
    });
});

describe('PC版トップページ', (): void => {
    test('トップページが表示される', async (): Promise<any> => {
        const browser = await chromium.launch();
        const context = await browser.newContext({});

        const page = await context.newPage();
        await page.goto('https://www.yahoo.co.jp/');
        const url = await page.url();

        await page.screenshot({path: 'screenshot/PC.png'});
        await browser.close();

        expect(url).toBe('https://www.yahoo.co.jp/');
    });
});
