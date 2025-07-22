import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import BGpic from "../../assets/BGimages/bar22.jpg";
import Americano from "../../assets/cocktailImages/americano.jpg";
import AperolSpritz from "../../assets/cocktailImages/aperolspritz.jpg";
import Aviation from "../../assets/cocktailImages/aviation.jpg";
import BeesKnees from "../../assets/cocktailImages/beesknees.jpg";
import Bellini from "../../assets/cocktailImages/bellini.jpg";
import Billionaire from "../../assets/cocktailImages/billionaire.jpg";
import BlackRussian from "../../assets/cocktailImages/blackrussian.jpg";
import BloodAndSand from "../../assets/cocktailImages/bloodandsand.jpg";
import BloodyMary from "../../assets/cocktailImages/bloodymary.jpg";
import Boulevardier from "../../assets/cocktailImages/boulevardier.jpg";
import BrandyAlexander from "../../assets/cocktailImages/brandyalexander.jpg";
import BrownDerby from "../../assets/cocktailImages/brownderby.jpg";
import Caipirinha from "../../assets/cocktailImages/caipirinha.jpg";
import CasinoCocktail from "../../assets/cocktailImages/casinococktail.jpg";
import ChampagneCocktail from "../../assets/cocktailImages/champagnecocktail.jpg";
import CloverClub from "../../assets/cocktailImages/cloverclub.jpg";
import CorpseReviver1 from "../../assets/cocktailImages/corpsereviver1.jpg";
import CorpseReviver2 from "../../assets/cocktailImages/corpsereviver2.jpg";
import Cosmopolitan from "../../assets/cocktailImages/cosmopolitan.jpg";
import CubaLibre from "../../assets/cocktailImages/cubalibre.jpg";
import Daiquiri from "../../assets/cocktailImages/daiquiri.jpg";
import DarkAndStormy from "../../assets/cocktailImages/darkandstormy.jpg";
import EspressoMartini from "../../assets/cocktailImages/espressomartini.jpg";
import French75 from "../../assets/cocktailImages/french75.jpg";
import FrenchMartini from "../../assets/cocktailImages/frenchmartini.jpg";
import FoxAndHounds from "../../assets/cocktailImages/foxandhounds.jpg";
import GinFizz from "../../assets/cocktailImages/ginfizz.jpg";
import Godfather from "../../assets/cocktailImages/godfather.jpg";
import Grasshopper from "../../assets/cocktailImages/grasshopper.jpg";
import Greyhound from "../../assets/cocktailImages/greyhound.jpg";
import HankyPanky from "../../assets/cocktailImages/hankypanky.jpg";
import HarveyWallbanger from "../../assets/cocktailImages/harveywallbanger.jpg";
import HemingwayDaiquiri from "../../assets/cocktailImages/hemingwaydaiquiri.jpg";
import HotToddy from "../../assets/cocktailImages/hottoddy.jpg";
import IrishCoffee from "../../assets/cocktailImages/irishcoffee.jpg";
import Kir from "../../assets/cocktailImages/kir.jpg";
import KirRoyal from "../../assets/cocktailImages/kirroyal.jpg";
import LastWord from "../../assets/cocktailImages/lastword.jpg";
import LemonDropMartini from "../../assets/cocktailImages/lemondropmartini.jpg";
import LongIslandIcedTea from "../../assets/cocktailImages/longislandicedtea.jpg";
import Madras from "../../assets/cocktailImages/madras.jpg";
import MaiTai from "../../assets/cocktailImages/maitai.jpg";
import Manhattan from "../../assets/cocktailImages/manhattan.jpg";
import Mimosa from "../../assets/cocktailImages/mimosa.jpg";
import Margarita from "../../assets/cocktailImages/margarita.jpg";
import Martini from "../../assets/cocktailImages/martini.jpg";
import MintJulep from "../../assets/cocktailImages/mintjulep.jpg";
import Mojito from "../../assets/cocktailImages/mojito.jpg";
import MoscowMule from "../../assets/cocktailImages/moscowmule.jpg";
import Mudslide from "../../assets/cocktailImages/mudslide.jpg";
import NakedAndFamous from "../../assets/cocktailImages/nakedandfamous.jpg";
import Negroni from "../../assets/cocktailImages/negroni.jpg";
import NegroniSbagliato from "../../assets/cocktailImages/negronisbagliato.jpg";
import OldFashionedHistoric from "../../assets/cocktailImages/oldfashionedhistoric.jpg";
import OldFashionedHotel from "../../assets/cocktailImages/oldfashionedhotel.jpg";
import Paloma from "../../assets/cocktailImages/paloma.jpg";
import PaperPlane from "../../assets/cocktailImages/paperplane.jpg";
import Penicillin from "../../assets/cocktailImages/penicillin.jpg";
import PimmsCup from "../../assets/cocktailImages/pimmscup.jpg";
import PiñaColada from "../../assets/cocktailImages/pinacolada.jpg";
import PinkSquirrel from "../../assets/cocktailImages/pinksquirrel.jpg";
import PiscoSour from "../../assets/cocktailImages/piscosour.jpg";
import PurpleHaze from "../../assets/cocktailImages/purplehaze.jpg";
import RamosGinFizz from "../../assets/cocktailImages/ramosginfizz.jpg";
import RustyNail from "../../assets/cocktailImages/rustynail.jpg";
import RobRoy from "../../assets/cocktailImages/robroy.jpg";
import Sazerac from "../../assets/cocktailImages/sazerac.jpg";
import Sidecar from "../../assets/cocktailImages/sidecar.jpg";
import Screwdriver from "../../assets/cocktailImages/screwdriver.jpg";
import SeaBreeze from "../../assets/cocktailImages/seabreeze.jpg";
import SexontheBeach from "../../assets/cocktailImages/sexonthebeach.jpg";
import Sours from "../../assets/cocktailImages/sours.jpg";
import TequilaSunrise from "../../assets/cocktailImages/tequilasunrise.jpg";
import TomCollins from "../../assets/cocktailImages/tomcollins.jpg";
import TrinidadSour from "../../assets/cocktailImages/trinidadsour.jpg";
import VesperMartini from "../../assets/cocktailImages/vespermartini.jpg";
import VieuxCarre from "../../assets/cocktailImages/vieuxcarre.jpg";
import WhiteRussian from "../../assets/cocktailImages/whiterussian.jpg";




