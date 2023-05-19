import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'; 

const httpLink = new HttpLink({
    uri: "http://localhost:3000/api/graphql",
    credentials: "include",
})

export const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(), 
})