# Como contribuir

## Estados

Na pasta `estados` teremos uma nova pasta para cada estado do Brasil, com a UF que representa o estado, exemplo: 
```
/estados/PR - para dados do estado do Paraná
/estados/SP - para dados do estado de São Paulo
```

## Cidades

Dentro da pasta de cada estado teremos um arquivo json para cada cidade, com todas as letras maiúsculas, sem espaços ou caracteres especiais, exemplo:
```
/estados/PR/curitiba.json - para a cidade de Curitiba/PR
/estados/SP/sao-paulo.json - para a cidade de São Paulo/PR
```

## Imagens

A idéia do projeto é fazer uma coleção de fotos com locais interessantes para se conhecer no Brasil, portanto você pode indicar a url de uma imagem da internet ou fazer o upload de suas próprias imagens na pasta `imagens`, com todas as letras maiúsculas, sem espaços ou caracteres especiais, exemplo:
```
/imagens/museu-do-olho-curitiba-pr.jpg
/imagens/museu-do-olho-sao-paulo-sp.jpg
```

## Locais

Para cada cidade teremos um json com a estrutura abaixo, onde *locais* será um array de objetos com imagem, título e descrição, exemplo:
```
{
  "locais": [
    {
      "imagem": "/imagens/nome-do-local-cidade-uf.jpg",
      "titulo": "Nome do local",
      "descricao": "Uma pequena descrição sobre o local"
    },
    {
      "imagem": "/imagens/nome-do-local-cidade-uf.jpg",
      "titulo": "Nome do local",
      "descricao": "Uma pequena descrição sobre o local"
    }
  ]
}
```