import React from "react";
import { ButtonGroup, Table } from "react-bootstrap";
import axios from "axios";
import Button from "@restart/ui/esm/Button";


class User extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            users:[],
        };
    }
    userData = async () =>{
        const Fakeapi = await axios.get("http://localhost:3004/users");
        this.setState({
            users: Fakeapi.data,
        });
    };
    componentDidMount(){
        this.userData();
    }
    Todos=(event) =>{
        this.props.history.push(`/users/${event}/todos`);
    }
    render(){
        return(
           <>
           <h1 className="text-center">User Page</h1><hr/>
            <Table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>UserName</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody> 
                    {this.state.users.map((data) => (
                        <tr key={data.id}>
                            <td>{data.id}</td>
                            <td>{data.name}</td>
                            <td>{data.username}</td>
                            <td>{data.email}</td>
                            <Button variant="primary">Post</Button>
                            <Button variant="primary" onClick="Todos">Todo</Button>
                            <Button variant="primary">Edit</Button>
  
                           
  

                        </tr>
                    ))}
                </tbody>
            </Table>
           </>
        )
    }

}
export default User;