import React, { Component } from 'react';
import './App.less';
import { Provider } from "react-redux";
import { Route, Switch, withRouter } from "react-router-dom";
import setAuthToken from "./redux/utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { setCurrentUser, logoutUser } from './redux/actions/commonActions';
import store from "./redux/store";
import PrivateRoute from './PrivateRoute';
import Login from './pages/common/LoginNew'
import AdminHome from './pages/admin/demo'
// import CoordinatorHome from './pages/coordinator/Home'
// import StudentHome from './pages/student/Home'
// import FacultyHome from './pages/faculty/Home'
// // import CaHome from './pages/CA/BasicDetails'
// import cahome from './pages/CA/MyData'
// import batchCoordinatorHome from './pages/batchcoordinator/Home'
// import hodHome from './pages/hod/Home'
// import studentaffairsHome from './pages/studentaffairs/Home';
// import Midsem1 from './pages/faculty/report/Midsem1';
// import Midsem2 from './pages/faculty/report/Midsem2';
// import Preparatory from './pages/faculty/report/Preparatory';
// import Mcq from './pages/faculty/report/Mcq';
// import Assignment from './pages/faculty/report/Assignment';
// import Presentation from './pages/faculty/report/Presentation';
// import FinalInternal from './pages/faculty/FinalInternal';
// import Final from './pages/faculty/report/FinalInternal';
// import midsem1 from './pages/CA/report/Midsem1'
// import midsem2 from './pages/CA/report/Midsem2'
// import midsem3 from './pages/CA/report/Preparatory'
// import midsem4  from './pages/CA/report/Mcq'
// import midsem5 from './pages/CA/report/Assignment';
// import midsem6  from './pages/CA/report/Presentation';
// // import { report } from '../../curricula-server-main/routes/Faculty/UnitMarks';
// import finalrep from './pages/CA/report/FinalInternal.js'
// import rep from './pages/hod/report/Midsem1'
// import rep1 from './pages/hod/report/Midsem2'
// import rep2 from './pages/hod/report/Preparatory'
// import rep3 from './pages/hod/report/Mcq'
// import rep4 from './pages/hod/report/Assignment'
// import rep5 from './pages/hod/report/Presentation'
// import rep6 from './pages/hod/report/FinalInternal'
// import Feespay from './pages/CA/report/Feespay';
// import coe from './pages/COE/Home'
// import Final_report  from './pages/CA/report/Final_report';


// import reports from './pages/CA/report/overall_report/Midsem1'
// import reports1 from './pages/CA/report/overall_report/Midsem2'
// import reports2 from './pages/CA/report/overall_report/Preparatory'
// import reports3 from './pages/CA/report/overall_report/Mcq'
// import reports4 from './pages/CA/report/overall_report/Assignment'
// import reports5 from './pages/CA/report/overall_report/Presentation'
// import reports9 from './pages/CA/report/overall_report/Lab1'
// import reports10 from './pages/CA/report/overall_report/Lab2'
// import reports11 from './pages/CA/report/overall_report/Lab3'
// import reports12 from './pages/CA/report/overall_report/Lab4'
// import Lab from './pages/faculty/report/Lab';
// import Labcourse from './pages/faculty/report/Labcourse';

// import Omrreport from './pages/COE/Omrreport';








// import Midsem2q from './pages/faculty/report/Midsem2';

if (localStorage.jwtToken) {
  const token = localStorage.jwtToken;
  setAuthToken(token);
  const decoded = jwt_decode(token);
  store.dispatch(setCurrentUser(decoded));
  const currentTime = Date.now() / 1000; // to get milliseconds
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = "../";
  }
}

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div>
          <Route exact path="/" component={Login} />
          <Switch>
            {/* <PrivateRoute user="S" exact path="/student/home" component={StudentHome} />
            <PrivateRoute user="TF" exact path="/faculty/home" component={FacultyHome} />
            <PrivateRoute user="C" exact path="/coordinator/home" component={CoordinatorHome} /> */}
            <PrivateRoute user="A" exact path="/admin/home" component={AdminHome} />
             {/* <PrivateRoute user="B" exact path="/batchcoordinator/home" component={batchCoordinatorHome} />
             <PrivateRoute user="H" exact path="/hod/home" component={hodHome} />
             <PrivateRoute user="SA" exact path="/studentaffairs/home" component={studentaffairsHome} />
            <PrivateRoute user="CA" exact path="/ca/home" component={cahome} />
            <PrivateRoute user="COE" exact path="/coe/home" component={coe} />
          
             

            <Route path='/sample' component={Midsem1} />
            <Route path='/sample1' component={Midsem2} />
            <Route path='/sample2' component={Preparatory} />
            <Route path='/sample3' component={Mcq} />
            <Route path='/sample4' component={Assignment} />
            <Route path='/sample5' component={Presentation} />
            <Route path='/sample6' component={Final} />
            <Route path='/sample8' component={Lab} />
            <Route path='/sample7' component={Labcourse} />

            <Route path='/rep' component={midsem1} />
            <Route path='/rep1' component={midsem2} />
            <Route path='/rep2' component={midsem3} />
            <Route path='/rep3' component={midsem4} />
            <Route path='/rep4' component={midsem5} />
            <Route path='/rep5' component={midsem6} />
            <Route path='/rep6' component={finalrep} />
            
            
            <Route path='/hrep' component={rep} />
            <Route path='/hrep1' component={rep1} />
            <Route path='/hrep2' component={rep2} />
            <Route path='/hrep3' component={rep3} />
            <Route path='/hrep4' component={rep4} />
            <Route path='/hrep5' component={rep5} />
            <Route path='/hrep6' component={rep6} />
            
            <Route path='/feespay' component={Feespay} />
            <Route path='/finalpdf' component={Final_report} />
            <Route path='/finalpdf1' component={reports9} />
            <Route path='/finalpdf2' component={reports10} />
            <Route path='/finalpdf3' component={reports11} />
            <Route path='/finalpdf4' component={reports12} />

            <Route path='/over' component={reports} />
            <Route path='/over1' component={reports1} />
            <Route path='/over2' component={reports2} />
            <Route path='/over3' component={reports3} />
            <Route path='/over4' component={reports4} />
            <Route path='/over5' component={reports5} />
            <Route path='/OMR' component={Omrreport} />



 */}
          </Switch>
        </div>
      </Provider>
    );
  }
}

export default withRouter(App);