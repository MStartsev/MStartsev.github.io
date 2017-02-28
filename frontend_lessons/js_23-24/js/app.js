 requirejs.config({
 	paths: {
 		'jquery': 'jquery.min',
 		'BEMt': 'bemt',
 		'Model': 'Model',
 		'View': 'View',
 		'Controller': 'Controller',
 		'script': 'script'


 	},
 	shim: {
 		'jquery': {
 			exports: 'jquery'
 		},
 		'BEMt': {
 			exports: 'BEMt'
 		},
 		'Model': {
 			exports: 'Model'
 		},
 		'View': {
 			exports: 'View'
 		},
 		'Controller': {
 			exports: 'Controller'
 		},
 		'script': {
 			exports: 'script'
 		}

 	}
 });

 require(
 	[
 		'jquery',
 		'BEMt',
 		'Model',
 		'View',
 		'script',
 		'Controller'
 		
 	]
 	);