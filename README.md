# Learning Jest with Enzyme
Learning how to test React Components with Enzyme and Jest

## Install Enzyme and Configure Jest

Para ter tudo funcionando, algumas configurações são necessárias. É preciso instalar alguns plugins do babel, criar um script específico no package.json, e dependendo de qual versão do Jest estamos utilizando, precisamos adicionar algumas configurações do Jest no nosso package.json.

Lista de dependências:

    "babel-core"
    "babel-jest" 
    "babel-preset-env"  
    "babel-preset-react" 
    "jest" 
    "react" ,
    "react-dom",
    "enzyme"

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