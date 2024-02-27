# Otimização de assets: algumas abordagens

Nesse repositório você pode encontrar exemplos de algumas abordagens para otimização de assets:
sejam eles imagens, css, javascript e o que mais for necessário.

## Exemplos

Atualmente esse repositório conta com 3 exemplos/demonstrações de abordagens para otimização de assets,
principalmente imagens, css e javascript.

### Com Webpack

Webpack é um _bundler_, ou seja, faz o empacotamento dos arquivos de um projeto, podendo realizar alguns processamentos.

No exemplo [with-webpack](/packages/with-webpack/) são utilizados plugins para fazer o _bundling_ de um projeto vanilla HTML, CSS e Javascript, além da compressão de imagens na pasta `src/assets`.

Você pode ver como é feita essa configuração no arquivo [`webpack.config.js`](/packages/with-webpack/webpack.config.js).

Para testar a configuração rode:

```bash
npm install

npx -w packages/with-webpack webpack --config webpack.config.js
```

E veja o resultado na pasta [`dist`](/packages/with-webpack/dist/).

#### Docs

- https://webpack.js.org/plugins/image-minimizer-webpack-plugin/
- https://github.com/webdiscus/html-bundler-webpack-plugin
- https://webpack.js.org/plugins/terser-webpack-plugin/

### Com Vite

Vite é uma ferramenta completa para desenvolvimento de aplicações frontend.

Ele utiliza o Rollup, um _bundler_ performático e extensível.

No exemplo [with-vite](/packages/with-vite/) é utilizado um plugin para fazer a compressão de imagens utilizadas.

Você pode ver como é feita a utilização desse plugin no arquivo [`vite.config.js`](/packages/with-vite/vite.config.js).

Para testar a configuração rode:

```bash
npm install # Caso ainda não tenha rodado

npm run build -w packages/with-vite

npm run preview -w packages/with-vite
```

Você verá um log do plugin funcionando e posteriamente poderá abrir a aplicação no navegador, normalmente no [localhost:4173](http://localhost:4173).

#### Docs

- https://github.com/FatehAK/vite-plugin-image-optimizer

### No Nextjs

NextJs é um framework web fullstack que utiliza a biblioteca React para construção da UI.

Por ser uma ferramenta completa, já vem com diversas otimizações por padrão e quase nada precisa ser feito para entregar aplicações e sites performáticos.

O Next disponibiliza um componente especializado para a renderização performática de imagens: `<Image />` importado do módulo `next/image`.

Além disso, permite o _import_ estático de imagens que são comprimidas, processadas em diferentes tamanhos e formatos, que são usados pelo componente `<Image />` para entregar carregamentos rápidos desse tipo de asset sem dificuldade.

Você pode ver como o componente `<Image />` está sendo usado no exemplo em [`src/app/page.js`](/packages/in-nextjs/src/app/page.js).

Para testar a configuração rode:

```bash
npm install # Caso ainda não tenha rodado

npm run build -w packages/in-nextjs

npm run start -w packages/in-nextjs
```

Você verá um alguns logs e posteriamente poderá abrir a aplicação no navegador, normalmente no [localhost:3000](http://localhost:3000).

#### Docs

- https://nextjs.org/docs/app/api-reference/components/image
- https://nextjs.org/docs/app/building-your-application/optimizing
- https://nextjs.org/docs/app/building-your-application/optimizing/images

### Manualmente

Os exemplos nesse repositório utilizam ferramentas que automatizam o processo de compressão de imagens e arquivos CSS e Javascript.

É possível também fazer esse processo manualmente, em qualquer tipo de projeto ou aplicação, utilizando ferramentas externas.

Alguns exemplos:

- https://www.toptal.com/developers/javascript-minifier
- https://www.toptal.com/developers/cssminifier
- https://imagecompressor.com/
- https://squoosh.app/


## Referências

- https://web.dev/learn/performance/image-performance
- https://developer.mozilla.org/en-US/docs/Learn/Performance/Multimedia