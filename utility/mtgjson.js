const getMtgJson = require('mtg-json');
var fs = require('fs');

if (fs.existsSync(__dirname+'/AllCards.json')) {
    console.log('Details loaded')
}
else{
    console.log('Details downloading...')
    getMtgJson('cards',__dirname)
    .then(json => {
        console.log('Details successfully downloaded')
    });
}

//Create version system so new file isn't downloaded everytime 
