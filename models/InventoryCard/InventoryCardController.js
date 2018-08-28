var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var InventoryCard = require('./InventoryCard');
var CardDetails = require('../../utility/AllCards.json')

// ADD LIST OF CARDS
router.post('/add', function(req,res) {
    var bulk = InventoryCard.collection.initializeUnorderedBulkOp();
    req.body.forEach(item => {
        bulk.find({Name:item.Name,GathererID:item['External ID']})
        .upsert()
        .updateOne({
            $set: {
                Name : item.Name,
                SetCode : item.Set,
                GathererID : item['External ID'],
                Price: item['Price Each'],
                Details: ((CardDetails[item.Name]) ? CardDetails[item.Name] : {} )
            },
            $inc : {Quantity : item.Quantity}
        });
    });
    bulk.execute(function (err, result) {
        console.log(err);
        console.log(result);
        if(err) return res.status(500).send('FAILED');
        console.log(bulk);
        res.status(200).send('SUCCESS');
    });
});

// RETURN ALL CARDS IN THE DB
router.get('/',function(req,res) {
    InventoryCard.find({}, function (err,cards){
        if (err) return res.status(500).send("There was a problem finding the cards.");
        res.status(200).send(cards);
    });
});

// RETURN ALL CARDS OF A SPECIFIC USER
router.get('/:user',function(req,res){
    InventoryCard.find({user:req.params.user}, function(err,cards){
        if (err) return res.status(500).send("There was a problem finding the cards.");
        res.status(200).send(cards);
    });
});

module.exports = router;