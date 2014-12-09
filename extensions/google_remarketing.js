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


var google_remarketing = function(_app) {
	var r = {
		
	vars : {
		
		},

					////////////////////////////////////   CALLS    \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\		



	calls : {}, //calls


					////////////////////////////////////   CALLBACKS    \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\



		callbacks : {
				init : {
					onSuccess : function()	{
		//				_app.u.dump('BEGIN _app.ext.store_navcats.init.onSuccess ');
						var r = true; //return false if extension won't load for some reason (account config, dependencies, etc).
						return r;
					},
					onError : function()	{
						//errors will get reported for this callback as part of the extensions loading.  This is here for extra error handling purposes.
					}
				},
				
				startExtension : {
					onSuccess : function()	{
						if(_app.ext.quickstart && _app.ext.quickstart.template){
							
							/*
							_app.rq.push(['templateFunction','homepageTemplate','onCompletes',function(P) {
								var js = document.createElement("script");
								js.type = "text/javascript";
								js.src = "https://ssl.googleadservices.com/pagead/conversion.js";
								
								var noScriptContent = "<noscript><div style='display:inline;'><img height='1' width='1' style='border-style:none;' alt='' src='//googleads.g.doubleclick.net/pagead/viewthroughconversion/1072567529/?value=0&amp;guid=ON&amp;script=0'/></div></noscript>";
								
								$.extend( js, noScriptContent );
								$('.homepageCollectClub').after(js);
							}]);
							
							_app.rq.push(['templateFunction','categoryTemplate','onCompletes',function(P) {
								var $context = $(_app.u.jqSelector('#',P.parentID));
								
								var js = document.createElement("script");
								js.type = "text/javascript";
								js.src = "https://ssl.googleadservices.com/pagead/conversion.js";
								
								var noScriptContent = "<noscript><div style='display:inline;'><img height='1' width='1' style='border-style:none;' alt='' src='//googleads.g.doubleclick.net/pagead/viewthroughconversion/1072567529/?value=0&amp;guid=ON&amp;script=0'/></div></noscript>";
								
								$.extend( js, noScriptContent );
								$context.append(js);
							}]);
							
							_app.rq.push(['templateFunction','homepageTemplate','onCompletes',function(P) {								
								_app.u.loadScript(('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.googleadservices.com/pagead/conversion.js');
							}]);

							*/
							
							_app.templates.homepageTemplate.on('complete.chessstore',function(event,$catPage,P){							
								_app.u.loadScript(('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.googleadservices.com/pagead/conversion.js');
							});
							
							_app.templates.categoryTemplate.on('complete.chessstore',function(event,$catPage,P){
								app.u.loadScript(('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.googleadservices.com/pagead/conversion.js');
							});
							
							_app.templates.categoryUnfinishedWoodTemplate.on('complete.chessstore',function(event,$catPage,P){
								app.u.loadScript(('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.googleadservices.com/pagead/conversion.js');
							});
							
							_app.templates.category2ProdWideTemplate.on('complete.chessstore',function(event,$catPage,P){
								app.u.loadScript(('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.googleadservices.com/pagead/conversion.js');
							});
							
							_app.templates.categoryTemplate3PanelCat.on('complete.chessstore',function(event,$catPage,P){
								app.u.loadScript(('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.googleadservices.com/pagead/conversion.js');
							});
							
							_app.templates.categoryTemplate4PanelCat.on('complete.chessstore',function(event,$catPage,P){
								app.u.loadScript(('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.googleadservices.com/pagead/conversion.js');
							});
							
							_app.templates.productTemplate.on('complete.chessstore',function(event,$catPage,P){
								app.u.loadScript(('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.googleadservices.com/pagead/conversion.js');
							});
							
							_app.templates.companyTemplate.on('complete.chessstore',function(event,$catPage,P){
								app.u.loadScript(('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.googleadservices.com/pagead/conversion.js');
							});
							
							_app.templates.customerTemplate.on('complete.chessstore',function(event,$catPage,P){
								app.u.loadScript(('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.googleadservices.com/pagead/conversion.js');
							});
							
							_app.templates.searchTemplate.on('complete.chessstore',function(event,$catPage,P){
								app.u.loadScript(('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.googleadservices.com/pagead/conversion.js');
							});
						} 
						else	{
							setTimeout(function(){_app.ext.google_remarketing.callbacks.startExtension.onSuccess()},250);
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