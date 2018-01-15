import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/userActions';
import { ListGroup, ListGroupItem,ProgressBar } from 'react-bootstrap';


class ListView extends Component {


    static renderTransaction(value, index) {
        if (index <= 5) {
            return (
                <ListGroupItem onClick={() => ListView.changeCurrentBuild(index)}><a href="javascript:void()">Build #{index}</a></ListGroupItem>
            )
        }
    }

    static changeCurrentBuild(number){
        this.props.getBuildInformation(number).then((data) => {
            console.log(data);
            this.props.actions.updateCurrentBuild(undefined, data);
          }, (error) => {
            console.log(error)
          });
    }

    constructor(props, context) {
        super(props, context);
        ListView.changeCurrentBuild = ListView.changeCurrentBuild.bind(this);
    }

    render() {
        debugger;
        return (
            <section className="row columns col-lg-12">
                <section className="col-lg-12">
                    <section className="page-header col-lg-12">Builds</section>
                    <div className="col-lg-12 margin-resetter">
                        <ListGroup>
                            {
                                this.props.userdetails.commandCenter.buildBlob.map(ListView.renderTransaction)
                            }
                        </ListGroup>
                    </div>

                    <section className="page-header col-lg-12">Health Report</section>
                    <div className="col-lg-12 ">
                        <section className="example">
                             {this.props.userdetails.commandCenter.health.description}
                        </section>   

                        <section className="">
                            <ProgressBar className="green" now={this.props.userdetails.commandCenter.health.score} />
                        </section>    
                    </div>


                </section>
            </section>
        )
    }
}

function mapStateToProps(state) {
    return {
        userdetails: state
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
)(ListView);
