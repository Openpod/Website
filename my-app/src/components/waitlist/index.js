import React, {Component} from 'react'
import { Container, FormWrap, Icon, FormLabel, FormInput, FormContent, FormH1, Form, FormButton, Text, HeroBg, VideoBg } from './WaitlistComponents'
import axios from 'axios';
import Video from '../../videos/run_video.mp4'

export default class WaitlistApp extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           first_name: '',
           last_name: '',
           email: '',
           organization: '',
           heard_about_us: '',
        }
    }

    changeFN_Handler = (e) => {
        this.setState({first_name : e.target.value})
    }

    changeLN_Handler = (e) => {
        this.setState({last_name : e.target.value})
    }

    changeEMAIL_Handler = (e) => {
        this.setState({email : e.target.value})
    }

    changeORG_Handler = (e) => {
        this.setState({organization : e.target.value})
    }

    changeHAU_Handler = (e) => {
        this.setState({heard_about_us : e.target.value})
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

    call_Function = (e) => {
        if (this.email_check(this.state.email) && this.organization_check(this.state.organization) && this.name_check(this.state.first_name, this.state.last_name)) {
            e.preventDefault();
            axios.post('https://sheet.best/api/sheets/093091c2-100f-410d-bc61-ecceae526f65', this.state)
            .then(response => {
                console.log(response);
                window.location.href = "/waitlist_success"
            })
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
                                    <Text>Join our waitlist</Text>
                                    <FormLabel htmlFor = "for">First Name</FormLabel>
                                    <FormInput type= "text" onChange={this.changeFN_Handler} placeholder = "First Name" required />
                                    <FormLabel htmlFor = "for">Last Name</FormLabel> 
                                    <FormInput type = 'text' onChange={this.changeLN_Handler} placeholder = "Last Name" required/>
                                    <FormLabel htmlFor = "for">Email</FormLabel>
                                    <FormInput type = 'email' onChange={this.changeEMAIL_Handler} placeholder = "Email" required/>
                                    <FormLabel htmlFor = "for">Organization</FormLabel>
                                    <FormInput type = 'text' onChange={this.changeORG_Handler} placeholder = "Organization" required/>
                                    <FormLabel htmlFor = "for">How did you hear about us?</FormLabel>
                                    <FormInput type = 'text' onChange={this.changeHAU_Handler} placeholder = "Response" required />
                                    <FormButton type = "submit" onClick={this.call_Function}>Submit</FormButton>
                                </Form>
                            </FormContent>
                        </FormWrap>
                </Container>
            </>
          )
    }
}