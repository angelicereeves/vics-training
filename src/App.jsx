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

import Liquor from "./components/liquor/liquor";
import BeerList from "./components/liquor/beer";
import Amaros from "./components/liquor/amaros";
import Bourbons from "./components/liquor/bourbons";
import InternationalWhiskeys from "./components/liquor/internationalwhiskys"
import Ryes from "./components/liquor/ryes";
import Vodkas from "./components/liquor/vodkas";
import Gins from "./components/liquor/gins";
import Rums from "./components/liquor/rums";
import Tequilas from "./components/liquor/tequilas";
import WellLiquors from "./components/liquor/well";

import Cocktails from "./components/cocktails/cocktails";
import SpecialtyCocktails from "./components/cocktails/specialtycocktails";
import ClassicCocktails from "./components/cocktails/classiccocktails";
import DessertCocktails from "./components/cocktails/dessertcocktails";
import Mocktails from "./components/cocktails/mocktails";

import ShowCocktails from "./components/cocktails/showcocktails/showcocktails";
import AndJulietCocktails from "./components/cocktails/showcocktails/andjuliet";
import BackToTheFutureCocktails from "./components/cocktails/showcocktails/backtothefuture";
import BeetlejuiceCocktails from "./components/cocktails/showcocktails/beetlejuice";
import CherCocktails from "./components/cocktails/showcocktails/cher";
import ChicagoCocktails from "./components/cocktails/showcocktails/chicago";
import ComeFromAwayCocktails from "./components/cocktails/showcocktails/comefromaway";
import CompanyCocktails from "./components/cocktails/showcocktails/company";
import FunnyGirl from "./components/cocktails/showcocktails/funnygirl";
import GirlFromNorthCountryCocktails from "./components/cocktails/showcocktails/girlfromnorthcountry";
import HamiltonCocktails from "./components/cocktails/showcocktails/hamilton";
import KimberlyAkimboCocktails from "./components/cocktails/showcocktails/kimberlyakimbo";
import MrsDoubtfireCocktails from "./components/cocktails/showcocktails/mrsdoubtfire";
import ParadeCocktails from "./components/cocktails/showcocktails/parade";
import PeterPanCocktails from "./components/cocktails/showcocktails/peterpan";
import ShenYunCocktails from "./components/cocktails/showcocktails/shenyun";
import ShrekCocktails from "./components/cocktails/showcocktails/shrek";
import SomeLikeItHotCocktails from "./components/cocktails/showcocktails/somelikeithot";
import SwanLakeCocktails from "./components/cocktails/showcocktails/swanlake";
import TemptationsCocktails from "./components/cocktails/showcocktails/temptations";
import TinaTurnerCocktails from "./components/cocktails/showcocktails/tinaturner";
import WizardOfOZCocktails from "./components/cocktails/showcocktails/wizardofoz";


import SeasonalCocktails from "./components/cocktails/seasonalcocktails/seasonalcocktails"
import Autumn from "./components/cocktails/seasonalcocktails/autumn";
import Christmas from "./components/cocktails/seasonalcocktails/christmas";
import ValentinesDay from "./components/cocktails/seasonalcocktails/valentinesday";
import CincoDeMayo from "./components/cocktails/seasonalcocktails/cincodemayo";


import Service from "./components/service/service";
import Servers from "./components/service/servers";
import Bussers from "./components/service/bussers";
import Runners from "./components/service/runners";
import Bartenders from "./components/service/bartenders";
import Hosts from "./components/service/hosts";

