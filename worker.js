function run() {
	var output = {};
	var ids = [];
	for (i = 0; i < a.length; i++) {
		var d = a[i].Id;
		ids.push(a[i].Id);
		if (babyswitch[d] != null) {if (output[d] == null) output[d] = {}; output[d].babyswitch = babyswitch[d];}
		if (areas[d] != null) {if (output[d] == null) output[d] = {}; output[d].area = areas[d];}
		if (frontrow[d] != null) {if (output[d] == null) output[d] = {}; output[d].frontrow = frontrow[d];}
		if (minlength[d] != null) {if (output[d] == null) output[d] = {}; output[d].minlength = minlength[d];}
		if (realnames[d] != null) {if (output[d] == null) output[d] = {}; output[d].realname = realnames[d];}
		if (openingdates[d] != null) {if (output[d] == null) output[d] = {}; output[d].openingdate = openingdates[d];}
		if (quetype[d] != null) {if (output[d] == null) output[d] = {}; output[d].quetype = quetype[d];}
		if (copacity[d] != null) {if (output[d] == null) output[d] = {}; output[d].copacity = copacity[d];}
		if (rideduration[d] != null) {if (output[d] == null) output[d] = {}; output[d].rideduration = rideduration[d];}
		if (speeds[d] != null) {if (output[d] == null) output[d] = {}; output[d].speed = speeds[d];}
		if (photopoints[d] != null) {if (output[d] == null) output[d] = {}; output[d].photopoint = photopoints[d];}
		if (trains[d] != null) {if (output[d] == null) output[d] = {}; output[d].trains = trains[d];}
		if (singleriders[d] != null) {if (output[d] == null) output[d] = {}; output[d].singleriderid = singleriders[d];}
		if (trackheight[d] != null) {if (output[d] == null) output[d] = {}; output[d].trackheight = trackheight[d];}
		if (types[d] != null) {if (output[d] == null) output[d] = {}; output[d].type = types[d];}
		if (unavalible[d] != null) {if (output[d] == null) output[d] = {}; output[d].unavaliblefor = unavalible[d];}
		if (builder[d] != null) {if (output[d] == null) output[d] = {}; output[d].builder = builder[d];}
	}
	var all = {};
	all.rides = output;
	all.areas = parkares;
	all.meta = parkmeta;
	all.residence = residence;
	all.ids = ids;
	return all;
}

parkmeta = {
	"opening": "31 mei 1952"
}

residence = [
	"hotel",
	"bosrijk",
	"loonsche land"
]

parkares = [
	"Marerijk",
	"Ruigrijk",
	"Anderrijk",
	"Reizenrijk",
	"Fantasierijk"
]

areas = {
   "kinderspoor": "Ruigrijk",
   "symbolica": "Fantasierijk",
   "halvemaen": "Ruigrijk",
   "doudetuffer": "Ruigrijk",
   "polkamarina": "Anderrijk",
   "stoomtreinr": "Ruigrijk",
   "python": "Ruigrijk",
   "devliegendehollander": "Ruigrijk",
   "jorisendedraak": "Ruigrijk",
   "baron1898": "Ruigrijk",
   "carnavalfestival": "Reizenrijk",
   "vogelrok": "Reizenrijk",
   "monsieurcannibale": "Reizenrijk",
   "avonturendoolhof": "Reizenrijk",
   "kleuterhof": "Reizenrijk",
   "pagode": "Reizenrijk",
   "gondoletta": "Reizenrijk",
   "pandadroom": "Anderrijk",
   "spookslot": "Anderrijk",
   "pirana": "Anderrijk",
   "bobbaan": "Anderrijk",
   "fatamorgana": "Anderrijk",
   "sprookjesbos": "Marerijk",
   "diorama": "Marerijk",
   "stoomcarrousel": "Marerijk",
   "droomvlucht": "Marerijk",
   "villavolta": "Marerijk",
   "kindervreugd": "Marerijk",
   "volkvanlaafmonorail": "Marerijk",
   "carrouselsantonpieckplein": "Marerijk",
   "eftelingmuseum": "Marerijk"
}

babyswitch = {
   "symbolica": true,
   "halvemaen": true,
   "python": true,
   "devliegendehollander": true,
   "jorisendedraak": true,
   "baron1898": true,
   "vogelrok": true,
   "pirana": true,
   "bobbaan": true,
   "droomvlucht": true,
   "villavolta": true
}

builder = {
	"vogelrok": "Vekoma",
	"python": "Vekoma",
	"baron1898": "Bolliger & Mabillard",
	"baron1898singlerider": "Bolliger & Mabillard",
	"baron1898frontrow": "Bolliger & Mabillard",
	"jorisendedraak": "Great Coasters International",
	"bobbaan": "Intamin AG",
	"fatamorgana": "Intamin AG",
	"devliegendehollander": "Kumbak"
}

frontrow = {
   "baron1898": "baron1898frontrow"
}

