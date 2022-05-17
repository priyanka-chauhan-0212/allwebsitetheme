import React from "react";

export const themes = {
  red: {
    name: "red",
    li: "white",
    row: "red",
    a: "white",
    ul: "red"
  },
  blue: {
    name: "blue",
    li: "blue",
    row: "blue",
    a: "white",
    ul: "blue"
  },
  yellow: {
    name: "yellow",
    li: "yellow",
    ul: "yellow",
    row: "yellow",
    a: "black"
  },
  purple: {
    name: "purple",
    li: "white",
    ul: "purple",
    row: "purple",
    a: "white"
  },
  black: {
    name: "black",
    li: "white",
    ul: "black",
    a: "white",
    row: "black"
  },
  maroon: {
    name: "maroon",
    li: "white",
    ul: "maroon",
    a: "white"
  },
  green: {
    name: "green",
    li: "white",
    ul: "green",
    a: "white"
  }
};

export const ThemeContext = React.createContext(themes.red);
