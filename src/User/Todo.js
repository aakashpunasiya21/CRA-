import React from "react";
import { Table } from "react-bootstrap";
import axios from "axios";
class Todo extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            arr:[],
        };
    }
    onData = async () =>{
        const api = await axios.get("http://localhost:3004/todos");
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
                        <th>Id</th>
                        <th>UserId</th>
                        <th>Title</th>
                        <th>Completed</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.arr.map((todos) => (
                        <tr key={todos.id}>
                            <td>{todos.id}</td>
                            <td>{todos.userId}</td>
                            <td>{todos.title}</td>
                            <td>{todos.completed}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
           </>
        )
    }

}
export default Todo;