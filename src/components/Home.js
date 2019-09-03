import React,{Component} from 'react';
import axios from 'axios';

class Home extends Component{
    state ={
        url: ''
    }

    getInnerHtml = () =>{
        let data = axios.get("https://www.mako.co.il")
        console.log(data)
    }

    render(){
        return(
            <div>
                hello
                <button onClick={this.getInnerHtml}>click</button>
            </div>
        )
    }
}

export default Home;
