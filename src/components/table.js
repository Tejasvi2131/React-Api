import React from 'react';
class Table extends React.Component{

    constructor(props) {
        super(props)
           
        this.state = {
            list:[]
        }
        this.callAPI = this.callAPI.bind(this)
        this.callAPI();
    }

    callAPI(){
      fetch("https://jsonplaceholder.typicode.com/posts").then
        ((response)=>{response.json().then((result)=>{
            console.log(result)
            this.setState({list:result})
        })
      }) 
    }  
    render(){
        const deleteUser=(e,id) => {
            e.preventDefault();
            this.setState({list:this.state.list.filter((user)=>user?.id !== id)});
        }
        let tb_data = this.state.list.map((item) => {
            return(
                <tr key={item?.id}>
                    <td className='td1'>{item?.id}</td>
                    <td className='td2'>{item?.userId}</td>
                    <td className='td3'>{item?.body}</td>
                    <td className='td4'>{item?.title}</td>
                    <td className='td5'><button onClick={(e)=>deleteUser(e,item.id)}>Delete</button></td>
                </tr>
               
            )
        })
        return (
            <div>
                <table className='table'>
                    <tbody>
                       {tb_data}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table;
