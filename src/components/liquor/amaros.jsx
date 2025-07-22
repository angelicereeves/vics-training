import React, { useState } from "react";
import { Link } from "react-router-dom";
import BGpic from "../../assets/BGimages/bar3.jpg";
import Aperol from "../../assets/liquorImages/aperol.jpg";
import Angostura from "../../assets/liquorImages/angostura.jpg";
import Averna from "../../assets/liquorImages/averna.jpg";
import Benedictine from "../../assets/liquorImages/benedictine.jpg";
import BicerinDark from "../../assets/liquorImages/bicerindarkchocolate.jpg";
import BicerinWhite from "../../assets/liquorImages/bicerinwhitechocolate.jpg";
import Braulio from "../../assets/liquorImages/braulio.jpg";
import Bruto from "../../assets/liquorImages/brutoamericano.jpg";
import Campari from "../../assets/liquorImages/campari.jpg";
import Cardamaro from "../../assets/liquorImages/cardamaro.jpg";
import ChartrueseGreen from "../../assets/liquorImages/greenchartruese.jpg";
import ChartrueseYellow from "../../assets/liquorImages/yellowchartruese.jpg";
import CocchiAmericano from "../../assets/liquorImages/cocchiamericano.jpg";
import CocchiVermouth from "../../assets/liquorImages/cocchivermouth.jpg";
import Cointreau from "../../assets/liquorImages/cointreau.jpg";
import Disarrono from "../../assets/liquorImages/disaronno.jpg";
import Drambuie from "../../assets/liquorImages/drambuie.jpg";
import FernetBranca from "../../assets/liquorImages/fernetbranca.jpg";
import FernetMenta from "../../assets/liquorImages/fernetmenta.jpg";
import Licor43 from "../../assets/liquorImages/licor43.jpg";
import VermouthMyrrha from "../../assets/liquorImages/vermouthmyrrha.jpg";
import LuxardoMaraschino from "../../assets/liquorImages/luxardomaraschino.jpg";
import LuxardoLimoncello from "../../assets/liquorImages/luxardolimoncello.jpg";
import Montenegro from "../../assets/liquorImages/montenegro.jpg";
import MarieBrizard from "../../assets/liquorImages/mariebrizardanisette.jpg";
import CremeDeViolette from "../../assets/liquorImages/cremedeviolette.jpg";
import RamazzottiAmaro from "../../assets/liquorImages/ramazzottiamaro.jpg";
import RamazzottiSambuca from "../../assets/liquorImages/ramazzottisambuca.jpg";
import NardiniAmaro from "../../assets/liquorImages/nardiniamaro.jpg";
import NoninoAmaro from "../../assets/liquorImages/noninoamaro.jpg";
import Galiano from "../../assets/liquorImages/galiano.jpg";
import AbsenteAbsinthe from "../../assets/liquorImages/absenteabsinthe.jpg";
import GrandMarnier from "../../assets/liquorImages/grandmarnier.jpg";
import Pimms from "../../assets/liquorImages/pimms.jpg";
import Pernod from "../../assets/liquorImages/pernod.jpg";
import Frangelico from "../../assets/liquorImages/frangelico.jpg";
import BaileysChocolate from "../../assets/liquorImages/baileyschocolate.jpg";
import BaileysIrishCream from "../../assets/liquorImages/baileys.jpg";
import BuffaloTraceBourbonCream from "../../assets/liquorImages/buffalotracebourboncream.jpg";
import Kahlua from "../../assets/liquorImages/kahula.jpg";
import StGermain from "../../assets/liquorImages/stgermain.jpg";
import Chambord from "../../assets/liquorImages/chambord.jpg";
import FultonsHarvestPumpkinPie from "../../assets/liquorImages/fultonsharvest.jpg";
import RumpleMinze from "../../assets/liquorImages/rumpleminze.jpg";
import MrBlack from "../../assets/liquorImages/mrblack.jpg";
import MrBostonAmaretto from "../../assets/liquorImages/mrbostonamaretto.jpg";
import MrBostonMelon from "../../assets/liquorImages/mrbostonmelon.jpg";
import MrBostonTripleSec from "../../assets/liquorImages/mrbostontriplesec.jpg";
import MrBostonBlueCuracao from "../../assets/liquorImages/mrbostonbluecuracao.jpg";
import MrBostonPeachSchnapps from "../../assets/liquorImages/mrbostonpeach.jpg";
import MrBostonCremeDeMenteGreen from "../../assets/liquorImages/mrbostoncremedementegreen.jpg";
import MrBostonCremeDeBanana from "../../assets/liquorImages/mrbostoncremedebanana.jpg";
import MrBostonCremeDeCacaoDark from "../../assets/liquorImages/mrbostoncremedecacaodark.jpg";
import MrBostonCremeDeCacaoLight from "../../assets/liquorImages/mrbostoncremedecacaolight.jpg";
import MrBostonSourAppleSchnapps from "../../assets/liquorImages/mrbostonsourapple.jpg";
//import TiramisuCream from "../../assets/liquorImages/tiramisucream.jpg";
//import TiramisuLiqueur from "../../assets/liquorImages/tiramisuliqueur.jpg";
import TempusFugitCremeDeNoyaux from "../../assets/liquorImages/cremedenoyaux.jpg";



