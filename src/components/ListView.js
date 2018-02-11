import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/userActions';
import { ListGroup, ListGroupItem,ProgressBar } from 'react-bootstrap';


class ListView extends Component {


    static returnType(value){
        console.log(value)

        if(value === "SUCCESS"){
            return (
                <span className="green aligner">
                 SUCCESS
                </span>
            );
        }
        else{
            return (
                <span className="red aligner">
                 FAILURE
                </span>
            );
        }

    }

    static renderTransaction(value, index) {
        if (index <= 8) {
            return (
                <ListGroupItem onClick={() => ListView.changeCurrentBuild(index,this)}>
                    <a href="javascript:void()" className="build-heading">Build #{index}  </a>
                    {ListView.returnType(value.result)}
                </ListGroupItem>
            )
        }
    }

    static changeCurrentBuild(number,self){
        self.props.getBuildInformation(number).then((data) => {
            console.log(data);
            this.props.actions.updateCurrentBuild(undefined, data);
          }, (error) => {
            console.log(error)
        });
    }

    constructor(props, context) {
        super(props, context);
        ListView.renderTransaction = ListView.renderTransaction.bind(this);
        ListView.changeCurrentBuild = ListView.changeCurrentBuild.bind(this);
    }

    render() {
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
                       
                    <section className="">
                    <ProgressBar className="green" now={90} />
                </section>  

                        <section className="margin-resetter col-lg-12 card-data"><strong>Build Stability:</strong> {this.props.userdetails.commandCenter.health.description}</section>
  
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
