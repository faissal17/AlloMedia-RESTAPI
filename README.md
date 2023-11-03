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

you will also need some requirement in your .env file

```
HOST= Your host here 'im using mailtrap'
USER= User Name
PASSWORD= password
SERVICE= service
```

in mailtrap
`[Mailtrap](https://mailtrap.io/)`

## Usage

in mailtrap they will give you the needed information first choose nodeJs and then nodemailer you can eaither put theme straight to your project or in .env file

# Docker

## configration
To run this application with docker, you should have installed 
`docker`. 'Docker is an open platform for developing, shipping, and running applications.'
1. Build a Docker image:
 after creating your first docker image run the following command to create it 
 ```
 docker build -t app_name
 ```
 2. Run the Docker container

you can go straight to your docker app and run the image to container

 3. you should know the main porpuse for docker in this app. instead of running each server at time we created a file to run them the same time, mainly used for a team work it doesn't matter what dependcies you have or what version all what you node is clone the images and run the following command 
```
docker-compose up
```
the command should run after created "docker-compose.yaml"
and connect the front-end and backend

 4. run the following command to stop the conatainers 

```
docker-compose down
```