import React from 'react';
import loaderSrc from '../../assets/loader3.gif'

const Loader = props => (
    <div>
        <img style={{ widht : 75 }} alt='loader icon' src = {loaderSrc} />
    </div>
)

export default Loader;