import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { NetworkTrafficList } from "./networkTraffic/NetworkTrafficList";
import { NetworkTrafficCreate } from "./networkTraffic/NetworkTrafficCreate";
import { NetworkTrafficEdit } from "./networkTraffic/NetworkTrafficEdit";
import { NetworkTrafficShow } from "./networkTraffic/NetworkTrafficShow";
import { AnalysisReportList } from "./analysisReport/AnalysisReportList";
import { AnalysisReportCreate } from "./analysisReport/AnalysisReportCreate";
import { AnalysisReportEdit } from "./analysisReport/AnalysisReportEdit";
import { AnalysisReportShow } from "./analysisReport/AnalysisReportShow";
import { AlgorithmList } from "./algorithm/AlgorithmList";
import { AlgorithmCreate } from "./algorithm/AlgorithmCreate";
import { AlgorithmEdit } from "./algorithm/AlgorithmEdit";
import { AlgorithmShow } from "./algorithm/AlgorithmShow";
import { VisualizationList } from "./visualization/VisualizationList";
import { VisualizationCreate } from "./visualization/VisualizationCreate";
import { VisualizationEdit } from "./visualization/VisualizationEdit";
import { VisualizationShow } from "./visualization/VisualizationShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"NetworkAnalysisTool"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="NetworkTraffic"
          list={NetworkTrafficList}
          edit={NetworkTrafficEdit}
          create={NetworkTrafficCreate}
          show={NetworkTrafficShow}
        />
        <Resource
          name="AnalysisReport"
          list={AnalysisReportList}
          edit={AnalysisReportEdit}
          create={AnalysisReportCreate}
          show={AnalysisReportShow}
        />
        <Resource
          name="Algorithm"
          list={AlgorithmList}
          edit={AlgorithmEdit}
          create={AlgorithmCreate}
          show={AlgorithmShow}
        />
        <Resource
          name="Visualization"
          list={VisualizationList}
          edit={VisualizationEdit}
          create={VisualizationCreate}
          show={VisualizationShow}
        />
      </Admin>
    </div>
  );
};

export default App;