minlength = {
   "kinderspoor": "&#60;1,20 m onder begeleiding",
   "symbolica": "Kinderen &#60;1 m onder begeleiding",
   "halvemaen": "Kinderen &#60;1,20 m onder begeleiding",
   "doudetuffer": "Kinderen &#60;1,20 m onder begeleiding",
   "polkamarina": "Kinderen &#60;1,20 m onder begeleiding",
   "stoomtreinr": "Kinderen &#60;1,20 m onder begeleiding",
   "python": "1,20 m",
   "devliegendehollander": "1,20 m",
   "jorisendedraak": "1,10 m",
   "baron1898": "1,40 m",
   "carnavalfestival": "Kinderen &#60;1 m onder begeleiding",
   "vogelrok": "1,20 m",
   "monsieurcannibale": "Kinderen &#60;1 m onder begeleiding",
   "pagode": "1,10 m",
   "gondoletta": "Kinderen &#60;1,20 m onder begeleiding",
   "pirana": "&#60;1 m op schoot",
   "bobbaan": "zelfstandig kunnen lopen",
   "fatamorgana": "&#60;1,20 m onder begeleiding",
   "droomvlucht": "Kinderen &#60;1 m onder begeleiding",
   "villavolta": "Kinderen &#60;1 m onder begeleiding",
   "volkvanlaafmonorail": "Kinderen &#60;1,20 m onder begeleiding",
   "carrouselsantonpieckplein": "Kinderen &#60;1 m onder begeleiding"
}

realnames = {
   "pirana": "piraña",
   "fotopuntpiraa": "piraña (fotopunt)",
   "fotopuntcarnavalfestival": "carnavalfestival (fotopunt)",
   "monsieurcannibale": "monsieur cannibale",
   "devliegendehollander": "de vliegende hollander",
   "indenoudenmarskramer": "inden ouden marskramer",
   "kleyneklaroen": "kleyne klaroen",
   "debazaar": "de bazaar",
   "hoorndesovervloeds": "hoorn des overvloeds",
   "desteenbok": "de steenbok",
   "hetwittepaard": "het witte paard",
   "sprookjesboomshow": "sprookjesboom show",
   "hollandsegebakskraam": "hollandse gebaks kraam",
   "fatamorgana": "fata morgana",
   "hetwapenvanraveleijn": "het wapen van raveleijn",
   "happinessstationpk": "glad ijs",
   "panoramalacarte": "panorama lacarte",
   "rondjevandemolen": "rondje van de molen",
   "panoramaselfservice": "panorama (self-service)",
   "burgerbackerij": "burger backerij",
   "theaterrestaurantapplaus": "theater restaurant applaus",
   "fotopuntbaron1898": "baron1898 (fotopunt)",
   "stationdeoost": "station de oost",
   "tpoffertje": "t poffertje",
   "volkvanlaafmonorail": "volk van laaf monorail",
   "stoomtreinm": "stoomtrein (marerijk)",
   "jorisendedraak": "joris en de draak",
   "avonturendoolhof": "avonturen doolhof",
   "tokopagode": "toko pagode",
   "stoomtreinr": "stoomtrein (ruigrijk)",
   "happinessstationwp": "happiness station het witte paard",
   "villavolta": "villa volta",
   "beiersemarkt": "beierse markt",
   "grootmoederskeuken": "grootmoeders keuken",
   "poffertjestogo": "poffertjes to go",
   "symbolicasingleriders": "symbolica (singleriders)",
   "degebrandeboon": "de gebrande boon",
   "hetseylendfregat": "het seylend fregat",
   "prinsespardijn": "prinses pardijn",
   "pardoesdetovernar": "pardoes de tovernar",
   "baron1898singlerider": "baron1898 (singlerider)",
   "fotopuntbobbaan": "bobbaan (fotopunt)",
   "carnavalfestival": "carnaval festival",
   "polleskeuken": "polles keuken",
   "ontmoeteftelingbewoners": "ontmoet efteling bewoners",
   "eftelingmuseum": "efteling museum",
   "bobsingleriders": "bobbaan (singleriders)",
   "fotopuntdevliegendehollander": " de vliegende hollander (fotopunt)",
   "fotopuntjorisendedraak": "joris en de draak (fotopunt)",
   "desoeteinval": "de soete inval",
   "denguldengaarde": "den gulden gaarde",
   "hetsuykerhuys": "het suyker huys",
   "dekombuys": "de kombuys",
   "casacaracol": "casa caracol",
   "devrolijkenoot": "de vrolijke noot",
   "baron1898frontrow": "baron1898 (frontrow)",
   "carrouselsantonpieckplein": "carrousels (antonpieck plein)",
   "wittewalvis": "witte walvis",
   "fotopuntpython": "python (fotopunt)",
   "demeermin": "de meermin"
}

