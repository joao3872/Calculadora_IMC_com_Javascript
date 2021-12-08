function calculo() {
				// captura e armazena o valor em uma variável...
				var valor1 = document.querySelector('input#num1')
				var valor2 = document.querySelector('input#num2')
				var classifica = document.querySelector('p#classificacao')
				var valorResultado = document.querySelector('input#indice')
				
				// Converte o valor de (valor1) e (valor2) para Number, e armazena em uma nova variável.
				// Colocando Number, vai identificar, quando o número digitado é inteiro ou flutuante...
				var peso2 = Number(valor1.value)
				var altura2 = Number(valor2.value)
				
				// verifica se a altura digitada é um valor inteiro ou flutuante. Se for Int, vai dividir por 100, senão mantém a altura...
				if(altura2 === parseInt(altura2)) {
								var altura = altura2 / 100
				} else {
								var altura = altura2
								altura = Math.floor(altura * 100) / 100
								// multiplica a altura por 100, e depois dividi para o resultado ser um número flutuante.
								// E possui o uso do método Math.floor na fórmula, para arredondar para baixo, assim o número digitado, será mantido.
								altura = valor2.value = `${altura.toFixed(2)}`
								/* pegando o valor do input da altura, basta adicionar o toFixed(2), assim, as casas decimais que vem depois da segunda casa, serão ignorados, já que foi feito o uso do Math.floor...*/
				}
				
				if(peso2 === parseInt(peso2)) {
								var peso = peso2
				} else {
								var peso = peso2
								peso = Math.floor(peso * 100) / 100
								peso = valor1.value = `${peso}`
				}
														
					
				// fórmula imc.			    
				const imc = peso / (altura * altura)
				// joga o resultado de imc com uma casa decimal, dentro do valor do input...
				resultado = valorResultado.value = `${imc.toFixed(1)}`

				// serve para apagar o resultado, caso, seja digitado só a altura.
				if (imc === 0) {
								document.querySelector("input#indice").value = '';
				}
								    								    

				// declarar variável, para pode trocar o seu valor, de acordo com a condição satisfeita, no bloco abaixo.
				let classificacao = ''
								    
				if (imc < 18.5) {
								classificacao = 'Abaixo do Peso.'
				} else if (imc <= 24.9) {
								classificacao = 'Peso Normal.'
				} else if (imc <= 29.9) {
								classificacao = 'Sobrepeso.'
				} else if (imc <= 34.9) {
							 classificacao = 'Obesidade Grau I'
				} else if (imc <= 39.9) {
								classificacao = 'Obesidade Grau II'
				} else {
								classificacao= 'Obesidade Mórbida. Cuidado.'
				}
				
				// confere, se o valor de peso ou altura, é igual a vázio. se for vai pedir para digitar ambas...
				if (valor1.value == '' || valor2.value == '') {
								classificacao = 'Digite o seu Peso e sua Altura.'
				}
				
				
				// coloca a classificação, na tag p, e mostra na tela.
				classifica.textContent = `${classificacao}`
				// coloca o resultado, dentro do terceiro input, e mostra o resultado dentro do mesmo.
				valorResultado.textContent = `${resultado}`
}
