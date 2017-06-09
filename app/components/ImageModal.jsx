import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'

import ImageSlider from 'APP/app/components/ImageSlider'

class ImageModal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false,
      images: this.props.project.images,
    }

    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  handleOpen = () => {
    this.setState({open: true, images: this.props.project.images})
  }

  handleClose = () => {
    this.setState({ open: false })
    browserHistory.push('/portfolio')
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

    // const images = this.props.project.images

    return (
      <div>
        <FlatButton
          id="flat-button"
          label={`View ${this.props.project.title}`}
          onTouchTap={this.handleOpen}
          fullWidth={true}
					style={styles.flatButton}
          />
        <Dialog
          id="dialog-padding"
          title={this.props.project.title}
          actions={actions}
          modal={false}
					open={this.state.open}
          onRequestClose={this.handleClose}
          style={styles.rootElement}
          titleStyle={styles.titleStyle}
          >
          <ImageSlider images={this.state.images} />
        </Dialog>
      </div>
    )
  }
}

export default ImageModal

const styles = {
  flatButton: {
    fontFamily: "'Questrial', sans-serif"
  },
  titleStyle: {
    fontFamily: "'Anton', sans-serif"
  },
  rootElement: {
    paddingTop: '2em'
  }
}
