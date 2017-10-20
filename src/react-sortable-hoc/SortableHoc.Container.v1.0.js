import React, { Component } from 'react'
import Dimensions from 'react-dimensions'
import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc';
import {Panel} from 'primereact/components/panel/Panel';
import {Toolbar} from 'primereact/components/toolbar/Toolbar';
import {Button} from 'primereact/components/button/Button';
import {Messages} from 'primereact/components/messages/Messages';


const SortableItem = SortableElement(({value}) => (
    <div className="ui-g">
        <div className="ui-g-12">
            <Toolbar>
                <div className="ui-toolbar-group-left">
                    <Button label={value.header} icon="fa-plus"/>
                    <Button label={value.meta} icon="fa-folder-open" className="ui-button-success"/>
                </div>
                <div className="ui-toolbar-group-right">
                    <Button icon="fa-refresh"/>
                    <Button icon="fa-trash" className="ui-button-danger"/>
                </div>
            </Toolbar>
        </div>
        <div className="ui-g-12">
            The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. 
            His beloved son Michael has just come home from the war, but does not intend to become part of his father's business. 
            Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, 
            kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
        </div>
        <div className="ui-g-12">
            <Messages 
                value={[{severity:'success', summary:value.header, detail:value.description}]} 
                closable={false} />
        </div>
    </div>
));

const SortableList = SortableContainer(({items, width, height}) => {
    return (
        <Panel header="Godfather I" style={{ width: width, height: height }}>
            {items.map((value, index) =>
                <SortableItem key={`item-${index}`} index={index} value={value} />
            )}
        </Panel>
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

  componentWillMount() {
    this.createSortableContainer()
  }

  componentDidMount() {
    this.createSortableContainer()
  }

  componentDidUpdate() {
    this.createSortableContainer()
  }

  createSortableContainer() {
    console.log(JSON.stringify(this.props));
    this.state = { items: this.props.data };
  }

  render() {
      console.log(JSON.stringify(this.state));
      return (
          <SortableList
              items={this.state.items}
              width={this.props.width}
              height={this.props.height}
              onSortEnd={this.onSortEnd}
              />
      )
  }
}

export default Dimensions()(SortableComponent)
