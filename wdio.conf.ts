// @ts-ignore
import moment from 'moment';

let startTime: moment.Moment;

export const config = {
  autoCompileOpts: {
    autoCompile: true,
    tsNodeOpts: {
      transpileOnly: true,
      project: 'tsconfig.json',
    },
  },

  runner: 'local',

  specs: ['./src/tests/**/*.tests.ts'],
  suites: {
    smoke: ['./src/tests/smoke/**/*.tests.ts'],
  },

  maxInstances: 5,

  capabilities: [
    {
      browserName: 'chrome',
      'goog:chromeOptions': {
        args: [
          '--log-level=3',
          '--silent',
          '--ignore-certificate-errors',
          '--disable-logging',
        ],
      },
    },
  ],

  logLevel: 'warn',
  outputDir: './logs/warnings',

  bail: 0,
  baseUrl: 'https://cloud.google.com',

  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,

  reporters: ['spec', 'allure'],
  services: ['chromedriver'],

  framework: 'mocha',
  mochaOpts: {
    timeout: 30000,
  },

  onPrepare() {
    startTime = moment();
    console.warn(`Start time: ${moment().format('YYYY-MM-DD HH:mm:ss')}`);
  },

  async before() {
    // @ts-ignore
    const { width, height } = await browser.execute(() => {
      return {
        width: window.screen.availWidth,
        height: window.screen.availHeight,
      };
    });
    // @ts-ignore
    await browser.setWindowSize(width, height);  },

  async afterTest(_test, _context, { error }) {
    if (error) {
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const filepath = `./logs/screenshots/test-fail-${timestamp}.png`;
      // @ts-ignore
      await browser.saveScreenshot(filepath);
    }
    },

  onComplete() {
    const endTime = moment();
    const duration = moment.duration(endTime.diff(startTime));
    const formattedDuration = `${duration.hours()}h ${duration.minutes()}m ${duration.seconds()}s`;

    console.warn(`Finish time: ${endTime.format('YYYY-MM-DD HH:mm:ss')}`);
    console.warn(`Test duration: ${formattedDuration}`);
  },
};
