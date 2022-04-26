import { Layout, Radio } from 'antd'
import { Content } from 'antd/lib/layout/layout'
import React,{useState} from 'react'
import Sun from '../sunburst/Sun'
import { Input, Table, Space, Button, message, Row, Col, Card, Badge } from 'antd';
import axios from 'axios';

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import config from '../../config';

const arr1=[]
const arr2=[]
const arr3=[]
const arr4=[]
var level5=[]
var level6=[]
var level7=[]
function Demo(props) {
  console.log(props.common.user.circle.one1)
  const [label,setlabel]=useState({})
  
const [cir,setcir]=useState({})
  const [level1,setlevel1]=useState({})
  const [level2,setlevel2]=useState({})
  const [level3,setlevel3]=useState({})
  const [level4,setlevel4]=useState({})
  const [level5,setlevel5]=useState({})
  const [level6,setlevel6]=useState({})
  const [level7,setlevel7]=useState({})
  const handlechange0=(e)=>{
setlevel1({...level1,[e.target.name]:e.target.value})
  }
  const setarray0=()=>{
  arr1.push(level1)
  }
  const handlechange1=(e)=>{
    setlevel2({...level2,[e.target.name]:e.target.value})
      }
      const setarray1=()=>{
        arr2.push(level2)
      }
      const handlechange2=(e)=>{
        setlevel3({...level3,[e.target.name]:e.target.value})
          }
          const setarray2=()=>{
            arr3.push(level3)
          }
          const handlechange3=(e)=>{
            setlevel4({...level4,[e.target.name]:e.target.value})
              }
              const setarray3=()=>{
                arr4.push(level4)
              }
              // const handlechange=(e)=>{
              //   setlevel({...level,[e.target.name]:e.target.value})
              //     }
              //     const setarray=()=>{
              //       level.push(level)
              //     }const handlechange=(e)=>{
              //       setlevel({...level,[e.target.name]:e.target.value})
              //         }
              //         const setarray=()=>{
              //           level.push(level)
              //         }const handlechange=(e)=>{
              //           setlevel({...level,[e.target.name]:e.target.value})
              //             }
              //             const setarray=()=>{
              //               level.push(level)
              //             }
              const handlechangelabel=(e)=>{
                setlabel({[e.target.name]:e.target.value})
              }
  const send=()=>{
  var   d={
  
    one:arr1,
    one1:arr2,
    one2:arr3,
    one3:arr4,
    username:props.common.user.USER_ID
  
    //     console.log(arr)
    //     console.log(data)
        
  }
  axios.post(config.curriculaserver + '/curricula/admin/home/sun',d).the(res=>{
      console.log(res.data)
    })
  console.log(d)

}
  return (
  <>  
  
  <Layout >
<Content>
  <Card>
  <label>label</label>
  <Input name='label' onChange={handlechangelabel} ></Input>
  
      <Row>
        <Col span={4}>
    <Card title={"level one"}>

      <label>name</label>
      <Input name='name' onChange={handlechange0}></Input>      
    <label>size</label>
    <Input name='size' onChange={handlechange0}></Input>  
    <Button onClick={setarray0}>setarray</Button>
        </Card>
        </Col>
      
        <Col span={4}>
        <Card>

          <label>name</label>
          <Input name='name' onChange={handlechange1}></Input>
          
          
    <label>size</label>
    <Input name='size' onChange={handlechange1}></Input>
    <Button onClick={setarray1}>setarray</Button>

        </Card>
        </Col>
        <Col span={4}>
        <Card>

          <label>name</label>
          <Input name='name' onChange={handlechange2}></Input>
          
          
    <label>size</label>
    <Input name='size' onChange={handlechange2}></Input>
    <Button onClick={setarray2}>setarray</Button>
        </Card>
        </Col>
        <Col span={4}>
        <Card>

          <label>name</label>
          <Input name='name' onChange={handlechange3}></Input>
          
          
    <label>size</label>
        <Input name='size' onChange={handlechange3}></Input>
        <Button onClick={setarray3}>setarray</Button>
        <Button onClick={send}>SEND</Button>
            </Card>


            </Col>
            </Row>


        <Sun/>
          
          </Card>
 </Content>
  </Layout>
  {/* <Sun /> */}
  </>
  )
  }


const mapStateToProps = state => ({
  common: state.common
});
export default withRouter(connect(mapStateToProps, {})(Demo));