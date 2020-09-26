/* Customer´s Search Page generated by JSetup v0.95 :  at 01/12/2019 12:41:14  */
import React from "react"

import { FormGroup, ControlLabel, FormControl, HelpBlock, Modal } from "react-bootstrap";
import JSPagination from "../core/JSTablePagination"
import DatatableConfig from "../core/DatatableConfig"
import HttpRequest from "../core/HttpRequest"
import JSInputField from "../core/JSInputField"

export default class ModalCustomer extends React.Component {
    static defaultProps = {
        value: {
            telephone: "",
            discount: "",
            dueDate: "",
            cpf: "",
            name: "",
            monthlyFee: "",
            observation: "",
            active: "",
            picture: "",
            celphone: "",
            rg: "",
            subscriptionDatetime: "",
            birthDate: "",
        },
        displayValue: "name",
        idValue: "id"
    }
    constructor(props) {
        super(props)
        this.service = new HttpRequest("/rs/crud/customers");
        this.state = {
            datatableConfig: new DatatableConfig(5),
            showModal: false
        }
    }
    componentDidMount = () => {
        this.paginate();
    }

    onSelect = (customer) => {
        console.log(customer)
        this.props.onChange(customer);
        this.closeModal();
    }

    closeModal = () => {
        this.setState({ showModal: false });
    }

    openModal = () => {
        this.setState({ showModal: true });
    }

    reset = () => {
    }

    // será que é necessário usar o state??
    changePageSize = (event) => {
        const target = event.target;
        const theDatatableConfig = Object.assign(new DatatableConfig(), this.state.datatableConfig)
        theDatatableConfig.pageSize = parseInt(target.value, 10);
        theDatatableConfig.page = 1;

        this.setState({ datatableConfig: theDatatableConfig }, this.paginate);
    }


    paginate = (pageIndex = 1) => {
        const stateConf = this.state.datatableConfig;
        const datatableConfig = Object.assign(new DatatableConfig(), this.state.datatableConfig)
        datatableConfig.page = pageIndex;
        datatableConfig.loading = true;

        this.setState({ datatableConfig });

        this.service.getPage(
            datatableConfig,
            data => {
                datatableConfig.loading = false;
                datatableConfig.totalRecords = data.totalRecords;
                this.setState({ datatableConfig });
            },

            error => {
                console.error("error fetching customer´s page", error);
            }
        );
    }

    changeSearchFormHandle = (event) => {
        /* Jogar essa atualização do state para fora, COMO?? */
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        const datatableConfig = { ...this.state.datatableConfig };
        datatableConfig.filterParameters[name] = value;

        this.setState({ datatableConfig });
    }

