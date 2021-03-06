import React,{Component} from 'react';
import { Header,Icon } from 'react-native-elements';

export default class MyHeader extends Component {

    render(){
        return(
            <Header
                backgroundColor={'#8282DF'}
                centerComponent={{
                    text:props.title,
                    style:{
                        color:'white',
                        fontSize:25,
                        fontWeight:'bold'
                        }
                    }}
            />
        )
    }
}