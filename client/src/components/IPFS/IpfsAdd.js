import React, {Component} from 'react'
import {connect} from 'react-redux' 

import {addFile} from '../../actions/ipfsUploadActions'

import {DropzoneDialog} from 'material-ui-dropzone'
import Button from '@material-ui/core/Button';

import { builtinModules } from 'module';

class IpfsAdd extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            file: null,
            buffer: null,
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
        //Saving files to state for further use and closing Modal  
      console.log('sended')
    }
    handleOpen() {
        this.setState({
            open: true,
        });
    }

    handleChange (files) {
        let file = files[0]
        
        this.setState({
            file: file
        })

        let reader = new window.FileReader()
        reader.readAsArrayBuffer(file)
        reader.onloadend = () => this.convertToBuffer(reader)
  

    }


    // captureFile =(event) => {
    //     event.stopPropagation()
    //     event.preventDefault()
    //     const file = event.target.files[0]
    //     let reader = new window.FileReader()
    //     reader.readAsArrayBuffer(file)
    //     reader.onloadend = () => this.convertToBuffer(reader)
    //   };
//Convert the file to buffer to store on IPFS
        convertToBuffer = async(reader) => {
      //file is converted to a buffer for upload to IPFS
        const buffer = await Buffer.from(reader.result);
      //set this buffer-using es6 syntax
      console.log(buffer)
      this.setState({
        buffer: buffer
      });
    };

    handleSubmit() {
        // e.preventDefault()
        // let formData = new FormData()
        // formData.append('ref', 'uploadForm')
        // formData.append('fileUpload',this.state.file);
        // formData.append('encType', 'multipart/form-data')

        const { file, buffer } = this.state;
        this.props.addFile(buffer, file)
        // console.log('file ', file);
        this.setState({
            file: null,
            open: false
        });
    }

    render() {
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