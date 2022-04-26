import React, { useState } from "react";
import content from "./sunburst_config";
// import sunburst from './sunburst'
import Sunburst from "./sunburst";
import { Row, Card, Layout } from "antd";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
function Sun(props) {
  //   const circle = {
  //     name: "label",
  //     children: [
  //       {
  //         name: "Semester Information",
  //         children: [
  //           {
  //             name: "Basic Details",
  //             parent: "Semester Information",
  //             children: [
  //               {
  //                 name: "hello",
  //                 parent: "Basic Details",
  //               },
  //             ],
  //             size: "110000",
  //           },

  //           {
  //             name: "Attendance Performa",
  //             parent: "Semester Information",
  //             size: "140000",
  //           },
  //         ],
  //         size: "140000",
  //       },

  //       {
  //         name: "Exam Results",
  //         children: [
  //           {
  //             name: "Internal Split Up",
  //             children: [
  //               {
  //                 name: "google",
  //                 parent: "Internal Split Up",
  //                 size: 20000,
  //               },
  //             ],
  //             size: "140000",
  //           },
  //           {
  //             name: "Final Internal Marks",
  //             parent: "Semester Details",
  //             size: "160000",
  //           },
  //           {
  //             name: "Semester Result",
  //             parent: "Semester Details",
  //             size: "140000",
  //           },
  //         ],
  //       },
  //       {
  //         name: "Services",
  //         children: [
  //           {
  //             name: "Fees Payment",
  //             parent: "Services",
  //             size: "140000",
  //           },
  //           {
  //             name: "Semester Feedback",
  //             parent: "Services",
  //             size: "140000",
  //           },
  //           {
  //             name: "No Dues",
  //             parent: "Services",
  //             size: "100000",
  //           },
  //         ],
  //       },
  //     ],
  //   };
  //   const [chart, setchart] = useState({
  //     data: circle,
  //   });

  // //   SESSION_ARRAY_CHILDREN.push(

  // //     {
  // //         "name": "S",
  // //         tipName: "Session 1",
  // //         key: 1,
  // //         Status: "Status",
  // //         "children": [
  // //             { "name": "1", tipName: "SLO 1", "size": 300, "course": "course", key: "slo1", Status: "slo1Status" },
  // //             { "name": "2", tipName: "SLO 2", "size": 300, "course": "course", key: "slo2", Status: "slo2Status" }
  // //         ]
  // //     }

  // //   )

  // //   // for(let i=0;i<5;i++){
  // // console.log(SESSION_ARRAY_CHILDREN)

  // // console.log(i)
  // Level_four.push(
  //   {
  //     "name": "Unit 4" ,
  //     tipName: "unitName",
  //     key: "UNIT - 1",
  //     size:300,

  //   }
  // )
  // Level_three.push(
  //   {

  //     "name": "Unit 3" ,
  //     tipName: "unitName",
  //     key: "UNIT - 1",
  //     size:300,

  //     "children": Level_four
  //   }
  // )
  // Level_two.push(
  //   {
  //     "name": "Unit 2" ,
  //     tipName: "unitName",
  //     key: "UNIT - 1",
  //     size:300,
  //     "children": Level_three

  //   }
  // )
  //    Level_one.push(
  //   {
  //     "name": "Unit 1" ,
  //     tipName: "unitName",
  //     key: "UNIT - 1",
  //     "children": Level_two
  // },
  // {
  //   "name": "Unit 1.1" ,
  //   tipName: "unitName",
  //   key: "UNIT - 1",
  //   "children": Level_two
  // })
  // // console.log(UNIT_ARRAY_CHILDREN)

  // const  l1=[]
  // const l2=[]
  // for(let i=0;i<props.common.user.circle.one1.length;i++){
  //   l2.push({
  //   name:props.common.user.circle.one1[i],

  //   size:300

  //   })
  //   }
  //   props.common.user.circle.one.forEach(element => {
  //     console.log(element)
  //     console.log("sss")
  //   });
  //   console.log(props.common.user.circle.one[0])
  //   console.log(props.common.user.circle.one.length )
  // for(let i=0;i<props.common.user.circle.one.length;i++){
  // l1.push({
  // name:props.common.user.circle.one[i],
  // children:l2,
  // size:300

  // })
  // }
  // const l={
  //   name:"MCQ",
  //   children:l1
  // }

  var a = [];
  var b = [];
  var d = ["google", "welcome", "you", "all"];
  var d1 = ["data", "googleee", "ranger", "rangeress"];
  var d11 = ["circle", "over"];

  var c = [];
  var l1 = [];
  var l1_name=["concept","topic","settlement","kanjana","han","six","seven","eight","nine","ten"
]
var size1=["400","400","400","400","400","400","400","400"]

var l1_child=[]
  var l1_child1 = ["therinha", "goodmon", "doremon"];
  for(let i=0;i<l1_child1.length;i++){
    l1_child.push({
      name:l1_child1[i],
      size:size1[i]
    })
  }

  var e = [];
  var l2_child=[]
  var l3_child=[]
  var l4_child=[]
  var l5_child=[]
  var l6_child=[]
  var l7_child=[]
  var l8_child=[]
  var l9_child=[]
  var l10_child=[]


  for (let i = 0; i < 10; i++) {
    if (i === 0) {
      l1.push({
        name: l1_name[i],
        children:l1_child,
        size:"300"
      });
    }
    else if (i === 1) {
      l1.push({
        name: l1_name[i],
        children:l2_child,
        size:"300"
      });
    }
    else if(i===2)
    {
      l1.push({
        name: l1_name[i],
        children:l3_child,
        size:"300"
      });
    }
    else if(i===3)
    {
      l1.push({
        name: l1_name[i],
        children:l4_child,
        size:"300"
      });
    }
    else if(i===4)
    {
      l1.push({
        name: l1_name[i],
        children:l5_child,
        size:"300"
      });
    }
    else if(i===5)
    {
      l1.push({
        name: l1_name[i],
        children:l6_child,
        size:"300"
      });
    }
    else if(i===6)
    {
      l1.push({
        name: l1_name[i],
        children:l7_child,
        size:"300"
      });
    }
    else if(i===7)
    {
      l1.push({
        name: l1_name[i],
        children:l8_child,
        size:"300"
      });
    }
    else if(i===8)
    {
      l1.push({
        name: l1_name[i],
        children:l9_child,
        size:"300"
      });
    }
    else if(i===9)
    {
      l1.push({
        name: l1_name[i],
        children:l10_child,
        size:"300"
      });
    }
   

  }
  const v = {
    name: "MCQ tool",
    children: l1,
  };

  return (
    <div>
      <h1>jellly</h1>

      <Card>
        <Sunburst
          data={v}
          userName={"sabari"}
          width="580"
          height="580"
          count_member="size"
          labelFunc={(node) => node.data.name}
          // onClick={this.onClickNode}
        />
      </Card>
    </div>
  );
}

const mapStateToProps = (state) => ({
  common: state.common,
});
export default withRouter(connect(mapStateToProps, {})(Sun));