openingdates = {
   "kinderspoor": "1954",
   "halvemaen": "april 1982",
   "doudetuffer": "14 april 1984",
   "polkamarina": "14 april 1984",
   "stoomtreinr": "31 maart 1969",
   "python": "12 april 1981",
   "devliegendehollander": "17 juni 2007",
   "jorisendedraak": "1 juli 2010",
   "baron1898": "1 juli 2015",
   "carnavalfestival": "1 juni 1984",
   "vogelrok": "9 april 1998",
   "monsieurcannibale": "3 mei 1988",
   "avonturendoolhof": "13 april 1995",
   "kleuterhof": "1994",
   "pagode": "1987",
   "gondoletta": "13 april 1981",
   "pandadroom": "28 maart 2002",
   "spookslot": "10 mei 1978",
   "pirana": "18 mei 1983",
   "bobbaan": "4 april 1985",
   "fatamorgana": "27 maart 1986",
   "sprookjesbos": "1952",
   "diorama": "25 mei 1971",
   "stoomcarrousel": "11 mei 1956",
   "droomvlucht": "9 mei 1993",
   "villavolta": "4 april 1996",
   "kindervreugd": "1935",
   "volkvanlaafmonorail": "12 april 1990 (trappers) en 13 april 1995 (elektrisch)",
   "eftelingmuseum": "1 apr 2004"
}

quetype = {
   "kinderspoor": "Buiten",
   "symbolica": "Buiten",
   "halvemaen": "Gedeeltelijk overdekt",
   "doudetuffer": "Overdekt",
   "stoomtreinr": "Overdekt",
   "jorisendedraak": "Buiten",
   "baron1898": "Buiten met overdekte stukjes",
   "carnavalfestival": "Overdekt",
   "vogelrok": "Overdekt",
   "monsieurcannibale": "Overdekt",
   "gondoletta": "Buiten",
   "pandadroom": "Overdekt",
   "spookslot": "Overdekt",
   "pirana": "Buiten",
   "bobbaan": "Overdekt",
   "fatamorgana": "Overdekt",
   "droomvlucht": "Overdekt",
   "villavolta": "Overdekt",
   "volkvanlaafmonorail": "Gedeeltelijk overdekt"
}

copacity = {
   "symbolica": "1400 per uur",
   "halvemaen": "1200 per uur",
   "doudetuffer": "1200 per uur",
   "python": "1440 per uur",
   "devliegendehollander": "1900 per uur (theoretisch), in de praktijk 1000",
   "jorisendedraak": "1700 per uur",
   "baron1898": "900 per uur",
   "carnavalfestival": "1600 per uur",
   "vogelrok": "1600 per uur",
   "monsieurcannibale": "1200 per uur",
   "pagode": "720 per uur",
   "gondoletta": "720 per uur",
   "pandadroom": "1200 per rit",
   "spookslot": "1000 per uur",
   "pirana": "2000 per uur",
   "bobbaan": "750 per uur",
   "fatamorgana": "1800 per uur",
   "stoomcarrousel": "400 per uur",
   "droomvlucht": "1800 per uur",
   "villavolta": "1200 per uur"
}

rideduration = {
   "symbolica": "6-7 min",
   "halvemaen": "2 &#192; 3 minuten",
   "doudetuffer": "6 minuten",
   "polkamarina": "2 minuten",
   "stoomtreinr": "tussen de 15 en 20 minuten (complete rit)",
   "python": "2 minuten en 8 seconden",
   "devliegendehollander": "3:43 minuten",
   "jorisendedraak": "2 minuten",
   "baron1898": "130 sec",
   "vogelrok": "1:31 minuten",
   "monsieurcannibale": "2:20 of 3 minuten",
   "pagode": "5 min 10 sec",
   "gondoletta": "20 minuten",
   "pandadroom": "10 minuten",
   "spookslot": "7 minuten",
   "pirana": "5 minuten",
   "bobbaan": "2:10 minuten",
   "fatamorgana": "8 minuten",
   "stoomcarrousel": "2 minuten",
   "droomvlucht": "6 minuten",
   "villavolta": "10 minuten",
   "volkvanlaafmonorail": "7 minuten"
}

photopoints = {
   "symbolica": "fotopuntsymbolica",
   "python": "fotopuntpython",
   "devliegendehollander": "fotopuntdevliegendehollander",
   "jorisendedraak": "fotopuntjorisendedraak",
   "baron1898": "fotopuntbaron1898",
   "carnavalfestival": "fotopuntcarnavalfestival",
   "pirana": "fotopuntpiraa",
   "bobbaan": "fotopuntbobbaan"
}

speeds = {
   "kinderspoor": "Afhankelijk van bestuurder",
   "doudetuffer": "6,5 km/u",
   "polkamarina": "20 km/u",
   "python": "85 km/u",
   "devliegendehollander": "70 km/h",
   "jorisendedraak": "75 km/h",
   "baron1898": "90 km/u",
   "carnavalfestival": "1,8 km/h",
   "vogelrok": "65 km/h",
   "pirana": "20 km/h",
   "bobbaan": "60 km/h",
   "fatamorgana": "2 km/u",
   "droomvlucht": "20 km/u"
}

trains = {
   "kinderspoor": "14",
   "symbolica": "34 (in groepen van 3)",
   "polkamarina": "23 koggen",
   "python": "2",
   "devliegendehollander": "11 boten",
   "jorisendedraak": "4",
   "baron1898": "3",
   "carnavalfestival": "118",
   "vogelrok": "3 treinen met 6 coaches",
   "monsieurcannibale": "12",
   "gondoletta": "40",
   "pirana": "45",
   "bobbaan": "8",
   "fatamorgana": "14",
   "droomvlucht": "28",
   "volkvanlaafmonorail": "25"
}

