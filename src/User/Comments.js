import React from "react";
import { Table } from "react-bootstrap";
import axios from "axios";



class Comments extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            comment:[],
        };
    }
    onData = async () =>{
        const api = await axios.get("http://localhost:3004/comments");
        this.setState({
            comment: api.data,
        });
    };
    componentDidMount(){
        this.onData();
    }
    render(){
        return(
           <>
           <h1 className="text-center">Comments</h1><hr/>
            <Table>
                <thead>
                    <tr>    
                        <th>Id</th>
                        <th>Post Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody> 
                    {this.state.comment.map((data) => (
                        <tr key={data.id}>
                            <td>{data.id}</td>
                            <td>{data.postId}</td>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td>{data.body}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
           </>
        )
    }

}
export default Comments;