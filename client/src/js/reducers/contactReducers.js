import {GET_CONTACT,
    GET_CONTACT_SUCCESS,
    GET_CONTACT_FAIL,
    ADD_CONTACT,
    DELETE_CONTACT,
    EDIT_CONTACT,
} from "../constante/contactTypes";


const initialstate={
    conatctList:[],
    errors:null,
    status:"",
}


const contactReducer=(state=initialstate,{type,payload})=>{
    switch (type) {
        case GET_CONTACT:
            return {...state, status:"request sent"};
            case GET_CONTACT_SUCCESS:
            return {...state, status:"Success",conatctList:payload};
            case GET_CONTACT_FAIL:
            return {...state, status:"Fail",errors:payload};
            case ADD_CONTACT:
            return {...state, status:payload};
            case DELETE_CONTACT:
            return {...state, status:payload};
            case EDIT_CONTACT:
            return {...state, status:payload};
            
            
    
        default:
            return state;
    }
}

export default contactReducer;