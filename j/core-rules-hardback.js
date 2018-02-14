//Core rules hardback army lists
//June 1944 - CA 3rd Inf and DE 12th SS
//friendly date
var book_date = "June 1944";

//points based restrictions
var book_armysize = [
    {points: 350, restricted_units: 2, de_ss_min: "1 Squad", de_ss_max: "1 Platoon", ca_3rd_min: "1 Squad", ca_3rd_max: "1 Platoon"},
    {points: 750, restricted_units: 3, de_ss_min: "1 Platoon", de_ss_max: "2 Platoon", ca_3rd_min: "1 Platoon", ca_3rd_max: "2 Platoon"},
    {points: 1500, restricted_units: 4, de_ss_min: "2 Platoon", de_ss_max: "3 Platoon", ca_3rd_min: "2 Platoon", ca_3rd_max: "3 Platoon"},
    {points: 3000, restricted_units: 5, de_ss_min: "3 Platoon", de_ss_max: "6 Platoon", ca_3rd_min: "3 Platoon", ca_3rd_max: "6 Platoon"}
];


//name - friendly name
//var-name - used to reference other data in js (see book-armysize
var book_forces = [
    {name: "12th SS Division", var_name: "de_ss", country_flag: "de.svg", insignia_name: "de-12ss.svg"},
    {name: "Canadian 3rd Infantry Division", var_name: "ca_3rd", country_flag: "ca.svg", insignia_name: "ca-3rd-div.svg"}
];


var de_ss_fhq = [
    {name: "Forward Headquarters",
     Section_name: "", //
     description: "",
     unit_composition: "3 men",
     transport: "SdKfz 251/3",
     points: 28,
     battle_rating: 3,
     veterancy: "regular",
     special_rules: "Senior Officer, Artillery Spotter",
     officer: 1,
     scout: 0,
     restricted: 0,
     unique: 1, 
     options: [
        {name: "Replace 3 men and transport with Panzer IV H", points: 28, battle_rating: 0},
        {name: "Replace 3 men and transport with Panther A or G", points: 62, battle_rating: 0}]
    }
];
