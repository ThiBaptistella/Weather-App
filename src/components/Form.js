import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.getApi}>
          <input type="text" name="city" paceholder="city"></input>
          <input type="text" name="country" paceholder="country"></input>
          <button>get date</button>
        </form>
      </div>
    );
  }
}

export default Form;
