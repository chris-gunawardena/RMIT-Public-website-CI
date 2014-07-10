
var urls = [
	{	url: 'http://devcms.rmit.co.vu:8080/publicdev/', css_selector: 'body' },
	{	url: 'http://devcms.rmit.co.vu:8080/publicdev/news/', css_selector: 'body' },
	{	url: 'http://devcms.rmit.co.vu:8080/publicdev/events/', css_selector: 'body' },
	{	url: 'http://devcms.rmit.co.vu:8080/publicdev/events/All-events/Exhibitions/#page=1', css_selector: 'body'	},
	{	url: 'http://devcms.rmit.co.vu:8080/publicdev/events/All-events/Exhibitions/#page=2', css_selector: 'body'	},
	{	url: 'http://devcms.rmit.co.vu:8080/publicdev/events/All-events/Public-lectures/#page=1', css_selector: 'body'	},
	{	url: 'http://devcms.rmit.co.vu:8080/publicdev/events/All-events/Public-lectures/#page=2', css_selector: 'body'	},
	{	url: 'http://devcms.rmit.co.vu:8080/publicdev/events/All-events/Study-information-sessions/#page=1', css_selector: 'body'	},
	{	url: 'http://devcms.rmit.co.vu:8080/publicdev/events/All-events/Study-information-sessions/#page=2', css_selector: 'body'	},
	{	url: 'http://devcms.rmit.co.vu:8080/publicdev/Research/', css_selector: 'body' },
	{	url: 'http://devcms.rmit.co.vu:8080/publicdev/Research/Projects/', css_selector: 'body' },
	{	url: 'http://devcms.rmit.co.vu:8080/publicdev/Research/Projects/test-project/', css_selector: 'project-module-detail-view'	},
	{	url: 'http://devcms.rmit.co.vu:8080/publicdev/industry/', css_selector: 'body'	},
	{	url: 'http://devcms.rmit.co.vu:8080/publicdev/life/', css_selector: 'body'	},
	{	url: 'http://devcms.rmit.co.vu:8080/publicdev/about/Our-locations-and-facilities/', css_selector: 'body'	},
	{	url: 'http://devcms.rmit.co.vu:8080/publicdev/about/Our-locations-and-facilities/Locations/', css_selector: 'body'	},
	{	url: 'http://devcms.rmit.co.vu:8080/publicdev/about/Our-locations-and-facilities/Locations/Melbourne-City-campus/', css_selector: 'body'	},
	{	url: 'http://devcms.rmit.co.vu:8080/publicdev/library/', css_selector: 'body'	},
	{	url: 'http://devcms.rmit.co.vu:8080/publicdev/maps/', css_selector: 'body'	},
	{	url: 'http://devcms.rmit.co.vu:8080/publicdev/programs/', css_selector: 'body'	},
	{	url: 'http://devcms.rmit.co.vu:8080/publicdev/programs/art/', css_selector: 'body'	},
	{	url: 'http://devcms.rmit.co.vu:8080/publicdev/programs/art/Advertising/', css_selector: 'body'	},
	{	url: 'http://devcms.rmit.co.vu:8080/publicdev/programs/architecture/', css_selector: 'body'	}
];

casper.start();
for(var i=0; i<urls.length; i++ )
{	(function(url){
		casper.thenOpen(url.url, function() {
			console.log( "Opening: "+url.url);
			casper.waitForSelector(url.css_selector,
				function success(){
					casper.echo( "Success: "+url.url);
					phantomcss.screenshot( url.css_selector, casper.getCurrentUrl().replace('http://devcms.rmit.co.vu:8080/publicdev/','').replace(/\W/g, '_') + " ("+url.css_selector+")");
				},
				function timeout(){
					casper.test.fail('Timeout');
				}
			);	
		});
	})(urls[i]);
}