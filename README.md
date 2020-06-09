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

## Understand the Different Accepted Selectors in Enzyme

Existem diferentes tipos validos de seletores.

* por elemento | ex: ```expect(wrapper.find('h1').text()).toBe('Welcome')```
* por classe | ex: ```expect(wrapper.find('.title').text()).toBe('Welcome')```
* por ID | ex: ```expect(wrapper.find('#title').text()).toBe('Welcome')```
* por atributo | ex: ```expect(wrapper.find('[href=""]').text()).toBe('Welcome')```
* por combinação de todos | ex: ```expect(wrapper.find('a[href=""]').text()).toBe('Welcome')```
* por seletores contextuais | ex: ```expect(wrapper.find('.title > . subtitle').text()).toBe('Welcome')```, aleem de >, + e ~
* por props | ex: ```expect(wrapper.find('[text="Some title"]').text()).toBe('Welcome')```

## Test Enzyme Rendered Components with Jest Snapshots

Precisamos instalar e importar a dependência `enzyme-to-json` para termos um snapshot mais limpo e legível.

`npm install --save-dev enzyme-to-json`

```js 
import toJson from 'enzyme-to-json'
```

```js
it('matches the snapshot', () => {
  const wrapper = render(<App />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
```

## Test React Component Props with Enzyme and Jest

Quando testamos props de componentes com o Enzyme, é importante entendermos se queremos testar a instância atual do componente ou se queremos testar o retornado na tag html.

Exemplo de instância com a prop `address`: 
```js
<Link address='www.google.com' />
```

Exemplo de propridade da tag, no caso o `href`:
```js
<a href={this.props.address}>Click</a>
```

Para modificar o valor de uma prop, podemos usar `setProps`, que recebe um objeto com o novo valor da prop que será passada ao componente.

```js
...
wrapper.setProps({ hide: true });
```

## Fully Render React Components with Enzyme

Full DOM rendering é ideal para casos onde temos componentes que interagem com a DOM API ou requerem os ciclos de vida do React.

Para utilizar o método `mount`do Enzyme precisamos instalar a lib `jsdom`.

O método `mount` tem dois parametros adicionais de configuração: `context` (objeto de contexto que queremos passar para o componente) e `attachTo` (quando queremos "acoplar" nosso componente com um elemento específico do DOM). 

## Test Simulated Event Handlers with Enzyme

Às vezes nossos componentes usam manipuladores de eventos para atualizar o estado. Com o Enzyme conseguimos simular esses eventos utilizando o método `simulate`.

```js
button.simulate('click')
```

```js
input.simulate('change', {currentTarget: {value: 'Juliano'}})
```