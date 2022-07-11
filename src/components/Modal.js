import React, { Component } from 'react'
import {connect} from 'react-redux'
import {cancelbtn} from '../Action/Action'
 class Modal extends Component {
  
// state={
//     datas:this.props.state.datas,
//     val:this.props.state.val     
// }


  render() {
    console.log(this.props)
    return (
     <div className='poppup'>
    
     {
        this.props.data.map((item,index)=>{
            if(this.props.val===index+1){
                return(
        <div className="modalwrapper" key={index+1} >
           
            <div className="modal">  
                  
               <div> Name : {item.name}</div>
               <div> Age :  {item.Age}</div>                
               <div> Email : {item.id}</div>             
               <div> status :  {item.status}</div>             
               <div> Gender :  {item.gender}</div>            
               <div> Add : Bangalore</div>
             </div>
             <div>
                <button onClick={this.props.cancel} className='button'>X</button>
             </div>
          </div>
         
                )
            }
            return null;
            
        })
     }
        </div> 
    )
    
  }
}

function mapStateToProps(state){
    return({
        data:state.cancel.Mock,
        val:state.cancel.val
    })
}
function mapDispatchToProps(dispatch){
  return {
    cancel: () => dispatch(cancelbtn()),
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Modal)