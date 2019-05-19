import React, { Component } from 'react'
import { connect } from 'react-redux'

import ListHashes from './ListHashes'

import Paper from '@material-ui/core/Paper'
import IpfsAdd from './IpfsAdd'
import Login from '../Auth/Login'
import { withStyles } from '@material-ui/core/styles'
import IPFS_JS from 'ipfs'


const styles = {
    paper: {
        padding: 10,
    },
    textCenter: {
        textAlign: 'center'
    }
}

class IPFS extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            file: null,
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleClose() {
        this.setState({
            open: false
        });
    }

    handleSave(files) {
        //Saving files to state for further use and closing Modal.


        console.log('sended')
    }
    handleOpen() {
        this.setState({
            open: true,
        });
    }

    handleChange(files) {
        console.log(files)
        this.setState({
            file: files[0]
        });

    }
  
    render() {
        const { isAuthenticated, classes } = this.props;

        return (
            <div>
                {isAuthenticated ? <Paper className={classes.paper} >
                    <h3 className={classes.textCenter} >IPFS Page</h3>
                    <IpfsAdd />
                    <ListHashes />
                </Paper>
                    : <Login />
                }
            </div>

        )
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(withStyles(styles)(IPFS))