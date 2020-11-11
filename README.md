# Roman Numerals

## Descrição
    ### Parte 1
        Para converter de número para numeral romano criei uma lista para mapear os números para os numerais romanos, lista = [1 - I, 4 - IV, 5 - V ... ].
        Dado um número de entrada Ex: 32, o algoritmo procura pelo primeiro número menor ou igual a entrada no array de numerais romanos.
        No caso do exemplo, seria o 10, primeiro número no array menor que 32, que corresponde ao numeral romano X. O numeral retornado da lista é incluído numa variável saida = "X". O algoritmo subtrai a entrada do número encontrado no array 32 - 10 = 22. 
        Repete o mesmo processo para o número 22. E assim até a entrada ser 0, no final da operação a variável de saída contendo os numerais romanos.
        
    ### Parte 2
        Para converter de numeral romano para número, utilizei a mesma lista da Parte 1.
        Dado um numeral de entrada Ex: XLII, o algoritmo procura no array pelo número correspondente dos dois primeiros numerais, no caso do exemplo X e L. Retorna os respectivos números da lista, 10 e 50. Caso o primeiro número seja menor que o segundo, então é feita uma subtração do total - primeiro numero, senão o algoritmo faz a soma do total + primeiro número. O processo é repetido para os próximos numerais, até o tamanho do numeral. No final é retornado o total.


## Tecnologias utilizadas
    NodeJS v12.18.3
    Jest v26.6.3
    Npm v6.14.6

## Instalação
Para instalar as dependências, executar o comando abaixo:
```
# npm i
```

Para rodar a aplicação:

```
# npm start
```

Para rodar os testes:
```
# npm test
```

## Endpoints
### Parte I - Converter de número para numeral romano

http://localhost:3000/convertToRomanNumerals

#### Exemplo:

Entrada:
```
# {"arabic_number": 2888} 
```
Saída:
```
# {"numeral": "MMDCCCLXXXVIII"}
```



### Parte II - Converter de numeral romano para número

http://localhost:3000/convertToArabicNumbers
#### Exemplo:

Entrada:
```
{"roman_numeral" : "MCMXCIV"}
```

Saída:
```
{"arabic_number": 1994}
```
