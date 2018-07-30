import React from 'react'
import classes from './Footer.css';

export default () => {
  return (
    <footer className={classes.Footer}>
        <p>Created by <a href="https://twitter.com/MattJamesBrad">@MattJamesBrad</a>, powered using the National Rail API. I take no responsibility for incorrect information or missed trains!</p>
        <p>Icon made by <a href="https://smashicons.com/">Smash Icons</a> from <a href="https://www.flaticon.com/">Flaticon</a></p>
    </footer>
  )
}
