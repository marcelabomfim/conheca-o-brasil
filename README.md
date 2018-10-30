![Open Source Love](https://img.shields.io/badge/Open%20Source-%E2%9D%A4-red.svg)
![GitHub](https://img.shields.io/github/license/marcelabomfim/conheca-o-brasil.svg)
![GitHub forks](https://img.shields.io/github/forks/marcelabomfim/conheca-o-brasil.svg)
![GitHub issues](https://img.shields.io/github/issues/marcelabomfim/conheca-o-brasil.svg)
![GitHub pull requests](https://img.shields.io/github/issues-pr/marcelabomfim/conheca-o-brasil.svg)
![GitHub contributors](https://img.shields.io/github/contributors/marcelabomfim/conheca-o-brasil.svg)

# Conheça o Brasil

Uma lista colaborativa de locais para se conhecer no Brasil

## Como contribuir

Crie uma pasta com o UF do estado e um JSON com o nome da cidade (caso ainda não exista), no json da cidade indique o caminho da imagem, título e pequena decrição do local.

Mais detalhes [aqui](/CONTRIBUTING.md)

Exemplo: (adicionar ao final do arquivo `src/assets/data/locals.json`)
```
[
  ...
  {
    "uf": "PR",
    "cidade": "Curitiba",
    "imagem": "assets/images/nome-da-imagem.jpg",
    "titulo": "Um lugar legal",
    "descricao": "uma descrição legal"
  }
]
```

## Crie seu primeiro pull request

- [Fork este repositório](https://help.github.com/articles/fork-a-repo/)
- Clone o repositório forcado, da sua conta
- Adicione a sua contribuição no respectivo arquivo de estado/cidade
- Commit suas alterações com uma menasgem apropriada, exemplo: `Adicionado <nome do local> em <cidade>, <uf>`
- [Crie o seu pull request](https://help.github.com/articles/creating-a-pull-request-from-a-fork/) e aguarde nossa validação :)
