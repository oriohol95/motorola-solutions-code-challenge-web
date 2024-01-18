export const DEFAULT_PAGE_SIZE = 10
export const DEFAULT_PAGE = 1

export const EMAIL_PATTERN = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

export const PAGE_SIZE_OPTIONS = [
  {
    label: '10 Listings',
    value: 10
  },
  {
    label: '25 Listings',
    value: 25
  },
  {
    label: '50 Listings',
    value: 50
  },
  {
    label: '100 Listings',
    value: 100
  },
  {
    label: '200 Listings',
    value: 200
  },
  {
    label: '500 Listings',
    value: 500
  }
]

export const COUNTRY_OPTIONS = [
  { label: 'Pakistan', value: 'Pakistan' },
  { label: 'Poland', value: 'Poland' },
  { label: 'New Zealand', value: 'New Zealand' },
  { label: 'Sweden', value: 'Sweden' },
  { label: 'Peru', value: 'Peru' },
  { label: 'Indonesia', value: 'Indonesia' },
  { label: 'Ukraine', value: 'Ukraine' },
  { label: 'Brazil', value: 'Brazil' },
  { label: 'United Kingdom', value: 'United Kingdom' },
  { label: 'Chile', value: 'Chile' },
  { label: 'Turkey', value: 'Turkey' },
  { label: 'Costa Rica', value: 'Costa Rica' },
  { label: 'Ireland', value: 'Ireland' },
  { label: 'Spain', value: 'Spain' },
  { label: 'Russian Federation', value: 'Russian Federation' },
  { label: 'Norway', value: 'Norway' },
  { label: 'United States', value: 'United States' },
  { label: 'Singapore', value: 'Singapore' },
  { label: 'South Africa', value: 'South Africa' },
  { label: 'Australia', value: 'Australia' },
  { label: 'Italy', value: 'Italy' },
  { label: 'Vietnam', value: 'Vietnam' },
  { label: 'China', value: 'China' },
  { label: 'India', value: 'India' },
  { label: 'South Korea', value: 'South Korea' },
  { label: 'Belgium', value: 'Belgium' },
  { label: 'Philippines', value: 'Philippines' },
  { label: 'Colombia', value: 'Colombia' },
  { label: 'France', value: 'France' },
  { label: 'Mexico', value: 'Mexico' },
  { label: 'Germany', value: 'Germany' },
  { label: 'Austria', value: 'Austria' },
  { label: 'Netherlands', value: 'Netherlands' },
  { label: 'Nigeria', value: 'Nigeria' },
  { label: 'Canada', value: 'Canada' }
]

