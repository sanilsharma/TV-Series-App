import React from 'react';
import Loader from '../Loader';

const SingleSeriesDetails = (props) => {
    return (
        <div>
            { props.show === null && <Loader/> }
                {
                    props.show !== null &&
                    <div>
                        <p>{props.show.name}</p>
                        <p>Premiered - {props.show.premiered}</p>
                        <p>Rating - {props.show.rating.average}</p>
                        <p>
                            <img alt="show" src={props.show.image.medium}/>
                        </p>
                    </div>
                }
        </div>
    );
}

export default SingleSeriesDetails;