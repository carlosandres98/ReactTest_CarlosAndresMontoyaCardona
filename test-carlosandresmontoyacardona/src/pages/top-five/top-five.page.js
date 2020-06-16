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
            <div>
                <TopList movies={ this.state.movies } />
            </div>
        );
    }x1
}