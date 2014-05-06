require.config({
  baseUrl: '../',
  paths: {
    jasmine     :   'vendor/jasmine-2.0.0/jasmine',
    jasmineHtml :   'vendor/jasmine-2.0.0/jasmine-html',
    jasmineBoot :   'vendor/jasmine-2.0.0/boot-without-onload'
  },
  shim : {
    'jasmineHtml' : { deps: ['jasmine'] },
    'jasmineBoot'  : { deps: ['jasmine', 'jasmineHtml'] }
  },
});

require(["jasmineBoot"], function() {
  window.executeTest();
});
