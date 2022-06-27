## passo a passo aula 05

1. nessa aula o código já tá praticamente pronto, apenas são feitas alguma melhorias

2. uso do <a href="https://www.graphql-code-generator.com/">GraphQl code-gen</a>, que serve para melhorar as querys dentro do código e diminuir a chance de ocasionar bugs, além de tirar a necessidade de criar a tipagem da resposta de cada query, pois ela já está dentro do graphcms. Para isso, instalar:
   <br>
   `npm i @graphql-codegen/cli -D`
   <br>
   `npm i @graphql-codegen/typescript @graphql-codegen/typescript-operations @graphql-codegen/typescript-react-apollo -D`

3. cria arquivo de configuração do graphQl code-gen

4. cria pasta para colocar todas as queries e mutations e tira as querys dos arquivos .tsx e coloca cada uma em um arquivo .graphql

5. adiciona script do codegen no package.json após terminar as configurações, esse script gera o arquivo generates.ts com as respostas das nossa queries e mutations

6. atualiza os componentes para fazer as requisições com os novos hooks criados pelo codegen

7. faz o deploy pela<a href="https://vercel.com/"> Vercel</a>
