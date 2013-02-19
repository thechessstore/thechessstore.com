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

var store_category_subcatlist = function() {
	var r= {
		vars : {
			selector : ".subcatOptions"
		},
		
		callbacks : {
			init : {
				onSuccess : function(){
					app.u.dump('BEGIN app.ext.store_category_subcatlist.callbacks.init.onSuccess');
				},
				onError : function() {
					app.u.dump('BEGIN app.ext.store_category_subcatlist.callbacks.init.onError');
				}
			},
			startExtension : {
				onSuccess : function (){
					app.u.dump('BEGIN app.ext.store_category_subcatlist.callbacks.startExtension.onSuccess')
				},
				onError : function (){
					app.u.dump('BEGIN app.ext.store_category_subcatlist.callbacks.startExtension.onError');
				}
			}
		}
	}
	return r;
}