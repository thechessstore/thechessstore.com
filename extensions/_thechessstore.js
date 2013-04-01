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


var store_filter = function() {
	var r = {
		
	vars : {
		'templates' : []
		},

					////////////////////////////////////   CALLS    \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\		


//store_search contains the maintained elastic query search. use that.
	calls : {}, //calls
//key is safe id. value is name of the filter form.
	filterMap : {
		
			//****CHESS PIECES****
			//**Wood Chess Pieces**
			".00010-wood-chess-sets":{
			"filter": "chessPiecesForm",
			"exec" : function($form,infoObj){app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			".00010-wood-chess-sets.10-german-knight-staunton-chess-sets":{
			"filter": "chessPiecesForm",
			"exec" : function($form,infoObj){app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			".00010-wood-chess-sets.12-french-lardy-staunton-chess-sets":{
			"filter": "chessPiecesForm",
			"exec" : function($form,infoObj){app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			".00010-wood-chess-sets.16-kings-guard-staunton-chess-chess":{
			"filter": "chessPiecesForm",
			"exec" : function($form,infoObj){app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			".00010-wood-chess-sets.18-parker-staunton-chess-sets":{
			"filter": "chessPiecesForm",
			"exec" : function($form,infoObj){app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			".00010-wood-chess-sets.20-yugoslavia-staunton-chess-sets":{
			"filter": "chessPiecesForm",
			"exec" : function($form,infoObj){app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			".00010-wood-chess-sets.22-deluxe-old-club-staunton-chess-sets":{
			"filter": "chessPiecesForm",
			"exec" : function($form,infoObj){app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			".00010-wood-chess-sets.24-british-staunton-chess-sets":{
			"filter": "chessPiecesForm",
			"exec" : function($form,infoObj){app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			".00010-wood-chess-sets.26-fierce-knight-staunton-chess-sets":{
			"filter": "chessPiecesForm",
			"exec" : function($form,infoObj){app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			".00010-wood-chess-sets.28-royal-staunton-chess-sets":{
			"filter": "chessPiecesForm",
			"exec" : function($form,infoObj){app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			".00010-wood-chess-sets.30-new-exclusive-staunton-chess-sets":{
			"filter": "chessPiecesForm",
			"exec" : function($form,infoObj){app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			".00010-wood-chess-sets.32-wingfield-staunton-chess-sets":{
			"filter": "chessPiecesForm",
			"exec" : function($form,infoObj){app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			".00010-wood-chess-sets.34-players-staunton-chess-sets":{
			"filter": "chessPiecesForm",
			"exec" : function($form,infoObj){app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			".00010-wood-chess-sets.36-saint-george-antique-reproduction-chess-set":{
			"filter": "chessPiecesForm",
			"exec" : function($form,infoObj){app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			".00010-wood-chess-sets.38-grande-staunton-chess-sets":{
			"filter": "chessPiecesForm",
			"exec" : function($form,infoObj){app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			".00010-wood-chess-sets.40-edinburgh-upright-antique-reproduction-chess-sets":{
			"filter": "chessPiecesForm",
			"exec" : function($form,infoObj){app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			".00010-wood-chess-sets.44-calvert-antique-reproduction-chess-set":{
			"filter": "chessPiecesForm",
			"exec" : function($form,infoObj){app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			".00010-wood-chess-sets.46-khans-stallion-staunton-chess-set":{
			"filter": "chessPiecesForm",
			"exec" : function($form,infoObj){app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			".00010-wood-chess-sets.48-columbian-knight-staunton-chess-sets":{
			"filter": "chessPiecesForm",
			"exec" : function($form,infoObj){app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			".00010-wood-chess-sets.50-bridled-stallion-staunton-chess-sets":{
			"filter": "chessPiecesForm",
			"exec" : function($form,infoObj){app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			".00010-wood-chess-sets.52-wellington-staunton-chess-sets":{
			"filter": "chessPiecesForm",
			"exec" : function($form,infoObj){app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			".00010-wood-chess-sets.54-hampshire-staunton-chess-sets":{
			"filter": "chessPiecesForm",
			"exec" : function($form,infoObj){app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			".00010-wood-chess-sets.56-saint-john-staunton-chess-sets":{
			"filter": "chessPiecesForm",
			"exec" : function($form,infoObj){app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			".00010-wood-chess-sets.58-gotham-staunton-chess-sets":{
			"filter": "chessPiecesForm",
			"exec" : function($form,infoObj){app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			".00010-wood-chess-sets.60-sultan-staunton-chess-sets":{
			"filter": "chessPiecesForm",
			"exec" : function($form,infoObj){app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			".00010-wood-chess-sets.62-cambridge-staunton-chess-sets":{
			"filter": "chessPiecesForm",
			"exec" : function($form,infoObj){app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			".00010-wood-chess-sets.64-alexander-staunton-chess-set":{
			"filter": "chessPiecesForm",
			"exec" : function($form,infoObj){app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			".00010-wood-chess-sets.66-kohinoor-staunton-chess-set":{
			"filter": "chessPiecesForm",
			"exec" : function($form,infoObj){app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			/*".00027-metal-chess-pieces":{
			"filter": "chessPiecesForm",
			"exec" : function($form,infoObj){app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			".00024-marble-onyx-chess-sets.marble-onyx-chess-pieces":{
			"filter": "chessPiecesForm",
			"exec" : function($form,infoObj){app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			".00020-plastic-chess-sets":{
			"filter": "chessPiecesForm",
			"exec" : function($form,infoObj){app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			".00029-theme-chess-pieces":{
			"filter": "chessPiecesForm",
			"exec" : function($form,infoObj){app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			".00055-unfinished-chess-sets":{
			"filter": "chessPiecesForm",
			"exec" : function($form,infoObj){app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			".00022-jaques-london-chess-sets":{
			"filter": "chessPiecesForm",
			"exec" : function($form,infoObj){app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			".00033-artisan-hand-carved-chess-sets":{
			"filter": "chessPiecesForm",
			"exec" : function($form,infoObj){app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			".000295-most-unique-chess-pieces":{
			"filter": "chessPiecesForm",
			"exec" : function($form,infoObj){app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},*/
		},

					////////////////////////////////////   CALLBACKS    \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\



	callbacks : {
//callbacks.init need to return either a true or a false, depending on whether or not the file will execute properly based on store account configuration. Use this for any config or dependencies that need to occur.
//the callback is auto-executed as part of the extensions loading process.
		init : {
			onSuccess : function()	{
//				app.u.dump('BEGIN app.ext.store_navcats.init.onSuccess ');
				var r = true; //return false if extension won't load for some reason (account config, dependencies, etc).
				return r;
				},
			onError : function()	{
//errors will get reported for this callback as part of the extensions loading.  This is here for extra error handling purposes.
				}
			}

		}, //callbacks


////////////////////////////////////   getFilterObj    \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


		getElasticFilter : {
			
			slider : function($fieldset){
				var r = false; //what is returned. Will be set to an object if valid.
				var $slider = $('.slider-range',$fieldset);
				if($slider.length > 0)	{
					r = {"range":{}}
//if data-min and/or data-max are not set, use the sliders min/max value, respectively.
					r.range[$fieldset.attr('data-elastic-key')] = {
						"from" : $slider.slider('values', 0 ) * 100,
						"to" : $slider.slider("values",1) * 100
						}
					}
				else	{
					app.u.dump("WARNING! could not detect .ui-slider class within fieldset for slider filter.");
					}
				return r;
				}, //slider
			
			hidden : function($fieldset){
				return app.ext.store_filter.u.buildElasticTerms($("input:hidden",$fieldset),$fieldset.attr('data-elastic-key'));
				},
			checkboxes : function($fieldset)	{
				return app.ext.store_filter.u.buildElasticTerms($(':checked',$fieldset),$fieldset.attr('data-elastic-key'));
				} //checkboxes
			
			}, //getFilterObj




////////////////////////////////////   Actions    \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


		a : {
			
			execFilter : function($form,$page){

app.u.dump("BEGIN store_filter.a.filter");
var $prodlist = $("[data-app-role='productList']",$page).first().empty();


$('.categoryList',$page).hide(); //hide any subcategory lists in the main area so customer can focus on results
$('.categoryText',$page).hide(); //hide any text blocks.

if(app.ext.store_filter.u.validateFilterProperties($form))	{
//	app.u.dump(" -> validated Filter Properties.")
	var query = {
		"mode":"elastic-native",
		"size":50,
		"filter" : app.ext.store_filter.u.buildElasticFilters($form)
		}//query
//	app.u.dump(" -> Query: "); app.u.dump(query);
	if(query.filter.and.length > 0)	{
		$prodlist.addClass('loadingBG');
		app.ext.store_search.calls.appPublicProductSearch.init(query,{'callback':function(rd){

			if(app.model.responseHasErrors(rd)){
				$page.anymessage({'message':rd});
				}
			else	{
				var L = app.data[rd.datapointer]['_count'];
				$prodlist.removeClass('loadingBG')
				if(L == 0)	{
					$page.anymessage({"message":"Your query returned zero results."});
					}
				else	{
					$prodlist.append(app.ext.store_search.u.getElasticResultsAsJQObject(rd));
					}
				}
			
			},'datapointer':'appPublicSearch|elasticFiltering','templateID':'productListTemplateResultsFilter'});
		app.model.dispatchThis();
		}
	else	{
		$page.anymessage({'message':"Please make some selections from the list of filters"});
		}
	}
else	{
	$page.anymessage({"message":"Uh Oh! It seems an error occured. Please try again or contact the site administator if error persists."});
	}
$('html, body').animate({scrollTop : 0},200); //new page content loading. scroll to top.

				
				}//filter
			
			}, //actions


////////////////////////////////////   UTIL    \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


		u : {
//pass in form as object.  This function will verify that each fieldset has the appropriate attributes.
//will also verify that each filterType has a getElasticFilter function.
			validateFilterProperties : function($form)	{
				var r = true, //what is returned. false if form doesn't validate.
				$fieldset, filterType; //recycled.

				$('fieldset',$form).each(function(index){
					$fieldset = $(this);
					filterType = $fieldset.attr('data-filtertype');
					if(!filterType)	{
						r = false;
						$form.anymessage({"message":"In store_filters.u.validateFilterProperties,  no data-filtertype set on fieldset. can't include as part of query. [index: "+index+"]",gMessage:true});
						}
					else if(typeof app.ext.store_filter.getElasticFilter[filterType] != 'function')	{
						r = false;
						$form.anymessage({"message":"WARNING! type ["+filterType+"] has no matching getElasticFilter function. [typoof: "+typeof app.ext.store_filter.getElasticFilter[filterType]+"]",gMessage:true});
						}
					else if(!$fieldset.attr('data-elastic-key'))	{
						r = false;
						$form.anymessage({"message":"WARNING! data-elastic-key not set for filter. [index: "+index+"]",gMessage:true});
						}
					else	{
						//catch.
						}
					});
				return r;
				},
			
			
			buildElasticFilters : function($form)	{

var filters = {
	"and" : [] //push on to this the values from each fieldset.
	}//query


$('fieldset',$form).each(function(){
	var $fieldset = $(this),
	filter = app.ext.store_filter.getElasticFilter[$fieldset.attr('data-filtertype')]($fieldset);
	if(filter)	{
		filters.and.push(filter);
		}
	});
//and requires at least 2 inputs, so add a match_all.
//if there are no filters, don't add it. the return is also used to determine if any filters are present
	if(filters.and.length == 1)	{
		filters.and.push({match_all:{}})
		}
return filters;				
				
				},

//pass in a jquery object or series of objects for form inputs (ex: $('input:hidden')) and a single term or a terms object will be returned.
//false is returned in nothing is checked/selected.
//can be used on a series of inputs, such as hidden or checkbox 
			buildElasticTerms : function($obj,attr)	{
				var r = false; //what is returned. will be term or terms object if valid.
				if($obj.length == 1)	{
					r = {term:{}};
					r.term[attr] = $obj.val().toLowerCase();
					}
				else if($obj.length > 1)	{
					r = {terms:{}};
					r.terms[attr] = new Array();
					$obj.each(function(){
						r.terms[attr].push($(this).val().toLowerCase());
						});
					}
				else	{
					//nothing is checked.
					}
				return r;
				},


			renderSlider : function($form, infoObj, props){
				$( ".slider-range" ).slider({
					range: true,
					min: props.MIN,
					max: props.MAX,
					values: [ props.MIN, props.MAX ],
					stop : function(){
						$form.submit();
						},
					slide: function( event, ui ) {
						$( ".sliderValue",$form ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
						}
					});
				$( ".sliderValue",$form ).val( "$" + $( ".slider-range" ).slider( "values", 0 ) + " - $" + $( ".slider-range" ).slider( "values", 1 ) );
				} //renderSlider

			} //u


		
		} //r object.
	return r;
	}