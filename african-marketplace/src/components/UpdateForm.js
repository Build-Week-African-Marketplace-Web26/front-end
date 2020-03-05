import React, {useState} from 'react';
import {updateItem } from '../action';
import {connect} from 'react-redux';


const UpdateForm = ({updateItem, itemsList}) => {
 const [form, setForm] = useState({
     id: "",
     title: "",
     body:""
 })
//handleChanges
 const handleChanges = (e) => {
     setForm({...form,[e.target.name]:e.target.value})
 }

//handleSubmit

 const handleSubmit = (e) => {
     e.preventDefault()
     updateItem(form)     
    //  console.log(form)
    setForm({title:"", body: ""})
 }

    return(
        <div>
            <form onSubmit = {handleSubmit}>
                <div>
                    <input
                    type ="text"
                    name = "title"
                    placeholder ="title"
                    value= {form.title}
                    onChange = {handleChanges}
                    />
                </div>

                <div>
                    <input
                    type ="text"
                    name = "body"
                    placeholder ="body"
                    value= {form.body}
                    onChange = {handleChanges}
                    />
                </div>
                <button type ="submit">Add new item</button>
            </form>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return{
    itemsList: state.itemsList
    }
  }

  export default connect(mapStateToProps,{updateItem})(UpdateForm);