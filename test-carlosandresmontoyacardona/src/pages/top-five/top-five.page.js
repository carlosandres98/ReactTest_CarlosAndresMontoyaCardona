// import React, { Component } from 'react';
// import MoviesServices from '../../services/movies.service';

// export default class TopFiveTopFive extends Component {

//     componentDidMount = () => {
//         const urlAPI = 'http://www.mocky.io/v2/5dc3c053300000540034757b';

//         fetch(urlAPI, {
//             method: 'GET'
//         })
//         .then ((result) => {
//             console.log(result.json());
            
//             return result.json();
//         })
//         .catch((error) => {
//             return false;
//         })
//     }

//     render() {
//         return (1);
//     }

// }

import React, { Component } from 'react';
import TopList from '../../components/top-list/top-list';

export class TopFive extends Component {

    state = {
        movies: []
      }

      componentDidMount() {
        fetch('http://www.mocky.io/v2/5dc3c053300000540034757b')
        .then(res => res.json())
        .then((data) => {            
          this.setState({ movies: data.movies })
        })
        .catch(console.log)
      }

    render() {
            return (
                <TopList movies={this.state.movies} />
            );

        
    }
}