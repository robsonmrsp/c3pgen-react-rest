/* MaturityRating´s Form generated by JSetup v0.95 :  at 01/12/2019 12:41:14 */  
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Alert, Button, FormGroup, ControlLabel, FormControl, HelpBlock } from "react-bootstrap";

import HttpRequest from "../core/HttpRequest";
import JSInputField from "../core/JSInputField";
import JSCombobox from "../core/JSCombobox";
import Message from "../core/Message";


import { isEmpty, isNotEmpty } from "../core/JSUtils";

const emptyMaturityRating = {
	id: '',
	minimalAge: '',    	
	name: '',    	
	description: '',    	
};

export default class FormMaturityRating extends React.Component {
    constructor() {
        super();
        this.service = new HttpRequest("/rs/crud/maturityRatings");
        
        this.state = {
            maturityRating: emptyMaturityRating,
		
            message: new Message(),
            showMessage: false,

            validationFields: {
                minimalAge: {
                    isValid: () => {
                        return isNotEmpty(this.state.maturityRating.minimalAge);
                    },
                    message: "Campo Obrigatório!",
                },
            }
        }
    }
    componentDidMount = () => {
    
    }
    getValidationState = (fieldName) => {
        if (this.state.validationFields[fieldName]) {
            if (!(this.state.validationFields[fieldName].isValid())) {
                return "error";
            }
        }
        return null;
    }
    
	getValidationMessage = (fieldName) => {
        const fieldValidator = this.state.validationFields[fieldName];
        if (fieldValidator) {
            return fieldValidator.message;
        }
        return false;
    }
    
    validateField = (fieldName) => {
        const fieldValidator = this.state.validationFields[fieldName];
        if (fieldValidator) {
            return fieldValidator.isValid && fieldValidator.isValid();
        }
        return "";
    }

    submitFormHandle = (clickEvent) => {
        console.log("Salvando o objeto: " + this.state.maturityRating);
        this.service.save(
            this.state.maturityRating,
            data => {
                this.maturityRating = data;
				this.setState({ message: new Message("success", "Success saving MaturityRating"), showMessage: true })
                this.setState({ maturityRating: emptyMaturityRating });

            },
            error => {
                console.error("error saving maturityRating ", error);
				this.setState({ message: new Message("danger", "Error saving MaturityRating"), showMessage: true })
            }
        );
    }

    changeFormDateHandle = (name, value) => {
    	const maturityRating = { ...this.state.maturityRating };
        maturityRating[name] = value;
        this.setState({ maturityRating });
    }

    render = () => {
        return (
            <div className="panel">
                <div className="panel-heading">
                    <h3 className="panel-title">Cadastro de Maturity rating</h3>
                </div>
                <div className="panel-body">
                    <div className="panel">
                        <div className="panel-body">
                            {this.state.showMessage ?
                                <Alert bsStyle={this.state.message.type} onDismiss={() => { this.setState({ showMessage: false }) }}>
                                    {this.state.message.text}
                                </Alert>
                                
                                : null
                            }                        
                            <form>
                                <FormGroup controlId="minimalAge" validationState={this.getValidationState("minimalAge")} >
                                    <ControlLabel>Minimal age</ControlLabel>
                                    <JSInputField name="minimalAge" plugin="integer" type="text" value={this.state.maturityRating.minimalAge}  onChange={(event) => this.changeFormDateHandle("minimalAge", event.target.value)} className="form-control" />
                                    <FormControl.Feedback />
                                    <HelpBlock className={this.validateField("minimalAge") ? "hide" : "block"} >{this.getValidationMessage("minimalAge")}</HelpBlock>
                                </FormGroup>
                                
                                <FormGroup controlId="name" validationState={this.getValidationState("name")} >
                                    <ControlLabel>Name</ControlLabel>
                                    <JSInputField name="name" type="text" value={this.state.maturityRating.name}  onChange={(event) => this.changeFormDateHandle("name", event.target.value)} className="form-control" />
                                    <FormControl.Feedback />
                                    <HelpBlock className={this.validateField("name") ? "hide" : "block"} >{this.getValidationMessage("name")}</HelpBlock>
                                </FormGroup>
                                
                                <FormGroup controlId="description" validationState={this.getValidationState("description")} >
                                    <ControlLabel>Description</ControlLabel>
                                    <JSInputField name="description" type="text" value={this.state.maturityRating.description}  onChange={(event) => this.changeFormDateHandle("description", event.target.value)} className="form-control" />
                                    <FormControl.Feedback />
                                    <HelpBlock className={this.validateField("description") ? "hide" : "block"} >{this.getValidationMessage("description")}</HelpBlock>
                                </FormGroup>
                                
                            </form>
                        </div>
                    </div >
                    <div >
                        <div className="clearfix form-actions">
                            <button onClick={this.submitFormHandle} className="btn btn-primary btn-lg " >
                                <i className="fa fa-check " />
                                &nbsp; Salvar
                            </button>
                            &nbsp;
                            <button onClick={this.handleClick} className="btn btn-primary btn-lg ">
                                <i className="fa fa-check " />
                                &nbsp; Salvar e continuar
                            </button>
                            &nbsp;
                            
                            <NavLink to="/maturityRatings/list" className="btn-lg btn btn-light">
								<i className=" fa fa-undo " />
                                &nbsp; Voltar para a listagem
                             </NavLink>
                        </div >
                    </div >
                </div >
            </div >
        )
    }
}

