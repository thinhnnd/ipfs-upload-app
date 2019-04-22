import React, { Component } from 'react';

class PostFile extends Component {
    constructor(props) {
        super(props)
        this.captureFile = this.captureFile.bind(this)
    }

    captureFile(event) {
        event.preventDefault();
        const file = event.target.files[0];
        const reader = new window.FileReader();
        reader.readAsArrayBuffer(file);
        reader.onloadend = () => {
          this.setState({ buffer: Buffer(reader.result) })
          console.log('buffer', this.state.buffer)
        }
      }

    handleSubmit(event) {
        event.preventDefault();
        
    //     ipfs.add(this.state.buffer, (err, results) => {
    //   if(err) {
    //     console.error(err)
    //     return
    //   }
    //   this.setState({ ipfsHash: results[0].hash })
    //   console.log('ipfsHash', this.state.ipfsHash)
    // });
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input type="file" onChange={this.captureFile} />
                <input type="submit" />
            </form>
        );
    }
}

export default PostFile;