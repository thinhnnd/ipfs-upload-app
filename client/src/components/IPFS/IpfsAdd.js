import React, {Component} from 'react'
import {connect} from 'react-redux' 

import {addFile} from '../../actions/ipfsUploadActions'

import {DropzoneDialog} from 'material-ui-dropzone'
import Button from '@material-ui/core/Button';

class IpfsAdd extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            file: null
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
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

    handleChange (files) {
        console.log(files)
        this.setState({
            file: files[0]
          });
        console.log('name ', files[0].name)

    }

    handleSubmit() {
        // e.preventDefault()
        let formData = new FormData()
        formData.append('ref', 'uploadForm')
        formData.append('fileUpload',this.state.file);
        // formData.append('encType', 'multipart/form-data')
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        this.props.addFile(formData, config)
        this.setState({
            file: null,
            open: false
        });
    }

    render() {
        console.log('fileUpload',this.state);

        return (
            <div>
                <Button variant="contained"  color='secondary' onClick={this.handleOpen.bind(this)}>
                  Add File
                </Button>
                <DropzoneDialog
                    open={this.state.open}
                    onSave={this.handleSubmit}
                    acceptedFiles={['image/*', 'video/*', 'application/*']}
                    onChange={this.handleChange.bind(this)}
                    showPreviews={true}
                    filesLimit={1}
                    maxFileSize={5000000}
                    showAlerts={true}
                    onClose={this.handleClose.bind(this)}
                    showFileNamesInPreview={true}
                />
            </div>

        )
    }
}

export default connect(null, {addFile})(IpfsAdd)