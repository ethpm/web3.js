# Web3 API use cases

## Selecting a registry

### With implicit provider

```js
web3.packaging.registry('packages.ethpm.eth')
```

Returns a `Packaging` object with the registry address saved, using the provider already inside the `web3` instance.

### With explicit provider

```js
web3.packaging.registry('packages.ethlibs.eth', { provider: rinkebyProvider })
```

Returns a `Packaging` object with the registry address saved, using the provider passed in explicitly.

## Retrieving package artifact

### By package name alone

```js
web3.packaging.registry('packages.ethpm.eth')
              .getPackage('SimpleToken')
```

Returns a Promise that will resolve to a package artifact.

### By package name and version

```js
web3.packaging.registry('packages.ethpm.eth')
              .getPackage('SimpleToken', { version: '^1.1.5' })
```

Returns a Promise that will resolve to a package artifact.

# Package artifact use cases

## Deploy a contract

Assume that `SimpleToken` is a package artifact object.

```js
const options = {
  data: SimpleToken.data,     // a precompiled binary
  from: "0xabC...777"         // account which funds deployment
};

const instance = new web3.eth.Contract(SimpleToken.abi, options);
await instance.deploy().send();
```

## Interact with pre-deployed contract

Assume that `MathLib` is a package artifact object.

```js
const options = {   
  address: MathLib.address,   
  from: "0xabc...777"
}; 

const instance = new web3.eth.Contract(MathLib.abi, options);
const sum = await instance.methods.safeAdd(5,7).call();
```
