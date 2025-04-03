import { BasePage } from "./BasePage";

export class CalculatorPage extends BasePage {
  constructor() {
    super('/products/calculator');
  }

  private okCookieButton = `//*[contains(text(), "${process.env['LOCALE'] === 'en' ? 'OK, got it' : 'OK'}")]`;
  private addEstimateButtonLocator = '//span[text()="Add to estimate"]';
  private configurationBlockLocator = '//h2[text()="Instances"]';
  private computeEngineLocator = '//h2[text()="Compute Engine"]';
  private incrementButtonLocator = '.QiFlid [aria-label="Increment"]';
  private totalCostLocator = '//div[@class="KgqeZe"]/label';

  async acceptCookiesIfAppear() {
    const button = await $(this.okCookieButton);
    if (await button.isExisting()) {
      await button.waitForExist({ timeout: 5000 });
      await button.click();
    }
    return this;
  }

  async clickAddEstimate() {
    const button = await $(this.addEstimateButtonLocator);
    await button.waitForDisplayed({ timeout: 5000 });
    await button.click();
    return this;
  }

  async selectComputeEngine() {
    const computeEngine = await $(this.computeEngineLocator);
    await computeEngine.waitForClickable({ timeout: 5000 });
    await computeEngine.click();
    return this;
  }

  async verifyConfigurationBlock() {
    const block = await $(this.configurationBlockLocator);
    await block.waitForDisplayed({ timeout: 5000 });
    return block.isDisplayed();
  }

  async addInstances(count: number) {
    const incrementBtn = await $(this.incrementButtonLocator);
    await incrementBtn.waitForClickable({ timeout: 5000 });
    for (let i = 0; i < count; i++) {
      await incrementBtn.click();
    }
    return this;
  }

  async getTotalCost(): Promise<string> {
    const totalCostEl = await $(this.totalCostLocator);
    await totalCostEl.waitForDisplayed({ timeout: 5000 });
    return totalCostEl.getText();
  }}
