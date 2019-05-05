import React from 'react';
import classes from './Home.css'
import Button from '../../util/UI/Button/Button'
const home = () => {
    return(
        <div className={classes.Home}>
            <div  className={classes.Start}>
                <Button href="/typing">START</Button>
            </div>
        </div>
    )
}

export default home;