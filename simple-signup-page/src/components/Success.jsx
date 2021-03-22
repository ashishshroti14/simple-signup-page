import React, {useState} from 'react'
import { Form, Input, Button, Checkbox, Space, Row, Col, Avatar } from 'antd';
import { Layout } from 'antd';
import { Typography } from 'antd';
import { Result } from 'antd';




const { Title, Text } = Typography;

const { Header, Footer, Sider, Content } = Layout;



function Signup() {

    const [email, setEmail] = useState('')
    const [agreement, setAgreement] = useState(false)
    function ValidateEmail() 
{
 if (/\S+@\S+\.\S+/
    .test(email))
  {
    return ("success")
  }
  if (email === undefined || email.length === 0)
    {
        return "none"
    }
    return ("error")
}

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
      };

    return (
        <Layout>
        {/* <Header>Header</Header> */}
        <Content   style={{
              paddingLeft: 20,
              paddingRight:20,
              paddingTop: 64,
              minHeight: '80vh',
              backgroundColor: "#ffffff"
            }}>
               

        <Row justify ="center" >
            <Col >
            <Result
    status="success"
    title="Account Created Successfully"
  
  />
       

    </Col>
        </Row>
    
      </Content>
   
      </Layout>
   
        
    )
}

export default Signup
