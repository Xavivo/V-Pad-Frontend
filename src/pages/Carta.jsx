import { useState } from "react";
import imagenTemporal from "/imagenTemporal.avif";

const categorias = [
  {
    nombre: "Entrantes fríos",
    productos: [
      { nombre: "Ensalada César", precio: "7,00€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Ensalada mixta", precio: "7,50€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Ensaladilla gambas al ajillo", precio: "3,50€ / Media 6,50€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Ensaladilla chicharrones", precio: "4,00€ / Media 7,50€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Salpicón de marisco", precio: "3,50€ / Media 6,50€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Huevos rellenos", precio: "3,60€ / Media 6,80€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Salmorejo", precio: "4,50€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal }
    ]
  },

  {
    nombre: "Tapas calientes",
    productos: [
      { nombre: "Carne mexicana", precio: "4,00€ / Media 8,00€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Gambas al ajillo", precio: "7,00€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Croquetas", precio: "7,00€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Revuelto campero (plato)", precio: "8,50€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Revuelto de la casa (plato)", precio: "8,50€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal }
    ]
  },
  {
    nombre: "Para picar o compartir",
    productos: [
      { nombre: "Boniatos", precio: "8,50€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Nachos", precio: "10,00€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Aros de cebolla", precio: "5,00€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Palitos de mozzarella", precio: "7,00€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Lagrimitas de pollo", precio: "7,50€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Patatas kebab", precio: "7,50€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Patatas bacon y queso", precio: "7,50€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Alitas de pollo", precio: "8,00€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Cono de patatas", precio: "2,50€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal }
    ]
  },

  {
    nombre: "Sandwich",
    productos: [
      { nombre: "Súper de pollo", precio: "5,50€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Mixto", precio: "4,00€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Especial", precio: "6,00€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal }
    ]
  },

  {
    nombre: "Hamburguesas",
    productos: [
      { nombre: "Simple", precio: "5,50€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Completa", precio: "8,00€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Crispy", precio: "8,00€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Avenida", precio: "8,50€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Retinto", precio: "12,00€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Smash", precio: "11,00€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Cabrona", precio: "12,50€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Chingona", precio: "10,00€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Distrufona", precio: "18,50€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Chicken Thai", precio: "12,00€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Dallas burger", precio: "14,50€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal }
    ]
  },
  {
    nombre: "Tostas",
    productos: [
      { nombre: "Pisto", precio: "5,00€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Salmón", precio: "8,50€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Presa", precio: "7,50€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal }
    ]
  },

  {
    nombre: "Entre panes",
    productos: [
      { nombre: "Bacon queso", precio: "5,00€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Avenida", precio: "6,20€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Serranito pollo o lomo", precio: "5,00€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Pepito pollo o lomo", precio: "4,50€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Hot dog", precio: "5,00€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Pollo crispy", precio: "5,70€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Quesadilla de pollo tex-mex", precio: "8,50€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Brioche de carrillá", precio: "10,00€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Tacos de chicharrones", precio: "10,50€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal }
    ]
  },

  {
    nombre: "Postres",
    productos: [
      { nombre: "Cheesecake turrón", precio: "5,00€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Cheesecake pistacho", precio: "5,00€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Coulant de chocolate", precio: "4,50€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Torrija", precio: "5,00€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Copa de helado", precio: "6,00€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Tarrina helado pequeña", precio: "2,60€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Tarrina helado mediana", precio: "3,70€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Tarrina helado grande", precio: "4,80€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal }
    ]
  },
  {
    nombre: "Extras",
    productos: [
      { nombre: "Reparto a domicilio", precio: "1,00€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Pan", precio: "0,50€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Picos", precio: "0,20€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Bacon", precio: "1,20€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Huevo", precio: "0,60€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Queso", precio: "0,70€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Tarrina alioli", precio: "0,30€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Tarrina kétchup", precio: "0,30€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Tarrina mayonesa", precio: "0,30€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Tarrina salsa", precio: "0,70€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Guacamole", precio: "1,20€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Cebolla caramelizada", precio: "1,50€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Rulo de cabra", precio: "1,20€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Carne smash", precio: "2,00€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Bola helado", precio: "1,70€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Salsa", precio: "0,60€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal }
    ]
  },

  {
    nombre: "Bebidas - Refrescos",
    productos: [
      { nombre: "Agua grande", precio: "1,50€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Agua 500ml cristal", precio: "1,30€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Coca-Cola grande", precio: "2,20€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Coca-Cola pequeña", precio: "1,70€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Coca-Cola Zero grande", precio: "2,20€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Coca-Cola Zero pequeña", precio: "1,70€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Coca-Cola Zero Zero grande", precio: "2,20€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Coca-Cola Zero Zero pequeña", precio: "1,70€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Fanta naranja grande", precio: "2,20€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Fanta naranja pequeña", precio: "1,70€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Fanta limón pequeña", precio: "1,70€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Fuze tea limón", precio: "2,20€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Fuze tea maracuyá", precio: "2,20€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Aquarius naranja", precio: "2,20€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Aquarius melocotón", precio: "2,20€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Tónica", precio: "1,80€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Tónica fresa", precio: "1,80€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Sprite", precio: "1,70€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Casera blanca", precio: "1,70€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Zumo piña", precio: "1,60€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Zumo melocotón", precio: "1,60€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Bifrutas", precio: "1,60€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal }
    ]
  },
  {
    nombre: "Bebidas - Cervezas",
    productos: [
      { nombre: "Tostada 0'0", precio: "2,00€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Maceta", precio: "2,80€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Tubo", precio: "1,80€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Copa cerveza", precio: "2,50€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Heineken s/a", precio: "2,00€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Cruzcampo especial", precio: "2,00€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Radler", precio: "2,00€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Estrella Galicia", precio: "2,00€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Mahou", precio: "2,00€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal }
    ]
  },

  {
    nombre: "Bebidas - Vinos",
    productos: [
      { nombre: "Copa tinto", precio: "2,70€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Copa verdejo", precio: "2,00€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Botella Finca Resalso", precio: "12,50€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Botella verdejo", precio: "9,00€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal }
    ]
  },
  {
    nombre: "Bebidas - A domicilio",
    productos: [
      { nombre: "Lata Coca-Cola", precio: "1,50€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Lata Coca-Cola Zero", precio: "1,50€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Lata Coca-Cola Zero Zero", precio: "1,50€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Lata Fanta naranja", precio: "1,50€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Lata Aquarius", precio: "1,70€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Lata Fuze tea limón", precio: "1,60€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Lata Fuze tea maracuyá", precio: "1,60€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Estrella Galicia", precio: "2,00€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal }
    ]
  },

  {
    nombre: "Desayunos - Café y bebidas",
    productos: [
      { nombre: "Expreso", precio: "1,20€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Cortado", precio: "1,25€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Manchado", precio: "1,40€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Café con leche", precio: "1,40€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Bombón", precio: "1,50€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Carajillo", precio: "1,60€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Americano", precio: "1,40€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Capuchino", precio: "1,60€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Infusiones", precio: "1,40€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Colacao", precio: "1,60€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Batido chocolate", precio: "1,70€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Chocolate caliente", precio: "2,00€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Vaso leche", precio: "1,30€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Bifrutas", precio: "1,60€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Zumo piña", precio: "1,60€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Zumo melocotón", precio: "1,60€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Bolsa extra infusión", precio: "0,50€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "*Café + hielo", precio: "0,10€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal }
    ]
  },
  {
    nombre: "Desayunos - Panes",
    productos: [
      { nombre: "Mollete/chapata aceite", precio: "1,70€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Mollete/chapata paté", precio: "1,70€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Mollete/chapata mantequilla", precio: "1,70€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Mollete/chapata jamón ibérico", precio: "3,50€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Mollete/chapata york", precio: "1,70€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Mollete/chapata pavo", precio: "1,90€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Mollete/chapata atún", precio: "2,50€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Mollete/chapata queso loncha", precio: "1,90€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Mollete/chapata queso untar", precio: "1,80€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Mollete/chapata queso curado", precio: "2,20€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Mollete/chapata tortilla francesa", precio: "2,60€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Mollete/chapata bacon", precio: "2,60€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Medio aceite", precio: "1,30€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Medio paté", precio: "1,30€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Medio mantequilla", precio: "1,25€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Medio jamón ibérico", precio: "2,80€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal }
    ]
  },

  {
    nombre: "Desayunos - Suplementos",
    productos: [
      { nombre: "Pan de centeno", precio: "0,30€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Medio pan centeno", precio: "0,15€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Tomate", precio: "0,30€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Salmorejo", precio: "0,40€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Aguacate", precio: "0,70€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Mermelada", precio: "0,30€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Porción extra", precio: "0,30€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Queso loncha", precio: "0,40€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Queso de untar", precio: "0,30€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Queso curado", precio: "0,80€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "York", precio: "0,30€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Pavo", precio: "0,50€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Bacon", precio: "1,00€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Tortilla francesa", precio: "1,50€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal },
      { nombre: "Huevo", precio: "0,60€", descripcion: "Descripción pendiente", alergenos: ["Alérgeno pendiente"], imagen: imagenTemporal }
    ]
  },
];
const Carta = () => {
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  return (
    <fieldset className="carta-fieldset">
      <h2 className="carta-title">Carta</h2>

      <div className="carta-scroll">
        {categorias.map((cat, index) => (
          <section key={index} className="categoria">
            <h3 className="categoria-titulo">{cat.nombre}</h3>

            <div className="productos-grid">
              {cat.productos.length === 0 && (
                <p className="categoria-vacia">Próximamente…</p>
              )}

              {cat.productos.map((prod, i) => (
                <div
                  key={i}
                  className="producto-preview"
                  onClick={() => setProductoSeleccionado(prod)}
                >
                  <img src={prod.imagen} alt={prod.nombre} className="producto-img" />
                  <h4>{prod.nombre}</h4>
                  <p className="producto-precio">{prod.precio}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {productoSeleccionado && (
        <div className="modal-overlay" onClick={() => setProductoSeleccionado(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <img
              src={productoSeleccionado.imagen}
              alt={productoSeleccionado.nombre}
              className="modal-img"
            />

            <h3>{productoSeleccionado.nombre}</h3>

            <p className="modal-descripcion">
              {productoSeleccionado.descripcion}
            </p>

            <h4 className="modal-subtitulo">Alérgenos</h4>
            <ul className="modal-alergenos">
              {productoSeleccionado.alergenos.map((a, i) => (
                <li key={i}>{a}</li>
              ))}
            </ul>

            <p className="modal-precio">{productoSeleccionado.precio}</p>

            <button
              className="modal-cerrar"
              onClick={() => setProductoSeleccionado(null)}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </fieldset>
  );
};

export default Carta;
