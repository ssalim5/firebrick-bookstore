
const books = [
  {
  title: 'Engineering Mechanics: Statics in SI Units',
  author: 'Russell Hibbeler',
  cover: 'https://s2.adlibris.com/images/15901607/engineering-mechanics-statics-in-si-units.jpg',
  price: 71.8,
  quantity: '18.00'
},
{
  title: 'Physics Handbook: for science and engineering',
  author: 'Carl Nordling',
  cover: 'https://s2.adlibris.com/images/57097180/physics-handbook-for-science-and-engineering.jpg',
  price: 48.5,
  quantity: '53.00'
},
{
  title: 'Inner Engineering',
  author: 'Sadhguru',
  cover: 'https://s2.adlibris.com/images/24518389/inner-engineering.jpg',
  price: 21.3,
  quantity: '83.00'
},
{
  title: 'Story Engineering',
  author: 'Larry Brooks',
  cover: 'https://s1.adlibris.com/images/3708314/story-engineering.jpg',
  price: 20.5,
  quantity: '42.00'
},
{
  title: 'Modern Software Engineering',
  author: 'David Farley',
  cover: 'https://s1.adlibris.com/images/60225035/modern-software-engineering.jpg',
  price: 42.1,
  quantity: '21.00'
},
{
  title: 'Modern Recording Techniques',
  author: 'Huber David Miles',
  cover: 'https://s2.adlibris.com/images/29886661/modern-recording-techniques.jpg',
  price: 50.2,
  quantity: '10.00'
},
{
  title: 'Inre ingenjörskonst: en yogis guide till glädje',
  author: 'Sadhuguru',
  cover: 'https://s1.adlibris.com/images/62322051/inre-ingenjorskonst-en-yogis-guide-till-gladje.jpg',
  price: 27.1,
  quantity: '65.00'
},
{
  title: "Meriam's Engineering Mechanics",
  author: 'James L. Meriam',
  cover: 'https://s2.adlibris.com/images/54222254/meriams-engineering-mechanics.jpg',
  price: 59.900000000000006,
  quantity: '50.00'
},
{
  title: 'Så blir du bra på naturvetenskap',
  author: 'Carol Vorderman',
  cover: 'https://s2.adlibris.com/images/46537080/sa-blir-du-bra-pa-naturvetenskap.jpg',
  price: 17.400000000000002,
  quantity: '86.00'
},
{
  title: 'Sound and Recording',
  author: 'Francis Rumsey',
  cover: 'https://s2.adlibris.com/images/59728806/sound-and-recording.jpg',
  price: 61.1,
  quantity: '41.00'
},
{
  title: 'Engineering Mechanics: Dynamics in SI Units',
  author: 'Russell Hibbeler',
  cover: 'https://s1.adlibris.com/images/15701870/engineering-mechanics-dynamics-in-si-units.jpg',
  price: 62.800000000000004,
  quantity: '71.00'
},
{
  title: 'Mathematics Handbook - for Science and Engineering',
  author: 'Lennart Råde',
  cover: 'https://s1.adlibris.com/images/53210954/mathematics-handbook---for-science-and-engineering.jpg',
  price: 48.1,
  quantity: '105.00'
},
{
  title: 'Clean Code in JavaScript',
  author: 'James Padolsey',
  cover: 'https://s1.adlibris.com/images/57415915/clean-code-in-javascript.jpg',
  price: 42.900000000000006,
  quantity: 49
},
{
  title: 'JavaScript for Kids – A Playful Introduction to Programming',
  author: 'Nick Morgan',
  cover: 'https://s2.adlibris.com/images/3904140/javascript-for-kids---a-playful-introduction-to-programming.jpg',
  price: 35.6,
  quantity: 50
},
{
  title: 'Head First JavaScript Programming',
  author: 'Eric Freeman',
  cover: 'https://s1.adlibris.com/images/4785117/head-first-javascript-programming.jpg',
  price: 46.5,
  quantity: 123
},
{
  title: 'JavaScript and jQuery',
  author: 'Jon Duckett',
  cover: 'https://s1.adlibris.com/images/7149620/javascript-and-jquery.jpg',
  price: 39.5,
  quantity: 94
},
{
  title: 'Programmering 1 med JScript, JavaScript och Java - Lärobok',
  author: 'Clas Örjan Spång',
  cover: 'https://s1.adlibris.com/images/51630353/programmering-1-med-jscript-javascript-och-java---larobok.jpg',
  price: 38.900000000000006,
  quantity: 78
},
{
  title: 'JavaScript - The Definitive Guide',
  author: 'David Flanagan',
  cover: 'https://s2.adlibris.com/images/56630625/javascript---the-definitive-guide.jpg',
  price: 47.900000000000006,
  quantity: 127
},
{
  title: 'Eloquent Javascript, 3rd Edition',
  author: 'Marijn Haverbeke',
  cover: 'https://s2.adlibris.com/images/43215543/eloquent-javascript-3rd-edition.jpg',
  price: 34.6,
  quantity: 112
},
{
  title: 'Web Design with HTML, CSS, JavaScript and jQuery Set',
  author: 'J Duckett',
  cover: 'https://s2.adlibris.com/images/11464177/web-design-with-html-css-javascript-and-jquery-set.jpg',
  price: 42.6,
  quantity: 84
},
{
  title: 'Learning PHP, MySQL & JavaScript',
  author: 'Robin Nixon',
  cover: 'https://s2.adlibris.com/images/60524103/learning-php-mysql-javascript.jpg',
  price: 45.900000000000006,
  quantity: 64
},
{
  title: 'JavaScript and JQuery – Interactive Front–End Web Development',
  author: 'J Duckett',
  cover: 'https://s1.adlibris.com/images/2385597/javascript-and-jquery---interactive-front-end-web-development.jpg',
  price: 25.900000000000002,
  quantity: 45
},
{
  title: 'Programmering 1 JavaScript',
  author: 'Mikael Tylmad',
  cover: 'https://s1.adlibris.com/images/42271919/programmering-1-javascript.jpg',
  price: 52.800000000000004,
  quantity: 66
},
{
  title: "JavaScript: A Beginner's Guide, Fifth Edition",
  author: 'John Pollock',
  cover: 'https://s2.adlibris.com/images/50539208/javascript-a-beginners-guide-fifth-edition.jpg',
  price: 34.5,
  quantity: 9
},{
  title: 'Nutrient Requirements of Dairy Cattle: Eighth Revised Edition',
  author: 'National Academies of Sciences Engineeri',
  cover: 'https://s2.adlibris.com/images/62458352/nutrient-requirements-of-dairy-cattle-eighth-revised-edition.jpg',
  price: 154.3,
  quantity: 32
},
{
  title: 'A History of World Agriculture',
  author: undefined,
  cover: 'https://s2.adlibris.com/images/2598252/a-history-of-world-agriculture.jpg',
  price: 45.400000000000006,
  quantity: 34
},
{
  title: 'LED Lighting for Urban Agriculture',
  author: undefined,
  cover: 'https://s2.adlibris.com/images/25847515/led-lighting-for-urban-agriculture.jpg',
  price: 223.60000000000002,
  quantity: 10
},
{
  title: 'Living on a Few Acres',
  author: 'U S Department of Agriculture',
  cover: 'https://s1.adlibris.com/images/17096666/living-on-a-few-acres.jpg',
  price: 31.3,
  quantity: 19
},
{
  title: 'The Cambridge World History: Volume 2, A World with Agriculture, 12,000 BCE–500 CE',
  author: undefined,
  cover: 'https://s1.adlibris.com/images/31211098/the-cambridge-world-history-volume-2-a-world-with-agriculture-12000-bce-500-ce.jpg',
  price: 35.9,
  quantity: 125
},
{
  title: 'Complete Guide to Home Canning and Preserving',
  author: 'U S Dept of Agriculture',
  cover: 'https://s1.adlibris.com/images/5756549/complete-guide-to-home-canning-and-preserving.jpg',
  price: 11.700000000000001,
  quantity: 123
},
{
  title: 'Complete Guide to Home Canning',
  author: 'National Institute Food and Agriculture',
  cover: 'https://s2.adlibris.com/images/29909978/complete-guide-to-home-canning.jpg',
  price: 8.4,
  quantity: 63
},
{
  title: "Fertile Earth - Nature's Energies in Agriculture, Soil Fertilisation and Forestry",
  author: 'Viktor Schauberger',
  cover: 'https://s2.adlibris.com/images/19295282/fertile-earth---natures-energies-in-agriculture-soil-fertilisation-and-forestry.jpg',
  price: 11.600000000000001,
  quantity: 64
},
{
  title: 'Agriculture in World History',
  author: 'Mark B. Tauger',
  cover: 'https://s1.adlibris.com/images/58362581/agriculture-in-world-history.jpg',
  price: 47.400000000000006,
  quantity: 8
},
{
  title: 'Second Nature Urban Agriculture',
  author: 'André Viljoen',
  cover: 'https://s1.adlibris.com/images/11676392/second-nature-urban-agriculture.jpg',
  price: 57.7,
  quantity: 73
},
{
  title: 'The Good Farmer',
  author: 'Rob J. F. Burton',
  cover: 'https://s2.adlibris.com/images/57852446/the-good-farmer.jpg',
  price: 44,
  quantity: 57
},
{
  title: 'Restoration Agriculture',
  author: 'Mark Shepard',
  cover: 'https://s2.adlibris.com/images/3000424/restoration-agriculture.jpg',
  price: 31,
  quantity: 83
},
{
  title: 'Culture Code',
  author: 'Daniel Coyle',
  cover: 'https://s2.adlibris.com/images/47378360/culture-code.jpg',
  price: 12.200000000000001,
  quantity: 5
},
{
  title: 'The Culture Code: The Secrets of Highly Successful Groups',
  author: 'Daniel Coyle',
  cover: 'https://s2.adlibris.com/images/28963012/the-culture-code-the-secrets-of-highly-successful-groups.jpg',
  price: 27.700000000000003,
  quantity: 14
},
{
  title: 'The Culture Map',
  author: 'Erin Meyer',
  cover: 'https://s2.adlibris.com/images/7656868/the-culture-map.jpg',
  price: 23.6,
  quantity: 62
},
{
  title: 'Swedish kitchen stories: recipes, culture and tradition',
  author: 'Louise Bondebjer',
  cover: 'https://s2.adlibris.com/images/56356396/swedish-kitchen-stories-recipes-culture-and-tradition.jpg',
  price: 22.6,
  quantity: 20
},
{
  title: 'Japanese Visual Culture',
  author: 'Mark W. MacWilliams',
  cover: 'https://s2.adlibris.com/images/7227761/japanese-visual-culture.jpg',
  price: 68.2,
  quantity: 10
},
{
  title: 'Visual Culture',
  author: 'Howells Richard',
  cover: 'https://s1.adlibris.com/images/4511747/visual-culture.jpg',
  price: 86.4,
  quantity: 87
},
{
  title: 'Culture, Crime and Punishment',
  author: 'Ronald Kramer',
  cover: 'https://s1.adlibris.com/images/58542766/culture-crime-and-punishment.jpg',
  price: 40.2,
  quantity: 56
},
{
  title: 'Third Culture Kids',
  author: 'David C. Pollock',
  cover: 'https://s1.adlibris.com/images/29579179/third-culture-kids.jpg',
  price: 22.6,
  quantity: 84
},
{
  title: 'Representation',
  author: undefined,
  cover: 'https://s2.adlibris.com/images/2744193/representation.jpg',
  price: 45.400000000000006,
  quantity: 35
},
{
  title: 'Engineering Culture',
  author: 'Gideon Kunda',
  cover: 'https://s2.adlibris.com/images/2823107/engineering-culture.jpg',
  price: 32.4,
  quantity: 53
},
{
  title: 'Culture Map',
  author: 'Erin Meyer',
  cover: 'https://s1.adlibris.com/images/16471526/culture-map.jpg',
  price: 16.5,
  quantity: 46
},
{
  title: 'An Everyone Culture',
  author: 'Robert Kegan',
  cover: 'https://s1.adlibris.com/images/16377716/an-everyone-culture.jpg',
  price: 27.1,
  quantity: 91
}];

exports.books = books
