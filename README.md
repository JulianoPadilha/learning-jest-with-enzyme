# Learning Jest with Enzyme
Learning how to test React Components with Enzyme and Jest

## Install Enzyme and Configure Jest

Para ter tudo funcionando, algumas configurações são necessárias. É preciso instalar alguns plugins do babel, criar um script específico no package.json, e dependendo de qual versão do Jest estamos utilizando, precisamos adicionar algumas configurações do Jest no nosso package.json.

Lista de dependências:

    "@babel/core",
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/runtime",
    "babel-jest",
    "jest",
    "react",
    "react-dom"

_PS: Para facilitar o processo de configuração no estudo, é possível utilizar o create-react-app, que já vem com todas as dependências instaladas._
 
## Test Against Different React Releases with Enzyme

Alguns releases do React exigem alguns setups diferentes para o Enzyme.

Neste caso, se fez necessário instalar a dependência `enzyme-adapter-react-16`. E configurar no arquivo de test o uso do Adapter.

```js
...
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
```

## Shallow Render a React Component with Enzyme

O shallow é útil quando queremos testar os componentes como uma unidade individual. Isso ajuda a garantir que os testes não estão indiretamente dando asserting em comportamentos de componentes filhos. 

Além disso, podemos passar algumas configurações para o shallow, como `context` e `disableLifecycleMethods`.

_PS: Podemos usar o método `debug()` para debugar o nosso componentes._

```js
console.log(wrapper.debug());
```

```
Output no terminal

<div>
  <h1>
    React App for testing with Jest and Ezyme
  </h1>
  <Test />
</div>
```

## Find Nodes from a Shallow Rendered Component

Para encontrar nós dentro de um componente, podemos utilizar o `.find` combinado com outros métodos como `exists()`, `children()`, `text()` e `hasClass`, etc..

Com isso podemos testar se os elementos renderizados estão corretos.