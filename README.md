# GraphQL Bookshelf

![GraphQL](https://img.shields.io/badge/GraphQL-E10098?logo=graphql&logoColor=white)
![Apollo](https://img.shields.io/badge/Apollo_Server-311C87?logo=apollographql&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-Express--free-339933?logo=nodedotjs&logoColor=white)

API **GraphQL** de biblioteca con Apollo Server 4: queries, mutations y filtros.

## Arranque
```bash
npm install
npm start
```
Playground: http://localhost:4110

## Queries de ejemplo
```graphql
query {
  books(available: true) {
    id
    title
    author
    tags
  }
}

mutation {
  addBook(title: "Working Effectively with Legacy Code", author: "Feathers", tags: ["legacy"]) {
    id
    title
  }
}
```

## Autora
**Juliana Chantre Astudillo** · [GitHub](https://github.com/jchantre-jpg)
