import React, { useState, useEffect } from 'react'
import Input from '../../components/Forms/Input/Input';
import ModalForm from '../../components/Forms/Modal/ModalForm';
import Layout from '../../components/Layout/Layout';
import {Row, Col} from "react-bootstrap"
import liniareCategories from "../../helpers/liniareCategories"
import { useSelector, useDispatch } from 'react-redux';
import {createPage} from "../../actions/page.action"

export default function Page(props) {

    const [createModal, setCreateModal ] = useState(false);
    const [title, setTitle ] = useState('');

    const [desc, setDesc ] = useState('');
    const [type, setType ] = useState('');


    const [banners, setBanners ] = useState([]);
    const [products, setProducts] = useState([]);



    const [categories, setCategories ] = useState([]);
    const [categoryId, setCategoryId] = useState();

    const dispatch = useDispatch();

    const page = useSelector (state => state.page)


    const category = useSelector (state =>state.category)


    useEffect(() => {    
        /*console.log("category", category)*/
    
        setCategories (liniareCategories(category.categories));
      
    }, [category])

    
    useEffect(() => {    
       console.log( "use state change :" , page)
       if ( !page.loading) {
        setCreateModal(false);
        setTitle("");
        setDesc("");
        setType("");
        setBanners("");
        setProducts("")


       }
    }, [page])

    const OnCategoryChange = (e) =>{
        const category = categories.find(category => category.value == e.target.value)
        setCategoryId(e.target.value);
        setType(category.type)
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
        const form = new FormData();

        if (title == "") {
            alert ("Title is requirde");
            setCreateModal(false);
            return;
       

        }
        form.append('title', title);
        form.append('description', desc);
        form.append('category', categoryId);
        form.append('type', type);
        
        banners.forEach((banner, index) => {
            form.append('banners', banner)
        })

        products.forEach((product, index) => {
            form.append('products', product)
        })


       /* console.log({title, desc, categoryId,  type, banners, products})*/

       dispatch(createPage(form))

       setCreateModal(false);

    }

    /*console.log("categories", categories)*/


    const renderCreatePageModal = () =>{

       return ( 
       <ModalForm
        show = {createModal}
        modalTitle = {'Create New Page'}
        handleClose= {() => setCreateModal(false)}
        onSubmit= {submitPageForm}
        >


            <Row>
                <Col>
                  {/* <select
                        value = {categoryId}
                        onChange={OnCategoryChange}
                        placeholder="Page Titel"  
                        className="form-control form-control-sm mb-3"
                    >
                       <option value=" "> Select Category</option>

                       {
                           categories.map(cat => 
                            <option key={cat._id} value={cat._id}> {cat.name} </option>

                            )
                       }   
                   </select>
                  */}

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

            <Row>
                <Col>
                    <Input 
                        value = {title}
                        onChange={(e) =>setTitle( e.target.value)}
                        placeholder="Page Titel"
                    />
                </Col>
            </Row>

            <Row>
                <Col>
                    <Input 
                        value = {desc}
                        onChange={(e) =>setDesc( e.target.value)}
                        placeholder="Page Description"
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

        </ModalForm>
        )
    }



    return (
        <Layout sidebar>
            {
                page.loading ? 
               <p>
                   Creating Page... please Wait 
               </p>
                :
                <>
                    {renderCreatePageModal()}
                    <button onClick={ () => setCreateModal(true)}> Add new Page </button> 
                </>
            }

            

        </Layout>
    )
}
