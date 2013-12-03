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
An extension for linkconnector conversion tracking. 

This extension is untested.

*/

var partner_pepperjam = function() {
	var r= {
		vars : {

		},
		
		callbacks : {
			init : {
				onSuccess : function(){
					//nothing needs to be loaded except on conversion.
					return true;
				},
				onError : function() {
					app.u.dump('An error occurred with partner_pepperjam. The plugin was not added to checkout.');
				}
			},
			
			startExtension : {
				onSuccess : function (){
					if(app.ext.myRIA && app.ext.myRIA.template){
						app.ext.orderCreate.checkoutCompletes.push(function(P){
							var s = document.createElement("script");
							var order = app.data['order|'+P.orderID];
							app.u.dump("Begin pepper Jam extension. order = ");
							app.u.dump(order);
							/*
							s.type = "text/javascript";
							s.src = "https://t.pepperjamnetwork.com/track?PID=6873&INT=ITEMIZED&ITEM1=<ITEM1ID>&ITEM2=<ITEM2ID>&QTY1="+order.sum.items_count+"&QTY2="+order.sum.items_count+"&AMOUNT1="+order.sum.items_total+"&AMOUNT2="+order.sum.items_total+"&OID="+P.orderID+"' width='1' height='1' frameborder='0'></iframe>"
							*/
							$("head").append(s);
							
						});
					} else	{
						setTimeout(function(){app.ext.partner_pepperjam.callbacks.startExtension.onSuccess()},250);
					}
				},
				onError : function (){
					app.u.dump('BEGIN app.ext.partner_pepperjam.callbacks.startExtension.onError');
				}
			}
		}
	}
	return r;
}