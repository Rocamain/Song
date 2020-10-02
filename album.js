const favAlbum = {
Dated: "18th March 2014",
Genre: ["Electronic", "ambientpost-rock"],
Label:	"Ghostly International",
Producer: "Scott Hansen"
}
console.log(favAlbum);

/// Iteration with for of method with Object.key
for (const key  of Object.keys(favAlbum)) {
    console.log(key);
}
/// Iteration with for of method with Object.values
for (const value  of Object.values(favAlbum)) {
    console.log(value);
}

/// Iteration with for of method with Object.entries


for (const valuePair  of Object.entries(favAlbum)) {
    const key = valuePair[0];
    const value = valuePair[1]
    console.log(`This is the Key ===> ${key} this is the value ===> ${value} `);
}