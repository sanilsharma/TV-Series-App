import React, { Component } from 'react';
import SeriesList from '../../components/SeriesList'
import Loader from '../../components/Loader';
import Intro from '../../components/Intro';
class Series extends Component {

    state = {
        series: [],
        seriesName : '',
        isFetching : false
      }
    
    /*componentDidMount(){
       /*const series = ["Vikings", "Game of Thrones"];
        setTimeout(() => {
        this.setState({ series: series });
        }, 2000);*/
       
     //}


    onSeriesInputChange = e => {
        this.setState({ seriesName : e.target.value, isFetching : true})
        fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`) 
        .then((response)=>response.json())
        .then(json => this.setState({ series : json, isFetching : false }))
    }
      
    render() {
        const { series, seriesName, isFetching } = this.state;
        return (
            <div>
               {/*The length of the series array = {this.state.series.length}*/}
               <Intro message="Most loved Series you can see here "/>
               <div>
                   Search: <input value={seriesName} type="text" onChange ={this.onSeriesInputChange}/>
               </div>
               {
                   !isFetching && series.length === 0 && seriesName.trim() === ''
                   &&
                   <p>please enter the series name in the search box !!</p>
               }
               {
                   !isFetching && series.length === 0 && seriesName.trim() !== ''
                   &&
                   <p>No tv series found with this name</p>
               }
               {
                   isFetching && <Loader/>
               }
               {
                   !isFetching && <SeriesList list= {this.state.series}/>
               }
            </div>
        );
    }
}

export default Series;