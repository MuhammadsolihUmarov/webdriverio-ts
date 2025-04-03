export class BasePage {
  constructor(private readonly path: string) {}

  open() {
    browser.url(this.path);
    return this;
  }
}
