const mongoose = require('mongoose');
const connection = require('../config/mongo.db');
const Schema = mongoose.Schema;

const FilmSchema = new Schema({
    name: String,
    description: String,
    imagePath: String,
    director: String
});

const Film = mongoose.model('film', FilmSchema);

const film1 = new Film({
    name: 'Lord of the Rings',
    description:'In de ban van de ring, oorspronkelijke titel The Lord of the Rings, is een fantasy-werk geschreven door de taalkundige en universitair professor J.R.R. Tolkien. Het verhaal begon als een vervolg voor Tolkiens eerdere, minder complexe kinderboek De Hobbit (1937), maar groeide uit tot een veel groter werk. Het werd in fasen geschreven tussen 1937 en 1949, waarvan veel tijdens de Tweede Wereldoorlog. Tolkien werd mogelijk beïnvloed door de door hem bewonderde E. R. Eddison.[1]. De delen werden opeenvolgend als volgt getiteld: De reisgenoten (The Fellowship of the Ring), De twee torens (The Two Towers) en De terugkeer van de koning (The Return of the King). Structureel gezien is het werk in zes boeken verdeeld, twee per deel, samen met verschillende appendices en achtergrondinformatie die zijn opgenomen op het einde van het derde deel. The Lord of the Rings werd sinds de jaren 50 verschillende keren herdrukt en vertaald in meerdere talen, zodat het al spoedig een van de meest populaire en invloedrijkste werken de 20ste eeuw wat betreft fantastische literatuur. De titel van het werk verwijst naar de Zwarte Heerser Sauron, die in een vroegere era de Ene Ring creëerde om op die manier de andere Ringen van Macht te regeren.',
    imagePath:'https://cdn.vox-cdn.com/thumbor/nRu2ccLSeYke8-EGrIi1ohMDLdI=/0x0:825x464/1200x800/filters:focal(347x166:479x298)/cdn.vox-cdn.com/uploads/chorus_image/image/57584235/DOiAi2WUEAE3A1Y.0.jpg',
    director: 'Peter Jackson'
}).save();

const film2 = new Film({
    name: 'Harry Potter and the goblet of fire',
    description:'Harry Potter en de Vuurbeker (oorspronkelijke titel: Harry Potter and the Goblet of Fire) is de vierde Harry-Potterfilm, gebaseerd op het gelijknamige boek van de Britse schrijfster J.K. Rowling. De film ging in première op 18 november 2005. Mike Newell regisseerde de film en Steve Kloves schreef het script. De themamuziek van John Williams werd opnieuw gebruikt en aangevuld met muziek van Patrick Doyle. De film was genomineerd voor een Academy Award, namelijk die voor de beste Art Direction, maar won deze uiteindelijk niet.',
    imagePath:'https://cdn.empireonline.com/jpg/80/0/0/1000/563/0/north/0/0/0/0/0/t/films/674/images/gzKW3emulMxIHzuXxZoyDB1lei9.jpg',
    director:'David Yates'
}).save();

const film3 = new Film({
    name: 'The Avengers',
    description:'The Avengers is een Amerikaanse actiefilm uit 2012, geproduceerd door Marvel Studios en gedistribueerd door Walt Disney Pictures. Het verhaal is gebaseerd op de Marvel Comics met dezelfde naam. Het is het zesde deel van de Marvel Cinematic Universe, na Iron Man, The Incredible Hulk, Iron Man 2, Thor en Captain America: The First Avenger. De helden die in deze films individueel van elkaar werden geïntroduceerd,zijn in The Avengers voor het eerst samen te zien. De hoofdrollen worden vertolkt door Robert Downey jr., Chris Evans, Mark Ruffalo, Chris Hemsworth, Scarlett Johansson, Jeremy Renner, Tom Hiddleston, en Samuel L. Jackson.',
    imagePath:'http://cdn2-www.comingsoon.net/assets/uploads/2015/03/avengersorder5.jpg',
    director:'Joss Whedon'
}).save();

const film4 = new Film({
    name: 'Jungle Book',
    description:'The Jungle Book is een Amerikaanse live-action-avonturenfilm uit 2016 onder regie van Jon Favreau, gebaseerd op het gelijknamig boek van Rudyard Kipling.',
    imagePath:'https://pbs.twimg.com/profile_images/751078072795820032/tC97fYE_.jpg',
    director: 'Jon Favreau'
}).save();
module.exports = Film;
