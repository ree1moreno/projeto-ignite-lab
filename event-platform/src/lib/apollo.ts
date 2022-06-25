import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4u2hjnn0hv001t713ba7zzc/master',
  cache: new InMemoryCache()
})
