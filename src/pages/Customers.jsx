import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Sort,
  Filter,
  Selection,
  Edit,
  Inject,
  Toolbar,
} from "@syncfusion/ej2-react-grids";
import { customersData, customersGrid } from "../data/dummy";
import { Header } from "../components";
const Customers = () => {
  return (
    <div className="m-2 md:10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Custmers" />
      <GridComponent
        id="gridcomp"
        dataSource={customersData}
        allowPaging
        allowSorting
        toolbar={["Delete"]}
        editSettings={{ allowEditing: true, allowDeleting: true }}
        width="auto"
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Toolbar, Selection, Sort, Edit, Filter]} />
      </GridComponent>
    </div>
  );
};

export default Customers;
