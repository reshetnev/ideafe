'use strict';
/**
 * @name ideaApp
 *
 * @description
 * A main module.
 */
 
angular
	.module('ideaApp', [
		'ideaDirectives',
		'ideaControllers',
		'ideaFilters',
		'ideaServices'
	]);
	
//	angular.module('ideaDirectives', []); // set Directives
	angular.module('ideaServices', []); // set Services
	angular.module('ideaControllers', []); // set Ctrls
//	angular.module('ideaFilters', []); // set Filters
