var HomeController = require("../controllers/home")();
var expect = require('chai').expect;

require('jasmine-expect');

describe("HomeController", function() {
	describe( 'construtor', function(){
		it( 'Deveria retornar um objeto', function( done ){
			var valorEsperado = 'object';
			var valorRetornado = typeof HomeController;

			expect( valorRetornado ).to.equal( valorEsperado );
			done();
		});
	})
	describe( "Web.Index", function() {
		it( "Espero receber como retorno a view 'index' e o status vazio", function() {
			
			var response = criaResponse();
			var request = {};
			
			HomeController.web.index( request, response );
			
			expect( response.view ).to.equal( "index" );
			expect( response.object.status ).to.equal('');
		});	
	})
	
});

function criaResponse() {
	return {
	   view : "",
	   object : {},
	   
	   render : function( view, object ) {
		   this.view = view;
		   this.object = object;
	   },
	   
	   redirect : function( view ) {
		   this.view = view;
	   }
   };	
};
function criaRequest(){
	return { 
	  body: 
	   { 
		}
	}
};
