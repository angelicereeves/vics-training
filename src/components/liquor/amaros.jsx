import React, { useState } from "react";
import { Link } from "react-router-dom";
import BGpic from "../../assets/BGimages/bar3.jpg";

const amaros = [
  { name: "APEROL APERITIVO", info: "A light, bittersweet Italian aperitif with orange and rhubarb—perfect for spritzes." },
  { name: "ANGOSTURA AMARO", info: "A deep, complex herbal amaro with warming spice and bitter citrus notes." },
  { name: "AVERNA SICILIANO AMARO LIQUEUR", info: "A classic Sicilian amaro with balanced bitterness and smooth caramel sweetness." },
  { name: "BENEDICTINE, DOM LIQUEUR", info: "An herbal French liqueur with honey, spice, and over 27 botanicals." },
  { name: "BICERIN CHOCOLATE LIQUEUR DARK", info: "Rich dark chocolate Italian liqueur ideal for dessert drinks." },
  { name: "BICERIN CHOCOLATE LIQUEUR WHITE", info: "Creamy white chocolate liqueur for indulgent cocktail creations." },
  { name: "BRAULIO AMARO", info: "Alpine herbal amaro with deep earthy bitterness and piney character." },
  { name: "BRUTO AMERICANO AMARO", info: "A bold domestic amaro with citrus, spice, and red-hued bitterness." },
  { name: "CAMPARI APERITIVO", info: "Iconic Italian bitter red aperitivo used in Negronis and spritzes." },
  { name: "CARDAMARO VINO AMARO", info: "Wine-based amaro with cardoon and subtle bitterness, soft and sippable." },
  { name: "CHARTRUESE GREEN", info: "A bold, high-proof herbal liqueur made by Carthusian monks." },
  { name: "CHARTRUESE YELLOW", info: "A milder, sweeter version of Green Chartreuse with floral and spice notes." },
  { name: "COCCHI AMERICANO BIANCO", info: "Italian aperitif wine with citrus, spice, and quinine bitterness—Lillet Blanc alternative." },
  { name: "COCCHI VERMOUTH DI TORINO DRY", info: "A dry vermouth with herbal elegance and balanced bitterness." },
  { name: "COINTREAU ORANGE L'UNIQUE", info: "A triple sec with crisp orange zest, used in Margaritas and Cosmos." },
  { name: "DISARONNO AMARETTO ORIGINALE", info: "Classic Italian almond-flavored liqueur with a velvety finish." },
  { name: "DRAMBUIE ISLE OF SKYE", info: "Whisky-based liqueur with honey, herbs, and Scotch character." },
  { name: "FERNET BRANCA", info: "Bold, bitter amaro with intense herbal minty flavor—popular as a bartender shot." },
  { name: "FERNET MENTA", info: "A sweeter, mint-forward version of Fernet Branca with less bitterness." },
  { name: "LICOR 43", info: "Spanish vanilla-citrus liqueur with floral spice and creamy notes." },
  { name: "VERMOUTH SWEET MYRRHA", info: "Classic Italian-style sweet vermouth for Manhattans and Negronis." },
  { name: "LUXARDO MARASCHINO CHERRY", info: "Clear cherry liqueur with nutty, floral complexity—vital for classic cocktails." },
  { name: "LUXARDO LIMONCELLO", info: "Bright lemon liqueur with zest and sweetness from southern Italy." },
  { name: "MONTENEGRO AMARO", info: "A well-balanced amaro with citrus, floral notes, and a mild finish—great for beginners." },
  { name: "MARIE BRIZARD ANNISSETTE", info: "A French anise-flavored liqueur with a soft, licorice profile." },
  { name: "ROTHMAN CRÈME DE VIOLETTE LIQUEUR", info: "Floral liqueur essential in the Aviation cocktail—delicate and aromatic." },
  { name: "RAMAZZOTTI", info: "Italian amaro with orange peel, star anise, and herbal warmth." },
  { name: "RAMAZZOTTI SAMBUCA", info: "A sweet anise-flavored liqueur, often served with espresso or flambéed." },
  { name: "NARDINI AMARO", info: "Bold and bitter with alpine herbs and dark roasted character." },
  { name: "NONINO AMARO", info: "Elegant and complex amaro aged in barrels, with herbal, citrus, and dried fruit notes." },
  { name: "GALIANO L'AUTENTICO", info: "Tall golden liqueur with vanilla, herbs, and a distinctive retro vibe." },
  { name: "ABSENTE ABSINTHE", info: "Wormwood-based spirit with bold anise and herbal complexity." },
  { name: "GRAND MARNIER", info: "Cognac-based orange liqueur used in upscale cocktails and desserts." },
  { name: "PIMMS GIN LIQUEUR THE ORIGINAL NO. 1 CUP", info: "Fruity British gin-based liqueur perfect in Pimm’s Cups and spritzes." },
  { name: "PERNOD ANISE PASTIS", info: "Anise-based French aperitif with licorice and herbal notes—serve diluted with water." },
  { name: "FRANGELICO HAZELNUT LIQUEUR", info: "Italian hazelnut liqueur with vanilla and chocolate undertones." },
  { name: "BAILEYS BELGIAN CHOCOLATE LIQUEUR", info: "Creamy chocolate liqueur perfect for dessert cocktails." },
  { name: "BAILEYS IRISH CREAM", info: "Classic Irish cream liqueur combining whiskey, cream, and cocoa." },
  { name: "BUFFALO TRACE BOURBON CREAM", info: "Rich and creamy bourbon-based liqueur ideal for coffee or dessert." },
  { name: "KAHLUA COFFEE LIQUOR", info: "Coffee liqueur with rum and sugar—base for White Russians and Espresso Martinis." },
  { name: "ST. GERMAIN ELDERFLOWER LIQUEUR", info: "Elegant floral liqueur made from fresh elderflowers—aromatic and bright." },
  { name: "CHAMBORD BLACK RASPBERRY LIQUEUR", info: "French liqueur made with raspberries, blackberries, and XO Cognac." },
  { name: "FULTONS HARVEST PUMPKIN PIE CREAM LIQUEUR", info: "Seasonal cream liqueur with spiced pumpkin pie flavor." },
  { name: "RUMPLE MINZE 100 PROOF", info: "High-proof peppermint schnapps with intense mint flavor." },
  { name: "MR BLACK COLD BREW COFFEE LIQUEUR", info: "Australian cold brew liqueur with robust coffee and low sugar." },
  { name: "MR. BOSTON AMARETTO", info: "Budget-friendly almond-flavored liqueur for Amaretto Sours and more." },
  { name: "MR. BOSTON MELON", info: "Bright green melon-flavored schnapps—sweet and vibrant." },
  { name: "MR BOSTON TRIPLE SEC", info: "Affordable orange liqueur used in Margaritas and Sidecars." },
  { name: "MR BOSTON BLUE CURACAO", info: "Electric blue citrus liqueur with orange flavor—great for tiki drinks." },
  { name: "MR BOSTON PEACH SCHNAPPS", info: "Sweet peach-flavored schnapps used in fruity cocktails like Sex on the Beach." },
  { name: "MR BOSTON CREME DE MENTE GREEN", info: "Mint liqueur with a green color and cool sweetness—used in Grasshoppers." },
  { name: "MR BOSTON CREME DE BANANA", info: "Bright yellow banana liqueur used in tropical dessert cocktails." },
  { name: "MR. BOSTON CREME DE COCAO DARK", info: "Chocolate liqueur with rich cocoa notes—perfect in dessert drinks." },
  { name: "MR. BOSTON CREME DE COCAO LIGHT", info: "Sweeter and lighter version of dark crème de cacao for creamy cocktails." },
  { name: "MR BOSTON SOUR APPLE SCHNAPPS", info: "Green apple schnapps with a sweet-tart profile—great in Appletinis." },
  { name: "TIRAMISU CREAM LIQUEUR", info: "Dessert liqueur with flavors of espresso, cocoa, and mascarpone." },
  { name: "TIRAMISU LIQUEUR", info: "Bold, sweet liqueur mimicking the classic Italian dessert." },
  { name: "TEMPUS FUGIT CREME DE NOYAUX", info: "Historic almond-flavored liqueur made with apricot kernels—bright pink and floral." }
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
                    {/* Image Placeholder */}
                    Beer image or logo goes here
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
      </div>
    </div>
  );
}
