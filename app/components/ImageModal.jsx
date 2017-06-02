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
        label="Close"
        primary={true}
				onTouchTap={this.handleClose}
				keyboardFocused={true}
        />,
    ]

    const images = this.props.project.images

    return (
      <div>
        <FlatButton
          id="flat-button"
          label={`View ${this.props.project.title}`}
          onTouchTap={this.handleOpen}
          fullWidth={true}
					style={style}
          />
        <Dialog
          title={this.props.project.title}
          actions={actions}
          modal={false}
					open={this.state.open}
					onRequestClose={this.handleClose}
          >
          <ImageSlider images={images} />
        </Dialog>
      </div>
    )
  }
}

export default ImageModal

const style = {
  fontFamily: "'Questrial', sans-serif"
}
