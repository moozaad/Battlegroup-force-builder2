var book-date = "June 1944";

var book-armysize = [
    {points: 350, restricted-units: 2, de-ss-min: "1 Squad", de-ss-max: "1 Platoon", ca-3rd-min: "1 Squad", ca-3rd-max: "1 Platoon"},
    {points: 750, restricted-units: 3, de-ss-min: "1 Platoon", de-ss-max: "2 Platoon", ca-3rd-min: "1 Platoon", ca-3rd-max: "2 Platoon"},
    {points: 1500, restricted-units: 4, de-ss-min: "2 Platoon", de-ss-max: "3 Platoon", ca-3rd-min: "2 Platoon", ca-3rd-max: "3 Platoon"},
    {points: 3000, restricted-units: 5, de-ss-min: "3 Platoon", de-ss-max: "6 Platoon", ca-3rd-min: "3 Platoon", ca-3rd-max: "6 Platoon"},
];


#name - friendly name
#var-name - used to reference other data in js (see book-armysize
var book-forces = [
    {name: "12th SS Division", var-name: "de-ss", country-flag: "de.svg", insignia-name: "de-12ss.svg"},
    {name: "Canadian 3rd Infantry Division", var-name: "ca-3rd", country-flag: "ca.svg", insignia-name: "ca-3rd-div.svg"}
];
