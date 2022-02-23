import {GET_CONTACT,
        GET_CONTACT_SUCCESS,
        GET_CONTACT_FAIL,
        ADD_CONTACT,
        DELETE_CONTACT,
        EDIT_CONTACT} 
        from "../constante/contactTypes";
import axios from "axios";


export const getContact=()=> async (dispatch)=>{

    dispatch({type:GET_CONTACT})
    try {
        let result= await axios.get("/user/")
        dispatch({type:GET_CONTACT_SUCCESS,
            payload:result.data});
    } catch (error) {
        dispatch({type:GET_CONTACT_FAIL,
            payload:error.data})
    }
};
export const addContact=(newContact)=> async (dispatch)=>{
    dispatch({type:ADD_CONTACT})
    try {
        let result= axios.post("/user/add" , newContact)
        dispatch({type:ADD_CONTACT,payload:"success"})
        dispatch(getContact())
    } catch (error) {
        dispatch({type:GET_CONTACT_FAIL,
            payload:error.data})
    }
};

export const deleteContact=(id)=> async (dispatch)=>{
    dispatch({type:DELETE_CONTACT})
    try {
        let result= axios.delete(`/user/${id}`);
        dispatch({type:DELETE_CONTACT,payload:"success"})
        dispatch(getContact())
    } catch (error) {
        dispatch({type:GET_CONTACT_FAIL,
            payload:error.data})
    }
};


export const editingContact=(id)=> async (dispatch)=>{
    dispatch({type:EDIT_CONTACT})
    try {
        
        
        dispatch({type:EDIT_CONTACT,payload:"success"})
        dispatch(getContact())
    } catch (error) {
        dispatch({type:GET_CONTACT_FAIL,
            payload:error.data})
    }
};


