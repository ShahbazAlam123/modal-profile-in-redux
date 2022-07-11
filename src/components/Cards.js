import React, { Component } from 'react'
import Modal from './Modal'
import {connect} from 'react-redux'
import {showModal} from '../Action/Action'
 class Cards extends Component {
  render() {
    console.log(this.props)
    if(this.props.isShow!==false){
        return(
            <>
         <Modal />
         <div className='grid' >
        {
    
           this.props.data.map((data,index)=>{
     return(
         <div className='container' key={index+1} index={index+1}
         onClick={()=>this.props.setIndex(index+1)}>
        <div className='main'>
        <div>
            <img className='photo' src='https://sm.askmen.com/t/askmen_in/article/f/facebook-p/facebook-profile-picture-affects-chances-of-gettin_fr3n.1200.jpg' alt='profile'/>
        </div>
        <div className='form'>
                <div>
                    <div>id: {index+1}</div>
                <span>Name : </span>
                <span>{data.name}</span>
                </div>
                <div>
                <span>Email : </span>
                <span>{data.id}</span>
                </div>
                <div>
                <span>Gender : </span>
                <span>{data.gender}</span>
                </div>
        </div>
        </div>
      </div>
                )
           
            })
        }   
        
        </div>
      
    )
         </>
        )
      }
      else{
        return (
            <div className='grid' >
            {
        
               this.props.data.map((data,index)=>{
         return(
             <div className='container' key={index+1} index={index+1} 
             onClick={()=>this.props.setIndex(index+1)}>
            <div className='main'>
            <div>
                <img className='photo' src='https://sm.askmen.com/t/askmen_in/article/f/facebook-p/facebook-profile-picture-affects-chances-of-gettin_fr3n.1200.jpg' alt='profile'/>
            </div>
            <div className='form'>
                    <div>
                        <div>id: {index+1}</div>
                    <span>Name : </span>
                    <span>{data.name}</span>
                    </div>
                    <div>
                    <span>Email : </span>
                    <span>{data.id}</span>
                    </div>
                    <div>
                    <span>Gender : </span>
                    <span>{data.gender}</span>
                    </div>
            </div>
            </div>
          </div>
                    )
               
                })
            }   
            
            </div>
          
        )
      }
    
    
    
  }
}
function mapDispatchToProps(dispatch){
return{
    setIndex:(x)=>dispatch(showModal(x))
}
}

function mapStateToProps(state){
    return{
        data:state.cancel.Mock,
        isShow:state.cancel.isShow
    }
}

export default connect (mapStateToProps,mapDispatchToProps)(Cards);
