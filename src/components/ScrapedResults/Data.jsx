import React from "react";
import { connect } from "react-redux";

import DataView from "../Wrappers/DataView";

import { deleteScrapedResult } from "../../actions";
import { formatMoney } from "../../utils/index";

const Data = ({ scrapedResults, deleteScrapedResult, setModalOpen }) => {
  const data = scrapedResults.map((item, idx) => {
    item["#"] = idx + 1;
    return item;
  });

  if (data.length === 0) {
    return <></>;
  }

  const extra = Object.keys(data[0].data).map((item) => ({
    title: item,
    format: (row) => {
      const value = row.data[item].value;
      const htmlType = row.data[item].html_type;
      switch (htmlType) {
        case "url":
          return <a href={value}>{value}</a>;
        case "img":
          return <img src={value} className="img-fluid" alt={item} />;
        case "number":
          return formatMoney(value);
        default:
          return value;
      }
    },
  }));

  const columns = [...[{ title: "#", data: "#" }], ...extra];

  return (
    <DataView
      data={data}
      columns={columns}
      deleteItem={deleteScrapedResult}
      setModalOpen={setModalOpen}
    />
  );
};

const mapDispatchToProps = {
  deleteScrapedResult,
};

export default connect(null, mapDispatchToProps)(Data);
