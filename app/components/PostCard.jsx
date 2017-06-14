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
    const post = this.props.post

    return (
      <div className="container">
        <Card
          expanded={this.state.expanded}
          onExpandChange={expanded => this.setState({ expanded })}
          >
          <CardMedia>
            <img
              className="img-postcard"
              src={'images/BlogPosts/portfolio.jpeg'}
              />
          </CardMedia>
          <CardTitle
            className="font-heading font-sans"
            title={post.title}
            subtitle={post.tags}
            actAsExpander={true}
            showExpandableButton={true}
            />
          <CardText className="font-body" expandable={true}>{post.content}</CardText>
        </Card>
      </div>
    )
  }
}

export default PostCard
