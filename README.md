# Apple-Keygen

Generate a client secret jwt for sign in with apple

## Usage

Download dependencies

```sh
yarn
```

Generate client secret
```sh
node index.js
```

Output will be a jwt with the following properties
```json
{
    header: {
        "alg": "ES256",
        "typ": "JWT",
        "kid": <teamId>
    },
    payload : {
        "iss": <teamId>,
        "iat": <Date.now>,
        "exp": <Date.now + 180 Days>,
        "aud": "https://appleid.apple.com",
        "sub": <clientId>
    }
}
```

