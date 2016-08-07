var React = require('react');
var ListItem = require('./ListItem.jsx');
var ingredients = [{"id":1,"text":"Potatoes"},{"id":2,"text":"Tomatoes"},{"id":3,"text":"Onions"}];
var List = React.createClass({
  render : function(){
    var listItems = ingredients.map(function(ingredient){
      return <ListItem key={ingredient.id} ingredient={ingredient.text}></ListItem>
    });
    return (<ul>{listItems}</ul>);
  }
});

module.exports = List;
