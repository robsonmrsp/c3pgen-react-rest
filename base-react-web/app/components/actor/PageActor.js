/* Actor´s Search Page generated by JSetup v0.95 :  at 01/12/2019 12:41:14  */
import React from "react"
import { NavLink } from "react-router-dom";
import { FormGroup, ControlLabel, FormControl, HelpBlock } from "react-bootstrap";
import JSPagination from "../core/JSTablePagination"
import DatatableConfig from "../core/DatatableConfig"

import HttpRequest from "../core/HttpRequest";
import JSInputField from "../core/JSInputField";

export default class PageActor extends React.Component {
    constructor(props) {
        super(props)
        this.service = new HttpRequest("/rs/crud/actors");
        this.state = {
            datatableConfig: new DatatableConfig(),
            showFilter: false,
        }
    }
    componentDidMount = () => {
        this.paginate();
    }
    create = () => {
        // this.$router.push({ path: "/actors/new/" });
    }

    editActor = (_actor) => {
        // this.$router.push({ path: "/actors/edit/" + _actor.id });
        console.log("editando actor ", _actor);
    }

    reset = () => {
    }

    // será que é necessário usar o state??
    changePageSize = (event) => {
        const target = event.target;
        const theDatatableConfig = Object.assign(new DatatableConfig(), this.state.datatableConfig)
        theDatatableConfig.pageSize = parseInt(target.value, 10);
        theDatatableConfig.page = 1;

        // o estado do 
        this.setState({ datatableConfig: theDatatableConfig }, this.paginate);
    }

    removeActor = (_actor) => {
        console.log("removendo actor ", _actor);
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
                console.error("error fetching actor´s page", error);
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
    showAdvancedSearchHandler = () => {
        console.log("Chamou o advanceSeach");
    }
    render = () => {
        return (
            <div >
                <div className="panel">
                    <div className="panel-heading">
                        <h3 className="panel-title">
                            <i className="fa fa-search" />
                            &nbsp;Pesquisa de Actor.
                        </h3>
                    </div>
                    <div className="panel-body">
                        <div id="messages_div" />
                        <form id="formActorFilter">
                            <div className="row">
                                <div className="page-toolbar">
                                    <div className="col-sm-6">
	                                    <NavLink className="btn btn-info" to="/actors/new">Novo Registro </NavLink>
                                        <button className="btn btn-default ">Limpar</button>
                                        <button type="button" className="btn btn-default" onClick={() => this.setState({ showFilter: !this.state.showFilter })}  > Pesquisa avançada... </button>
                                    </div>
                                    <div className="col-sm-6">
                						<div className="input-group">
                                            <input type="text" value={this.state.datatableConfig.filterParameters.biography} className="form-control" placeholder="Pesquisar Filme por por Biography" />
                                            <span id="query" className="input-group-btn ">
                                                <button type="button" onClick={(event) => this.paginate()} className="btn btn-default" >
                                                    Pesquisar
                                                </button>
                                            </span>
										</div>						
									</div>						
                                </div>
                            </div>

                            <div className="panel" style={{ display: this.state.showFilter ? "block" : "none" }} >
                                <div className="panel-heading">
                                    <h5 className="panel-title">Filtros avançados</h5>
                                </div>
                                <div className="panel-body">
	                                <FormGroup controlId="controlIdBiography"  > 
	                                    <ControlLabel>Biography</ControlLabel>
	                                    <JSInputField name="biography" type="text" value={this.state.datatableConfig.filterParameters.biography}  onChange={this.changeFormHandle} className="form-control" />
	                                </FormGroup>
	                                <FormGroup controlId="controlIdBirthDate"  > 
	                                    <ControlLabel>Birth date</ControlLabel>
	                                    <JSInputField name="birthDate" plugin="date" type="text" value={this.state.datatableConfig.filterParameters.birthDate}  onChange={this.changeFormHandle} className="form-control" />
	                                </FormGroup>
	                                <FormGroup controlId="controlIdName"  > 
	                                    <ControlLabel>Name</ControlLabel>
	                                    <JSInputField name="name" type="text" value={this.state.datatableConfig.filterParameters.name}  onChange={this.changeFormHandle} className="form-control" />
	                                </FormGroup>
	                                <FormGroup controlId="controlIdPicture"  > 
	                                    <ControlLabel>Picture</ControlLabel>
	                                    <JSInputField name="picture" type="text" value={this.state.datatableConfig.filterParameters.picture}  onChange={this.changeFormHandle} className="form-control" />
	                                </FormGroup>
                                    <div>
                                        <button type="button" onClick={(event) => this.paginate()} className="btn btn-info btn-sm search-button loading-button" >
                                            <i className="fa fa-search" />
                                            &nbsp;Pesquisar
                                            </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className="cente">
                            <div className="table-responsive ">
                                <div className="">
                                    <i className="fa fa-align-justify" />
                                    &nbsp;Resultado da pesquisa
                                </div>
                                <table className="table table-striped table-bordered table-hover dataTable no-footer">
                                    <thead>
                                        <tr>
                                            <th className="th-biography">
                                                <a >
                                                    <i className="fa " />
                                                    biography
                                                </a>
                                            </th>
                                            <th className="th-birthDate">
                                                <a >
                                                    <i className="fa " />
                                                    birth date
                                                </a>
                                            </th>
                                            <th className="th-name">
                                                <a >
                                                    <i className="fa " />
                                                    name
                                                </a>
                                            </th>
                                            <th className="th-picture">
                                                <a >
                                                    <i className="fa " />
                                                    picture
                                                </a>
                                            </th>
                                            <th className="td-actions"> Ações </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.datatableConfig.items.map((actor, index) => {
                                                return (
                                                    <tr key={actor.id}>
                                                        <td>{actor.biography}</td>
                                                        <td>{actor.birthDate}</td>
                                                        <td>{actor.name}</td>
                                                        <td>{actor.picture}</td>
                                                        <td className="td-actions action-butons-cell">
                                                            <button className="btn btn-xs  btn-primary " onClick={(event) => this.editActor(actor)} data-toggle="tooltip" data-placement="top" title="" data-original-title="Editar Filme">
                                                                <i className="fa fa-pencil fa-lg" />
                                                            </button>

                                                            <button className="btn btn-xs btn-danger " onClick={(event) => this.removeActor(actor)} data-toggle="tooltip" data-placement="top" title="" data-original-title="Remover Actor">
                                                                <i className="fa fa-trash fa-lg" />
                                                            </button>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                            <div className="row page-footer-components">
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
            </div >
        );
    }
}

