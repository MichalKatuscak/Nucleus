# Nucleus
Jádro pro vývoj webových stránek.

## Potřebné nástroje:
- Node.JS

## Potřebné znalosti:
- HTML
- LESS
- JavaScript
- Node.JS - Grunt, Bower

## Instalace:
1. Stáhnout projekt a spustit příkazovou řádku
2. "npm install"
3. "bower install"
4. "grunt"

## Použití:
Díky Gruntu a LiveReloadu (je-li spuštěn příkazem "grunt") běží automatická kompilace LESS => CSS a následná minifikace do jednoho souboru do složky /dist/

Upravujete tedy pouze styly ve složce /less/ a skripty ve složce /js/ - při každé úpravě JavaScriptu v této složce se uloží do jednoho souboru a zkomprimují stejně jako u LESSu do složky /dist/.