const classicCocktails = [
  {
    name: "Americano",
    image: Americano,
    recipe: "1 oz Campari, 1 oz Sweet Vermouth, 2 oz Club Soda. Build in glass with ice, top with soda.",
    glass: "Served in a Collins or Highball glass with cubes. Garnish: Orange slice."
  },
  {
    name: "Aperol Spritz",
    image: AperolSpritz,
    recipe: "2 oz Aperol, 3 oz Gambino Sparkling Wine (Prosecco), 2 oz Club Soda. Build in glass, slight stir.",
    glass: "Universal wine glass with cubes. Garnish: Orange slice and large pitted olive."
  },
  {
    name: "Aviation",
    image: Aviation,
    recipe: "1.5 oz London Dry Gin, 0.5 oz Luxardo Maraschino Liqueur, 0.5 oz Lemon Juice, 0.5 oz Crème de Violette. Shake and strain.",
    glass: "Coupe glass, no ice. Garnish: Whiskey cherry."
  },
  {
    name: "Bee's Knees",
    image: BeesKnees,
    recipe: "1.5 oz Primrose London Dry Gin, 0.75 oz Lemon Juice, 0.75 oz Honey Syrup. Shake and double strain.",
    glass: "Coupe glass, no ice. Garnish: Lemon swath."
  },
  {
    name: "Bellini",
    image: Bellini,
    recipe: "1 oz Peach Purée, 4 oz Gambino Sparkling Wine (Prosecco). Build in glass.",
    glass: "Champagne flute, no ice. Garnish: Raspberry."
  },
    {
    name: "Billionaire",
    image: Billionaire,
    recipe: "2 oz Four Roses Bourbon, 0.25 oz Absente Absinthe, 0.5 oz Lemon Juice, 0.5 oz Simple Syrup, 0.5 oz Grenadine. Shake, dirty dump.",
    glass: "Double Old Fashioned glass with cubes. Garnish: Lemon swath."
  },
  {
    name: "Black Russian",
    image: BlackRussian,
    recipe: "1.5 oz Vodka, 1 oz Kahlua. Build in glass.",
    glass: "Old Fashioned glass with cubes. No garnish."
  },
  {
    name: "Blood and Sand",
    image: BloodAndSand,
    recipe: "0.75 oz Dewar’s Scotch, 0.75 oz Cherry Heering, 0.75 oz Sweet Vermouth, 0.75 oz Orange Juice. Shake and double strain.",
    glass: "Coupe glass, no ice. Garnish: Orange swath and cherry."
  },
  {
    name: "Bloody Mary",
    image: BloodyMary,
    recipe: "1.5 oz Vodka, 3 oz Bloody Mary Mix, 0.5 oz Lemon Juice, 2 dashes Worcestershire, 2 dashes Tabasco. Roll in shaker tin.",
    glass: "Collins/Highball glass with cubes. Garnish: Lime slice and olive."
  },
  {
    name: "Boulevardier",
    image: Boulevardier,
    recipe: "1 oz Four Roses Bourbon, 1 oz Campari, 1 oz Sweet Vermouth. Stir and strain.",
    glass: "Old Fashioned or Coupe glass with large cube. Garnish: Orange swath."
  },
  {
    name: "Brandy Alexander",
    image: BrandyAlexander,
    recipe: "1 oz Brandy, 1 oz Creme de Cacao (dark), 1 oz Half and Half. Shake and strain.",
    glass: "Martini glass, no ice. Garnish: Grated nutmeg."
  },
  {
    name: "Brown Derby",
    image: BrownDerby,
    recipe: "2 oz Four Roses Bourbon, 0.75 oz Grapefruit Juice, 0.5 oz Honey Syrup. Shake and strain.",
    glass: "Coupe glass, no ice. Garnish: Lemon swath."
  },
  {
    name: "Caipirinha",
    image: Caipirinha,
    recipe: "2 oz Cachaça, 1 oz Simple Syrup, 0.5 oz Lime Juice, 4 Lime Wedges. Muddle lime and syrup, shake with ice and cachaça.",
    glass: "Old Fashioned glass with cubes. Garnish: Lime wheel."
  },
  {
    name: "Casino Cocktail",
    image: CasinoCocktail,
    recipe: "1.5 oz Gin, 0.25 oz Luxardo Maraschino, 0.75 oz Lemon Juice, 0.5 oz Simple Syrup, 2 dashes Orange Bitters. Shake and double strain.",
    glass: "Martini glass, no ice. Garnish: Amareno cherry."
  },
  {
    name: "Champagne Cocktail",
    image: ChampagneCocktail,
    recipe: "5 oz Gambino Sparkling Wine (Champagne), 4–5 dashes Angostura Bitters, 1 Sugar Cube. Soak sugar with bitters, top with champagne.",
    glass: "Champagne flute, no ice. Garnish: None."
  },
  {
    name: "Clover Club",
    image: CloverClub,
    recipe: "1.5 oz Dry Gin, 1 oz Lemon Juice, 0.25 oz Raspberry Syrup, 1 Egg White. Dry shake, wet shake, strain.",
    glass: "Martini glass, no ice. Garnish: Raspberry."
  },
  {
    name: "Corpse Reviver #1",
    image: CorpseReviver1,
    recipe: "1 oz Calvados, 1 oz Cognac, 0.5 oz Sweet Vermouth. Stir and strain.",
    glass: "Coupe glass, no ice. Garnish: None."
  },
  {
    name: "Corpse Reviver #2",
    image: CorpseReviver2,
    recipe: "0.75 oz Dry Gin, 0.75 oz Orange Curaçao, 0.75 oz Cocchi Americano, 0.75 oz Lemon Juice. Rinse coupe with Absinthe, shake and strain.",
    glass: "Coupe glass, no ice. Garnish: Amareno cherry + absinthe spray."
  },
  {
    name: "Cosmopolitan",
    image: Cosmopolitan,
    recipe: "1.5 oz Smirnoff Citron Vodka, 0.5 oz Orange Curaçao, 0.5 oz Cranberry Juice, 0.5 oz Lime Juice. Shake and strain.",
    glass: "Martini glass, no ice. Garnish: Lemon swath."
  },
  {
    name: "Cuba Libre",
    image: CubaLibre,
    recipe: "1.5 oz Silver Rum, 3–4 oz Coca-Cola. Build in glass with ice.",
    glass: "Old Fashioned glass with cubes. Garnish: Lime wedge."
  },
  {
    name: "Daiquiri (Classic)",
    image: Daiquiri,
    recipe: "1.5 oz Silver Rum, 0.75 oz Lime Juice, 0.75 oz Simple Syrup. Shake and double strain.",
    glass: "Martini glass, no ice. Garnish: Lime wheel."
  },
  {
    name: "Dark and Stormy",
    image: DarkAndStormy,
    recipe: "2 oz Goslings Dark Rum, 3.5 oz Ginger Beer. Build in glass with ice — ginger beer first, float rum on top.",
    glass: "Collins/Highball glass with cubes. Garnish: Lime wedge."
  },
  {
    name: "Espresso Martini",
    image: EspressoMartini,
    recipe: "1 oz Vanilla Vodka, 1 oz Mr. Black Cold Brew Liqueur, 1 oz Espresso. Shake and strain.",
    glass: "Martini glass, no ice. Garnish: 3 espresso beans."
  },
  {
    name: "French 75",
    image: French75,
    recipe: "1 oz Dry Gin, 0.5 oz Lemon Juice, 0.5 oz Simple Syrup, 3 oz Sparkling Wine. Combine gin, lemon, and syrup in flute, top with bubbles.",
    glass: "Coupe or flute, no ice. Garnish: Lemon twist."
  },
    {
    name: "French Martini",
    image: FrenchMartini,
    recipe: "1.75 oz Grey Goose Vodka, 0.5 oz Crème de Cassis (Chambord), 0.75 oz Pineapple Juice. Shake and double strain.",
    glass: "Martini glass, no ice. Garnish: Raspberry."
  },
  {
    name: "Fox and Hounds",
    image: FoxAndHounds,
    recipe: "1.5 oz Four Roses Bourbon, 0.5 oz Pernod, 0.5 oz Lemon Juice, 0.5 oz Simple Syrup, 1 Egg White. Dry shake, wet shake, double strain.",
    glass: "Martini glass, no ice. Garnish: Lemon swath."
  },
  {
    name: "Gin Fizz",
    image: GinFizz,
    recipe: "2 oz Dry Gin, 1 oz Lemon Juice, 0.75 oz Simple Syrup, 1 Egg White, 1–2 oz Club Soda. Dry shake, wet shake, strain, top with soda.",
    glass: "Collins/Highball glass, no ice. Garnish: Lemon swath."
  },
  {
    name: "Godfather",
    image: Godfather,
    recipe: "2 oz Dewar’s Scotch, 1 oz Disaronno Amaretto. Build in glass with ice.",
    glass: "Old Fashioned glass with cubes. Garnish: Orange slice."
  },
  {
    name: "Grasshopper",
    image: Grasshopper,
    recipe: "1 oz Crème de Menthe (green), 1 oz Crème de Cacao (white), 1 oz Half and Half. Shake and strain.",
    glass: "Martini glass, no ice. Garnish: Chocolate shavings."
  },
  {
    name: "Greyhound (Salty Dog with salted rim)",
    image: Greyhound,
    recipe: "1.5 oz Vodka (or Dry Gin), 3 oz Grapefruit Juice. Build in glass with ice.",
    glass: "Old Fashioned glass with cubes. Garnish: Lime wedge."
  },
  {
    name: "Hanky Panky",
    image: HankyPanky,
    recipe: "1.5 oz Dry Gin, 1.5 oz Sweet Vermouth, barspoon of Fernet Branca. Stir and strain.",
    glass: "Coupe glass, no ice. Garnish: Orange swath."
  },
  {
    name: "Harvey Wallbanger",
    image: HarveyWallbanger,
    recipe: "2 oz Vodka, 0.5 oz Galliano, 3–4 oz Orange Juice. Build in glass with ice, top with Galliano.",
    glass: "Collins/Highball glass with cubes. Garnish: Orange slices."
  },
  {
    name: "Hemingway Daiquiri",
    image: HemingwayDaiquiri,
    recipe: "1.5 oz Silver Rum, 0.25 oz Luxardo Maraschino, 0.75 oz Pink Grapefruit Juice, 0.5 oz Lime Juice. Shake and double strain.",
    glass: "Martini glass, no ice. Garnish: Lime wheel."
  },
  {
    name: "Hot Toddy",
    image: HotToddy,
    recipe: "1.5 oz Four Roses Bourbon, 0.5 oz Honey Simple, 0.5 oz Lemon Juice, 0.5 oz Cinnamon Syrup, 5–6 oz Hot Water. Build in mug.",
    glass: "Coffee mug (footed if available), no ice. Garnish: Lemon wedge."
  },
  {
    name: "Irish Coffee",
    image: IrishCoffee,
    recipe: "1 oz Jameson Irish Whiskey, 1 oz Baileys, 4 oz Coffee. Optional whipped cream. Build in mug.",
    glass: "Irish coffee glass, no ice. Garnish: Whipped cream dollop."
  },
  {
    name: "Kir",
    image: Kir,
    recipe: "0.5 oz Crème de Cassis, 5 oz Dry White Wine (Gavi di Gavi). Build in glass.",
    glass: "Universal wine glass, no ice. Garnish: Lemon swath."
  },
  {
    name: "Kir Royal",
    image: KirRoyal,
    recipe: "0.5 oz Crème de Cassis (Chambord), 5 oz Gambino Sparkling Wine (Champagne). Build in glass.",
    glass: "Coupe glass, no ice. Garnish: Lemon swath."
  },
  {
    name: "Last Word",
    image: LastWord,
    recipe: "0.75 oz Fords Dry Gin, 0.75 oz Green Chartreuse, 0.75 oz Luxardo Maraschino, 0.75 oz Lime Juice. Shake and strain.",
    glass: "Coupe glass, no ice. Garnish: None."
  },
  {
    name: "Lemon Drop Martini",
    image: LemonDropMartini,
    recipe: "1.5 oz Smirnoff Citron Vodka, 0.5 oz Orange Curaçao, 0.5 oz Lemon Juice, 0.5 oz Simple Syrup. Shake and double strain.",
    glass: "Martini glass, no ice. Garnish: Lemon swath, sugar rim (half rim)."
  },
  {
    name: "Long Island Iced Tea",
    image: LongIslandIcedTea,
    recipe: "0.5 oz Vodka, 0.5 oz Dry Gin, 0.5 oz Silver Rum, 0.5 oz Blanco Tequila, 0.5 oz Orange Curaçao, 2 oz Lemon Juice, splash Coca-Cola. Roll spirits and sour mix in shaker, build in glass, top with Coke.",
    glass: "Beer glass with ice. Garnish: Lemon wedge."
  },
  {
    name: "Madras",
    image: Madras,
    recipe: "1.5 oz Vodka, 2 oz Cranberry Juice, 1 oz Orange Juice. Build in glass with ice.",
    glass: "Collins/Highball glass with ice. Garnish: Lime wedge."
  },
  {
    name: "Mai Tai",
    image: MaiTai,
    recipe: "1 oz Diplomatico Rum, 1 oz Appleton Rum, 0.5 oz Orange Curaçao, 0.5 oz Orgeat, 0.5 oz Lime Juice, 0.25 oz Simple Syrup. Shake and strain.",
    glass: "Collins/Highball glass with cubes. Garnish: Lime wedge and mint sprig."
  },
  {
    name: "Manhattan",
    image: Manhattan,
    recipe: "2 oz Sazerac Rye Whiskey, 1 oz Sweet Vermouth, 3 dashes Angostura Bitters. Stir and strain.",
    glass: "Coupe glass (or Old Fashioned), no ice. Garnish: Amareno cherry."
  },
  {
    name: "Margarita (Classic)",
    image: Margarita,
    recipe: "1.5 oz Silver Tequila, 0.5 oz Orange Curaçao, 1 oz Lemon Juice, 1 oz Lime Juice, 0.5 oz Agave Syrup. Shake and strain.",
    glass: "Double Old Fashioned glass with cubes. Garnish: Salted rim and lime wedge."
  },
  {
    name: "Mimosa",
    image: Mimosa,
    recipe: "2 oz Orange Juice, 3 oz Gambino Sparkling Wine (Champagne). Build in glass.",
    glass: "Coupe glass, no ice. Garnish: None."
  },
  {
    name: "Martini",
    image: Martini,
    recipe: "2.5 oz Dry Gin or Vodka (guest choice), 0.5 oz Dry Vermouth. Stir until well chilled, strain.",
    glass: "Martini glass, no ice. Garnish: Lemon twist or 2 olives. Ask: gin/vodka, shaken/stirred, up/on rocks, olive/lemon."
  },
  {
    name: "Mint Julep",
    image: MintJulep,
    recipe: "2 oz Four Roses Bourbon, 0.75 oz Simple Syrup, 6–8 Mint Leaves. Gently muddle mint and syrup, add ice and bourbon, roll to combine.",
    glass: "Old Fashioned glass with crushed ice if possible. Garnish: Mint sprig."
  },
  {
    name: "Mojito",
    image: Mojito,
    recipe: "1.5 oz Silver Rum, 0.75 oz Lime Juice, 0.75 oz Simple Syrup, 6–8 Mint Leaves, chilled Soda Water. Muddle lime, syrup, mint, add rum and ice, roll, spritz soda.",
    glass: "Collins/Highball glass with cubes. Garnish: Lime wedge and mint sprig."
  },
  {
    name: "Moscow Mule",
    image: MoscowMule,
    recipe: "1.5 oz Vodka, 0.5 oz Lime Juice, 3–4 oz Ginger Beer. Build in glass with ice.",
    glass: "Old Fashioned glass or copper mug with crushed ice. Garnish: Lime wedge."
  },
  {
    name: "Mudslide",
    image: Mudslide,
    recipe: "1.5 oz Vodka, 0.75 oz Kahlua, 0.75 oz Baileys Irish Cream, 0.75 oz Half and Half. Shake and double strain.",
    glass: "Martini glass, no ice. Garnish: None."
  },
  {
    name: "Naked and Famous",
    image: NakedAndFamous,
    recipe: "0.75 oz Gem & Bolt Mezcal, 0.75 oz Yellow Chartreuse, 0.75 oz Aperol, 0.75 oz Lime Juice. Shake and strain.",
    glass: "Coupe glass, no ice. Garnish: Lime wedge."
  },
  {
    name: "Negroni",
    image: Negroni,
    recipe: "1 oz Gin, 1 oz Campari, 1 oz Sweet Vermouth. Stir and strain.",
    glass: "Rocks glass with large cube. Garnish: Lemon swath."
  },
  {
    name: "Negroni Sbagliato",
    image: NegroniSbagliato,
    recipe: "1 oz Campari, 1 oz Sweet Vermouth, 1 oz Prosecco. Build in glass.",
    glass: "Old Fashioned glass with large cube. Garnish: Lemon swath."
  },
  {
    name: "Old Fashioned (Historic Style)",
    image: OldFashionedHistoric,
    recipe: "2 oz Four Roses Bourbon, 1 oz Raw Simple Syrup, 3 dashes Angostura Bitters. Stir and strain.",
    glass: "Old Fashioned glass with large cube. Garnish: Orange swath, cherry."
  },
  {
    name: "Old Fashioned - Hotel (Modern Style)",
    image: OldFashionedHotel,
    recipe: "2 oz Four Roses Bourbon, 1 Amareno Cherry, 1 Orange Slice, 0.5 oz Simple Syrup, 2–3 dashes Angostura Bitters, splash of Club Soda. Muddle orange, cherry, syrup, and bitters in glass. Add ice and bourbon, stir, finish with soda.",
    glass: "Old Fashioned glass with cubes. Garnish: None (already in glass)."
  },
  {
    name: "Paloma",
    image: Paloma,
    recipe: "1.5 oz Tequila Blanco, 0.5 oz Grapefruit Liqueur, 0.5 oz Lime Juice, 2–3 oz Club Soda. Build in glass, top with soda.",
    glass: "Collins/Highball glass with cubes. Garnish: Lime wheel."
  },
  {
    name: "Paper Plane",
    image: PaperPlane,
    recipe: "0.75 oz Four Roses Bourbon, 0.75 oz Aperol, 0.75 oz Nonino Amaro, 0.75 oz Lemon Juice. Shake and double strain.",
    glass: "Coupe glass, no ice. Garnish: None."
  },
  {
    name: "Penicillin",
    image: Penicillin,
    recipe: "1.5 oz Dewar’s Blended Scotch, 0.5 oz Ginger Liqueur, 0.5 oz Lemon Juice, 0.5 oz Honey Simple. Shake and double strain.",
    glass: "Old Fashioned glass with cubes. Garnish: Lemon swath, 2–3 sprays of Single Malt Scotch."
  },
  {
    name: "Pimm’s Cup",
    image: PimmsCup,
    recipe: "2 oz Pimm’s No. 1, 1 oz Lemon Juice, 2–3 oz Ginger Ale, 3–4 Cucumber Cubes. Muddle cucumber, lemon, and Pimm’s, add ice and ginger ale, gently stir.",
    glass: "Collins/Highball glass with cubes. Garnish: Lemon slice."
  },
  {
    name: "Piña Colada",
    image: PiñaColada,
    recipe: "1 oz Silver Rum, 1 oz Malibu Coconut Rum, 1 oz Coconut Cream, 1 oz Pineapple Juice, 0.5 oz Lime Juice. Shake and strain.",
    glass: "Collins/Highball glass with crushed ice. Garnish: Lime wheel."
  },
  {
    name: "Pink Squirrel",
    image: PinkSquirrel,
    recipe: "1 oz Crème de Noyaux, 1 oz Crème de Cacao (white), 1 oz Half and Half. Shake and strain.",
    glass: "Martini glass, no ice. Garnish: Shaved nutmeg."
  },
  {
    name: "Pisco Sour",
    image: PiscoSour,
    recipe: "1.5 oz Pisco, 0.75 oz Lemon Juice, 0.75 oz Simple Syrup, 1 Egg White. Dry shake, wet shake, double strain.",
    glass: "Old Fashioned glass, no ice. Garnish: Angostura dash swirl."
  },
  {
    name: "Purple Haze",
    image: PurpleHaze,
    recipe: "1.5 oz Smirnoff Vodka, 0.5 oz Chambord, 2 oz Cranberry Juice. Shake vodka and Chambord, dump, top with cranberry.",
    glass: "Old Fashioned glass with cubes. Garnish: Mint sprig."
  },
  {
    name: "Ramos Gin Fizz",
    image: RamosGinFizz,
    recipe: "2 oz Dry Gin, 0.5 oz Simple Syrup, 0.5 oz Half and Half, 0.5 oz Lemon Juice, 0.5 oz Lime Juice, 2–3 dashes Orange Flower Water, 1 Egg White, splash Club Soda. Dry shake, wet shake, double strain.",
    glass: "Collins/Highball glass, no ice. Garnish: Orange swath."
  },
  {
    name: "Rob Roy (Scotch Manhattan)",
    image: RobRoy,
    recipe: "2 oz Dewar’s Blended Scotch, 1 oz Sweet Vermouth, 3 dashes Angostura Bitters. Stir and strain.",
    glass: "Coupe glass, no ice. Garnish: Amareno cherry."
  },
  {
    name: "Rusty Nail",
    image: RustyNail,
    recipe: "2 oz Scotch, 1 oz Drambuie. Build in glass.",
    glass: "Old Fashioned glass with cubes. Garnish: Lemon swath."
  },
  {
    name: "Sazerac",
    image: Sazerac,
    recipe: "2 oz Sazerac Rye, 0.5 oz Simple Syrup, 4–5 dashes Peychaud’s Bitters, Absinthe rinse. Stir, strain into absinthe-rinsed glass.",
    glass: "Old Fashioned glass, no ice. Garnish: Lemon swath, absinthe spray."
  },
  {
    name: "Screwdriver",
    image: Screwdriver,
    recipe: "1.5 oz Vodka, 3 oz Orange Juice. Build in glass.",
    glass: "Old Fashioned glass with cubes. Garnish: None."
  },
  {
    name: "Sea Breeze",
    image: SeaBreeze,
    recipe: "1.5 oz Vodka, 2 oz Cranberry Juice, 1 oz Grapefruit Juice. Build in glass.",
    glass: "Old Fashioned glass with cubes. Garnish: Lime wedge."
  },
  {
    name: "Sex on the Beach",
    image: SexontheBeach,
    recipe: "1.5 oz Vodka, 0.75 oz Peach Schnapps, 1.5 oz Pineapple Juice, 1.5 oz Cranberry Juice. Shake and strain.",
    glass: "Collins/Highball glass with cubes. Garnish: Orange slice."
  },
  {
    name: "Sidecar",
    image: Sidecar,
    recipe: "1.5 oz Cognac, 0.75 oz Orange Curaçao (Triple Sec), 0.75 oz Lemon Juice. Shake and double strain.",
    glass: "Martini glass, no ice. Garnish: Raw sugar rim (half) and lemon swath."
  },
  {
    name: "Sours (Amaretto/Whiskey/etc.)",
    image: Sours,
    recipe: "1.5 oz Spirit of choice, 1 oz Lemon Juice, 0.5 oz Simple Syrup, 1 Egg White (optional). Shake and strain.",
    glass: "Coupe glass, no ice. Garnish: Orange wheel and cherry."
  },
  {
    name: "Tequila Sunrise",
    image: TequilaSunrise,
    recipe: "2 oz Tequila Blanco, 4 oz Orange Juice, 0.5 oz Grenadine. Build in glass with ice, float grenadine.",
    glass: "Old Fashioned glass with cubes. Garnish: Amareno cherry."
  },
  {
    name: "Tom Collins",
    image: TomCollins,
    recipe: "1.5 oz Old Tom Gin, 2 oz Sour Mix, 0.5 oz Simple Syrup, Club Soda. Shake, strain, top with soda.",
    glass: "Collins/Highball glass with cubes. Garnish: Orange slice and cherry flag."
  },
  {
    name: "Trinidad Sour",
    image: TrinidadSour,
    recipe: "1.5 oz Angostura Amaro, 0.5 oz Rye Whiskey, 0.75 oz Lemon Juice, 1 oz Orgeat. Shake and strain.",
    glass: "Coupe glass, no ice. Garnish: Lemon swath."
  },
  {
    name: "Vesper",
    image: VesperMartini,
    recipe: "1.75 oz Vodka, 1.5 oz Gin, 0.5 oz Cocchi Americano. Stir and strain.",
    glass: "Martini glass, no ice. Garnish: Lemon swath."
  },
  {
    name: "Vieux Carré",
    image: VieuxCarre,
    recipe: "0.75 oz Sazerac Rye, 0.75 oz Cognac, 0.75 oz Sweet Vermouth, 0.25 oz Benedictine, 1 dash Peychaud’s Bitters, 1 dash Angostura Bitters. Stir and strain.",
    glass: "Coupe glass, no ice. Garnish: Lemon swath and cherry flag."
  },
  {
    name: "White Russian",
    image: WhiteRussian,
    recipe: "1.5 oz Vodka, 1 oz Kahlua, 0.5 oz Half and Half. Build in glass in order: vodka → Kahlua → float cream.",
    glass: "Old Fashioned glass with cubes. Garnish: None."
  }
];


