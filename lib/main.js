let data = require('self').data;

require('page-mod').PageMod({
	include: 'http://www.bbc.co.uk/programmes/*',
	contentScriptFile: [data.url('content-script.js')]
});