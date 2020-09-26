import React, { useEffect } from 'react';

import { Col, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useQuery } from 'react-query';

import DatatableConfig from '@/common/ui/core/datatable/model/DatatableConfig';
import { Breadcrumb } from '@/common/ui/container/breadcrumb/Breadcrumb';
import { Page } from '@/common/ui/container/page';
import { DataTable } from '@/common/ui/core/datatable';
import HttpRequest from '@/app/services/HttpRequest';

const api = new HttpRequest('rs/crud/movies');

const PageMovie = () => {
  // criar um hook proprio para encapsular TODOs esses que manipulam informacao de consulta e paginacao.
  const history = useHistory();
  const [parameters, setParameters] = React.useState({ page: 1 });
  const [tableConfig, setTableConfig] = React.useState({});

  const { data } = useQuery([parameters], api.getPage);

  const onClickEdit = (item) => history.push(`editMovie/${item.id}`);
  const onClickRemove = (item) => { console.log(item); };

  useEffect(() => {
    console.log();
    // Fazer o Pager que é devolvido pelo backend devolver tambem as informacoes para reconstruir o pagination no cliente
    // devolver o pageZise, order, direction, etc...

    setTableConfig(new DatatableConfig({ ...data }));
  }, [data]);

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
          onClickRemove={() => onClickRemove(item)}
          onClickEdit={() => onClickEdit(item)}
        />
      ),
    },
  ];

  const paginate = (params) => {
    // tem que aproveitar o valor do anterior para poder combinar ordenacao, pagina e demais paramentros
    const newParans = { ...parameters, ...params };
    setParameters(newParans);
  };

  return (
    <>
      <Breadcrumb />
      <Page>
        <Page.Title text="Page Movies" />
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
                    page={tableConfig.currentPage}
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
