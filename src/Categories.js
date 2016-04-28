import React from 'react';
import jQuery from 'jquery';
import { Link } from 'react-router';

class Categories extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: []
    };
  }

  componentDidMount() {
    this.getCategories();
  }

  getCategories() {
    let component = this;
    let url = "urlhere"
    jQuery.getJSON(url, function(data) {
      component.setState({
        categories: data.categories
      });
    });
  }

  render() {
    return (
      <div className="container">
        <h1>Categories!</h1>
        {this.state.categories.map(function(category) {
          return(
              <li key={category.id}>
              <link to={'/categories/${category.id}'}>
          )
        })}
      </div>
    );
  }
}

export default Categories;
