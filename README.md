# bootcamp-fe-lanai-conceicao

> Brief project description

## Environment setup

 - Install [Node.js](https://nodejs.org/)
   - Recommended method is by using [NVM](https://github.com/creationix/nvm)
   - Recommended Node.js version is the [active LTS](https://github.com/nodejs/LTS#lts-schedule1)
 - Update `npm` to the latest version by running `npm i -g npm@latest`
 - **While staying connected to VPN**, run `npm install` to install the project dependencies
 - For the e2e tests install locally selenium, chromedriver and geckodriver by running `npm run install-selenium`
 - Edit your `/etc/hosts` file by adding virtual hosts required for the app running:

*These are just examples, please indicate the real list of domains that is used in project*

```
    127.0.0.1 dev.mercadolibre.com.ar dev.mercadolibre.com.mx dev.mercadolibre.com.co
    127.0.0.1 dev.mercadopago.com.ar
    127.0.0.1 dev.mercadolivre.com.br
    # In case you run the project by `fury run` you should add also these ones
    192.168.99.100 dev.mercadolibre.com.ar dev.mercadolibre.com.mx dev.mercadolibre.com.co
    192.168.99.100 dev.mercadopago.com.ar
    192.168.99.100 dev.mercadolivre.com.br
```

- You may find convenient editing your `.bash_profile` to [auto pick the Node version](https://github.com/mercadolibre/frontend/wiki/Auto-Picking-Node-version) of each project.


## Development

### 1) Run and build the app:

```
npm run dev
```
**Note**: Running this command you will be using React Fast Refresh and Hot Reload Server, [please follow this documentation](https://nordic.adminml.com/docs/fast-refresh) for more information and recommendations of usage.

### 2) Download translations:

```
npm run i18n:download
```

**Note**: To proceed with this step the project should be properly configured first. Please see the
 [`i18n` configuration instructions](https://github.com/mercadolibre/frontend-i18n/#configuration) for more info.

### 3) Install the certificate authority if you didn't before:

Run from this application **for a single time** the command:

```bash
 ./node_modules/.bin/install-devcert-ca
```

> Please note that `sudo` password is required for this operation.

**Note**: if your app should run over HTTP please remove `NODE_HTTPS=true` form the npm scripts.
```json
"dev": "NODE_ENV=development node ./index.js"
```

### 4) Navigate to:
```
https://dev.mercadolibre.com.ar:8443/
```

## Debug

### 1) Build the assets:

```
npm run build
```

*Alternatively you may use the watcher for automatic assets rebuilding: `npm run watch`*

### 2) Run the app with the debug mode:

```
npm run debug
```

## License

© 2021 Mercado Libre
