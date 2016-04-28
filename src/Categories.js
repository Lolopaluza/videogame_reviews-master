import React from 'react';
import jQuery from 'jquery';

class Categories extends React.Component {

  componentDidMount() {
    this.getCategories();
  }
  
  getCategories() {
    let url = "urlhere"
    jQuery.getJSON(url, function() {
      console.log(data);
    });
  }

  render() {
    return (
      <div className="container">
        <h1>Categories!</h1>

        {this.props.children}
      </div>    );
  }
}

export default Categories;
