import React, { Component } from 'react'

import { Card, CardMedia, CardTitle, CardText } from 'material-ui/Card'

class PostCard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      expanded: false
    }
  }

  render() {
    return (
      <div className="container">
        <Card
          expanded={this.state.expanded}
          onExpandChange={expanded => this.setState({ expanded })}
          >
          <CardMedia>
            <img
              className="img-postcard"
              src={'https://placehold.it/350x150'}
              />
          </CardMedia>
          <CardTitle
            className="font-heading font-sans"
            title={this.props.post.title}
            subtitle={this.props.post.tags}
            actAsExpander={true}
            showExpandableButton={true}
            />
          <CardText className="font-body" expandable={true}>{this.props.post.content}</CardText>
        </Card>
      </div>
    )
  }
}

export default PostCard
