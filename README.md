# Gullholmen on the Go

An interactive map and tourist guide of an island in Bohuslän, Sweden.

You can find the site here: https://gullholmengo.se

(This is a copy of the original repository)

## Logo

![Logo](https://user-images.githubusercontent.com/92667872/216095083-b00fad9f-74b3-4ac3-b25e-3bbfd34ed007.png)

## Table of contents

- [Description](#description)
- [Tech Stack](#tech-stack)
- [Setup](#setup)
- [License](#license)

## Description

The idea of the project was to create a way for tourists to gain more knowledge about fun and interesting things to do when visiting the island.  
It consists of a interactive map with checkboxes to toggle markers and information popping up on clicking a marker, information about the island and external links to other useful information.

This project was made as my final degree project for my education at Medieinstitutet.  
I learned more about React, TypeScript, Node.js, MongoDB, Figma, how to plan + execute a project, and more, over the course of this project.

The design, logo and icons were made by me in Figma. All the images are also mine.

## Tech Stack

### Frontend

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)

#### Packages used

axios  
swiper  
@react-google-maps/api  
react-lazy-load

### Backend

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

#### Packages used

mongoose  
cors  
dotenv

## Setup

### Frontend

Install dependencies:

```
cd client-interactive-map/
```

```
npm install
```

### Environment Variables

```
REACT_APP_API_KEY = <your_api_key>
```

After installation run:

```
npm start
```

To view it in your browser, go to: http://localhost:3001

### Backend

Install dependencies:

```
cd server-interactive-map/
```

```
npm install
```

### Environment Variables

```
ATLAS_URI = mongodb+srv://<username>:<password>@cluster0.mongodb.net
```

After installation run:

```
npm start
```

To view it in your browser, go to http://localhost:5000

## License

This project is licensed under the MIT License - see the ![LICENSE.md](LICENSE.md) file for details
