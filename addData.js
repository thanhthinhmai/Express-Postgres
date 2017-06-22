var pgp = require('pg-promise')();
var db = pgp('postgres://postgres:123@localhost:5433/movies');
let data = require('./addMovie.json');


// db.any('select * from movies')
//         .then((data)=>{
//         console.log(data);
// })
// .catch(error => {
//     console.log(error);
//     });

for(let count in data){
    data[count].forEach((item) => {
        db.any('insert into movies(id, title, main_characters, description, poster, hero_image) values ($(episode_number), ${title},${main_characters},${description},${poster},${hero_image})', item)
            .then(()=>{
                    console.log('import succeed');
            })
            .catch(error => {
                console.log(error);
                });
    })
}