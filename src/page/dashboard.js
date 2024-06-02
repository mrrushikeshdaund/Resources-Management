import React, { useEffect, useState } from "react";
import TopBar from "../component/topbar";
import GridTable from "../component/gridTable";
import ChartSection from "../component/chartSection";

const DashboardPage = () => {
  return (
    <div>
      <TopBar />
      <div>
        <div style={{margin:'20px'}}>
          <ChartSection />
        </div>
        <GridTable />
      </div>
    </div>
  );
};

export default DashboardPage;
