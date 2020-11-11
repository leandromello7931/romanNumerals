# Roman Numerals

## Descrição


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
