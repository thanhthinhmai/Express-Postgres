const { db, } = require('../pgp');

exports.home = (req,res) =>{
    db.any('SELECT * FROM movies')
    .then( data =>{
        console.log(data);

        res.render('home',{
            title : 'Star Wars Movies App',
            movies : data
        })
    } )
    
    
}
exports.movie_single = (req, res) =>{
    let episode_number = req.params.episode_number;
    db.any('SELECT * FROM movies WHERE id = ' + episode_number)
    .then( data =>{
        res.render('movie_single',{
            movies:data
        })
    
    })
}

