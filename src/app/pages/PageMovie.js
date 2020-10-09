
import React, { useEffect } from 'react';
import { Form, Col, Row, Button } from 'react-bootstrap';
import { Field, Formik } from 'formik';
import { useQuery } from 'react-query';
import { useHistory } from 'react-router-dom';
import HttpRequest from '@/app/services/HttpRequest';
import { Breadcrumb } from '@/common/ui/container/breadcrumb/Breadcrumb';
import { Page } from '@/common/ui/container/page';
import { DataTable } from '@/common/ui/core/datatable';
import DatatableConfig from '@/common/ui/core/datatable/model/DatatableConfig';
import { DateInput } from '@/common/ui/core/components/DateInput';
import { NumberInput } from '@/common/ui/core/components/NumberInput';

const api = new HttpRequest('rs/crud/movies');
// we need to use the memo to avoid unecessary calls to APIand rerender
const PageMovie = () => {
  // criar um hook proprio para encapsular TODOs esses que manipulam informacao de consulta e paginacao.
  const history = useHistory();
  const [parameters, setParameters] = React.useState({ page: 1 });
  const [searchParameters, setSearchParameters] = React.useState({ page: 1 });
  const [tableConfig, setTableConfig] = React.useState({});

  const { data } = useQuery([parameters], api.getPage);

  const onClickEdit = (item) => history.push(`editMovie/${item.id}`);
  const onClickRemove = (item) => { console.log(item); };

  useEffect(() => {
    setTableConfig(new DatatableConfig({ ...data }));
  }, [data, searchParameters]);

  const columns = [
    {
      head: 'Original Title',
      field: 'title',
      sortable: true,
    },
    {
      head: 'Release Date',
      field: 'releaseDate',
    },
    {
      head: 'Actions',
      cellRender: (item) => (
        <DataTable.SimpleActionsCell
          key={`Actions_${JSON.stringify(item)}`}
          onClickRemove={() => onClickRemove(item)}
          onClickEdit={() => onClickEdit(item)}
          item={item}
        />
      ),
    },
  ];


  const paginate = (params, reset) => {
    // tem que aproveitar o valor do anterior para poder combinar ordenacao, pagina e demais paramentros
    if (reset) {
      setParameters(params);
    } else {
      const newParans = { ...parameters, ...params };
      setParameters(newParans);
    }
  };

  const onSearch = (movieParameter) => {
    paginate({ ...movieParameter }, true);
  };

  return (
    <>
      <Breadcrumb />
      <Page>
        <Page.Title text="Page Movies" />
        <Page.SectionWrapper>
          <Formik
            initialValues={{}}
            onSubmit={(values, actions) => onSearch(values, actions)}
          >
            {({ setFieldValue, handleChange, handleSubmit }) => (
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Form.Group as={Col} md="6">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                      name="title"
                      type="text"
                      placeholder="Title"
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group as={Col} md="6">
                    <Form.Label>Release Date</Form.Label>
                    <Field
                      name="releaseDate"
                      as={DateInput}
                      onChange={(value) => setFieldValue('releaseDate', value)}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="6">
                    <Form.Label>Duration</Form.Label>
                    <Field
                      name="duration"
                      as={NumberInput}
                      onChange={(value) => setFieldValue('duration', value)}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="6">
                    <Form.Label>Cost</Form.Label>
                    <Field
                      decimal
                      name="cost"
                      as={NumberInput}
                      onChange={(value) => setFieldValue('cost', value)}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Button className="btn btn-primary" type="submit">
                  Search
                </Button>
              </Form>
            )}
          </Formik>
        </Page.SectionWrapper>
        <Row>
          <Col xl={12}>
            <Page.SectionWrapper>
              {/* <Page.SectionTitle description="Page Movies" /> */}
              <Row>
                <Col sm>
                  <DataTable responsive className="fixed">
                    <DataTable.Head
                      columns={columns}
                      onSort={(field, order) => paginate({ direction: order, sortBy: field })}
                    />
                    <DataTable.Body
                      columns={columns}
                      data={tableConfig.items}
                    />
                  </DataTable>
                </Col>
              </Row>
              <Row>
                <Col sm="12" md="5">
                  <DataTable.Counter
                    onChange={(pageSize) => paginate({ pageSize })}
                    first={tableConfig.first}
                    last={tableConfig.last}
                    pageSize={tableConfig.pageSize}
                    totalRecords={tableConfig.totalRecords}
                  />
                </Col>
                <Col sm="12" md="7">
                  <DataTable.Pagination
                    onPaginate={(pageNumber) => paginate({ page: pageNumber })}
                    page={tableConfig.actualPage}
                    pageSize={tableConfig.pageSize}
                    totalItems={tableConfig.totalRecords}
                  />
                </Col>
              </Row>
            </Page.SectionWrapper>
          </Col>
        </Row>
      </Page>
    </>
  );
};

export default PageMovie;
