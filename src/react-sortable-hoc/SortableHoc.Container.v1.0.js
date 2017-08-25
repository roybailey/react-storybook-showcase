import React, { Component } from 'react'
import Dimensions from 'react-dimensions'
import { Card } from 'semantic-ui-react'
import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc';


const SortableItem = SortableElement(({value}) => (
    <Card fluid color={value.status}>
      <Card.Content>
        <Card.Header>{value.header}</Card.Header>
        <Card.Meta>{value.meta}</Card.Meta>
        <Card.Description>{value.description}</Card.Description>
      </Card.Content>
    </Card>
));

const SortableList = SortableContainer(({items}) => {
    return (
        <Card.Group>
            {items.map((value, index) =>
                <SortableItem key={`item-${index}`} index={index} value={value} />
            )}
        </Card.Group>
    );
});

class SortableComponent extends Component {

  constructor(props) {
    super(props)
    this.createSortableContainer = this.createSortableContainer.bind(this)
    this.state = {
        items: []
    };
  }

  onSortEnd = ({oldIndex, newIndex}) => {
      this.setState({
          items: arrayMove(this.state.items, oldIndex, newIndex)
      });
  };

  componentDidMount() {
    this.createSortableContainer()
  }

  componentDidUpdate() {
    this.createSortableContainer()
  }

  createSortableContainer() {
      this.state = { items: this.props.data };
  }

  render() {
      return (
          <SortableList items={this.state.items} onSortEnd={this.onSortEnd} />
      )
  }
}

export default Dimensions()(SortableComponent)
