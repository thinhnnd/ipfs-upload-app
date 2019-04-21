import React from 'react'

import {withStyles} from '@material-ui/core/styles'


const styles = {
    root: {
        textAlign: 'center'
    }
}

const Footer = ({classes}) => (
    <div>
        <footer className={classes.root}>
            Made by <a href="https://fb.com/nieducthinh">thinhnnd</a> with &#10084;
        </footer>
    </div>
)

export default withStyles(styles)(Footer)