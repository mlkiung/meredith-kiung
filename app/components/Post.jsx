import React from 'react'

export default class Post extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Panel Title</h3>
          </div>
          <div className="panel-body">
            Panel content
          </div>
        </div>
      </div>
    )
  }
}
