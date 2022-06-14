import React, {Component} from 'react'
import { Container, FormWrap, Icon, FormLabel, FormInput, FormContent, Form, FormButton, Text, HeroBg, VideoBg, FormTextArea, Dropdown, Dropdown_Option} from './ContactElements'
import axios from 'axios';
import Video from '../../videos/run_video.mp4'
import emailjs from 'emailjs-com'

export default class ContactApp extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           full_name: '',
           email: '',
           organization: '',
           message: '',
           type_of_contact: '', 
        }
    }

    changeFN_Handler = (e) => {
        this.setState({full_name : e.target.value})
    }

    changeEMAIL_Handler = (e) => {
        this.setState({email : e.target.value})
    }

    changeORG_Handler = (e) => {
        this.setState({organization : e.target.value})
    }

    changeEMAILTXT_Handler = (e) => {
        this.setState({message : document.getElementById("24").value})
    }

    changeTYPE_Handler = (e) => {
        this.setState({type_of_contact: e.target.value})
    }

    name_check(first_name, last_name) {
        if (first_name !== '' && last_name !== '') {
            return true;
        } else {
            return false;
        }
    }

    email_check(email) {     
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email); 
    }

    organization_check() {
        return (this.state.organization !== '');
    }

    type_check() {
        return (this.state.type_of_contact !== '' && this.state.type_of_contact !== 'Choose Option'); 
    }

    call_Function = (e) => {
        if (this.email_check(this.state.email) && this.organization_check(this.state.organization) && this.name_check(this.state.first_name, this.state.last_name) && this.type_check(this.state.type_of_contact)) {
            e.preventDefault();
            emailjs.init("QMJsH8vPFK9UuJuHc")
            console.log(this.state)
            var contactParameters = {
                type_of_request: this.state.type_of_contact,
                from_name: this.state.full_name,
                organization: this.state.organization,
                to_name: "Openpod", 
                message: this.state.message,
                email: this.state.email
            }
            emailjs.send("service_0niqi3d","template_uzmw8p6", contactParameters).then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                window.location.href = "/contact_us_success";
            });
        }
    }
    
    render() {
        return (
            <> 
                <Container>
                        <HeroBg>
                            <VideoBg autoPlay muted loop playsInline src = {Video} type = 'video/mp4'/>
                        </HeroBg>
                        <FormWrap>
                            <FormContent>
                                <Form id = "waitlist_form">
                                    <Icon to = "/">Openpod</Icon>
                                    <Text>Questions? Reach out to us!</Text>
                                    <Dropdown id = "choice" onChange={this.changeTYPE_Handler} required>
                                        <Dropdown_Option hidden value = "">Chose Option</Dropdown_Option >
                                        <Dropdown_Option>Support</Dropdown_Option>
                                        <Dropdown_Option>Inquiry</Dropdown_Option>
                                    </Dropdown>
                                    <FormLabel htmlFor = "for">Full Name (*)</FormLabel>
                                    <FormInput type= "text" onChange={this.changeFN_Handler} placeholder = "Full Name" required />
                                    <FormLabel htmlFor = "for">Email (*)</FormLabel>
                                    <FormInput type = 'email' onChange={this.changeEMAIL_Handler} placeholder = "Email" required/>
                                    <FormLabel htmlFor = "for">Organization (*)</FormLabel>
                                    <FormInput type = 'text' onChange={this.changeORG_Handler} placeholder = "Organization" required/>
                                    <FormLabel htmlFor = "for">Message (*)</FormLabel>
                                    <FormTextArea type = 'text' id = "24" onChange={this.changeEMAILTXT_Handler} placeholder = "Message" required />
                                    <FormButton type = "submit" onClick={this.call_Function}>Submit</FormButton>
                                </Form>
                            </FormContent>
                        </FormWrap>
                </Container>
            </>
          )
    }
}