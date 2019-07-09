import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

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
                  <form>
                      <h1>Username</h1>
                      <input onChange={this.handleChanges} name="username" placeholder="Enter Username" value={this.state.creds.username} />
                      <h1>Password</h1>
                      <input onChange={this.handleChanges} name="password" placeholder="Enter Password" value={this.state.creds.password} />
                  </form>
                </div>
              ) : (
                <div>
                  <form>
                    <h1>First Name</h1>
                    <input onChange={this.handleSignChanges} name="fname" placeholder="Enter First Name" value={this.state.sign.fname} />
                    <h1>Last Name</h1>
                    <input onChange={this.handleSignChanges} name="lname" placeholder="Enter Last Name" value={this.state.sign.lname} />
                    <h1>Username</h1>
                    <input onChange={this.handleSignChanges} name="username" placeholder="Enter Username" value={this.state.sign.username} />
                    <h1>Password</h1>
                    <input onChange={this.handleSignChanges} name="password" placeholder="Enter Password" value={this.state.sign.password} />
                  </form>
                </div>
              )}
            </form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>{this.props.type}</Button>{' '}
            <Button color="danger" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default LogModal;