const amaros = [
  { name: "APEROL APERITIVO",
    image: Aperol,
    info: "A light, bittersweet Italian aperitif with orange and rhubarb—perfect for spritzes." },
  { name: "ANGOSTURA AMARO",
    image: Angostura,
    info: "A deep, complex herbal amaro with warming spice and bitter citrus notes." },
  { name: "AVERNA SICILIANO AMARO LIQUEUR",
    image: Averna,
    info: "A classic Sicilian amaro with balanced bitterness and smooth caramel sweetness." },
  { name: "BENEDICTINE, DOM LIQUEUR",
    image: Benedictine,
    info: "An herbal French liqueur with honey, spice, and over 27 botanicals." },
  { name: "BICERIN CHOCOLATE LIQUEUR DARK",
    image: BicerinDark,
    info: "Rich dark chocolate Italian liqueur ideal for dessert drinks." },
  { name: "BICERIN CHOCOLATE LIQUEUR WHITE",
    image: BicerinWhite,
    info: "Creamy white chocolate liqueur for indulgent cocktail creations." },
  { name: "BRAULIO AMARO",
    image: Braulio,
    info: "Alpine herbal amaro with deep earthy bitterness and piney character." },
  { name: "BRUTO AMERICANO AMARO",
    image: Bruto,
    info: "A bold domestic amaro with citrus, spice, and red-hued bitterness." },
  { name: "CAMPARI APERITIVO",
    image: Campari,
    info: "Iconic Italian bitter red aperitivo used in Negronis and spritzes." },
  { name: "CARDAMARO VINO AMARO",
    image: Cardamaro,
    info: "Wine-based amaro with cardoon and subtle bitterness, soft and sippable." },
  { name: "CHARTRUESE GREEN",
    image: ChartrueseGreen,
    info: "A bold, high-proof herbal liqueur made by Carthusian monks." },
  { name: "CHARTRUESE YELLOW",
    image: ChartrueseYellow,
    info: "A milder, sweeter version of Green Chartreuse with floral and spice notes." },
  { name: "COCCHI AMERICANO BIANCO",
    image: CocchiAmericano,
    info: "Italian aperitif wine with citrus, spice, and quinine bitterness—Lillet Blanc alternative." },
  { name: "COCCHI VERMOUTH DI TORINO DRY",
    image: CocchiVermouth,
    info: "A dry vermouth with herbal elegance and balanced bitterness." },
  { name: "COINTREAU ORANGE L'UNIQUE",
    image: Cointreau,
    info: "A triple sec with crisp orange zest, used in Margaritas and Cosmos." },
  { name: "DISARONNO AMARETTO ORIGINALE",
    image: Disarrono,
    info: "Classic Italian almond-flavored liqueur with a velvety finish." },
  { name: "DRAMBUIE ISLE OF SKYE",
    image: Drambuie,
    info: "Whisky-based liqueur with honey, herbs, and Scotch character." },
  { name: "FERNET BRANCA",
    image: FernetBranca,
    info: "Bold, bitter amaro with intense herbal minty flavor—popular as a bartender shot." },
  { name: "FERNET MENTA",
    image: FernetMenta,
    info: "A sweeter, mint-forward version of Fernet Branca with less bitterness." },
  { name: "LICOR 43",
    image: Licor43,
    info: "Spanish vanilla-citrus liqueur with floral spice and creamy notes." },
  { name: "VERMOUTH SWEET MYRRHA",
    image: VermouthMyrrha,
    info: "Classic Italian-style sweet vermouth for Manhattans and Negronis." },
  { name: "LUXARDO MARASCHINO CHERRY",
    image: LuxardoMaraschino,
    info: "Clear cherry liqueur with nutty, floral complexity—vital for classic cocktails." },
  { name: "LUXARDO LIMONCELLO",
    image: LuxardoLimoncello,
    info: "Bright lemon liqueur with zest and sweetness from southern Italy." },
  { name: "MONTENEGRO AMARO",
    image: Montenegro,
    info: "A well-balanced amaro with citrus, floral notes, and a mild finish—great for beginners." },
  { name: "MARIE BRIZARD ANNISSETTE",
    image: MarieBrizard,
    info: "A French anise-flavored liqueur with a soft, licorice profile." },
  { name: "ROTHMAN CRÈME DE VIOLETTE LIQUEUR",
    image: CremeDeViolette,
    info: "Floral liqueur essential in the Aviation cocktail—delicate and aromatic." },
  { name: "RAMAZZOTTI AMARO",
    image: RamazzottiAmaro,
    info: "Italian amaro with orange peel, star anise, and herbal warmth." },
  { name: "RAMAZZOTTI SAMBUCA",
    image: RamazzottiSambuca,
    info: "A sweet anise-flavored liqueur, often served with espresso or flambéed." },
  { name: "NARDINI AMARO",
    image: NardiniAmaro,
    info: "Bold and bitter with alpine herbs and dark roasted character." },
  { name: "NONINO AMARO",
    image: NoninoAmaro,
    info: "Elegant and complex amaro aged in barrels, with herbal, citrus, and dried fruit notes." },
  { name: "GALIANO L'AUTENTICO",
    image: Galiano,
    info: "Tall golden liqueur with vanilla, herbs, and a distinctive retro vibe." },
  { name: "ABSENTE ABSINTHE",
    image: AbsenteAbsinthe,
    info: "Wormwood-based spirit with bold anise and herbal complexity." },
  { name: "GRAND MARNIER",
    image: GrandMarnier,
    info: "Cognac-based orange liqueur used in upscale cocktails and desserts." },
  { name: "PIMMS GIN LIQUEUR THE ORIGINAL NO. 1 CUP",
    image: Pimms,
    info: "Fruity British gin-based liqueur perfect in Pimm’s Cups and spritzes." },
  { name: "PERNOD ANISE PASTIS",
    image: Pernod,
    info: "Anise-based French aperitif with licorice and herbal notes—serve diluted with water." },
  { name: "FRANGELICO HAZELNUT LIQUEUR",
    image: Frangelico,
    info: "Italian hazelnut liqueur with vanilla and chocolate undertones." },
  { name: "BAILEYS BELGIAN CHOCOLATE LIQUEUR",
    image: BaileysChocolate,
    info: "Creamy chocolate liqueur perfect for dessert cocktails." },
  { name: "BAILEYS IRISH CREAM",
    image: BaileysIrishCream,
    info: "Classic Irish cream liqueur combining whiskey, cream, and cocoa." },
  { name: "BUFFALO TRACE BOURBON CREAM",
    image: BuffaloTraceBourbonCream,
    info: "Rich and creamy bourbon-based liqueur ideal for coffee or dessert." },
  { name: "KAHLUA COFFEE LIQUOR",
    image: Kahlua,
    info: "Coffee liqueur with rum and sugar—base for White Russians and Espresso Martinis." },
  { name: "ST. GERMAIN ELDERFLOWER LIQUEUR",
    image: StGermain,
    info: "Elegant floral liqueur made from fresh elderflowers—aromatic and bright." },
  { name: "CHAMBORD BLACK RASPBERRY LIQUEUR",
    image: Chambord,
    info: "French liqueur made with raspberries, blackberries, and XO Cognac." },
  { name: "FULTONS HARVEST PUMPKIN PIE CREAM LIQUEUR",
    image: FultonsHarvestPumpkinPie,
    info: "Seasonal cream liqueur with spiced pumpkin pie flavor." },
  { name: "RUMPLE MINZE 100 PROOF",
    image: RumpleMinze,
    info: "High-proof peppermint schnapps with intense mint flavor." },
  { name: "MR BLACK COLD BREW COFFEE LIQUEUR",
    image: MrBlack,
    info: "Australian cold brew liqueur with robust coffee and low sugar." },
  { name: "MR. BOSTON AMARETTO",
    image: MrBostonAmaretto,
    info: "Budget-friendly almond-flavored liqueur for Amaretto Sours and more." },
  { name: "MR. BOSTON MELON",
    image: MrBostonMelon,
    info: "Bright green melon-flavored schnapps—sweet and vibrant." },
  { name: "MR BOSTON TRIPLE SEC",
    image: MrBostonTripleSec,
    info: "Affordable orange liqueur used in Margaritas and Sidecars." },
  { name: "MR BOSTON BLUE CURACAO",
    image: MrBostonBlueCuracao,
    info: "Electric blue citrus liqueur with orange flavor—great for tiki drinks." },
  { name: "MR BOSTON PEACH SCHNAPPS",
    image: MrBostonPeachSchnapps,
    info: "Sweet peach-flavored schnapps used in fruity cocktails like Sex on the Beach." },
  { name: "MR BOSTON CREME DE MENTE GREEN",
    image: MrBostonCremeDeMenteGreen,
    info: "Mint liqueur with a green color and cool sweetness—used in Grasshoppers." },
  { name: "MR BOSTON CREME DE BANANA",
    image: MrBostonCremeDeBanana,
    info: "Bright yellow banana liqueur used in tropical dessert cocktails." },
  { name: "MR. BOSTON CREME DE COCAO DARK",
    image: MrBostonCremeDeCacaoDark,
    info: "Chocolate liqueur with rich cocoa notes—perfect in dessert drinks." },
  { name: "MR. BOSTON CREME DE COCAO LIGHT",
    image: MrBostonCremeDeCacaoLight,
    info: "Sweeter and lighter version of dark crème de cacao for creamy cocktails." },
  { name: "MR BOSTON SOUR APPLE SCHNAPPS",
    image: MrBostonSourAppleSchnapps,
    info: "Green apple schnapps with a sweet-tart profile—great in Appletinis." },
  { name: "TIRAMISU CREAM LIQUEUR",
    image: null,
    info: "Dessert liqueur with flavors of espresso, cocoa, and mascarpone." },
  { name: "TIRAMISU LIQUEUR",
    image: null,
    info: "Bold, sweet liqueur mimicking the classic Italian dessert." },
  { name: "TEMPUS FUGIT CREME DE NOYAUX",
    image: TempusFugitCremeDeNoyaux,
    info: "Historic almond-flavored liqueur made with apricot kernels—bright pink and floral." }
];



