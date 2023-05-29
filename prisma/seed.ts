import { PrismaClient } from "@prisma/client";

const prisma: any = new PrismaClient();

const locations = [
  {
    title: "Livraria Lello",
    categoryTag: "Shopping",
    locationTag: "Galerias",
    photographer: "Edgar Jiménez",
    image: "/assets/timeout1.jpg",
    content:
      "<h1>Time Out says</h1><p>British newspaper The Guardian and travel website Lonely Planet picked it as the world’s third most beautiful bookstore. Over 100 years old, Lello is a true art-nouveau pearl with neo-Gothic details. Inside, you’ll find the newly restored “Decus in Labore” stained glass and a fabulous red staircase, the store’s defining feature, said to have inspired the one in Hogwarts, from the Harry Potter books (author J.K. Rowling once lived in Porto). As you’re walking in, look down: there’s a carpet filled with words related to the city. Be warned: you’ll probably have to wait in line, there are that many visitors. Tickets cost 4€, to be deducted from any book purchase, and you buy them from a red booth outside the store, where you can also leave your bags.</p>",
    date: "Wednesday 17 May 2017",
    address: "Rua das Carmelitas, 144 Porto 4050-161",
    linkAddress: "http://www.livrarialello.pt/",
    phoneNumber: "+351 22 200 2037",
    priceDescription: "4€",
    openingHours: "Mon-Fri 10am-7.30pm, Sat-Sun 10am-7pm",
  },
  {
    title: "Clérigos Tower",
    categoryTag: "Attractions",
    locationTag: "Baixa",
    photographer: "",
    image: "/assets/timeout2.jpg",
    content:
      "<h1>Time Out says</h1><p>The 75 metres, 225 steps high tower gives access to a 360° view of the city – one of the best and most Instagrammable on offer. It was inaugurated in 1763 and has been Porto’s biggest landmark since then.</p>",
    date: "Wednesday 22 March 2017",
    address: "Rua de São Filipe Nery Porto 4050-546",
    linkAddress: "http://www.torredosclerigos.pt/",
    phoneNumber: "+351 22 014 5489",
    priceDescription: "",
    openingHours: "Daily 9am-7pm",
  },
  {
    title: "Aduela",
    categoryTag: "Bars and pubs",
    locationTag: "Baixa",
    photographer: "",
    image: "/assets/timeout3.jpg",
    content:
      "<h1>Time Out says</h1><p>Porto is a relatively small city but it has a considerable number of bars where you can have a late afternoon post-work drink. The locals love it. Don’t take our word for it, just go to Aduela and see for yourself. This is probably the best known and loved spot for after-work refreshments (you can also check Candelabro, at the Rua da Picaria). It’s a good place to sample Portuguese wines from several regions at affordable prices; you can also try sangria, the popular mix of wine and fruit (great in warm weather), and moscatel, the sweet wine from the southern region of Setúbal (during summertime, ask for a couple of ice cubes in it). There’s also snacks such as sandwiches with traditional Portuguese products, “tremoços” (lupini beans) or grissini. If the terrace is full, follow the locals: ask for a drink and sit on the street.</p>",
    date: "Thursday 13 April 2017",
    address: "Rua das Oliveiras, 36 Baixa Porto 4050-448",
    linkAddress: "https://www.facebook.com/Aduela-taberna-bar-280492605406074",
    phoneNumber: "+351 22 208 4398",
    priceDescription: "",
    openingHours: "Sun-Mon 3pm-2am, Tue-Thu 10-2am, Fri-Sat 10-4am",
  },
  {
    title: "Café Santiago",
    categoryTag: "Restaurants",
    locationTag: "Santa Catarina",
    photographer: "João Saramago",
    image: "/assets/timeout4.jpg",
    content:
      "<h1>Time Out says</h1><p>Prepare to wait (and wait, and wait) in the queue for a seat at Santiago – above all at peak times, that is, lunch and dinner. Is it worth it? Yes, when it’s a matter of eating Porto’s best francesinha, with a balanced sauce with a touch of acidity and slightly spicy; mortadela with greenpepper;goodlinguiça sausage that’s nice and spicy; a slim steak with little fat; lots of cheese melted over it; and an egg on top.</p>",
    date: "Monday 17 April 2017",
    address: "Rua Passos Manuel, 226 Porto 4000-382",
    linkAddress: "http://cafesantiago.pt/pt.html",
    phoneNumber: "22 205 5797",
    priceDescription: "",
    openingHours: "Seg-Sáb 11.00-23.00",
  },
  {
    title: "Adega São Nicolau",
    categoryTag: "Restaurants",
    locationTag: "Ribeira",
    photographer: "Cláudia Paiva",
    image: "/assets/timeout5.jpg",
    content:
      "<h1>Time Out says</h1><p>We're not shy about the things we love. In regards to the Adega São Nicolau, we are very expansive: we love everything. There's the menu, full of great choices – such as chicken bordelaise, octopus fillets with rice or the perfect appetizer, cod cakes. But we can also mention the desserts (all homemade) or the outdoors tables, strategically facing the Douro river. And then there's the great service – mr. António Coelho has been doing this since he was 11.</p>",
    date: "Thursday 20 April 2017",
    address: "Rua de São Nicolau, 1 Ribeira Porto 4050-561",
    linkAddress: "https://www.facebook.com/AdegaSNicolau?fref=ts",
    phoneNumber: "+351 22 200 8232",
    priceDescription: "Up to €30",
    openingHours: "Mon-Sat noon-3pm & 7-11pm",
  },
  {
    title: "Ó! Galeria",
    categoryTag: "Art",
    locationTag: "Cedofeita",
    photographer: "Cláudia Paiva",
    image: "/assets/timeout6.jpg",
    content:
      "<h1>Time Out says</h1><p>Especializa-se na ilustração e tem as paredes repletas de desenhos de vários artistas. Há ainda uma zona de exposições que renova as suas mostras com frequência, sempre com os melhores valores nesta área artística, uma das mais dinâmicas do momento.</p>",
    date: "Friday 28 July 2017",
    address: "Rua de Miguel Bombarda, 61 Porto 4050-381",
    linkAddress: "https://ogaleria.myshopify.com/",
    phoneNumber: "93 055 8047",
    priceDescription: "Grátis",
    openingHours: "Seg-Sáb 12.00-20.00",
  },
  {
    title: "Ribeira-Rio Douro (Douro River)",
    categoryTag: "Things to do",
    locationTag: "Baixa",
    photographer: "Cláudia Paiva",
    image: "/assets/timeout7.jpg",
    content: "",
    date: "Monday 18 July 2016",
    address: "Ribeira do Porto Porto 4050 Porto",
    linkAddress: "",
    phoneNumber: "",
    priceDescription: "",
    openingHours: "",
  },
  {
    title: "Equador",
    categoryTag: "Shopping",
    locationTag: "Baixa",
    photographer: "João Saramago",
    image: "/assets/timeout8.jpg",
    content: "",
    date: "Friday 19 May 2017",
    address: "Rua Sá da Bandeira, 637 Porto 4000-454",
    linkAddress: "http://www.chocolatariaequador.com/",
    phoneNumber: "+351 96 729 6160",
    priceDescription: "",
    openingHours: "Mon-Sat 11am-7.30pm",
  },
  {
    title: "Claus Porto",
    categoryTag: "Shopping",
    locationTag: "Flores",
    photographer: "João Saramago",
    image: "/assets/timeout9.jpg",
    content:
      "<h1>Time Out says</h1><p>Caíram as monarquias e as repúblicas, instauraram-se ditaduras e fizeram-se revoluções. Tudo mudou, menos a Claus Porto, a marca de sabonetes portuense que se manteve firme, de pedra e cal, ao longo destes 130 anos. “Com esta comemoração entendemos que era preciso dar a conhecer a marca à cidade que a viu nascer, por isso escolhemos a Rua das Flores para abrir a primeira loja no Porto”, explica Francisco Neto, CEO. “Esta é uma loja que pretende ser muito mais do que isso. Além de um primeiro piso com produtos para venda, tem também uma galeria visitável onde contamos a história da marca ao longo de quatro gerações.” Nela, reuniram desenhos feitos à mão, litografias e recortes de jornais, mas não se ficaram por aqui. No terceiro andar, há ainda um laboratório para workshops e uma máquina dos anos 40 que produz sabonetes.</p>",

    date: "Friday 19 May 2017",
    address: "Rua das Flores, 22 Porto 4050-262",
    linkAddress: "http://www.chocolatariaequador.com/",
    phoneNumber: "+351 91 429 0359",
    priceDescription: "",
    openingHours: "Seg-Dom 10.00-20.00",
  },
  {
    title: "Jardins do Palácio de Cristal",
    categoryTag: "Attractions",
    locationTag: "Massarelos",
    photographer: "João Saramago",
    image: "/assets/timeout10.jpg",
    content:
      "<h1>Time Out says</h1><p>They are in the centre of Porto, and they impress by their diversity. They were created in the 19th century, with a view on the Douro. Besides the botanical species and peacocks walking around, check out the Carlos Alberto Chapel and the Porto Municipal Gallery, dedicated to modern art.</p>",

    date: "Monday 22 May 2017",
    address: "Rua de Entre-Quintas, 20 Porto 4050-240",
    linkAddress: "",
    phoneNumber: "+351 22 209 7000",
    priceDescription: "",
    openingHours: "Daily 8am-9pm",
  },
  {
    title: "The Yeatman Hotel",
    categoryTag: "Hotels",
    locationTag: "Vila Nova de Gaia",
    photographer: "João Saramago",
    image: "/assets/hotel1.jpg",
    content:
      "<h1>Time Out says</h1><p>If you’re a wine aficionado with five-star taste, The Yeatman is your place. The hotel stretches across the hillside of Vila Nova de Gaia, directly across the Douro River from Porto, meaning the views from all 83 rooms, plus the pools and common areas, are spectacular. The Yeatman serves as an ambassador for Portuguese wines and works in partnership with 78 wine producers. These partners were given free reign to decorate the hotel rooms with artwork, furniture, books and of course, wine, to give each room a personalised touch. The rooms all fit in with the hotel’s classic contemporary design, however, to create a classy yet understated look. The wine theme carries strong throughout the hotel, with a two-level spa that offers Vinothérapie treatments and a cellar that houses the largest collection of Portuguese wines in the world. These wines are paired with first-rate food in the Yeatman’s two Michelin star restaurant headed up by chef Ricardo Costa. Here you can work your way through a degustation menu while admiring the twinkling lights of Porto on the river, then make your way to Dick’s Bar for a nightcap. The classy bar is named after Dick Yeatman who was an important figure in Portugal’s port wine trade and serves a range of spirits, still wines, cocktails and port, including an 1863 tawny (try not to spill that one). In comparison to Porto’s tightly packed buildings, The Yeatman provides the luxury of space and has many places to linger. This includes the aforementioned bar, an indoor and outdoor pool, and private terraces extending off each room. And everywhere you go there’s a view – don’t forget the view.      The Yeatman also serves as an events hub with regular wine dinners, wine-themed Christmas festivities and sunset parties in summer.</p>",
    date: "Wednesday 28 June 2017",
    address: "Rua do Choupelo, 345 Santa Marinha Vila Nova de Gaia 4400-088",
    linkAddress: "http://www.the-yeatman-hotel.com/pt",
    phoneNumber: "+351 22 013 3100",
    priceDescription: "Rooms from €154 (breakfast not included)",
    openingHours: "",
  },
  {
    title: "The Artist Porto Hotel & Bistro",
    categoryTag: "Hotels",
    locationTag: "Bonfim",
    photographer: "",
    image: "/assets/hotel2.jpg",
    content:
      "<h1>Time Out says</h1><p>Students from Porto’s hospitality school take charge of this hotel and restaurant, which maintains a creative edge in line with its former function as an arts college. You can check out the grades of former students on the report cards lining the corridor walls, and will also see marks scrawled across the 150+ paintings and sculptures scattered throughout the building. The dining room in particular doubles as an art exhibition, with a curated mish-mash of paintings hung on the bright blue walls. The restaurant is not only creative in its artwork, but also its food, given a surprise degustation is presented every evening for a fixed price. Despite being whipped up by chefs-in-training (under the guidance of a team of pros of course), the food quality is excellent and the student waiters are eager to please.  Across from the restaurant is a cosy bar decked out like a vintage lounge room, with even more artwork packed onto the walls. This vintage/old school look carries through to the 17 rooms – many of which are retrofitted classrooms. Antique desks and settees might rekindle memories of school visits to the principal’s office, but the rooms are quirky, fun and quite frankly, enormous. Big windows provide plenty of natural light and most bathrooms include a bathtub. The complex is quiet given the hotel’s location in a backstreet, but it’s just a five-minute walk to Porto’s main commercial street, Rua de Santa Catarina, and the Bolhão metro station.</p>",
    date: "Thursday 15 June 2017",
    address: "Rua da Firmeza, 49 Porto 4000-228",
    linkAddress: "http://www.shotels.pt/theartistporto/home",
    phoneNumber: "+351 22 013 3100",
    priceDescription:
      "Double rooms from €70 in low season and €110 in high. Breakfast €8.50 per person",
    openingHours: "",
  },
  {
    title: "InterContinental Porto - Palácio das Cardosas",
    categoryTag: "Hotels",
    locationTag: "São Bento",
    photographer: "",
    image: "/assets/hotel3.jpg",
    content:
      "<h1>Time Out says</h1><p>If you want swank and style on your trip to Porto, you can’t go wrong with the InterContinental. The former monastery and palace is conveniently positioned at the end of Porto’s main square, Praça da Liberdade, meaning you couldn’t find a more central location if you tried. Step out the door and you’ll see Porto’s iconic Clérigos Tower on your left, then nip around the corner to your right and run straight into the equally iconic São Bento Train Station. As well as having a top location, the hotel has five-star class with an opulent foyer adorned in marble and Swarovski chandeliers. There’s also a swish shopping arcade inside should you care to pick up a Rolex or gold necklace. The elegance continues in the rooms upstairs, where you’ll find heavy curtains, studded ottomans and silky bedspreads. Take a relaxing bath in the marble bathroom before choosing from eight types of pillows at bedtime. For further relaxation, book a massage or facial in the hotel spa.The InterContinental’s Astoria restaurant offers high-end dining and is a good choice if you want to splurge. Degustation menus with wine pairing are available and these are regularly updated to maximise the use of seasonal produce. On the hotel’s ground floor you’ll also find the glamorous Bar das Cardosas, where you can listen to live music while sipping cocktails.      A buffet breakfast with eggs and coffee made to order is offered in the restaurant from €22 per head.</p>",
    date: "Wednesday 28 June 2017",
    address: "Praça da Liberdade, 25 Porto 4000-322",
    linkAddress:
      "https://go.skimresources.com/?id=107033X1569415&isjs=1&jv=15.4.1-stackpath&sref=https%3A%2F%2Fwww.timeout.com%2Fporto%2Fhotels%2Fintercontinental-porto-palacio-das-cardosas&url=https%3A%2F%2Fwww.ihg.com%2Fintercontinental%2Fhotels%2Fgb%2Fen%2Fporto%2Fprtha%2Fhoteldetail&xs=1&xtz=-480&xuuid=5454ffbdcaf7564a49ff89e55f7ff6db&abp=1&xjsf=other_click__auxclick%20%5B2%5D",
    phoneNumber: "+351 22 003 5600",
    priceDescription: "Rooms from €185 in low season and €350 in high",
    openingHours: "",
  },
  {
    title: "Porto Palácio Congress Hotel & Spa",
    categoryTag: "Hotels",
    locationTag: "Porto",
    photographer: "",
    image: "/assets/hotel4.jpg",
    content:
      "<h1>Time Out says</h1><p>The five-star Porto Palácio is a schmick hotel with elegant rooms, marble bathrooms and a splendid spa. It’s geared towards business travellers, but if you’re a fan of getting your zen on in a mood-lit underground pool with steam, spray and bubble jets galore, you might just fancy this hotel too. The 251-room establishment is located in Porto’s corporate district of Boavista, meaning it’s a little removed from the city centre for sightseeing (it’s around three kilometres from the main square), but the Casa da Música concert hall and metro stop are around a ten minute walk away. Nearby you’ll also find the indoor food market Mercado Bom Sucesso. The location towards Porto’s seaside means the Palácio has some pleasant ocean views, and the hotel’s swish rooftop lounge mimics the feel of the Park Hyatt Tokyo’s New York Bar (ok, so at 19 stories, maybe it’s not quite as tall, but it’s a good effort for Porto). Nip up here for a nightcap and recline in your velvet armchair with a martini while you watch the lights twinkle on the Atlantic coast. You can then witness the same view in daylight at the hotel’s Sunday brunch buffet. Come dinnertime you can choose from the hotel’s onsite restaurant Nautilus, the traditional Portuguese diner Portobeer or the Góshò Japanese restaurant, which are all located within the hotel block. Otherwise, amble your way down the busy Avenida da Boavista or head to the nearby suburb of Foz for a range of other dining options.</p>",
    date: "Friday 28 April 2017",
    address: "Avenida da Boavista, 1245 Porto 4100-130",
    linkAddress: "http://www.shotels.pt/portopalacio/hotel-overview.html",
    phoneNumber: "+351 22 608 6793",
    priceDescription:
      "Double rooms from €95 in low season and €129 in high, and breakfast is from €15 per person",
    openingHours: "",
  },
  {
    title: "Pestana Palácio do Freixo - Pousada & National Monument",
    categoryTag: "Hotels",
    locationTag: "Campanhã",
    photographer: "",
    image: "/assets/hotel5.jpg",
    content:
      "<h1>Time Out says</h1><p>If you fancy feeling like a prince or princess on your next trip to Porto, book yourself into an 18th century palace at the Palácio do Freixo. The hotel’s baroque architecture is stunning (not to mention Insta-worthy) and fronts onto the Douro, meaning it also affords stellar river views. Inside the hotel’s main building (the former palace), a lounge area with a sky-high frescoed ceiling and gold detailing steals the show, and leads through to the classy Nasoni Bar and Palatium Restaurant, where you can try cuisine typical to northern Portugal. A covered walkway then leads to the hotel rooms, which are contained in a less impressive building that once served as Porto’s mill. Despite its former industrial function, the dark corridors are given pops of interest with lavish furniture and the 87 rooms are spacious. Front-facing rooms have views over the river as well as the hotel’s outdoor terrace, infinity pool and jetty lined with sunlounges. On the ground floor there is a spa area with a heated indoor pool, steam room, gym and sauna. Food can be ordered from the pool bar. While the hotel has a prime location on the banks of the Douro River, it is outside Porto’s main tourist hub. So unless you’re up for a 45-minute walk along the river to the historical centre you’ll need to catch the hotel’s free shuttle bus, which departs every 30 minutes, or take a taxi. The Campanhã train and metro stations are 1.5 kilometres away.</p>",
    date: "Thursday 15 June 2017",
    address: "Estrada Nacional 108, 206 Campanhã Porto 4300-316",
    linkAddress: "https://www.pestana.com/pt",
    phoneNumber: "+351 22 608 6793",
    priceDescription: "Classic rooms from €180 in low season and €280 in high",
    openingHours: "",
  },
];

async function main() {
  console.log("Start seeding...");
  for (const location of locations) {
    await prisma.location.create({ data: location });
  }
  console.log("Seeding finished.");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (event) => {
    console.log(event);
    await prisma.$disconnect();
    process.exit(1);
  });
