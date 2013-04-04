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

var extension_thechessstore = function() {
	var r= {
		vars : {
			catTemplates : {
				//Jeff, Here is where you input the categories and which templates they will load with. The syntax looks like this:
				//".00012-wood-chess-sets-with-chess-boards.4-model" : "categoryTemplate2"
				//						^										^
				//					 category 								 Template
				
				//**Begin Category:Template combinations**
				
				//3 column categories
				".00031-natural-wood-chess-boards" : "categoryTemplate3PanelCat",
				".00034-chess-books.00010-everyman-chess-books" : "categoryTemplate3PanelCat",
				".00034-chess-books" : "categoryTemplate3PanelCat",
				".00031-natural-wood-chess-boards.10-walnut-maple-deluxe-chess-boards" : "categoryTemplate3PanelCat",
				".00031-natural-wood-chess-boards.10-walnut-maple-deluxe-chess-board" : "categoryTemplate3PanelCat",
				".00031-natural-wood-chess-boards.12-tiger-ebony-maple-deluxe-chess-board" : "categoryTemplate3PanelCat",
				".00031-natural-wood-chess-boards.14-mahogany-maple-deluxe-chess-board" : "categoryTemplate3PanelCat",
				".00031-natural-wood-chess-boards.16-rosewood-maple-deluxe-chess-board" : "categoryTemplate3PanelCat",
				".00031-natural-wood-chess-boards.18-elm-root-maple-deluxe-chess-board" : "categoryTemplate3PanelCat",
				".00031-natural-wood-chess-boards.20-teak-maple-deluxe-chess-board" : "categoryTemplate3PanelCat",
				".00031-natural-wood-chess-boards.22-palisander-maple-deluxe-chess-board" : "categoryTemplate3PanelCat",
				".00031-natural-wood-chess-boards.24-tiger-ebony-maple-deluxe-molded-edge-chess-board" : "categoryTemplate3PanelCat",
				".00031-natural-wood-chess-boards.25-african-padauk-maple-premier-chess-board" : "categoryTemplate3PanelCat",
				".00031-natural-wood-chess-boards.26-african-padauk-maple-signature-chess-board" : "categoryTemplate3PanelCat",
				".00031-natural-wood-chess-boards.255-american-black-walnut-maple-premier-chess-board" : "categoryTemplate3PanelCat",
				".00031-natural-wood-chess-boards.30-elm-root-maple-framed-chess-board" : "categoryTemplate3PanelCat",
				".00031-natural-wood-chess-boards.28-black-walnut-maple-signature-chess-board" : "categoryTemplate3PanelCat",
				".00031-natural-wood-chess-boards.29-padauk-maple-molded-chess-board" : "categoryTemplate3PanelCat",
				".00031-natural-wood-chess-boards.30-walnut-maple-molded-chess-board" : "categoryTemplate3PanelCat",
				".00031-natural-wood-chess-boards.32-bud-rosewood-maple-deluxe-molded-edge-chess-board" : "categoryTemplate3PanelCat",
				".00031-natural-wood-chess-boards.34-african-padauk-birds-eye-maple-deluxe-molded-edge-chess-board" : "categoryTemplate3PanelCat",
				".00031-natural-wood-chess-boards.36-walnut-maple-deluxe-molded-edge-chess-board" : "categoryTemplate3PanelCat",
				".00031-natural-wood-chess-boards.38-mahogany-maple-deluxe-molded-edge-chess-board" : "categoryTemplate3PanelCat",
				".00031-natural-wood-chess-boards.39-mahogany-burl-wood-high-gloss-chess-board" : "categoryTemplate3PanelCat",
				".00031-natural-wood-chess-boards.40-elm-root-maple-thick-deluxe-chess-board" : "categoryTemplate3PanelCat",
				".00031-natural-wood-chess-boards.42-rosewood-maple-deluxe-molded-edge-chess-board" : "categoryTemplate3PanelCat",
				".00031-natural-wood-chess-boards.44-mahogany-maple-classic-chess-board" : "categoryTemplate3PanelCat",
				".00031-natural-wood-chess-boards.46-walnut-maple-classic-chess-board" : "categoryTemplate3PanelCat",
				".00031-natural-wood-chess-boards.48-rosewood-maple-standard-chess-board" : "categoryTemplate3PanelCat",
				".00031-natural-wood-chess-boards.50-mahogany-maple-standard-chess-board" : "categoryTemplate3PanelCat",
				".00031-natural-wood-chess-boards.52-macassar-ebony-standard-chess-board" : "categoryTemplate3PanelCat",
				".00031-natural-wood-chess-boards.54-walnut-maple-standard-chess-board" : "categoryTemplate3PanelCat",
				".000311-stained-wood-chess-boards" : "categoryTemplate3PanelCat",
				".000311-stained-wood-chess-boards.12-black-ash-burl-high-gloss-deluxe-chess-board" : "categoryTemplate3PanelCat",
				".000311-stained-wood-chess-boards.14-tulip-red-erable-high-gloss-deluxe-chess-board" : "categoryTemplate3PanelCat",
				".000311-stained-wood-chess-boards.16-blue-erable-high-gloss-deluxe-chess-board" : "categoryTemplate3PanelCat",
				".000311-stained-wood-chess-boards.18-civil-war-high-gloss-deluxe-chess-board" : "categoryTemplate3PanelCat",
				".000311-stained-wood-chess-boards.20-brown-erable-high-gloss-deluxe-chess-board" : "categoryTemplate3PanelCat",
				".000311-stained-wood-chess-boards.22-green-erable-high-gloss-deluxe-chess-board" : "categoryTemplate3PanelCat",
				".000311-stained-wood-chess-boards.24-green-erable-high-gloss-framed-chess-board" : "categoryTemplate3PanelCat",
				".000311-stained-wood-chess-boards.26-tulip-red-maple-high-gloss-deluxe-chess-board" : "categoryTemplate3PanelCat",
				".000311-stained-wood-chess-boards.28-gray-erable-high-gloss-deluxe-chess-board" : "categoryTemplate3PanelCat",
				".000311-stained-wood-chess-boards.30-burgundy-erable-high-gloss-deluxe-chess-board" : "categoryTemplate3PanelCat",
				".000311-stained-wood-chess-boards.32-black-erable-deluxe-chess-board" : "categoryTemplate3PanelCat",
				".000311-stained-wood-chess-boards.34-green-red-high-gloss-deluxe-chess-board" : "categoryTemplate3PanelCat",
				".000311-stained-wood-chess-boards.36-white-black-high-gloss-deluxe-chess-board" : "categoryTemplate3PanelCat",
				".000311-stained-wood-chess-boards.38-red-black-high-gloss-deluxe-chess-board" : "categoryTemplate3PanelCat",
				".000311-stained-wood-chess-boards.38-vino-erable-italfama-chess-boards" : "categoryTemplate3PanelCat",
				".000311-stained-wood-chess-boards.40-white-black-italfama-chess-boards" : "categoryTemplate3PanelCat",
				".000311-stained-wood-chess-boards.42-green-erable-italfama-chess-boards" : "categoryTemplate3PanelCat",
				".00016-chess-boards.00014-metal-chess-boards" : "categoryTemplate3PanelCat",
				".000312-vinyl-chess-boards" : "categoryTemplate3PanelCat",
				".000312-vinyl-chess-boards.10-tcs-vinyl-rollup-chess-boards-225" : "categoryTemplate3PanelCat",
				".000312-vinyl-chess-boards.12-tcs-vinyl-rollup-chess-boards-2375" : "categoryTemplate3PanelCat",
				".000312-vinyl-chess-boards.14-club-vinyl-rollup-chess-boards-225" : "categoryTemplate3PanelCat",
				".000312-vinyl-chess-boards.16-club-vinyl-rollup-chess-boards-2375" : "categoryTemplate3PanelCat",
				".000312-vinyl-chess-boards.18-floppy-chess-boards-225" : "categoryTemplate3PanelCat",
				".000312-vinyl-chess-boards.20-floppy-chess-boards-2375" : "categoryTemplate3PanelCat",
				".000312-vinyl-chess-boards.22-silicon-rollup-chess-boards-225" : "categoryTemplate3PanelCat",
				".000312-vinyl-chess-boards.24-vinyl-folding-chess-boards-225" : "categoryTemplate3PanelCat",
				".000313-chess-cases" : "categoryTemplate3PanelCat",
				".000314-metal-chess-boards" : "categoryTemplate3PanelCat",
				".00037-chess-boxes" : "categoryTemplate3PanelCat",
				".00022-jaques-london-chess-sets" : "categoryTemplate3PanelCat",
				".00028-club-tournament-supplies" : "categoryTemplate3PanelCat",
				".00028-club-tournament-supplies.02-plastic-chess-sets" : "categoryTemplate3PanelCat",
				".00028-club-tournament-supplies.02-plastic-chess-sets.02-master-plastic-chess-sets" : "categoryTemplate3PanelCat",
				".00028-club-tournament-supplies.02-plastic-chess-sets.04-value-club-plastic-chess-sets" : "categoryTemplate3PanelCat",
				".00028-club-tournament-supplies.02-plastic-chess-sets.06-clubtourney-plastic-chess-sets" : "categoryTemplate3PanelCat",
				".00028-club-tournament-supplies.02-plastic-chess-sets.08-deluxe-club-plastic-chess-sets" : "categoryTemplate3PanelCat",
				".00028-club-tournament-supplies.02-plastic-chess-sets.10-conqueror-plastic-chess-sets" : "categoryTemplate3PanelCat",
				".00028-club-tournament-supplies.02-plastic-chess-sets.12-executive-plastic-chess-sets" : "categoryTemplate3PanelCat",
				".00028-club-tournament-supplies.02-plastic-chess-sets.14-professional-plastic-chess-sets" : "categoryTemplate3PanelCat",
				".00028-club-tournament-supplies.02-plastic-chess-sets.16-guardian-plastic-chess-sets" : "categoryTemplate3PanelCat",
				".00028-club-tournament-supplies.02-plastic-chess-sets.18-rogue-plastic-chess-sets" : "categoryTemplate3PanelCat",
				".00028-club-tournament-supplies.02-plastic-chess-sets.20-protourney-plastic-chess-sets" : "categoryTemplate3PanelCat",
				".00028-club-tournament-supplies.02-plastic-chess-sets.22-crown-plastic-chess-sets" : "categoryTemplate3PanelCat",
				".00028-club-tournament-supplies.02-plastic-chess-sets.24-zukert-plastic-chess-sets" : "categoryTemplate3PanelCat",
				".00039-chess-bags" : "categoryTemplate3PanelCat",
				".00039-chess-bags.12-chess-piece-bags" : "categoryTemplate3PanelCat",
				".00039-chess-bags.14-chess-piece-sleeve-bags" : "categoryTemplate3PanelCat",
				".00039-chess-bags.16-small-tournament-chess-bags" : "categoryTemplate3PanelCat",
				".00039-chess-bags.18-large-tournament-chess-bags" : "categoryTemplate3PanelCat",
				".00039-chess-bags.20-tcs-large-tournament-chess-bags" : "categoryTemplate3PanelCat",
				".00039-chess-bags.22-jumbo-tournament-chess-bags" : "categoryTemplate3PanelCat",
				".00028-club-tournament-supplies.04-vinyl-chess-boards" : "categoryTemplate3PanelCat",
				".00028-club-tournament-supplies.04-vinyl-chess-boards.02-tcs-premium-vinyl-rollup-chess-boards-225_-squares" : "categoryTemplate3PanelCat",
				".00028-club-tournament-supplies.04-vinyl-chess-boards.04-tcs-premium-vinyl-rollup-chess-boards-2375_-squares" : "categoryTemplate3PanelCat",
				".00028-club-tournament-supplies.04-vinyl-chess-boards.06-club-vinyl-rollup-chess-boards-225_-squares" : "categoryTemplate3PanelCat",
				".00028-club-tournament-supplies.04-vinyl-chess-boards.08-club-vinyl-rollup-chess-boards-2375_-squares" : "categoryTemplate3PanelCat",
				".00028-club-tournament-supplies.04-vinyl-chess-boards.10-floppy-chess-boards-225_-squares" : "categoryTemplate3PanelCat",
				".00028-club-tournament-supplies.04-vinyl-chess-boards.12-floppy-chess-boards-2375_-squares" : "categoryTemplate3PanelCat",
				".00028-club-tournament-supplies.04-vinyl-chess-boards.14-vinyl-folding-chess-boards-2_-squares" : "categoryTemplate3PanelCat",
				".00028-club-tournament-supplies.06-chess-bags" : "categoryTemplate3PanelCat",
				".00028-club-tournament-supplies.06-chess-bags.02-chess-piece-bags" : "categoryTemplate3PanelCat",
				".00028-club-tournament-supplies.06-chess-bags.04-chess-piece-sleeve-bags" : "categoryTemplate3PanelCat",
				".00028-club-tournament-supplies.06-chess-bags.06-small-tournament-chess-bags" : "categoryTemplate3PanelCat",
				".00028-club-tournament-supplies.06-chess-bags.08-tcs-small-tournament-chess-bags" : "categoryTemplate3PanelCat",
				".00028-club-tournament-supplies.06-chess-bags.10-large-tournament-chess-bags" : "categoryTemplate3PanelCat",
				".00028-club-tournament-supplies.06-chess-bags.12-tcs-large-tournament-chess-bags" : "categoryTemplate3PanelCat",
				".00028-club-tournament-supplies.06-chess-bags.14-jumbo-tournament-chess-bags" : "categoryTemplate3PanelCat",
				".00028-club-tournament-supplies.08-chess-sets-rollup-chess-boards" : "categoryTemplate3PanelCat",
				".00028-club-tournament-supplies.10-tournament-packages" : "categoryTemplate3PanelCat",
				".00028-club-tournament-supplies.10-tournament-packages.02-master-tournament-packages" : "categoryTemplate3PanelCat",
				".00028-club-tournament-supplies.10-tournament-packages.04-value-club-tournament-packages" : "categoryTemplate3PanelCat",
				".00028-club-tournament-supplies.10-tournament-packages.06-clubtourney-tournament-packages" : "categoryTemplate3PanelCat",
				".00028-club-tournament-supplies.10-tournament-packages.08-deluxe-club-tournament-packages" : "categoryTemplate3PanelCat",
				".00028-club-tournament-supplies.10-tournament-packages.10-conqueror-tournament-packages" : "categoryTemplate3PanelCat",
				".00028-club-tournament-supplies.10-tournament-packages.12-executive-tournament-packages" : "categoryTemplate3PanelCat",
				".00028-club-tournament-supplies.10-tournament-packages.14-professional-tournament-packages" : "categoryTemplate3PanelCat",
				".00028-club-tournament-supplies.10-tournament-packages.16-guardian-tournament-packages" : "categoryTemplate3PanelCat",
				".00028-club-tournament-supplies.10-tournament-packages.18-rogue-tournament-packages" : "categoryTemplate3PanelCat",
				".00028-club-tournament-supplies.10-tournament-packages.20-protourney-tournament-packages" : "categoryTemplate3PanelCat",
				".00028-club-tournament-supplies.10-tournament-packages.22-crown-tournament-packages" : "categoryTemplate3PanelCat",
				".00028-club-tournament-supplies.10-tournament-packages.24-zukert-tournament-packages" : "categoryTemplate3PanelCat",
				".00028-club-tournament-supplies.12-chess-clocks.analog-chess-clocks" : "categoryTemplate3PanelCat",
				".00028-club-tournament-supplies.12-chess-clocks.digital-chess-clocks" : "categoryTemplate3PanelCat",
				".00028-club-tournament-supplies.16-chess-demo-boards" : "categoryTemplate3PanelCat",
				".00030-tournament-chess-set-kits" : "categoryTemplate3PanelCat",
				".00030-tournament-chess-set-kits.00010-master-series-tournament-packages" : "categoryTemplate3PanelCat",
				".00030-tournament-chess-set-kits.00012-value-club-tournament-chess-set-kits" : "categoryTemplate3PanelCat",
				".00030-tournament-chess-set-kits.00014-clubtourney-tournament-chess-set-kits" : "categoryTemplate3PanelCat",
				".00030-tournament-chess-set-kits.00015-conqueror-tournament-packages" : "categoryTemplate3PanelCat",
				".00030-tournament-chess-set-kits.00016-executive-tournament-chess-set-kits" : "categoryTemplate3PanelCat",
				".00030-tournament-chess-set-kits.00018-professional-tournament-chess-set-kits" : "categoryTemplate3PanelCat",
				".00030-tournament-chess-set-kits.00020-guardian-tournament-chess-set-kits" : "categoryTemplate3PanelCat",
				".00030-tournament-chess-set-kits.00022-rogue-knight-tournament-chess-set-kits" : "categoryTemplate3PanelCat",
				".00030-tournament-chess-set-kits.00024-protourney-tournament-chess-set-kits" : "categoryTemplate3PanelCat",
				".00030-tournament-chess-set-kits.00026-crown-tournament-chess-set-kits" : "categoryTemplate3PanelCat",
				".00030-tournament-chess-set-kits.00028-zukert-tournament-chess-set-kits" : "categoryTemplate3PanelCat",
				".00032-chess-set-storage.00010-chess-boxes" : "categoryTemplate3PanelCat",
				".00032-chess-set-storage.00012-chess-cases" : "categoryTemplate3PanelCat",
				".00032-chess-set-storage.00016-chess-bags" : "categoryTemplate3PanelCat",
				".00032-chess-set-storage.00016-chess-bags.00010-chess-piece-bags" : "categoryTemplate3PanelCat",
				".00032-chess-set-storage.00016-chess-bags.00012-chess-piece-sleeve-bags" : "categoryTemplate3PanelCat",
				".00032-chess-set-storage.00016-chess-bags.00014-tcs-chess-piece-sleeve-bags" : "categoryTemplate3PanelCat",
				".00032-chess-set-storage.00016-chess-bags.00016-small-tournament-chess-bags" : "categoryTemplate3PanelCat",
				".00032-chess-set-storage.00016-chess-bags.00018-large-tournament-chess-bags" : "categoryTemplate3PanelCat",
				".00032-chess-set-storage.00016-chess-bags.00020-tcs-small-tournament-chess-bags" : "categoryTemplate3PanelCat",
				".00032-chess-set-storage.00016-chess-bags.00022-tcs-largetournament-chess-bags" : "categoryTemplate3PanelCat",
				".00032-chess-set-storage.00016-chess-bags.00024-jumbo-tournament-chess-bags" : "categoryTemplate3PanelCat",
				".00034-chess-books" : "categoryTemplate3PanelCat",
				".00036-chess-clocks.00010-analog-chess-clocks" : "categoryTemplate3PanelCat",
				".00036-chess-clocks.00012-digital-chess-clocks" : "categoryTemplate3PanelCat",
				".00042-chess-demonstration-boards" : "categoryTemplate3PanelCat",
				".00044-chess-dvds" : "categoryTemplate3PanelCat",
				".00045-garden-chess-sets" : "categoryTemplate3PanelCat",
				".00048-chess-software" : "categoryTemplate3PanelCat",
				".00054-travel-chess-sets" : "categoryTemplate3PanelCat",
				".00054-travel-chess-sets.plastic-travel-chess-sets" : "categoryTemplate3PanelCat",
				".00054-travel-chess-sets.wood_magnetic_travel_chess_sets" : "categoryTemplate3PanelCat",
				".00054-travel-chess-sets.wood_non-magnetic_folding_chess_sets" : "categoryTemplate3PanelCat",
				".00058-gift-cards" : "categoryTemplate3PanelCat",
				".00062-great-gift-ideas.1-under-100" : "categoryTemplate3PanelCat",
				".00062-great-gift-ideas.2-100-19999" : "categoryTemplate3PanelCat",
				".00062-great-gift-ideas.3-200-29999" : "categoryTemplate3PanelCat",
				".00062-great-gift-ideas.4-300-49999" : "categoryTemplate3PanelCat",
				".00062-great-gift-ideas.5-500up" : "categoryTemplate3PanelCat",
				".00064-shop-by-brand.dgt" : "categoryTemplate3PanelCat",
				".00064-shop-by-brand.italfama" : "categoryTemplate3PanelCat",
				".00064-shop-by-brand.jaques-of-london" : "categoryTemplate3PanelCat",
				".00064-shop-by-brand.mad_catz" : "categoryTemplate3PanelCat",
				".00064-shop-by-brand.manopoulos" : "categoryTemplate3PanelCat",
				".00064-shop-by-brand.rechapados-ferrer" : "categoryTemplate3PanelCat",
				".00064-shop-by-brand.wood-expressions" : "categoryTemplate3PanelCat",
				".sales.after_christmas" : "categoryTemplate3PanelCat",
				".sales.back_to_school_sale" : "categoryTemplate3PanelCat",
				".sales.beat_the_heat_sale" : "categoryTemplate3PanelCat",
				".sales.easter_sale" : "categoryTemplate3PanelCat",
				".sales.fall" : "categoryTemplate3PanelCat",
				".sales.father_s_day" : "categoryTemplate3PanelCat",
				".sales.father_s_day.independence_day" : "categoryTemplate3PanelCat",
				".sales.graduation_fathers_day" : "categoryTemplate3PanelCat",
				".sales.independence_day" : "categoryTemplate3PanelCat",
				".sales.january_clearance_sale" : "categoryTemplate3PanelCat",
				".sales.labor_day" : "categoryTemplate3PanelCat",
				".sales.mother_s_day_sale" : "categoryTemplate3PanelCat",
				".sales.no_fooling_april_fool_s_day_sale" : "categoryTemplate3PanelCat",
				".sales.presidents_day_sale" : "categoryTemplate3PanelCat",
				".sales.spring" : "categoryTemplate3PanelCat",
				".sales.spring." : "categoryTemplate3PanelCat",
				".sales.st_patrick_s_day_sale" : "categoryTemplate3PanelCat",
				".sales.the_chess_store_black_friday_sale" : "categoryTemplate3PanelCat",
				".sales.the_chess_store_christmas_sale" : "categoryTemplate3PanelCat",
				".sales.the_chess_store_halloween_sale" : "categoryTemplate3PanelCat",
				".sales.the_chess_store_january_clearance_sale" : "categoryTemplate3PanelCat",
				".sales.the_chess_store_presidents_day_sale" : "categoryTemplate3PanelCat",
				".sales.the_chess_store_thanksgiving_day_sale" : "categoryTemplate3PanelCat",
				".sales.the_chess_store_valentine_s_sale" : "categoryTemplate3PanelCat",
				".sales.the_chess_store_veterans_day_sale" : "categoryTemplate3PanelCat",
				".sales.valentines_day" : "categoryTemplate3PanelCat",
				".sales.weekend_specials_" : "categoryTemplate3PanelCat",
				".00028-club-tournament-supplies.14-score-books" : "categoryTemplate3PanelCat",
				".00028-club-tournament-supplies.18-chess-awards" : "categoryTemplate3PanelCat",
				".00028-club-tournament-supplies.20-single-plastic-chess-pieces" : "categoryTemplate3PanelCat",
				".00034-chess-books.00010-everyman-chess-books" : "categoryTemplate3PanelCat",
				".00034-chess-books.00012-gambit-chess-books" : "categoryTemplate3PanelCat",
				".00034-chess-books.00014-fireside-chess-library-chess-books" : "categoryTemplate3PanelCat",
				".00034-chess-books.00016-batsford-chess-books" : "categoryTemplate3PanelCat",
				".00034-chess-books.00018-openings-chess-books" : "categoryTemplate3PanelCat",
				".00034-chess-books.00020-middle-game-chess-books" : "categoryTemplate3PanelCat",
				".00034-chess-books.00022-end-game-chess-books" : "categoryTemplate3PanelCat",
				".00034-chess-books.00024-game-collection-chess-books" : "categoryTemplate3PanelCat",
				".00034-chess-books.00026-puzzle-training-chess-books" : "categoryTemplate3PanelCat",
				".00034-chess-books.00028-beginner-chess-books" : "categoryTemplate3PanelCat",
				".00034-chess-books.00030-new-chess-books" : "categoryTemplate3PanelCat",
				".00034-chess-books.00032-all-chess-books" : "categoryTemplate3PanelCat",
				".00044-chess-dvds.00010-romans-mastering-chess-series-dvds" : "categoryTemplate3PanelCat",
				".00044-chess-dvds.00011-chess-for-anyone" : "categoryTemplate3PanelCat",
				".00044-chess-dvds.00012-romans-forum-series-dvds" : "categoryTemplate3PanelCat",
				".00044-chess-dvds.00014-romans-encyclopedia-series-dvds" : "categoryTemplate3PanelCat",
				".00044-chess-dvds.00016-romans-winning-edge-series-dvds" : "categoryTemplate3PanelCat",
				".00044-chess-dvds.00018-foxy-openings-series-dvds" : "categoryTemplate3PanelCat",
				".00044-chess-dvds.00020-susan-polgar-series-dvds" : "categoryTemplate3PanelCat",
				".00044-chess-dvds.00022-foxy-fighting-chess-series-dvds" : "categoryTemplate3PanelCat",
				".00044-chess-dvds.00024-foxy-foundation-of-chess-series-dvds" : "categoryTemplate3PanelCat",
				".00044-chess-dvds.00026-grandmaster-repertoire-series-dvds" : "categoryTemplate3PanelCat",
				".00044-chess-dvds.00028-improve-your-chess-series-dvds" : "categoryTemplate3PanelCat",
				".00044-chess-dvds.00030-russian-school-of-chess-series-dvds" : "categoryTemplate3PanelCat",
				".00044-chess-dvds.00032-bobby-fischer-series-dvds" : "categoryTemplate3PanelCat",
				".00044-chess-dvds.00034-world-championship-series-dvds" : "categoryTemplate3PanelCat",
				".00044-chess-dvds.duels_of_the_mind" : "categoryTemplate3PanelCat",
				".00046-chess-scorebooks" : "categoryTemplate3PanelCat",
				".00064-shop-by-brand.bhb" : "categoryTemplate3PanelCat",
				".00064-shop-by-brand.chess-on-dvd" : "categoryTemplate3PanelCat",
				".00064-shop-by-brand.chessbase" : "categoryTemplate3PanelCat",
				".00064-shop-by-brand.everyman-chess" : "categoryTemplate3PanelCat",
				".00064-shop-by-brand.gambit-books" : "categoryTemplate3PanelCat",
				".00064-shop-by-brand.italfama.6-chess-boards" : "categoryTemplate3PanelCat",
				".00064-shop-by-brand.italfama.8-chess-cases" : "categoryTemplate3PanelCat",
				".00064-shop-by-brand.manopoulos.4-chess-boards" : "categoryTemplate3PanelCat",
				".00064-shop-by-brand.manopoulos.5-backgammon-sets" : "categoryTemplate3PanelCat",
				".00064-shop-by-brand.the-chess-store.6-chess-boards" : "categoryTemplate3PanelCat",
				".00064-shop-by-brand.the-chess-store.8-chess-bags" : "categoryTemplate3PanelCat",
				".00064-shop-by-brand.zmartfun_electronics" : "categoryTemplate3PanelCat",
				
				
				
				//4 column category template







			},
			
			reviewSelector : ".reviewsContainer"
		},
		
		callbacks : {
			init : {
				onSuccess : function(){
					app.u.dump('BEGIN app.ext.extension_thechessstore.callbacks.init.onSuccess');
				},
				onError : function() {
					app.u.dump('BEGIN app.ext.extension_thechessstore.callbacks.init.onError');
				}
			},
			startExtension : {
				onSuccess : function (){
					app.u.dump('BEGIN app.ext.extension_thechessstore.callbacks.startExtension.onSuccess')
				},
				onError : function (){
					app.u.dump('BEGIN app.ext.extension_thechessstore.callbacks.startExtension.onError');
				}
			}
		},
		renderFormats : {
			//The render format for determining if a product is a component. Adds a class of assembly to these products that can be used to stylize them.
			addAssemblyClass : function($tag, data){
				if(data.value.stid[0] == '%' || data.value.asm_master) {
					$tag.addClass('assembly');
				}
			},
			
			
		}
	}
	return r;
}