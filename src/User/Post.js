import React from "react";
import { Table } from "react-bootstrap";
import axios from "axios";
class Post extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            arr:[],
        };
    }
    onData = async () =>{
        const api = await axios.get("http://localhost:3004/posts");
        this.setState({
            arr: api.data,
        });
    };
    componentDidMount(){
        this.onData();
    }
    render(){
        return(
           <>
            <Table>
                <thead>
                    <tr>
                        <th>S.No.</th>
                        <th>UserId</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.arr.map((data) => (
                        <tr key={data.id}>
                            <td>{data.id}</td>
                            <td>{data.userId}</td>
                            <td>{data.title}</td>
                            <td>{data.body}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
           </>
        )
    }

}
export default Post;