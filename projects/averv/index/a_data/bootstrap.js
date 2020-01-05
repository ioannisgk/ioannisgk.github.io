(function() {
	var _smartsupp = {};
	var smartsupp = window.parent.smartsupp;
	var smartsuppChat = parent.smartsupp.chats[smartchatId];
	
	var _config = {"package":"basic","lang":"en","orientation":"right","hideBanner":true,"hideWidget":false,"hideOfflineBanner":false,"enableRating":true,"ratingComment":false,"requireLogin":false,"hideOfflineChat":false,"muteSounds":false,"isEnabledEvents":true,"banner":{"type":"arrow","options":{}},"translates":{"online":{"title":"Pre-sales Enquiries","infoTitle":"Pirenko","infoDesc":"Founder & Theme Developer","send":"Send","textareaPlaceholder":"Write here, and press Enter to send"},"offline":{"title":"Do you have any questions?","email":"Email","message":"Your message","name":"Name","notice":"Feel free to reach us if you have any pre-sales enquiries. We are currently offline, but we will comment on your message very soon.","submit":"Send message"},"widget":{"offline":"Do You Have Any Questions?","online":"Hey, I'm Pirenko! Any Questions?","away":"Do You Have Any Questions?"},"banner":{"arrow":{},"bubble":{}},"privacyNotice":{"title":"Personal data processing"}},"colors":{"primary":"#3598dc","banner":"#494949","widget":"#3598dc"},"theme":{"name":"flat","options":{"widgetRadius":0}},"online":{},"offline":{},"api":{"basic":true,"banner":true,"events":true,"groups":true,"theme":true},"transcriptEnabled":true,"privacyNoticeEnabled":true,"login":{}};
	_config.baseLang = 'eu';
	_config.browserLang = 'el';
	_config.avatarPath = '/widgets/avatars/eNgkwNVKGh.png';
	_config.host = 'server.smartsupp.com';
	_config.package = 'basic';
	_config.packageName = 'basic';
	_config.logoUrl = '';
	_config.logoSrc = '';
	_config.logoSmSrc = '';
	
	var smartsuppLoadInterval = setInterval(function() {
		if (!window.miwo) return;
		clearInterval(smartsuppLoadInterval);
		smartsuppChat.setOptions(_smartsupp);
		
		miwo.ready(function() {
			miwo.cookie.document = parent.document;
			miwo.baseUrl = smartsuppChat.getOption('baseUrl');
			miwo.staticUrl = smartsuppChat.getOption('staticUrl');

			var configurator = new Miwo.Configurator();
			configurator.addConfig(App.DefaultConfig.getConfig());
			configurator.addConfig(App.ClientConfig.getConfig(_config));
			configurator.addConfig(App.ChatConfig.getConfig(smartsuppChat));

			configurator.ext(new Chat.ChatExtension());
			var container = configurator.createContainer();
			container.get('miwo.application').run();
		});
	}, 50);
	
	if (_config.api.events && smartsuppChat.getOption('gaKey')) {
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
	}
	
	
	if(!window.parent.visitortrace && !window.parent.smartlook && window.parent._smartsupp && smartsuppChat.getOption('recordingDisable')!==true && smartsuppChat.getOption('visitortraceDisable')!==true) {
		var _smartlook = window.parent._smartlook || window.parent._visitortrace || {};
		_smartlook.host = 'manager.smartlook.com';
		_smartlook.window = window.parent;
		_smartlook.document = window.parent.document;
		if(window.parent._smartsupp.cookieDomain && !_smartlook.cookieDomain){ _smartlook.cookieDomain = window.parent._smartsupp.cookieDomain; }
		if(window.parent._smartsupp.cookiePath && !_smartlook.cookiePath){ _smartlook.cookiePath = window.parent._smartsupp.cookiePath; }
	
		window.smartlook||(function(d) {var o=smartlook=function(){ o.api.push(arguments)},
		s=d.getElementsByTagName('script')[0],c=d.createElement('script');o.api=[];c.type='text/javascript';
		c.async=true;c.charset='utf-8';c.src='https://rec.smartlook.com/recorder.js';s.parentNode.insertBefore(c,s);})(window.parent.document);
		window.parent.smartlook = window.smartlook;
	
		smartlook('init', 'd46e13f86fa0372a05feb8d38cdb66a39f407a50', _smartlook);
		smartlook('expertForms');
		smartlook('expertAPI');
		
		_config.smartlook = window.smartlook;
	}
	
	
	!smartsuppChat.getOption('disableInternalApi') && (function() {
		
	})();
})();
