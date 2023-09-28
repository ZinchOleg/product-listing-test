"use client"
import React from 'react'
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";


export const Provider = ({ children }: {children : React.ReactNode}) => {
  const client = new ApolloClient({
    uri: "http://localhost:4000/",
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
      { children }
    </ApolloProvider>
  )
}
