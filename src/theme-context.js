import React from "react";

export const themes = {
  red: {
    name: "red",
    menu: "red ",
    contain: "red",
    bannercontainer: "red",
    btn1: "red"
  },
  blue: {
    name: "blue",
    menu: "blue",
    contain: "blue",
    bannercontainer: "blue",
    btn1: "blue"
  },
  yellow: {
    name: "yellow",
    menu: "yellow",
    contain: "yellow",
    bannercontainer: "yellow",
    btn1: "black"
  },
  purple: {
    name: "purple",
    menu: "purple",
    contain: "purple",
    bannercontainer: "purple",
    btn1: "white"
  },
  black: {
    name: "black",
    menu: "black",
    contain: "black",
    bannercontainer: "black",
    btn1: "black"
  },
  maroon: {
    name: "maroon",
    menu: "maroon",
    contain: "maroon",
    bannercontainer: "maroon",
    btn1: "maroon"
  },
  green: {
    name: "green",
    menu: "green",
    contain: "green",
    bannercontainer: "green",
    btn1: "green"
  }
};

export const ThemeContext = React.createContext(themes.red);
