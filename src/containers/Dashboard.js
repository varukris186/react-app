import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/userActions';
import jenkinsInteractiveComponent from '../hoc/jenkins';
import Listview from '../components/ListView';
import Details from '../components/Details';



class Dashboard extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllBuilds().then((data) => {
      this.props.actions.updateBuilds(undefined, data);    
    }, (error) => {
      console.log(error)
    });

    this.props.getBuildInformation(1).then((data) => {
      this.props.actions.updateCurrentBuild(undefined, data);
    }, (error) => {
      console.log(error)
    });


  }


  render() {
    return (
      <section className="row">
        <div className="col-lg-4 dashboard">
          <Listview getBuildInformation={this.props.getBuildInformation}/>
        </div>

        <div className="col-lg-7 details">
          <Details sendNotification={this.props.sendNotification} />
        </div>
      </section>
    )
  }
}

function mapStateToProps(state) {
  return {
    fuelSavings: state.fuelSavings
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default jenkinsInteractiveComponent(connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard));
