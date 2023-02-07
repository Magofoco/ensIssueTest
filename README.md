# INSTRUCTIONS

## INFURA

Go to `https://www.infura.io/` and get a free api key.
Place the API KEY in `index.ts` in the variable called `INFURA_API_KEY` insted of `ADD_YOUR_API_KEY_HERE`

(This is just for simplicity, you should have your SECRET KEYS in a .env file)

## INSTALL DEPENDECIES

Run `npm install`

## START APP

Run `npm run start`

## EXPECTED BEHAVIOUR VS POTENTIAL ISSUE

The line:
`console.log("This should return an object: ", existingEns);`
should return an object containing several fields. It returns `undefined`
