import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { Button, Col, Row } from "reactstrap";

import New from "../components/Tasks/New";
import Data from "../components/Tasks/Data";

const defaultForm = {
  page_url: "https://ddtech.mx/productos/componentes/tarjetas-de-video",
  max_deep: 5,
  list_css_selector: ".product",
  next_host_url: "",
  next_css_selector: 'a[rel="next"]',
  schema: `[
    {
        "name": "title",
        "html_type": "text",
        "html_attr": "inner",
        "css_selector": ".name a",
        "var_type": "str",
        "default": ""
    },
    {
        "name": "url",
        "html_type": "url",
        "html_attr": "href",
        "css_selector": ".name a",
        "var_type": "str",
        "default": ""
    },
    {
        "name": "price",
        "html_type": "number",
        "html_attr": "inner",
        "css_selector": ".price",
        "var_type": "float",
        "default": 0
    },
    {
        "name": "price_old",
        "html_type": "number",
        "html_attr": "inner",
        "css_selector": ".price-before-discount",
        "var_type": "float",
        "default": 0
    },
    {
        "name": "image",
        "html_type": "img",
        "html_attr": "data-echo",
        "css_selector": ".product img",
        "var_type": "str",
        "default": 0
    }
]`,
};

const Tasks = () => {
  const [form, setForm] = useState(defaultForm);
  const [modalOpen, setModalOpen] = useState(false);

  const nuevo = () => {
    setModalOpen(true);
    setForm(defaultForm);
  };

  return (
    <div>
      <New
        form={form}
        setForm={setForm}
        defaultForm={defaultForm}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />

      <Row className="mb-4">
        <Col xs="12" md={{ size: 4, offset: 8 }} lg={{ size: 2, offset: 10 }}>
          <Button color="success" onClick={nuevo} block>
            <FontAwesomeIcon icon={faPlusCircle} /> Nueva tarea
          </Button>
        </Col>
      </Row>

      <Row>
        <Col>
          <Data setForm={setForm} setModalOpen={setModalOpen} />
        </Col>
      </Row>
    </div>
  );
};

export default Tasks;
