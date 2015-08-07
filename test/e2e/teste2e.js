describe("Teste de operação binária de soma", function(){
	it("Espero que a minha função some dois números inteiros", function(){
		var driver = browser.driver;

		driver.get('http://localhost:3000/');
		
		driver.findElement( by.name( "valorUm" ) ).sendKeys("1");
		driver.findElement( by.name( "valorDois" ) ).sendKeys("-1");
		driver.findElement( by.name( "valorTres" ) ).sendKeys("0");
		driver.findElement( by.name( "valorQuatro" ) ).sendKeys("1");
		driver.findElement( by.id( "enviar" ) ).click();


		driver.findElement( by.id( "result" ) ).getText().then(function (text) {
			expect(text).toEqual("Dados validos");
		});

	});
});