export default function AmarosList() {
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
          to="/liquor"
          className="inline-block mt-16 px-6 py-3 bg-white text-emerald-800 font-bold rounded-full shadow-lg hover:bg-emerald-100 transition"
        >
          ← Back to Liquor Program
        </Link>

        <h1 className="text-5xl font-mono font-bold text-emerald-300 drop-shadow-lg">
          Amaros and Cordials
        </h1>

        <p className="text-lg font-mono font-bold text-emerald-100">
          Explore our curated selection of craft, imported, and classic amaros and cordials.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 text-left">
          {amaros.map((amaro, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md border border-emerald-400 rounded-2xl p-4 shadow-xl"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggle(index)}
              >
                <h2 className="text-xl font-mono font-bold text-emerald-200">
                  {amaro.name}
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
                    <img
                      src={amaro.image}
                      alt={amaro.name}
                      className="object-contain h-full"
                    />
                  </div>
                  <p className="text-sm font-mono font-semibold text-emerald-100">
                    <span className="font-bold text-emerald-500">Info: </span>
                    {amaro.info}
                  </p>
                </div>
              )}
            </div>
            
          ))}
        </div>
                <Link
          to="/liquor"
          className="inline-block mt-16 px-6 py-3 bg-white text-emerald-800 font-bold rounded-full shadow-lg hover:bg-emerald-100 transition"
        >
          ← Back to Liquor Program
        </Link>
      </div>
    </div>
  );
}
