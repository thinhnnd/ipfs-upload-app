import React from 'react';
import Grid from '@material-ui/core/Grid';
import Header from './Header';
import Footer from './Footer';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});

function Main(props) {
    const {classes} = props;
    return (
        <div >
            <Header />
            <div className={classes.root}>
                <Grid container justify="center" spacing={24}>
                    <Grid item lg={10} xs={10} sm={10} style={{ marginTop: 30 }}>

                        {props.children}
                    </Grid>
                </Grid>
            </div>

            <Footer />
        </div>
    );
}

Main.propTypes = {
    classes: PropTypes.object.isRequired,
};



export default withStyles(styles)(Main);