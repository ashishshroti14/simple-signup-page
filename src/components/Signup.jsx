import React, {useState} from 'react'
import ReactDOM from 'react-dom';
import { Form, Input, Button, Checkbox, Space, Row, Col, Avatar } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import { Typography } from 'antd';
import logo from '../download.png';
import {useHistory} from 'react-router-dom' 
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import Success from './Success';


const { Title, Text } = Typography;

const { Header, Footer, Sider, Content } = Layout;



function Signup() {
    const hist = useHistory()
    const [email, setEmail] = useState('')
    const [agreement, setAgreement] = useState(false)
    const screen  = useBreakpoint()
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
        // console.log('Received values of form: ', values);
        // ReactDOM.render(
        //     <React.StrictMode>
        //       <Success />
        //     </React.StrictMode>,
        //     document.getElementById('root')
        //   );
        hist.push('/success')
      };

    

    return (
        <Layout>
        {/* <Header>Header</Header> */}
        <Content   style={{
              paddingTop: 64,
              paddingLeft: 20,
              paddingRight:20,
              minHeight: '80vh',
              backgroundColor: "#ffffff"
            }}>
               

        <Row justify ="center" >
            <Col >
           
       

        <Row style = {{textAlign: "left", }}> <Col >
                <Title style = {{width: screen.md ? 400 : 200, justifySelf:"left" }}>
                Create Account
            </Title>
            </Col>
                </Row>
       <Row>
           <Col>
           
        <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      style = {{justifyItems: 'left',}}
      onValuesChange = {(changedValues, values) =>{ 
        // console.log(changedValues, values) 
        setEmail(values.email)
        setAgreement(values.agreement)
    }}
      onFinish={onFinish}
    >
        <Row justify = "start">

<Title level = {5} style = {{justifyContent: 'left', justifyItems: 'left',justifySelf: 'left'}}>Your Email</Title>  
</Row>
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email',
          },
        ]}
        hasFeedback
        validateStatus={ValidateEmail() }
        // help="The information is being validated..."
        
      >
          
        <Input  style={{borderRadius: '12px', width : screen.md ? 600: null  }}
/> 
        
      
      </Form.Item>
      <Row justify = "start">

<Title level = {5} style = {{justifyContent: 'left', justifyItems: 'left',justifySelf: 'left'}}>Password</Title>  
</Row>
      <Form.Item
        name="password"
        hasFeedback
        rules={[
          {
            required: true,
            message: 'At least 8 characters required',
            min: 8
          },
        ]}
    
      >


        <Input.Password
         
        //   type="password"
        
          style={{borderRadius: '12px',  width : screen.md ? 600: null }}
        />
      
      </Form.Item>
      <Form.Item>
        <Form.Item name="agreement" valuePropName="checked" noStyle>
          <Checkbox style ={{maxWidth: (screen.md ? 700 : 200)}}>I agree to <a className = "App-link">Terms and Conditions</a>  & <a className = "App-link">Privacy Policy</a></Checkbox>
        </Form.Item>

        
      </Form.Item>

<Row>
    <Col 
    xs = {24}
    sm = {24}
    md = {11}
    lg = {11}

    
    
    >
      <Form.Item>
        
          
       
        <Button type="primary" htmlType="submit" className="login-form-button"  style={{borderRadius: '12px',width: '100%' }} disabled = {!agreement}>
      Create Account 
        </Button>
       
       
      </Form.Item>
      </Col>
      <Col
      xs = {0}
      sm = {0}
      md = {2}
      lg = {2}>
      </Col>
      <Col 
      xs = {24}
      sm = {24}
      md = {11}
      lg = {11}
      >
      
      <Form.Item>
      
        <Button style={{borderRadius: '12px',  width: '100%', color: "#246bb7"}}>
            <Row>
                <Col span = {4}>
                <Avatar src = {logo} size = {14}></Avatar>
                </Col>
                <Col span = {20} style = {{fontSize: 13}}> 
                Sign up with Google
                </Col>
            </Row>
          
        
        </Button>
       
      </Form.Item>
      </Col>
     
      </Row>
      <Text style = {{fontSize: 12}}>Already Have an account? <a className = "App-link">Login</a></Text>
    </Form>
    </Col>
    </Row>
    </Col>
        </Row>
    
      </Content>
   
      </Layout>
   
        
    )
}

export default Signup
