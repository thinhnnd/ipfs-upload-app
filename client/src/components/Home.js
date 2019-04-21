import React, { Component } from 'react'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'

import ListPost from './Posts/ListPost'
import Login from './Auth/Login';

class Home extends Component {
    componentDidMount() {
        if(!this.props.isAuthenticated) {
            this.props.history.push('/login')
        }
    }

    render() {
        const { isAuthenticated } = this.props;
        console.log(isAuthenticated)
        return (
            <div>
               { isAuthenticated ? <ListPost /> : <Login /> }
             </div>
        )
    }
} 

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(withRouter(Home))