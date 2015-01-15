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

var extension_thechessstore = function(_app) {
	var r= {
			catTemplates : {
				//Jeff, Here is where you input the categories and which templates they will load with. The syntax looks like this:
				//".00012-wood-chess-sets-with-chess-boards.4-model" : "categoryTemplate2"
				//						^										^
				//					 category 								 Template
				
				//**Begin Category:Template combinations**
				
				//Holiday Template
				".1006-year-end-holiday-schedule" : "categoryHolidayTemplate",
				
				//3 column categories
				".sales.the_chess_store_independence_day_celebration" : "categoryTemplate3PanelCat",
				//".00031-natural-wood-chess-boards" : "categoryTemplate3PanelCat",
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
				//".000311-stained-wood-chess-boards" : "categoryTemplate3PanelCat",
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
				//".00028-club-tournament-supplies.10-tournament-packages" : "categoryTemplate3PanelCat",
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
				//".00030-tournament-chess-set-kits" : "categoryTemplate3PanelCat",
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
				".00044-chess-dvds.10-novice-beginner-chess-dvds" : "categoryTemplate3PanelCat",
				".00044-chess-dvds.12-strategy-tactics-chess-dvds" : "categoryTemplate3PanelCat",
				".00044-chess-dvds.14-new-releases-chess-dvds" : "categoryTemplate3PanelCat",
				".00044-chess-dvds.16-chess-openings-dvds" : "categoryTemplate3PanelCat",
				".00044-chess-dvds.18-chess-middlegame-dvds" : "categoryTemplate3PanelCat",
				".00044-chess-dvds.20-chess-endgames-dvds" : "categoryTemplate3PanelCat",
				".00044-chess-dvds.22-chessbase-dvds" : "categoryTemplate3PanelCat",
				".00044-chess-dvds.24-chess-on-dvd-dvds" : "categoryTemplate3PanelCat",
				".00044-chess-dvds.28-roman_s-lab-mastering-chess-series" : "categoryTemplate3PanelCat",
				".00044-chess-dvds.30-foxy-openings-series-chess-dvds" : "categoryTemplate3PanelCat",
				".00044-chess-dvds.32-chessbase-power-play-series-chess-dvds" : "categoryTemplate3PanelCat",
				".00044-chess-dvds.34-susan-polgar-chess-on-dvd-series" : "categoryTemplate3PanelCat",
				".00044-chess-dvds.36-chessbase-end-game-chess-dvd-series" : "categoryTemplate3PanelCat",
				".00044-chess-dvds.38-chessbase-tutorials-series" : "categoryTemplate3PanelCat",
				".00044-chess-dvds.40-roman_s-forum-chess-dvd-series" : "categoryTemplate3PanelCat",
				".00044-chess-dvds.42-roman_s-encyclopedia-chess-dvd-series" : "categoryTemplate3PanelCat",
				".00044-chess-dvds.44-chess-on-dvd-grandmaster-series" : "categoryTemplate3PanelCat",
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
				//".00064-shop-by-brand.manopoulos" : "categoryTemplate3PanelCat",
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
				".00064-shop-by-brand.chronos" : "categoryTemplate3PanelCat",
				".00064-shop-by-brand.zmartfun_electronics" : "categoryTemplate3PanelCat",
				
				".other-games-app.backgammon" : "categoryTemplate3PanelCat",
				".other-games-app.checkers" : "categoryTemplate3PanelCat",
				".other-games-app.cribbage" : "categoryTemplate3PanelCat",
				".other-games-app.dominoes" : "categoryTemplate3PanelCat",
				".other-games-app.go" : "categoryTemplate3PanelCat",
				".other-games-app.mah_jong" : "categoryTemplate3PanelCat",
				".other-games-app.backgammon.30-backgammon-accessories" : "categoryTemplate3PanelCat",
				
				
				//2 column, 187 height, wide format categories
				".00010-wood-chess-sets" : "category2ProdWideTemplate",
				".00027-metal-chess-pieces" : "category2ProdWideTemplate",
				".000285-marble-onyx-stone-chess-pieces" : "category2ProdWideTemplate",
				".00020-plastic-chess-sets" : "category2ProdWideTemplate",
				".00029-theme-chess-pieces" : "category2ProdWideTemplate",
				".00055-unfinished-chess-sets" : "category2ProdWideTemplate",
				".00033-artisan-hand-carved-chess-sets" : "category2ProdWideTemplate",
				".000295-most-unique-chess-pieces" : "category2ProdWideTemplate",
				".00010-wood-chess-sets.10-german-knight-staunton-chess-sets" : "category2ProdWideTemplate",
				".00010-wood-chess-sets.12-french-lardy-staunton-chess-sets" : "category2ProdWideTemplate",
				".00010-wood-chess-sets.14-bohemia-staunton-chess-sets" : "category2ProdWideTemplate",
				".00010-wood-chess-sets.16-kings-guard-staunton-chess-chess" : "category2ProdWideTemplate",
				".00010-wood-chess-sets.18-parker-staunton-chess-sets" : "category2ProdWideTemplate",
				".00010-wood-chess-sets.20-yugoslavia-staunton-chess-sets" : "category2ProdWideTemplate",
				".00010-wood-chess-sets.22-deluxe-old-club-staunton-chess-sets" : "category2ProdWideTemplate",
				".00010-wood-chess-sets.24-british-staunton-chess-sets" : "category2ProdWideTemplate",
				".00010-wood-chess-sets.26-fierce-knight-staunton-chess-sets" : "category2ProdWideTemplate",
				".00010-wood-chess-sets.28-royal-staunton-chess-sets" : "category2ProdWideTemplate",
				".00010-wood-chess-sets.30-new-exclusive-staunton-chess-sets" : "category2ProdWideTemplate",
				".00010-wood-chess-sets.32-wingfield-staunton-chess-sets" : "category2ProdWideTemplate",
				".00010-wood-chess-sets.34-players-staunton-chess-sets" : "category2ProdWideTemplate",
				".00010-wood-chess-sets.36-saint-george-antique-reproduction-chess-set" : "category2ProdWideTemplate",
				".00010-wood-chess-sets.38-grande-staunton-chess-sets" : "category2ProdWideTemplate",
				".00010-wood-chess-sets.40-edinburgh-upright-antique-reproduction-chess-sets" : "category2ProdWideTemplate",
				".00010-wood-chess-sets.48-columbian-knight-staunton-chess-sets" : "category2ProdWideTemplate",
				".00010-wood-chess-sets.48-pershing-staunton-chess-sets" : "category2ProdWideTemplate",
				".00010-wood-chess-sets.50-bridled-stallion-staunton-chess-sets" : "category2ProdWideTemplate",
				".00010-wood-chess-sets.502-patton-staunton-chess-sets" : "category2ProdWideTemplate",
				".00010-wood-chess-sets.504-hadrian-staunton-chess-sets" : "category2ProdWideTemplate",
				".00010-wood-chess-sets.51-cyrus-staunton-chess-sets" : "category2ProdWideTemplate",
				".00010-wood-chess-sets.52-wellington-staunton-chess-sets" : "category2ProdWideTemplate",
				".00027-metal-chess-pieces.2-staunton-metal-chess-pieces" : "category2ProdWideTemplate",
				".00027-metal-chess-pieces.4-theme-metal-chess-pieces" : "category2ProdWideTemplate",
				".00020-plastic-chess-sets.00010-master-series-plastic-chess-sets" : "category2ProdWideTemplate",
				".00020-plastic-chess-sets.00012-value-club-plastic-chess-sets" : "category2ProdWideTemplate",
				".00020-plastic-chess-sets.00014-clubtourney-plastic-chess-sets" : "category2ProdWideTemplate",
				".00020-plastic-chess-sets.000145-deluxe-club-plastic-chess-sets" : "category2ProdWideTemplate",
				".00020-plastic-chess-sets.00015-conqueror-plastic-chess-sets" : "category2ProdWideTemplate",
				".00020-plastic-chess-sets.00016-executive-plastic-chess-sets" : "category2ProdWideTemplate",
				".00020-plastic-chess-sets.00018-professional-triple-weighted-plastic-chess-sets" : "category2ProdWideTemplate",
				".00020-plastic-chess-sets.00020-guardian-plastic-chess-sets" : "category2ProdWideTemplate",
				".00020-plastic-chess-sets.00022-rogue-knight-plastic-chess-sets" : "category2ProdWideTemplate",
				".00020-plastic-chess-sets.00024-protourney-plastic-chess-sets" : "category2ProdWideTemplate",
				".00020-plastic-chess-sets.00026-crown-plastic-chess-sets" : "category2ProdWideTemplate",
				".00020-plastic-chess-sets.00028-zukert-plastic-chess-sets" : "category2ProdWideTemplate",
				".00029-theme-chess-pieces.12-polystone-theme-chess-pieces" : "category2ProdWideTemplate",
				".00029-theme-chess-pieces.13-metal-theme-chess-pieces" : "category2ProdWideTemplate",
				".00029-theme-chess-pieces.14-italfama-theme-chess-pieces" : "category2ProdWideTemplate",
				".00029-theme-chess-pieces.16-manopoulos-theme-chess-pieces" : "category2ProdWideTemplate",
				".00029-theme-chess-pieces.18-studio-anne-carlton-theme-chess-pieces" : "category2ProdWideTemplate",
				".00029-theme-chess-pieces.20-battles-wars-theme-chess-pieces" : "category2ProdWideTemplate",
				".00029-theme-chess-pieces.22-european-history-theme-chess-pieces" : "category2ProdWideTemplate",
				".00029-theme-chess-pieces.24-american-theme-chess-pieces" : "category2ProdWideTemplate",
				".00029-theme-chess-pieces.26-greek-roman-theme-chess-pieces" : "category2ProdWideTemplate",
				".00029-theme-chess-pieces.28-egyptian-theme-chess-pieces" : "category2ProdWideTemplate",
				".00029-theme-chess-pieces.30-asian-oriental-theme-chess-pieces" : "category2ProdWideTemplate",
				".00029-theme-chess-pieces.32-fictional-character-theme-chess-pieces" : "category2ProdWideTemplate",
				".00029-theme-chess-pieces.34-every-theme-in-between-theme-chess-pieces" : "category2ProdWideTemplate",
				".00028-club-tournament-supplies.02-plastic-chess-sets" : "category2ProdWideTemplate",
				".00028-club-tournament-supplies.02-plastic-chess-sets.02-master-plastic-chess-sets" : "category2ProdWideTemplate",
				".00028-club-tournament-supplies.02-plastic-chess-sets.04-value-club-plastic-chess-sets" : "category2ProdWideTemplate",
				".00028-club-tournament-supplies.02-plastic-chess-sets.06-clubtourney-plastic-chess-sets" : "category2ProdWideTemplate",
				".00028-club-tournament-supplies.02-plastic-chess-sets.08-deluxe-club-plastic-chess-sets" : "category2ProdWideTemplate",
				".00028-club-tournament-supplies.02-plastic-chess-sets.10-conqueror-plastic-chess-sets" : "category2ProdWideTemplate",
				".00028-club-tournament-supplies.02-plastic-chess-sets.12-executive-plastic-chess-sets" : "category2ProdWideTemplate",
				".00028-club-tournament-supplies.02-plastic-chess-sets.14-professional-plastic-chess-sets" : "category2ProdWideTemplate",
				".00028-club-tournament-supplies.02-plastic-chess-sets.16-guardian-plastic-chess-sets" : "category2ProdWideTemplate",
				".00028-club-tournament-supplies.02-plastic-chess-sets.18-rogue-plastic-chess-sets" : "category2ProdWideTemplate",
				".00028-club-tournament-supplies.02-plastic-chess-sets.20-protourney-plastic-chess-sets" : "category2ProdWideTemplate",
				".00028-club-tournament-supplies.02-plastic-chess-sets.22-crown-plastic-chess-sets" : "category2ProdWideTemplate",
				".00028-club-tournament-supplies.02-plastic-chess-sets.24-zukert-plastic-chess-sets" : "category2ProdWideTemplate",

				
				
				//Custom unfinished wood chess pieces category
				".00055-unfinished-chess-sets" : "categoryUnfinishedWoodTemplate"
				
				
				
				//4 column category template **DO NOT ADD ANY TEMPLATES TO THIS CATEGORY UNTIL IT HAS BEEN UPDATED/TESTED. IT HAS NOT BEEN UPDATED/TESTED SINCE PRE-201404 UPDATE.**

			},
			vars : {
				hiddenCats : [
					".00012-wood-chess-sets-with-chess-boards.4-model",
					".00014-wood-chess-sets-with-chess-cases.4-model",
					".00010-wood-chess-sets.4-model"
				],
			
				reviewSelector : ".reviewsContainer"
		},
		
		callbacks : {
			init : {
				onSuccess : function(){
					_app.u.dump('BEGIN _app.ext.extension_thechessstore.callbacks.init.onSuccess');
				},
				onError : function() {
					_app.u.dump('BEGIN _app.ext.extension_thechessstore.callbacks.init.onError');
				}
			},
			startExtension : {
				onSuccess : function (){
					$('.contactChat div').empty();
					$('.contactChat div').html('<div id="ciLKQX" style="z-index:100;position:absolute"></div><div id="scLKQX" style="display:inline"></div><div id="sdLKQX" style="display:none"></div><script type="text/javascript">var seLKQX=document.createElement("script");seLKQX.type="text/javascript";var seLKQXs=(location.protocol.indexOf("https")==0?"https":"http")+"://image.providesupport.com/js/1i767mafw092k12e0iz16ztfbo/safe-standard.js?ps_h=LKQX&ps_t="+new Date().getTime();setTimeout("seLKQX.src=seLKQXs;document.getElementById(\'sdLKQX\').appendChild(seLKQX)",1)</script><noscript><div style="display:inline"><a href="http://www.providesupport.com?messenger=1i767mafw092k12e0iz16ztfbo">Live Chat</a></div></noscript>');
					_app.u.dump("contactChat div appended successfully");
					_app.u.dump('BEGIN _app.ext.extension_thechessstore.callbacks.startExtension.onSuccess');								
								
							_app.templates.category2ProdWideTemplate.on('complete.chessstore',function(event,$context,P){
								var $catPage = $context,
								$catList = $("ul[data-app-role='subcategoryList']",$catPage); // don't use .categoryList  add a new, specific class.
								
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
								
								//**COMMENT TO REMOVE AUTO-RESETTING WHEN LEAVING CAT PAGE FOR FILTERED SEARCH**
								
								_app.ext.store_filter.vars.catPageID = $(_app.u.jqSelector('#',P.parentID));  
								
								_app.u.dump("BEGIN categoryTemplate onCompletes for filtering");
								if(_app.ext.store_filter.filterMap[P.navcat])	{
									_app.u.dump(" -> safe id DOES have a filter.");
							
									var $page = $(_app.u.jqSelector('#',P.parentID));
									_app.u.dump(" -> $page.length: "+$page.length);
									if($page.data('filterAdded'))	{} //filter is already added, don't add again.
									else	{
										$page.data('filterAdded',true)
										var $form = $("[name='"+_app.ext.store_filter.filterMap[P.navcat].filter+"']",'#appFilters').clone().appendTo($('.filterContainer',$page));
										$form.on('submit.filterSearch',function(event){
											event.preventDefault()
											_app.u.dump(" -> Filter form submitted.");
											_app.ext.store_filter.a.execFilter($form,$page);
											});
								
										if(typeof _app.ext.store_filter.filterMap[P.navcat].exec == 'function')	{
											_app.ext.store_filter.filterMap[P.navcat].exec($form,P)
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
							
							
							_app.templates.category2ProdWideTemplate.on('depart.chessstore',function(event,$context,P){
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
							
							
							
						_app.templates.categoryTemplate3PanelCat.on('complete.chessstore',function(event,$context,P){
							
							//**COMMENT TO REMOVE AUTO-RESETTING WHEN LEAVING CAT PAGE FOR FILTERED SEARCH**
							
							_app.ext.store_filter.vars.catPageID = $(_app.u.jqSelector('#',P.parentID));
							
							_app.u.dump("BEGIN categoryTemplate3PanelCat onCompletes for filtering");
							if(_app.ext.store_filter.filterMap[P.navcat])	{
								_app.u.dump(" -> safe id DOES have a filter.");
						
								var $page = $(_app.u.jqSelector('#',P.parentID));
								_app.u.dump(" -> $page.length: "+$page.length);
								if($page.data('filterAdded'))	{} //filter is already added, don't add again.
								else	{
									$page.data('filterAdded',true)
									var $form = $("[name='"+_app.ext.store_filter.filterMap[P.navcat].filter+"']",'#appFilters').clone().appendTo($('.filterContainer',$page));
									$form.on('submit.filterSearch',function(event){
										event.preventDefault()
										_app.u.dump(" -> Filter form submitted.");
										_app.ext.store_filter.a.execFilter($form,$page);
										});
							
									if(typeof _app.ext.store_filter.filterMap[P.navcat].exec == 'function')	{
										_app.ext.store_filter.filterMap[P.navcat].exec($form,P)
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
							
							//**COMMENT TO REMOVE AUTO-RESETTING WHEN LEAVING CAT PAGE FOR FILTERED SEARCH**
							
							_app.templates.categoryTemplate3PanelCat.on('depart.chessstore',function(event,$context,P){
								
								_app.ext.store_filter.vars.catPageID.empty().remove();
								
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
							
							
							_app.templates.categoryTemplate4PanelCat.on('complete.chessstore',function(event,$context,P){
							
							//**COMMENT TO REMOVE AUTO-RESETTING WHEN LEAVING CAT PAGE FOR FILTERED SEARCH**
							
							_app.ext.store_filter.vars.catPageID = $(_app.u.jqSelector('#',P.parentID)); 
							
							
							_app.u.dump("BEGIN categoryTemplate4PanelCat onCompletes for filtering");
							if(_app.ext.store_filter.filterMap[P.navcat])	{
								_app.u.dump(" -> safe id DOES have a filter.");
						
								var $page = $(_app.u.jqSelector('#',P.parentID));
								_app.u.dump(" -> $page.length: "+$page.length);
								if($page.data('filterAdded'))	{} //filter is already added, don't add again.
								else	{
									$page.data('filterAdded',true)
									var $form = $("[name='"+_app.ext.store_filter.filterMap[P.navcat].filter+"']",'#appFilters').clone().appendTo($('.filterContainer',$page));
									$form.on('submit.filterSearch',function(event){
										event.preventDefault()
										_app.u.dump(" -> Filter form submitted.");
										_app.ext.store_filter.a.execFilter($form,$page);
										});
							
									if(typeof _app.ext.store_filter.filterMap[P.navcat].exec == 'function')	{
										_app.ext.store_filter.filterMap[P.navcat].exec($form,P)
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
							
							//**COMMENT TO REMOVE AUTO-RESETTING WHEN LEAVING CAT PAGE FOR FILTERED SEARCH**
							
							_app.templates.categoryTemplate4PanelCat.on('depart.chessstore',function(event,$context,P){
								
								_app.ext.store_filter.vars.catPageID.empty().remove();
								
									
							});
							
							
							
							
						
						
							
							
						
						
							
						
						
							
							
							
						
						var categoryPageLoad = false;
						_app.templates.categoryTemplate.on('complete.chessstore',function(event,$context,P){
							
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
						  _app.u.dump("Sidebar functionality has ran");
						  
							}
						});
						
						//Reviews function built to display a message if no reviews are present for this product. 
						_app.templates.productTemplate.on('complete.chessstore',function(event,$thisProduct,P){
							
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
							var $context = $(_app.u.jqSelector('#',P.parentID));
							setTimeout(function(){$(".prodImageClickBlocker", $context).hide();}, 5000);
							
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
						
						
						_app.templates.productTemplate.on('depart.chessstore',function(event,$context,P){
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
						
						_app.templates.companyTemplate.on('complete.chessstore',function(event,$context,P){
							  $('.contactChat div').empty();
							  $('.contactChat div').html('<div id="ciLKQX" style="z-index:100;position:absolute"></div><div id="scLKQX" style="display:inline"></div><div id="sdLKQX" style="display:none"></div><script type="text/javascript">var seLKQX=document.createElement("script");seLKQX.type="text/javascript";var seLKQXs=(location.protocol.indexOf("https")==0?"https":"http")+"://image.providesupport.com/js/1i767mafw092k12e0iz16ztfbo/safe-standard.js?ps_h=LKQX&ps_t="+new Date().getTime();setTimeout("seLKQX.src=seLKQXs;document.getElementById(\'sdLKQX\').appendChild(seLKQX)",1)</script><noscript><div style="display:inline"><a href="http://www.providesupport.com?messenger=1i767mafw092k12e0iz16ztfbo">Live Chat</a></div></noscript>');
							  _app.u.dump("contactChat div appended successfully");
						});
						
						
						_app.templates.cartTemplate.on('complete.chessstore',function(event,$context,P){
							var $context = $(_app.u.jqSelector('#',P.parentID));
							_app.ext.cco.calls.appCheckoutDestinations.init({"callback" : function(rd){
								if(_app.model.responseHasErrors(rd)){
									_app.u.throwMessage(rd);
									}
								else {
									//_app.u.dump("here");
									var $selectList = $('.countrySelectListContainer',$context);
									//_app.u.dump($selectList);
									$selectList.anycontent({"datapointer":rd.datapointer, "templateID" : "countryListTemplate"});
									}
							}},'immutable');
							_app.model.dispatchThis('immutable');
						});
					//END PROJECT INIT CODE
				},
				onError : function (){
					_app.u.dump('BEGIN _app.ext.extension_thechessstore.callbacks.startExtension.onError');
				}
			}
		},
		
		
		
		////////////////////////////////////   ACTION    \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

//actions are functions triggered by a user interaction, such as a click/tap.
//these are going the way of the do do, in favor of app events. new extensions should have few (if any) actions.
		a : {
			
			showCartShippingChart : function(){
				function foo(){
				 //_app.u.dump('begin showCartShippingChart function');
				 $(".cartShipMethods").show();
				}
				setTimeout(foo, 3000);
			},
			
			scrollToReview : function(page){
				//_app.u.dump("scrollToReview Firing");
				//_app.u.dump(page);
				$('html, body').animate({
					scrollTop: $("#readReview", page).offset().top
				}, 2000);
			},
			
		},
		
		
		u : {
			updateCartSummary : function()	{
				var $countrySelector = $(".countrySelector").val();
				_app.u.dump(".countrySelector value before refresh = " + $countrySelector);
				$('#modalCartContents').replaceWith(_app.renderFunctions.createTemplateInstance('cartTemplate','modalCartContents'));
				_app.calls.refreshCart.init({'callback':'translateTemplate','parentID':'modalCartContents'},'immutable');
				
				_app.ext.cco.calls.appCheckoutDestinations.init({"callback" : function(rd){
					if(_app.model.responseHasErrors(rd)){
						//_app.u.throwMessage(rd);
						}
					else {
						//_app.u.dump("here");
						//_app.u.dump($selectList);
						var $selectList = $('.countrySelectListContainer');
						$selectList.anycontent({"datapointer":rd.datapointer, "templateID" : "countryListTemplate"});
						}
				}},'immutable');
				//_app.model.dispatchThis('immutable');
				
				function foo(){
					_app.u.dump(".countrySelector value after refresh = " + $countrySelector);
					$('.countrySelector').val($countrySelector);
					_app.u.dump($('.countrySelector').val());
				}
				setTimeout(foo, 3000);
				
//don't set this up with a getShipping because we don't always need it.  Add it to parent functions when needed.
				},
				
				checkouterrorclickblock : function() {
					$(".checkoutClickBlocker").hide();
					$(".checkoutClickBlockerText").hide();
				},
				
				fetchTemplateForPage : function(navcat){
				var r = false;
				if(_app.ext.extension_thechessstore.catTemplates[navcat]){
					r = _app.ext.extension_thechessstore.catTemplates[navcat];
					}
				else if((/\.mlb\.[^.]+\.[^.]+/).test(navcat)){
					r = 'categoryTemplatePlayer';
					}
				else if(navcat.indexOf('.aa.')==0){
					r = 'categoryTemplateHTML';
					}
				
				return r;
				},
				
				paypalCheckoutPopup : function() {
					dump("paypalCheckoutPopup in custom extension ran because paypal payment option was selected.");
					
				},
				
				paypalCheckoutPopup : function() {
					var $parent = $(".modalPrerender");
					$parent.empty().tlc({verb:"transmogrify", templateid:"paypalCheckoutNoticeTemplate"});
					window.scrollTo(0,0); 
					$parent.dialog({'modal':'true', 'title':'','width':470, height:400, 'dialogClass' : 'paypalNoticeModal',buttons: {Close: function() {$( this ).dialog( "close" );}}});
				}
				
		},
		
		
		
		e : {
			closeModal : function($ele,p)	{
				$(".paypalNoticeModal").dialog('close');
			},
			
			paypalModalCheckout : function($ele,p)	{
				$(".paypalModalCheckoutTransferMessage").show();
				$(document.body).showLoading({'message':'Obtaining secure PayPal URL for transfer...'});
				_app.ext.cco.calls.cartPaypalSetExpressCheckout.init({'getBuyerAddress':1, '_cartid':_app.model.fetchCartID(),'useMobile':($(document.body).width() < 500 ? 1 : 0)},{'callback':function(rd){
					$(document.body).hideLoading();
					if(_app.model.responseHasErrors(rd)){
						$('#globalMessaging').anymessage({'message':rd});
						}
					else	{
						if(_app.data[rd.datapointer] && _app.data[rd.datapointer].URL)	{
							document.location = _app.data[rd.datapointer].URL+'&useraction=commit'; //commit returns user to website for order confirmation. otherwise they stay on paypal.
							}
						else	{
							$('#globalMessaging').anymessage({"message":"In paypalecbutton render format, dispatch to obtain paypal URL was successful, but no URL in the response.","gMessage":true});
							}
						}
					}});
				$(this).addClass('disabled').attr('disabled','disabled');
				_app.model.dispatchThis('immutable');

			}
		},
		
		
		
		
		renderFormats : {
			//The render format for determining if a product is a component. Adds a class of assembly to these products that can be used to stylize them.
			addassemblyclass : function($tag, data){
				if(data.value.stid[0] == '%' || data.value.asm_master) {
					$tag.addClass('assembly');
				}
			},//addassemblyclass
				

			hidenonappcat : function($tag, data) {
				if($.inArray(data.value.path, _app.ext.extension_thechessstore.vars.hiddenCats) != -1){
					 $tag.hide();
					 _app.u.dump('Category item matches list item. Removing from list');
				}
				else{
					_app.u.dump('Category item does not match list, ending hide check');
				}
			},//hidenonappcat
			
			
			countriesAsOptions : function($tag,data)	{
//				_app.u.dump("BEGIN _app.ext.cco.renderFormats.countriesAsOptions");
//				_app.u.dump(" -> Country: "+data.value);
				var r = '';
				//function setCountrySelector(){
					 var L = _app.data.appCheckoutDestinations['@destinations'].length;
					 for(var i = 0; i < L; i += 1)	{
						r += "<option value='"+_app.data.appCheckoutDestinations['@destinations'][i].ISO+"' ";
						if(data.value == _app.data.appCheckoutDestinations['@destinations'][i].ISO)	{
							r += " selected='selected' ";
							}
						r += ">"+_app.data.appCheckoutDestinations['@destinations'][i].Z+"</option>";
						}
					
					$tag.html(r);
				//}
				//setTimeout(setCountrySelector, 3000);
//				_app.u.dump(" -> number of countries = "+L);
				
			},//countriesAsOptions
			
			priceretailsavingsdifferenceprodlistitem : function($tag,data)	{
					dump("$tag = ");
					dump($tag);
					dump("data = ");
					dump(data);
					var o; //output generated.
					var pData = _app.data['appProductGet|'+data.value]['%attribs'];
					//use original pdata vars for display of price/msrp. use parseInts for savings computation only.
					var price = Number(pData['zoovy:base_price']);
					var msrp = Number(pData['zoovy:prod_msrp']);
					if(price > 0 && (msrp - price > 0))	{
						o = _app.u.formatMoney(msrp-price,'$',2,true)
						o = "You save: " + o;
						$tag.append(o);
						}
					else	{
						$tag.hide(); //if msrp > price, don't show savings because it'll be negative.
						}
				}, //priceRetailSavings
				
				priceretailsavingspercentageprodlistitem : function($tag,data)	{
					var o; //output generated.
					var pData = _app.data['appProductGet|'+data.value]['%attribs'];
					//use original pdata vars for display of price/msrp. use parseInts for savings computation only.
					var price = Number(pData['zoovy:base_price']);
					var msrp = Number(pData['zoovy:prod_msrp']);
					if(price > 0 && (msrp - price > 0))	{
						var savings = (( msrp - price ) / msrp) * 100;
						o = savings.toFixed(0)+'%';
						o = "(" + o + ")";
						$tag.append(o);
						}
					else	{
						$tag.hide(); //if msrp > price, don't show savings because it'll be negative.
					}
				}, //priceRetailSavings	
				
				showhidearea : function($tag,data)	{
						if(data.value == null || data.value == ""){
							$tag.hide();
						}
						else{
							$tag.show();
						}	
				},//showhidearea
				
				outofstockprodhide : function($tag,data)	{					
					pid = data.value;
					pidData = _app.data['appProductGet|'+pid];
					//dump("outofstockprodhide pidData =");
					//dump(pidData);
					pid = data.value;
					inv = _app.ext.store_product.u.getProductInventory(pidData);
					//dump("outofstockprodhide inv =");
					//dump(inv);
					//dump("outofstockprodhide pid =");
					//dump(pid);
					if(inv >= 1){
						//dump("Inventory is 1 or higher. Show product")
					}
					else{
						$($tag).hide();
						//dump("Inventory is 0. Hide product")
					}
					
				},//outofstockprodhide
								
				currencymsrp : function($tag,data)	{
					//dump("Begin currency product list format");
					//dump(data);
					//dump($tag);
					
					var r = "<span class='msrpPrefix'>MSRP:</span> $"+data.value;
					//dump(r);
					var cents = r.split(".")
					//dump(cents[1]);
					if(cents[1] == undefined){
						//dump ("No cents present. Add a .00")
						r = r + "<span class='cents'>.00</span>";
					}
					else if(cents[1].length === 1){
						//dump(cents[1].length);
						//dump ("cents only has one value. Adding a zero.")
						var pricePieces = r.split(".");
						r = pricePieces[0] + "<span class='cents'>.00</span>";
					}
					else if(cents[1] == ""){
						//dump("Price value has a decimal but no cent values. Fixing this shenanigans");
						var pricePieces = r.split(".");
						r = pricePieces[0] + "<span class='cents'>.00</span>";
					}
					//dump(r);
					$tag.append(r);
				}, //currencymsrp
				
				showhidearea : function($tag,data)	{
					//dump("showhidearea data object = ");
					//dump(data);
					if(data.value == null || data.value == ""){
						//dump("data.value = " + data.value + ". Hiding the element.");
						$tag.hide();
					}
					else{
						//dump("data.value = " + data.value + ". Showing the element.");
						$tag.show();
					}	
				},//showhidearea
				
				priceretailsavingsdifferenceprodlistitem : function($tag,data)	{
					var o; //output generated.
					dump(data);
					var pData = _app.data['appProductGet|'+data.value]['%attribs'];
					//use original pdata vars for display of price/msrp. use parseInts for savings computation only.
					var price = Number(pData['zoovy:base_price']);
					var msrp = Number(pData['zoovy:prod_msrp']);
					if(price > 0 && (msrp - price > 0))	{
						o = _app.u.formatMoney(msrp-price,'$',2,true)
						o = "You save: " + o;
						$tag.append(o);
						}
					else	{
						$tag.hide(); //if msrp > price, don't show savings because it'll be negative.
					}
				}, //priceretailsavingsdifferenceprodlistitem
				
				priceretailsavingspercentageprodlistitem : function($tag,data)	{
					var o; //output generated.
					var pData = _app.data['appProductGet|'+data.value]['%attribs'];
					//use original pdata vars for display of price/msrp. use parseInts for savings computation only.
					var price = Number(pData['zoovy:base_price']);
					var msrp = Number(pData['zoovy:prod_msrp']);
					if(price > 0 && (msrp - price > 0))	{
						var savings = (( msrp - price ) / msrp) * 100;
						o = savings.toFixed(0)+'%';
						o = "(" + o + ")";
						$tag.append(o);
						}
					else	{
						$tag.hide(); //if msrp > price, don't show savings because it'll be negative.
					}
				}, //priceretailsavingspercentageprodlistitem
				
					
				freeshippingindicator : function($tag,data)	{
					//dump("data.value = ");
					//dump(data.value);
					if(data.value == "1"){
						//dump("data.value = "+ data.value+ ". Showing free shipping.");
						$tag.show();
					}
					else{
						//dump("data.val does not = 1. Keep indicator hidden.");
						$tag.hide();
					}
				}, //freeshippingindicator
				
				
				dumpCheck : function($tag,data){
					dump("This " + $tag + " event has fired.");
				}
		}
	}
	return r;
}