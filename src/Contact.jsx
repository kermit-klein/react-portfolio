import React from "react"
import { UndrawChat } from "react-undraw-illustrations"

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

  class Contact extends React.Component {
    // constructor(props) {
    //   super(props);
    //   this.state = { name: "", email: "", message: "" };
    // }

    state = { name: "", email: "", message: "" }

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

                    <form className="ui form" onSubmit={this.handleSubmit}>
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
                    <button className="ui button" type="submit">Submit</button>
                    </form>
           </div>


        //  <form onSubmit={this.handleSubmit}>
        //   <p>
        //     <label>
        //       Your Name: <input type="text" name="name" value={name} onChange={this.handleChange} />
        //     </label>
        //   </p>
        //   <p>
        //     <label>
        //       Your Email: <input type="email" name="email" value={email} onChange={this.handleChange} />
        //     </label>
        //   </p>
        //   <p>
        //     <label>
        //       Message: <textarea name="message" value={message} onChange={this.handleChange} />
        //     </label>
        //   </p>
        //   <p>
        //     <button type="submit">Send</button>
        //   </p>
        // </form>
        
      );
    }
  }

export default Contact