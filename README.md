# AlloMedia-RESTAPI

AlloMedia in generale is a delivery application for **Marhaba** resturent

# PreRequest

before start with AlloMedia you need some requirement

- Node.js and npm installed on your machine.
- Git installed on your machine.
-

# Getting started

1. To get a local copy up and running, follow these simple steps.

```bash
git clone https://github.com/faissal17/AlloMedia-RESTAPI.git
```

2. navigate the project

```bash
cd AlloMedia-RESTAPI
```

3.  Install dependencies using npm

```bash
npm install
```

# Configration

You may need to configure some environment variables.

1.Extract the .env file from the .env.example file

```bash
cp .env.example .env
```

i already mentioned in env.example that you will need to add a secret key you can write whatever you want but in case youb wanted more seccure you can run the following command in oyur terminal

```bash
node -e "console.log(require('crypto').randomBytes(256).toString('base64'));"

```

run the following command and get generated secret key
