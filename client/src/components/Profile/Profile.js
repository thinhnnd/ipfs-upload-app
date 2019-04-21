import React, {Component} from 'react'

import {withStyles} from '@material-ui/core/styles'
import { connect } from 'react-redux'
import {
    getPostsByUserId, 
    getUserProfile,
    followUser,
    unfollowUser
} from '../../actions/profileActions'

import Post from '../Posts/Post'
import LoadingPosts from '../Posts/LoadingPosts'
import { Paper, Button } from '@material-ui/core';

const styles = {
    paper: {
        padding: 10
    },
    detailsBlock: {
        display: 'flex'
    },
    login: {

    },
    email: {
        color: '#888',
        marginBottom: 10
    },
    detail: {
        marginRight: 10,
        fontWeight: 'bold'
    },
    detailTitle: {
        marginLeft: 3,
        textTransform: 'uppercase',
        fontSize: 10,
        fontWeight: 'normal'
    },
    btnBlock: {
        width: '100%',
        textAlign: 'right'
    },
    btnFollow: {
        backgroundColor: '#9400D3',
        color: '#fff',
        '&:hover': {
            color: '#9400D3',
            borderColor: '#9400D3',
            backgroundColor: '#fff'
        }
    }
}

class Profile extends Component {
    constructor(props) {
        super(props)
        this.handleFollow = this.handleFollow.bind(this)
        this.handleUnfollow = this.handleUnfollow.bind(this)

    }

    componentDidMount() {
        this.props.getPostsByUserId(this.props.match.params.userId)
        this.props.getUserProfile(this.props.match.params.userId)
    }



    handleFollow() {
        this.props.followUser(this.props.match.params.userId)
    }

    handleUnfollow() {
        this.props.unfollowUser(this.props.match.params.userId)
    }

    render() {
        const {classes , loadingPosts, loadingProfile, list, auth, user, profile } = this.props
        let items
        items = list && list.map(el => <Post key={el._id} post={el} />)
        
        let followBtns 
        if(auth.isAuthenticated) {
            if(user.following.indexOf(this.props.match.params.userId) === -1) {
                followBtns = (<div className={classes.btnBlock}>
                    <Button variant="outlined" className= {classes.btnFollow} onClick={this.handleFollow}>
                        Follow
                    </Button>
                </div>)
            }
            else {
                followBtns = (<div className={classes.btnBlock}>
                    <Button variant="outlined" className= {classes.btnFollow} onClick={this.handleUnfollow}>
                        Unfollow
                    </Button>
                </div>)
            }
        }
        let profileInfo = null
        if (profile && items) {
            profileInfo = (
                <Paper className={classes.paper}>
                    <h1 className={classes.login}>{profile.login}</h1>
                    <div className={classes.email}>{profile.email}</div>
                    <div className={classes.detailsBlock}>
                        <div className={classes.detail}>
                            {items.length} 
                            <span className={classes.detailTitle}> posts</span>
                        </div>
                        <div className={classes.detail}>
                            {profile.followers.length} 
                            <span className={classes.detailTitle}> follower</span>
                        </div>
                        <div className={classes.detail}>
                            {profile.following.length} 
                            <span className={classes.detailTitle}> following</span>
                        </div>
                        {
                            followBtns
                        }
                    </div>
                </Paper>
            )
        }
        return(
            <div>
                { loadingPosts ? <div> Loading </div> : profileInfo }
                { loadingPosts ? <LoadingPosts /> : items }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    loadingPosts: state.post.loading,
    list: state.post.list,
    profile: state.profile.user,
    loadingProfile: state.profile.loading,
    auth: state.auth,
    user: state.auth.user
})

export default connect(mapStateToProps, { getPostsByUserId, getUserProfile, followUser, unfollowUser } )(withStyles(styles)(Profile))