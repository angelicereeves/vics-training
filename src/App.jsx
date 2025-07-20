import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Wine from "./components/wine/wine";
import Red from "./components/wine/reds/red";
import Cabs from "./components/wine/reds/cabs";
import PinotNoirs from "./components/wine/reds/pinotnoirs";
import Tuscany from "./components/wine/reds/tuscany";
import Piedmont from "./components/wine/reds/piedmont";
import InterestingReds from "./components/wine/reds/interestingreds";
import White from "./components/wine/whites/white";
import Sparkling from "./components/wine/whites/sparkling";
import Chardonnay from "./components/wine/whites/chardonnay";
import SauvBlanc from "./components/wine/whites/sauvblanc";
import InterestingWhites from "./components/wine/whites/interestingwhites";
import Pairing from "./components/wine/pairing/pairing";
import RedsPairBTG from "./components/wine/pairing/redspair";
import WhitesPairBTG from "./components/wine/pairing/whitespair";
import SparklingPair from "./components/wine/pairing/sparklingpair";
import StartersPair from "./components/wine/pairing/starterspair";
import LettucesPair from "./components/wine/pairing/lettucespair";
import CrustsPair from "./components/wine/pairing/crustspair";
import HoldMePair from "./components/wine/pairing/holdmepair";
import PastasPair from "./components/wine/pairing/pastaspair";
import MainsPair from "./components/wine/pairing/mainspair";
import SidesPair from "./components/wine/pairing/sidespair";
import DessertsPair from "./components/wine/pairing/dessertspair";
import ByTheGlass from "./components/wine/bytheglass/bytheglass";
import SparklingsBTG from "./components/wine/bytheglass/sparklings";
import WhitesBTG from "./components/wine/bytheglass/whites";
import RedsBTG from "./components/wine/bytheglass/reds";
import Food from "./components/food/food";
import Starters from "./components/food/starters";
import Lettuces from "./components/food/lettuces";
import Crusts from "./components/food/crust";
import HoldMe from "./components/food/holdme";
import Pastas from "./components/food/pasta";
import Mains from "./components/food/mains";
import Sides from "./components/food/sides";
import Desserts from "./components/food/dessert";

import Liquor from "./components/liquor";
import Cocktails from "./components/cocktails";
import Service from "./components/service";
import Music from "./components/music";
import Quiz from "./components/quiz";



export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/food" element={<Food />} />
        <Route path="/food/starters" element={<Starters />} />
        <Route path="/food/lettuces" element={<Lettuces />} />
        <Route path="/food/crust" element={<Crusts />} />
        <Route path="/food/holdme" element={<HoldMe />} />
        <Route path="/food/pasta" element={<Pastas />} />
        <Route path="/food/mains" element={<Mains />} />
        <Route path="/food/sides" element={<Sides />} />
        <Route path="/food/dessert" element={<Desserts />} />
        <Route path="/wine" element={<Wine />} />
        <Route path="/wine/white" element={<White />} />
        <Route path="/wine/white/sparkling" element={<Sparkling />} />
        <Route path="/wine/white/chardonnay" element={<Chardonnay />} />
        <Route path="/wine/white/sauvblanc" element={<SauvBlanc />} />
        <Route path="/wine/white/interestingwhites" element={<InterestingWhites />} />
        <Route path="/wine/red" element={<Red />} />
        <Route path="/wine/red/cabs" element={<Cabs />} />
        <Route path="/wine/red/pinotnoirs" element={<PinotNoirs />} />
        <Route path="/wine/red/tuscany" element={<Tuscany />} />
        <Route path="/wine/red/piedmont" element={<Piedmont />} />
        <Route path="/wine/red/interestingreds" element={<InterestingReds />} />
        <Route path="/pairing" element={<Pairing />} />
        <Route path="/pairing/redspair" element={<RedsPairBTG />} />
        <Route path="/pairing/whitespair" element={<WhitesPairBTG />} />
        <Route path="/pairing/sparklingpair" element={<SparklingPair />} />
        <Route path="/pairing/starterspair" element={<StartersPair />} />
        <Route path="/pairing/lettucespair" element={<LettucesPair />} />
        <Route path="/pairing/crustspair" element={<CrustsPair />} />
        <Route path="/pairing/holdmepair" element={<HoldMePair />} />
        <Route path="/pairing/pastaspair" element={<PastasPair />} />
        <Route path="/pairing/mainspair" element={<MainsPair />} />
        <Route path="/pairing/sidespair" element={<SidesPair />} />
        <Route path="/pairing/dessertspair" element={<DessertsPair />} />
        <Route path="/bytheglass" element={<ByTheGlass />} />
        <Route path="/bytheglass/sparklings" element={<SparklingsBTG />} />
        <Route path="/bytheglass/whites" element={<WhitesBTG />} />
        <Route path="/bytheglass/reds" element={<RedsBTG />} />
      
        <Route path="/liquor" element={<Liquor />} />
        <Route path="/cocktails" element={<Cocktails />} />
        <Route path="/service" element={<Service />} />
        <Route path="/music" element={<Music />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </>
  );
}
