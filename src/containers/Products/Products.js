import React, {useState} from 'react'
import Layout from '../../components/Layout/Layout'

import { Col, Container, Row, Table, Button, Form } from 'react-bootstrap'
import Input from "../../components/Forms/Input/Input";
import { useSelector, useDispatch } from 'react-redux';
import { addProduct, deleteProductById, updateProductByAdmin } from '../../actions/product.action';
import ModalForm from '../../components/Forms/Modal/ModalForm';

import "./style.css"
import { PublicUrlGenerator } from '../../urlConfig';

import { BiAddToQueue } from "react-icons/bi";

import { FaCheckCircle } from "react-icons/fa";


import { FaExclamationCircle } from "react-icons/fa";







export default function Products(props) {




      /* Start modal bootstrap functions */


    const [name, setName] = useState ("");
    const [price, setPrice] = useState ("");
    const [description, setDescription] = useState ("");
    const [quantity, setQuantity] = useState ("");
    const [categoryId, setCategoryId] = useState ("");

    const [brandId, setBrandId] = useState ("");

    const [productPictures, setProductPictures] = useState ([]);

    const [updateProduct, setUpdateProduct] = useState (false);

    
    const [updateProductId, setUpdateProductId] = useState ("");

    const [updateProductName, setUpdateProductName] = useState ("");

    const [updateProductPrice, setUpdateProductPrice] = useState ("");
    const [updateProductQuantity, setUpdateProductQuantity] = useState ("");
    const [updateProductCategoryName, setUpdateProductCategoryName] = useState ("");
    const [updateProductBrandName, setUpdateProductBrandName] = useState ("");
    const [updateProductDescription, setUpdateProductDescription] = useState ("");

    const [initUpdateProductImages, setInitUpdateProductImages] = useState ([]);  //for delete product images in DB
    const [initUpdateProductImageseDeletd, setInitUpdateProductImagesDeletd] = useState ([]);  //for delete product images in DB

    const [updateProductImages, setUpdateProductImages] = useState ([]);


    const [errorInput, setErrorInput] = useState (false);



    

    
    


    



    const [productDetailsModal, setProductDetailsModal] = useState (false);

    const [productDetails, setProductDetails] = useState (null);


    const dispatch = useDispatch();

    

    const handleProductPictures = (e) =>{
        /*e.target.files[0];*/
        setProductPictures([
            ...productPictures,
            e.target.files[0]
        ]);
    }
   
  /*  console.log(productPictures)*/

    const [show, setShow] = useState(false);


    const handleClose = () => {   /* bootstarp modified */
        setShow(false);
    } 
   

   const AddPrductForm = () =>{
    const form = new FormData();
    form.append('name', name);
    form.append('price', price);
    form.append('description', description);
    form.append('quantity', quantity);
    form.append('category', categoryId);
    form.append('brand', brandId);
    console.log('brand', brandId)
  
    for (let pic of productPictures) {
        form.append('productPicture', pic);
    }

    dispatch(addProduct(form));
   }

   

   const UpdatPrductFormApi = () =>{

    const formUpd = new FormData();

    if (updateProductId && updateProductName && updateProductPrice && updateProductDescription && updateProductQuantity &&
        updateProductCategoryName && updateProductBrandName  && (initUpdateProductImages.length + updateProductImages.length > 0 )  )
    {
       

        formUpd.append('_id', updateProductId);
        formUpd.append('name', updateProductName);
        formUpd.append('price', updateProductPrice);
        formUpd.append('description', updateProductDescription);
        formUpd.append('quantity', updateProductQuantity);
        formUpd.append('category', updateProductCategoryName);
        formUpd.append('brand', updateProductBrandName);
      
        for (let pic of updateProductImages) {
            formUpd.append('productPicture', pic);
        }
        
        
        for (let picD of initUpdateProductImageseDeletd) {
            formUpd.append('productPictureDelete', picD._id);
        } 
    
        console.log('_id', updateProductId);
        
         console.log('initUpdateProductImagesDeletd', initUpdateProductImageseDeletd);

         
         
    
        alert('Save New updates')
        dispatch(updateProductByAdmin(formUpd))
        handleCloseProductDetailsModal()
        
        setUpdateProduct(false)

        setErrorInput(false)


        
            
      



    }else {
        setErrorInput(true)
    }

  

    }


   
    const handleShow = () => setShow(true);
  /* End modal bootstrap functions */


  const category = useSelector (state => state.category);

  const brand = useSelector (state => state.brand);



  //console.log("brands", brand)

  

  const createCategoryList = (categories, options = []) => {

    for (let category of categories) {
        options.push({value: category._id, name: category.name})
        if (category.children.length >0){

            createCategoryList(category.children, options)
        }
    }
    return options
    }
    
  const createBrandList = (brands, options = []) => {

    for (let brand of brands) {
        options.push({value: brand._id, name: brand.name})
    }
    return options
    }


    
    const product = useSelector (state => state.product);
    console.log("products ", product)


    const Updateproduct = () => {

        setUpdateProduct(true)
        setErrorInput(false)
       
       
        //setProductDetailsModal(false)
        //setProductDetailsModal(true)

    }
    const CancelUpdateproduct =() => {
        setProductDetailsModal(false)
        setUpdateProduct(false)
        setErrorInput(false)


    }


    
    const handleProductPicturesUpdate =(e) =>{
        console.log(e);
        setUpdateProductImages([...updateProductImages, e.target.files[0]])
        const fileArray = Array.from(updateProductImages).map((file) => URL.createObjectURL(file))
        console.log("fileArray", fileArray)
    }

    
                                
    const updateProductImageRemove = (img) => {
     
        setUpdateProductImages(updateProductImages.filter(item => item !== img));

    }

                         
    const initupdateProductImageRemove = (img) => {
     
        setInitUpdateProductImages(initUpdateProductImages.filter(item => item !== img));

        setInitUpdateProductImagesDeletd([...initUpdateProductImageseDeletd, img])

    }
    


    const rendreProducts = () =>{
        return (

        <Table responsive style={{fontSize:14}}>
                                <thead>
                                    <tr>
                                    <th>#</th>
                                    
                                        <th key={1}>Name</th>
                                        <th key={2}>Price</th> 
                                        <th key={3}>Quantity</th>
                                        {/*<th key={4}>Description</th>*/}
                                        <th key={5}>Category</th>
                                
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                    product.products.length > 0 ?
                                    product.products.map((product, index) =>
                                        
                                        <tr 
                                            /*onClick={() => ShowProductDetailsModal(product)} */
                                            key={product.id}
                                        >
                                        <td>{index}</td>
                                       
                                            <td key={1}> {product.name} </td>
                                            <td key={2}> {product.price} </td>
                                            <td key={3}> {product.quantity} </td>
                                           {/* <td key={4}> {product.description} </td> */}
                                           {/* <td key={5}> {product.category.name} </td> */}
                                            

                                            <td>
                                                <button  
                                                onClick={() => ShowProductDetailsModal(product)} >
                                                info
                                                </button>
                                                <button
                                                onClick={() => {
                                                    const payload = {
                                                    productId: product._id,
                                                    };
                                                    dispatch(deleteProductById(payload));
                                                }}
                                                >
                                                del
                                                </button>
                                            </td>
                                        
                                        </tr>)
                                        : null
                                    }

                                   
                                    
                                </tbody>
        </Table>
         )                                     
    }


    const renderAddProductModal = () =>{

        return(
  
            <ModalForm 
                modalTitle = {'Add New Product'}
                show = {show}
                handleClose= {handleClose}
                
                onSubmit = {AddPrductForm}

              


            >

                {/* props.children  */}


                
                        <Input
                            label=" Name "
                            placeholder="Product Name "
                            value={name}
                            type="text"
                            onChange={(e) =>{setName(e.target.value)}}
                        />


                        <Input
                            label=" Quantity "
                            placeholder="The quantity of the product "
                            value={quantity}
                            type="text"
                            onChange={(e) =>{setQuantity(e.target.value)}}
                        />

                        
                        <Input
                            label=" Price "
                            placeholder="The Price of the product "
                            value={price}
                            type="text"
                            onChange={(e) =>{setPrice(e.target.value)}}
                        />


                        

                        <select className="form-control"  /* bootstrap class */
                        value = {categoryId}
                        onChange={(e) =>{setCategoryId(e.target.value)}}> 
                            <option>
                                Select Category 
                            </option>
                                {
                                    createCategoryList(category.categories).map(option =>
                                        <option key={option.value} value={option.value}> {option.name} </option>
                                    )
                                }
                           
                        </select>

                        <br/>

                        <select className="form-control"  /* bootstrap class */
                        value = {brandId}
                        onChange={(e) =>{setBrandId(e.target.value)}}> 
                            <option>
                                Select Brand 
                            </option>
                                {
                                   createBrandList(brand.brands).map(option =>
                                        <option key={option.value} value={option.value}> {option.name} </option>
                                    )
                                }
                           
                        </select>
                        {/* 
                         <Input
                            label=" Category "
                            placeholder="The Category of the product "
                            value={category}
                            type="text"
                            onChange={(e) =>{setCategory(e.target.value)}}
                        /> */}

                        
                        <br/>
                        <Input
                            label=" Description "
                            placeholder=" Description of the product "
                            value={description}
                            type="text"
                            onChange={(e) =>{setDescription(e.target.value)}}
                        />



                            {
                                productPictures.length > 0 ?
                                productPictures.map((pic, index) => <div key="index">
                                    {pic.name }
                                </div>)
                                : null
                            }

                        <Input
                            name=" productPicture "
                            /*placeholder=""*/
                            /*value={productPicture}*/
                            type="file"
                            /*label =""*/
                            /*onChange={(e) =>{setProductPicture(e.target.value)}}*/
                            onChange= {handleProductPictures}
                        />


               
            </ModalForm>


        );

    }

    const restHooksProductDetaills = () =>{
        //setProductDetails("");
        setUpdateProductId("")
        setUpdateProductName("")
        setUpdateProductPrice("")
        setUpdateProductQuantity("")
        setUpdateProductCategoryName("") 
        setUpdateProductBrandName("")

        setUpdateProductDescription("")
        setInitUpdateProductImages([])
        setInitUpdateProductImagesDeletd([])
        setUpdateProductImages([])

        console.log("Rest All HOOCKS PRODUCT Details ")
    }



    const handleCloseProductDetailsModal = () =>{

        restHooksProductDetaills()
        setProductDetailsModal(false);
        setErrorInput(false)
       
        setUpdateProduct(false)





    }


    const ShowProductDetailsModal = (product) =>{

        setProductDetailsModal(true);


        //

        setProductDetails(product);

        setUpdateProductId(product._id)
        setUpdateProductName(product.name)
        setUpdateProductPrice(product.price)
        setUpdateProductQuantity(product.quantity)
        product.category? setUpdateProductCategoryName(product.category._id) :setUpdateProductCategoryName("")
        
        if (product.brand) {
            setUpdateProductBrandName(product.brand._id)
            console.log("product.brand._id", product.brand._id);                
        }else {
            console.log("product No Brand", product);                
                            
        }

        setUpdateProductDescription(product.description)
        //const [initUpdateProductImages, setInitUpdateProductImages] = useState ("");
        setInitUpdateProductImages(product.productPictures)

        setInitUpdateProductImagesDeletd([])


    }

    const RestPrductFormApi = () => {

    }
   

    
    let btn1 ={
        label: 'Update Product',
        color: 'primary',
        onClick: () => Updateproduct()
    }

    let btn2 ={
        label: 'Close',
        color: 'danger',
        onClick:  () => handleCloseProductDetailsModal()
    }

    let btn3 = {
        label: 'Cancel',
        color: 'primary',
        onClick: () => CancelUpdateproduct()
    }
    

    
    let btn4 = {
        label: 'Save',
        color: 'warning',
        type : "submit",
        //onClick: () =>   alert('Save New updates')
        onClick: () => UpdatPrductFormApi()
    }

    
    
    /*let btn5 = {
        label: 'Reset',
        color: 'primary',
        //onClick: () =>   alert('Save New updates')
        onClick: () => restHooksProductDetaills()
    }*/


    let buttonsModalUppdate= [btn1, btn2]
    updateProduct ? buttonsModalUppdate= [btn3, btn4] :buttonsModalUppdate= [btn1, btn2] 
   

    const renderProductDetailsModal = () => {

        if (! productDetails) {
            return null
        }
        return (
            
            <ModalForm 
                modalTitle = {'Product Details'}
                show = {productDetailsModal}
                handleClose= {handleCloseProductDetailsModal}
                size="lg" 
                /*UpdateBtn = {Updateproduct}*/
               
                buttons= {buttonsModalUppdate}

                
                
                
               /* btn ={ key="index1" , variant="red"}*/
                  
            >
           <Form>
                {updateProduct ?
                <>

               

                        <Row>
                        <Col md={6}>
                            <Input
                                label=" Name "
                                placeholder="Product Name "
                                value={updateProductName}
                                type="text"
                                onChange={(e) =>{setUpdateProductName(e.target.value)}}
                                required="required"
                                required
                            />


                            {
                                errorInput ?
                                
                                ((updateProductName.replace(/^\s+|\s+$/g,"")) ? 
                                <FaCheckCircle className="inputIconCheck" />
                                :<FaExclamationCircle className="inputIconNotCheck" />
                                )
                                           
                                :null

                            } 
                            

                        </Col>

                       


                        <Col md={6}>
                        <Input
                            label=" Price "
                            placeholder="Product Price "
                            value={updateProductPrice}
                            type="text"
                            onChange={(e) =>{
                                const Num= /^[0-9\b]+$/;
                            
                                if (e.target.value === '' || Num.test(e.target.value)) {
                                  
                                   setUpdateProductPrice(e.target.value)

                                }
                            
                                //ssetUpdateProductPrice(e.target.value)
                            }}
                        />
                         {
                                errorInput ?
                                
                                ((updateProductPrice) ? 
                                <FaCheckCircle className="inputIconCheck" />
                                :<FaExclamationCircle className="inputIconNotCheck" />
                                )
                                           
                                :null

                            } 
                           
                        </Col>

                        <Col md={6}>
                            
                            <Input
                            label=" Quantity "
                            placeholder=" Product quantity "
                            value={updateProductQuantity}
                            type="text"
                            onChange={(e) =>{
                                const Num= /^[0-9\b]+$/;
                            
                                if (e.target.value === '' || Num.test(e.target.value)) {
                                  
                                    setUpdateProductQuantity(e.target.value)

                                }
                               }}
                        />

                            {
                                errorInput ?
                                
                                ((updateProductQuantity) ? 
                                <FaCheckCircle className="inputIconCheck" />
                                :<FaExclamationCircle className="inputIconNotCheck" />
                                )
                                           
                                :null

                            } 
                        </Col>

                        
                       {/* <Col md={6}>
                           
                            <Input
                            label=" Category "
                            placeholder=" Product Category "
                            value={updateProductCategoryName}
                            type="text"
                            onChange={(e) =>{setUpdateProductCategoryName(e.target.value)}}
                            />
                        </Col>
                        */}
                        <Col md={6}>
                        <label className="key"> Category </label>

                        <select className="form-control"  /* bootstrap class */
                        value = {updateProductCategoryName}
                        onChange={(e) =>{setUpdateProductCategoryName(e.target.value)}}                        
                        >


                            <option>
                                
                                {createCategoryList(category.categories).map(item=> {
                                    if (item.value==updateProductCategoryName){
                                        return item.name
                                    }
                                } )}
                            </option>

                                {
                                   createCategoryList(category.categories).map(option => {
                                        if (option.value != updateProductCategoryName){
                                        return (
                                            <option key={option.value} value={option.value}> {option.name} </option>

                                        )
                                    }
                                   }
                                  
                                    )
                                }
                           
                        </select>

                        {
                                errorInput ?
                                
                                ((updateProductQuantity) ? 
                                <FaCheckCircle className="inputIconCheck" style={{right:"2.4rem"}} />
                                :<FaExclamationCircle className="inputIconNotCheck" style={{right:"2.4rem"}}/>
                                )
                                           
                                :null

                            } 
                        </Col>

                        <Col md={6}>
                        <label className="key"> Brand </label>

                        <select className="form-control"  /* bootstrap class */
                        value = {updateProductBrandName}
                        onChange={(e) =>{setUpdateProductBrandName(e.target.value)}}> 
                            <option>
                                
                                {createBrandList(brand.brands).map(item=> {
                                    if (item.value==updateProductBrandName){
                                        return item.name
                                    }
                                } )}
                            </option>
                                {
                                   createBrandList(brand.brands).map(option => {
                                        if (option.value != updateProductBrandName){
                                        return (
                                            <option key={option.value} value={option.value}> {option.name} </option>

                                        )
                                    }
                                   }
                                    
                                    )
                                }
                           
                        </select>

                        {
                                errorInput ?
                                
                                ((updateProductBrandName) ? 
                                <FaCheckCircle className="inputIconCheck" style={{right:"2.4rem"}} />
                                :<FaExclamationCircle className="inputIconNotCheck" style={{right:"2.4rem"}}/>
                                )
                                           
                                :null

                            } 
                        </Col>

                        { /*
                        <Col md={12}>
                           
                            <Input
                            label=" Description "
                            placeholder=" Product Description "
                            value={updateProductDescription}
                            type="text"
                            onChange={(e) =>{setUpdateProductDescription(e.target.value)}}
                            />
                        </Col>
                        */}

                        <Col md={12}>
                        <label className="key"> Description: </label>

                           
                           <textarea
                           className="textareaDesUpdate"
                           label=" Description "
                           placeholder=" Product Description "
                           value={updateProductDescription}
                           type="text"
                           rows="4" 
                           
                           onChange={(e) =>{setUpdateProductDescription(e.target.value)}}
                           
                           />

                            {
                                errorInput ?
                                
                                ((updateProductDescription.replace(/^\s+|\s+$/g,"")) ? 
                                <FaCheckCircle className="inputIconCheck" style={{right:"1.4rem"}} />
                                :<FaExclamationCircle className="inputIconNotCheck" style={{right:"2.2rem"}}/>
                                )
                                           
                                :null

                            } 
                           
                       </Col>

                    </Row>

{/* ! (initUpdateProductImages.length <1 && updateProductImages <1 */}

                    
                    <Row>
                        <Col>
                            <label className="key"> product Pictures: </label>

                            <div className="productImgconatianer">

                                {initUpdateProductImages.map(pic => 
                                    <div className="productImg">
                                         <span onClick={(e) => initupdateProductImageRemove(pic, e)}> x </span>

                                        <img src={PublicUrlGenerator(pic.img)} />
                                    </div>
                                )}
                                
                                {
                                errorInput ?
                                
                                ((!(initUpdateProductImages.length <1 && updateProductImages <1 ) ) ? 
                                <FaCheckCircle className="inputIconCheck" style={{top:"5.5rem", right:"2.4rem"}} />
                                :<FaExclamationCircle className="inputIconNotCheck" style={{top:"4.5rem", right:"2.4rem"}}/>
                                )
                                           
                                :null

                            } 
                                
                            </div>
                        
                        </Col>

                    
                    </Row>

                    

                    <Row>
                    

                        
                        
                    </Row>

                    
                        <div className="sepaRow"> </div>
 

                        <Row style={{ margin:" .1rem 0rem", padding:"0rem", paddingBottom:"0rem", 
                                        }} 
                            className="brands-container">
                               
                                <Col style={{ display:"flex", flexWrap:"wrap"}}>
                                {
                                updateProductImages.length > 0 ?
                                updateProductImages.map((image, index) =>
                                
                                    <div key={index}  className="prodctsImgsNewArrayUpdate">
                                            <span onClick={(e) => updateProductImageRemove(image, e)}> x </span>
                                            <img src = {URL.createObjectURL(image)} />
                                    </div>

                                
                                ) 
                                : null
                                }




                                 <input
                                        name=" productPicture "
                                        id='ImgsUpdate'
                                        className = "ImgsUpdateC"
                                    
                                        type="file"
                                    
                                        onChange= {handleProductPicturesUpdate}
                                        placeholder="Product Images"
                                        accept ="image/*"

                                    />
                                   
                                       
                                        {updateProductImages.length > 0 ?
                                         <label className= "ImgsUpdateCLabel" for='ImgsUpdate' style={{width:'3.4rem', height:"3.4rem", fontSize:"3.1em"}} >
                                         <BiAddToQueue />
                                         </label>                            

                                         : 

                                        <label className= "ImgsUpdateCLabel" for='ImgsUpdate' >
                                            <span>Add New Img</span>
                                            <BiAddToQueue  />
                                        </label>                            


                                        }





                                
                            
                                   
                                </Col>
                            </Row>  

                     
                    





                </>


                :
                
                <>

                        <Row>
                        <Col md={6}>
                            <label className="key"> Name </label>
                            <p className="value" >{productDetails.name}</p>
                            
                        </Col>

                        <Col md={6}>
                            <label className="key"> price </label>
                            <p className="value" >{productDetails.price}</p>
                        </Col>

                        <Col md={6}>
                            <label className="key"> Quantity </label>
                            <p className="value" >{productDetails.quantity}</p>
                        </Col>

                        
                        <Col md={6}>
                            <label className="key"> Category </label>
                            <p className="value" > {productDetails.category.name} </p>
                        </Col>

                        <Col md={6}>
                            <label className="key"> Brand </label>
                            {productDetails.brand ?
                            <p className="value" > {productDetails.brand.name} </p>
                            :null
                            }
                        </Col>

                        
                        <Col md={12}>
                            <label className="key"> Description </label>
                            <p className="value" >{productDetails.description}</p>
                        </Col>
                    </Row>



                    
                    <Row>
                        <Col>
                            <label className="key"> product Pictures: </label>

                            <div className="productImgconatianer">

                                {productDetails.productPictures.map(pic => 
                                    <div className="productImg">
                                        <img src={PublicUrlGenerator(pic.img)} />
                                    </div>
                                )}
                            </div>
                        
                        </Col>

                    
                    </Row>
                   

                </>



                }
                 </Form>
            </ModalForm>
        );

    }






    return (
        <Layout sidebar>
            

            <Container>
                <Row>
                    <Col md={12}>
                     <div className="category-container">
                        <h3>
                        Products
                        </h3>
                        <button onClick={handleShow}>
                            Add
                        </button>
                     </div>
                    
                    </Col>
                </Row>

                    <br />

                <Row>
                    <Col md={12}>   

                    {rendreProducts()}
                                            
                    </Col>
                </Row>
            </Container>

            {renderProductDetailsModal()}

            {renderAddProductModal()}


        </Layout>
    )
}
