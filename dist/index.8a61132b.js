cookieConsent.isAllConfigured(); /* all services are accepted or refused */ 
cookieConsent.isConfigured("serviceName"); /* service is accepted or refused */ 
cookieConsent.isAccepted("serviceName"); /* service is accepted */ 
cookieConsent.isRefused("serviceName"); /* service is refused */ 
cookieConsent.getServices(); /* returns services array from config */ 
cookieConsent.accept("serviceName"); /* accept a service */ 
cookieConsent.refuse("serviceName"); /* refuse a service */ 
cookieConsent.acceptAll(); /* accept all services */ 
cookieConsent.refuseAll(); /* refuse all services */ 
cookieConsent.reset(); /* delete consent cookie */ 
cookieConsent.on("accept", function(service) {});
cookieConsent.on("refuse", function(service) {});
cookieConsent.on("allConfigured", function() {});
cookieConsent.on("reset", function() {});

//# sourceMappingURL=index.8a61132b.js.map
