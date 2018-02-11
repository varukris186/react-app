import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/userActions';
import { DropdownButton, MenuItem, Button } from 'react-bootstrap';
import PieChart from './PieChart';



class Details extends Component {


    constructor(props, context) {
        console.log(props)
        super(props, context);
    }

    build(){
        $.get('http://localhost:8080/job/build/build?token=tsaapTsNg45Iw4nqqsvVQLPYsheSANZo&DisplayName=sample');
    }

    render() {
        return (
            <section className="row columns col-lg-12">
                <section className="col-lg-12">
                    <section className="page-header col-lg-12">Selected Build Info Section</section>
                    <div className="col-lg-12 margin-resetter">
                        <section className="col-lg-5 card" >
                            <section className="page-header margin-resetter col-lg-12">Build Details</section>
                            <section className="margin-resetter col-lg-12 card-data"><strong>Description:-</strong> {this.props.current.commandCenter.currentBuildDetails.actions[0].causes[0].shortDescription}</section>
                            <section className="margin-resetter col-lg-12 card-data"><strong>UserId:</strong> {this.props.current.commandCenter.currentBuildDetails.actions[0].causes[0].userId}</section>
                            <section className="margin-resetter col-lg-12 card-data"><strong>UserName:</strong> {this.props.current.commandCenter.currentBuildDetails.actions[0].causes[0].userName}</section>
                        </section>
                        <section className="col-lg-5 col-lg-offset-2 card" >
                            <section className="page-header margin-resetter col-lg-12">Build Artifacts</section>
                            <section className="margin-resetter col-lg-12 card-data"><strong>Description:-</strong> {(this.props.current.commandCenter.currentBuildDetails.building) ? "True" : "False"}</section>
                            <section className="margin-resetter col-lg-12 card-data"><strong>Total Duration:</strong> {this.props.current.commandCenter.currentBuildDetails.duration}</section>
                            <section className="margin-resetter col-lg-12 card-data"><strong>Estimated Duration:</strong> {this.props.current.commandCenter.currentBuildDetails.estimatedDuration}</section>
                        </section>
                    </div>
                </section>

                <section className="col-lg-12">
                    <section className="page-header col-lg-12">Build Server Facts</section>
                    <div className="col-lg-12 margin-resetter">
                        <section className="col-lg-5 card" >
                        <section className="page-header margin-resetter col-lg-12">Build Outcome Splitup</section>
                            <PieChart
                                slices={[
                                    {
                                    color: '#f00',
                                    value: 10,
                                    },
                                    {
                                    color: '#0f0',
                                    value: 20,
                                    },
                                ]}
                            />
                            <section className="highlighter_green">
                                <div className="indicator_green"></div> <span> Success Builds</span>
                            </section>
                            <section className="highlighter_red">
                                <div className="indicator_red"></div>  <span> Error Builds</span>
                            </section>        
                        </section>
                        <section className="col-lg-5 col-lg-offset-2 card" >
                            <section className="page-header margin-resetter col-lg-12">Build Artifacts</section>
                            <section className="margin-resetter col-lg-12 card-data"><strong>Last Completed Build:-</strong> {(this.props.current.commandCenter.currentBuildDetails.building) ? "True" : "False"}</section>
                            <section className="margin-resetter col-lg-12 card-data"><strong>Last Stable Build:</strong> {this.props.current.commandCenter.currentBuildDetails.duration}</section>
                            <section className="margin-resetter col-lg-12 card-data"><strong>Last Failed Build:</strong> {this.props.current.commandCenter.currentBuildDetails.estimatedDuration}</section>
                        </section>
                    </div>
                </section>

                

                <section className="col-lg-12">
                    <section className="page-header col-lg-12">Raise a Build</section>
                    <div className="col-lg-12 field">
                        Project Name:- React Build Easy
                    </div>
                    <div className="col-lg-6 field margin-resetter">
                        <div className="col-lg-12 margin-resetter">
                        
                        <div className="page-header"> From Desktop </div>

                        <DropdownButton className="dropdown-be" bsStyle="default" title="Choose a Role">
                            <MenuItem eventKey="1">Admin</MenuItem>
                        </DropdownButton>

                        <Button onClick={this.build} bsStyle="primary" bsSize="small">Build</Button>
                        </div>
                    </div>

                    <div className="col-lg-6 field margin-resetter">
                        <div className="col-lg-12 margin-resetter">
                        
                        <div className="page-header"> From Mobile </div>

                        <DropdownButton className="dropdown-be" bsStyle="default" title="Choose a Role">
                            <MenuItem eventKey="1">Admin</MenuItem>
                        </DropdownButton>

                        <Button onClick={this.props.sendNotification} bsStyle="primary" bsSize="small">Build</Button>
                        </div>
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
