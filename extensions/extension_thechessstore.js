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
				".00016-chess-boards.00010-natural-wood-chess-boards" : "categoryTemplate3PanelCat",
				".00034-chess-books.00010-everyman-chess-books" : "categoryTemplate3PanelCat",
				".00034-chess-books" : "categoryTemplate3PanelCat",
				".00016-chess-boards.00010-natural-wood-chess-boards.00010-walnut-maple-deluxe-chess-boards" : "categoryTemplate3PanelCat"
			},
			
			reviewSelector : ".reviewsCont"
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
			}
		}
	}
	return r;
}