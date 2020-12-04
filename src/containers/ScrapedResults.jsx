import React from "react";
import { useParams } from "react-router-dom";
import { Col, Row } from "reactstrap";

import Data from "../components/ScrapedResults/Data";
import useScrapedResults from "../hooks/useScrapedResults";

const ScrapedResults = () => {
  let { _id_task } = useParams();

  const scrapedResults = useScrapedResults(_id_task);

  if (scrapedResults) {
    return (
      <div>
        <Row>
          <Col>
            <Data scrapedResults={scrapedResults} />
          </Col>
        </Row>
      </div>
    );
  } else {
    return (
      <div>
        <Row>
          <Col>
            <h3>Primero eleccione una tarea</h3>
          </Col>
        </Row>
      </div>
    );
  }
};

export default ScrapedResults;
