import React, { Component } from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'

import ImageSlider from 'APP/app/components/ImageSlider'

class ImageModal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false,
    }

    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  handleOpen = () => {
    this.setState({open: true})
  }

  handleClose = () => {
    this.setState({open: false})
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
        />,
    ]

    const images = this.props.project.images
    // images is an array

    return (
      <div>
        <RaisedButton id="raised-button" label="Modal Dialog" onTouchTap={this.handleOpen} />
        <Dialog
          title="Think of a Title"
          actions={actions}
          modal={true}
          open={this.state.open}
          >
          <ImageSlider images={images} />
        </Dialog>
      </div>
    )
  }
}

export default ImageModal
