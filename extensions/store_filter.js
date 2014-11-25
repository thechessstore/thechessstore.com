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


var store_filter = function(_app) {
	var r = {
		
	vars : {
		catPageID: "",
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
			"filter": "woodChessPiecesForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:5000});}
			},
			".00010-wood-chess-sets.10-german-knight-staunton-chess-sets":{
			"filter": "woodChessPiecesForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:5000});}
			},
			".00010-wood-chess-sets.12-french-lardy-staunton-chess-sets":{
			"filter": "woodChessPiecesForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:5000});}
			},
			".00010-wood-chess-sets.16-kings-guard-staunton-chess-chess":{
			"filter": "woodChessPiecesForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:5000});}
			},
			".00010-wood-chess-sets.18-parker-staunton-chess-sets":{
			"filter": "woodChessPiecesForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:5000});}
			},
			".00010-wood-chess-sets.20-yugoslavia-staunton-chess-sets":{
			"filter": "woodChessPiecesForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:5000});}
			},
			".00010-wood-chess-sets.22-deluxe-old-club-staunton-chess-sets":{
			"filter": "woodChessPiecesForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:5000});}
			},
			".00010-wood-chess-sets.24-british-staunton-chess-sets":{
			"filter": "woodChessPiecesForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:5000});}
			},
			".00010-wood-chess-sets.26-fierce-knight-staunton-chess-sets":{
			"filter": "woodChessPiecesForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:5000});}
			},
			".00010-wood-chess-sets.28-royal-staunton-chess-sets":{
			"filter": "woodChessPiecesForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:5000});}
			},
			".00010-wood-chess-sets.30-new-exclusive-staunton-chess-sets":{
			"filter": "woodChessPiecesForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:5000});}
			},
			".00010-wood-chess-sets.32-wingfield-staunton-chess-sets":{
			"filter": "woodChessPiecesForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:5000});}
			},
			".00010-wood-chess-sets.34-players-staunton-chess-sets":{
			"filter": "woodChessPiecesForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:5000});}
			},
			".00010-wood-chess-sets.36-saint-george-antique-reproduction-chess-set":{
			"filter": "woodChessPiecesForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:5000});}
			},
			".00010-wood-chess-sets.38-grande-staunton-chess-sets":{
			"filter": "woodChessPiecesForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:5000});}
			},
			".00010-wood-chess-sets.40-edinburgh-upright-antique-reproduction-chess-sets":{
			"filter": "woodChessPiecesForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:5000});}
			},
			".00010-wood-chess-sets.44-calvert-antique-reproduction-chess-set":{
			"filter": "woodChessPiecesForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:5000});}
			},
			".00010-wood-chess-sets.46-khans-stallion-staunton-chess-set":{
			"filter": "woodChessPiecesForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:5000});}
			},
			".00010-wood-chess-sets.48-columbian-knight-staunton-chess-sets":{
			"filter": "woodChessPiecesForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:5000});}
			},
			".00010-wood-chess-sets.50-bridled-stallion-staunton-chess-sets":{
			"filter": "woodChessPiecesForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:5000});}
			},
			".00010-wood-chess-sets.52-wellington-staunton-chess-sets":{
			"filter": "woodChessPiecesForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:5000});}
			},
			".00010-wood-chess-sets.54-hampshire-staunton-chess-sets":{
			"filter": "woodChessPiecesForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:5000});}
			},
			".00010-wood-chess-sets.56-saint-john-staunton-chess-sets":{
			"filter": "woodChessPiecesForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:5000});}
			},
			".00010-wood-chess-sets.58-gotham-staunton-chess-sets":{
			"filter": "woodChessPiecesForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:5000});}
			},
			".00010-wood-chess-sets.60-sultan-staunton-chess-sets":{
			"filter": "woodChessPiecesForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:5000});}
			},
			".00010-wood-chess-sets.62-cambridge-staunton-chess-sets":{
			"filter": "woodChessPiecesForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:5000});}
			},
			".00010-wood-chess-sets.64-alexander-staunton-chess-set":{
			"filter": "woodChessPiecesForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:5000});}
			},
			".00010-wood-chess-sets.66-kohinoor-staunton-chess-set":{
			"filter": "woodChessPiecesForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:5000});}
			},
			
			//**Metal Chess Pieces**
			".00027-metal-chess-pieces":{
			"filter": "metalChessPiecesForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1500});}
			},
			".00027-metal-chess-pieces.2-staunton-metal-chess-pieces":{
			"filter": "metalChessPiecesForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1500});}
			},
			".00027-metal-chess-pieces.4-theme-metal-chess-pieces":{
			"filter": "metalChessPiecesForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1500});}
			},
			
			/**Marble Chess Pieces**
			".00024-marble-onyx-chess-sets.marble-onyx-chess-pieces":{
			"filter": "marbleChessPiecesForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},*/
			
			//**Plastic Chess Pieces**
			".00020-plastic-chess-sets":{
			"filter": "plasticChessPiecesForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:100});}
			},
			".00020-plastic-chess-sets.00010-master-series-plastic-chess-sets":{
			"filter": "plasticChessPiecesForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:100});}
			},
			".00020-plastic-chess-sets.00012-value-club-plastic-chess-sets":{
			"filter": "plasticChessPiecesForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:100});}
			},
			".00020-plastic-chess-sets.00014-clubtourney-plastic-chess-sets":{
			"filter": "plasticChessPiecesForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:100});}
			},
			".00020-plastic-chess-sets.000145-deluxe-club-plastic-chess-sets":{
			"filter": "plasticChessPiecesForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:100});}
			},
			".00020-plastic-chess-sets.00015-conqueror-plastic-chess-sets":{
			"filter": "plasticChessPiecesForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:100});}
			},
			".00020-plastic-chess-sets.00016-executive-plastic-chess-sets":{
			"filter": "plasticChessPiecesForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:100});}
			},
			".00020-plastic-chess-sets.00018-professional-triple-weighted-plastic-chess-sets":{
			"filter": "plasticChessPiecesForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:100});}
			},
			".00020-plastic-chess-sets.00020-guardian-plastic-chess-sets":{
			"filter": "plasticChessPiecesForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:100});}
			},
			".00020-plastic-chess-sets.00022-rogue-knight-plastic-chess-sets":{
			"filter": "plasticChessPiecesForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:100});}
			},
			".00020-plastic-chess-sets.00024-protourney-plastic-chess-sets":{
			"filter": "plasticChessPiecesForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:100});}
			},
			".00020-plastic-chess-sets.00026-crown-plastic-chess-sets":{
			"filter": "plasticChessPiecesForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:100});}
			},
			".00020-plastic-chess-sets.00028-zukert-plastic-chess-sets":{
			"filter": "plasticChessPiecesForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:100});}
			},
			
			//**Theme Chess Pieces**
			".00029-theme-chess-pieces":{
			"filter": "themeChessPiecesForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			".00029-theme-chess-pieces.12-polystone-theme-chess-pieces":{
			"filter": "themeChessPiecesForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			".00029-theme-chess-pieces.13-metal-theme-chess-pieces":{
			"filter": "themeChessPiecesForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			".00029-theme-chess-pieces.14-italfama-theme-chess-pieces":{
			"filter": "themeChessPiecesForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			".00029-theme-chess-pieces.16-manopoulos-theme-chess-pieces":{
			"filter": "themeChessPiecesForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			".00029-theme-chess-pieces.18-studio-anne-carlton-theme-chess-pieces":{
			"filter": "themeChessPiecesForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			".00029-theme-chess-pieces.20-battles-wars-theme-chess-pieces":{
			"filter": "themeChessPiecesForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			".00029-theme-chess-pieces.22-european-history-theme-chess-pieces":{
			"filter": "themeChessPiecesForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			".00029-theme-chess-pieces.24-american-theme-chess-pieces":{
			"filter": "themeChessPiecesForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			".00029-theme-chess-pieces.26-greek-roman-theme-chess-pieces":{
			"filter": "themeChessPiecesForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			".00029-theme-chess-pieces.28-egyptian-theme-chess-pieces":{
			"filter": "themeChessPiecesForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			".00029-theme-chess-pieces.30-asian-oriental-theme-chess-pieces":{
			"filter": "themeChessPiecesForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			".00029-theme-chess-pieces.32-fictional-character-theme-chess-pieces":{
			"filter": "themeChessPiecesForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			".00029-theme-chess-pieces.34-every-theme-in-between-theme-chess-pieces":{
			"filter": "themeChessPiecesForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			
			/**Unfinished Wood Chess Pieces**
			".00055-unfinished-chess-sets":{
			"filter": "unfinishedChessPiecesForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},*/
			
			/**Jaques of London Chess Pieces**
			".00022-jaques-london-chess-sets":{
			"filter": "jaquesChessPiecesForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},*/
			
			/**Artisan Bone Chess Pieces**
			".00033-artisan-hand-carved-chess-sets":{
			"filter": "boneChessPiecesForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},*/
			
			/**Unique Chess Pieces**
			".000295-most-unique-chess-pieces":{
			"filter": "uniqueChessPiecesForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},*/
			
			
			//****CHESS SETS****
			
			//**Chess Sets with Boards**
			".00012-wood-chess-sets-with-chess-boards":{
			"filter": "woodWithBoardChessSetsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:2000});}
			},
			".00012-wood-chess-sets-with-chess-boards.10-standard-mahogany-chess-board-packages":{
			"filter": "woodWithBoardChessSetsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:2000});}
			},
			".00012-wood-chess-sets-with-chess-boards.11-standard-walnut-chess-board-packages":{
			"filter": "woodWithBoardChessSetsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:2000});}
			},
			".00012-wood-chess-sets-with-chess-boards.12-standard-macassar-ebony-chess-board-packages":{
			"filter": "woodWithBoardChessSetsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:2000});}
			},".00012-wood-chess-sets-with-chess-boards.13-standard-rosewood-chess-board-packages":{
			"filter": "woodWithBoardChessSetsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:2000});}
			},
			".00012-wood-chess-sets-with-chess-boards.14-standard-mahogany-chess-board-box-packages":{
			"filter": "woodWithBoardChessSetsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:2000});}
			},
			".00012-wood-chess-sets-with-chess-boards.15-standard-walnut-chess-board-box-packages":{
			"filter": "woodWithBoardChessSetsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:2000});}
			},
			".00012-wood-chess-sets-with-chess-boards.16-standard-macassar-ebony-chess-board-box-packages":{
			"filter": "woodWithBoardChessSetsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:2000});}
			},
			".00012-wood-chess-sets-with-chess-boards.18-deluxe-black-ash-burl-chess-board-packages":{
			"filter": "woodWithBoardChessSetsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:2000});}
			},".00012-wood-chess-sets-with-chess-boards.19-deluxe-stained-wood-chess-board-packages":{
			"filter": "woodWithBoardChessSetsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:2000});}
			},
			".00012-wood-chess-sets-with-chess-boards.20-deluxe-molded-edge-mahogany-chess-board-packages":{
			"filter": "woodWithBoardChessSetsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:2000});}
			},
			".00012-wood-chess-sets-with-chess-boards.21-deluxe-molded-edge-walnut-chess-board-packages":{
			"filter": "woodWithBoardChessSetsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:2000});}
			},
			".00012-wood-chess-sets-with-chess-boards.23-deluxe-molded-edge-african-padauk-chess-board-packages":{
			"filter": "woodWithBoardChessSetsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:2000});}
			},
			".00012-wood-chess-sets-with-chess-boards.24-deluxe-molded-edge-rosewood-chess-board-packages":{
			"filter": "woodWithBoardChessSetsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:2000});}
			},".00012-wood-chess-sets-with-chess-boards.27-african-padauk-signature-chess-board-packages":{
			"filter": "woodWithBoardChessSetsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:2000});}
			},
			
			//**Chess Sets with Cases**
			".00014-wood-chess-sets-with-chess-cases":{
			"filter": "woodWithCasesChessSetsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".00014-wood-chess-sets-with-chess-cases.12-walnut-folding-case-chess-set-packages":{
			"filter": "woodWithCasesChessSetsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".00014-wood-chess-sets-with-chess-cases.14-small-walnut-chess-backgammon-lift-top-case-packages":{
			"filter": "woodWithCasesChessSetsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".00014-wood-chess-sets-with-chess-cases.16-small-walnut-case-with-drawers-chess-set-packages":{
			"filter": "woodWithCasesChessSetsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".00014-wood-chess-sets-with-chess-cases.18-small-macassar-case-with-drawers-chess-set-packages":{
			"filter": "woodWithCasesChessSetsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".00014-wood-chess-sets-with-chess-cases.20-medium-walnut-chess-backgammon-lift-top-case-packages":{
			"filter": "woodWithCasesChessSetsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".00014-wood-chess-sets-with-chess-cases.22-medium-walnut-case-with-drawers-chess-set-packages":{
			"filter": "woodWithCasesChessSetsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},".00014-wood-chess-sets-with-chess-cases.24-medium-macassar-case-with-drawers-chess-set-packages":{
			"filter": "woodWithCasesChessSetsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".00014-wood-chess-sets-with-chess-cases.26-large-walnut-case-with-drawers-chess-set-packages":{
			"filter": "woodWithCasesChessSetsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			
			//**Metal Chess Sets**
			".00018-metal-chess-sets.00012-metal-chess-set-packages":{
			"filter": "metalChessSetsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:2000});}
			},
			".00018-metal-chess-sets.00012-metal-chess-set-packages.00010-staunton-metal-chess-sets-with-boards":{
			"filter": "metalChessSetsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:2000});}
			},
			".00018-metal-chess-sets.00012-metal-chess-set-packages.00020-theme-metal-chess-sets-with-boards":{
			"filter": "metalChessSetsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:2000});}
			},
			
			/**Marble/onyx Chess Sets**
			".00024-marble-onyx-chess-sets":{
			"filter": "marbleChessSetsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			".00024-marble-onyx-chess-sets.1-classic-marble-onyx-chess-sets":{
			"filter": "marbleChessSetsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			".00024-marble-onyx-chess-sets.2-the-chess-store-staunton-marble-chess-sets":{
			"filter": "marbleChessSetsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			".00024-marble-onyx-chess-sets.8-marble-onyx-chess-tables-with-chess-pieces":{
			"filter": "marbleChessSetsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},*/
			
			//**Plastic Chess Sets**
			".00030-tournament-chess-set-kits":{
			"filter": "plasticChessSetsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:100});}
			},
			".00030-tournament-chess-set-kits.00010-master-series-tournament-packages":{
			"filter": "plasticChessSetsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:100});}
			},
			".00030-tournament-chess-set-kits.00012-value-club-tournament-chess-set-kits":{
			"filter": "plasticChessSetsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:100});}
			},
			".00030-tournament-chess-set-kits.00014-clubtourney-tournament-chess-set-kits":{
			"filter": "plasticChessSetsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:100});}
			},
			".00030-tournament-chess-set-kits.00015-conqueror-tournament-packages":{
			"filter": "plasticChessSetsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:100});}
			},
			".00030-tournament-chess-set-kits.00016-executive-tournament-chess-set-kits":{
			"filter": "plasticChessSetsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:100});}
			},
			".00030-tournament-chess-set-kits.00018-professional-tournament-chess-set-kits":{
			"filter": "plasticChessSetsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:100});}
			},
			".00030-tournament-chess-set-kits.00020-guardian-tournament-chess-set-kits":{
			"filter": "plasticChessSetsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:100});}
			},
			".00030-tournament-chess-set-kits.00022-rogue-knight-tournament-chess-set-kits":{
			"filter": "plasticChessSetsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:100});}
			},".00030-tournament-chess-set-kits.00024-protourney-tournament-chess-set-kits":{
			"filter": "plasticChessSetsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:100});}
			},".00030-tournament-chess-set-kits.00026-crown-tournament-chess-set-kits":{
			"filter": "plasticChessSetsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:100});}
			},
			".00030-tournament-chess-set-kits.00028-zukert-tournament-chess-set-kits":{
			"filter": "plasticChessSetsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:100});}
			},
			
			//**Theme Chess Sets**
			".00025-theme-chess-sets":{
			"filter": "themeChessSetsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:2000});}
			},
			".00025-theme-chess-sets.12-polystone-theme-chess-sets":{
			"filter": "themeChessSetsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:2000});}
			},
			".00025-theme-chess-sets.14-metal-theme-chess-sets":{
			"filter": "themeChessSetsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:2000});}
			},
			".00025-theme-chess-sets.16-plastic-theme-chess-sets":{
			"filter": "themeChessSetsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:2000});}
			},
			".00025-theme-chess-sets.18-italfama-theme-chess-sets":{
			"filter": "themeChessSetsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:2000});}
			},
			".00025-theme-chess-sets.20-manopoulos-theme-chess-sets":{
			"filter": "themeChessSetsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:2000});}
			},
			".00025-theme-chess-sets.22-studio-anne-carlton-theme-chess-sets":{
			"filter": "themeChessSetsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:2000});}
			},
			".00025-theme-chess-sets.24-battles-wars-theme-chess-sets":{
			"filter": "themeChessSetsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:2000});}
			},
			".00025-theme-chess-sets.26-european-history-theme-chess-sets":{
			"filter": "themeChessSetsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:2000});}
			},
			".00025-theme-chess-sets.28-american-history-theme-chess-sets":{
			"filter": "themeChessSetsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:2000});}
			},
			".00025-theme-chess-sets.30-greek-roman-theme-chess-sets":{
			"filter": "themeChessSetsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:2000});}
			},
			".00025-theme-chess-sets.32-egyptian-theme-chess-sets":{
			"filter": "themeChessSetsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:2000});}
			},
			".00025-theme-chess-sets.34-asian-oriental-theme-chess-sets":{
			"filter": "themeChessSetsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:2000});}
			},
			".00025-theme-chess-sets.36-fictional-character-theme-chess-sets":{
			"filter": "themeChessSetsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:2000});}
			},
			".00025-theme-chess-sets.38-every-theme-in-between-theme-chess-sets":{
			"filter": "themeChessSetsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:2000});}
			},
			
			//**Travel Chess Sets**
			".00054-travel-chess-sets":{
			"filter": "travelChessSetsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:200});}
			},
			".00054-travel-chess-sets.plastic-travel-chess-sets":{
			"filter": "travelChessSetsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:200});}
			},
			".00054-travel-chess-sets.wood_magnetic_travel_chess_sets":{
			"filter": "travelChessSetsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:200});}
			},
			".00054-travel-chess-sets.wood_non-magnetic_folding_chess_sets":{
			"filter": "travelChessSetsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:200});}
			},
			
			/**Garden Chess Sets**
			".00045-garden-chess-sets":{
			"filter": "gardenChessSetsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},*/
			
			
			//****CHESS BOARDS****
			
			//**Natural Wood Chess Boards**
			".00031-natural-wood-chess-boards":{
			"filter": "natWoodChessBoardsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			".00031-natural-wood-chess-boards.10-walnut-maple-deluxe-chess-board":{
			"filter": "natWoodChessBoardsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			".00031-natural-wood-chess-boards.12-tiger-ebony-maple-deluxe-chess-board":{
			"filter": "natWoodChessBoardsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			".00031-natural-wood-chess-boards.14-mahogany-maple-deluxe-chess-board":{
			"filter": "natWoodChessBoardsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			".00031-natural-wood-chess-boards.16-rosewood-maple-deluxe-chess-board":{
			"filter": "natWoodChessBoardsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			".00031-natural-wood-chess-boards.18-elm-root-maple-deluxe-chess-board":{
			"filter": "natWoodChessBoardsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			".00031-natural-wood-chess-boards.20-teak-maple-deluxe-chess-board":{
			"filter": "natWoodChessBoardsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			".00031-natural-wood-chess-boards.22-palisander-maple-deluxe-chess-board":{
			"filter": "natWoodChessBoardsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			".00031-natural-wood-chess-boards.24-tiger-ebony-maple-deluxe-molded-edge-chess-board":{
			"filter": "natWoodChessBoardsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			".00031-natural-wood-chess-boards.26-african-padauk-maple-signature-chess-board":{
			"filter": "natWoodChessBoardsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			".00031-natural-wood-chess-boards.28-black-walnut-maple-signature-chess-board":{
			"filter": "natWoodChessBoardsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			".00031-natural-wood-chess-boards.30-elm-root-maple-framed-chess-board":{
			"filter": "natWoodChessBoardsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			".00031-natural-wood-chess-boards.32-bud-rosewood-maple-deluxe-molded-edge-chess-board":{
			"filter": "natWoodChessBoardsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			".00031-natural-wood-chess-boards.34-african-padauk-birds-eye-maple-deluxe-molded-edge-chess-board":{
			"filter": "natWoodChessBoardsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			".00031-natural-wood-chess-boards.36-walnut-maple-deluxe-molded-edge-chess-board":{
			"filter": "natWoodChessBoardsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			".00031-natural-wood-chess-boards.38-mahogany-maple-deluxe-molded-edge-chess-board":{
			"filter": "natWoodChessBoardsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			".00031-natural-wood-chess-boards.40-elm-root-maple-thick-deluxe-chess-board":{
			"filter": "natWoodChessBoardsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			".00031-natural-wood-chess-boards.42-rosewood-maple-deluxe-molded-edge-chess-board":{
			"filter": "natWoodChessBoardsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			".00031-natural-wood-chess-boards.44-mahogany-maple-classic-chess-board":{
			"filter": "natWoodChessBoardsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			".00031-natural-wood-chess-boards.46-walnut-maple-classic-chess-board":{
			"filter": "natWoodChessBoardsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			".00031-natural-wood-chess-boards.48-rosewood-maple-standard-chess-board":{
			"filter": "natWoodChessBoardsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			".00031-natural-wood-chess-boards.50-mahogany-maple-standard-chess-board":{
			"filter": "natWoodChessBoardsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			".00031-natural-wood-chess-boards.52-macassar-ebony-standard-chess-board":{
			"filter": "natWoodChessBoardsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			".00031-natural-wood-chess-boards.00031-natural-wood-chess-boards.54-walnut-maple-standard-chess-board":{
			"filter": "natWoodChessBoardsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			
			//**Stained Wood Chess Boards**
			".000311-stained-wood-chess-boards":{
			"filter": "stainWoodChessBoardsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			".000311-stained-wood-chess-boards.12-black-ash-burl-high-gloss-deluxe-chess-board":{
			"filter": "stainWoodChessBoardsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			".000311-stained-wood-chess-boards.14-tulip-red-erable-high-gloss-deluxe-chess-board":{
			"filter": "stainWoodChessBoardsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			".000311-stained-wood-chess-boards.16-blue-erable-high-gloss-deluxe-chess-board":{
			"filter": "stainWoodChessBoardsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			".000311-stained-wood-chess-boards.18-civil-war-high-gloss-deluxe-chess-board":{
			"filter": "stainWoodChessBoardsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			".000311-stained-wood-chess-boards.20-brown-erable-high-gloss-deluxe-chess-board":{
			"filter": "stainWoodChessBoardsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			".000311-stained-wood-chess-boards.22-green-erable-high-gloss-deluxe-chess-board":{
			"filter": "stainWoodChessBoardsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			".000311-stained-wood-chess-boards.24-green-erable-high-gloss-framed-chess-board":{
			"filter": "stainWoodChessBoardsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			".000311-stained-wood-chess-boards.26-tulip-red-maple-high-gloss-deluxe-chess-board":{
			"filter": "stainWoodChessBoardsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			".000311-stained-wood-chess-boards.28-gray-erable-high-gloss-deluxe-chess-board":{
			"filter": "stainWoodChessBoardsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			".000311-stained-wood-chess-boards.30-burgundy-erable-high-gloss-deluxe-chess-board":{
			"filter": "stainWoodChessBoardsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			".000311-stained-wood-chess-boards.32-black-erable-deluxe-chess-board":{
			"filter": "stainWoodChessBoardsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			".000311-stained-wood-chess-boards.34-green-red-high-gloss-deluxe-chess-board":{
			"filter": "stainWoodChessBoardsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			".000311-stained-wood-chess-boards.36-white-black-high-gloss-deluxe-chess-board":{
			"filter": "stainWoodChessBoardsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			".000311-stained-wood-chess-boards.38-red-black-high-gloss-deluxe-chess-board":{
			"filter": "stainWoodChessBoardsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			
			//**Vinyl Chess Boards**
			".000312-vinyl-chess-boards":{
			"filter": "vinylChessBoardsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:30});}
			},
			".000312-vinyl-chess-boards.10-tcs-vinyl-rollup-chess-boards-225":{
			"filter": "vinylChessBoardsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:30});}
			},
			".000312-vinyl-chess-boards.12-tcs-vinyl-rollup-chess-boards-2375":{
			"filter": "vinylChessBoardsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:30});}
			},
			".000312-vinyl-chess-boards.14-club-vinyl-rollup-chess-boards-225":{
			"filter": "vinylChessBoardsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:30});}
			},
			".000312-vinyl-chess-boards.16-club-vinyl-rollup-chess-boards-2375":{
			"filter": "vinylChessBoardsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:30});}
			},
			".000312-vinyl-chess-boards.18-floppy-chess-boards-225":{
			"filter": "vinylChessBoardsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:30});}
			},
			".000312-vinyl-chess-boards.20-floppy-chess-boards-2375":{
			"filter": "vinylChessBoardsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:30});}
			},
			".000312-vinyl-chess-boards.22-silicon-rollup-chess-boards-225":{
			"filter": "vinylChessBoardsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:30});}
			},
			".000312-vinyl-chess-boards.24-vinyl-folding-chess-boards-225":{
			"filter": "vinylChessBoardsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:30});}
			},
			
			//**Chess Cases**
			".000313-chess-cases":{
			"filter": "chessCasesForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			
			//**Metal Chess Boards**
			".000314-metal-chess-boards":{
			"filter": "metalChessBoardsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			
			
			//****CHESS ACCESSORIES****
			
			//**Chess Clocks**
			".00036-chess-clocks":{
			"filter": "chessClocksForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:150});}
			},
			".00036-chess-clocks.00010-analog-chess-clocks":{
			"filter": "chessClocksForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:150});}
			},
			".00036-chess-clocks.00012-digital-chess-clocks":{
			"filter": "chessClocksForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:150});}
			},
			
			//**Chess Boxes**
			".00037-chess-boxes":{
			"filter": "ChessBoxesForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			
			//**Chess Tournament**
			/*".00028-club-tournament-supplies":{
			"filter": "chessTournamentForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},*/
			//**Chess Tournament - Plastic Pieces**
			".00028-club-tournament-supplies.02-plastic-chess-sets":{
			"filter": "clubPlasticPiecesForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:100});}
			},
			".00028-club-tournament-supplies.02-plastic-chess-sets.02-master-plastic-chess-sets":{
			"filter": "clubPlasticPiecesForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:100});}
			},
			".00028-club-tournament-supplies.02-plastic-chess-sets.04-value-club-plastic-chess-sets":{
			"filter": "clubPlasticPiecesForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:100});}
			},
			".00028-club-tournament-supplies.02-plastic-chess-sets.06-clubtourney-plastic-chess-sets":{
			"filter": "clubPlasticPiecesForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:100});}
			},
			".00028-club-tournament-supplies.02-plastic-chess-sets.08-deluxe-club-plastic-chess-sets":{
			"filter": "clubPlasticPiecesForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:100});}
			},
			".00028-club-tournament-supplies.02-plastic-chess-sets.10-conqueror-plastic-chess-sets":{
			"filter": "clubPlasticPiecesForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:100});}
			},
			".00028-club-tournament-supplies.02-plastic-chess-sets.12-executive-plastic-chess-sets":{
			"filter": "clubPlasticPiecesForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:100});}
			},
			".00028-club-tournament-supplies.02-plastic-chess-sets.14-professional-plastic-chess-sets":{
			"filter": "clubPlasticPiecesForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:100});}
			},
			".00028-club-tournament-supplies.02-plastic-chess-sets.16-guardian-plastic-chess-sets":{
			"filter": "clubPlasticPiecesForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:100});}
			},
			".00028-club-tournament-supplies.02-plastic-chess-sets.18-rogue-plastic-chess-sets":{
			"filter": "clubPlasticPiecesForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:100});}
			},
			".00028-club-tournament-supplies.02-plastic-chess-sets.20-protourney-plastic-chess-sets":{
			"filter": "clubPlasticPiecesForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:100});}
			},
			".00028-club-tournament-supplies.02-plastic-chess-sets.22-crown-plastic-chess-sets":{
			"filter": "clubPlasticPiecesForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:100});}
			},
			".00028-club-tournament-supplies.02-plastic-chess-sets.24-zukert-plastic-chess-sets":{
			"filter": "clubPlasticPiecesForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:100});}
			},
			
			//**Chess Tournament - Vinyl**
			".00028-club-tournament-supplies.04-vinyl-chess-boards":{
			"filter": "clubVinylForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:30});}
			},
			".00028-club-tournament-supplies.04-vinyl-chess-boards.02-tcs-premium-vinyl-rollup-chess-boards-225_-squares":{
			"filter": "clubVinylForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:30});}
			},
			".00028-club-tournament-supplies.04-vinyl-chess-boards.04-tcs-premium-vinyl-rollup-chess-boards-2375_-squares":{
			"filter": "clubVinylForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:30});}
			},
			".00028-club-tournament-supplies.04-vinyl-chess-boards.06-club-vinyl-rollup-chess-boards-225_-squares":{
			"filter": "clubVinylForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:30});}
			},
			".00028-club-tournament-supplies.04-vinyl-chess-boards.08-club-vinyl-rollup-chess-boards-2375_-squares":{
			"filter": "clubVinylForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:30});}
			},
			".00028-club-tournament-supplies.04-vinyl-chess-boards.10-floppy-chess-boards-225_-squares":{
			"filter": "clubVinylForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:30});}
			},
			".00028-club-tournament-supplies.04-vinyl-chess-boards.12-floppy-chess-boards-2375_-squares":{
			"filter": "clubVinylForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:30});}
			},
			".00028-club-tournament-supplies.04-vinyl-chess-boards.14-vinyl-folding-chess-boards-2_-squares":{
			"filter": "clubVinylForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:30});}
			},
			
			//**Chess Tournament - Chess Bags**
			".00028-club-tournament-supplies.06-chess-bags":{
			"filter": "clubBagsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:50});}
			},
			".00028-club-tournament-supplies.06-chess-bags.02-chess-piece-bags":{
			"filter": "clubBagsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:50});}
			},
			".00028-club-tournament-supplies.06-chess-bags.04-chess-piece-sleeve-bags":{
			"filter": "clubBagsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:50});}
			},
			".00028-club-tournament-supplies.06-chess-bags.06-small-tournament-chess-bags":{
			"filter": "clubBagsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:50});}
			},
			".00028-club-tournament-supplies.06-chess-bags.10-large-tournament-chess-bags":{
			"filter": "clubBagsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:50});}
			},
			".00028-club-tournament-supplies.06-chess-bags.12-tcs-large-tournament-chess-bags":{
			"filter": "clubBagsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:50});}
			},
			".00028-club-tournament-supplies.06-chess-bags.14-jumbo-tournament-chess-bags":{
			"filter": "clubBagsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:50});}
			},
			
			//**Chess Tournament - Roll-Up Boards**
			".00028-club-tournament-supplies.08-chess-sets-rollup-chess-boards":{
			"filter": "clubRollupBoardForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:50});}
			},
			
			//**Chess Tournament - Chess Packages**
			".00028-club-tournament-supplies.10-tournament-packages":{
			"filter": "clubChessSetsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			".00028-club-tournament-supplies.10-tournament-packages.02-master-tournament-packages":{
			"filter": "clubChessSetsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			".00028-club-tournament-supplies.10-tournament-packages.04-value-club-tournament-packages":{
			"filter": "clubChessSetsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			".00028-club-tournament-supplies.10-tournament-packages.06-clubtourney-tournament-packages":{
			"filter": "clubChessSetsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			".00028-club-tournament-supplies.10-tournament-packages.10-conqueror-tournament-packages":{
			"filter": "clubChessSetsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			".00028-club-tournament-supplies.10-tournament-packages.12-executive-tournament-packages":{
			"filter": "clubChessSetsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			".00028-club-tournament-supplies.10-tournament-packages.14-professional-tournament-packages":{
			"filter": "clubChessSetsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			".00028-club-tournament-supplies.10-tournament-packages.16-guardian-tournament-packages":{
			"filter": "clubChessSetsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			".00028-club-tournament-supplies.10-tournament-packages.18-rogue-tournament-packages":{
			"filter": "clubChessSetsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			".00028-club-tournament-supplies.10-tournament-packages.20-protourney-tournament-packages":{
			"filter": "clubChessSetsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			".00028-club-tournament-supplies.10-tournament-packages.22-crown-tournament-packages":{
			"filter": "clubChessSetsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			".00028-club-tournament-supplies.10-tournament-packages.24-zukert-tournament-packages":{
			"filter": "clubChessSetsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},
			
			//**Chess Tournament - Clocks**
			".00028-club-tournament-supplies.12-chess-clocks":{
			"filter": "clubClocksForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:150});}
			},
			".00028-club-tournament-supplies.12-chess-clocks.digital-chess-clocks":{
			"filter": "clubClocksForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:150});}
			},
			".00028-club-tournament-supplies.12-chess-clocks.analog-chess-clocks":{
			"filter": "clubClocksForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:150});}
			},
			
			/**Chess Tournament - Books**
			".00028-club-tournament-supplies.14-score-books":{
			"filter": "chessTournamentForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},*/
			
			/**Chess Tournament - Demo Boards**
			".00028-club-tournament-supplies.16-chess-demo-boards":{
			"filter": "chessTournamentForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},*/
			
			/**Chess Tournament - Awards**
			".00028-club-tournament-supplies.18-chess-awards":{
			"filter": "chessTournamentForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},*/
			
			/**Chess Tournament - Single Plastic Pieces**
			".00028-club-tournament-supplies.20-single-plastic-chess-pieces":{
			"filter": "chessTournamentForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},*/
			
			//**Chess bags**
			".00039-chess-bags":{
			"filter": "chessBagsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:50});}
			},
			".00039-chess-bags.12-chess-piece-bags":{
			"filter": "chessBagsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:50});}
			},
			".00039-chess-bags.14-chess-piece-sleeve-bags":{
			"filter": "chessBagsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:50});}
			},
			".00039-chess-bags.16-small-tournament-chess-bags":{
			"filter": "chessBagsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:50});}
			},
			".00039-chess-bags.18-large-tournament-chess-bags":{
			"filter": "chessBagsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:50});}
			},
			".00039-chess-bags.20-tcs-large-tournament-chess-bags":{
			"filter": "chessBagsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:50});}
			},
			".00039-chess-bags.22-jumbo-tournament-chess-bags":{
			"filter": "chessBagsForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:50});}
			},
			
			//**Chess DVDs**
			".00044-chess-dvds":{
			"filter": "chessDvdForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:50});}
			},
			".00044-chess-dvds.10-novice-beginner-chess-dvds":{
			"filter": "chessDvdForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:50});}
			},
			".00044-chess-dvds.12-strategy-tactics-chess-dvds":{
			"filter": "chessDvdForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:50});}
			},
			".00044-chess-dvds.14-new-releases-chess-dvds":{
			"filter": "chessDvdForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:50});}
			},
			".00044-chess-dvds.16-chess-openings-dvds":{
			"filter": "chessDvdForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:50});}
			},
			".00044-chess-dvds.18-chess-middlegame-dvds":{
			"filter": "chessDvdForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:50});}
			},
			".00044-chess-dvds.20-chess-endgames-dvds":{
			"filter": "chessDvdForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:50});}
			},
			".00044-chess-dvds.22-chessbase-dvds":{
			"filter": "chessDvdForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:50});}
			},
			".00044-chess-dvds.24-chess-on-dvd-dvds":{
			"filter": "chessDvdForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:50});}
			},
			".00044-chess-dvds.28-roman_s-lab-mastering-chess-series":{
			"filter": "chessDvdForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:50});}
			},
			".00044-chess-dvds.30-foxy-openings-series-chess-dvds":{
			"filter": "chessDvdForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:50});}
			},
			".00044-chess-dvds.32-chessbase-power-play-series-chess-dvds":{
			"filter": "chessDvdForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:50});}
			},
			".00044-chess-dvds.34-susan-polgar-chess-on-dvd-series":{
			"filter": "chessDvdForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:50});}
			},
			".00044-chess-dvds.36-chessbase-end-game-chess-dvd-series":{
			"filter": "chessDvdForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:50});}
			},
			".00044-chess-dvds.38-chessbase-tutorials-series":{
			"filter": "chessDvdForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:50});}
			},
			".00044-chess-dvds.40-roman_s-forum-chess-dvd-series":{
			"filter": "chessDvdForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:50});}
			},
			".00044-chess-dvds.42-roman_s-encyclopedia-chess-dvd-series":{
			"filter": "chessDvdForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:50});}
			},
			".00044-chess-dvds.44-chess-on-dvd-grandmaster-series":{
			"filter": "chessDvdForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:50});}
			},  
			
			//**Chess Books**
			".00034-chess-books":{
			"filter": "chessBookForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:50});}
			},   
			".00034-chess-books.00010-everyman-chess-books":{
			"filter": "chessBookForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:50});}
			},  
			".00034-chess-books.00012-gambit-chess-books":{
			"filter": "chessBookForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:50});}
			},  
			".00034-chess-books.00014-fireside-chess-library-chess-books":{
			"filter": "chessBookForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:50});}
			},  
			".00034-chess-books.00016-batsford-chess-books":{
			"filter": "chessBookForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:50});}
			},  
			".00034-chess-books.00018-openings-chess-books":{
			"filter": "chessBookForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:50});}
			},  
			".00034-chess-books.00020-middle-game-chess-books":{
			"filter": "chessBookForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:50});}
			},  
			".00034-chess-books.00022-end-game-chess-books":{
			"filter": "chessBookForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:50});}
			},  
			".00034-chess-books.00024-game-collection-chess-books":{
			"filter": "chessBookForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:50});}
			},  
			".00034-chess-books.00026-puzzle-training-chess-books":{
			"filter": "chessBookForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:50});}
			},  
			".00034-chess-books.00028-beginner-chess-books":{
			"filter": "chessBookForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:50});}
			},  
			".00034-chess-books.00030-new-chess-books":{
			"filter": "chessBookForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:50});}
			},  
			".00034-chess-books.00032-all-chess-books":{
			"filter": "chessBookForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:50});}
			},
			
			//**Chess Software**  
			".00048-chess-software":{
			"filter": "chessSoftwareForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:50});}
			},  
			
			//**Chess Scorebooks**
			".00046-chess-scorebooks":{
			"filter": "chessScorebookForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:50});}
			},   
			
			//**Chess Tables** 
			".00050-chess-tables":{
			"filter": "chessTableForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:50});}
			},   
			
			//**Chess Books** 
			".00042-chess-demonstration-boards":{
			"filter": "chessDemoForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:50});}
			},
			
			//**Chess Potpourri**
			".00053-chess-potpourri":{
			"filter": "chessPotpourriForm",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:50});}
			}  
			
			
			//**Chess Books**
	/*		"":{
			"filter": "",
			"exec" : function($form,infoObj){_app.ext.store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:500});}
			},                          
	*/
		},

					////////////////////////////////////   CALLBACKS    \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\



	callbacks : {
//callbacks.init need to return either a true or a false, depending on whether or not the file will execute properly based on store account configuration. Use this for any config or dependencies that need to occur.
//the callback is auto-executed as part of the extensions loading process.
		init : {
			onSuccess : function()	{
//				_app.u.dump('BEGIN _app.ext.store_navcats.init.onSuccess ');
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
					_app.u.dump("WARNING! could not detect .ui-slider class within fieldset for slider filter.");
					}
				return r;
				}, //slider
			hidden : function($fieldset){
				return _app.ext.store_filter.u.buildElasticTerms($("input:hidden",$fieldset),$fieldset.attr('data-elastic-key'));
				},
			hiddenOr : function($fieldset){
				var r = {"or":[]};
				$("input:hidden",$fieldset).each(function(){
					r.or.push(_app.ext.store_filter.u.buildElasticTerms($(this),$fieldset.attr('data-elastic-key')));
					});
				return r;
				},
			checkboxes : function($fieldset)	{
				return _app.ext.store_filter.u.buildElasticTerms($(':checked',$fieldset),$fieldset.attr('data-elastic-key'));
				} //checkboxes
			
			}, //getFilterObj




////////////////////////////////////   Actions    \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


		a : {
			
			execFilter : function($form,$page){

				_app.u.dump("BEGIN store_filter.a.filter");
				var $prodlist = $("[data-app-role='productList']",$page).first().empty();
				
				
				$('.categoryList',$page).hide(); //hide any subcategory lists in the main area so customer can focus on results
				$('.categoryText',$page).hide(); //hide any text blocks.
				
				if(_app.ext.store_filter.u.validateFilterProperties($form))	{
				//	_app.u.dump(" -> validated Filter Properties.")
					var query = {
						"mode":"elastic-search",
						"size":50,
						"filter" : _app.ext.store_filter.u.buildElasticFilters($form),
						}//query
				//	_app.u.dump(" -> Query: "); _app.u.dump(query);
					if(query.filter.and.length > 0)	{
						$prodlist.addClass('loadingBG');
						_app.ext.store_search.calls.appPublicProductSearch.init(query,{'callback':function(rd){
				
							if(_app.model.responseHasErrors(rd)){
								$page.anymessage({'message':rd});
								}
							else	{
								var L = _app.data[rd.datapointer]['_count'];
								$prodlist.removeClass('loadingBG')
								if(L == 0)	{
									$page.anymessage({"message":"Your query returned zero results."});
									}
								else	{
									$prodlist.append(_app.ext.store_search.u.getElasticResultsAsJQObject(rd));
									}
								}
							
							},'datapointer':'appPublicSearch|elasticFiltering',
							'templateID': $form.data('loadstemplate') || 'productListTemplateResultsFilter'
							});
							_app.u.dump(JSON.stringify(query));
						_app.model.dispatchThis();
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
					else if(typeof _app.ext.store_filter.getElasticFilter[filterType] != 'function')	{
						r = false;
						$form.anymessage({"message":"WARNING! type ["+filterType+"] has no matching getElasticFilter function. [typoof: "+typeof _app.ext.store_filter.getElasticFilter[filterType]+"]",gMessage:true});
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
					filter = _app.ext.store_filter.getElasticFilter[$fieldset.attr('data-filtertype')]($fieldset);
					if(filter)	{
						filters.and.push(filter);
						}
					});
				
					filters.and.push({'not':{'term':{'prod_outofstock':'1'}}});
					
					//REPLACE THE ABOVE LINE WITH THIS OR SOMETHING LIKE THIS WHENEVER YOU FIGURE OUT HOW TO ACCESS INVENTORY IN ELASTIC.
					//filters.and.push({"has_child":{"type":"sku","query":{"range":{"available":{"gte":1}}}}});
				
				//and requires at least 2 inputs, so add a match_all.
				//if there are no filters, don't add it. the return is also used to determine if any filters are present
				// * doesn't do anything. added by clinton. removed by JT.
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