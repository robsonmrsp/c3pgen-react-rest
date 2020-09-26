import React, { useState, useEffect } from 'react';
import validate from 'validate.js';
import {
  Row, Col, Form, Button,
} from 'react-bootstrap';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import Select from 'react-select';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { Formik, Field } from 'formik';
import { Breadcrumb } from '@/common/ui/container/breadcrumb/Breadcrumb';
import { DateInput } from '@/common/ui/core/components/DateInput';
import { NumberInput } from '@/common/ui/core/components/NumberInput';
import { Page } from '@/common/ui/container/page';
import ModalMovie from './ModalMovie';

// usar https://react-query.tanstack.com/docs/quick-start useMutation
const SAVE_MOVIE = gql`
  mutation saveMovie($movie: MovieInput!) {
    movie:saveMovie(movie: $movie) {
      id
      name
      originalTitle
    }
  }
`;
const QUERY_MOVIE = gql`
query getMovie($id:Int){
  movie:getMovie(id: $id) {
    id
    name
    originalTitle
    releaseDate
  }
}
`;

const FormMovie = () => {
  const [saveMovie] = useMutation(SAVE_MOVIE);
  const [movie, setMovie] = useState({});
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const callAsync = async () => {
        const { data } = await client.query({ query: QUERY_MOVIE, variables: { id } });
        console.log(data.movie);
        setMovie(data.movie);
      };
      callAsync();
    }
  }, []);

  const rules = {
    name: {
      presence: {
        message: 'chico',
        allowEmpty: false,
      },
    },
    sinopse: {
      presence: {
        message: 'Sinopse canot be empty',
        allowEmpty: false,
      },
    },
    originalTitle: {
      presence: { allowEmpty: false },
    },
  };

  const onClickSaveMovie = async (movieArg, actions) => {
    try {
      const savedMovie = await saveMovie({
        variables: {
          movie: { id: movieArg.id, name: movieArg.name, originalTitle: movieArg.originalTitle },
        },
      });
      setMovie(savedMovie);
      actions.setSubmitting(false);
      toast.success('Success Saving Movie !');
      actions.resetForm();
    } catch (err) {
      toast.error('Error Saving Movie!');
      actions.setSubmitting(false);
    }
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  };
  console.log(movie);
  return (
    <>
      <Breadcrumb />
      <Page>
        <Page.Title text="Form Movies" />
        <Row>
          <Col xl={12}>
            <Page.SectionWrapper>
              <h5 className="hk-sec-title">Form Movie</h5>
              <p className="mb-25">
                More complex forms can be built using the grid classes. Use these for
                form layouts that require multiple columns, varied widths, and
                additional alignment options.
              </p>
              <Row>
                <Col sm>
                  <Formik
                    validateOnBlur
                    validateOnChange
                    enableReinitialize
                    validate={(values) => validate(values, rules)}
                    initialValues={{ ...movie }}
                    onSubmit={(values, actions) => onClickSaveMovie(values, actions)}
                  >
                    {({ values, setFieldValue, handleChange, handleSubmit, errors, touched }) => (
                      <Form onSubmit={handleSubmit}>
                        <Row>
                          <Form.Group as={Col} md="6">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                              name="name"
                              type="text"
                              placeholder="Name"
                              onChange={handleChange}
                              value={values.name}
                              isInvalid={!!touched.name && !!errors.name}
                              isValid={!!touched.name && !errors.name}
                            />
                            <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                          </Form.Group>
                          <Form.Group as={Col} md="6">
                            <Form.Label>Movie</Form.Label>
                            <Field
                              name="movie"
                              as={ModalMovie}
                              value={values.movie || {}}
                              onChange={(value) => setFieldValue('movie', value)}
                            />
                            <Form.Control.Feedback></Form.Control.Feedback>
                          </Form.Group>
                          <Form.Group as={Col} md="6">
                            <Form.Label>Sinopse</Form.Label>
                            <Form.Control
                              name="sinopse"
                              as="textarea"
                              rows="3"
                              value={values.sinopse}
                              onChange={handleChange}
                              isInvalid={!!errors.sinopse}
                            />
                            <Form.Control.Feedback type={errors.sinopse ? 'invalid' : 'valid'}>{errors.sinopse}</Form.Control.Feedback>
                          </Form.Group>

                          <Form.Group as={Col} md="6">
                            <Form.Label>Release Date</Form.Label>
                            <Field
                              name="releaseDate"
                              as={DateInput}
                              value={values.releaseDate}
                              onChange={(value) => setFieldValue('releaseDate', value)}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                          </Form.Group>
                          <Form.Group as={Col} md="6">
                            <Form.Label>Duration</Form.Label>
                            <Field
                              name="duration"
                              value={values.duration}
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
                              value={values.cost}
                              onChange={(value) => setFieldValue('cost', value)}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                          </Form.Group>

                          <Form.Group as={Col} md="6">
                            <Form.Label>Rate</Form.Label>
                            <Field
                              name="rate"
                              value={values.rate}
                              onChange={(value) => setFieldValue('rate', value)}
                              as={Select}
                              isClearable
                              options={[{ label: 'Adult', value: 'ADULT' }, { label: 'Family', value: 'FAMILY' }]}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                          </Form.Group>
                          <Form.Group as={Col} md="6">
                            <Form.Label>Genre</Form.Label>
                            <Field
                              name="genre"
                              value={values.genre}
                              onChange={(value) => setFieldValue('genre', value)}
                              as={Select}
                              isMulti
                              // isClearable
                              options={[{ label: 'Horror', value: 'HORROR' }, { label: 'Comedy', value: 'Comedy' }, { label: 'Action', value: 'Action' }]}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                          </Form.Group>
                          <Form.Group as={Col} md="6">
                            <Form.Label>For Children</Form.Label>
                            <Field
                              className="form-control"
                              name="forChildren"
                              as={BootstrapSwitchButton}
                              checked={values.forChildren}
                              value={values.forChildren}
                              onChange={(value) => setFieldValue('forChildren', value)}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                          </Form.Group>
                        </Row>
                        <Form.Group>
                          <Form.Label>Original Title</Form.Label>
                          <Form.Control
                            type="text"
                            name="originalTitle"
                            placeholder="Original Title"
                            onChange={handleChange}
                            value={values.originalTitle}
                            isInvalid={!!errors.originalTitle}
                          />
                          <Form.Control.Feedback type="invalid">{errors.originalTitle}</Form.Control.Feedback>
                        </Form.Group>
                        <hr />
                        <Button className="btn btn-primary" type="submit">
                          Save
                        </Button>
                      </Form>
                    )}
                  </Formik>
                </Col>
              </Row>
            </Page.SectionWrapper>
          </Col>
        </Row>
      </Page>
    </>
  );
};
export default FormMovie;
// export default {};
