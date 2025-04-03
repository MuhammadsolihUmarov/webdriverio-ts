import { expect } from 'chai';
import { CalculatorPage } from '../../pageObject/CalculatorPage';

const calculatorPage = new CalculatorPage();

describe('Cloud Calculator', () => {
  before(async () => {
    await calculatorPage.open()
        .acceptCookiesIfAppear();
  });

  it('should open the calculator URL', async() => {
    const url = await browser.getUrl();
    const baseUrl = browser.options.baseUrl;
    expect(url).to.equal(`${baseUrl}/products/calculator`);
  });

  it('should add new entities to calculator', async () => {
    await calculatorPage.clickAddEstimate();
    await calculatorPage.selectComputeEngine();

    const isConfigDisplayed = await calculatorPage.verifyConfigurationBlock();
    expect(isConfigDisplayed).to.be.true;
  });

  it('should correctly add two new instances', async () => {
    await calculatorPage.clickAddEstimate();
    await calculatorPage.selectComputeEngine();

    await calculatorPage.addInstances(2);

    const totalCost = await calculatorPage.getTotalCost();
    expect(totalCost).to.equal('$419.10');
  });
});
