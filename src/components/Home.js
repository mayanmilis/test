import React,{Component} from 'react';
import axios from 'axios';

class Home extends Component{
    state ={
        url: ''
    }

    getIframe = () =>{
        let iframe = document.getElementsByTagName("iframe")
        let data = iframe[0].contentWindow.document;
        let result = data? data.document : "cannot get document";
        console.log(result)
    }

    render(){
        return(
            <div>
                hello
                <button onClick={this.getIframe}>click</button>
                <iframe width="500" height="500" src="https://www.bmo.com"></iframe>
            </div>
        )
    }
}

export default Home;
