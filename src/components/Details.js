import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/userActions';
import { DropdownButton, MenuItem, Button } from 'react-bootstrap';



class Details extends Component {


    constructor(props, context) {
        console.log(props)
        super(props, context);
    }

    render() {
        return (
            <section className="row columns col-lg-12">
                <section className="col-lg-12">
                    <section className="page-header col-lg-12">Build Info Section</section>
                    <div className="col-lg-12 margin-resetter">
                        <section className="col-lg-5 card" >
                            <section className="page-header margin-resetter col-lg-12">Build Details</section>
                            <section className="margin-resetter col-lg-12">Description:- {this.props.current.commandCenter.currentBuildDetails.actions[0].causes[0].shortDescription}</section>
                            <section className="margin-resetter col-lg-12">UserId: {this.props.current.commandCenter.currentBuildDetails.actions[0].causes[0].userId}</section>
                            <section className="margin-resetter col-lg-12">UserName: {this.props.current.commandCenter.currentBuildDetails.actions[0].causes[0].userName}</section>
                        </section>
                        <section className="col-lg-5 col-lg-offset-2 card" >
                            <section className="page-header margin-resetter col-lg-12">Build Artifacts</section>
                            <section className="margin-resetter col-lg-12">Description:- {(this.props.current.commandCenter.currentBuildDetails.building) ? "True" : "False"}</section>
                            <section className="margin-resetter col-lg-12">Total Duration: {this.props.current.commandCenter.currentBuildDetails.duration}</section>
                            <section className="margin-resetter col-lg-12">Estimated Duration: {this.props.current.commandCenter.currentBuildDetails.estimatedDuration}</section>
                        </section>
                    </div>
                </section>

                <section className="col-lg-12">
                    <section className="page-header col-lg-12">Raise a Build</section>
                    <div className="col-lg-12 field margin-resetter">
                        Project Name:- React Build Easy
                    </div>
                    <div className="col-lg-12 field margin-resetter">
                        Choose A Role to Build

                        <DropdownButton className="dropdown-be" bsStyle="default" title="Choose a Role">
                            <MenuItem eventKey="1">Admin</MenuItem>
                        </DropdownButton>

                        <Button onClick={this.props.sendNotification} bsStyle="primary" bsSize="small">Build</Button>
                    </div>
                </section>

            </section>
        )
    }
}

function mapStateToProps(state) {
    return {
        current: state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Details);
