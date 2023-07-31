//movie

class Movie{
    constructor(title, studio,rating){
        this.title = title;
        this.studio = studio;
        this.rating = rating || 'PG' ;
    }
    showmovie(){
        return `Movie deatil is ${this.title},${this.studio},${this.rating}`;
    }
    movieObj(){
        return ( {
             title:this.title,
             studio:this.studio,
             rating:this.rating
        })
    }
    getPG(array){
    let data = array.filter(array=>array.rating == "PG");
    console.log(data.map(a=>a.tit));
       
    }
    }
    var movies = new Movie("Billa","Pokkiri");
    console.log(movies.showmovie());
    
    let movie1 = new Movie("Don","Kaithi","Maan karatae");
    let movie2 = new Movie("Jailer","Samurai","Veeram");
    let movie3 = new Movie("Maverran","Mamannan","Leo");
    let array = []
    array.push(movie1.movieObj());
    array.push(movie2.movieObj());
    array.push(movie3.movieObj());
    console.log(array)