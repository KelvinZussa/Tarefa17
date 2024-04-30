export const config = {
    //  runner: 'local',
   // port: 4724,

    // user: 'oauth-kelvinzussa-9283b',
  //  key: '56ddf2b6-1e39-48ea-b582-db58e68be252',
   // hostname: 'ondemand.us-west-1.saucelabs.com',
  //  port: 443,
  //  baseUrl: 'wd/hub',

 
    user: 'oauth-kelvinzussa-9283b',
    key: '56ddf2b6-1e39-48ea-b582-db58e68be252',
    hostname: 'ondemand.us-west-1.saucelabs.com',
    port: 443,
    baseUrl: 'wd/hub',
  
 
       specs: [
        './test/specs/**/*.js'
    ],

    maxInstances: 1,
    capabilities: [
       // {
      //  platformName: 'Android',
       // 'appium:deviceName': 'ebac',
      //  'appium:platformVersion': '9.0',
     //   'appium:automationName': 'UiAutomator2', 
      //  'appium:app':`${process.cwd()}/app/ebacshop.apks`,
      //  'appium:appWaitActivity': '.MainActivity',
      //  'appium:disableIdLocatorAutocompletion': true
   // }
   //{
   // platformName: 'Android',
   // 'appium:app': 'storage:filename=ebacshop.aab', // The filename of the mobile app
    //'appium:deviceName': 'Android GoogleAPI Emulator',
    //'appium:platformVersion': '12.0',
    //'appium:automationName': 'UiAutomator2',
    //'appium:disableIdLocatorAutocompletion': true,
    //'sauce:options': {
      // build: 'appium-build-teste-ebacshop',
       //name: '<Ebac Shop Teste>',
       //deviceOrientation: 'PORTRAIT',
       //appiumVersion: '2.0.0'
     //},
   //}

   {
    platformName: 'Android',
    'appium:app': 'storage:filename=ebacshop.aab', // The filename of the mobile app
    'appium:deviceName': 'Android GoogleAPI Emulator',
    'appium:platformVersion': '12.0',
    'appium:automationName': 'UiAutomator2',
    "appium:disableIdLocatorAutocompletion": true,
    'sauce:options': {
       build: 'appium-build-teste-ebacshop',
       name: "EBAC Shop Test",
       deviceOrientation: "PORTRAIT",
       appiumVersion: "2.0.0"
     },
    }
],

    logLevel: 'info',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['appium', 'visual'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}