    render = () => {
        return (
            <div >
                <div className="input-group mar-btm">
                    <input type="text" className="form-control" value={this.props.value && this.props.value[this.props.displayValue]} placeholder="Nome" />
                    <span className="input-group-addon" onClick={this.openModal}>
                        <i className="fa fa-search" />
                    </span>
                </div>

                <Modal show={this.state.showModal} onHide={this.closeModal} bsSize="large" >
                    <Modal.Header closeButton>
                        <Modal.Title>Pesquisa de Customer</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="">
                            <FormGroup controlId="controlIdTelephone"  >
                                <ControlLabel>Telephone</ControlLabel>
                                <JSInputField name="telephone" type="text" value={this.state.datatableConfig.filterParameters.telephone}  onChange={this.changeFormHandle} className="form-control" />
                            </FormGroup>
                            <FormGroup controlId="controlIdDiscount"  >
                                <ControlLabel>Discount</ControlLabel>
                                <JSInputField name="discount" plugin="decimal" type="text" value={this.state.datatableConfig.filterParameters.discount}  onChange={this.changeFormHandle} className="form-control" />
                            </FormGroup>
                            <FormGroup controlId="controlIdDueDate"  >
                                <ControlLabel>Due date</ControlLabel>
                                <JSInputField name="dueDate" plugin="date" type="text" value={this.state.datatableConfig.filterParameters.dueDate}  onChange={this.changeFormHandle} className="form-control" />
                            </FormGroup>
                            <FormGroup controlId="controlIdCpf"  >
                                <ControlLabel>Cpf</ControlLabel>
                                <JSInputField name="cpf" type="text" value={this.state.datatableConfig.filterParameters.cpf}  onChange={this.changeFormHandle} className="form-control" />
                            </FormGroup>
                            <FormGroup controlId="controlIdName"  >
                                <ControlLabel>Name</ControlLabel>
                                <JSInputField name="name" type="text" value={this.state.datatableConfig.filterParameters.name}  onChange={this.changeFormHandle} className="form-control" />
                            </FormGroup>
                            <FormGroup controlId="controlIdMonthlyFee"  >
                                <ControlLabel>Monthly fee</ControlLabel>
                                <JSInputField name="monthlyFee" plugin="decimal" type="text" value={this.state.datatableConfig.filterParameters.monthlyFee}  onChange={this.changeFormHandle} className="form-control" />
                            </FormGroup>
                            <FormGroup controlId="controlIdObservation"  >
                                <ControlLabel>Observation</ControlLabel>
                                <JSInputField name="observation" type="text" value={this.state.datatableConfig.filterParameters.observation}  onChange={this.changeFormHandle} className="form-control" />
                            </FormGroup>
                            <FormGroup controlId="controlIdActive"  >
                                <ControlLabel>Active</ControlLabel>
                                <JSInputField name="active" type="text" value={this.state.datatableConfig.filterParameters.active}  onChange={this.changeFormHandle} className="form-control" />
                            </FormGroup>
                            <FormGroup controlId="controlIdPicture"  >
                                <ControlLabel>Picture</ControlLabel>
                                <JSInputField name="picture" type="text" value={this.state.datatableConfig.filterParameters.picture}  onChange={this.changeFormHandle} className="form-control" />
                            </FormGroup>
                            <FormGroup controlId="controlIdCelphone"  >
                                <ControlLabel>Celphone</ControlLabel>
                                <JSInputField name="celphone" type="text" value={this.state.datatableConfig.filterParameters.celphone}  onChange={this.changeFormHandle} className="form-control" />
                            </FormGroup>
                            <FormGroup controlId="controlIdRg"  >
                                <ControlLabel>Rg</ControlLabel>
                                <JSInputField name="rg" type="text" value={this.state.datatableConfig.filterParameters.rg}  onChange={this.changeFormHandle} className="form-control" />
                            </FormGroup>
                            <FormGroup controlId="controlIdSubscriptionDatetime"  >
                                <ControlLabel>Subscription datetime</ControlLabel>
                                <JSInputField name="subscriptionDatetime" plugin="datetime" type="text" value={this.state.datatableConfig.filterParameters.subscriptionDatetime}  onChange={this.changeFormHandle} className="form-control" />
                            </FormGroup>
                            <FormGroup controlId="controlIdBirthDate"  >
                                <ControlLabel>Birth date</ControlLabel>
                                <JSInputField name="birthDate" plugin="date" type="text" value={this.state.datatableConfig.filterParameters.birthDate}  onChange={this.changeFormHandle} className="form-control" />
                            </FormGroup>
                            <div className="form-actions ">
                                <button type="button" onClick={(event) => this.paginate()} className=" btn btn-primary btn-large" >
                                    <i className="fa fa-search" />
                                    &nbsp;Pesquisar
						        </button>
                                <button type="button" id="btnClear" className="btnClearSupplier btn btn-info btn-large">
                                    <i className="fa fa-trash" />
                                    &nbsp;Nova Pesquisa
						        </button>
                            </div>

                            <div className="">
                                <div className="cente">
                                    <h3 className="header smaller lighter blue">Resultados</h3>
                                    <div className="table-responsive ">
                                        <table className="demo-add-niftycheck table table-hover">
                                            <thead>
                                                <tr>
		                                            <th className="th-telephone">
		                                                <a >
		                                                    <i className="fa " />
		                                                    telephone
		                                                </a>
		                                            </th>
		                                            <th className="th-discount">
		                                                <a >
		                                                    <i className="fa " />
		                                                    discount
		                                                </a>
		                                            </th>
		                                            <th className="th-dueDate">
		                                                <a >
		                                                    <i className="fa " />
		                                                    due date
		                                                </a>
		                                            </th>
		                                            <th className="th-cpf">
		                                                <a >
		                                                    <i className="fa " />
		                                                    cpf
		                                                </a>
		                                            </th>
		                                            <th className="th-name">
		                                                <a >
		                                                    <i className="fa " />
		                                                    name
		                                                </a>
		                                            </th>
		                                            <th className="th-monthlyFee">
		                                                <a >
		                                                    <i className="fa " />
		                                                    monthly fee
		                                                </a>
		                                            </th>
		                                            <th className="th-observation">
		                                                <a >
		                                                    <i className="fa " />
		                                                    observation
		                                                </a>
		                                            </th>
		                                            <th className="th-active">
		                                                <a >
		                                                    <i className="fa " />
		                                                    active
		                                                </a>
		                                            </th>
		                                            <th className="th-picture">
		                                                <a >
		                                                    <i className="fa " />
		                                                    picture
		                                                </a>
		                                            </th>
		                                            <th className="th-celphone">
		                                                <a >
		                                                    <i className="fa " />
		                                                    celphone
		                                                </a>
		                                            </th>
		                                            <th className="th-rg">
		                                                <a >
		                                                    <i className="fa " />
		                                                    rg
		                                                </a>
		                                            </th>
		                                            <th className="th-subscriptionDatetime">
		                                                <a >
		                                                    <i className="fa " />
		                                                    subscription datetime
		                                                </a>
		                                            </th>
		                                            <th className="th-birthDate">
		                                                <a >
		                                                    <i className="fa " />
		                                                    birth date
		                                                </a>
		                                            </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    this.state.datatableConfig.items.map((customer, index) => {
                                                        return (
                                                    <tr key={customer.id}>
                                                        <td>{customer.telephone}</td>
                                                        <td>{customer.discount}</td>
                                                        <td>{customer.dueDate}</td>
                                                        <td>{customer.cpf}</td>
                                                        <td>{customer.name}</td>
                                                        <td>{customer.monthlyFee}</td>
                                                        <td>{customer.observation}</td>
                                                        <td>{customer.active}</td>
                                                        <td>{customer.picture}</td>
                                                        <td>{customer.celphone}</td>
                                                        <td>{customer.rg}</td>
                                                        <td>{customer.subscriptionDatetime}</td>
                                                        <td>{customer.birthDate}</td>
                                                    </tr>)
                                                    })
                                                }
                                                {this.state.datatableConfig.items.length === 0 ?
                                                    <tr className="empty"><td colSpan="2">Sem registros</td></tr> : null
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="row page-footer-components fixed-table-pagination">
                                        <div className="col-md-6" >
                                            <div className=" float-left ">
                                                {this.state.datatableConfig.loading ?
                                                    <span className="loading-elements">
                                                        <span className="">
                                                            <i className="fa fa-spinner fa-spin fa-fw" />
                                                            Carregando...
								                        </span>
                                                    </span>
                                                    :
                                                    <span className="has-elements" >
                                                        Registros
								                        <span className="initial-page">&nbsp;{this.state.datatableConfig.first}&nbsp;</span>
                                                        a
								                        <span className="final-page">&nbsp;{this.state.datatableConfig.last}&nbsp;</span>
                                                        de
								                        <span className="total-records">&nbsp;{this.state.datatableConfig.totalRecords}</span>
                                                        . Exibindo até
								                        <select className="combo-page-size" onChange={this.changePageSize} value={this.state.datatableConfig.pageSize}>
                                                            <option value="3">3</option>
                                                            <option value="5">5</option>
                                                            <option value="10" >10</option>
                                                            <option value="25">25</option>
                                                            <option value="50">50</option>
                                                        </select>
                                                        por página.
							                        </span>
                                                }
                                            </div>
                                        </div>
                                        <div className="col-md-6" >
                                            <div className="pull-right" >
                                                <JSPagination onPaginate={this.paginate} totalItems={this.state.datatableConfig.totalRecords} page={this.state.datatableConfig.page} pageSize={this.state.datatableConfig.pageSize} />
                                            </div>
                                        </div >
                                    </div >
                                </div >
                            </div >
                        </div >
                    </Modal.Body>
                </Modal>
            </div >
        );
    }
}