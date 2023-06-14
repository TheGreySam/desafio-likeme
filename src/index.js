import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

/* import express from 'express';
import path from 'path'
//const express = require('express')
//const path = require('path');

const app = express();
const PUERTO = 3000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')) 
});

app.listen(PUERTO, () => {
    console.log(`Server corriendo en puerto ${PUERTO}`)
}) */

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
