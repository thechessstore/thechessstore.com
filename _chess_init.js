var app = app || {vars:{},u:{}}; //make sure app exists.
app.rq = app.rq || []; //ensure array is defined. rq = resource queue.




app.rq.push(['extension',0,'orderCreate','extensions/checkout/extension.js']);
app.rq.push(['extension',0,'cco','extensions/cart_checkout_order.js']);


app.rq.push(['extension',0,'store_prodlist','extensions/store_prodlist.js']);
app.rq.push(['extension',0,'store_navcats','extensions/store_navcats.js']);
app.rq.push(['extension',0,'store_search','extensions/store_search.js']);
app.rq.push(['extension',0,'store_product','extensions/store_product.js']);
app.rq.push(['extension',0,'store_cart','extensions/store_cart.js']);
app.rq.push(['extension',0,'store_crm','extensions/store_crm.js']);
app.rq.push(['extension',0,'myRIA','app-quickstart.js','startMyProgram']);

app.rq.push(['extension',0,'store_filter','extensions/_thechessstore.js']);
app.rq.push(['extension',0,'extension_thechessstore','extensions/extension_thechessstore.js','startExtension']);
app.rq.push(['extension',0,'google_remarketing','extensions/google_remarketing.js','startExtension']);

app.rq.push(['extension',0,'prodlist_infinite','extensions/prodlist_infinite.js']);
app.rq.push(['extension',0,'partner_addthis','extensions/partner_addthis.js']);
app.rq.push(['extension',1,'google_analytics','extensions/partner_google_analytics.js','startExtension']);
app.rq.push(['extension',1,'google_adwords','extensions/partner_google_adwords.js','startExtension']);
app.rq.push(['extension',1,'partner_linkconnector','extensions/partner_linkconnector.js','startExtension']);
//app.rq.push(['extension',1,'partner_pepperjam','extensions/partner_pepperjam.js','startExtension']);
//app.rq.push(['extension',1,'bonding_buysafe','extensions/bonding_buysafe.js','startExtension']);
//app.rq.push(['extension',1,'powerReviews','extensions/reviews_powerreviews.js','startExtension']);
app.rq.push(['extension',0,'magicToolBox_mzp','extensions/partner_magictoolbox_mzp.js','startExtension']);
//app.rq.push(['extension',0,'magicToolBox','extensions/imaging_magictoolbox.js','startExtension']); // (not working yet - ticket in to MTB)





app.rq.push(['script',0,(document.location.protocol == 'file:') ? app.vars.testURL+'jquery/config.js' : app.vars.baseURL+'jquery/config.js']); //The config.js is dynamically generated.
app.rq.push(['script',0,app.vars.baseURL+'model.js']); //'validator':function(){return (typeof zoovyModel == 'function') ? true : false;}}
app.rq.push(['script',0,app.vars.baseURL+'includes.js']); //','validator':function(){return (typeof handlePogs == 'function') ? true : false;}})
app.rq.push(['script',0,app.vars.baseURL+'controller.js']);

app.rq.push(['script',1,app.vars.baseURL+'resources/jquery.ui.jeditable.js']); //used for making text editable (customer address). non-essential. loaded late.
app.rq.push(['script',0,app.vars.baseURL+'resources/jquery.showloading-v1.0.jt.js']); //used for making text editable (customer address). non-essential. loaded late.
app.rq.push(['script',0,app.vars.baseURL+'resources/jquery.ui.anyplugins.js']); //in zero pass in case product page is first page.

app.rq.push(['script',0,app.vars.baseURL+'_DropDowns.js']);
app.rq.push(['script',0,app.vars.baseURL+'_jquery_cycle_plugin.js']);
app.rq.push(['script',0,app.vars.baseURL+'carouFredSel-6.1.0/jquery.carouFredSel-6.1.0-packed.js']);
app.rq.push(['script',0,app.vars.baseURL+'anyplugins.js']);




