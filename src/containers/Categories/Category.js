import React, {useEffect, useState} from 'react'
import { Col, Container, Row} from 'react-bootstrap'
import Layout from '../../components/Layout/Layout'
import {useDispatch, useSelector} from "react-redux"
import './style.css'
import { addCategory, deleteCategoriesAction, getAllCategories, updateCategories } from '../../actions/category.action'
import Input from "../../components/Forms/Input/Input";
import ModalForm from '../../components/Forms/Modal/ModalForm';
import CheckboxTree from "react-checkbox-tree";

import {IoIosCheckboxOutline, IoIosCheckbox, IoMdArrowRoundDown, IoMdArrowRoundForward, 
        IoIosAdd, IoIosRemove, IoIosCloudUpload, IoIosTrash } from "react-icons/io"

import {AiTwotoneCheckCircle} from "react-icons/ai"
import {IoListCircleSharp, IoListCircleOutline, IoLogoWebComponent} from "react-icons/io5"
import 'react-checkbox-tree/lib/react-checkbox-tree.css';







export default function Category(props) {


    const category = useSelector (state => state.category);
    const [checked, setChecked] = useState([]);
    const [expanded, setExpanded] = useState([]);
    const [checkedArray, setCheckedArray] = useState([]);
    const [expandedArray, setExpandedArray] = useState([]);

    const [updateCategoryModal, setUpdateCategoryModal] = useState(false);

    const [deleteCategoryModal, setDeleteCategoryModal] = useState(false);

    const dispatch = useDispatch();

    useEffect ( () => {

        if (!category.loading) {
            setShow(false);
        }

    }, [category.loading]);

    const updateCategory = () =>{

        updatedCheckedAndExpandedCategories();
        setUpdateCategoryModal(true);
        
    }


    const deleteCategory = () =>{
        updatedCheckedAndExpandedCategories();
        setDeleteCategoryModal(true);
    }

    // delet expanded for more eficacité
    const deleteCategories = () =>{
        const checkedIdsArray= checkedArray.map((item, index) => ({_id: item.value}));
       /* const expandedIdsArray= expandedArray.map((item, index) => ({_id: item.value}));*/

       /* const idsArray = expandedIdsArray.concat(checkedIdsArray); */ // new array = array A + array B
        const idsArray = checkedIdsArray; 
        if (idsArray.length > 0) {
            dispatch(deleteCategoriesAction(idsArray))
            .then(result => {
                if(result){
                    dispatch(getAllCategories())
                    setDeleteCategoryModal(false);
                }
    
            });

        }

        setDeleteCategoryModal(false);
    }

    const updatedCheckedAndExpandedCategories = () =>{

        const categories = createCategoryList(category.categories);
        const checkedArray = [];
        const expandedArray = [];

        checked.length > 0 && checked.forEach((categoryId, index) =>{
            const category = categories.find((category, _index) => categoryId ==  category.value)
            category && checkedArray.push(category);
        })

        expanded.length > 0 && expanded.forEach((categoryId, index) =>{
            const category = categories.find((category, _index) => categoryId ==  category.value)
            category && expandedArray.push(category);
        })

        setCheckedArray(checkedArray);
        setExpandedArray(expandedArray);

        console.log({checked, expanded, categories, checkedArray, expandedArray});




    }

    const handleCategoryInput = (key, value, index, type) =>{

        if (type=="checked"){
           const updatedCheckedArray = checkedArray.map((item, _index) => index==_index ? { ...item, [key]: value } : item ); 
           setCheckedArray(updatedCheckedArray)
        }else if (type=="expanded"){
            const updatedExpandedArray = expandedArray.map((item, _index) => index==_index ? { ...item, [key]: value } : item ); 
            setExpandedArray(updatedExpandedArray)

        }
    }

    /*
    useEffect( () =>{
        dispatch(getAllCategories())

    }
    ,[]);
    */


    const showCategories = (categories) => {

        let defcategories = [];

        for ( let category of categories) {
            defcategories.push(
                // React CheckBoxTree
                {
                    label : category.name,
                    value :  category._id,
                    children : category.children.length > 0 && showCategories(category.children)
                }
               
               /*<li key={category.name}>
                    {category.name}
                    {category.children.length > 0 ? (<ul>    // if }
                        {showCategories(category.children)}
                    </ul>)
                    
                    : null
                    }

                </li>
                */
            );
        } 

        return defcategories;

    }

    const createCategoryList = (categories, options=[]) =>{

        for (let category of categories) {
            options.push({

                value: category._id, 
                name: category.name,
                parentId: category.parentId,
                type: category.type,
                categoryPicture: category.filename,

                
            })
            if (category.children.length >0){

                createCategoryList(category.children, options)
            }
        }
        return options; 
    }


    const handleCategoryImage = (e) =>{
        setcategoryImage(e.target.files[0])
        console.log("categoryImage", categoryImage)
    }
 

    /* Start modal bootstrap functions */
    
    const [categoryName, setCategoryName] = useState('');

    const [parentCategoryId, setParentCategoryId] = useState('');

    const [categoryImage, setcategoryImage] = useState(null);
    const [categoryImageUpdate, setCategoryImageUpdate] = useState(null);

    const [show, setShow] = useState(false);

    const handleClose = () => {   /* bootstarp modified */

        const form = new FormData();

        if ( categoryName === "") {

            alert("Category Name is required")
            return ; 
        }
        
       

        form.append("name", categoryName);
        form.append("parentId", parentCategoryId );
        form.append("categoryPicture", categoryImage);

        dispatch(addCategory(form));

        // empry the list after the dispatch

        setCategoryName ("");
        setParentCategoryId ("");
        setcategoryImage("");
        
        /*const cat = {
            categoryName,
            parentCategoryId,
            categoryImage
            console.log(cat);
        }*/
        
        

        setShow(false);
    } 
    const handleShow = () => setShow(true);
  /* End modal bootstrap functions */


    const updateCategoriesForm = () => {

        const form01 =new FormData();
        const form =new FormData();

        expandedArray.forEach((item, index) => {
            form01.append('_id', item.value);
            form01.append('name', item.name);
            form01.append('parentId', item.parentId ? item.parentId :"" );
            form01.append('type', item.type);
            form01.append("categoryPicture", item.categoryPicture ? item.categoryPicture : null);

        });

        checkedArray.forEach((item, index) => {
            form.append('_id', item.value);
            form.append('name', item.name);
            form.append('parentId', item.parentId ? item.parentId :"" );
            form.append('type', item.type);
            form.append("categoryPicture", item.categoryPicture ? item.categoryPicture : null);


        });

        console.log("categoryImageUpdate", categoryImageUpdate)

        dispatch(updateCategories(form));
        dispatch(updateCategories(form01));
       
       /* .then( result => {
            if (result) {
                dispatch (getAllCategories())
            }
        })
        */


        setUpdateCategoryModal(false)
    }



    const renderDeleteCategoryModal = () => {
        console.log ("checkedArray mod", checkedArray)
        console.log ("expandedArray mod", expandedArray)
        return(
            <ModalForm 
            modalTitle = {'Confirm Delete Categories'}
            show = {deleteCategoryModal}
            handleClose= { () => setDeleteCategoryModal(false)}
            size="lg"
            buttons= {[
                {
                    label: 'No',
                    color: 'primary',
                    onClick: () => {
                        alert ('no');
                    }
                },

                {
                    label: 'Yes',
                    color: 'danger',
                    onClick: deleteCategories
                }
            ]}
            >

            <h5> Expanded </h5> 
            {
                expandedArray.map((item, index) => 
                <span key={index}> {item.name} </span>
                )
            }

           <h5> Cheked </h5> 
            {
                checkedArray.map((item, index) => 
                <span key={index}> {item.name} </span>
                )
            }

          
            </ ModalForm>

        )
    }


    const renderUpdateCategoriesModal = () => {

        return (
            
            <ModalForm 
                modalTitle = {'Update Categories'}
                show = {updateCategoryModal}
                handleClose= {() => setUpdateCategoryModal(false)}
                onSubmit = {updateCategoriesForm}
                size="lg"
            >

                {/* props.children  */}

                <Row>
                    <Col>
                     <h6> Expanded </h6>
                    </Col>
                </Row>

                {
                    expandedArray.length > 0  && 
                    expandedArray.map((item, index) => 

                    <Row key={index}> 
                    <Col>
                        <Input
                            /*label=""*/
                            placeholder="Category Name *"
                            value={item.name}
                        
                            onChange={(e) =>handleCategoryInput('name', e.target.value, index, 'expanded')}
                        />
                    </Col>

                    <Col>

                        <select className="form-control"  // bootstrap class 
                            value = {item.parentId}
                            onChange={(e) =>handleCategoryInput('parentId', e.target.value, index, 'expanded')}> 
                                <option>
                                    Select Category 
                                </option>
                                    {
                                        createCategoryList(category.categories).map(option =>
                                            <option key={option.value} value={option.value}> {option.name} </option>
                                        )
                                    }
                            
                        </select>
                    
                    </Col>

                    <Col>
                        <select className="form-control" value={item.type}
                         onChange={(e) =>handleCategoryInput('type', e.target.value, index, 'expanded')}> 
                                                   
                            <option value ="">Select Type</option>
                            <option value ="store">Store Style</option>
                            <option value ="product">Product Style</option>
                            <option value ="page">Page Style</option>
                        </select>
                    </Col>

                    <Col>
                       <Input
                           label="Upload the Category image "
                           name="categoryPicture"
                           placeholder="Category Name"
                           type="file"
                         //  value={item.categoryImageUpdate}
                           //value={categoryImageUpdate}
                         //  onChange={(e) =>{  setCategoryImageUpdate(e.target.files[0]) }}
                           onChange={(e) =>handleCategoryInput('categoryPicture', e.target.files[0], index, 'expanded')} 

                       />
                   </Col>
                </Row>

              
            
                    
                    )
                }


                <Row>
                    <Col>
                     <h6> Checked </h6>
                    </Col>
                </Row>
                {
                    checkedArray.length > 0  && 
                    checkedArray.map((item, index) => 

                    <Row key={index}> 
                    <Col>
                        <Input
                            /*label=""*/
                            placeholder="Category Name *"
                            value={item.name}
                        
                            onChange={(e) =>handleCategoryInput('name', e.target.value, index, 'checked')}
                        />
                    </Col>

                    <Col>

                        <select className="form-control"  // bootstrap class 
                            value = {item.parentId}
                            onChange={(e) =>handleCategoryInput('parentId', e.target.value, index, 'checked')}> 
                                <option>
                                    Select Category 
                                </option>
                                    {
                                        createCategoryList(category.categories).map(option =>
                                            <option key={option.value} value={option.value}> {option.name} </option>
                                        )
                                    }
                            
                        </select>
                    
                    </Col>

                    <Col>
                        <select className="form-control" value={item.type}
                         onChange={(e) =>handleCategoryInput('type', e.target.value, index, 'checked')}> 
                                                   
                       
                            <option value =""> Select Type</option>
                            <option value ="store"> Store Style</option>
                            <option value ="product"> Product Style</option>
                            <option value ="page"> Page Style</option>
                        </select>
                    </Col>

                    <Col>
                       <Input
                           label="Upload the Category image "
                           name="categoryPicture"
                           placeholder="Category Name"
                           type="file"
                         //  value={item.categoryImageUpdate}
                           //value={categoryImageUpdate}
                         //  onChange={(e) =>{  setCategoryImageUpdate(e.target.files[0]) }}
                           onChange={(e) =>handleCategoryInput('categoryPicture', e.target.files[0], index, 'checked')} 

                       />
                   </Col>
                </Row>

              
            
                    
                    )
                }

               
               {/*
                       <Col>
                       <Input
                           label="Upload the Category image "
                           name="categoryPicture"
                           placeholder="Category Name"
                           type="file"
                           //value={categoryImageUpdate}
                           onChange={(e) =>{  setCategoryImageUpdate(e.target.files[0]) }}
                       />
                   </Col>
                   */
               }

               {/* <Input
                    label="Upload the Category image "
                    name="categoryImage"
                    placeholder="Category Name"
                    type="file"
                    onChange={handleCategoryImage}
               /> 
               
               
                 <Input
                            label=" Name "
                            placeholder="Category Name "
                            value={categoryName}
                            type="text"
                            onChange={(e) =>{setCategoryName(e.target.value)}}
                        />*/}

            </ModalForm>

        )

    }


    const renderAddCategoryModal = () => {
        return (
            
            <ModalForm 
                modalTitle = {'Add New Category'}
                show = {show}
                handleClose= {() => setShow(false)}
                onSubmit = {handleClose}
            >

                {/* props.children  */}

                <Row>
                    <Col>
                        <Input
                            label=" Name "
                            placeholder="Category Name "
                            value={categoryName}
                            type="text"
                            onChange={(e) =>{setCategoryName(e.target.value)}}
                        />
                    </Col>
                </Row>
                
                <Row>
                    <Col>
                        
                        <select className="form-control"  // bootstrap class 
                            value = {parentCategoryId}
                            label=" Name "
                            onChange={(e) =>{setParentCategoryId(e.target.value)}}> 
                                <option>
                                    Select Category 
                                </option>
                                    {
                                        createCategoryList(category.categories).map(option =>
                                            <option key={option.value} value={option.value}> {option.name} </option>
                                        )
                                    }
                            
                        </select>
                    
                    </Col>
                </Row>
                <br/>

                <Row>
                    <Col>
                        <Input
                            label="Upload the Category image "
                            name="categoryImage"
                            placeholder="Category Name"
                            type="file"
                            onChange={handleCategoryImage}
                        />
                    </Col>
                </Row>

               

               

                

               

            </ModalForm>
        )
    }







    return (
        <Layout sidebar>
            <Container>
                <Row>
                    <Col md={12}>
                     <div className="category-container">
                        <h3>
                        Category
                        </h3>
                       
                       <div className="btnContainer">
                            <span> Actions :</span>
                            <br/>
                            <button onClick={handleShow}> <IoIosAdd /> <span>Add</span> </button>
                            <button onClick={ () => {deleteCategory()}}> <IoIosTrash /> <span> Delete </span> </button>
                            <button onClick={ () => {updateCategory()}}> <IoIosCloudUpload /> <span>Edit</span> </button>
                       </div>
                       
                     </div>
                    
                    </Col>
                </Row>


                <Row>
                    <Col md={12}>   
                        { /*<ul>
                            {showCategories(category.categories)}
                            //{JSON.stringify(createCategoryList(category.categories))}}
                        </ul> */}

                        <CheckboxTree
                            nodes={showCategories(category.categories)}
                            checked={checked}
                            expanded={expanded}
                            onCheck={checked => setChecked(checked)}
                            onExpand={expanded => setExpanded(expanded)}
                            icons={{
                                check: <IoIosCheckbox />,
                                uncheck: <IoIosCheckboxOutline />,
                                halfCheck: <IoIosCheckboxOutline />,
                                expandClose: <IoMdArrowRoundForward/>, // arrow < -- >..etc
                                expandOpen: <IoMdArrowRoundDown/>,
                                parentClose: <IoListCircleSharp />,
                                parentOpen: <IoListCircleOutline />,
                                leaf: <IoLogoWebComponent />
                                
                                
                               /*  expandAll: <span className="rct-icon rct-icon-expand-all" />,
                                collapseAll: <span className="rct-icon rct-icon-collapse-all" />,
                                parentClose: <span className="rct-icon rct-icon-parent-close" />,
                                parentOpen: <span className="rct-icon rct-icon-parent-open" />,
                                leaf: <span className="rct-icon rct-icon-leaf" />,*/
                            }}
                        />
                    
                    </Col>
                </Row>

               
            </Container>



            {renderAddCategoryModal()}

             {/* Edit Categories Modal */}
            {renderUpdateCategoriesModal()}

            {/*Delete Categories Modal */}

            {renderDeleteCategoryModal()}

            

        </Layout>
    )
}
