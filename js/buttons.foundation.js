/*! Foundation integration for DataTables' Buttons
 * ©2015 SpryMedia Ltd - datatables.net/license
 */

(function( factory ){
	if ( typeof define === 'function' && define.amd ) {
		// AMD
		define( ['jquery', 'datatables', 'datatables-buttons'], factory );
	}
	else if ( typeof exports === 'object' ) {
		// Node / CommonJS
		module.exports = function ($, dt) {
			if ( ! $ ) { $ = require('jquery'); }
			factory( $, dt || $.fn.dataTable || require('datatables') );
		};
	}
	else if ( jQuery ) {
		// Browser standard
		factory( jQuery, jQuery.fn.dataTable );
	}
}(function( $, DataTable ) {
'use strict';


$.extend( true, DataTable.Buttons.defaults, {
	dom: {
		container: {
			tag: 'ul',
			className: 'dt-buttons button-group'
		},
		buttonContainer: {
			tag: 'li',
			className: ''
		},
		button: {
			tag: 'a',
			className: 'button small'
		},
		buttonLiner: {
			tag: null
		},
		collection: {
			tag: 'ul',
			className: 'dt-button-collection f-dropdown open',
			button: {
				tag: 'a',
				className: 'small'
			}
		}
	}
} );

DataTable.ext.buttons.collection.className = 'buttons-collection dropdown';


return DataTable;
}));
