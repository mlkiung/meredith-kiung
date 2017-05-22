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
    console.log('props in PostCard', this.props)
    return (
      <div>
        <Card
          expanded={this.state.expanded}
          onExpandChange={expanded => this.setState({ expanded })}
          >
          <CardMedia>
            <img
              className="img-postcard"
              src={'/images/sandcastle.png'}
              />
          </CardMedia>
          <CardTitle
            title={this.props.post.title}
            subtitle={this.props.post.tags}
            actAsExpander={true}
            showExpandableButton={true}
            />
          <CardText expandable={true}>{this.props.post.content}</CardText>
        </Card>
      </div>
    )
  }
}

export default PostCard




























// const PostCard = props => {

//   let tags = props.post.tags.split(', ')

//   return (
//     <div id="PostCard">
//       <div className="panel panel-default">
//         <div className="panel-heading" id="post-card-no-border">
//           <h3 className="panel-title font-serif">{props.post.title}</h3>
//           <ol className="breadcrumb font-mono">{
//               tags.map(tag => {
//                 return (
//                   <li className="tags" key={tag}>
//                     <Link to={'/posts'} id="tags-color">{tag}</Link>
//                   </li>
//                 )
//               })
//             }
//           </ol>
//         </div>
//         <div className="panel-body font-sans">
//           {props.post.content}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default PostCard
