import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { login, newUser } from '../../store/actions';

class LogModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      sign: {
        username: '',
        password: '',
        fname: '',
        lname: '',
      },
      creds: {
        username: '',
        password: '',
      }
    };
    console.log(this.props.type);

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  handleChanges = e => {
    this.setState({
        creds: {
            ...this.state.creds,
            [e.target.name]: e.target.value,
        }
    })
  }

  handleSignChanges = e => {
    this.setState({
        sign: {
            ...this.state.sign,
            [e.target.name]: e.target.value,
        }
    })
  }

  login = () => {
    this.props.login(this.state.creds);
    this.toggle();
  }

  newUser = () => {
    this.props.newUser(this.state.sign);
    this.toggle();
  }

  render() {
    return (
      <div>
        <Button color="secondary" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>{this.props.type}</ModalHeader>
          <ModalBody>
            <form>
              {(this.props.type === 'Log In') ? (
                <div>
                  <h1>Username</h1>
                  <input onChange={this.handleChanges} name="username" placeholder="Enter Username" value={this.state.creds.username} />
                  <h1>Password</h1>
                  <input onChange={this.handleChanges} name="password" placeholder="Enter Password" value={this.state.creds.password} />
                </div>
              ) : (
                <div>
                  <h1>First Name</h1>
                  <input onChange={this.handleSignChanges} name="fname" placeholder="Enter First Name" value={this.state.sign.fname} />
                  <h1>Last Name</h1>
                  <input onChange={this.handleSignChanges} name="lname" placeholder="Enter Last Name" value={this.state.sign.lname} />
                  <h1>Username</h1>
                  <input onChange={this.handleSignChanges} name="username" placeholder="Enter Username" value={this.state.sign.username} />
                  <h1>Password</h1>
                  <input onChange={this.handleSignChanges} name="password" placeholder="Enter Password" value={this.state.sign.password} />
                </div>
              )}
            </form>
          </ModalBody>
          <ModalFooter>
                {(this.props.type === 'Sign Up') ? (
                  <div>
                    <Button color="primary" onClick={this.newUser}>{this.props.type}</Button>{' '}
                  </div>
                ) : (
                  <div>
                    <Button color="primary" onClick={this.login}>{this.props.type}</Button>{' '}
                  </div>
                )}
            <Button color="danger" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  
})

export default withRouter(connect(mapStateToProps, { login, newUser })(LogModal));