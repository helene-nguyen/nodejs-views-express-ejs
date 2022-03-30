//^import modules
const express = require('express');
const router = express.Router();
//^my table
const myTab = require('./data/myTab')

router.get('/', (req,res) => {
    let table = myTab.songs; //get my table
    console.log(table);

    res.render('homePage', {TitleHome: 'All my favourite songs', txt : `Let's sing it !`, table});
});

router.get('/:id', (req, res) => {
    let paramsID = req.params.id;

    let song = myTab.songs.find((song)=>song.id === Number(paramsID));

    res.render('mySongs', { ThisSong: song.title, song});
});

module.exports = router;