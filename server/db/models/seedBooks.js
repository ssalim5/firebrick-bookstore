
const books = [
  {
    title: 'Japanese Visual Culture',
    author: 'Mark W. MacWilliams',
    cover: 'https://s2.adlibris.com/images/7227761/japanese-visual-culture.jpg',
    price: 68.2,
    quantity: 123
  },
  {
    title: 'The Culture Map',
    author: 'Erin Meyer',
    cover: 'https://s2.adlibris.com/images/7656868/the-culture-map.jpg',
    price: 23.6,
    quantity: 40
  },
  {
    title: 'Swedish kitchen stories: recipes, culture and tradition',
    author: 'Louise Bondebjer',
    cover: 'https://s2.adlibris.com/images/56356396/swedish-kitchen-stories-recipes-culture-and-tradition.jpg',
    price: 22.6,
    quantity: 72
  },
  {
    title: 'Culture Code',
    author: 'Daniel Coyle',
    cover: 'https://s2.adlibris.com/images/47378360/culture-code.jpg',
    price: 12.200000000000001,
    quantity: 56
  },
  {
    title: 'Visual Culture',
    author: 'Howells Richard',
    cover: 'https://s1.adlibris.com/images/4511747/visual-culture.jpg',
    price: 86.4,
    quantity: 55
  },
  {
    title: 'The Culture Code: The Secrets of Highly Successful Groups',
    author: 'Daniel Coyle',
    cover: 'https://s2.adlibris.com/images/28963012/the-culture-code-the-secrets-of-highly-successful-groups.jpg',
    price: 27.700000000000003,
    quantity: 43
  },
  {
    title: 'Culture Map',
    author: 'Erin Meyer',
    cover: 'https://s1.adlibris.com/images/16471526/culture-map.jpg',
    price: 16.5,
    quantity: 33
  },
  {
    title: 'Culture, Crime and Punishment',
    author: 'Ronald Kramer',
    cover: 'https://s1.adlibris.com/images/58542766/culture-crime-and-punishment.jpg',
    price: 40.2,
    quantity: 32
  },
  {
    title: 'An Everyone Culture',
    author: 'Robert Kegan',
    cover: 'https://s1.adlibris.com/images/16377716/an-everyone-culture.jpg',
    price: 27.1,
    quantity: 69
  },
  {
    title: 'Engineering Culture',
    author: 'Gideon Kunda',
    cover: 'https://s2.adlibris.com/images/2823107/engineering-culture.jpg',
    price: 32.4,
    quantity: 114
  },
  {
    title: 'Representation',
    author: "Jerome",
    cover: 'https://s2.adlibris.com/images/2744193/representation.jpg',
    price: 45.400000000000006,
    quantity: 47
  },
  {
    title: 'Third Culture Kids',
    author: 'David C. Pollock',
    cover: 'https://s1.adlibris.com/images/29579179/third-culture-kids.jpg',
    price: 22.6,
    quantity: 30
  },{
    title: 'Physics Handbook: for science and engineering',
    author: 'Carl Nordling',
    cover: 'https://s2.adlibris.com/images/57097180/physics-handbook-for-science-and-engineering.jpg',
    price: 48.5,
    quantity: 61
  },
  {
    title: 'Inner Engineering',
    author: 'Sadhguru',
    cover: 'https://s2.adlibris.com/images/24518389/inner-engineering.jpg',
    price: 21.3,
    quantity: 82
  },
  {
    title: 'Så blir du bra på naturvetenskap',
    author: 'Carol Vorderman',
    cover: 'https://s2.adlibris.com/images/46537080/sa-blir-du-bra-pa-naturvetenskap.jpg',
    price: 17.400000000000002,
    quantity: 28
  },
  {
    title: 'Mathematics Handbook - for Science and Engineering',
    author: 'Lennart Råde',
    cover: 'https://s1.adlibris.com/images/53210954/mathematics-handbook---for-science-and-engineering.jpg',
    price: 48.1,
    quantity: 30
  },
  {
    title: 'Engineering Mechanics: Dynamics in SI Units',
    author: 'Russell Hibbeler',
    cover: 'https://s1.adlibris.com/images/15701870/engineering-mechanics-dynamics-in-si-units.jpg',
    price: 62.800000000000004,
    quantity: 113
  },
  {
    title: 'Sound and Recording',
    author: 'Francis Rumsey',
    cover: 'https://s2.adlibris.com/images/59728806/sound-and-recording.jpg',
    price: 61.1,
    quantity: 65
  },
  {
    title: 'Modern Recording Techniques',
    author: 'Huber David Miles',
    cover: 'https://s2.adlibris.com/images/29886661/modern-recording-techniques.jpg',
    price: 50.2,
    quantity: 79
  },
  {
    title: 'Story Engineering',
    author: 'Larry Brooks',
    cover: 'https://s1.adlibris.com/images/3708314/story-engineering.jpg',
    price: 20.5,
    quantity: 23
  },
  {
    title: 'Modern Software Engineering',
    author: 'David Farley',
    cover: 'https://s1.adlibris.com/images/60225035/modern-software-engineering.jpg',
    price: 42.1,
    quantity: 69
  },
  {
    title: "Meriam's Engineering Mechanics",
    author: 'James L. Meriam',
    cover: 'https://s2.adlibris.com/images/54222254/meriams-engineering-mechanics.jpg',
    price: 59.900000000000006,
    quantity: 127
  },
  {
    title: 'Inre ingenjörskonst: en yogis guide till glädje',
    author: 'Sadhuguru',
    cover: 'https://s1.adlibris.com/images/62322051/inre-ingenjorskonst-en-yogis-guide-till-gladje.jpg',
    price: 27.1,
    quantity: 79
  },
  {
    title: 'Engineering Mechanics: Statics in SI Units',
    author: 'Russell Hibbeler',
    cover: 'https://s2.adlibris.com/images/15901607/engineering-mechanics-statics-in-si-units.jpg',
    price: 71.8,
    quantity: 102
  },{
    title: 'JavaScript and jQuery',
    author: 'Jon Duckett',
    cover: 'https://s1.adlibris.com/images/7149620/javascript-and-jquery.jpg',
    price: 39.5,
    quantity: 67
  },
  {
    title: 'Head First JavaScript Programming',
    author: 'Eric Freeman',
    cover: 'https://s1.adlibris.com/images/4785117/head-first-javascript-programming.jpg',
    price: 46.5,
    quantity: 98
  },
  {
    title: 'Clean Code in JavaScript',
    author: 'James Padolsey',
    cover: 'https://s1.adlibris.com/images/57415915/clean-code-in-javascript.jpg',
    price: 42.900000000000006,
    quantity: 36
  },
  {
    title: "JavaScript: A Beginner's Guide, Fifth Edition",
    author: 'John Pollock',
    cover: 'https://s2.adlibris.com/images/50539208/javascript-a-beginners-guide-fifth-edition.jpg',
    price: 34.5,
    quantity: 59
  },
  {
    title: 'JavaScript for Kids – A Playful Introduction to Programming',
    author: 'Nick Morgan',
    cover: 'https://s2.adlibris.com/images/3904140/javascript-for-kids---a-playful-introduction-to-programming.jpg',
    price: 35.6,
    quantity: 32
  },
  {
    title: 'Eloquent Javascript, 3rd Edition',
    author: 'Marijn Haverbeke',
    cover: 'https://s2.adlibris.com/images/43215543/eloquent-javascript-3rd-edition.jpg',
    price: 34.6,
    quantity: 56
  },
  {
    title: 'Programmering 1 JavaScript',
    author: 'Mikael Tylmad',
    cover: 'https://s1.adlibris.com/images/42271919/programmering-1-javascript.jpg',
    price: 52.800000000000004,
    quantity: 28
  },
  {
    title: 'Programmering 1 med JScript, JavaScript och Java - Lärobok',
    author: 'Clas Örjan Spång',
    cover: 'https://s1.adlibris.com/images/51630353/programmering-1-med-jscript-javascript-och-java---larobok.jpg',
    price: 38.900000000000006,
    quantity: 90
  },
  {
    title: 'Learning PHP, MySQL & JavaScript',
    author: 'Robin Nixon',
    cover: 'https://s2.adlibris.com/images/60524103/learning-php-mysql-javascript.jpg',
    price: 45.900000000000006,
    quantity: 102
  },
  {
    title: 'JavaScript and JQuery – Interactive Front–End Web Development',
    author: 'J Duckett',
    cover: 'https://s1.adlibris.com/images/2385597/javascript-and-jquery---interactive-front-end-web-development.jpg',
    price: 25.900000000000002,
    quantity: 68
  },
  {
    title: 'JavaScript - The Definitive Guide',
    author: 'David Flanagan',
    cover: 'https://s2.adlibris.com/images/56630625/javascript---the-definitive-guide.jpg',
    price: 47.900000000000006,
    quantity: 83
  },
  {
    title: 'Web Design with HTML, CSS, JavaScript and jQuery Set',
    author: 'J Duckett',
    cover: 'https://s2.adlibris.com/images/11464177/web-design-with-html-css-javascript-and-jquery-set.jpg',
    price: 42.6,
    quantity: 66
  },
  {
    title: 'The Medici - Power, Money, and Ambition in the Italian Renaissance',
    author: 'Paul Strathern',
    cover: 'https://s1.adlibris.com/images/29926145/the-medici---power-money-and-ambition-in-the-italian-renaissance.jpg',
    price: 20.5,
    quantity: 54
  },
  {
    title: 'Catherine de Medici: Renaissance Queen of France',
    author: 'Leonie Frieda',
    cover: 'https://s2.adlibris.com/images/5654681/catherine-de-medici-renaissance-queen-of-france.jpg',
    price: 18.6,
    quantity: 6
  },
  {
    title: "The German Genius: Europe's Third Renaissance, the Second Scientific Revolution, and the Twentieth Century",
    author: 'Peter Watson',
    cover: 'https://s1.adlibris.com/images/5276919/the-german-genius-europes-third-renaissance-the-second-scientific-revolution-and-the-twentieth-century.jpg',
    price: 21.5,
    quantity: 122
  },
  {
    title: 'Art in Renaissance Italy 1350-1500',
    author: 'Evelyn Welch',
    cover: 'https://s2.adlibris.com/images/3904595/art-in-renaissance-italy-1350-1500.jpg',
    price: 23.5,
    quantity: 91
  },
  {
    title: 'A Medieval Songbook',
    author: 'Jerome',
    cover: 'https://s2.adlibris.com/images/60678378/a-medieval-songbook.jpg',
    price: 78.10000000000001,
    quantity: 127
  },
  {
    title: 'Making Renaissance Art',
    author: 'Kim W. Woods',
    cover: 'https://s1.adlibris.com/images/2965781/making-renaissance-art.jpg',
    price: 29,
    quantity: 108
  },
  {
    title: 'Rheingold - The German Wine Renaissance',
    author: 'Bird Owen',
    cover: 'https://s1.adlibris.com/images/9663151/rheingold---the-german-wine-renaissance.jpg',
    price: 21.1,
    quantity: 10
  },
  {
    title: 'Paolo Veronese and the Practice of Painting in Late Renaissance Venice',
    author: 'Diana Gisolfi',
    cover: 'https://s1.adlibris.com/images/27929149/paolo-veronese-and-the-practice-of-painting-in-late-renaissance-venice.jpg',
    price: 50.900000000000006,
    quantity: 39
  },
  {
    title: 'New History of Italian Renaissance Art',
    author: 'Stephen J. Campbell',
    cover: 'https://s2.adlibris.com/images/30482151/new-history-of-italian-renaissance-art.jpg',
    price: 84.9,
    quantity: 59
  },
  {
    title: 'Viewing Renaissance Art',
    author: 'The Open University',
    cover: 'https://s2.adlibris.com/images/9109686/viewing-renaissance-art.jpg',
    price: 26,
    quantity: 126
  },
  {
    title: 'Byzantine and Renaissance Philosophy',
    author: 'Peter Adamson',
    cover: 'https://s1.adlibris.com/images/61231696/byzantine-and-renaissance-philosophy.jpg',
    price: 28.900000000000002,
    quantity: 32
  },
  {
    title: 'Northern Renaissance Art',
    author: 'Susie Nash',
    cover: 'https://s1.adlibris.com/images/759368/northern-renaissance-art.jpg',
    price: 23.400000000000002,
    quantity: 33
  },
  {
    title: 'Stochastic Hydrology and its Use in Water Resources Systems Simulation and Optimization',
    author: "Jerome",
    cover: 'https://s2.adlibris.com/images/6254078/stochastic-hydrology-and-its-use-in-water-resources-systems-simulation-and-optimization.jpg',
    price: 74.7,
    quantity: 41
  },
  {
    title: 'Modelling Hydrology, Hydraulics and Contaminant Transport Systems in Python',
    author: 'Soumendra Nath Kuiry',
    cover: 'https://s2.adlibris.com/images/61800138/modelling-hydrology-hydraulics-and-contaminant-transport-systems-in-python.jpg',
    price: 65.8,
    quantity: 117
  },
  {
    title: 'Permafrost Hydrology',
    author: 'Ming-Ko Woo',
    cover: 'https://s1.adlibris.com/images/12891770/permafrost-hydrology.jpg',
    price: 244.5,
    quantity: 88
  },
  {
    title: 'Hydrology: An Introduction',
    author: 'Wilfried Brutsaert',
    cover: 'https://s2.adlibris.com/images/62962752/hydrology-an-introduction.jpg',
    price: 131.6,
    quantity: 131
  },
  {
    title: 'Permafrost Hydrology',
    author: 'Ming-Ko Woo',
    cover: 'https://s1.adlibris.com/images/8810979/permafrost-hydrology.jpg',
    price: 333.6,
    quantity: 56
  },
  {
    title: 'Tidal Hydrology, Hydraulics and Scour at Bridges',
    author: 'Federal Highway Administration',
    cover: 'https://s2.adlibris.com/images/20359162/tidal-hydrology-hydraulics-and-scour-at-bridges.jpg',
    price: 30.900000000000002,
    quantity: 100
  },
  {
    title: 'Hydrology and Water Resource Systems Analysis',
    author: 'Maria A. Mimikou',
    cover: 'https://s1.adlibris.com/images/46938861/hydrology-and-water-resource-systems-analysis.jpg',
    price: 33.6,
    quantity: 130
  },
  {
    title: 'Deterministic Methods in Systems Hydrology',
    author: 'James C.I. Dooge',
    cover: 'https://s2.adlibris.com/images/47393418/deterministic-methods-in-systems-hydrology.jpg',
    price: 65.8,
    quantity: 129
  },
  {
    title: 'Hydrology and Water Resource Management',
    author: undefined,
    cover: 'https://s1.adlibris.com/images/31605326/hydrology-and-water-resource-management.jpg',
    price: 397,
    quantity: 96
  },
  {
    title: 'Effects of Climate Variability on Forest Hydrology and Carbon Sequestration on the Santee Experimental Forest in Coastal South Carolina',
    author: 'United States Department of Agriculture',
    cover: 'https://s2.adlibris.com/images/19195289/effects-of-climate-variability-on-forest-hydrology-and-carbon-sequestration-on-the-santee-experimental-forest-in-coastal-south-carolina.jpg',
    price: 21.5,
    quantity: 14
  },
  {
    title: 'Climate Change Impact Assessment on the Hydrology of Lower Awash Basin',
    author: 'Muche Endalkachew Yeshewas',
    cover: 'https://s1.adlibris.com/images/59341704/climate-change-impact-assessment-on-the-hydrology-of-lower-awash-basin.jpg',
    price: 56.7,
    quantity: 123
  },
  {
    title: 'Hydrology and Water Resources Engineering',
    author: 'K.C. Patra',
    cover: 'https://s1.adlibris.com/images/8438566/hydrology-and-water-resources-engineering.jpg',
    price: 46.300000000000004,
    quantity: 53
  }




];

exports.books = books