singleriders = {
   "symbolica": "symbolicasingleriders",
   "baron1898": "baron1898singlerider",
   "bobbaan": "bobsingleriders"
}

trackheight = {
   "halvemaen": 20,
   "python": 29,
   "devliegendehollander": 22.5,
   "jorisendedraak": 25,
   "baron1898": 30,
   "vogelrok": 25,
   "bobbaan": 20,
   "droomvlucht": 13
}

types = {
   "kinderspoor": "Treinparcours",
   "symbolica": "Darkride",
   "halvemaen": "Schommelschip",
   "doudetuffer": "Rondrit in T-fordjes",
   "polkamarina": "Koggemolen",
   "stoomtreinr": "Smalspoorstoomtrein",
   "python": "Stalen achtbaan, multilooper",
   "devliegendehollander": "Waterachtbaan",
   "jorisendedraak": "Houten race-achtbaan",
   "baron1898": "Divecoaster",
   "carnavalfestival": "Darkride",
   "vogelrok": "Overdekte stalen achtbaan",
   "monsieurcannibale": "Theekopjesattractie",
   "avonturendoolhof": "Doolhof",
   "kleuterhof": "Speeltuin",
   "pagode": "Uitkijktoren",
   "gondoletta": "Tow Boat Ride",
   "pandadroom": "3D-bioscoop",
   "spookslot": "Spookhuis",
   "pirana": "Rapid river",
   "bobbaan": "Bobslee-achtbaan",
   "fatamorgana": "Darkride",
   "sprookjesbos": "Walkthrough",
   "diorama": "Walkthrough",
   "stoomcarrousel": "Saloncarrousel, galloper",
   "droomvlucht": "Darkride",
   "villavolta": "Madhouse",
   "kindervreugd": "Speeltuin",
   "volkvanlaafmonorail": "Monorail",
   "carrouselsantonpieckplein": "carousels",
   "eftelingmuseum": "museum"
}

unavalible = {
   "symbolica": "baby's",
   "halvemaen": "Zwangere vrouwen",
   "polkamarina": "Rolstoelgebruikers",
   "python": "Mensen met lichamelijk letsel",
   "devliegendehollander": "Zwangere vrouwen",
   "baron1898": "Mensen met lichamelijk letsel",
   "vogelrok": "Mensen met lichamelijk letsel",
   "pirana": "Mensen met lichamelijk letsel",
   "bobbaan": "Mensen met lichamelijk letsel, zwangere vrouwen",
   "droomvlucht": "Rolstoelgebruikers",
   "volkvanlaafmonorail": "Rolstoekgebruikers"
}

