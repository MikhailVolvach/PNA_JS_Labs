"use strict"

import { App } from './src/App/App.js';
import { Carousel } from './src/components/Carousel/Carousel.js';

import data from './src/PseudoBack/data.json' assert {type: "json"};

const root = document.getElementById('root');

const app = new App(root);
const carousel = new Carousel(root, data.images);
// app.render();
carousel.render();