//add tabs to product data.
//tabs are handled this way because jquery UI tabs REALLY wants an id and this ensures unique id's between product
app.rq.push(['templateFunction','productTemplate','onCompletes',function(P) {
	var safePID = app.u.makeSafeHTMLId(P.pid); //can't use jqSelector because productTEmplate_pid still used makesafe. planned Q1-2013 update ###
	var $context = $(app.u.jqSelector('#',P.parentID));
	var $tabContainer = $( ".tabbedProductContent",$('#productTemplate_'+safePID));
		if($tabContainer.length)	{
			if($tabContainer.data("widget") == 'anytabs'){} //tabs have already been instantiated. no need to be redundant.
			else	{
				$tabContainer.anytabs();
				}
			}
		else	{} //couldn't find the tab to tabificate.
	}]);

//sample of an onDeparts. executed any time a user leaves this page/template type.
app.rq.push(['templateFunction','homepageTemplate','onDeparts',function(P) {app.u.dump("just left the homepage")}]);
	

//Will do an appPageGet for the description of each category.0
//requires a ul in the category template w/ data-app-role='subcategoryList' to be set.
// AND the list spec must contain a catDesc class where the description is to appear.
app.rq.push(['templateFunction','categoryTemplate','onCompletes',function(P) {
	var $catPage = $(app.u.jqSelector('#',P.parentID)),
	$catList = $("ul[data-app-role='subcategoryList']",$catPage); // don't use .categoryList  add a new, specific class.
	
	if($catList.children().length)	{
		$catList.children().each(function(){
			var $li = $(this);
			
			if($li.data('app-havesubcatdata'))	{} //already have data.
			else if($('.catDesc',$li).length)	{
				app.ext.store_navcats.calls.appPageGet.init({
					'PATH':$li.data('catsafeid'),
					'@get':['description']
					},
					{'callback': function(rd){					//if there are errors, leave them alone... for now.
					$li.data('app-havesubcatdata',true);
					if(app.data[rd.datapointer] && app.data[rd.datapointer]['%page'])	{
						$('.catDesc',$li).append(app.data[rd.datapointer]['%page'].description);
						}
					}
					},'mutable')
				}
			else	{
				app.u.dump(" -> is NOT retrieving category description for "+$li.data('catsafeid'));
				//category description already obtained or template has no catDesc class (no description needed)
				}
			});
		app.model.dispatchThis('mutable');
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
	}]);






app.rq.push(['templateFunction','categoryTemplate','onCompletes',function(P) {
	
	var $context = $(app.u.jqSelector('#',P.parentID));
	//**COMMENT TO REMOVE AUTO-RESETTING WHEN LEAVING CAT PAGE FOR FILTERED SEARCH**
	
	app.ext.store_filter.vars.catPageID = $(app.u.jqSelector('#',P.parentID));  
	
	app.u.dump("BEGIN categoryTemplate onCompletes for filtering");
	if(app.ext.store_filter.filterMap[P.navcat])	{
		app.u.dump(" -> safe id DOES have a filter.");

		var $page = $(app.u.jqSelector('#',P.parentID));
		app.u.dump(" -> $page.length: "+$page.length);
		if($page.data('filterAdded'))	{} //filter is already added, don't add again.
		else	{
			$page.data('filterAdded',true)
			var $form = $("[name='"+app.ext.store_filter.filterMap[P.navcat].filter+"']",'#appFilters').clone().appendTo($('.filterContainer',$page));
			$form.on('submit.filterSearch',function(event){
				event.preventDefault()
				app.u.dump(" -> Filter form submitted.");
				app.ext.store_filter.a.execFilter($form,$page);
				});
	
			if(typeof app.ext.store_filter.filterMap[P.navcat].exec == 'function')	{
				app.ext.store_filter.filterMap[P.navcat].exec($form,P)
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
		
		
	}]);
	
	//**COMMENT TO REMOVE AUTO-RESETTING WHEN LEAVING CAT PAGE FOR FILTERED SEARCH**
	
	app.rq.push(['templateFunction','categoryTemplate','onDeparts',function(P) {
		if(app.ext.store_filter.vars.catPageID.empty && typeof app.ext.store_filter.vars.catPageID.empty === 'function'){
    		app.ext.store_filter.vars.catPageID.empty().remove();
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
		}]);
		
		
		
	app.rq.push(['templateFunction','category2ProdWideTemplate','onCompletes',function(P) {
		var $context = $(app.u.jqSelector('#',P.parentID));
		var $catPage = $(app.u.jqSelector('#',P.parentID)),
		$catList = $("ul[data-app-role='subcategoryList']",$catPage); // don't use .categoryList  add a new, specific class.
		
		if($catList.children().length)	{
			$catList.children().each(function(){
				var $li = $(this);
				
				if($li.data('app-havesubcatdata'))	{} //already have data.
				else if($('.catDesc',$li).length)	{
					app.ext.store_navcats.calls.appPageGet.init({
						'PATH':$li.data('catsafeid'),
						'@get':['description']
						},
						{'callback': function(rd){					//if there are errors, leave them alone... for now.
						$li.data('app-havesubcatdata',true);
						if(app.data[rd.datapointer] && app.data[rd.datapointer]['%page'])	{
							$('.catDesc',$li).append(app.data[rd.datapointer]['%page'].description);
							}
						}
						},'mutable')
					}
				else	{
					app.u.dump(" -> is NOT retrieving category description for "+$li.data('catsafeid'));
					//category description already obtained or template has no catDesc class (no description needed)
					}
				});
			app.model.dispatchThis('mutable');
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
		
		//**COMMENT TO REMOVE AUTO-RESETTING WHEN LEAVING CAT PAGE FOR FILTERED SEARCH**
		
		app.ext.store_filter.vars.catPageID = $(app.u.jqSelector('#',P.parentID));  
		
		app.u.dump("BEGIN categoryTemplate onCompletes for filtering");
		if(app.ext.store_filter.filterMap[P.navcat])	{
			app.u.dump(" -> safe id DOES have a filter.");
	
			var $page = $(app.u.jqSelector('#',P.parentID));
			app.u.dump(" -> $page.length: "+$page.length);
			if($page.data('filterAdded'))	{} //filter is already added, don't add again.
			else	{
				$page.data('filterAdded',true)
				var $form = $("[name='"+app.ext.store_filter.filterMap[P.navcat].filter+"']",'#appFilters').clone().appendTo($('.filterContainer',$page));
				$form.on('submit.filterSearch',function(event){
					event.preventDefault()
					app.u.dump(" -> Filter form submitted.");
					app.ext.store_filter.a.execFilter($form,$page);
					});
		
				if(typeof app.ext.store_filter.filterMap[P.navcat].exec == 'function')	{
					app.ext.store_filter.filterMap[P.navcat].exec($form,P)
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
	}]);
	
	
	app.rq.push(['templateFunction','category2ProdWideTemplate','onDeparts',function(P) {
		if(app.ext.store_filter.vars.catPageID.empty && typeof app.ext.store_filter.vars.catPageID.empty === 'function'){
    		app.ext.store_filter.vars.catPageID.empty().remove();
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
	}]);
	
	
	
app.rq.push(['templateFunction','categoryTemplate3PanelCat','onCompletes',function(P) {
	
	var $context = $(app.u.jqSelector('#',P.parentID));
	//**COMMENT TO REMOVE AUTO-RESETTING WHEN LEAVING CAT PAGE FOR FILTERED SEARCH**
	
	app.ext.store_filter.vars.catPageID = $(app.u.jqSelector('#',P.parentID));
	
	app.u.dump("BEGIN categoryTemplate3PanelCat onCompletes for filtering");
	if(app.ext.store_filter.filterMap[P.navcat])	{
		app.u.dump(" -> safe id DOES have a filter.");

		var $page = $(app.u.jqSelector('#',P.parentID));
		app.u.dump(" -> $page.length: "+$page.length);
		if($page.data('filterAdded'))	{} //filter is already added, don't add again.
		else	{
			$page.data('filterAdded',true)
			var $form = $("[name='"+app.ext.store_filter.filterMap[P.navcat].filter+"']",'#appFilters').clone().appendTo($('.filterContainer',$page));
			$form.on('submit.filterSearch',function(event){
				event.preventDefault()
				app.u.dump(" -> Filter form submitted.");
				app.ext.store_filter.a.execFilter($form,$page);
				});
	
			if(typeof app.ext.store_filter.filterMap[P.navcat].exec == 'function')	{
				app.ext.store_filter.filterMap[P.navcat].exec($form,P)
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
	}]);
	
	//**COMMENT TO REMOVE AUTO-RESETTING WHEN LEAVING CAT PAGE FOR FILTERED SEARCH**
	
	app.rq.push(['templateFunction','categoryTemplate3PanelCat','onDeparts',function(P) {
		
		app.ext.store_filter.vars.catPageID.empty().remove();
		
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
	}]);
	
	
	
	app.rq.push(['templateFunction','categoryTemplate4PanelCat','onCompletes',function(P) {
	
	var $context = $(app.u.jqSelector('#',P.parentID));
	//**COMMENT TO REMOVE AUTO-RESETTING WHEN LEAVING CAT PAGE FOR FILTERED SEARCH**
	
	app.ext.store_filter.vars.catPageID = $(app.u.jqSelector('#',P.parentID)); 
	
	
	app.u.dump("BEGIN categoryTemplate4PanelCat onCompletes for filtering");
	if(app.ext.store_filter.filterMap[P.navcat])	{
		app.u.dump(" -> safe id DOES have a filter.");

		var $page = $(app.u.jqSelector('#',P.parentID));
		app.u.dump(" -> $page.length: "+$page.length);
		if($page.data('filterAdded'))	{} //filter is already added, don't add again.
		else	{
			$page.data('filterAdded',true)
			var $form = $("[name='"+app.ext.store_filter.filterMap[P.navcat].filter+"']",'#appFilters').clone().appendTo($('.filterContainer',$page));
			$form.on('submit.filterSearch',function(event){
				event.preventDefault()
				app.u.dump(" -> Filter form submitted.");
				app.ext.store_filter.a.execFilter($form,$page);
				});
	
			if(typeof app.ext.store_filter.filterMap[P.navcat].exec == 'function')	{
				app.ext.store_filter.filterMap[P.navcat].exec($form,P)
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
		
		
	}]);
	
	//**COMMENT TO REMOVE AUTO-RESETTING WHEN LEAVING CAT PAGE FOR FILTERED SEARCH**
	
	app.rq.push(['templateFunction','categoryTemplate4PanelCat','onDeparts',function(P) {
		
		app.ext.store_filter.vars.catPageID.empty().remove();
		
			
	}]);
	
	
	
	


	
	

//sample of an onDeparts. executed any time a user leaves this page/template type.
app.rq.push(['templateFunction','homepageTemplate','onDeparts',function(P) {app.u.dump("just left the homepage")}]);

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
var homepageLoad = false;
app.rq.push(['templateFunction','homepageTemplate','onCompletes',function(P) 
	{
	if (homepageLoad == false)
	{
	//Home page slideshow
	$("#nav").html("");
	$('#featureImg') 
	.after('<div id="nav">') 
	.cycle({ 
    fx:     'fade',  
    timeout: 5000, 
    pager:  '#nav' 
	});
	
	//Carousel horizontal sliders
	var carousel1;
	function foo1(){ $(".homepageCat1").carouFredSel({
		width   : 980,
		height	: 300,
    	items   : 3,
		scroll: 1,
		auto : false,
    prev : "#caroPrev1",
    next : "#caroNext1"
	});}
	carousel1 = foo1;
	setTimeout(carousel1, 2000);
	
	
	//$("#caroNext1").delay(1500).click();
	//$("#caroPrev1").click();
	
	var carousel2;
	function foo2(){ $(".homepageCat2").carouFredSel({
		width   : 980,
		height	: 300,
    	items   : 3,
		scroll: 1,
		auto : false,
    prev : "#caroPrev2",
    next : "#caroNext2"
	});}
	carousel2 = foo2;
	setTimeout(carousel2, 2000);
	
	var carousel3;
	function foo3(){
	$(".homepageCat3").carouFredSel({
		width   : 980,
		height	: 300,
    	items   : 3,
		scroll: 1,
		auto : false,
    prev : "#caroPrev3",
    next : "#caroNext3"
	});}
	carousel3 = foo3;
	setTimeout(carousel3, 2000);
	
	var carousel4;
	function foo4(){
	$(".homepageCat4").carouFredSel({
		width   : 980,
		height	: 300,
    	items   : 3,
		scroll: 1,
		auto : false,
    prev : "#caroPrev4",
    next : "#caroNext4"
	});}
	carousel4 = foo4;
	setTimeout(carousel4, 2000);
	
	//$myselection.addClass('noScriptReExecute');
	homepageLoad = true;
	app.u.dump("Homepage functions loaded");
	}
	
}]);

var categoryPageLoad = false;
app.rq.push(['templateFunction','categoryTemplate','onCompletes',function(P) {
	
	if(!$(this).hasClass('noScriptReExecute'))
	{
	var altDDUpDown = false;
	$(".sidebarShopByCat").hide();
 	$(".sidebarShopByCatButton").click(function(){
	  if(altDDUpDown == true)
	  {
      	$(".sidebarShopByCat").hide();
		$(".sidebarShopByCatIcon").html("&#9658;").text();
		altDDUpDown = false;
	  }
	  else if(altDDUpDown == false)
	  {
		  $(".sidebarShopByCat").show();
		  $(".sidebarShopByCatIcon").html("&#9660;").text();
		  altDDUpDown = true;
	  }	
  });
  
  	var altDDUpDown2 = false;
	$(".sidebarSpecDept").hide();
 	$(".sidebarSpecDeptButton").click(function(){
	  if(altDDUpDown2 == true)
	  {
      	$(".sidebarSpecDept").hide();
		$(".sidebarSpecDeptIcon").html("&#9658;").text();
		altDDUpDown2 = false;
	  }
	  else if(altDDUpDown2 == false)
	  {
		  $(".sidebarSpecDept").show();
		  $(".sidebarSpecDeptIcon").html("&#9660;").text();
		  altDDUpDown2 = true;
	  }	
  });
  
  	var altDDUpDown3 = false;
	$(".sidebarShopByBrand").hide();
 	$(".sidebarShopByBrandButton").click(function(){
	  if(altDDUpDown3 == true)
	  {
      	$(".sidebarShopByBrand").hide();
		$(".sidebarShopByBrandIcon").html("&#9658;").text();
		altDDUpDown3 = false;
	  }
	  else if(altDDUpDown3 == false)
	  {
		  $(".sidebarShopByBrand").show();
		  $(".sidebarShopByBrandIcon").html("&#9660;").text();
		  altDDUpDown3 = true;
	  }	
  });
  
  	var altDDUpDown4 = false;
	$(".sidebarTeachAndLearn").hide();
  	$(".sidebarTeachAndLearnButton").click(function(){
	  if(altDDUpDown4 == true)
	  {
      	$(".sidebarTeachAndLearn").hide();
		$(".sidebarTeachAndLearnIcon").html("&#9658;").text();
		altDDUpDown4 = false;
	  }
	  else if(altDDUpDown4 == false)
	  {
		  $(".sidebarTeachAndLearn").show();
		  $(".sidebarTeachAndLearnIcon").html("&#9660;").text();
		  altDDUpDown4 = true;
	  }	
  });
  $(this).addClass('noScriptReExecute');
  app.u.dump("Sidebar functionality has ran");
  
	}
}]);

//Reviews function built to display a message if no reviews are present for this product. 
app.rq.push(['templateFunction','productTemplate','onCompletes',function(P) 
{
	var $thisProduct = $('#productTemplate_'+app.u.makeSafeHTMLId(P.pid));
	app.u.dump("Begin review message displaying function");
	if($(".reviewsBind", $thisProduct).children().length === 0){
		app.u.dump("No reviews. Running existing message check");
		if(($(".reviewsCont", $thisProduct).length === 0) || ($(".reviewsCont", $thisProduct).length === null)){
		  app.u.dump("No message exists. Display message");
		  $(app.ext.extension_thechessstore.vars.reviewSelector, '#productTemplate_'+app.u.makeSafeHTMLId(P.pid)).append(
		  '<p style="text-align:center;" class="reviewsCont">'
		  + 'Be the First to Review This Product!'
		  + '</p>');
		  //var p = document.getElementsByClassName("reviewsCont");
		  //p.reviewsCont += '#productTemplate_'+app.u.makeSafeHTMLId(P.pid);
		  app.u.dump("Review message displaying for : " + '#productTemplate_'+app.u.makeSafeHTMLId(P.pid));
		}
		else{
			app.u.dump("Message exists. Doing nothing");
		}


		/*var noReviews = document.createElement("p");
		var noReviewsMessage = document.createTextNode("Be the First to Review This Product!");
		noReviews.appendChild(noreviewsMessage);
		var findReviewSec = document.getElementsByClassName("reviewsBind");
		document.body.insertBefore(noReviews, findReviewSec);*/
	}
	else
	{
		app.u.dump("Reviews exist. function aborted. Reviews length amount: " + $(".reviewsBind").children.length);
		
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
	var $context = $(app.u.jqSelector('#',P.parentID));
	setTimeout(function(){$(".prodImageClickBlocker", $context).hide();}, 5000);
	
}]);


app.rq.push(['templateFunction','productTemplate','onDeparts',function(P) 
{
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
}]);

app.rq.push(['templateFunction','companyTemplate','onCompletes',function(P) {
	  $('.contactChat div').empty();
	  $('.contactChat div').html('<div id="ciLKQX" style="z-index:100;position:absolute"></div><div id="scLKQX" style="display:inline"></div><div id="sdLKQX" style="display:none"></div><script type="text/javascript">var seLKQX=document.createElement("script");seLKQX.type="text/javascript";var seLKQXs=(location.protocol.indexOf("https")==0?"https":"http")+"://image.providesupport.com/js/1i767mafw092k12e0iz16ztfbo/safe-standard.js?ps_h=LKQX&ps_t="+new Date().getTime();setTimeout("seLKQX.src=seLKQXs;document.getElementById(\'sdLKQX\').appendChild(seLKQX)",1)</script><noscript><div style="display:inline"><a href="http://www.providesupport.com?messenger=1i767mafw092k12e0iz16ztfbo">Live Chat</a></div></noscript>');
	  app.u.dump("contactChat div appended successfully");
}]);


app.rq.push(['templateFunction','cartTemplate','onCompletes',function(P) {
	var $context = $(app.u.jqSelector('#',P.parentID));
	app.ext.cco.calls.appCheckoutDestinations.init({"callback" : function(rd){
		if(app.model.responseHasErrors(rd)){
			app.u.throwMessage(rd);
			}
		else {
			//app.u.dump("here");
			var $selectList = $('.countrySelectListContainer',$context);
			//app.u.dump($selectList);
			$selectList.anycontent({"datapointer":rd.datapointer, "templateID" : "countryListTemplate"});
			}
	}},'immutable');
	app.model.dispatchThis('immutable');
}]);


	


//group any third party files together (regardless of pass) to make troubleshooting easier.
app.rq.push(['script',0,(document.location.protocol == 'https:' ? 'https:' : 'http:')+'//ajax.googleapis.com/ajax/libs/jqueryui/1.9.0/jquery-ui.js']);


/*
This function is overwritten once the controller is instantiated. 
Having a placeholder allows us to always reference the same messaging function, but not impede load time with a bulky error function.
*/
app.u.throwMessage = function(m)	{
	alert(m); 
	}

app.u.howManyPassZeroResourcesAreLoaded = function(debug)	{
	var L = app.vars.rq.length;
	var r = 0; //what is returned. total # of scripts that have finished loading.
	for(var i = 0; i < L; i++)	{
		if(app.vars.rq[i][app.vars.rq[i].length - 1] === true)	{
			r++;
			}
		if(debug)	{app.u.dump(" -> "+i+": "+app.vars.rq[i][2]+": "+app.vars.rq[i][app.vars.rq[i].length -1]);}
		}
	return r;
	}


//gets executed once controller.js is loaded.
//check dependencies and make sure all other .js files are done, then init controller.
//function will get re-executed if not all the scripts in app.vars.scripts pass 1 are done loading.
//the 'attempts' var is incremented each time the function is executed.

app.u.initMVC = function(attempts){
//	app.u.dump("app.u.initMVC activated ["+attempts+"]");
	var includesAreDone = true,
	percentPerInclude = (100 / app.vars.rq.length),   //what percentage of completion a single include represents (if 10 includes, each is 10%).
	resourcesLoaded = app.u.howManyPassZeroResourcesAreLoaded(),
	percentComplete = Math.round(resourcesLoaded * percentPerInclude); //used to sum how many includes have successfully loaded.

//make sure precentage is never over 100
	if(percentComplete > 100 )	{
		percentComplete = 100;
		}

	$('#appPreViewProgressBar','#appPreView').val(percentComplete);
	$('#appPreViewProgressText','#appPreView').empty().append(percentComplete+"% Complete");

	if(resourcesLoaded == app.vars.rq.length)	{
		var clickToLoad = false;
		if(clickToLoad){
			$('#loader').fadeOut(1000);
			$('#clickToLoad').delay(1000).fadeIn(1000).click(function() {
				app.u.loadApp();
			});
		} else {
			app.u.loadApp();
			}
		}
	else if(attempts > 250)	{
		app.u.dump("WARNING! something went wrong in init.js");
		//this is 10 seconds of trying. something isn't going well.
		$('#appPreView').empty().append("<h2>Uh Oh. Something seems to have gone wrong. </h2><p>Several attempts were made to load the store but some necessary files were not found or could not load. We apologize for the inconvenience. Please try 'refresh' and see if that helps.<br><b>If the error persists, please contact the site administrator</b><br> - dev: see console.</p>");
		app.u.howManyPassZeroResourcesAreLoaded(true);
		}
	else	{
		setTimeout("app.u.initMVC("+(attempts+1)+")",250);
		}

	}

app.u.loadApp = function() {
//instantiate controller. handles all logic and communication between model and view.
//passing in app will extend app so all previously declared functions will exist in addition to all the built in functions.
//tmp is a throw away variable. app is what should be used as is referenced within the mvc.
	app.vars.rq = null; //to get here, all these resources have been loaded. nuke record to keep DOM clean and avoid any duplication.
	var tmp = new zController(app);
//instantiate wiki parser.
	myCreole = new Parse.Simple.Creole();
	}


//Any code that needs to be executed after the app init has occured can go here.
//will pass in the page info object. (pageType, templateID, pid/navcat/show and more)
app.u.appInitComplete = function(P)	{
	app.u.dump("Executing myAppIsLoaded code...");
	}




//don't execute script till both jquery AND the dom are ready.
$(document).ready(function(){
	app.u.handleRQ(0)
	});






