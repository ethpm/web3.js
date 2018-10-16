# Use cases

There are four main steps to using the Web3 EthPM API:

1. Selecting a **registry** (and optionally setting a provider)
2. Retrieving the **package artifact** by name (and optionally version)
3. Extracting the **contract artifact** from the package artifact (since one package can have multiple contracts)
4. Using the **contract artifact** with Web3.js

## 1. Selecting a registry

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

## 2. Retrieving package artifact

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

## 3. Extracting contract artifact

Since each package artifact may contain more than one contract, we need a way to get specific contract artifacts from each package artifact object.

```js
// TODO - API to be determined
```

## 4. Using the contract artifact

### Deploying a contract

Assume that `SimpleToken` is a contract artifact object.

```js
const options = {
  data: SimpleToken.data,     // byte code of the contract
  from: "0xabC...777"         // account which funds deployment
};

const instance = new web3.eth.Contract(SimpleToken.abi, options);
await instance.deploy().send();
```

### Interact with pre-deployed contract

Assume that `MathLib` is a contract artifact object.

```js
const options = {   
  address: MathLib.address,   
  from: "0xabc...777"
}; 

const instance = new web3.eth.Contract(MathLib.abi, options);
const sum = await instance.methods.safeAdd(5,7).call();
```
