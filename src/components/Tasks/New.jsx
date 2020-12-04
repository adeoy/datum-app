import React from "react";
import { connect } from "react-redux";
import { Form, FormGroup, Input, Label } from "reactstrap";

import Modal from "../Wrappers/Modal";

import { uploadTask, putTask } from "../../actions/index";

const New = ({
  form,
  setForm,
  defaultForm,
  uploadTask,
  putTask,
  modalOpen,
  setModalOpen,
}) => {
  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const onChangeInt = (e) => {
    setForm({
      ...form,
      [e.target.name]: parseInt(e.target.value),
    });
  };

  const submit = () => {
    const task = {
      ...form,
      schema: JSON.parse(form.schema),
      status: "Working",
    };
    if (task._id) {
      putTask(task);
    } else {
      uploadTask(task);
    }
    setForm(defaultForm);
  };

  const submitEnable =
    form.page_url.length > 0 &&
    form.list_css_selector.length > 0 &&
    form.schema.length > 0;

  return (
    <Modal
      modalTitle="Nueva tarea"
      submitTitle="Guardar"
      submit={submit}
      submitEnable={submitEnable}
      modalOpen={modalOpen}
      setModalOpen={setModalOpen}
    >
      <Form>
        <FormGroup>
          <Label for="txtPageUrl">URL de la página:</Label>
          <Input
            type="text"
            name="page_url"
            id="txtPageUrl"
            value={form.page_url}
            onChange={onChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="txtMaxDeep">Profundidad:</Label>
          <Input
            type="number"
            name="max_deep"
            id="txtMaxDeep"
            value={form.max_deep}
            onChange={onChangeInt}
          />
        </FormGroup>
        <FormGroup>
          <Label for="txtListCssSelector">
            Selector CSS de lista de elementos:
          </Label>
          <Input
            name="list_css_selector"
            id="txtListCssSelector"
            value={form.list_css_selector}
            onChange={onChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="txtNextHostUrl">Host url at next button:</Label>
          <Input
            name="next_host_url"
            id="txtNextHostUrl"
            value={form.next_host_url}
            onChange={onChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="txtNextCssSelector">Selector CSS de butón Next:</Label>
          <Input
            name="next_css_selector"
            id="txtNextCssSelector"
            value={form.next_css_selector}
            onChange={onChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="txtSchema">Schema:</Label>
          <Input
            type="textarea"
            name="schema"
            id="txtSchema"
            value={form.schema}
            onChange={onChange}
          />
        </FormGroup>
      </Form>
    </Modal>
  );
};

const mapDispatchToProps = {
  uploadTask,
  putTask,
};

export default connect(null, mapDispatchToProps)(New);
