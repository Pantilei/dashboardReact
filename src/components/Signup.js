import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { formSignUp as onSignUpSubmit } from "../actions";
import HomeButton from "./HomeButton";

class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.fileInput = React.createRef();
  }
  componentDidMount() {
    /* console.log(this.props); */
  }

  renderInput = formProps => {
    //console.log(formProps);
    if (formProps.accept) {
      return (
        <div className="fileContainer">
          <label className="fileUpload" htmlFor="fileUpload">
            <h3>Add Picture</h3>
          </label>
          <input
            id="fileUpload"
            type={formProps.type}
            accept={formProps.accept}
            placeholder={formProps.placeholder}
            {...formProps.input}
          />
        </div>
      );
    } else {
      return (
        <div>
          <label>{formProps.label}</label>
          <input
            type={formProps.type}
            placeholder={formProps.placeholder}
            {...formProps.input}
          />
        </div>
      );
    }
  };

  onSubmit = formValues => {
    const fd = new FormData();
    fd.append("username", formValues.username);
    fd.append("email", formValues.email);
    fd.append("password", formValues.password);
    fd.append("image", this.fileInput.current.files[0]);
    console.log(fd);
    this.props.onSignUpSubmit(fd);
  };

  render() {
    return (
      <div>
        <HomeButton />
        <h1 className="loginHeading">Hackathon</h1>
        <form
          className="form"
          onSubmit={this.props.handleSubmit(this.onSubmit)}
        >
          <div className="flex">
            <Field
              name="username"
              component={this.renderInput}
              type="text"
              placeholder="Username"
            />
            <Field
              name="email"
              component={this.renderInput}
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="flex">
            <Field
              name="password"
              component={this.renderInput}
              type="password"
              placeholder="Password"
            />
            <Field
              name="confirmPassword"
              component={this.renderInput}
              type="password"
              placeholder="Confirm password"
            />
          </div>
          <label className="fileUpload" htmlFor="fileUpload">
            <h3>Add Picture</h3>
          </label>
          <input
            className="fileContainer"
            name="picture"
            id="fileUpload"
            type="file"
            placeholder="Add picture"
            accept="image/*"
            ref={this.fileInput}
          />
          <button className="registerButton"></button>
        </form>
      </div>
    );
  }
}

const singUpForm = reduxForm({
  form: "signUpForm"
})(Signup);

export default connect(null, { onSignUpSubmit })(singUpForm);
