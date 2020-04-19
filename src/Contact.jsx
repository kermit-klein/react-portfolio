import React from "react"
import { UndrawChat } from "react-undraw-illustrations"

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

  class Contact extends React.Component {
    constructor(props) {
      super(props);
      this.state = { name: "", email: "", message: "" };
    }

    // state = { name: "", email: "", message: "" }

    /* Here’s the juicy bit for posting the form submission */

    handleSubmit = e => {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...this.state })
      })
        .then(() => alert("Success!"))
        .catch(error => alert(error));

      e.preventDefault();
    };

    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
      const { name, email, message } = this.state;
      return (
          <div className="ui container contact-container">

                    <form className="ui form" onSubmit={this.handleSubmit} data-netlify="true" name="contact" method="POST" action="POST">
                    <div className="field">
                        <label>Your Name</label>
                        <input type="text" name="name" value={name} onChange={this.handleChange} placeholder="Joe Doe"/>
                    </div>
                    <div className="field">
                        <label>Your E-mail</label>
                        <input type="email" name="email" value={email} onChange={this.handleChange} placeholder="joe@doe.com"/>
                    </div>
                    <div className="field">
                        <label>Message</label>
                        <textarea name="message" value={message} onChange={this.handleChange}/>
                    </div>
                    <div className="field">
                        <div data-netlify-recaptcha="true">
                        </div> 
                    </div>
                    <button className="ui button" type="submit">Submit</button>
                    </form>
                    <UndrawChat primaryColor='#855B06' height='200px' />
           </div>
           
                  
      );
    }
  }

export default Contact