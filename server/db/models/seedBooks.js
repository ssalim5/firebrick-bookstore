
const books = [
  {
    title: 'Japanese Visual Culture',
    author: 'Mark W. MacWilliams',
    cover: 'https://s2.adlibris.com/images/7227761/japanese-visual-culture.jpg',
    price: 68.2,
    stock: 123
  },
  {
    title: 'The Culture Map',
    author: 'Erin Meyer',
    cover: 'https://s2.adlibris.com/images/7656868/the-culture-map.jpg',
    price: 23.6,
    stock: 40
  },
  {
    title: 'Swedish kitchen stories: recipes, culture and tradition',
    author: 'Louise Bondebjer',
    cover: 'https://s2.adlibris.com/images/56356396/swedish-kitchen-stories-recipes-culture-and-tradition.jpg',
    price: 22.6,
    stock: 72
  },
  {
    title: 'Culture Code',
    author: 'Daniel Coyle',
    cover: 'https://s2.adlibris.com/images/47378360/culture-code.jpg',
    price: 12.200000000000001,
    stock: 56
  },
  {
    title: 'Visual Culture',
    author: 'Howells Richard',
    cover: 'https://s1.adlibris.com/images/4511747/visual-culture.jpg',
    price: 86.4,
    stock: 55
  },
  {
    title: 'The Culture Code: The Secrets of Highly Successful Groups',
    author: 'Daniel Coyle',
    cover: 'https://s2.adlibris.com/images/28963012/the-culture-code-the-secrets-of-highly-successful-groups.jpg',
    price: 27.700000000000003,
    stock: 43
  },
  {
    title: 'Culture Map',
    author: 'Erin Meyer',
    cover: 'https://s1.adlibris.com/images/16471526/culture-map.jpg',
    price: 16.5,
    stock: 33
  },
  {
    title: 'Culture, Crime and Punishment',
    author: 'Ronald Kramer',
    cover: 'https://s1.adlibris.com/images/58542766/culture-crime-and-punishment.jpg',
    price: 40.2,
    stock: 32
  },
  {
    title: 'An Everyone Culture',
    author: 'Robert Kegan',
    cover: 'https://s1.adlibris.com/images/16377716/an-everyone-culture.jpg',
    price: 27.1,
    stock: 69
  },
  {
    title: 'Engineering Culture',
    author: 'Gideon Kunda',
    cover: 'https://s2.adlibris.com/images/2823107/engineering-culture.jpg',
    price: 32.4,
    stock: 114
  },
  {
    title: 'Representation',
    author: "Jerome",
    cover: 'https://s2.adlibris.com/images/2744193/representation.jpg',
    price: 45.400000000000006,
    stock: 47
  },
  {
    title: 'Third Culture Kids',
    author: 'David C. Pollock',
    cover: 'https://s1.adlibris.com/images/29579179/third-culture-kids.jpg',
    price: 22.6,
    stock: 30
  },{
    title: 'Physics Handbook: for science and engineering',
    author: 'Carl Nordling',
    cover: 'https://s2.adlibris.com/images/57097180/physics-handbook-for-science-and-engineering.jpg',
    price: 48.5,
    stock: 61
  },
  {
    title: 'Inner Engineering',
    author: 'Sadhguru',
    cover: 'https://s2.adlibris.com/images/24518389/inner-engineering.jpg',
    price: 21.3,
    stock: 82
  },
  {
    title: 'Så blir du bra på naturvetenskap',
    author: 'Carol Vorderman',
    cover: 'https://s2.adlibris.com/images/46537080/sa-blir-du-bra-pa-naturvetenskap.jpg',
    price: 17.400000000000002,
    stock: 28
  },
  {
    title: 'Mathematics Handbook - for Science and Engineering',
    author: 'Lennart Råde',
    cover: 'https://s1.adlibris.com/images/53210954/mathematics-handbook---for-science-and-engineering.jpg',
    price: 48.1,
    stock: 30
  },
  {
    title: 'Engineering Mechanics: Dynamics in SI Units',
    author: 'Russell Hibbeler',
    cover: 'https://s1.adlibris.com/images/15701870/engineering-mechanics-dynamics-in-si-units.jpg',
    price: 62.800000000000004,
    stock: 113
  },
  {
    title: 'Sound and Recording',
    author: 'Francis Rumsey',
    cover: 'https://s2.adlibris.com/images/59728806/sound-and-recording.jpg',
    price: 61.1,
    stock: 65
  },
  {
    title: 'Modern Recording Techniques',
    author: 'Huber David Miles',
    cover: 'https://s2.adlibris.com/images/29886661/modern-recording-techniques.jpg',
    price: 50.2,
    stock: 79
  },
  {
    title: 'Story Engineering',
    author: 'Larry Brooks',
    cover: 'https://s1.adlibris.com/images/3708314/story-engineering.jpg',
    price: 20.5,
    stock: 23
  },
  {
    title: 'Modern Software Engineering',
    author: 'David Farley',
    cover: 'https://s1.adlibris.com/images/60225035/modern-software-engineering.jpg',
    price: 42.1,
    stock: 69
  },
  {
    title: "Meriam's Engineering Mechanics",
    author: 'James L. Meriam',
    cover: 'https://s2.adlibris.com/images/54222254/meriams-engineering-mechanics.jpg',
    price: 59.900000000000006,
    stock: 127
  },
  {
    title: 'Inre ingenjörskonst: en yogis guide till glädje',
    author: 'Sadhuguru',
    cover: 'https://s1.adlibris.com/images/62322051/inre-ingenjorskonst-en-yogis-guide-till-gladje.jpg',
    price: 27.1,
    stock: 79
  },
  {
    title: 'Engineering Mechanics: Statics in SI Units',
    author: 'Russell Hibbeler',
    cover: 'https://s2.adlibris.com/images/15901607/engineering-mechanics-statics-in-si-units.jpg',
    price: 71.8,
    stock: 102
  },{
    title: 'JavaScript and jQuery',
    author: 'Jon Duckett',
    cover: 'https://s1.adlibris.com/images/7149620/javascript-and-jquery.jpg',
    price: 39.5,
    stock: 67
  },
  {
    title: 'Head First JavaScript Programming',
    author: 'Eric Freeman',
    cover: 'https://s1.adlibris.com/images/4785117/head-first-javascript-programming.jpg',
    price: 46.5,
    stock: 98
  },
  {
    title: 'Clean Code in JavaScript',
    author: 'James Padolsey',
    cover: 'https://s1.adlibris.com/images/57415915/clean-code-in-javascript.jpg',
    price: 42.900000000000006,
    stock: 36
  },
  {
    title: "JavaScript: A Beginner's Guide, Fifth Edition",
    author: 'John Pollock',
    cover: 'https://s2.adlibris.com/images/50539208/javascript-a-beginners-guide-fifth-edition.jpg',
    price: 34.5,
    stock: 59
  },
  {
    title: 'JavaScript for Kids – A Playful Introduction to Programming',
    author: 'Nick Morgan',
    cover: 'https://s2.adlibris.com/images/3904140/javascript-for-kids---a-playful-introduction-to-programming.jpg',
    price: 35.6,
    stock: 32
  },
  {
    title: 'Eloquent Javascript, 3rd Edition',
    author: 'Marijn Haverbeke',
    cover: 'https://s2.adlibris.com/images/43215543/eloquent-javascript-3rd-edition.jpg',
    price: 34.6,
    stock: 56
  },
  {
    title: 'Programmering 1 JavaScript',
    author: 'Mikael Tylmad',
    cover: 'https://s1.adlibris.com/images/42271919/programmering-1-javascript.jpg',
    price: 52.800000000000004,
    stock: 28
  },
  {
    title: 'Programmering 1 med JScript, JavaScript och Java - Lärobok',
    author: 'Clas Örjan Spång',
    cover: 'https://s1.adlibris.com/images/51630353/programmering-1-med-jscript-javascript-och-java---larobok.jpg',
    price: 38.900000000000006,
    stock: 90
  },
  {
    title: 'Learning PHP, MySQL & JavaScript',
    author: 'Robin Nixon',
    cover: 'https://s2.adlibris.com/images/60524103/learning-php-mysql-javascript.jpg',
    price: 45.900000000000006,
    stock: 102
  },
  {
    title: 'JavaScript and JQuery – Interactive Front–End Web Development',
    author: 'J Duckett',
    cover: 'https://s1.adlibris.com/images/2385597/javascript-and-jquery---interactive-front-end-web-development.jpg',
    price: 25.900000000000002,
    stock: 68
  },
  {
    title: 'JavaScript - The Definitive Guide',
    author: 'David Flanagan',
    cover: 'https://s2.adlibris.com/images/56630625/javascript---the-definitive-guide.jpg',
    price: 47.900000000000006,
    stock: 83
  },
  {
    title: 'Web Design with HTML, CSS, JavaScript and jQuery Set',
    author: 'J Duckett',
    cover: 'https://s2.adlibris.com/images/11464177/web-design-with-html-css-javascript-and-jquery-set.jpg',
    price: 42.6,
    stock: 66
  },
  {
    title: 'The Medici - Power, Money, and Ambition in the Italian Renaissance',
    author: 'Paul Strathern',
    cover: 'https://s1.adlibris.com/images/29926145/the-medici---power-money-and-ambition-in-the-italian-renaissance.jpg',
    price: 20.5,
    stock: 54
  },
  {
    title: 'Catherine de Medici: Renaissance Queen of France',
    author: 'Leonie Frieda',
    cover: 'https://s2.adlibris.com/images/5654681/catherine-de-medici-renaissance-queen-of-france.jpg',
    price: 18.6,
    stock: 6
  },
  {
    title: "The German Genius: Europe's Third Renaissance, the Second Scientific Revolution, and the Twentieth Century",
    author: 'Peter Watson',
    cover: 'https://s1.adlibris.com/images/5276919/the-german-genius-europes-third-renaissance-the-second-scientific-revolution-and-the-twentieth-century.jpg',
    price: 21.5,
    stock: 122
  },
  {
    title: 'Art in Renaissance Italy 1350-1500',
    author: 'Evelyn Welch',
    cover: 'https://s2.adlibris.com/images/3904595/art-in-renaissance-italy-1350-1500.jpg',
    price: 23.5,
    stock: 91
  },
  {
    title: 'A Medieval Songbook',
    author: 'Jerome',
    cover: 'https://s2.adlibris.com/images/60678378/a-medieval-songbook.jpg',
    price: 78.10000000000001,
    stock: 127
  },
  {
    title: 'Making Renaissance Art',
    author: 'Kim W. Woods',
    cover: 'https://s1.adlibris.com/images/2965781/making-renaissance-art.jpg',
    price: 29,
    stock: 108
  },
  {
    title: 'Rheingold - The German Wine Renaissance',
    author: 'Bird Owen',
    cover: 'https://s1.adlibris.com/images/9663151/rheingold---the-german-wine-renaissance.jpg',
    price: 21.1,
    stock: 10
  },
  {
    title: 'Paolo Veronese and the Practice of Painting in Late Renaissance Venice',
    author: 'Diana Gisolfi',
    cover: 'https://s1.adlibris.com/images/27929149/paolo-veronese-and-the-practice-of-painting-in-late-renaissance-venice.jpg',
    price: 50.900000000000006,
    stock: 39
  },
  {
    title: 'New History of Italian Renaissance Art',
    author: 'Stephen J. Campbell',
    cover: 'https://s2.adlibris.com/images/30482151/new-history-of-italian-renaissance-art.jpg',
    price: 84.9,
    stock: 59
  },
  {
    title: 'Viewing Renaissance Art',
    author: 'The Open University',
    cover: 'https://s2.adlibris.com/images/9109686/viewing-renaissance-art.jpg',
    price: 26,
    stock: 126
  },
  {
    title: 'Northern Renaissance Art',
    author: 'Susie Nash',
    cover: 'https://s1.adlibris.com/images/759368/northern-renaissance-art.jpg',
    price: 23.400000000000002,
    stock: 33
  },
  {
    title: 'Stochastic Hydrology and its Use in Water Resources Systems Simulation and Optimization',
    author: "Jerome",
    cover: 'https://s2.adlibris.com/images/6254078/stochastic-hydrology-and-its-use-in-water-resources-systems-simulation-and-optimization.jpg',
    price: 74.7,
    stock: 41
  },
  {
    title: 'Modelling Hydrology, Hydraulics and Contaminant Transport Systems in Python',
    author: 'Soumendra Nath Kuiry',
    cover: 'https://s2.adlibris.com/images/61800138/modelling-hydrology-hydraulics-and-contaminant-transport-systems-in-python.jpg',
    price: 65.8,
    stock: 117
  },
  {
    title: 'Hydrology: An Introduction',
    author: 'Wilfried Brutsaert',
    cover: 'https://s2.adlibris.com/images/62962752/hydrology-an-introduction.jpg',
    price: 131.6,
    stock: 131
  },
  {
    title: 'Tidal Hydrology, Hydraulics and Scour at Bridges',
    author: 'Federal Highway Administration',
    cover: 'https://s2.adlibris.com/images/20359162/tidal-hydrology-hydraulics-and-scour-at-bridges.jpg',
    price: 30.900000000000002,
    stock: 100
  },
  {
    title: 'Hydrology and Water Resource Systems Analysis',
    author: 'Maria A. Mimikou',
    cover: 'https://s1.adlibris.com/images/46938861/hydrology-and-water-resource-systems-analysis.jpg',
    price: 33.6,
    stock: 130
  },
  {
    title: 'Deterministic Methods in Systems Hydrology',
    author: 'James C.I. Dooge',
    cover: 'https://s2.adlibris.com/images/47393418/deterministic-methods-in-systems-hydrology.jpg',
    price: 65.8,
    stock: 129
  },
  {
    title: 'Hydrology and Water Resource Management',
    author: 'Jerome',
    cover: 'https://s1.adlibris.com/images/31605326/hydrology-and-water-resource-management.jpg',
    price: 397,
    stock: 96
  },
  {
    title: 'Effects of Climate Variability on Forest Hydrology and Carbon Sequestration on the Santee Experimental Forest in Coastal South Carolina',
    author: 'United States Department of Agriculture',
    cover: 'https://s2.adlibris.com/images/19195289/effects-of-climate-variability-on-forest-hydrology-and-carbon-sequestration-on-the-santee-experimental-forest-in-coastal-south-carolina.jpg',
    price: 21.5,
    stock: 14
  },
  {
    title: 'Climate Change Impact Assessment on the Hydrology of Lower Awash Basin',
    author: 'Muche Endalkachew Yeshewas',
    cover: 'https://s1.adlibris.com/images/59341704/climate-change-impact-assessment-on-the-hydrology-of-lower-awash-basin.jpg',
    price: 56.7,
    stock: 123
  },
  {
    title: 'Hydrology and Water Resources Engineering',
    author: 'K.C. Patra',
    cover: 'https://s1.adlibris.com/images/8438566/hydrology-and-water-resources-engineering.jpg',
    price: 46.300000000000004,
    stock: 53
  },
  {
    title: 'Van Gogh Self Portrait French Ruled Seyes Grid Grands Carreaux Practice Paper: Perfect Bound Notebook for Handwriting, Penmanship, Caligraphy',
    author: 'Typewriter Publishing',
    cover: 'https://s2.adlibris.com/images/48493946/van-gogh-self-portrait-french-ruled-seyes-grid-grands-carreaux-practice-paper-perfect-bound-notebook-for-handwriting-penmanship-caligraphy.jpg',
    price: 12.3,
    stock: 79
  },
  {
    title: 'Caligraphy Practice Sheets for Beginers',
    author: "Jerome",
    cover: 'https://s2.adlibris.com/images/59902894/caligraphy-practice-sheets-for-beginers.jpg',
    price: 14.700000000000001,
    stock: 114
  },
  {
    title: 'Caligraphy, the New Shorthand [microform]',
    author: 'Anthony Malone',
    cover: 'https://s1.adlibris.com/images/61900725/caligraphy-the-new-shorthand-microform.jpg',
    price: 12.5,
    stock: 76
  },
  {
    title: 'Steampunk Monochromatic Gears French Ruled Seyes Grid Grands Carreaux: Practice Paper Perfect Bound Notebook for Handwriting, Penmanship, Caligraphy',
    author: 'Typewriter Publishing',
    cover: 'https://s1.adlibris.com/images/48486968/steampunk-monochromatic-gears-french-ruled-seyes-grid-grands-carreaux-practice-paper-perfect-bound-notebook-for-handwriting-penmanship-caligraphy.jpg',
    price: 12.3,
    stock: 95
  },
  {
    title: 'French Ruled Seyes Grid Grands Carreaux Practice Paper: Perfect Bound Notebook for Handwriting, Penmanship, Caligraphy',
    author: 'Typewriter Publishing',
    cover: 'https://s1.adlibris.com/images/48489765/french-ruled-seyes-grid-grands-carreaux-practice-paper-perfect-bound-notebook-for-handwriting-penmanship-caligraphy.jpg',
    price: 12.3,
    stock: 90
  },
  {
    title: 'Principles Of Persian Caligraphy (1844',
    author: 'James Robert Ballantyne',
    cover: 'https://s2.adlibris.com/images/20711513/principles-of-persian-caligraphy-1844.jpg',
    price: 39.2,
    stock: 28
  },
  {
    title: 'French Ruled Seyes Grid Grands Carreaux: Red Bunting Perfect Bound Notebook for Handwriting, Penmanship, Caligraphy',
    author: 'Typewriter Publishing',
    cover: 'https://s1.adlibris.com/images/48489764/french-ruled-seyes-grid-grands-carreaux-red-bunting-perfect-bound-notebook-for-handwriting-penmanship-caligraphy.jpg',
    price: 12.3,
    stock: 114
  },
  {
    title: 'The Role of the Lector in Ancient Egyptian Society',
    author: 'Roger Forshaw',
    cover: 'https://s1.adlibris.com/images/15291967/the-role-of-the-lector-in-ancient-egyptian-society.jpg',
    price: 38.5,
    stock: 78
  },
  {
    title: 'Egyptology: Search for the Tomb of Osiris',
    author: 'Emily Sands',
    cover: 'https://s2.adlibris.com/images/4252346/egyptology-search-for-the-tomb-of-osiris.jpg',
    price: 29,
    stock: 69
  },
  {
    title: 'Egyptian Grammar, or General Principles of Egyptian Sacred Writing: The Foundation of Egyptology translated for the first time into English',
    author: 'Jean Francois Champollion',
    cover: 'https://s1.adlibris.com/images/11361315/egyptian-grammar-or-general-principles-of-egyptian-sacred-writing-the-foundation-of-egyptology-translated-for-the-first-time-into-english.jpg',
    price: 13,
    stock: 82
  },
  {
    title: 'Abydos 3 Volume Set',
    author: 'William Matthew Flinders Petrie',
    cover: 'https://s1.adlibris.com/images/6452780/abydos-3-volume-set.jpg',
    price: 118.5,
    stock: 102
  },
  {
    title: 'Who Was Who in Egyptology',
    author: "Jerome",
    cover: 'https://s2.adlibris.com/images/59805035/who-was-who-in-egyptology.jpg',
    price: 37.2,
    stock: 85
  },
  {
    title: 'A World Beneath the Sands: The Golden Age of Egyptology',
    author: 'Toby Wilkinson',
    cover: 'https://s1.adlibris.com/images/60731194/a-world-beneath-the-sands-the-golden-age-of-egyptology.jpg',
    price: 20.5,
    stock: 23
  },
  {
    title: 'Egyptology Notebook: 6" X 9"',
    author: 'Richard B. Foster',
    cover: 'https://s1.adlibris.com/images/41363565/egyptology-notebook-6-x-9.jpg',
    price: 10.700000000000001,
    stock: 119
  },
  {
    title: 'Egyptology: The Colouring Companion',
    author: 'Dugald Steer',
    cover: 'https://s2.adlibris.com/images/27880038/egyptology-the-colouring-companion.jpg',
    price: 12.9,
    stock: 30
  },
  {
    title: 'Egyptology',
    author: 'Dugald Steer',
    cover: 'https://s1.adlibris.com/images/4214471/egyptology.jpg',
    price: 28.900000000000002,
    stock: 89
  },
  {
    title: 'A History of Egypt: Volume 2, The XVIIth and XVIIIth Dynasties',
    author: 'William Matthew Flinders Petrie',
    cover: 'https://s2.adlibris.com/images/6108895/a-history-of-egypt-volume-2-the-xviith-and-xviiith-dynasties.jpg',
    price: 35,
    stock: 37
  },
  {
    title: 'Wonderful Things: A History of Egyptology 1',
    author: 'Jason Thompson',
    cover: 'https://s2.adlibris.com/images/57429030/wonderful-things-a-history-of-egyptology-1.jpg',
    price: 30.900000000000002,
    stock: 78
  },
  {
    title: 'Tutankhamun Knew the Names of the Two Great Gods: Dt and nHH as Fundamental Concepts of Pharaonic Ideology',
    author: 'Steven R.W. Gregory',
    cover: 'https://s1.adlibris.com/images/62675672/tutankhamun-knew-the-names-of-the-two-great-gods-dt-and-nhh-as-fundamental-concepts-of-pharaonic-ideology.jpg',
    price: 37.300000000000004,
    stock: 17
  },
  {
    title: 'Handbook For Travelers In The Islands Of Corsica And Sardinia (1868',
    author: 'John Murray',
    cover: 'https://s2.adlibris.com/images/14315837/handbook-for-travelers-in-the-islands-of-corsica-and-sardinia-1868.jpg',
    price: 49.800000000000004,
    stock: 11
  },
  {
    title: 'Journal of a Landscape Painter in Corsica',
    author: "Jerome",
    cover: 'https://s1.adlibris.com/images/48954703/journal-of-a-landscape-painter-in-corsica.jpg',
    price: 30.400000000000002,
    stock: 18
  },
  {
    title: 'Corsica Travel Guide: Sightseeing, Hotel, Restaurant & Shopping Highlights',
    author: 'Maria Gill',
    cover: 'https://s2.adlibris.com/images/16189229/corsica-travel-guide-sightseeing-hotel-restaurant-shopping-highlights.jpg',
    price: 18.3,
    stock: 84
  },
  {
    title: 'The GR20 Corsica',
    author: 'Paddy Dillon',
    cover: 'https://s2.adlibris.com/images/23501664/the-gr20-corsica.jpg',
    price: 19.3,
    stock: 42
  },
  {
    title: 'DK Eyewitness Corsica',
    author: 'DK Eyewitness',
    cover: 'https://s2.adlibris.com/images/23744903/dk-eyewitness-corsica.jpg',
    price: 14.100000000000001,
    stock: 69
  },
  {
    title: 'Walking on Corsica',
    author: 'Gillian Price',
    cover: 'https://s1.adlibris.com/images/57966522/walking-on-corsica.jpg',
    price: 19.3,
    stock: 62
  },
  {
    title: 'Short Treks on Corsica',
    author: 'Gillian Price',
    cover: 'https://s1.adlibris.com/images/56013917/short-treks-on-corsica.jpg',
    price: 20.1,
    stock: 36
  },
  {
    title: 'Trekking the Corsica Gr20 - Two-Way Trekking Guide - Real Ign Maps 1:25,000',
    author: 'Andrew McCluggage',
    cover: 'https://s2.adlibris.com/images/58525704/trekking-the-corsica-gr20---two-way-trekking-guide---real-ign-maps-125000.jpg',
    price: 20.3,
    stock: 23
  },
  {
    title: 'Corsica Marco Polo Map',
    author: 'Marco Polo',
    cover: 'https://s1.adlibris.com/images/5642970/corsica-marco-polo-map.jpg',
    price: 8.9,
    stock: 87
  },
  {
    title: 'GR20 Corsica',
    author: 'Paddy Dillon',
    cover: 'https://s2.adlibris.com/images/27738289/gr20-corsica.jpg',
    price: 21.1,
    stock: 56
  },
  {
    title: 'DK Eyewitness Top 10 Corsica',
    author: "Jerome",
    cover: 'https://s2.adlibris.com/images/47003485/dk-eyewitness-top-10-corsica.jpg',
    price: 9.8,
    stock: 99
  },
  {
    title: 'Corsica Sunflower Guide',
    author: 'Noel Rochford',
    cover: 'https://s1.adlibris.com/images/49277724/corsica-sunflower-guide.jpg',
    price: 16.900000000000002,
    stock: 108
  },
  {
    title: 'Byzantine Armies, 886-1118',
    author: 'Ian Heath',
    cover: 'https://s1.adlibris.com/images/3416215/byzantine-armies-886-1118.jpg',
    price: 20.5,
    stock: 22
  },
  {
    title: 'Early Christian & Byzantine Art',
    author: 'Lowden John',
    cover: 'https://s2.adlibris.com/images/5238027/early-christian-byzantine-art.jpg',
    price: 43.900000000000006,
    stock: 109
  },
  {
    title: 'The Byzantine Art of War',
    author: 'Decker Michael J.',
    cover: 'https://s1.adlibris.com/images/25912386/the-byzantine-art-of-war.jpg',
    price: 27.200000000000003,
    stock: 6
  },
  {
    title: 'Byzantine Art',
    author: 'Robin Cormack',
    cover: 'https://s1.adlibris.com/images/31508886/byzantine-art.jpg',
    price: 23.400000000000002,
    stock: 38
  },
  {
    title: 'The History of Byzantine Empire',
    author: 'Charles Oman',
    cover: 'https://s1.adlibris.com/images/56098657/the-history-of-byzantine-empire.jpg',
    price: 16.7,
    stock: 86
  },
  {
    title: 'The Byzantine Republic',
    author: 'Anthony Kaldellis',
    cover: 'https://s1.adlibris.com/images/12376851/the-byzantine-republic.jpg',
    price: 35.4,
    stock: 42
  },
  {
    title: 'Byzantium and the Emergence of Muslim-Turkish Anatolia, ca. 1040-1130',
    author: 'Alexander Daniel Beihammer',
    cover: 'https://s2.adlibris.com/images/56418604/byzantium-and-the-emergence-of-muslim-turkish-anatolia-ca-1040-1130.jpg',
    price: 48,
    stock: 21
  },
  {
    title: 'Byzantine Naval Forces 1261–1461',
    author: 'Raffaele D’Amato',
    cover: 'https://s1.adlibris.com/images/14999125/byzantine-naval-forces-1261-1461.jpg',
    price: 12.8,
    stock: 38
  },
  {
    title: 'Byzantine Tarot: Wisdom from an Ancient Empire',
    author: 'John Matthews',
    cover: 'https://s1.adlibris.com/images/57602258/byzantine-tarot-wisdom-from-an-ancient-empire.jpg',
    price: 35.7,
    stock: 8
  },
  {
    title: 'Fourteen Byzantine Rulers',
    author: 'Psellus Michael',
    cover: 'https://s2.adlibris.com/images/9588478/fourteen-byzantine-rulers.jpg',
    price: 19.6,
    stock: 44
  },
  {
    title: 'Byzantine Military Tactics in Syria and Mesopotamia in the 10th Century',
    author: 'Georgios Theotokis',
    cover: 'https://s2.adlibris.com/images/29843614/byzantine-military-tactics-in-syria-and-mesopotamia-in-the-10th-century.jpg',
    price: 32.300000000000004,
    stock: 25
  },
  {
    title: 'Byzantine and Renaissance Philosophy',
    author: 'Peter Adamson',
    cover: 'https://s1.adlibris.com/images/61231696/byzantine-and-renaissance-philosophy.jpg',
    price: 28.900000000000002,
    stock: 121
  },
  {
    title: 'On Food And Cooking',
    author: 'Harold McGee',
    cover: 'https://s1.adlibris.com/images/707955/on-food-and-cooking.jpg',
    price: 45.2,
    stock: 123
  },
  {
    title: 'Det goda franska köket',
    author: 'Julia Child',
    cover: 'https://s2.adlibris.com/images/60258200/det-goda-franska-koket.jpg',
    price: 12,
    stock: 79
  },
  {
    title: 'White Trash Cooking: 25th Anniversary Edition [a Cookbook]',
    author: 'Ernest Matthew Mickler',
    cover: 'https://s1.adlibris.com/images/1208815/white-trash-cooking-25th-anniversary-edition-a-cookbook.jpg',
    price: 21.5,
    stock: 118
  },
  {
    title: 'Vegetarian India: A Journey Through the Best of Indian Home Cooking: A Cookbook',
    author: 'Madhur Jaffrey',
    cover: 'https://s2.adlibris.com/images/16891843/vegetarian-india-a-journey-through-the-best-of-indian-home-cooking-a-cookbook.jpg',
    price: 38.1,
    stock: 49
  },
  {
    title: 'The New York Times Cooking No Recipe Recipes',
    author: 'Sam Sifton',
    cover: 'https://s1.adlibris.com/images/58582635/the-new-york-times-cooking-no-recipe-recipes.jpg',
    price: 29.1,
    stock: 101
  },
  {
    title: 'Kom så lagar vi mat! 50 mumsiga recept för matglada barn',
    author: 'Carrie Love',
    cover: 'https://s1.adlibris.com/images/59876809/kom-sa-lagar-vi-mat-50-mumsiga-recept-for-matglada-barn.jpg',
    price: 8.6,
    stock: 66
  },
  {
    title: "From Crook to Cook: Platinum Recipes from Tha Boss Dogg's Kitchen",
    author: 'Snoop Dogg',
    cover: 'https://s1.adlibris.com/images/46251775/from-crook-to-cook-platinum-recipes-from-tha-boss-doggs-kitchen.jpg',
    price: 18,
    stock: 104
  },
  {
    title: "Plenty: Vibrant Vegetable Recipes from London's Ottolenghi (Vegetarian Cooking, Vegetable Cookbook, Vegetable Cooking",
    author: 'Yotam Ottolenghi',
    cover: 'https://s1.adlibris.com/images/5615352/plenty-vibrant-vegetable-recipes-from-londons-ottolenghi-vegetarian-cooking-vegetable-cookbook-vegetable-cooking.jpg',
    price: 35.7,
    stock: 28
  },
  {
    title: 'French Country Cooking: Meals and Moments from a Village in the Vineyards: A Cookbook',
    author: 'Mimi Thorisson',
    cover: 'https://s2.adlibris.com/images/23978781/french-country-cooking-meals-and-moments-from-a-village-in-the-vineyards-a-cookbook.jpg',
    price: 34.800000000000004,
    stock: 98
  },
  {
    title: 'Salt, Fat, Acid, Heat: Mastering the Elements of Good Cooking',
    author: 'Samin Nosrat',
    cover: 'https://s1.adlibris.com/images/26570903/salt-fat-acid-heat-mastering-the-elements-of-good-cooking.jpg',
    price: 38.1,
    stock: 111
  },
  {
    title: 'Slowcooking - Introduktion och 80 recept som alla kan laga',
    author: 'Linda Lagerstrand',
    cover: 'https://s1.adlibris.com/images/59147403/slowcooking---introduktion-och-80-recept-som-alla-kan-laga.jpg',
    price: 26.900000000000002,
    stock: 127
  },
  {
    title: 'The Essentials of Classic Italian Cooking',
    author: 'Marcella Hazan',
    cover: 'https://s1.adlibris.com/images/5647951/the-essentials-of-classic-italian-cooking.jpg',
    price: 26.200000000000003,
    stock: 14
  },
  {
    title: 'Glacier Mountaineering',
    author: 'Tyson Andy',
    cover: 'https://s2.adlibris.com/images/4643359/glacier-mountaineering.jpg',
    price: 16.3,
    stock: 54
  },
  {
    title: 'A complete guide to Alpine Ski touring Ski mountaineering and Nordic Ski touring',
    author: 'Henry Branigan',
    cover: 'https://s1.adlibris.com/images/11402852/a-complete-guide-to-alpine-ski-touring-ski-mountaineering-and-nordic-ski-touring.jpg',
    price: 19,
    stock: 59
  },
  {
    title: 'The Mountaineering Handbook',
    author: 'Craig Connally',
    cover: 'https://s1.adlibris.com/images/2610167/the-mountaineering-handbook.jpg',
    price: 22.8,
    stock: 124
  },
  {
    title: 'Alpine Ski Mountaineering Vol 2 - Central and Eastern Alps',
    author: "Bill O'Connor",
    cover: 'https://s1.adlibris.com/images/4609680/alpine-ski-mountaineering-vol-2---central-and-eastern-alps.jpg',
    price: 20.1,
    stock: 115
  },
  {
    title: 'The World Beneath Their Feet: Mountaineering, Madness, and the Deadly Race to Summit the Himalayas',
    author: "Jerome",
    cover: 'https://s2.adlibris.com/images/56743000/the-world-beneath-their-feet-mountaineering-madness-and-the-deadly-race-to-summit-the-himalayas.jpg',
    price: 34.7,
    stock: 28
  },
  {
    title: 'Mountaineering in the Mont Blanc Range',
    author: 'Jean-Louis Laroche',
    cover: 'https://s1.adlibris.com/images/11641701/mountaineering-in-the-mont-blanc-range.jpg',
    price: 20.200000000000003,
    stock: 55
  },
  {
    title: 'Negative Geology – A Cultural and Technical History of Early European Mountaineering',
    author: 'Axel Andersson',
    cover: 'https://s1.adlibris.com/images/59920388/negative-geology---a-cultural-and-technical-history-of-early-european-mountaineering.jpg',
    price: 26.900000000000002,
    stock: 72
  },
  {
    title: 'Mountaineering',
    author: "Jerome",
    cover: 'https://s1.adlibris.com/images/43250037/mountaineering.jpg',
    price: 31,
    stock: 123
  },
  {
    title: 'Mountaineering: The Freedom of the Hills',
    author: 'The Mountaineers',
    cover: 'https://s2.adlibris.com/images/29653065/mountaineering-the-freedom-of-the-hills.jpg',
    price: 47.7,
    stock: 118
  },
  {
    title: 'Beyond Possible: One Man, Fourteen Peaks, and the Mountaineering Achievement of a Lifetime',
    author: 'Nims Purja',
    cover: 'https://s1.adlibris.com/images/61153045/beyond-possible-one-man-fourteen-peaks-and-the-mountaineering-achievement-of-a-lifetime.jpg',
    price: 31,
    stock: 5
  },
  {
    title: 'Sarek national park guide book: hiking, running and mountaineering',
    author: 'Karl-Johan Piehl',
    cover: 'https://s2.adlibris.com/images/58391732/sarek-national-park-guide-book-hiking-running-and-mountaineering.jpg',
    price: 32.300000000000004,
    stock: 49
  },
  {
    title: 'Alpine Ski Mountaineering Vol 1 - Western Alps',
    author: "Bill O'Connor",
    cover: 'https://s2.adlibris.com/images/4580834/alpine-ski-mountaineering-vol-1---western-alps.jpg',
    price: 20.1,
    stock: 7
  }
];

exports.books = books
