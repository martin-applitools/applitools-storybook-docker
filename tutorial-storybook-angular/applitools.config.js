module.exports = {
  testConcurrency: 25,
  appName: 'StorybookAngularTutorial',
  showLogs: false,
  //runInDocker: true,
  batchName: 'StoryBook Angular Example',
  apiKey: '598dR5lXjc1BABfsyWMFkxL8KGw8BI4CdxuUGqFQJTJY110',
  browser: [
    {width: 800, height: 600, name: 'firefox'},
    {width: 1024, height: 768, name: 'chrome'},
    {width: 1024, height: 768, name: 'safari'}
  ],
  puppeteerOptions: {
    executablePath: '/usr/bin/chromium-browser',
    args: ['--no-sandbox'],
  }
}