export default function ClassicCocktails() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat text-white py-16 px-6 relative"
      style={{ backgroundImage: `url(${BGpic})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-emerald-900 bg-opacity-0 z-0" />


      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center space-y-10">
        <Link
  to="/cocktails"
  className="inline-block mt-16 px-6 py-3 bg-white text-emerald-800 font-bold rounded-full shadow-lg hover:bg-emerald-100 transition"
>
  ← Back to Cocktails
</Link>
        <h1 className="text-5xl font-mono font-bold text-emerald-300 drop-shadow-lg">
          Classic Cocktails
        </h1>

        <p className="text-lg font-mono font-bold text-emerald-100">
          Explore the classics that have stood the test of time, each with its own unique recipe and pairing suggestions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12 text-left">
          {classicCocktails.map((cocktail, index) => (
            <div
              key={index}
              className="bg-white/10 border backdrop-blur-md border-emerald-400 rounded-2xl p-4 shadow-xl opacity-90 hover:opacity-100 transition duration-300"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggle(index)}
              >
                <h2 className="text-xl font-mono font-bold text-emerald-200">
                  {cocktail.name}
                </h2>
                <span
                  className={`text-xl font-bold transition ${
                    expandedIndex === index
                      ? "text-emerald-400"
                      : "text-gray-300"
                  }`}
                >
                  {expandedIndex === index ? "−" : "+"}
                </span>
              </div>

              {expandedIndex === index && (
                <div className="mt-4 space-y-4">
                  <div className="w-full h-48 bg-emerald-950/20 border border-emerald-500 rounded-xl flex items-center justify-center text-sm italic text-emerald-300">
                    <img src={cocktail.image} alt={cocktail.name} className="object-contain h-full" />
                  </div>
                  <p className="text-sm font-mono font-semibold text-emerald-100">
                    <span className="font-bold text-white">Recipe: </span>
                    {cocktail.recipe}
                  </p>
                  <p className="text-sm font-mono font-semibold text-emerald-100">
                    <span className="font-bold text-white">Glass: </span>
                    {cocktail.glass}
                  </p>
                </div>
              )}
            </div>
          ))}
          
        </div>
        <Link
  to="/cocktails"
  className="inline-block mt-16 px-6 py-3 bg-white text-emerald-800 font-bold rounded-full shadow-lg hover:bg-emerald-100 transition"
>
  ← Back to Cocktails
</Link>
      </div>
    </div>
  );
}
