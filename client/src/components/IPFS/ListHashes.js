import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import {Link} from 'react-router-dom'


import { connect } from 'react-redux'
import { getAllHashes } from '../../actions/ipfsUploadActions'

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto'
    },
    table: {
        minWidth: 700
    },
    trHover: {
        '&:hover': {
            cursor: 'pointer'
        }
    }
})

class ListHashes extends Component {
    constructor(props) {
        super(props);
        this.handleClickLink = this.handleClickLink.bind(this)
    }

    componentWillMount() {

    }

    componentDidMount() {
        this.props.getAllHashes()
       console.log(this.props)
    }

    handleClickLink (ipfsHash) {
        window.open(`https://ipfs.infura.io/ipfs/${ipfsHash}`, "_blank")
    }

    render() { 
        const { classes, hashList } = this.props
        console.log('hashList', hashList)
       
        const hashItems = hashList && hashList.map( (el, i) => <TableRow onClick={()=>this.handleClickLink(el.ipfsHash)} className={classes.trHover} hover key={el._id}  target="_blank" href={`https://ipfs.infura.io/ipfs/${el.ipfsHash}`} >
                <TableCell> {i + 1} </TableCell>
                <TableCell> {el.type} </TableCell>
                <TableCell> {el.ipfsHash}  </TableCell>
                <TableCell> {(new Date(el.createAt)).toLocaleString()} </TableCell>
                <TableCell> {el.user.login} </TableCell>
            </TableRow> )
        return (
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>STT</TableCell>
                            <TableCell align="right">Type</TableCell>
                            <TableCell align="right">Hash</TableCell>
                            <TableCell align="right">Date Created</TableCell>
                            <TableCell align="right">Uploader</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {hashItems}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

const mapStateToProps = (state) => ({
    hashList: state.ipfs.hashList,
    user: state.user,
})
export default connect(mapStateToProps, {getAllHashes})(withStyles(styles)(ListHashes));