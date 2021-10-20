import React, { useState, useEffect } from 'react'

import Input from '../../components/Forms/Input/Input';
import ModalForm from '../../components/Forms/Modal/ModalForm';
import {Row, Col} from "react-bootstrap"
import Layout from '../../components/Layout/Layout';
import liniareCategories from "../../helpers/liniareCategories"
import { useSelector, useDispatch } from 'react-redux';
import { addHomePageModal } from '../../actions/setting.action';




export default function Settings(props) {


    const [createModal, setCreateModal ] = useState(false);

    const [modelnumber, setModelnumber ] = useState('');

    const [priority, setPriority ] = useState('');
   


    const [categories, setCategories ] = useState([]);
    const [categoryId, setCategoryId] = useState();

    
    const [banners, setBanners ] = useState([]);
    const [products, setProducts] = useState([]);

   // const [modelItems, setModelItems] = useState();
    

    const category = useSelector (state =>state.category)
    const dispatch = useDispatch();


    

    useEffect(() => {    
        /*console.log("category", category)*/
    
        setCategories (liniareCategories(category.categories));
      
    }, [category])



    
    const OnCategoryChange = (e) =>{
        const category = categories.find(category => category.value == e.target.value)
        setCategoryId(e.target.value);
        
        //setType(category.type)
    }
 
    const handleBannerImages = (e) =>{
        console.log(e)
        setBanners([...banners, e.target.files[0]]);

    }

    const handleProductsImages =(e) =>{
        console.log(e);
        setProducts([...products, e.target.files[0]])


    }


    

    const submitPageForm /* Add Page*/ = (e) => {
       // const form = new FormData();
        

        if (modelnumber == "") {
            alert ("modelnumber is requirde");
            setCreateModal(false);
            return;
        }
       // form.append('modelnumber', modelnumber);
    
       
         let category = categoryId
       // let modelItems = {category}
      
       // form.append('modelItems', modelItems);
    

      

      
        console.log( modelnumber, category, priority)

        dispatch(addHomePageModal( modelnumber, category, priority))

       

         //console.log({modelnumber, categoryId, priority})
        
       //dispatch(addHomePageModal(form))

       setCreateModal(false);
    }


    const renderCreateHomePageModal = () =>{

        return ( 
        <ModalForm
         show = {createModal}
         modalTitle = {'Create New Page'}
         handleClose= {() => setCreateModal(false)}
         onSubmit= {submitPageForm}
         >
 
            <Row>
                 <Col>
                     <Input 
                         value = {modelnumber}
                         onChange={(e) =>setModelnumber( e.target.value)}
                         placeholder="model Number"
                     />
                 </Col>
            </Row>

            <Row>
                 <Col>
                       Select Model Items
                 </Col>
            </Row>
 
            <Row  style={{border:"1px solid #328", margin:".1px",  padding:"1rem", }}>
                    <Row style={{width:"60%", }}>
                        <Col>  
                        <Input 
                            type="select"
                            value = {categoryId}
                            onChange={OnCategoryChange}
                            placeholder="Select Category"  
                            options = {
                                categories
                            }        
                        />
                        </Col>
                    </Row>
    
                
    
                    <Row style={{width:"60%"}}>
                        <Col>
                            <Input 
                                value = {priority}
                                onChange={(e) =>setPriority( e.target.value)}
                                placeholder="Product priority in page"
                            />
                        </Col>
                    </Row>

                    <Row>

                        {
                            banners.length > 0 ?
                            banners.map((banner, index) =>
                            
                                <Row key={index}>
                                    <Col>
                                        {banner.name}
                                    </Col>
                                </Row>
        
                            
                            ) 
                            : null
                        }
                        <Col>
                            <Input 
                                className="form-control form-control-sm"
                                type = 'file'
                                name= "banners"
        
                                onChange={handleBannerImages}
                                placeholder=""
                            />
                        </Col>
                    </Row>



                    <Row>
 
                        {
                            products.length > 0 ?
                            products.map((product, index) =>
                            
                                <Row key={index}>
                                    <Col>
                                        {product.name}
                                    </Col>
                                </Row>
        
                            
                            ) 
                            : null
                        }
                        <Col>
                            <Input 
                            className="form-control"
                                type = 'file'
                                name= "products"
                                
        
        
                                onChange={handleProductsImages}
                                placeholder=""
                            />
                        </Col>
                    </Row>
                        
                 
            </Row>


           
 
             
 
         </ModalForm>
         )
     }
 

    return (
        <Layout sidebar>
            Settings Page
            <br /> <br />
            {renderCreateHomePageModal()}
            <button onClick={ () => setCreateModal(true)}> Add new Home Page Modal </button> 


        </Layout>
    )
}
