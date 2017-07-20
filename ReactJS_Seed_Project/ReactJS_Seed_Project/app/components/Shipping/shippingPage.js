import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as shippingActions from '../../actions/robotActions';

class ShippingPage extends React.Component {
  constructor(props){
    super(props);

  }

  render() {
    const {robots,actions} = this.props;
    console.log("Shipping page");
    robots.map((robot) =>{
       //stage3

       let stage1=actions.getRobot()
       console.log('Shipping list',stage1)
      });
return (
      <div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Shipping Robot List</th>
          </tr>
        </thead>
        <tbody>{robots.map((robot) => <tr key={robot.id}><td>{robot.name}</td></tr>)}</tbody>
      </table>
      </div>
    );
  }
}

function mapStateToProps({robots}) {
  console.log('shipping robots',robots)
  return {
    robots: robots
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(shippingActions, dispatch)

  };
}

export default connect(mapStateToProps,mapDispatchToProps)(ShippingPage);
