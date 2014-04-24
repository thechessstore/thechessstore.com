/* **************************************************************

   Copyright 2011 Zoovy, Inc.

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.

************************************************************** */

/*
An extension for acquiring and displaying 'lists' of categories.
The functions here are designed to work with 'reasonable' size lists of categories.
*/


var google_remarketing = function() {
	var r = {
		
	vars : {
		
		},

					////////////////////////////////////   CALLS    \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\		



	calls : {}, //calls


					////////////////////////////////////   CALLBACKS    \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\



		callbacks : {
				init : {
					onSuccess : function()	{
		//				app.u.dump('BEGIN app.ext.store_navcats.init.onSuccess ');
						var r = true; //return false if extension won't load for some reason (account config, dependencies, etc).
						return r;
					},
					onError : function()	{
						//errors will get reported for this callback as part of the extensions loading.  This is here for extra error handling purposes.
					}
				},
				
				startExtension : {
					onSuccess : function()	{
						if(app.ext.myRIA && app.ext.myRIA.template){
							
							/*
							app.rq.push(['templateFunction','homepageTemplate','onCompletes',function(P) {
								var js = document.createElement("script");
								js.type = "text/javascript";
								js.src = "//www.googleadservices.com/pagead/conversion.js";
								
								var noScriptContent = "<noscript><div style='display:inline;'><img height='1' width='1' style='border-style:none;' alt='' src='//googleads.g.doubleclick.net/pagead/viewthroughconversion/1072567529/?value=0&amp;guid=ON&amp;script=0'/></div></noscript>";
								
								$.extend( js, noScriptContent );
								$('.homepageCollectClub').after(js);
							}]);
							
							app.rq.push(['templateFunction','categoryTemplate','onCompletes',function(P) {
								var $context = $(app.u.jqSelector('#',P.parentID));
								
								var js = document.createElement("script");
								js.type = "text/javascript";
								js.src = "//www.googleadservices.com/pagead/conversion.js";
								
								var noScriptContent = "<noscript><div style='display:inline;'><img height='1' width='1' style='border-style:none;' alt='' src='//googleads.g.doubleclick.net/pagead/viewthroughconversion/1072567529/?value=0&amp;guid=ON&amp;script=0'/></div></noscript>";
								
								$.extend( js, noScriptContent );
								$context.append(js);
							}]);
							
							app.rq.push(['templateFunction','homepageTemplate','onCompletes',function(P) {								
								app.u.loadScript(('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.googleadservices.com/pagead/conversion.js');
							}]);

							*/
							
							app.rq.push(['templateFunction','homepageTemplate','onCompletes',function(P) {								
								var js = "<script type='text/javascript' src='//www.googleadservices.com/pagead/conversion.js'></script><noscript><div style='display:inline;'><img height='1' width='1' style='border-style:none;' alt='' src='//googleads.g.doubleclick.net/pagead/viewthroughconversion/1072567529/?value=0&amp;guid=ON&amp;script=0'/></div></noscript>";
								$('.homepageCollectClub').after(js);
							}]);
														
							app.rq.push(['templateFunction','categoryTemplate','onCompletes',function(P) {
								var $context = $(app.u.jqSelector('#',P.parentID));
								var js = "<script type='text/javascript' src='//www.googleadservices.com/pagead/conversion.js'></script><noscript><div style='display:inline;'><img height='1' width='1' style='border-style:none;' alt='' src='//googleads.g.doubleclick.net/pagead/viewthroughconversion/1072567529/?value=0&amp;guid=ON&amp;script=0'/></div></noscript>";
								$context.after(js);
							}]);
							
							app.rq.push(['templateFunction','categoryUnfinishedWoodTemplate','onCompletes',function(P) {
								var $context = $(app.u.jqSelector('#',P.parentID));
								var js = "<script type='text/javascript' src='//www.googleadservices.com/pagead/conversion.js'></script><noscript><div style='display:inline;'><img height='1' width='1' style='border-style:none;' alt='' src='//googleads.g.doubleclick.net/pagead/viewthroughconversion/1072567529/?value=0&amp;guid=ON&amp;script=0'/></div></noscript>";
								$context.after(js);
							}]);
							
							app.rq.push(['templateFunction','category2ProdWideTemplate','onCompletes',function(P) {
								var $context = $(app.u.jqSelector('#',P.parentID));
								var js = "<script type='text/javascript' src='//www.googleadservices.com/pagead/conversion.js'></script><noscript><div style='display:inline;'><img height='1' width='1' style='border-style:none;' alt='' src='//googleads.g.doubleclick.net/pagead/viewthroughconversion/1072567529/?value=0&amp;guid=ON&amp;script=0'/></div></noscript>";
								$context.after(js);
							}]);
							
							app.rq.push(['templateFunction','categoryTemplate3PanelCat','onCompletes',function(P) {
								var $context = $(app.u.jqSelector('#',P.parentID));
								var js = "<script type='text/javascript' src='//www.googleadservices.com/pagead/conversion.js'></script><noscript><div style='display:inline;'><img height='1' width='1' style='border-style:none;' alt='' src='//googleads.g.doubleclick.net/pagead/viewthroughconversion/1072567529/?value=0&amp;guid=ON&amp;script=0'/></div></noscript>";
								$context.after(js);
							}]);
							
							app.rq.push(['templateFunction','categoryTemplate4PanelCat','onCompletes',function(P) {
								var $context = $(app.u.jqSelector('#',P.parentID));
								var js = "<script type='text/javascript' src='//www.googleadservices.com/pagead/conversion.js'></script><noscript><div style='display:inline;'><img height='1' width='1' style='border-style:none;' alt='' src='//googleads.g.doubleclick.net/pagead/viewthroughconversion/1072567529/?value=0&amp;guid=ON&amp;script=0'/></div></noscript>";
								$context.after(js);
							}]);
							
							app.rq.push(['templateFunction','productTemplate','onCompletes',function(P) {
								var $context = $(app.u.jqSelector('#',P.parentID));
								var js = "<script type='text/javascript' src='//www.googleadservices.com/pagead/conversion.js'></script><noscript><div style='display:inline;'><img height='1' width='1' style='border-style:none;' alt='' src='//googleads.g.doubleclick.net/pagead/viewthroughconversion/1072567529/?value=0&amp;guid=ON&amp;script=0'/></div></noscript>";
								$context.after(js);
							}]);
							
							app.rq.push(['templateFunction','companyTemplate','onCompletes',function(P) {
								var js = "<script type='text/javascript' src='//www.googleadservices.com/pagead/conversion.js'></script><noscript><div style='display:inline;'><img height='1' width='1' style='border-style:none;' alt='' src='//googleads.g.doubleclick.net/pagead/viewthroughconversion/1072567529/?value=0&amp;guid=ON&amp;script=0'/></div></noscript>";
								$('#contactArticle').append(js);
							}]);
							
							app.rq.push(['templateFunction','customerTemplate','onCompletes',function(P) {
								var js = "<script type='text/javascript' src='//www.googleadservices.com/pagead/conversion.js'></script><noscript><div style='display:inline;'><img height='1' width='1' style='border-style:none;' alt='' src='//googleads.g.doubleclick.net/pagead/viewthroughconversion/1072567529/?value=0&amp;guid=ON&amp;script=0'/></div></noscript>";
								$('#customerNav').append(js);
							}]);
							
							app.rq.push(['templateFunction','searchTemplate','onCompletes',function(P) {
								var js = "<script type='text/javascript' src='//www.googleadservices.com/pagead/conversion.js'></script><noscript><div style='display:inline;'><img height='1' width='1' style='border-style:none;' alt='' src='//googleads.g.doubleclick.net/pagead/viewthroughconversion/1072567529/?value=0&amp;guid=ON&amp;script=0'/></div></noscript>";
								$('.searchResultsPage').append(js);
							}]);
						} 
						else	{
							setTimeout(function(){app.ext.google_remarketing.callbacks.startExtension.onSuccess()},250);
						}
						
					},
					onError : function()	{
					}
				}
			},




////////////////////////////////////   Actions    \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


		a : {
			
		}, //actions


////////////////////////////////////   UTIL    \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


		u : {
			
		} //u

	} //r object.
	return r;
}