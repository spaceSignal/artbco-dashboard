


  _handlerUpdate(e) {
    e.preventDefault();
    if (this.state.principalbtnName === 'Edit') {
      this.setState({
        principalbtnName: UPDATE,
        readonly: false,
        passwordArea: true,
        cancelButton: true,
        uploadButton: true
      });
    } else {
      let firstName = this.refs.firstName.refs.input.getDOMNode().value;
      let lastName = this.refs.lastName.refs.input.getDOMNode().value;
      let email = this.refs.email.refs.input.getDOMNode().value;
      let phone = this.refs.phone.refs.input.getDOMNode().value;
      let password = this.refs.password.refs.input.getDOMNode().value;
      let passwordRepeat = this.refs.passwordRepeat.refs.input.getDOMNode().value;

      if (firstName === '') {
        this.setState({
          firstName: 'has-error'
        });
      } else if (lastName === '') {
        this.setState({
          firstName: '',
          lastName: 'has-error'
        });
      } else if (email === '') {
        this.setState({
          lastName: '',
          email: 'has-error'
        });
      } else if (phone === '') {
        this.setState({
          email: '',
          phone: 'has-error'
        });
      } else if (password !== passwordRepeat) {
        this.setState({
          phone: '',
          password: 'has-error',
          passwordRepeat: 'has-error'
        });
      } else {
        this.setState({
          password: '',
          passwordRepeat: ''
       });
       ProfileAPIUtils.updateUser(firstName, lastName, email, phone);
       ProfileAPIUtils.getUser();
        this._changeProfileState();
      }
    }
  }

  render() {
    return (
      <div>
      <div id="Profile-Main-Overview" className="overview">
        <div id="Profile-Main-Avatar" className="p-avatar">
          <div id="Profile-Main-Avatar-Img" className="p-avatar-img">
            <img src={this.state.url} />
          </div>
          <div d="Profile-Main-Avatar-Upload" className="p-avatar-upload">
            {this.uploadButton()}
          </div>
        </div>
      </div>
      <div id="Profile-Main-Body" className="body mdl-grid">
        <form id="Profile-Main-Form">
        <ProfileInput readOnly={this.state.readonly} className={this.state.firstName} ref="firstName" elmid="firstName" label={FIRSTNAME} placeholder={ENTER_YOUR_FIRSTNAME} type="text" />
        <ProfileInput readOnly={this.state.readonly} className={this.state.lastName} ref="lastName" elmid="lastName" label={LASTNAME} placeholder={ENTER_YOUR_LASTNAME} type="text" />
        <ProfileInput readOnly={this.state.readonly} className={this.state.email} ref="email" elmid="email" label={EMAIL} placeholder={ENTER_YOUR_EMAIL} type="email" />
        <ProfileInput readOnly={this.state.readonly} className={this.state.phone} ref="phone" elmid="phone" label={PHONE} placeholder={ENTER_YOUR_PHONE} type="phone" />
        {this.passwordArea()}
        <hr />
        <div id="Profile-Main-Form-Buttons" className="button-group">
        <ProfileButton name={this.state.principalbtnName} className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" onClick={this._handlerUpdate.bind(this)} />
        {this.cancelButton()}
        </div>
        </form>
      </div>
      </div>
    );
  }
}

export default ProfileBody;
