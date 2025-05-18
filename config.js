const configs = {    
       moviesBackend:{
            root:'http://localhost:7189/api',
            endpoints:[               
                 {name:"getPopular", endpoint:"Movies/getPopularMovies"}
               
            ]           

       }
    
}

export default configs;