import Quiz from "./components/quizzes/quiz";
import Quiz1 from "./components/quizzes/quiz1";
import Quiz2 from "./components/quizzes/quiz2";
import Quiz3 from "./components/quizzes/quiz3";
import Quiz4 from "./components/quizzes/quiz4";
import Quiz5 from "./components/quizzes/quiz5";
import Quiz6 from "./components/quizzes/quiz6";
import Quiz7 from "./components/quizzes/quiz7";
import Quiz8 from "./components/quizzes/quiz8";
import Quiz9 from "./components/quizzes/quiz9";
import Quiz10 from "./components/quizzes/quiz10";
import Quiz11 from "./components/quizzes/quiz11";
import Quiz12 from "./components/quizzes/quiz12";


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
        <Route path="/bytheglass" element={<ByTheGlass />} />
        <Route path="/bytheglass/sparklings" element={<SparklingsBTG />} />
        <Route path="/bytheglass/whites" element={<WhitesBTG />} />
        <Route path="/bytheglass/reds" element={<RedsBTG />} />


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

      
        <Route path="/liquor/" element={<Liquor />} />
        <Route path="/liquor/beer" element={<BeerList />} />
        <Route path="/liquor/amaros" element={<Amaros />} />
        <Route path="/liquor/bourbons" element={<Bourbons />} />
        <Route path="/liquor/internationalwhiskeys" element={<InternationalWhiskeys />} />
        <Route path="/liquor/ryes" element={<Ryes />} />
        <Route path="/liquor/vodkas" element={<Vodkas />} />
        <Route path="/liquor/gins" element={<Gins />} />
        <Route path="/liquor/rums" element={<Rums />} />
        <Route path="/liquor/tequilas" element={<Tequilas />} />
        <Route path="/liquor/well" element={<WellLiquors />} />


        <Route path="/cocktails" element={<Cocktails />} />
        <Route path="/cocktails/specialtycocktails" element={<SpecialtyCocktails />} />
        <Route path="/cocktails/classiccocktails" element={<ClassicCocktails />} />
        <Route path="/cocktails/dessertcocktails" element={<DessertCocktails />} />
        <Route path="/cocktails/mocktails" element={<Mocktails />} />

        <Route path="/cocktails/showcocktails/showcocktails" element={<ShowCocktails />} />
        <Route path="/cocktails/showcocktails/andjuliet" element={<AndJulietCocktails />} />
        <Route path="/cocktails/showcocktails/backtothefuture" element={<BackToTheFutureCocktails />} />
        <Route path="/cocktails/showcocktails/beetlejuice" element={<BeetlejuiceCocktails />} />
        <Route path="/cocktails/showcocktails/cher" element={<CherCocktails />} />
        <Route path="/cocktails/showcocktails/chicago" element={<ChicagoCocktails />} />
        <Route path="/cocktails/showcocktails/comefromaway" element={<ComeFromAwayCocktails />} />
        <Route path="/cocktails/showcocktails/company" element={<CompanyCocktails />} />
        <Route path="/cocktails/showcocktails/funnygirl" element={<FunnyGirl />} />
        <Route path="/cocktails/showcocktails/girlfromnorthcountry" element={<GirlFromNorthCountryCocktails />} />
        <Route path="/cocktails/showcocktails/hamilton" element={<HamiltonCocktails />} />
        <Route path="/cocktails/showcocktails/kimberlyakimbo" element={<KimberlyAkimboCocktails />} />
        <Route path="/cocktails/showcocktails/mrsdoubtfire" element={<MrsDoubtfireCocktails />} />
        <Route path="/cocktails/showcocktails/parade" element={<ParadeCocktails />} />
        <Route path="/cocktails/showcocktails/peterpan" element={<PeterPanCocktails />} />
        <Route path="/cocktails/showcocktails/shenyun" element={<ShenYunCocktails />} />
        <Route path="/cocktails/showcocktails/shrek" element={<ShrekCocktails />} />
        <Route path="/cocktails/showcocktails/somelikeithot" element={<SomeLikeItHotCocktails />} />
        <Route path="/cocktails/showcocktails/swanlake" element={<SwanLakeCocktails />} />
        <Route path="/cocktails/showcocktails/temptations" element={<TemptationsCocktails />} />
        <Route path="/cocktails/showcocktails/tinaturner" element={<TinaTurnerCocktails />} />
        <Route path="/cocktails/showcocktails/wizardofoz" element={<WizardOfOZCocktails />} />


        <Route path="/cocktails/seasonalcocktails/seasonalcocktails" element={<SeasonalCocktails />} />
        <Route path="/cocktails/seasonalcocktails/autumn" element={<Autumn />} />
        <Route path="/cocktails/seasonalcocktails/christmas" element={<Christmas />} />
        <Route path="/cocktails/seasonalcocktails/valentinesday" element={<ValentinesDay />} />
        <Route path="/cocktails/seasonalcocktails/cincodemayo" element={<CincoDeMayo />} />



        <Route path="/service/service" element={<Service />} />
        <Route path="/service/bussers" element={<Bussers />} />
        <Route path="/service/servers" element={<Servers />} />
        <Route path="/service/runners" element={<Runners />} />
        <Route path="/service/bartenders" element={<Bartenders />} />
        <Route path="/service/hosts" element={<Hosts />} />

        <Route path="/quizzes/quiz" element={<Quiz />} />
        <Route path="/quizzes/quiz1" element={<Quiz1 />} />
        <Route path="/quizzes/quiz2" element={<Quiz2 />} />
        <Route path="/quizzes/quiz3" element={<Quiz3 />} />
        <Route path="/quizzes/quiz4" element={<Quiz4 />} />
        <Route path="/quizzes/quiz5" element={<Quiz5 />} />
        <Route path="/quizzes/quiz6" element={<Quiz6 />} />
        <Route path="/quizzes/quiz7" element={<Quiz7 />} />
        <Route path="/quizzes/quiz8" element={<Quiz8 />} />
        <Route path="/quizzes/quiz9" element={<Quiz9 />} />
        <Route path="/quizzes/quiz10" element={<Quiz10 />} />
        <Route path="/quizzes/quiz11" element={<Quiz11 />} />
        <Route path="/quizzes/quiz12" element={<Quiz12 />} />
      </Routes>
    </>
  );
}
