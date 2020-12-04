import React from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import Moment from "react-moment";
import { Button } from "reactstrap";

import DataView from "../Wrappers/DataView";

import { deleteTask } from "../../actions";
import { makeShortText } from "../../utils";

const Data = ({ setForm, tasks, deleteTask, setModalOpen }) => {
  const history = useHistory();

  const data = tasks.map((item, idx) => {
    item["#"] = idx + 1;
    return item;
  });

  const columns = [
    { title: "#", data: "#" },
    {
      title: "Ver",
      format: (row) => (
        <Button
          color="primary"
          onClick={() => history.push(`/scraped-results/${row._id}`)}
        >
          Ver
        </Button>
      ),
    },
    { title: "Status", data: "status" },
    {
      title: "Page URL",
      format: (row) => (
        <a href={row.page_url}>
          {makeShortText(row.page_url, 30, { reverse: true })}
        </a>
      ),
    },
    { title: "Count", data: "count" },
    {
      title: "Created",
      format: (row) => (
        <Moment locale="es-us" format="LLLL">
          {row.created_at}
        </Moment>
      ),
    },
    {
      title: "Finished",
      format: (row) => (
        <Moment locale="es-us" format="LLLL">
          {row.finished_at}
        </Moment>
      ),
    },
  ];

  return (
    <DataView
      data={data}
      columns={columns}
      setForm={setForm}
      deleteItem={deleteTask}
      setModalOpen={setModalOpen}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
  };
};

const mapDispatchToProps = {
  deleteTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(Data);
