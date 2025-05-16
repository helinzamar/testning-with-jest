const { Builder, By } = require('selenium-webdriver');
require('geckodriver');

const fileUnderTest = 'file://' + __dirname.replaceAll(/ /g, '%20').replaceAll(/\\/g, '/') + '/../dist/index.html';

let driver;
jest.setTimeout(1000 * 60 * 5); // 5 minuter

beforeAll(async () => {
  driver = await new Builder().forBrowser('firefox').build();
  await driver.get(fileUnderTest);
});

afterAll(async () => {
  await driver.quit();
});

test('initial display shows n/a', async () => {
  const display = await driver.findElement(By.id('top_of_stack')).getText();
  expect(display).toBe('n/a');
});

test('pushing to stack updates display', async () => {
  const pushButton = await driver.findElement(By.id('push'));
  await pushButton.click();

  const alert = await driver.switchTo().alert();
  await alert.sendKeys('Banan');
  await alert.accept();

  const display = await driver.findElement(By.id('top_of_stack')).getText();
  expect(display).toBe('Banan');
});
