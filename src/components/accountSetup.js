import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {changeText} from '../actions';
import {bindActionCreators} from 'redux';

class AccountSetup extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <div>
                <section id="progressBar">
                    <ul>
                        <li>ACCOUNT SETUP</li>
                        <li>SOCIAL PROFILES</li>
                        <li>PERSONAL DETAILS</li>
                    </ul>
                </section>
                <section id="fields">
                    <h2>CREATE YOUR ACCOUNT</h2>
                    <h3>This is step1</h3>
                    <input type="email" name="email" placeholder="Email" value={this.props.account.email} onChange={this.props.changeText}/>
                    <input type="password" name="password" value={this.props.account.password} placeholder="Password" onChange={this.props.changeText}/>
                    <input type="password" name="confirmPassword" value={this.props.account.confirmPassword} placeholder="Confirm Password" onChange={this.props.changeText}/>
                </section>
                <Link to='socialProfiles'>Next</Link>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {account: state.account};
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        changeText: changeText
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountSetup);
