import React, {Component} from 'react';
import SingleSeriesDetails from '../../components/SingleSeriesDetails';

class SingleSeries extends Component{

    state = {
        show : null,
    }

    componentDidMount() {
        const { id } = this.props.match.params;

        fetch(`http://api.tvmaze.com/shows/${id}?embeded-episodes`)
        .then((response)=>response.json())
        .then(json => this.setState({ show : json }))
    }
    

    render() {
        const { show } = this.state;
        console.log(show);
        return (
            <div>
                <SingleSeriesDetails show = {this.state.show }/>
            </div>
        )
    }
};

export default SingleSeries;