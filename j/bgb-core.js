// Jon Brightwell 2018-02-07

//global stats
var points = 0;
var battle_rating = 0;
var restricted_units = 0;
var unique_units = 0;
var officers = 0;
var scouts = 0;

//section specific stats
var fhq_count = 0;
var fhq_br = 0;
var fhq_points = 0;
var infantry_count = 0;
var infantry_br = 0;
var infantry_points = 0;
var tank_count = 0;
var tank_br = 0;
var tank_points = 0;
var artillery_count = 0;
var artillery_br = 0;
var artillery_points = 0;
var defence_count = 0;
var defence_br = 0;
var defence_points = 0;
var recon_count = 0;
var recon_br = 0;
var recon_points = 0;
var engineer_count = 0;
var engineer_br = 0;
var engineer_points = 0;
var logistics_count = 0;
var logistics_br = 0;
var logistics_points = 0;
var specialist_count = 0;
var specialist_br = 0;
var specialist_points = 0;
var afs_count = 0;
var afs_br = 0;
var afs_points = 0;


var books = [
    {name: "Hardback Core Rules", date: "June 1944", js_url: "j/core-rules-hardback.js", image: "i/book-corerules.jpg", forces: [
        {name: "12th SS Division", var_name: "de_ss", country_flag: "de.svg", insignia_name: "de-12ss.svg"},
        {name: "Canadian 3rd Infantry Division", var_name: "ca_3rd", country_flag: "ca.svg", insignia_name: "ca-3rd-div.svg"}]
    },
    {name: "Tobruk", date: "1940-1941", js_url: "j/tobruk.js", image: "i/book-tobruk.jpg",forces: [
        {name: "British Inf", var_name: "uk_inf", country_flag: "uk.svg", insignia_name: "uk.svg"},
        {name: "British Inf East Africa", var_name: "uk_infea", country_flag: "uk.svg", insignia_name: "uk.svg"},
        {name: "British Armoured", var_name: "uk_ar", country_flag: "uk.svg", insignia_name: "uk.svg"},
        {name: "Italian Inf", var_name: "it_inf", country_flag: "it.svg", insignia_name: "it.svg"},
        {name: "Italian Ariete", var_name: "it_ar", country_flag: "it.svg", insignia_name: "it.svg"},
        {name: "Afrikacorps", var_name: "de_afrika", country_flag: "de.svg", insignia_name: "de.svg"},
        {name: "British Long Range Desert Patrol", var_name: "uk_patrol", country_flag: "uk.svg", insignia_name: "uk.svg"},
        {name: "Afrikacorps Auto Saharana", var_name: "de_autosah", country_flag: "de.svg", insignia_name: "de.svg"},
        {name: "7th Flieger Division", var_name: "de_7th", country_flag: "de.svg", insignia_name: "de.svg"},
        {name: "Creforce", var_name: "uk_creforce", country_flag: "uk.svg", insignia_name: "uk.svg"}]
    }
];
    
