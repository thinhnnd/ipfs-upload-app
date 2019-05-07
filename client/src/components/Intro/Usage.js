import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import { Link } from 'react-router-dom'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const styles = {
    paper: {
        padding: 10,
    },
    avatar: {
        minWidth: 10,
        margin: '4px 10px 4px 4px'
    },
    login: {
        marginBottom: 5
    },
    time: {
        marginLeft: 10,
        color: '#bbb',
        fontSize: 14
    }


}

const users = [
    { email: 'thinh@gmail.com', pass: 'abc123' },
    { email: 'thinh2@gmail.com', pass: 'abc123' },
    { email: 'thinh3@gmail.com', pass: 'abc123' },
    { email: 'thupx@gmail.com', pass: 'abc123' },
    { email: 'anhnguyen@gmail.com	', pass: 'abc123' },
    { email: 'thinh@gmail.com', pass: 'abc123' },
    { email: 'hoangtrinh@gmail.com', pass: 'abc123' }
]

class Usage extends Component {
    render() {
        const { classes, post } = this.props
        return (
            <div>
                <Paper className={classes.paper}>
                    <h1>IPFS Upload App</h1>
                    <hr />
                    <p>Đây là một ứng dụng có chức năng upload file lên một ipfs host và lưu trữ các Hash đã upload vào Database</p>
                    <hr />
                    <h3>Usage</h3>
                    <ul>
                        <li>Có thể sử dụng các tài khoản sau để đăng nhập:</li>
                        <table id="users">
                            <thead>
                                <tr>
                                    <th>email</th>
                                    <th>pass</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map((user, i) => (
                                        <tr key={i}>
                                            <td component="th" scope="row">
                                                {user.email}
                                            </td>
                                            <td align="right">{user.pass}</td>
                                        </tr>
                                    )
                                    )}
                            </tbody>
                        </table>
                        <li>Hoặc bấm <b>Menu -> Register </b>để đăng ký tài khoản mới</li>
                        <li>Sau khi đăng nhập, bấm <b>Menu -> IPFS </b>để vào giao diện upload</li>
                        <li>
                            Để upload một file:
                        <ol>
                                <li>Bấm nút <b>ADD FILE</b></li>
                                <li>Chọn file (Không quá 50MB)</li>
                                <li>Nhấn <b>Submit</b></li>
                            </ol>
                        </li>

                    </ul>
                    <hr />
                    <h3>Contributor</h3>
                    <p>thinhnnd thupx anhnguyen hoangtrinh</p>
                </Paper>
            </div>
        )
    }
}


export default withStyles(styles)(Usage)