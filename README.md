> _Fork_ deze leertaak en ga aan de slag. Onderstaande outline ga je gedurende deze taak in jouw eigen GitHub omgeving uitwerken. De instructie vind je in: [docs/INSTRUCTIONS.md](docs/INSTRUCTIONS.md)

# Opdracht Fresk.digital
<!-- Geef je project een titel en schrijf in één zin wat het is -->
Voor deze opdracht hebben we van Fresk Digital de missie gekregen om een dashboard te maken waarin statistieken te vinden zijn uit de ```API's``` van Google, Hotjar en Linkedin. Deze statistieken gaan over de officiele website van Fresk zelf. Dit dashboard zal alleen gebruikt worden door de *_medewerkers_*.

## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Gebruik](#gebruik)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving
<!-- Bij Beschrijving staat kort beschreven wat voor project het is en wat je hebt gemaakt -->
<!-- Voeg een mooie poster visual toe 📸 -->
<!-- Voeg een link toe naar Github Pages 🌐-->


## Gebruik
<!-- Bij Gebruik staat de user story, hoe het werkt en wat je er mee kan. -->


## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met JS gedaan en hoe? Misschien heb je iets met NodeJS gedaan, of heb je een framwork of library gebruikt? -->
Deze opdracht heeft gebruik gemaakt van de volgende talen:
* HTML
* CSS
* Javascript
* EJS
* Nodejs
* Express
* Chart.js
## Installatie
<!-- Bij Instalatie staat hoe een andere developer aan jouw repo kan werken -->
Om dit project over te nemen moet je de volgende stappen nemen:

> Clone deze repository naar je editor.

> Open de Terminal en voor de volgende ``commands`` uit.

````EJS
npm install
````

> Voeg in de ``server.js`` de volgende regel toe om de Google API te linken.

````EJS
import {BetaAnalyticsDataClient} from '@google-analytics/data';
````

> Vraag toegang voor het ``.env`` bestand en de ``js.credentials``.

> Voeg deze bestanden toe aan de repository, en pas vervolgens in de ``package.json`` het volgende aan.

````EJS
  "scripts": {
    "start": "node --env-file=.env server.js"
  },
````

Nu zou alles gesetteld moeten zijn en kun je de server starten met de volgende command.

````EJS
npm start
````

## Bronnen

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
