# express-mongoose-sample

[![generator-api](https://img.shields.io/badge/built%20with-generator--api-green.svg)](https://github.com/ndelvalle/generator-api)

Code sample for expressjs + mongoose usage.



## dependencies

node 6.3.x or later and mongodb

## developing

run mongodd on a separated terminal instance:

```
mongod
```

run the app:

```bash
npm run dev
```

the app runs on `localhost:8080`

## production

_you'll likely be consuming mongodb as a service, so make sure you set the env var to connect to it._

```bash
npm start
```

## endpoints

There are 2 endpoints:

#### /driver/[:id]

A typical REST endpoint with all CRUD operations.

```ecmascript 6
{
    name: {type: String, required: true},
    location: {
        latitude: Number,
        longitude: Number
    }
}
```

#### /ride

Gets the list of the nearest 3 drivers. Input must contains the current location info.

```ecmascript 6
location: {
    latitude: Number,
    longitude: Number
}
```


--------------------------------------------------------------------------------
