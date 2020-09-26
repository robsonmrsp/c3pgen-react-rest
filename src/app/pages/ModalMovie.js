// import React, { useState } from 'react';
// import { gql } from 'apollo-boost';
// import {
//   Col, Row, Modal, FormControl, InputGroup, Button,
// } from 'react-bootstrap';

// import { usePagination } from '@/app/services/hooks/usePagination';
// import { Page } from '@/common/ui/container/page';
// import { DataTable } from '@/common/ui/core/datatable';

// const PAGE_MOVIES = gql`
// query getPageMovies($params : PageParameters, $filter: FilterMovie) {
//   pager: getPageMovies(params: $params, filter: $filter) {
//     items {
//       id
//       name
//       originalTitle
//       releaseDate
//     }
//     pageSize
//     currentPage
//     totalRecords
//   }
// }
// `;

// const columns = [
//   {
//     head: 'Name',
//     field: 'name',
//     sortable: true,
//     cellRender: () => { },
//     formatter: () => { },
//   },
// ];

// const ModalMovie = ({ value, name, onChange: onSelect }) => {
//   const { tableConfig, paginate } = usePagination(PAGE_MOVIES);
//   const [showModal, setShowModal] = useState(false);
//   const [fieldValue, setFieldValue] = useState(value.name || '');

//   const newSetFieldValue = (item) => {
//     onSelect(name, item);
//     setShowModal(false);
//     setFieldValue(item.name);
//   };
//   return (
//     <>
//       <InputGroup>
//         <FormControl placeholder="Movie Name" value={fieldValue} onChange={() => { }} />
//         <InputGroup.Append>
//           <Button onClick={() => setShowModal(!showModal)}>search</Button>
//         </InputGroup.Append>
//       </InputGroup>

//       <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
//         <Modal.Header closeButton>
//           <Modal.Title>Pesquisa de Movie</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Page>
//             <Row>
//               <Page.SectionWrapper>
//                 <Row>
//                   <Col sm>
//                     <DataTable responsive className="fixed">
//                       <DataTable.Head
//                         noActions
//                         columns={columns}
//                         onSort={(field, order) => paginate({ params: { direction: order, sortBy: field } })}
//                       />
//                       <DataTable.Body
//                         noActions
//                         columns={columns}
//                         data={tableConfig.items}
//                         onSelect={newSetFieldValue}
//                       />
//                     </DataTable>
//                   </Col>
//                 </Row>
//                 <Row>
//                   <Col sm="12" md="5">
//                     <DataTable.Counter
//                       onChange={(pageSize) => paginate({ params: { size: pageSize } })}
//                       first={tableConfig.first}
//                       last={tableConfig.last}
//                       pageSize={tableConfig.pageSize}
//                       totalRecords={tableConfig.totalRecords}
//                     />
//                   </Col>
//                   <Col sm="12" md="7">
//                     <DataTable.Pagination
//                       onPaginate={(pageNumber) => paginate({ params: { page: pageNumber } })}
//                       page={tableConfig.currentPage}
//                       pageSize={tableConfig.pageSize}
//                       totalItems={tableConfig.totalRecords}
//                     />
//                   </Col>
//                 </Row>
//               </Page.SectionWrapper>
//             </Row>
//           </Page>
//         </Modal.Body>
//       </Modal>
//     </>
//   );
// };

// export default ModalMovie;
export default {};
