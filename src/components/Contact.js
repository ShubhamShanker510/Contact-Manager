import React, { Component } from "react";
import {useNavigate} from 'react-router-dom'; 


class Contact extends Component {
    state = {
        name: "",
        email: "",
    };

    add = (e) => {
        e.preventDefault();
        if (this.state.name === "" || this.state.email === "") {
            alert("Fill the form");
            return;
        } 
        
        
        this.props.addContact(this.state);
        this.setState({ name: "", email: "" });
        this.props.navigate("/");
        
    }

    render() {
        return (
            <>
                <div className="ui main">
                    <h2 style={{position:'sticky'}}>Add Contact</h2>
                    <form className="ui form " onSubmit={this.add}>
                        <div className="field">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" placeholder="Name" onChange={(e) => this.setState({ name: e.target.value })} value={this.state.name} />
                        </div>
                        <div className="field">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" placeholder="Email" onChange={(e) => this.setState({ email: e.target.value })} value={this.state.email} />
                        </div>
                        <button className="ui button blue">Add</button>
                    </form>
                </div>
            </>
        );
    }
}

export default function ContactWithNavigate(props) {
    const navigate = useNavigate();
    return <Contact {...props} navigate={navigate} />;
  }