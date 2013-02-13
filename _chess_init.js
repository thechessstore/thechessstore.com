var app = app || {vars:{},u:{}}; //make sure app exists.
app.rq = app.rq || []; //ensure array is defined. rq = resource queue.




// app.rq.push(['extension',0,'convertSessionToOrder','extensions/checkout_passive/extension.js']);
app.rq.push(['extension',0,'convertSessionToOrder','extensions/checkout_nice/extension.js']);
app.rq.push(['extension',0,'store_checkout','extensions/store_checkout.js']);
app.rq.push(['extension',0,'store_prodlist','extensions/store_prodlist.js']);
app.rq.push(['extension',0,'store_navcats','extensions/store_navcats.js']);
app.rq.push(['extension',0,'store_search','extensions/store_search.js']);
app.rq.push(['extension',0,'store_product','extensions/store_product.js']);
app.rq.push(['extension',0,'store_cart','extensions/store_cart.js']);
app.rq.push(['extension',0,'store_crm','extensions/store_crm.js']);
app.rq.push(['extension',0,'myRIA','quickstart.js','startMyProgram']);

app.rq.push(['extension',1,'analytics_google','extensions/analytics_google.js','startExtension']);
//app.rq.push(['extension',1,'bonding_buysafe','extensions/bonding_buysafe.js','startExtension']);
//app.rq.push(['extension',1,'powerReviews','extensions/reviews_powerreviews.js','startExtension']);
//app.rq.push(['extension',0,'magicToolBox','extensions/imaging_magictoolbox.js','startExtension']); // (not working yet - ticket in to MTB)



//add tabs to product data.
app.rq.push(['templateFunction','productTemplate','onCompletes',function(P) {
	$( ".tabbedProductContent",$('#productTemplate_'+app.u.makeSafeHTMLId(P.pid))).tabs();
	}]);

app.rq.push(['script',0,(document.location.protocol == 'file:') ? app.vars.httpURL+'jquery/config.js' : app.vars.baseURL+'jquery/config.js']); //The config.js is dynamically generated.
app.rq.push(['script',0,app.vars.baseURL+'model.js']); //'validator':function(){return (typeof zoovyModel == 'function') ? true : false;}}
app.rq.push(['script',0,app.vars.baseURL+'includes.js']); //','validator':function(){return (typeof handlePogs == 'function') ? true : false;}})
app.rq.push(['script',1,app.vars.baseURL+'jeditable.js']); //used for making text editable (customer address). non-essential. loaded late.
app.rq.push(['script',0,app.vars.baseURL+'controller.js']);

app.rq.push(['script',0,app.vars.baseURL+'_DropDowns.js'])
app.rq.push(['script',0,app.vars.baseURL+'_jquery_cycle_plugin.js']);
app.rq.push(['script',0,app.vars.baseURL+'carouFredSel-6.1.0/jquery.carouFredSel-6.1.0-packed.js']);

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
    	items   : 3,
		scroll: 1,
		auto : false,
    prev : "#caroPrev1",
    next : "#caroNext1"
	});}
	carousel1 = foo1;
	setTimeout(carousel1, 1000);
	
	
	//$("#caroNext1").delay(1500).click();
	//$("#caroPrev1").click();
	
	var carousel2;
	function foo2(){ $(".homepageCat2").carouFredSel({
		width   : 980,
    	items   : 3,
		scroll: 1,
		auto : false,
    prev : "#caroPrev2",
    next : "#caroNext2"
	});}
	carousel2 = foo2;
	setTimeout(carousel2, 1000);
	
	var carousel3;
	function foo3(){
	$(".homepageCat3").carouFredSel({
		width   : 980,
    	items   : 3,
		scroll: 1,
		auto : false,
    prev : "#caroPrev3",
    next : "#caroNext3"
	});}
	carousel3 = foo3;
	setTimeout(carousel3, 1000);
	
	var carousel4;
	function foo4(){
	$(".homepageCat4").carouFredSel({
		width   : 980,
    	items   : 3,
		scroll: 1,
		auto : false,
    prev : "#caroPrev4",
    next : "#caroNext4"
	});}
	carousel4 = foo4;
	setTimeout(carousel4, 1000);
	
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


//**Testing function for solving our horizontal slider not showing on refresh bug**
/**function linkToSpecialtyStore(url,type) {
 if(type == 'vstore') {window.open(url+'c='+app.sessionId+'/');}
 else if(type == 'app') {window.open(url+'?sessionId='+app.sessionId+'/');}
 else {
  console.warn("unknown 'type' for linkToSpecialtStore");
  }
 }**/
	


//group any third party files together (regardless of pass) to make troubleshooting easier.
app.rq.push(['script',0,(document.location.protocol == 'https:' ? 'https:' : 'http:')+'//ajax.googleapis.com/ajax/libs/jqueryui/1.9.0/jquery-ui.js']);
app.rq.push(['script',0,(document.location.protocol == 'https:' ? 'https:' : 'http:')+'//s7.addthis.com/js/300/addthis_widget.js#pubid=xa-511be29f5bf737e5']);


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
	var includesAreDone = true;

//what percentage of completion a single include represents (if 10 includes, each is 10%).
	var percentPerInclude = Math.round((100 / app.vars.rq.length));
	var resourcesLoaded = app.u.howManyPassZeroResourcesAreLoaded();
	var percentComplete = resourcesLoaded * percentPerInclude; //used to sum how many includes have successfully loaded.
	//make sure precentage is never over 100
	if(percentComplete > 100 )	{
		percentComplete = 100;
		}
	
	$('#appPreViewProgressBar').val(percentComplete);
	$('#appPreViewProgressText').empty().append(percentComplete+"% Complete");
	
	//**Experimental Loading fix code**
	/*if (percentComplete <= 100){
		$('#appPreViewProgressText').empty().append(percentComplete+"% Complete");
	}
	else{
		$('#appPreViewProgressText').empty().append(100+"% Complete");
	} */

	if(resourcesLoaded == app.vars.rq.length)	{
		//instantiate controller. handles all logic and communication between model and view.
		//passing in app will extend app so all previously declared functions will exist in addition to all the built in functions.
		//tmp is a throw away variable. app is what should be used as is referenced within the mvc.
		app.vars.rq = null; //to get here, all these resources have been loaded. nuke record to keep DOM clean and avoid any duplication.
		var tmp = new zController(app);
		//instantiate wiki parser.
		myCreole = new Parse.Simple.Creole();
	}
	else if(attempts > 50)	{
		app.u.dump("WARNING! something went wrong in init.js");
		//this is 10 seconds of trying. something isn't going well.
		$('#appPreView').empty().append("<h2>Uh Oh. Something seems to have gone wrong. </h2><p>Several attempts were made to load the store but some necessary files were not found or could not load. We apologize for the inconvenience. Please try 'refresh' and see if that helps.<br><b>If the error persists, please contact the site administrator</b><br> - dev: see console.</p>");
		app.u.howManyPassZeroResourcesAreLoaded(true);
	}
	else	{
		setTimeout("app.u.initMVC("+(attempts+1)+")",250);
	}
};



//Any code that needs to be executed after the app init has occured can go here.
//will pass in the page info object. (pageType, templateID, pid/navcat/show and more)
app.u.appInitComplete = function(P)	{
	app.u.dump("Executing myAppIsLoaded code...");
};




//don't execute script till both jquery AND the dom are ready.
$(document).ready(function(){
	app.u.handleRQ(0);
});