export const REGION_OPTIONS = [
  { label: 'Oost-Vlaanderen', value: 'Oost-Vlaanderen' },
  { label: 'Chelyabinsk Oblast', value: 'Chelyabinsk Oblast' },
  { label: 'Victoria', value: 'Victoria' },
  { label: 'Xīběi', value: 'Xīběi' },
  { label: 'Kent', value: 'Kent' },
  { label: 'North West', value: 'North West' },
  { label: 'Los Ríos', value: 'Los Ríos' },
  { label: 'Leinster', value: 'Leinster' },
  { label: 'North Island', value: 'North Island' },
  { label: 'Carinthia', value: 'Carinthia' },
  { label: 'Quảng Ninh', value: 'Quảng Ninh' },
  {
    label: 'Brussels Hoofdstedelijk Gewest',
    value: 'Brussels Hoofdstedelijk Gewest'
  },
  { label: 'North Kalimantan', value: 'North Kalimantan' },
  { label: 'Western Australia', value: 'Western Australia' },
  { label: 'Limburg', value: 'Limburg' },
  { label: 'Møre og Romsdal', value: 'Møre og Romsdal' },
  { label: 'Punjab', value: 'Punjab' },
  { label: 'Bretagne', value: 'Bretagne' },
  { label: 'Lower Austria', value: 'Lower Austria' },
  { label: 'Alajuela', value: 'Alajuela' },
  { label: 'Sindh', value: 'Sindh' },
  { label: 'Vienna', value: 'Vienna' },
  { label: 'South Gyeongsang', value: 'South Gyeongsang' },
  { label: 'Pará', value: 'Pará' },
  { label: 'Opolskie', value: 'Opolskie' },
  { label: 'Antwerpen', value: 'Antwerpen' },
  { label: 'Tamil Nadu', value: 'Tamil Nadu' },
  { label: 'Ceará', value: 'Ceará' },
  { label: 'Friuli-Venezia Giulia', value: 'Friuli-Venezia Giulia' },
  { label: 'Kirkcudbrightshire', value: 'Kirkcudbrightshire' },
  { label: 'Kano', value: 'Kano' },
  { label: 'Munster', value: 'Munster' },
  { label: 'La Rioja', value: 'La Rioja' },
  { label: 'Xīnán', value: 'Xīnán' },
  { label: 'Lanarkshire', value: 'Lanarkshire' },
  { label: 'Västra Götalands län', value: 'Västra Götalands län' },
  { label: 'Veneto', value: 'Veneto' },
  { label: 'Santander', value: 'Santander' },
  { label: 'Wielkopolskie', value: 'Wielkopolskie' },
  { label: 'Prince Edward Island', value: 'Prince Edward Island' },
  { label: 'Cajamarca', value: 'Cajamarca' },
  { label: 'Illinois', value: 'Illinois' },
  { label: 'Madhya Pradesh', value: 'Madhya Pradesh' },
  { label: 'Heredia', value: 'Heredia' },
  { label: 'Kerala', value: 'Kerala' },
  { label: 'Santa Catarina', value: 'Santa Catarina' },
  { label: 'Dalarnas län', value: 'Dalarnas län' },
  { label: 'Khyber Pakhtoonkhwa', value: 'Khyber Pakhtoonkhwa' },
  { label: 'Đồng Tháp', value: 'Đồng Tháp' },
  { label: 'Ulster', value: 'Ulster' },
  { label: 'Rio de Janeiro', value: 'Rio de Janeiro' },
  { label: 'Connacht', value: 'Connacht' },
  { label: 'Cundinamarca', value: 'Cundinamarca' },
  {
    label: 'Newfoundland and Labrador',
    value: 'Newfoundland and Labrador'
  },
  { label: 'Troms og Finnmark', value: 'Troms og Finnmark' },
  { label: 'Yên Bái', value: 'Yên Bái' },
  { label: 'Cherkasy oblast', value: 'Cherkasy oblast' },
  { label: 'Niedersachsen', value: 'Niedersachsen' },
  { label: 'Jönköpings län', value: 'Jönköpings län' },
  { label: 'Gyeonggi', value: 'Gyeonggi' },
  { label: 'Bolívar', value: 'Bolívar' },
  { label: 'Nagaland', value: 'Nagaland' },
  { label: 'Ternopil oblast', value: 'Ternopil oblast' },
  { label: 'Bahia', value: 'Bahia' },
  { label: 'Papua', value: 'Papua' },
  { label: 'Araucanía', value: 'Araucanía' },
  { label: 'Connecticut', value: 'Connecticut' },
  { label: 'łódzkie', value: 'łódzkie' },
  { label: 'Gorontalo', value: 'Gorontalo' },
  { label: 'Huádōng', value: 'Huádōng' },
  { label: 'Languedoc-Roussillon', value: 'Languedoc-Roussillon' },
  { label: 'Saskatchewan', value: 'Saskatchewan' },
  { label: 'Jalisco', value: 'Jalisco' },
  { label: 'Rio Grande do Sul', value: 'Rio Grande do Sul' },
  { label: 'Puno', value: 'Puno' },
  { label: 'Cumberland', value: 'Cumberland' },
  { label: 'Cauca', value: 'Cauca' },
  { label: 'Pennsylvania', value: 'Pennsylvania' },
  { label: 'Arequipa', value: 'Arequipa' },
  { label: 'Eastern Cape', value: 'Eastern Cape' },
  { label: 'Volyn oblast', value: 'Volyn oblast' },
  { label: "O'Higgins", value: "O'Higgins" },
  { label: 'Missouri', value: 'Missouri' },
  { label: 'Pernambuco', value: 'Pernambuco' },
  { label: 'Nordland', value: 'Nordland' },
  { label: 'Rogaland', value: 'Rogaland' },
  { label: 'Campania', value: 'Campania' },
  { label: 'Lubelskie', value: 'Lubelskie' },
  { label: 'Dolnośląskie', value: 'Dolnośląskie' },
  { label: 'Wisconsin', value: 'Wisconsin' },
  { label: 'Guaviare', value: 'Guaviare' },
  { label: 'West Region', value: 'West Region' },
  { label: 'Davao Region', value: 'Davao Region' },
  { label: 'West Papua', value: 'West Papua' },
  {
    label: 'Metropolitana de Santiago',
    value: 'Metropolitana de Santiago'
  },
  { label: 'Friesland', value: 'Friesland' },
  { label: 'Western Visayas', value: 'Western Visayas' },
  { label: 'South Australia', value: 'South Australia' },
  {
    label: "Provence-Alpes-Côte d'Azur",
    value: "Provence-Alpes-Côte d'Azur"
  },
  { label: 'Cagayan Valley', value: 'Cagayan Valley' },
  { label: 'Principado de Asturias', value: 'Principado de Asturias' },
  {
    label: 'Special Capital Region of Jakarta',
    value: 'Special Capital Region of Jakarta'
  },
  { label: 'South Jeolla', value: 'South Jeolla' },
  { label: 'North-East Region', value: 'North-East Region' },
  { label: 'Luxemburg', value: 'Luxemburg' },
  { label: 'Utrecht', value: 'Utrecht' },
  {
    label: 'Australian Capital Territory',
    value: 'Australian Capital Territory'
  },
  { label: 'Mecklenburg-Vorpommern', value: 'Mecklenburg-Vorpommern' },
  { label: 'North Gyeongsang', value: 'North Gyeongsang' },
  { label: 'Nordrhein-Westphalen', value: 'Nordrhein-Westphalen' },
  { label: 'Vestland', value: 'Vestland' },
  { label: 'Colorado', value: 'Colorado' },
  { label: 'Agder', value: 'Agder' },
  { label: 'Nova Scotia', value: 'Nova Scotia' },
  { label: 'Berlin', value: 'Berlin' },
  { label: 'Viken', value: 'Viken' },
  { label: 'Georgia', value: 'Georgia' },
  { label: 'La Libertad', value: 'La Libertad' },
  { label: 'Mississippi', value: 'Mississippi' },
  { label: 'Ontario', value: 'Ontario' },
  { label: 'Selkirkshire', value: 'Selkirkshire' },
  { label: 'Puntarenas', value: 'Puntarenas' },
  { label: 'Gilgit Baltistan', value: 'Gilgit Baltistan' },
  { label: 'Sevastopol City', value: 'Sevastopol City' },
  { label: 'Jeju', value: 'Jeju' },
  { label: 'Córdoba', value: 'Córdoba' },
  { label: 'Indiana', value: 'Indiana' },
  { label: 'Oklahoma', value: 'Oklahoma' },
  { label: 'Maryland', value: 'Maryland' },
  { label: 'Tarapacá', value: 'Tarapacá' },
  { label: 'Balochistan', value: 'Balochistan' },
  { label: 'Maluku', value: 'Maluku' },
  { label: 'Querétaro', value: 'Querétaro' },
  { label: 'Limón', value: 'Limón' },
  { label: 'Bengkulu', value: 'Bengkulu' },
  { label: 'Central Region', value: 'Central Region' },
  { label: 'Cartago', value: 'Cartago' },
  { label: 'Paraná', value: 'Paraná' },
  { label: 'Zuid Holland', value: 'Zuid Holland' },
  { label: 'Calabria', value: 'Calabria' },
  { label: 'Nunavut', value: 'Nunavut' },
  { label: 'Huntingdonshire', value: 'Huntingdonshire' },
  { label: 'Nariño', value: 'Nariño' },
  { label: 'Northern Territory', value: 'Northern Territory' },
  { label: 'Western Cape', value: 'Western Cape' },
  { label: 'Paraíba', value: 'Paraíba' },
  { label: 'Kahramanmaraş', value: 'Kahramanmaraş' },
  { label: 'FATA', value: 'FATA' },
  { label: 'Stockholms län', value: 'Stockholms län' },
  { label: 'Alsace', value: 'Alsace' },
  { label: 'Odessa oblast', value: 'Odessa oblast' },
  { label: 'Lagos', value: 'Lagos' },
  { label: 'Imo', value: 'Imo' },
  { label: 'Upper Austria', value: 'Upper Austria' },
  { label: 'Centre', value: 'Centre' },
  { label: 'South Chungcheong', value: 'South Chungcheong' },
  { label: 'Tolima', value: 'Tolima' },
  { label: 'Overijssel', value: 'Overijssel' },
  { label: 'Chernihiv oblast', value: 'Chernihiv oblast' },
  { label: 'East Region', value: 'East Region' },
  { label: 'Kentucky', value: 'Kentucky' }
]
