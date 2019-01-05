import React, { Component } from 'react';
import { connect } from 'react-redux';

import Aux from '../../hoc/Aux/Aux';
import Modal from '../../components/UI/Modal/Modal';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';
import axios from '../../axios-orders';

export class HomeBuilder extends Component {
    state = {
        purchasing: false
    }

    componentDidMount () {
        this.props.onInitProps();
    }

    render () {
        const disabledInfo = {
            ...this.props.ings
        };
        for ( let key in disabledInfo ) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        let orderSummary = null;
        let page = this.props.error ? <p>Ingredients cant be loaded!</p> : <Spinner />;

        if ( this.props.ings ) {
            page = (
                <Aux>
                    A bit of content
                </Aux>
            );
        }
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {page}
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        ings: state.homeBuilder.ingredients,
        error: state.homeBuilder.error,
        isAuthenticated: state.auth.token !== null
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onInitProps: () => dispatch(actions.initProps()),
        onSetAuthRedirectPath: (path) => dispatch(actions.setAuthRedirectPath(path))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler( HomeBuilder, axios ));