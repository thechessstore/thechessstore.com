(function(_app){
var configURI = (document.location.protocol == 'file:') ? _app.vars.testURL+'jsonapi/config.js' : _app.vars.baseURL+'jsonapi/config.js';

_app.u.loadScript(configURI,function(){
//in some cases, such as the zoovy UI, zglobals may not be defined. If that's the case, certain vars, such as jqurl, must be passed in via P in initialize:
//	_app.u.dump(" ->>>>>>>>>>>>>>>>>>>>>>>>>>>>> zGlobals is an object");
	_app.vars.username = zGlobals.appSettings.username.toLowerCase(); //used w/ image URL's.
//need to make sure the secureURL ends in a / always. doesn't seem to always come in that way via zGlobals
	_app.vars.secureURL = zGlobals.appSettings.https_app_url;
	_app.vars.domain = zGlobals.appSettings.sdomain; //passed in ajax requests.
	_app.vars.jqurl = (document.location.protocol === 'file:') ? _app.vars.testURL+'jsonapi/' : '/jsonapi/';
	
	var startupRequires = ['quickstart','extension_thechessstore','cco','store_product','order_create','store_account_creation']
	
	_app.require(startupRequires, function(){
		//_app.ext.extension_thechessstore.u.loadSuppressionList(function(){
			//_app.ext.extension_thechessstore.u.suppress($('#appView'));
			//});
		_app.ext.quickstart.callbacks.startMyProgram.onSuccess();
		
		//will destroy and reinitialize the header and homepage main banner carousels on screen resize. 
		$(window).resize(function() {
			var width = $(this).outerWidth();
			var height = $(this).outerHeight();
			setTimeout(function(){
				if(width === screen.width) {
					dump('window timeout resizing stuff:'); dump("screen width: "+screen.width); dump("width: "+width); dump("height: "+height); 
					//_app.ext.extension_thechessstore.u.runHeaderCarousel(true);
					//_app.ext.extension_thechessstore.u.runHeaderCarousel();
					
		//			this is setup, but phone/tablet portrait to landscape work well w/out it. 
		//			Not likely to be changing widths enough for this to be needed. But it's here if needed. 
		//			if($("#mainContentArea :visible:first").attr('data-app-uri') == "/") {
		//				_app.ext.extension_thechessstore.u.runHomeMainBanner($(".homeTemplate"),true);
		//				_app.ext.extension_thechessstore.u.runHomeMainBanner($(".homeTemplate"));
		//			}
		
				}
			},500);
		});
		
		$.extend(handlePogs.prototype,_app.ext.extension_thechessstore.variations);
				
		//make sure minicart stays up to date. 
		//I know why you're doing this, but let's find a framework fix soon -mc
		_app.ext.extension_thechessstore.vars.mcSetInterval = setInterval(function(){
			_app.ext.quickstart.u.handleMinicartUpdate({'datapointer':'cartDetail|'+_app.model.fetchCartID()});
		},4000);
		});
	}); //The config.js is dynamically generated.
	
_app.extend({
	"namespace" : "quickstart",
	"filename" : "app-quickstart.js"
	});
	
_app.extend({
	"namespace" : "store_account_creation",
	"filename" : "extensions/store_account_creation.js"
	});

_app.couple('quickstart','addPageHandler',{
	"pageType" : "static",
	"require" : [],
	"handler" : function($container, infoObj){
		var deferred = $.Deferred();
		infoObj.defPipeline.addDeferred(deferred);
		if(infoObj.deferred){
			infoObj.defPipeline.addDeferred(infoObj.deferred);
			}
		//We use infoObj.require here because the router handlers may have put something in there.
		//By nature, the static page handler requires nothing, but the templates it renders may require all kinds of stuff
		infoObj.require = infoObj.require || [];
		_app.require(infoObj.require,function(){
			infoObj.verb = 'translate';
	dump('------------------------------------------'); dump(infoObj);
			infoObj.templateid = infoObj.templateID;
			var $page = new tlc().runTLC(infoObj);
			//$page.tlc(infoObj);
			$page.data('templateid',infoObj.templateid);
			$page.data('pageid',infoObj.id);
			$container.append($page);
			infoObj.state = 'complete';
			//this method is synchronous so no extra deferred required
			_app.renderFunctions.handleTemplateEvents($page,infoObj);
			deferred.resolve();
			});
		}
	});

_app.extend({
	"namespace" : "order_create",
	"filename" : "extensions/checkout/extension.js"
	});

_app.couple('quickstart','addPageHandler',{
	"pageType" : "checkout",
	"require" : ['order_create','cco', 'extensions/checkout/active.html', 'templates.html'],
	"handler" : function($container, infoObj, require){
		var deferred = $.Deferred();
		infoObj.defPipeline.addDeferred(deferred);
		infoObj.templateID = 'checkoutTemplate';
		_app.require(require,function(){
			$container.attr('id', 'checkoutContainer');
			_app.ext.order_create.a.startCheckout($container,_app.model.fetchCartID());
			infoObj.state = 'complete'; //needed for handleTemplateEvents.
			_app.renderFunctions.handleTemplateEvents($container,infoObj);
			deferred.resolve();
			});
		}
	});
	
_app.extend({
	"namespace" : "cco",
	"filename" : "extensions/cart_checkout_order.js"
	});

_app.couple('quickstart','addPageHandler',{
	"pageType" : "cart",
	"require" : ['cco','order_create','templates.html'],
	"handler" : function($container, infoObj, require){
		infoObj.deferred = $.Deferred();
		infoObj.defPipeline.addDeferred(infoObj.deferred);
		infoObj.navcat = zGlobals.appSettings.rootcat;
		infoObj.cartid = _app.model.fetchCartID();
		infoObj.templateID = 'cartTemplate';
		infoObj.trigger = 'fetch';
		_app.require(require,function(){
			//var $cart = new tlc().getTemplateInstance('cartTemplate');
			//var $cart = $(_app.renderFunctions.createTemplateInstance('cartTemplate',infoObj));
			var $cart = _app.ext.cco.a.getCartAsJqObj(infoObj);
			$container.append($cart);
			
			$cart.on('complete',function(){
				$("[data-app-role='shipMethodsUL']",$(this)).find(":radio").each(function(){
					$(this).attr('data-app-change','quickstart|cartShipMethodSelect');
					});
				});

			$cart.trigger(infoObj.trigger,$.extend({'Q':'mutable'},infoObj));
				_app.model.dispatchThis('mutable');
			
			// _app.calls.cartDetail.init(_app.model.fetchCartID(),{
				// 'callback':'tlc',
				// 'onComplete' : function(){
					// infoObj.state = 'complete';
					// _app.renderFunctions.handleTemplateEvents($cart,$.extend(true,{},infoObj));
					// },
				// 'jqObj' : $cart,
				// 'verb' : 'translate'
				// },'mutable');
			// _app.model.dispatchThis('mutable');
			});
		}
	});
_app.u.bindTemplateEvent('cartTemplate','complete.cart',function(event, $context, infoObj){
	//_app.ext.extension_thechessstore.u.cartitemqty($context);
	//_app.ext.extension_thechessstore.u.getShipContainerHeight($context);
	});
_app.u.bindTemplateEvent('cartTemplate','depart.destroy',function(event, $context, infoObj){
	var $page = $context.closest('[data-app-uri]');
	if($page){
		$page.empty().remove();
		}
	});
_app.u.bindTemplateEvent('checkoutTemplate','depart.destroy',function(event, $context, infoObj){
	var $page = $context.closest('[data-app-uri]');
	if($page){
		$page.empty().remove();
		}
	});
_app.extend({
	"namespace" : "store_routing",
	"filename" : "extensions/store_routing.js"
	});
	//formerly in startup callback of store_routing
_app.router.addAlias('product',		function(routeObj){_app.ext.quickstart.a.newShowContent(routeObj.value,	$.extend({'pageType':'product'}, routeObj.params));});
_app.router.appendHash({'type':'match','route':'/product/{{pid}}/{{name}}*','callback':'product'});
_app.router.appendHash({'type':'match','route':'/product/{{pid}}*','callback':'product'});


_app.router.addAlias('homepage',	function(routeObj){_app.ext.quickstart.a.newShowContent(routeObj.value,	$.extend({'pageType':'homepage'}, routeObj.params));});
_app.router.appendHash({'type':'exact','route':'/home','callback':'homepage'});
_app.router.appendHash({'type':'exact','route':'/home/','callback':'homepage'});
_app.router.appendHash({'type':'exact','route':'/','callback':'homepage'});

_app.router.addAlias('category',	function(routeObj){_app.ext.quickstart.a.newShowContent(routeObj.value,	$.extend({'pageType':'category'}, routeObj.params));});
_app.router.appendHash({'type':'match','route':'/category/{{navcat}}*','callback':'category'});

_app.router.addAlias('search',		function(routeObj){_app.ext.quickstart.a.newShowContent(routeObj.value,	$.extend({'pageType':'search'}, routeObj.params));});
_app.router.appendHash({'type':'match','route':'/search/tag/{{tag}}*','callback':'search'});
_app.router.appendHash({'type':'match','route':'/search/keywords/{{KEYWORDS}}*','callback':'search'});

_app.router.addAlias('checkout',	function(routeObj){_app.ext.quickstart.a.newShowContent(routeObj.value,	$.extend({'pageType':'checkout', 'requireSecure':true}, routeObj.params));});
_app.router.appendHash({'type':'exact','route':'/checkout','callback':'checkout'});
_app.router.appendHash({'type':'exact','route':'/checkout/','callback':'checkout'});

_app.router.addAlias('cart',	function(routeObj){_app.ext.quickstart.a.newShowContent(routeObj.value,	$.extend({'pageType':'cart'}, routeObj.params));});
_app.router.appendHash({'type':'exact','route':'/cart','callback':'cart'});
_app.router.appendHash({'type':'exact','route':'/cart/','callback':'cart'});

_app.router.appendHash({'type':'exact','route':'/404','callback':function(routeObj){
	$.extend(routeObj.params,{
		'pageType':'static',
		'templateID':'pageNotFoundTemplate',
		'require':'templates.html'
		});
	_app.ext.quickstart.a.newShowContent(routeObj.value,routeObj.params);
	}});

_app.router.appendHash({'type':'exact','route':'/about_us/','callback':function(routeObj){
	$.extend(routeObj.params,{
		'pageType':'static',
		'templateID':'aboutUsTemplate',
		'require':['templates.html']
		});
	_app.ext.quickstart.a.newShowContent(routeObj.value,routeObj.params);
	}});
_app.router.appendHash({'type':'exact','route':'/contact_us/','callback':function(routeObj){
	$.extend(routeObj.params,{
		'pageType':'static',
		'templateID':'contactUsTemplate',
		'require':['templates.html', 'store_crm']
		});
	_app.ext.quickstart.a.newShowContent(routeObj.value,routeObj.params);
	}});
_app.router.appendHash({'type':'exact','route':'/frequently_asked_questions/','callback':function(routeObj){
	$.extend(routeObj.params,{
		'pageType':'static',
		'templateID':'faqTemplate',
		'require':['templates.html']
		});
	dump(routeObj.params);
	routeObj.params.deferred = $.Deferred();
	_app.ext.quickstart.a.newShowContent(routeObj.value,routeObj.params);
	}});
_app.u.bindTemplateEvent('faqTemplate','complete.faq',function(event, $context, infoObj){
	$context.off('complete.faq');
	dump('in faq complete event');
	_app.require(['store_crm','templates.html'],function(){
		_app.ext.store_crm.calls.appFAQsAll.init({'jqObj':$('.faqContent',$context),'deferred':infoObj.deferred,'callback':'showFAQTopics','extension':'store_crm','templateID':'faqTopicTemplate'});
		_app.model.dispatchThis();			
		});
	});
_app.router.appendHash({'type':'exact','route':'/payment_policy/','callback':function(routeObj){
	$.extend(routeObj.params,{
		'pageType':'static',
		'templateID':'paymentTemplate',
		'require':['templates.html']
		});
	_app.ext.quickstart.a.newShowContent(routeObj.value,routeObj.params);
	}});
_app.router.appendHash({'type':'exact','route':'/privacy_policy/','callback':function(routeObj){
	$.extend(routeObj.params,{
		'pageType':'static',
		'templateID':'privacyTemplate',
		'require':['templates.html']
		});
	_app.ext.quickstart.a.newShowContent(routeObj.value,routeObj.params);
	}});
_app.router.appendHash({'type':'exact','route':'/return_policy/','callback':function(routeObj){
	$.extend(routeObj.params,{
		'pageType':'static',
		'templateID':'returnTemplate',
		'require':['templates.html']
		});
	_app.ext.quickstart.a.newShowContent(routeObj.value,routeObj.params);
	}});
_app.router.appendHash({'type':'exact','route':'/shipping_policy/','callback':function(routeObj){
	$.extend(routeObj.params,{
		'pageType':'static',
		'templateID':'shippingTemplate',
		'require':['templates.html']
		});
	_app.ext.quickstart.a.newShowContent(routeObj.value,routeObj.params);
	}});
_app.router.appendHash({'type':'exact','route':'/subscribe/','callback':function(routeObj){
$.extend(routeObj.params,{
	'pageType':'static',
	'login' : true,
	'templateID':'subscribeTemplate',
	'require':['cco','templates.html']
	});
_app.ext.quickstart.a.newShowContent(routeObj.value,routeObj.params);
}});	
_app.router.appendHash({'type':'exact','route':'/my_account/','callback':function(routeObj){
	$.extend(routeObj.params,{
		'pageType':'static',
		'login' : true,
		'templateID':'myAccountTemplate',
		'require':['cco','templates.html','store_crm']
		});
	_app.ext.quickstart.a.newShowContent(routeObj.value,routeObj.params);
	}});	
_app.u.bindTemplateEvent('myAccountTemplate','complete.customer',function(event, $context, infoObj){
	_app.ext.cco.calls.appCheckoutDestinations.init(_app.model.fetchCartID(),{},'mutable'); //needed for country list in address editor.
	_app.model.addDispatchToQ({"_cmd":"buyerAddressList","_tag":{'callback':'tlc','jqObj':$('.mainColumn',$context),'verb':'translate','datapointer':'buyerAddressList'}},'mutable');
	_app.model.dispatchThis();							
	});
_app.router.appendHash({'type':'exact','route':'/my_order_history/','callback':function(routeObj){
	$.extend(routeObj.params,{
		'pageType':'static',
		'login' : true,
		'templateID':'orderHistoryTemplate',
		'require':['templates.html']
		});
	_app.ext.quickstart.a.newShowContent(routeObj.value,routeObj.params);
	}});
_app.router.appendHash({'type':'exact','route':'/create_account/','callback':function(routeObj){
	$.extend(routeObj.params,{
		'pageType':'static',
		'login' : true,
		'templateID':'createaccountTemplate',
		'require':['cco','templates.html']
		});
	_app.ext.quickstart.a.newShowContent(routeObj.value,routeObj.params);
	}});
_app.u.bindTemplateEvent('orderHistoryTemplate','complete.customer',function(event, $context, infoObj){
	_app.model.addDispatchToQ({"_cmd":"buyerPurchaseHistory","_tag":{'callback':'tlc','jqObj':$('.mainColumn',$context),'verb':'translate','datapointer':'buyerPurchaseHistory'}},'mutable');
	_app.model.dispatchThis();							
	});
_app.router.appendHash({'type':'exact','route':'/change_password/','callback':function(routeObj){
	$.extend(routeObj.params,{
		'pageType':'static',
		'login' : true,
		'templateID':'changePasswordTemplate',
		'require':['templates.html']
		});
	_app.ext.quickstart.a.newShowContent(routeObj.value,routeObj.params);
	}});
_app.u.bindTemplateEvent('changePasswordTemplate','complete.customer',function(event, $context, infoObj){
	_app.model.addDispatchToQ({"_cmd":"buyerPurchaseHistory","_tag":{
		"datapointer":"buyerPurchaseHistory",
		"callback":"tlc",
		"verb" : "translate",
		"jqObj" : $("[data-app-role='orderList']",$context).empty()
		}},"mutable");
	_app.model.dispatchThis();							
	});
_app.router.appendHash({'type':'exact','route':'/my_wishlist/','callback':function(routeObj){
	$.extend(routeObj.params,{
		'pageType':'static',
		'login' : true,
		'templateID':'customerListsTemplate',
		'require':['templates.html']
		});
	_app.ext.quickstart.a.newShowContent(routeObj.value,routeObj.params);
	}});
_app.u.bindTemplateEvent('customerListsTemplate','complete.customer',function(event, $context, infoObj){
	_app.model.addDispatchToQ({"_cmd":"buyerProductLists","_tag":{"datapointer":"buyerProductLists",'verb':'translate','jqObj': $('.mainColumn',$context),'callback':'tlc',onComplete : function(rd){
//data formatting on lists is unlike any other format for product, so a special handler is used.				
		function populateBuyerProdlist(listID,$context)	{
			//add the product list ul here because tlc statement has list ID for bind.
			$("[data-buyerlistid='"+listID+"']",$context).append("<ul data-tlc=\"bind $var '.@"+listID+"'; store_prodlist#productlist  --hideSummary='1' --withReviews='1' --withVariations='1' --withInventory='1' --templateid='productListTemplateBuyerList'  --legacy;\" class='listStyleNone fluidList clearfix noPadOrMargin productList'></ul>");
			_app.model.addDispatchToQ({"_cmd":"buyerProductListDetail","listid":listID,"_tag" : {'datapointer':'buyerProductListDetail|'+listID,"listid":listID,'callback':'buyerListAsProdlist','extension':'quickstart', "require":"store_prodlist",'jqObj':$("[data-buyerlistid='"+listID+"'] ul",$context)}},'mutable');
			}
		
		var data = _app.data[rd.datapointer]['@lists']; //shortcut
		var L = data.length;
		var numRequests = 0;
		for(var i = 0; i < L; i += 1)	{
			populateBuyerProdlist(data[i].id,rd.jqObj)
			}
		_app.model.dispatchThis('mutable');
		//no sense putting 1 list into an accordion.
		if(L > 1)	{
			$('.applyAccordion',rd.jqObj).accordion({heightStyle: "content"});
			}
		}}},"mutable");
	_app.model.dispatchThis();							
	});
_app.u.bindTemplateEvent(function(){return true;}, 'complete.routing', function(event, $context, infoObj){
	if(infoObj){
		var canonical = "";
		
		var $routeEle = $('[data-canonical]',$context);
		if($routeEle.length){ canonical = $routeEle.attr('data-canonical'); }
		else{
			canonical = $context.closest('[data-app-uri]').attr('data-app-uri');
			}
		
		var $canonical = $('link[rel=canonical]')
		if(!$canonical.length){
			dump('NO CANONICAL IN THE DOCUMENT');
			$canonical = $('<link rel="canonical" href="" />');
			$('head').append($canonical);
			}
		$canonical.attr('href', canonical);
		}
	});
_app.extend({
	"namespace" : "extension_thechessstore",
	"filename" : "extensions/extension_thechessstore.js"
	});
	
	
_app.extend({
	"namespace" : "store_tracking",
	"filename" : "extensions/store_tracking.js"
	});
_app.couple('order_create','addOrderCompleteHandler',{
	'handler':function(P){
		_app.require('store_tracking',function(){
			if(P && P.datapointer && _app.data[P.datapointer] && _app.data[P.datapointer].order){
				var order = _app.data[P.datapointer].order;
				//conversion patch    
					var frame = document.createElement("iframe");
					$(frame).addClass("displayNone");
					$("body").append(frame);
				
					setTimeout(function() {
					 
						var google_conversion_id = 1072567529;
						var google_conversion_language = "en";
						var google_conversion_format = "1";
						var google_conversion_color = "666666";
						var google_conversion_label = "c45fCIf2PhDpqbj_Aw";
						var google_conversion_value = order.sum.items_total;
					    var google_conversion_currency = "USD";
						var google_remarketing_only = false;
						
						var url = "https://www.googleadservices.com/pagead/conversion/"+google_conversion_id+"/"+"?value="+google_conversion_value+"&amp;currency_code="+google_conversion_currency+"&amp;label="+google_conversion_label+"&amp;guid=ON&amp;script=0";
					 	
					 	$('body').append('<img src="'+url+'" class="displayNone"/>');
					 	
					 /*
					 var script = '<script type="text/javascript" src="https://www.googleadservices.com/pagead/conversion.js"></script>';
					 frame.contentWindow.document.open();
					 frame.contentWindow.document.write('<html><head>'+paramScript+''+script+'</head><body></body></html>');
					 frame.contentWindow.document.close();
					 */
					 dump("Adwords conversion tracking image added on order placement.");
					 					 
					},250);
					
/*CHESS STORE*/	//BING TRACKING CODE
/*CHESS STORE*/ 	setTimeout(function() {
/*CHESS STORE*/			var microsoft_adcenterconversion_domainid = 13680;
/*CHESS STORE*/			var microsoft_adcenterconversion_cp = 5050;
/*CHESS STORE*/			var url = "https://13680.r.msn.com/?type=1&cp=1";
/*CHESS STORE*/ 	   $('body').append('<img src="'+url+'" class="displayNone" width="1" height="1"/>');
/*CHESS STORE*/ 	},200);

/*CHESS STORE*/	//SAS TRACKING CODE
/*CHESS STORE*/		setTimeout(function() {
/*CHESS STORE*/		   var order = _app.data[P.datapointer].order;
/*CHESS STORE*/		   var url = "https://shareasale.com/sale.cfm?amount="+order.sum.items_total+"&tracking="+order.our.orderid+"&transtype=SALE&storeID=1&merchantID=33638";
/*CHESS STORE*/		  $('body').append('<img src="'+url+'" class="displayNone" width="1" height="1"/>');
/*CHESS STORE*/		},300);

/*CHESS STORE*/	//LINKCONNECTOR TRACKING CODE
/*CHESS STORE*/ 	setTimeout(function() {
/*CHESS STORE*/			var order = _app.data[P.datapointer].order;
/*CHESS STORE*/			var itemTotals = order.sum.items_total;
/*CHESS STORE*/			var url = "https://www.linkconnector.com/tmjs.php?lc=000000003300&oid="+order+"&amt="+itemTotals;
/*CHESS STORE*/ 	   $('body').append('<img src="'+url+'" class="displayNone" width="1" height="1"/>');
/*CHESS STORE*/ 	},350);

				//conversion patch
				var plugins = zGlobals.plugins;
				// note: order is an object that references the raw (public) cart
				// order.our.xxxx  order[@ITEMS], etc.
				// data will appear in google analytics immediately after adding it (there is no delay)
				ga('require', 'ecommerce');
				//analytics tracking
				var r = {
					'id' : order.our.orderid,
					'revenue' : order.sum.items_total,
					'shipping' : order.sum.shp_total,
					'tax' : order.sum.tax_total
					};
				// _app.u.dump(r);
				ga('ecommerce:addTransaction',r);

				for(var i in order['@ITEMS']){
					var item = order['@ITEMS'][i];
					// _app.u.dump(item);
					ga('ecommerce:addItem', {
						'id' : order.our.orderid,
						'name' : item.prod_name,
						'sku' : item.sku,
						'price' : item.base_price,
						'quantity' : item.qty,
						})
					};

				ga('ecommerce:send');
				_app.u.dump('FINISHED store_tracking.onSuccess (google analytics)');
				
				for(var i in plugins){
					if(_app.ext.store_tracking.trackers[i] && _app.ext.store_tracking.trackers[i].enable){
						_app.ext.store_tracking.trackers[i](order, plugins[i]);
						}
					}				
				}
			});
		}
	});

//Generate meta information
_app.u.bindTemplateEvent(function(){return true;}, 'complete.metainformation',function(event, $context, infoObj){
	var defaultTitle = "Shop here for the Best Chess Sets, boards, clocks, supplies,and more!";
	var titlePrefix = "";
	var titlePostfix = " | thechessstore.com";
	
	var baseTitle = $('[data-seo-title]', $context).attr('data-seo-title') || defaultTitle;
	var desc = $('[data-seo-desc]', $context).attr('data-seo-desc') || '';
	
	document.title = titlePrefix + baseTitle + titlePostfix;
	$('meta[name=description]').attr('content', desc);
	});
	
//Scroll restore
_app.u.bindTemplateEvent(function(){return true;}, 'complete.scrollrestore',function(event, $context, infoObj){
	var scroll = $context.data('scroll-restore');
	if(scroll){
		$('html, body').animate({scrollTop : scroll}, 300);
		}
	else if((infoObj.performJumpToTop === false) ? false : true) {
		$('html, body').animate({scrollTop : 0}, 300);
		}
	else {
		//do nothing
		}
	});
	
_app.u.bindTemplateEvent(function(){return true;}, 'depart.scrollrestore', function(event, $context, infoObj){
	var scroll = $('html').scrollTop()
	$context.data('scroll-restore',scroll);
	});

_app.extend({
	"namespace" : "extension_thechessstore",
	"filename" : "extensions/extension_thechessstore.js"
	});
_app.u.bindTemplateEvent(function(){return true;}, 'complete.suppress', function(event, $context, infoObj){
	});
_app.extend({
	"namespace" : "store_filter",
	"filename" : "extensions/store_filter.js"
	});
	
_app.u.bindTemplateEvent('homepageTemplate', 'complete.homepageinit',function(event,$context,infoObj) {
		//INTERNET EXPLORER WARNING MESSAGE
		if($('.headerIE8WarningCont').data('messageShown')){
		}
		else{
			$('.headerIE8WarningCont').data('messageShown',false);
		}
		if($('.headerIE8WarningCont').data('messageShown') === false)
		{
			$('.headerIE8WarningCont').anymessage({'message':'The browser you are using is out of date and cannot be used to view this web site properly. We recommend that you use IE9 or better, Firefox or Chrome.'});	
			$('.headerIE8WarningCont').data('messageShown',true).append();
		}
	
	
		//Header dropdown menus
		var showDropdown = function ($tag) {
			var $dropdown = $(".dropdown", $tag);
			var height = 0;
			$dropdown.children().each(function(){
				height += $(this).outerHeight(true);
			});
			$dropdown.stop().animate({"height":height+"px"}, 1000);
		}
			
		var hideDropdown = function ($tag) {
			$(".dropdown", $tag).stop().animate({"height":"0px"}, 1000);
		}
		
		//Homepage Slideshow image code and carousel code
		
		
			if($('.homepageBannerImg').data('carouselLoaded')){}
			else{
				$('.homepageBannerImg').data('carouselLoaded',false);
			}
			if($('.homepageBannerImg').data('carouselLoaded') === false){
				//Home page slideshow
				$("#nav").html("");
				$('.featureImg') 
				.after('<div id="nav">') 
				.cycle({ 
					fx:     'fade',  
					timeout: 5000, 
					pager:  '#nav' 
				});							
				$('.homepageBannerImg').data('carouselLoaded',true).append();
				
				//Carousel horizontal sliders
				var carousel1;
				function foo1(){ $(".homepageCat1").carouFredSel({
					width   : 980,
					height	: 300,
					items   : 3,
					scroll: 1,
					auto : false,
					prev : ".caroPrev1",
					next : ".caroNext1"
				});}
				carousel1 = foo1;
				setTimeout(carousel1, 1000);
		
		
				//$("#caroNext1").delay(1500).click();
				//$("#caroPrev1").click();
				
				var carousel2;
				function foo2(){ $(".homepageCat2").carouFredSel({
					width   : 980,
					height	: 300,
					items   : 3,
					scroll: 1,
					auto : false,
				prev : ".caroPrev2",
				next : ".caroNext2"
				});}
				carousel2 = foo2;
				setTimeout(carousel2, 1000);
		
				var carousel3;
				function foo3(){
				$(".homepageCat3").carouFredSel({
					width   : 980,
					height	: 300,
					items   : 3,
					scroll: 1,
					auto : false,
				prev : ".caroPrev3",
				next : ".caroNext3"
				});}
				carousel3 = foo3;
				setTimeout(carousel3, 1000);
				
				var carousel4;
				function foo4(){
				$(".homepageCat4").carouFredSel({
					width   : 980,
					height	: 300,
					items   : 3,
					scroll: 1,
					auto : false,
				prev : ".caroPrev4",
				next : ".caroNext4"
				});}
				carousel4 = foo4;
				setTimeout(carousel4, 1000);
				
				//$myselection.addClass('noScriptReExecute');
				homepageLoad = true;
				_app.u.dump("Homepage functions loaded");
			};
	});
_app.u.bindTemplateEvent('homepageTemplate', 'depart.homepagedepart',function(event,$context,infoObj) {
	});
	
_app.u.bindTemplateEvent('productTemplate', 'complete.invcheck',function(event, $context, infoObj){
	if(!$context.attr('data-invcheck')){
		$context.attr('data-invcheck','true');
		var data = _app.data['appProductGet|'+infoObj.pid];
		var variations = data['@variations'];
		if(variations.length == 1 /*&& variations[0].id.match(/A[BDEFGHM]/) */){
			var id = variations[0].id;
			$('select[name='+id+'] option', $context).each(function(){
				var sku = infoObj.pid+":"+id+""+$(this).attr("value");
				dump(sku);
				dump(data["@inventory"][sku]);
				if(data["@inventory"][sku] && data["@inventory"][sku].AVAILABLE <= 0){
					//$(this).attr("disabled","disabled");
					$(this).remove();
					}
				});
			}
		}
	});
_app.u.bindTemplateEvent('categoryTemplate', 'complete.categoryinit',function(event,$context,infoObj) {
	$catList = $("ul[data-app-role='subcategoryList']",$context); // don't use .categoryList  add a new, specific class.
							
	if($catList.children().length)	{
		$catList.children().each(function(){
			var $li = $(this);
			
			if($li.data('app-havesubcatdata'))	{} //already have data.
			else if($('.catDesc',$li).length)	{
				_app.ext.store_navcats.calls.appPageGet.init({
					'PATH':$li.data('catsafeid'),
					'@get':['description']
					},
					{'callback': function(rd){					//if there are errors, leave them alone... for now.
					$li.data('app-havesubcatdata',true);
					if(_app.data[rd.datapointer] && _app.data[rd.datapointer]['%page'])	{
						$('.catDesc',$li).append(_app.data[rd.datapointer]['%page'].description);
						}
					}
					},'mutable')
				}
			else	{
				_app.u.dump(" -> is NOT retrieving category description for "+$li.data('catsafeid'));
				//category description already obtained or template has no catDesc class (no description needed)
				}
			});
		_app.model.dispatchThis('mutable');
		}
	else	{
		//most likely, no subcats.
		}
		
	//BEGIN HEADER HIDING FUNCTION
	$(".headerHideShow").hide();
	$(".headerBoxCenter").css("margin", "0");
	$(".headerBottom").css("height", "50px");
	$(".headerBottom").css("padding-bottom", "11px");
	$(".headerBottom").css("padding-top", "4px");
	$(".headerBoxCenter").css("width", "200px");
	$(".headerBoxCenter").css("margin-top", "13px");
	$(".headerHideShowContent").css("display", "block");
	$(".productSearchForm").css("height", "100%");
	$(".productSearchForm").css("margin-top", "18px");
	
	//INTERNET EXPLORER WARNING MESSAGE
	if($('.headerIE8WarningCont').data('messageShown')){
	}
	else{
		$('.headerIE8WarningCont').data('messageShown',false);
	}
	if($('.headerIE8WarningCont').data('messageShown') === false)
	{
		$('.headerIE8WarningCont').anymessage({'message':'The browser you are using is out of date and cannot be used to view this web site properly. We recommend that you use IE9 or better, Firefox or Chrome.'});	
		$('.headerIE8WarningCont').data('messageShown',true).append();
	}
	
	//**COMMENT TO REMOVE AUTO-RESETTING WHEN LEAVING CAT PAGE FOR FILTERED SEARCH**
	
	_app.ext.store_filter.catPageID = $(_app.u.jqSelector('#',infoObj.navcat));  
	
	_app.u.dump("BEGIN categoryTemplate onCompletes for filtering");
	if(_app.ext.store_filter.filterMap[infoObj.navcat])	{
		_app.u.dump(" -> safe id DOES have a filter.");

		var $page = $context;
		_app.u.dump(" -> $page.length: "+$page.length);
		if($page.data('filterAdded'))	{} //filter is already added, don't add again.
		else	{
			$page.data('filterAdded',true)
			var $form = $("[name='"+_app.ext.store_filter.filterMap[infoObj.navcat].filter+"']",'#appFilters').clone().appendTo($('.filterContainer',$page));
			$form.on('submit.filterSearch',function(event){
				event.preventDefault()
				_app.u.dump(" -> Filter form submitted.");
				_app.ext.store_filter.a.execFilter($form,$page);
				});
	
			if(typeof _app.ext.store_filter.filterMap[infoObj.navcat].exec == 'function')	{
				_app.ext.store_filter.filterMap[infoObj.navcat].exec($form,infoObj)
				}
	
	//make all the checkboxes auto-submit the form.
			$(":checkbox",$form).off('click.formSubmit').on('click.formSubmit',function() {
				$form.submit();      
				});
			}
		}
		
		
		
		//selector function for filtered search that displays appropriate wood menu options when wood is selected.	
		/*$('.woodPieces:checkbox').click(function() {
			var woodPieces = $(this);
			// $this will contain a reference to the checkbox   
			if (woodPieces.is(':checked')) {
				 $(".woodType").show();
				 $(".kingHeight").show();
			} else {
				$(".woodType").hide();
				$(".kingHeight").hide();
			}
		});*/
		
		$('.resetButton', $context).click(function(){
		$context.empty().remove();
		showContent('category',{'navcat':P.navcat});
		});								
});
_app.u.bindTemplateEvent('categoryTemplate', 'depart.categorydepart',function(event,$context,infoObj) {
	if(_app.ext.store_filter.vars.catPageID.empty && typeof _app.ext.store_filter.vars.catPageID.empty === 'function'){
		_app.ext.store_filter.vars.catPageID.empty().remove();
	}	
	
	//BEGIN HEADER SHOWING WHEN LEAVING THIS PAGE
	$(".headerHideShow").show();
	$(".headerBoxCenter").css("margin-right", "30px");
	$(".headerBottom").css("height", "150px");
	$(".headerBottom").css("padding", "15px");
	$(".headerBoxCenter").css("width", "250px");
	$(".headerBoxCenter").css("margin-top", "0px");
	$(".headerHideShowContent").css("display", "none");
	$(".productSearchForm").css("height", "22px");
	$(".productSearchForm").css("margin", "0");
});



_app.u.bindTemplateEvent('productTemplate', 'complete.productinit', function(event,$thisProduct,P){
	_app.u.dump("Begin review message displaying function");
	if($(".reviewsBind", $thisProduct).children().length === 0){
		_app.u.dump("No reviews. Running existing message check");
		if(($(".reviewsCont", $thisProduct).length === 0) || ($(".reviewsCont", $thisProduct).length === null)){
		  _app.u.dump("No message exists. Display message");
		  $(_app.ext.extension_thechessstore.vars.reviewSelector, '#productTemplate_'+_app.u.makeSafeHTMLId(P.pid)).append(
		  '<p style="text-align:center;" class="reviewsCont">'
		  + 'Be the First to Review This Product!'
		  + '</p>');
		  //var p = document.getElementsByClassName("reviewsCont");
		  //p.reviewsCont += '#productTemplate_'+_app.u.makeSafeHTMLId(P.pid);
		  _app.u.dump("Review message displaying for : " + '#productTemplate_'+_app.u.makeSafeHTMLId(P.pid));
		}
		else{
			_app.u.dump("Message exists. Doing nothing");
		}


		/*var noReviews = document.createElement("p");
		var noReviewsMessage = document.createTextNode("Be the First to Review This Product!");
		noReviews.appendChild(noreviewsMessage);
		var findReviewSec = document.getElementsByClassName("reviewsBind");
		document.body.insertBefore(noReviews, findReviewSec);*/
	}
	else
	{
		_app.u.dump("Reviews exist. function aborted. Reviews length amount: " + $(".reviewsBind").children.length);
		
	}
	
	//BEGIN HEADER HIDING FUNCTION
	$(".headerHideShow").hide();
	$(".headerBoxCenter").css("margin", "0");
	$(".headerBottom").css("height", "50px");
	$(".headerBottom").css("padding-bottom", "11px");
	$(".headerBottom").css("padding-top", "4px");
	$(".headerBoxCenter").css("width", "200px");
	$(".headerBoxCenter").css("margin-top", "13px");
	$(".headerHideShowContent").css("display", "block");
	$(".productSearchForm").css("height", "100%");
	$(".productSearchForm").css("margin-top", "18px");
	//END HEADER HIDING FUNCTION
	
	
	//PRODUCT IMAGE CLICK BLOCKER
	setTimeout(function(){$(".prodImageClickBlocker", $thisProduct).hide();}, 4000);
	
	//INTERNET EXPLORER WARNING MESSAGE
	if($('.headerIE8WarningCont').data('messageShown')){
	}
	else{
		$('.headerIE8WarningCont').data('messageShown',false);
	}
	if($('.headerIE8WarningCont').data('messageShown') === false)
	{
		$('.headerIE8WarningCont').anymessage({'message':'The browser you are using is out of date and cannot be used to view this web site properly. We recommend that you use IE9 or better, Firefox or Chrome.'});	
		$('.headerIE8WarningCont').data('messageShown',true).append();
	}
});
_app.u.bindTemplateEvent('productTemplate', 'depart.extension_thechessstore', function(event, $context, infoObj){
	//BEGIN HEADER SHOWING WHEN LEAVING THIS PAGE
	$(".headerHideShow").show();
	$(".headerBoxCenter").css("margin-right", "30px");
	$(".headerBottom").css("height", "150px");
	$(".headerBottom").css("padding", "15px");
	$(".headerBoxCenter").css("width", "250px");
	$(".headerBoxCenter").css("margin-top", "0px");
	$(".headerHideShowContent").css("display", "none");
	$(".productSearchForm").css("height", "22px");
	$(".productSearchForm").css("margin", "0");
});
	
					

function loadPage(id, successCallback, failCallback){
	console.log(id);
	dump(_app.ext.store_filter.vars.filterPageLoadQueue);
	var pageObj = _app.ext.store_filter.vars.filterPageLoadQueue[id];
	if(pageObj){
		$.getJSON(pageObj.jsonPath+"?_v="+(new Date()).getTime(), function(json){
			_app.ext.store_filter.filterData[pageObj.id] = json;
			if(typeof successCallback == 'function'){
				successCallback();
				}
			})
			.fail(function(){
				dump("FILTER DATA FOR PAGE: "+pageObj.id+" UNAVAILABLE AT PATH: "+pageObj.jsonPath);
				if(typeof failCallback == 'function'){
					failCallback();
					}
				});
		}
	else {
		if(typeof failCallback == 'function'){
			failCallback();
			}
		}
	};

function showPage(routeObj,parentID){
//					dump('START showPage'); dump(routeObj);
	// routeObj.params.templateid = routeObj.params.templateID || "filteredSearchTemplate";
//					dump(parentID);
	routeObj.params.dataset = $.extend(true, {}, $.grep(_app.ext.store_filter.filterData[parentID].pages,function(e,i){
		return e.id == routeObj.params.id;
	})[0]);
//					dump('routeObj.params.dataset');  dump(routeObj.params.dataset.optionList);
	
	var optStrs = routeObj.params.dataset.optionList;
	routeObj.params.dataset.options = routeObj.params.dataset.options || {};
	for(var i in optStrs){
//						dump('optStrs[i]'); dump(optStrs[i]);
		var o = optStrs[i];
		if(_app.ext.store_filter.vars.elasticFields[o]){
			routeObj.params.dataset.options[o] = $.extend(true, {}, _app.ext.store_filter.vars.elasticFields[o]);
			if(routeObj.searchParams && routeObj.searchParams[o]){
				var values = routeObj.searchParams[o].split('|');
				for(var i in routeObj.params.dataset.options[o].options){
					var option = routeObj.params.dataset.options[o].options[i];
					if($.inArray(option.v, values) >= 0){
						option.checked = "checked";
						}
					}
				}
			}
		else {
			dump("Unrecognized option "+o+" on filter page "+routeObj.params.id);
			}
		}
	routeObj.params.dataset.breadcrumb = [parentID,routeObj.params.id]	
	routeObj.params.pageType = 'static'
	// showContent('static',routeObj.params);
	_app.ext.quickstart.a.newShowContent(routeObj.value,routeObj.params);
	}


function showSubPage(routeObj,parentID){
	routeObj.params.templateid = routeObj.params.templateID || "filteredSearchTemplate";
					dump('START showSubPage'); dump(routeObj);
//					dump(parentID); dump(_app.ext.store_filter.filterData);
	var filterData = _app.ext.store_filter.filterData[parentID]; //gets the top level data
//					dump('filtterData after gets top level data'); dump(filterData); dump(routeObj.params.id);
	filterData = $.grep(filterData.pages,function(e,i){
		return e.id == routeObj.params.id;	//gets mid level data
	})[0];

//					dump(filterData);
	filterData = $.grep(filterData.pages,function(e,i){
		return e.id == routeObj.params.end;	//gets the lowest level data
	})[0];
	routeObj.params.dataset = $.extend(true, {}, filterData);	//deep copy to avoid pass by reference bugs
	
	var optStrs = routeObj.params.dataset.optionList;
	routeObj.params.dataset.options = routeObj.params.dataset.options || {};
	for(var i in optStrs){
//						dump('optStrs[i]'); dump(optStrs[i]);
		var o = optStrs[i];
		if(_app.ext.store_filter.vars.elasticFields[o]){
			routeObj.params.dataset.options[o] = $.extend(true, {}, _app.ext.store_filter.vars.elasticFields[o]);
			if(routeObj.searchParams && routeObj.searchParams[o]){
				var values = routeObj.searchParams[o].split('|');
				for(var i in routeObj.params.dataset.options[o].options){
					var option = routeObj.params.dataset.options[o].options[i];
					if($.inArray(option.v, values) >= 0){
						option.checked = "checked";
						}
					}
				}
			}
		else {
			dump("Unrecognized option "+o+" on filter page "+routeObj.params.id);
			}
		}
	routeObj.params.dataset.breadcrumb = [parentID,routeObj.params.id,routeObj.params.end]
	routeObj.params.id = routeObj.params.id + "-" + routeObj.params.end;
	routeObj.params.pageType = 'static';
	// showContent('static',routeObj.params);
	_app.ext.quickstart.a.newShowContent(routeObj.value,routeObj.params);
	}

_app.router.addAlias('subcat', function(routeObj) {
	_app.require(['extension_thechessstore','store_filter','store_search','store_routing','prodlist_infinite','store_prodlist', 'templates.html'], function(){
		var a = routeObj.pagefilter;
		var b = routeObj.params.id;
		routeObj.params.templateID = "splashPageTemplate";
		$.getJSON("filters/apparel/"+a+".json?_v="+(new Date()).getTime(), function(json){
			var dataset = $.extend(true, {}, $.grep(json.pages,function(e,i){
				return e.id == b;
			})[0]);
			dataset.breadcrumb = [routeObj.pagefilter,routeObj.params.id]
			// showContent('static',{'templateid':'splashPageTemplate','id':routeObj.params.id,'dataset':dataset});
			$.extend(true, routeObj.params, {'pageType':'static','templateid':routeObj.templateid,'id':json.id,'dataset':dataset});
			_app.ext.quickstart.a.newShowContent(routeObj.value,routeObj.params);
		})
		.fail(function() {
			dump('FILTER DATA FOR ' + a + 'SUBCAT COULD NOT BE LOADED.');
			_app.router.handleURIChange('/404');
		});
	});
});	

_app.router.addAlias('filter', function(routeObj){
	_app.require(['extension_thechessstore','store_filter','store_search','store_routing','prodlist_infinite','store_prodlist', 'templates.html'], function(){
//		dump('filter alias routeObj: '); dump(routeObj);
		//decides if filter JSON is in local var or if it needs to be retrieved
		var filterpage = routeObj.pagefilter;
		routeObj.params.templateID = "filteredSearchTemplate";
			if(_app.ext.store_filter.filterData[filterpage]){
//			dump('RUNNING showPage');
			showPage(routeObj,filterpage);
		}
		else {
			dump('RUNNING filter loadPage');
			loadPage(
				filterpage, 
				function(){showPage(routeObj,filterpage);}, 
				function(){_app.router.handleURIChange('/404');}
			);
		}
	});
});


_app.router.addAlias('subfilter', function(routeObj){
	_app.require(['extension_thechessstore','store_filter','store_search','store_routing','prodlist_infinite','store_prodlist', 'templates.html'], function(){
		//decides if filter JSON is in local var or if it needs to be retrieved
		dump('-------------------------subfilter Alias'); dump(routeObj);
		var filterpage = routeObj.pagefilter;
		routeObj.params.templateID = "filteredSearchTemplate";
		if(_app.ext.store_filter.filterData[filterpage]){
			showSubPage(routeObj,filterpage);
		}
		else {
			loadPage(
				filterpage, 
				function(){showSubPage(routeObj,filterpage);}, 
				function(){_app.router.handleURIChange('/404');}
			);
		}
	});
});

				//sends passed object of attribs as a showContent search
				_app.router.addAlias('promo', function(routeObj){
					_app.require(['extension_thechessstore','store_filter','store_search','store_routing','prodlist_infinite','store_prodlist', 'templates.html'], function(){
						var path = routeObj.params.PATH;
				//		dump('promo Alias'); dump(path);
						$.getJSON("filters/search/"+path+".json?_v="+(new Date()).getTime(), function(json){
							dump('content shown from json');
				//			dump('THE SEARCH JSON IS...'); dump(routeObj.params);
							routeObj.params.elasticsearch = json;
						//	showContent('search',	routeObj.params);
						//	_app.router.addAlias('search',		function(routeObj){_app.ext.quickstart.a.newShowContent(routeObj.value,	$.extend({'pageType':'search'}, routeObj.params));});
							_app.ext.quickstart.a.newShowContent(routeObj.value,	$.extend({'pageType':'search'}, routeObj.params));
						})
						.fail(function() {
							dump('FILTER DATA FOR ' + path + ' PROMO COULD NOT BE LOADED.');
							_app.router.handleURIChange('/404');
						}); 
					});
				});
//EXPERIMENTAL PROMO CATEGORY TO GIVE THE A MORE "CATEGORY" LIKE FEEL (TITLES, FACETS, ETC.)
//WILL NEED IT'S OWN SHOWPAGE FUNCTION TO ADD THE FACETS FROM THE "ONLY LEAF" STYLE PAGE IT IS.
//_app.router.addAlias('promo', function(routeObj){
//	_app.require(['extension_thechessstore','store_filter','store_search','store_routing','prodlist_infinite','store_prodlist', 'templates.html'], function(){
//		var route = routeObj.pagefilter;
//		routeObj.params.templateID = 'filteredSearchTemplate';
//		if(_app.ext.extension_thechessstore.vars[route]) {
//			var filterData = $.extend(true, {}, _app.ext.extension_thechessstore.vars[route]);
//			$.extend(true, routeObj.params, {'templateid':routeObj.templateid,'id':filterData.id,'dataset':filterData});
//			_app.ext.quickstart.a.newShowContent(routeObj.value,routeObj.params);
//		}
//		else {
//			$.getJSON("filters/search/"+route+".json?_v="+(new Date()).getTime(), function(json){
//			_app.ext.extension_thechessstore.vars[route] = json;
//				//Deep copy into the routeObj.params, and that becomes our new "infoObj"
//				//Need to pass through routeObj.params at this moment, as it is expected to become infoObj
//				//This may change later.
//				$.extend(true, routeObj.params, {'pageType':'static','templateid':routeObj.templateid,'id':json.id,'dataset':json});
//				_app.ext.quickstart.a.newShowContent(routeObj.value,routeObj.params);
//			})
//			.fail(function() {
//				dump('FILTER DATA FOR ' + route + ' PROMO COULD NOT BE LOADED.');
//			});
//		}
//	});
//});

_app.router.addAlias('root', function(routeObj){
	_app.require(['extension_thechessstore','store_filter','store_search','store_routing','prodlist_infinite','store_prodlist', 'templates.html'], function(){
		var route = routeObj.pagefilter;
		routeObj.params.templateID = 'splashPageRootTemplate';
		if(_app.ext.extension_thechessstore.vars[route]) {
			var filterData = $.extend(true, {}, _app.ext.extension_thechessstore.vars[route]);
			$.extend(true, routeObj.params, {'templateid':routeObj.templateid,'id':filterData.id,'dataset':filterData});
			_app.ext.quickstart.a.newShowContent(routeObj.value,routeObj.params);
		}
		else {
			$.getJSON("filters/apparel/"+route+".json?_v="+(new Date()).getTime(), function(json){
				json.breadcrumb = [json.id];
				_app.ext.extension_thechessstore.vars[route] = json;
				//Deep copy into the routeObj.params, and that becomes our new "infoObj"
				//Need to pass through routeObj.params at this moment, as it is expected to become infoObj
				//This may change later.
				$.extend(true, routeObj.params, {'pageType':'static','templateid':routeObj.templateid,'id':json.id,'dataset':json});
				_app.ext.quickstart.a.newShowContent(routeObj.value,routeObj.params);
			})
			.fail(function() {
				dump('FILTER DATA FOR ' + route + ' ROOT COULD NOT BE LOADED.');
			});
		}
	});
});

/*
function createPagesRootFilter(root){
	_app.router.appendHash({'type':'exact','route':'/'+root+'/','pagefilter':root,'callback':'root'});
	_app.router.appendHash({'type':'match','route':'/'+root+'/{{id}}/','pagefilter':root,'callback':'filter'});
	_app.couple('store_filter','pushFilterPage',{id:root,jsonPath:"filters/apparel/"+root+".json"});
	}
function createPagesSubcatSubfilter(root){
	_app.router.appendHash({'type':'exact','route':'/'+root+'/','pagefilter':root,'callback':'root'});
	_app.router.appendHash({'type':'match','route':'/'+root+'/{{id}}/','pagefilter':root,'callback':'subcat'});
	_app.router.appendHash({'type':'match','route':'/'+root+'/{{id}}/{{end}}/','pagefilter':root,'callback':'subfilter'});
	_app.couple('store_filter','pushFilterPage',{id:root,jsonPath:"filters/apparel/"+root+".json"});
	}
function createPagesPromoFilter(root) {
	_app.router.appendHash({'type':'exact','route':'/'+root+'/','pagefilter':root,'callback':'promo'});
}

createPagesPromoFilter('promo');

createPagesRootFilter('');

createPagesSubcatSubfilter('');	
*/
	
//SEARCH APPENDS
_app.router.appendHash({'type':'match','route':'/search/promo/{{PATH}}*','callback':'promo'});					
					
	
_app.u.bindTemplateEvent('filteredSearchTemplate', 'complete.filter',function(event, $context, infoObj){
	if(infoObj.deferred){
		$('form.filterList',$context).data('deferred', infoObj.deferred);
		}
	if(!$context.attr('data-filter-rendered')){
		var $form = $('form.filterListTemplate', $context);
		function submitForm(){
			if($form.attr('data-filter-base')){
				$form.trigger('submit');
				}
			else {
//				 dump('gotta wait');
				setTimeout(submitForm,100);
				}
			}
		setTimeout(submitForm,0);
		}
	});

_app.extend({
	"namespace" : "seo_robots",
	"filename" : "extensions/_robots.js"
	});
	
_app.extend({
	"namespace" : "store_prodlist",
	"filename" : "extensions/store_prodlist.js"
	});
	
_app.extend({
	"namespace" : "prodlist_infinite",
	"filename" : "extensions/prodlist_infinite.js"
	});
	
_app.extend({
	"namespace" : "store_navcats",
	"filename" : "extensions/store_navcats.js"
	});
	
_app.couple('quickstart','addPageHandler',{
	"pageType" : "homepage",
	"require" : ['store_navcats','templates.html','store_routing'],
	"handler" : function($container, infoObj, require){
		infoObj.deferred = $.Deferred();
		infoObj.defPipeline.addDeferred(infoObj.deferred);
		dump('homepage handler');
		infoObj.navcat = zGlobals.appSettings.rootcat;
		_app.require(require,function(){
			infoObj.templateID = 'homepageTemplate';
			_app.ext.store_navcats.u.showPage($container, infoObj);
			});
		}
	});
	
_app.couple('quickstart','addPageHandler',{
	"pageType" : "category",
	"require" : ['store_navcats','store_prodlist','prodlist_infinite','templates.html','store_routing','extension_thechessstore','store_filter','store_search'],
	"handler" : function($container, infoObj, require){
		infoObj.deferred = $.Deferred();
		infoObj.defPipeline.addDeferred(infoObj.deferred);
		if(infoObj.navcat.charAt(0) != '.'){
			infoObj.navcat = '.'+infoObj.navcat
			}
		if(_app.ext.quickstart.vars.session.recentCategories[0] != infoObj.navcat)	{
			_app.ext.quickstart.vars.session.recentCategories.unshift(infoObj.navcat);
			}
		_app.require(require,function(){
			if(infoObj.templateID){}
			else if(infoObj.templateID = _app.ext.extension_thechessstore.u.fetchTemplateForPage(infoObj.navcat)){dump("Alternate template used : "+ infoObj.templateID);}
			else{infoObj.templateID = 'categoryTemplate';}
			
			//currently this is expected to be resolved by the prodlist_infinite tlc format.  Probably a bad idea.
			infoObj.prodRenderedDeferred = $.Deferred();
			infoObj.defPipeline.addDeferred(infoObj.prodRenderedDeferred);

			_app.ext.store_navcats.u.showPage($container, infoObj);
			});
						
		}
	});
	
_app.extend({
	"namespace" : "store_search",
	"filename" : "extensions/store_search.js"
	});
_app.couple('store_search','addUniversalFilter',{
	'filter' : {"has_child":{"type":"sku","query":{"range":{"available":{"gte":1}}}}}
	});
_app.couple('store_search','addUniversalFilter',{
	'filter' : {"not":{"term":{"tags":"IS_DISCONTINUED"}}}
	});
_app.couple('store_search','addUniversalFilter',{
 	'filter' : {'not':{'term':{'remove_from_elastic':'1'}}}
 	});

				
_app.couple('quickstart','addPageHandler',{
	"pageType" : "search",
	"require" : ['store_search','templates.html','store_routing'],
	"handler" : function($container, infoObj, require){
		infoObj.deferred = $.Deferred();
		infoObj.defPipeline.addDeferred(infoObj.deferred);
		_app.require(require,function(){
			_app.ext.store_search.u.showSearch($container, infoObj);
			});
						
		}
	});
	
_app.extend({
	"namespace" : "store_product",
	"filename" : "extensions/store_product.js"
	});
_app.extend({
	"namespace" : "magictoolbox_mzp",
	"filename" : "extensions/partner_magictoolbox_mzp.js"
	});	
_app.extend({
	"namespace" : "store_crm",
	"filename" : "extensions/store_crm.js"
	});
	
_app.couple('quickstart','addPageHandler',{
	"pageType" : "product",
	"require" : ['store_product','store_navcats', 'store_routing', 'store_search', 'templates.html', 'store_prodlist','magictoolbox_mzp','store_crm'],
	"handler" : function($container, infoObj, require){
		infoObj.deferred = $.Deferred();
		infoObj.defPipeline.addDeferred(infoObj.deferred);
		if($.inArray(infoObj.pid,_app.ext.quickstart.vars.session.recentlyViewedItems) < 0)	{
			_app.ext.quickstart.vars.session.recentlyViewedItems.unshift(infoObj.pid);
			}
		else	{
			_app.ext.quickstart.vars.session.recentlyViewedItems.splice(0, 0, _app.ext.quickstart.vars.session.recentlyViewedItems.splice($.inArray(infoObj.pid, _app.ext.quickstart.vars.session.recentlyViewedItems), 1)[0]);
			}
		//IMPORTANT: requiring every extension needed in order to render the page, including TLC formats in the template
		_app.require(require, function(){
			infoObj.templateID = 'productTemplate';
			_app.ext.store_product.u.showProd($container, infoObj);
			});
		}
	});
	
// _app.extend({
	// "namespace" : "partner_addthis",
	// "filename" : "extensions/partner_addthis.js"
	// });
// _app.u.bindTemplateEvent('productTemplate', 'complete.test', function(event, $context, infoObj){
	// var $toolbox = $('.socialLinks', $context);
	// if($toolbox.hasClass('addThisRendered')){
		// //Already rendered, don't do it again.
		// }
	// else {
		// $toolbox.addClass('addThisRendered').append(
				// '<div class="addthis_toolbox addthis_default_style addthis_32x32_style">'
			// +		'<a class="addthis_button_preferred_1"></a>'
			// +		'<a class="addthis_button_preferred_2"></a>'
			// +		'<a class="addthis_button_preferred_3"></a>'
			// +		'<a class="addthis_button_preferred_4"></a>'
			// +		'<a class="addthis_button_preferred_5"></a>'
			// +		'<a class="addthis_button_preferred_6"></a>'
			// +		'<a class="addthis_button_preferred_7"></a>'
			// +		'<a class="addthis_button_preferred_8add"></a>'
			// +		'<a class="addthis_button_compact"></a>'
			// +	'</div>');
		
		// _app.ext.partner_addthis.u.toolbox($toolbox, infoObj);
		// }
	// });
	
	_app.u.bindTemplateEvent(function(){return true;},'depart.dismissDrop',function(event,$context,infoObj){
		//_app.ext.extension_thechessstore.u.dismissAllDrop();
	});
	
	
//_app.rq.push(['script',0,'lightbox/js/lightbox-2.6.min.js']); this runs in index apptimized.

_app.model.getGrammar("pegjs");


//Any code that needs to be executed after the app init has occured can go here.
//will pass in the page info object. (pageType, templateID, pid/navcat/show and more)
_app.u.appInitComplete = function()	{
//	_app.u.dump("Executing _appIsLoaded code...");
	
	_app.ext.order_create.checkoutCompletes.push(function(vars,$checkout){
		dump(" -> begin checkoutCOmpletes code: "); dump(vars);
		
		var cartContentsAsLinks = encodeURIComponent(_app.ext.cco.u.cartContentsAsLinks(_app.data[vars.datapointer].order));
	
		
//append this to 
		$("[data-app-role='thirdPartyContainer']",$checkout).append("<h2>What next?</h2><div class='ocm ocmFacebookComment pointer zlink marginBottom checkoutSprite  '></div><div class='ocm ocmTwitterComment pointer zlink marginBottom checkoutSprit ' ></div><div class='ocm ocmContinue pointer zlink marginBottom checkoutSprite'></div>");
		$('.ocmTwitterComment',$checkout).click(function(){
			window.open('http://twitter.com/home?status='+cartContentsAsLinks,'twitter');
			window[_app.vars.analyticsPointer]('send', 'event','Checkout','User Event','Tweeted about order');
			window[_app.vars.analyticsPointer]('send', 'event','Checkout','User Event','Tweeted about order');
			});
		//the fb code only works if an appID is set, so don't show banner if not present.				
		if(_app.u.thisNestedExists("zGlobals.thirdParty.facebook.appId") && typeof FB == 'object')	{
			$('.ocmFacebookComment',$checkout).click(function(){
				_app.ext.quickstart.thirdParty.fb.postToWall(cartContentsAsLinks);
				ga('send','event','Checkout','User Event','FB message about order');
				window[_app.vars.analyticsPointer]('send', 'event','Checkout','User Event','FB message about order');
				});
			}
		else	{$('.ocmFacebookComment').hide()}
		});
	
	//Cart Messaging Responses.
	_app.cmr.push(['chat.join',function(message){
		if(message.FROM == 'ADMIN')	{
			var $ui = _app.ext.quickstart.a.showBuyerCMUI();
			$("[data-app-role='messageInput']",$ui).show();
			$("[data-app-role='messageHistory']",$ui).append("<p class='chat_join'>"+message.FROM+" has joined the chat.<\/p>");
			$('.show4ActiveChat',$ui).show();
			$('.hide4ActiveChat',$ui).hide();
			}
		}]);

	_app.cmr.push(['goto',function(message,$context){
		var $history = $("[data-app-role='messageHistory']",$context);
		$P = $("<P>")
			.addClass('chat_post')
			.append("<span class='from'>"+message.FROM+"<\/span> has sent over a "+(message.vars.pageType || "")+" link for you within this store. <span class='lookLikeLink'>Click here<\/span> to view.")
			.on('click',function(){
				showContent(_app.ext.quickstart.u.whatAmIFor(message.vars),message.vars);
				});
		$history.append($P);
		$history.parent().scrollTop($history.height());
		}]);

	}





//this will trigger the content to load on app init. so if you push refresh, you don't get a blank page.
//it'll also handle the old 'meta' uri params.
//this will trigger the content to load on app init. so if you push refresh, you don't get a blank page.
//it'll also handle the old 'meta' uri params.
_app.router.appendInit({
	'type':'function',
	'route': function(v){
		return {'init':true} //returning anything but false triggers a match.
		},
	'callback':function(f,g){
		dump(" -> triggered callback for appendInit");
		g = g || {};
		var $existingPage = $('#mainContentArea [data-app-uri]');
		console.log($existingPage.length);
		if($existingPage.length /*&& $existingPage.attr('data-app-uri') == document.location.pathname*/){
			//We are a transplanted document, let's load accordingly.
			//re-attach template handlers
			var $renderedTemplate = $('[data-templateid]', $existingPage);
			var templateid = $renderedTemplate.attr('data-templateid');
			for(var i in _app.templateEvents){
				var event = _app.templateEvents[i];
				if(event.filterFunc(templateid)){
					dump("Attaching event");
					dump(event);
					$renderedTemplate.on(event.event, event.handler);
					}
				}
			//handleURIChange here will not change the page, but it will execute appropriate events
			_app.router.handleURIString($existingPage.attr('data-app-uri'), true, {"retrigger" : true});
			}
		else if (document.location.hash.indexOf("#!") == 0){
			var pathStr = document.location.hash.substr(2);
			var search = false;
			if(pathStr.indexOf('?') >= 0){
				var arr = pathStr.split('?');
				pathStr = arr[0];
				search = arr[1];
				}
			_app.router.handleURIChange("/"+pathStr, search, false, true);
			}
		else if(document.location.protocol == "file:"){
			_app.router.handleURIChange("/", document.location.search, document.location.hash, true);
			}
		else if (g.uriParams.marketplace){
			_app.router.handleURIString('/product/'+g.uriParams.product+'/', 'replace');
			window[_app.vars.analyticsPointer]('send','event','Arrival','Syndication','product '+g.uriParams.product);
			}
		else if(document.location.pathname)	{	
			_app.u.dump('triggering handleHash');
			_app.router.handleURIChange(document.location.pathname, document.location.search, document.location.hash, true);
			}
		else	{
			_app.router.handleURIChange("/", document.location.search, document.location.hash, true);
			_app.u.throwMessage(_app.u.successMsgObject("We're sorry, the page you requested could not be found!"));
			window[_app.vars.analyticsPointer]('send', 'event','init','404 event',document.location.href);
			}
		if(g.uriParams && g.uriParams.meta)	{
			_app.require('cco', function(){
				_app.ext.cco.calls.cartSet.init({'want/refer':g.uriParams.meta,'cartID':_app.model.fetchCartID()},{},'passive');
				});
			}
		if(g.uriParams && g.uriParams.meta_src)	{
			_app.require('cco',function(){
				_app.ext.cco.calls.cartSet.init({'want/refer_src':g.uriParams.meta_src,'cartID':_app.model.fetchCartID()},{},'passive');
				});
			}
		}
	});




})(myApp);