a = [
	{
		"Id": "ontmoeteftelingbewoners",
		"Type": "Show",
		"MapLocation": "33",
		"State": "gesloten",
		"StateColor": "clear"
	},
	{
		"Id": "stichtinglezenenschrijven",
		"Type": "Show",
		"MapLocation": "3",
		"State": "gesloten",
		"StateColor": "clear"
	},
	{
		"Id": "eenwonderlijkeontmoetingmetruiterthomas",
		"Type": "Show",
		"MapLocation": ".",
		"State": "gesloten",
		"StateColor": "clear"
	},
	{
		"Id": "pardoesdetovernar",
		"Type": "Show",
		"MapLocation": ".",
		"State": "gesloten",
		"StateColor": "clear"
	},
	{
		"Id": "prinsespardijn",
		"Type": "Show",
		"MapLocation": ".",
		"State": "open",
		"StateColor": "green",
		"ShowTimes": [
			{
				"ShowDateTime": "2018-03-21T15:30:00"
			},
			{
				"ShowDateTime": "2018-03-21T16:15:00"
			},
			{
				"ShowDateTime": "2018-03-21T17:00:00"
			},
			{
				"ShowDateTime": "2018-03-21T17:45:00"
			}
		]
	},
	{
		"Id": "smalltalktonvandevenplein",
		"Type": "Show",
		"MapLocation": ".",
		"State": "gesloten",
		"StateColor": "clear"
	},
	{
		"Id": "grootmoedersoudejaarsbingo",
		"Type": "Show",
		"MapLocation": ".",
		"State": "gesloten",
		"StateColor": "clear"
	},
	{
		"Id": "smalltalkwittepaardplein",
		"Type": "Show",
		"MapLocation": ".",
		"State": "gesloten",
		"StateColor": "clear"
	},
	{
		"Id": "babyblue",
		"Type": "Show",
		"MapLocation": ".",
		"State": "gesloten",
		"StateColor": "clear"
	},
	{
		"Id": "boomerang",
		"Type": "Show",
		"MapLocation": ".",
		"State": "gesloten",
		"StateColor": "clear"
	},
	{
		"Id": "sprookjesboomzingendansmee",
		"Type": "Show",
		"MapLocation": ".",
		"State": "gesloten",
		"StateColor": "clear"
	},
	{
		"Id": "hetwapenvanraveleijn",
		"Type": "Horeca",
		"MapLocation": "H1",
		"State": "gesloten",
		"StateColor": "clear"
	},
	{
		"Id": "hetwapenvanraveleijnlunch",
		"Type": "Horeca",
		"MapLocation": ".",
		"State": "gesloten",
		"StateColor": "clear"
	},
	{
		"Id": "kleyneklaroen",
		"Type": "Horeca",
		"MapLocation": "..",
		"State": "gesloten",
		"StateColor": "clear"
	},
	{
		"Id": "denguldengaarde",
		"Type": "Horeca",
		"MapLocation": "H18",
		"OpeningHours": "10:00 - 18:00 uur",
		"State": "open",
		"StateColor": "green"
	},
	{
		"Id": "eigenheymertonvandevenplein",
		"Type": "Horeca",
		"MapLocation": ".",
		"OpeningHours": "12:00 - 18:00 uur",
		"State": "open",
		"StateColor": "green"
	},
	{
		"Id": "hoorndesovervloeds",
		"Type": "Horeca",
		"MapLocation": "..",
		"State": "gesloten",
		"StateColor": "clear"
	},
	{
		"Id": "smulpaap",
		"Type": "Horeca",
		"MapLocation": "H9",
		"State": "gesloten",
		"StateColor": "clear"
	},
	{
		"Id": "kinderspoor",
		"Type": "Attraction",
		"MapLocation": "41",
		"State": "open",
		"StateColor": "green",
		"WaitingTime": 0,
		"StatePercentage": 0
	},
	{
		"Id": "jokieswereld",
		"Type": "Merchandise",
		"MapLocation": "S5",
		"OpeningHours": "12:00 - 17:00 uur",
		"State": "open",
		"StateColor": "green"
	},
	{
		"Id": "wafelsalondensuykerbuyk",
		"Type": "Horeca",
		"MapLocation": ".",
		"State": "gesloten",
		"StateColor": "clear"
	},
	{
		"Id": "sprookjesboomshow",
		"Type": "Show",
		"MapLocation": "2",
		"State": "open",
		"StateColor": "green",
		"ShowTimes": [
			{
				"ShowDateTime": "2018-03-21T14:00:00"
			},
			{
				"ShowDateTime": "2018-03-21T15:00:00"
			},
			{
				"ShowDateTime": "2018-03-21T16:00:00"
			}
		]
	},
	{
		"Id": "hetwittepaard",
		"Type": "Horeca",
		"MapLocation": "H6",
		"OpeningHours": "11:00 - 18:00 uur",
		"State": "open",
		"StateColor": "green"
	},
	{
		"Id": "happinessstationwp",
		"Type": "Horeca",
		"MapLocation": "H6",
		"OpeningHours": "12:00 - 16:00 uur",
		"State": "open",
		"StateColor": "green"
	},
	{
		"Id": "tpoffertje",
		"Type": "Horeca",
		"MapLocation": "H2",
		"OpeningHours": "12:00 - 16:00 uur",
		"State": "open",
		"StateColor": "green"
	},
	{
		"Id": "gelaarsdekat",
		"Type": "Horeca",
		"MapLocation": "H21",
		"OpeningHours": "12:00 - 17:00 uur",
		"State": "open",
		"StateColor": "green"
	},
	{
		"Id": "gamegallery",
		"Type": "Merchandise",
		"MapLocation": "S6",
		"OpeningHours": "12:00 - 17:00 uur",
		"State": "open",
		"StateColor": "green"
	},
	{
		"Id": "grootmoederskeuken",
		"Type": "Horeca",
		"MapLocation": "H11",
		"State": "gesloten",
		"StateColor": "clear"
	},
	{
		"Id": "sprookjessprokkelaar",
		"Type": "Show",
		"MapLocation": "3",
		"State": "gesloten",
		"StateColor": "clear"
	},
	{
		"Id": "halvemaen",
		"Type": "Attraction",
		"MapLocation": "42",
		"State": "open",
		"StateColor": "green",
		"WaitingTime": 5,
		"StatePercentage": 3
	},
	{
		"Id": "hetsuykerhuys",
		"Type": "Horeca",
		"MapLocation": "0",
		"State": "gesloten",
		"StateColor": "clear"
	},
	{
		"Id": "panoramalacarte",
		"Type": "Horeca",
		"MapLocation": "H3",
		"OpeningHours": "11:00 - 18:00 uur",
		"State": "open",
		"StateColor": "green"
	},
	{
		"Id": "panoramaselfservice",
		"Type": "Horeca",
		"MapLocation": "H3",
		"State": "gesloten",
		"StateColor": "clear"
	},
	{
		"Id": "panoramakiosk",
		"Type": "Horeca",
		"MapLocation": ".",
		"OpeningHours": "11:00 - 16:00 uur",
		"State": "open",
		"StateColor": "green"
	},
	{
		"Id": "korfje",
		"Type": "Horeca",
		"MapLocation": "..",
		"OpeningHours": "10:30 - 18:30 uur",
		"State": "open",
		"StateColor": "green"
	},
	{
		"Id": "pandashop",
		"Type": "Merchandise",
		"MapLocation": "..",
		"State": "gesloten",
		"StateColor": "clear"
	},
	{
		"Id": "doudetuffer",
		"Type": "Attraction",
		"MapLocation": "43",
		"State": "open",
		"StateColor": "green",
		"WaitingTime": 10,
		"StatePercentage": 7
	},
	{
		"Id": "polleskeuken",
		"Type": "Horeca",
		"MapLocation": "H4",
		"OpeningHours": "11:00 - 18:15 uur",
		"State": "open",
		"StateColor": "green"
	},
	{
		"Id": "rondjevandemolen",
		"Type": "Horeca",
		"MapLocation": "H4",
		"OpeningHours": "13:30 - 18:00 uur",
		"State": "open",
		"StateColor": "green"
	},
	{
		"Id": "degebrandeboon",
		"Type": "Horeca",
		"MapLocation": "H4",
		"State": "gesloten",
		"StateColor": "clear"
	},
	{
		"Id": "tokopagode",
		"Type": "Horeca",
		"MapLocation": "..",
		"OpeningHours": "12:00 - 16:00 uur",
		"State": "open",
		"StateColor": "green"
	},
	{
		"Id": "stationdeoost",
		"Type": "Horeca",
		"MapLocation": "H18",
		"OpeningHours": "10:00 - 18:00 uur",
		"State": "open",
		"StateColor": "green"
	},
	{
		"Id": "stoomcarrousel",
		"Type": "Attraction",
		"MapLocation": "5",
		"State": "open",
		"StateColor": "green",
		"WaitingTime": 0,
		"StatePercentage": 0
	},
	{
		"Id": "polkamarina",
		"Type": "Attraction",
		"MapLocation": "44",
		"State": "open",
		"StateColor": "green",
		"WaitingTime": 5,
		"StatePercentage": 3
	},
	{
		"Id": "debazaar",
		"Type": "Merchandise",
		"MapLocation": "S9",
		"OpeningHours": "10:30 - 18:00 uur",
		"State": "open",
		"StateColor": "green"
	},
	{
		"Id": "eigenheymerbijstationdeoost",
		"Type": "Horeca",
		"MapLocation": ".",
		"OpeningHours": "12:00 - 18:00 uur",
		"State": "open",
		"StateColor": "green"
	},
	{
		"Id": "efteldingen",
		"Type": "Merchandise",
		"MapLocation": "S11",
		"OpeningHours": "10:00 - 19:00 uur",
		"State": "open",
		"StateColor": "green"
	},
	{
		"Id": "stoomtreinr",
		"Type": "Attraction",
		"MapLocation": "45",
		"OpeningHours": "11:45 - 17:00 uur",
		"State": "open",
		"StateColor": "green"
	},
	{
		"Id": "stoomtreinm",
		"Type": "Attraction",
		"MapLocation": "6",
		"OpeningHours": "11:30 - 17:15 uur",
		"State": "open",
		"StateColor": "green"
	},
	{
		"Id": "dekombuys",
		"Type": "Horeca",
		"MapLocation": "H19",
		"OpeningHours": "11:00 - 18:00 uur",
		"State": "open",
		"StateColor": "green"
	},
	{
		"Id": "unoxkraamvliegendehollanderplein",
		"Type": "Horeca",
		"MapLocation": ".",
		"OpeningHours": "11:00 - 18:00 uur",
		"State": "open",
		"StateColor": "green"
	},
	{
		"Id": "demeermin",
		"Type": "Horeca",
		"MapLocation": "..",
		"State": "gesloten",
		"StateColor": "clear"
	},
	{
		"Id": "flierefluiter",
		"Type": "Horeca",
		"MapLocation": "0",
		"State": "gesloten",
		"StateColor": "clear"
	},
	{
		"Id": "melkhuysje",
		"Type": "Horeca",
		"MapLocation": "H20",
		"OpeningHours": "11:45 - 18:00 uur",
		"State": "open",
		"StateColor": "green"
	},
	{
		"Id": "yoghurtbarbijbaron1898",
		"Type": "Horeca",
		"MapLocation": ".",
		"State": "gesloten",
		"StateColor": "clear"
	},
	{
		"Id": "hetseylendfregat",
		"Type": "Horeca",
		"MapLocation": "..",
		"OpeningHours": "11:00 - 18:00 uur",
		"State": "open",
		"StateColor": "green"
	},
	{
		"Id": "unoxkraampiraaplein",
		"Type": "Horeca",
		"MapLocation": ".",
		"OpeningHours": "12:00 - 18:00 uur",
		"State": "open",
		"StateColor": "green"
	},
	{
		"Id": "wittewalvis",
		"Type": "Horeca",
		"MapLocation": ".",
		"State": "gesloten",
		"StateColor": "clear"
	},
	{
		"Id": "indenoudenmarskramer",
		"Type": "Merchandise",
		"MapLocation": "S1",
		"OpeningHours": "12:00 - 18:00 uur",
		"State": "open",
		"StateColor": "green"
	},
	{
		"Id": "droomvlucht",
		"Type": "Attraction",
		"MapLocation": "7",
		"State": "open",
		"StateColor": "green",
		"WaitingTime": 5,
		"StatePercentage": 3
	},
	{
		"Id": "python",
		"Type": "Attraction",
		"MapLocation": "46",
		"State": "inonderhoud",
		"StateColor": "clear"
	},
	{
		"Id": "casacaracol",
		"Type": "Horeca",
		"MapLocation": ".",
		"State": "gesloten",
		"StateColor": "clear"
	},
	{
		"Id": "pythonsinglerider",
		"Type": "Attraction",
		"MapLocation": "46",
		"State": "gesloten",
		"StateColor": "clear"
	},
	{
		"Id": "desteenbok",
		"Type": "Horeca",
		"MapLocation": "H65",
		"OpeningHours": "11:30 - 18:30 uur",
		"State": "open",
		"StateColor": "green"
	},
	{
		"Id": "burgerbackerij",
		"Type": "Horeca",
		"MapLocation": "H67",
		"State": "gesloten",
		"StateColor": "clear"
	},
	{
		"Id": "stroopwafelchalet",
		"Type": "Horeca",
		"MapLocation": ".",
		"State": "gesloten",
		"StateColor": "clear"
	},
	{
		"Id": "eigenheymersteenbokplein",
		"Type": "Horeca",
		"MapLocation": "H68",
		"State": "gesloten",
		"StateColor": "clear"
	},
	{
		"Id": "schnitzelchalet",
		"Type": "Horeca",
		"MapLocation": ".",
		"State": "gesloten",
		"StateColor": "clear"
	},
	{
		"Id": "oase",
		"Type": "Horeca",
		"MapLocation": "H66",
		"OpeningHours": "11:00 - 18:30 uur",
		"State": "open",
		"StateColor": "green"
	},
	{
		"Id": "dromerijen",
		"Type": "Merchandise",
		"MapLocation": "..",
		"OpeningHours": "10:30 - 18:00 uur",
		"State": "open",
		"StateColor": "green"
	},
	{
		"Id": "devliegendehollander",
		"Type": "Attraction",
		"MapLocation": "47",
		"State": "open",
		"StateColor": "green",
		"WaitingTime": 5,
		"StatePercentage": 3
	},
	{
		"Id": "raveleijn",
		"Type": "Show",
		"MapLocation": "8",
		"State": "inonderhoud",
		"StateColor": "clear"
	},
	{
		"Id": "octopus",
		"Type": "Horeca",
		"MapLocation": "H62",
		"OpeningHours": "10:00 - 18:30 uur",
		"State": "open",
		"StateColor": "green"
	},
	{
		"Id": "hollandsegebakskraam",
		"Type": "Horeca",
		"MapLocation": "..",
		"OpeningHours": "15:00 - 19:00 uur",
		"State": "open",
		"StateColor": "green"
	},
	{
		"Id": "devrolijkenoot",
		"Type": "Horeca",
		"MapLocation": "..",
		"State": "gesloten",
		"StateColor": "clear"
	},
	{
		"Id": "loetiek",
		"Type": "Merchandise",
		"MapLocation": "S3",
		"State": "gesloten",
		"StateColor": "clear"
	},
	{
		"Id": "villavolta",
		"Type": "Attraction",
		"MapLocation": "9",
		"State": "open",
		"StateColor": "green",
		"WaitingTime": 5,
		"StatePercentage": 3
	},
	{
		"Id": "jorisendedraak",
		"Type": "Attraction",
		"MapLocation": "48",
		"State": "open",
		"StateColor": "green",
		"WaitingTime": 15,
		"StatePercentage": 10
	},
	{
		"Id": "baron1898",
		"Type": "Attraction",
		"MapLocation": "49",
		"State": "open",
		"StateColor": "green",
		"WaitingTime": 5,
		"StatePercentage": 3
	},
	{
		"Id": "baron1898singlerider",
		"Type": "Attraction",
		"MapLocation": "49",
		"State": "open",
		"StateColor": "green",
		"WaitingTime": 0,
		"StatePercentage": 0
	},
	{
		"Id": "carnavalfestival",
		"Type": "Attraction",
		"MapLocation": "22",
		"State": "open",
		"StateColor": "green",
		"WaitingTime": 0,
		"StatePercentage": 0
	},
	{
		"Id": "kindervreugd",
		"Type": "Attraction",
		"MapLocation": "10",
		"State": "open",
		"StateColor": "green",
		"WaitingTime": 0,
		"StatePercentage": 0
	},
	{
		"Id": "volkvanlaafmonorail",
		"Type": "Attraction",
		"MapLocation": "11",
		"State": "open",
		"StateColor": "green",
		"WaitingTime": 0,
		"StatePercentage": 0
	},
	{
		"Id": "jokieenjet",
		"Type": "Show",
		"MapLocation": "23",
		"State": "gesloten",
		"StateColor": "clear"
	},
	{
		"Id": "carrouselsantonpieckplein",
		"Type": "Attraction",
		"MapLocation": "12",
		"State": "open",
		"StateColor": "green",
		"WaitingTime": 0,
		"StatePercentage": 0
	},
	{
		"Id": "monsieurcannibale",
		"Type": "Attraction",
		"MapLocation": "24",
		"State": "open",
		"StateColor": "green",
		"WaitingTime": 5,
		"StatePercentage": 3
	},
	{
		"Id": "fotopuntbobbaan",
		"Type": "Merchandise",
		"MapLocation": "30",
		"State": "gesloten",
		"StateColor": "clear"
	},
	{
		"Id": "fotopuntpiraa",
		"Type": "Merchandise",
		"MapLocation": "33",
		"State": "gesloten",
		"StateColor": "clear"
	},
	{
		"Id": "vogelrok",
		"Type": "Attraction",
		"MapLocation": "25",
		"State": "open",
		"StateColor": "green",
		"WaitingTime": 5,
		"StatePercentage": 3
	},
	{
		"Id": "eftelingmuseum",
		"Type": "Attraction",
		"MapLocation": "13",
		"State": "open",
		"StateColor": "green",
		"WaitingTime": 0,
		"StatePercentage": 0
	},
	{
		"Id": "avonturendoolhof",
		"Type": "Attraction",
		"MapLocation": "26",
		"State": "open",
		"StateColor": "green",
		"WaitingTime": 0,
		"StatePercentage": 0
	},
	{
		"Id": "fotopuntdevliegendehollander",
		"Type": "Merchandise",
		"MapLocation": "28",
		"State": "gesloten",
		"StateColor": "clear"
	},
	{
		"Id": "fotopuntjorisendedraak",
		"Type": "Merchandise",
		"MapLocation": "29",
		"OpeningHours": "12:00 - 16:00 uur",
		"State": "open",
		"StateColor": "green"
	},
	{
		"Id": "kleuterhof",
		"Type": "Attraction",
		"MapLocation": "27",
		"State": "open",
		"StateColor": "green",
		"WaitingTime": 0,
		"StatePercentage": 0
	},
	{
		"Id": "gondoletta",
		"Type": "Attraction",
		"MapLocation": "28",
		"State": "open",
		"StateColor": "green",
		"WaitingTime": 0,
		"StatePercentage": 0
	},
	{
		"Id": "fotopuntpython",
		"Type": "Merchandise",
		"MapLocation": "27",
		"State": "gesloten",
		"StateColor": "clear"
	},
	{
		"Id": "fotopuntbaron1898",
		"Type": "Merchandise",
		"MapLocation": "31",
		"State": "gesloten",
		"StateColor": "clear"
	},
	{
		"Id": "pagode",
		"Type": "Attraction",
		"MapLocation": "29",
		"State": "open",
		"StateColor": "green",
		"WaitingTime": 5,
		"StatePercentage": 3
	},
	{
		"Id": "pandadroom",
		"Type": "Attraction",
		"MapLocation": "62",
		"State": "open",
		"StateColor": "green",
		"WaitingTime": 10,
		"StatePercentage": 7
	},
	{
		"Id": "spookslot",
		"Type": "Attraction",
		"MapLocation": "63",
		"State": "open",
		"StateColor": "green",
		"WaitingTime": 10,
		"StatePercentage": 7
	},
	{
		"Id": "pirana",
		"Type": "Attraction",
		"MapLocation": "64",
		"State": "open",
		"StateColor": "green",
		"WaitingTime": 0,
		"StatePercentage": 0
	},
	{
		"Id": "bobbaan",
		"Type": "Attraction",
		"MapLocation": "65",
		"State": "inonderhoud",
		"StateColor": "clear"
	},
	{
		"Id": "bobsingleriders",
		"Type": "Attraction",
		"MapLocation": "65",
		"State": "gesloten",
		"StateColor": "clear"
	},
	{
		"Id": "fatamorgana",
		"Type": "Attraction",
		"MapLocation": "66",
		"State": "open",
		"StateColor": "green",
		"WaitingTime": 0,
		"StatePercentage": 0
	},
	{
		"Id": "sprookjesboomerwaseens",
		"Type": "Show",
		"MapLocation": "2",
		"State": "gesloten",
		"StateColor": "clear"
	},
	{
		"Id": "symbolica",
		"Type": "Attraction",
		"MapLocation": "82",
		"State": "open",
		"StateColor": "green",
		"WaitingTime": 20,
		"StatePercentage": 13
	},
	{
		"Id": "symbolicasingleriders",
		"Type": "Attraction",
		"MapLocation": "82",
		"State": "open",
		"StateColor": "green",
		"WaitingTime": 10,
		"StatePercentage": 7
	},
	{
		"Id": "aquanura",
		"Type": "Show",
		"MapLocation": "84",
		"State": "open",
		"StateColor": "green",
		"ShowTimes": [
			{
				"ShowDateTime": "2018-03-21T18:15:00"
			}
		]
	},
	{
		"Id": "sprookjesboom",
		"Type": "Attraction",
		"MapLocation": "1.27",
		"State": "open",
		"StateColor": "green",
		"WaitingTime": 0,
		"StatePercentage": 0
	},
	{
		"Id": "theaterrestaurantapplaus",
		"Type": "Horeca",
		"MapLocation": "H5",
		"State": "gesloten",
		"StateColor": "clear"
	},
	{
		"Id": "desoeteinval",
		"Type": "Horeca",
		"MapLocation": "..",
		"OpeningHours": "12:00 - 17:00 uur",
		"State": "open",
		"StateColor": "green"
	}
]

JSON.stringify(run());