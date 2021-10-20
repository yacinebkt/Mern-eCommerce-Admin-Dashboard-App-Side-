import React, { useState, useEffect } from 'react'

import {  Row, Col } from "react-bootstrap";
import Layout from "../../components/Layout/Layout";

import Input from '../../components/Forms/Input/Input';
import ModalForm from '../../components/Forms/Modal/ModalForm';





import { useSelector, useDispatch } from 'react-redux';
//import { addHomePageModal } from '../../actions/setting.action';

import liniareCategories from "../../helpers/liniareCategories"



// import styleSheet
import  "./style.css"
import { addBrand } from '../../actions/brand.action';

import { PublicUrlGenerator } from '../../urlConfig';


import { BiAddToQueue } from "react-icons/bi";
import {MdDeleteForever} from "react-icons/md"



import liniareBrands from '../../helpers/liniareBrands';





//var infobox = require('wiki-infobox');

//import { fetchInfoBoxes, fetchSearchInfoBoxes} from 'wiki-infoboxes';


import {DataGrid}  from '@mui/x-data-grid';
 


//import { Table as TableMu, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'
import {ReadMore} from '@mui/icons-material'

import {Search, AddCircleOutline, Close} from '@mui/icons-material'

import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';

import Box from '@mui/material/Box';









export default function Brands() {


    const [createModal, setCreateModal ] = useState(false);
    const [categories, setCategories ] = useState([]);
    const [brandParentIds, setBrandParentIds] = useState([]);
    const [categoryIds, setCategoryIds] = useState([]);
    const [categoryIdsName, setCategoryIdsName] = useState([]);
    const [brandImages, setBrandImages] = useState([]);
    const [brandLogo, setBrandLogo] = useState(null);

    
    const [brandName, setBrandName] = useState('');
    
    const [nativename, setNativename] = useState('');
    const [tradename, setTradename] = useState('');
    const [origin, setOrigin] = useState('');
    const [headquarters, setHeadquarters] = useState('');
    const [ISIN, setISIN] = useState('');
    const [founded, setFounded] = useState('');
    const [parentId, setParentId] = useState('');
    const [description, setDescription] = useState('');
    const [website, setWebsite] = useState('');
    const [brandDetails, setBrandDetails] = useState(null);
    const [brandDetatilsModal, setBrandDetailsModal] = useState(false);

   // const [suggestionsTitels, setSuggestionsTitels] = useState([]);
    // const [searchInfo, setSearchInfo] = useState({});

    

    const [displayCountriesOptions, setDisplayCountriesOptions ] = useState(false);
    const [ displayUpadateCountriesOptions , setDisplayUpadateCountriesOptions ] = useState(false)
    const [displayNamesOptions, setDisplayNamesOptions] = useState(false);
    const [countriesOptionsFilter, setCountriesOptionsFilter ] = useState([]);
    const [namesReqApiResultWiSort, setNamesReqApiResultWiSort ] = useState([]);

    const [nameReqApiSuggestion, setNameReqApiSuggestion ] = useState('');

    const [updateBrand, setUpdateBrand ] = useState(false);


    /* */
    const [updateBrandId, setUpdateBrandId] = useState ("");

    const [updateBrandName, setUpdateBrandName] = useState ("");


    const [updateBrandNaitvename, setUpdateBrandNaitvename] = useState ("");
    const [updateBrandTradename, setUpdateBrandTradename] = useState ("");
    const [updateBrandOrigin, setUpdateBrandOrigin] = useState ("");
    
    const [updateBrandHeadquarters, setUpdateBrandHeadquarters] = useState ("");
    const [updateBrandISIN, setUpdateBrandISIN] = useState ("");
    const [updateBrandFounded, setUpdateBrandFounded] = useState ("");
    const [updateBrandParentId, setUpdateBrandParentId] = useState ("");
    const [updateBrandWebsite, setUpdateBrandWebsite] = useState ("");
    const [updateBrandDescription, setUpdateBrandDescription] = useState ("");

    const [updateBrandActivities, setUpdateBrandActivities] = useState ([]);
    const [updateBrandActivitiesNames, setUpdateBrandActivitiesNames ] = useState ([]);

    const [updateBrandCovers, setUpdateBrandCovers] = useState ([]);
    const [initUpdateBrandCovers, setInitUpdateBrandCovers ] = useState ([]); // for deleting
    const [initUpdateBrandCoversDeletd, setInitUpdateBrandCoversDeletd] = useState ([]); 

    const [initUpdateBrandLogo, setInitUpdateBrandLogo] = useState (null);
    const [updateBrandLogo, setUpdateBrandLogo] = useState (null);
    const [searchTaable ,setSearchTaable] = useState ('');


    
 

  

  const [rowsData, setRowsData] = useState ([]); 

  const [selectValueSerch, setSelectValueSerch] = useState ('name');


  



    
    
    /* */

    
    
    //const [searchBrandName, setSearchBrandName] = useState('');


    
 //   const [cursor, setCursor] = useState(0);

    const [ArrayConditionSort, setArrayConditionSort ] = useState(['brand','brands','sub-brand','company','companies','founded','introduced','corporation', 
    'markets','marketed','headquartered','started',
    'produced','Groupe','announced','incorporated','released',
    'under the name', 'owned by','billion', 'millions','Inc.' ]);



   /* let ArrayConditionSort = ['brand','brands','sub-brand','company','companies','founded','introduced','corporation', 
                                'markets','marketed','headquartered','started',
                                'produced','Groupe','announced','incorporated','released',
                                'under the name', 'owned by','billion', 'millions','Inc.' ]*/

    


    







    const category = useSelector (state =>state.category)
    const brand = useSelector (state =>state.brand)
    //console.log("brand sellectorr", brand)

 

    const dispatch = useDispatch();
    
    
    useEffect(() => {    
        //console.log("brand ", brand.brands)

    
        setBrandParentIds(liniareBrands(brand.brands));
        
        
        
    }, [brand])


    useEffect(() => {    
        /*console.log("category", category)*/
       
        setCategories (liniareCategories(category.categories));
        
        
    }, [category])

    

    
    

    
   /* const OnBrandNameChange = (e) =>{
        
        setBrandName(e.target.value);
        console.log("brandName change")
        
    }*/

    const OnParentIdChange = (e) => {
        if ( e.target.value === "" ) {
            // select selcted
       } else {
       
         setParentId(e.target.value)
        //console.log(e.target.value)
         
       }

    }


    const OnParentIdUpdateChange = (e) => {
        if ( e.target.value === "" ) {
            // select selcted
       } else {
       
        setUpdateBrandParentId(e.target.value)

         
       }
    }
    

    const OnCategoryUpdateChange = (e) =>{
      

        if ( e.target.value === "" ) {
             // select selcted
        } else {
         if (updateBrandActivities.includes (e.target.value)) {
             console.log("in array")
         }
         else{
            setUpdateBrandActivities([...updateBrandActivities, e.target.value])
          //setCategoryIds.push(e.target.value)
          
          console.log("updateBrandActivities", updateBrandActivities)
          // just for log / show
          const category = categories.find(category => category.value === e.target.value)
          setUpdateBrandActivitiesNames([...updateBrandActivitiesNames, category.name])
         }
          
        }
       
     }

     
    const OnCategoryUpateRemove = (cat) =>{
        
        const category = categories.find(category => category.name === cat)

        setUpdateBrandActivitiesNames(updateBrandActivitiesNames.filter(item => item !== category.name));
        setUpdateBrandActivities(updateBrandActivities.filter(item => item !== category.value));

    }


    const OnCategoryChange = (e) =>{
      

       if ( e.target.value === "" ) {
            // select selcted
       } else {
        if (categoryIds.includes (e.target.value)) {
            console.log("in array")
        }
        else{
         setCategoryIds([...categoryIds, e.target.value])
         //setCategoryIds.push(e.target.value)
         
         console.log("categoryIds", categoryIds)
         // just for log / show
         const category = categories.find(category => category.value === e.target.value)
         setCategoryIdsName([...categoryIdsName, category.name])
        }
         
       }
      
    }

    const OnCategoryRemove = (cat) =>{
        console.log('delet ', cat)
        const category = categories.find(category => category.name === cat)

        

        //categoryIdsName = categoryIdsName.filter(item => item !== category.name)

        //setCategoryIdsName = categoryIdsName.filter(e => e !== cat)
        setCategoryIdsName(categoryIdsName.filter(item => item !== category.name));
        setCategoryIds(categoryIds.filter(item => item !== category.value));

      
        //console.log("category Ids + catName", categoryIdsName, categoryIds)
    }

    
    const handleBrandUpdateCovrs =(e) =>{
        console.log(e.target.files);

        
        if (e.target.files[0]) {
            for (let i of e.target.files) {
        
                setUpdateBrandCovers(updateBrandCovers => [...updateBrandCovers, i])
    
            }
        }
       
    }

    const OnBrandUpdateCoverRemove = (img) => {
      
        setUpdateBrandCovers(updateBrandCovers.filter(item => item !== img));

    }
    
    
                         
    const OninitupdateBrandCoversRemove = (img) => {
     
        setInitUpdateBrandCovers(initUpdateBrandCovers.filter(item => item !== img));

        setInitUpdateBrandCoversDeletd([...initUpdateBrandCoversDeletd, img])

    }
    


    //let fileArray =[]
    const handleBrandImages =(e) =>{
        console.log(e.target.files);

        

        /*if (e.target.files[0]) {
        //console.log(e.target.files[0]);
            
            setBrandImages([...brandImages, e.target.files[0]])
            const fileArray = Array.from(brandImages).map((file) => URL.createObjectURL(file))
            console.log("fileArray", fileArray)
        }*/
        if (e.target.files[0]) {
            for (let i of e.target.files) {
        
                setBrandImages(brandImages => [...brandImages, i])
    
            }
        }
       
       
    }
    


    const OnBrandImageRemove = (img) => {
        console.log("img delet", img)
        console.log("brandImages delet", brandImages)
        setBrandImages(brandImages.filter(item => item !== img));

    }
    
    
                    
    const handleBrandLogo =(e) =>{
//setImagel
    if (e.target.files[0]) {
        setBrandLogo( e.target.files[0])
        console.log("brandLogo", brandLogo)
    }

        /*const reader = new FileReader();
        reader.onload =() => {
            if (reader.readyState ===2 ) {
                setImagel(reader.result) 
            } 
        }
        reader.readAsDataURL(e.target.files[0])*/

    }

               
    const handleUpdateBrandLogo =(e) =>{
      
            if (e.target.files[0]) {
                setInitUpdateBrandLogo(null)
                setUpdateBrandLogo( e.target.files[0])
            }
        
        
            }
        

    

    
   /* const OnBrandLogoRemove = (e) => {
        
        setBrandLogo(null);

    }*/

    const onchangeorigin =  (e) =>{
        if(e.target.value ==="") {
            setDisplayCountriesOptions(false)
            //setCountriesOptionsFilter(countriesOptions.filter(j=>{return j.toLowerCase().startsWith(("A").toLowerCase())}))

        }else{
            setDisplayCountriesOptions(true)
        }
        
        setOrigin(e.target.value) 

       // console.log("countriesOptionsFilter", countriesOptionsFilter)
       // console.log("e.target.value", e.target.value)
        setCountriesOptionsFilter(countriesOptions.filter(j=>{return j.toLowerCase().startsWith((e.target.value).toLowerCase())}))
    
       
    }


    const onUpdateBrandOrigin = e => {
        if(e.target.value ==="") {
            setDisplayUpadateCountriesOptions(false)
            //setCountriesOptionsFilter(countriesOptions.filter(j=>{return j.toLowerCase().startsWith(("A").toLowerCase())}))

        }else{
            setDisplayUpadateCountriesOptions(true)
        }

        setUpdateBrandOrigin(e.target.value)

        setCountriesOptionsFilter(countriesOptions.filter(j=>{return j.toLowerCase().startsWith((e.target.value).toLowerCase())}))

    }
    

  /*  const countriesOptionClick =(e, countryselect) => {
        console.log("countryselect", countryselect)
        setDisplayCountriesOptions(false)
        setOrigin(countryselect)

    }
*/

    const OnclickInModel = () => {
        setDisplayCountriesOptions(false)
        setDisplayUpadateCountriesOptions(false)
    }

    


    const OncickdisplayCountriesOptions = (dd) => {
        //setDisplayCountriesOptions(!displayCountriesOptions)
        //console.log('displayCountriesOptions', displayCountriesOptions)
    }



    /*const OnClickNameOption = (e, optionClick) => {
        setNativename("NativeNAMEcLICK")
        console.log("NativeNAMEcLICK", optionClick)
    }*/

    
    const DateFunction = date => {
        //console.log("date", date)
       const month = [
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "10",
          "11",
          "12",
        ];
        
          if (date) {
              const d = new Date(date);
  
              let DateDay = `0${d.getDate()}` 
              
              let dRet = `${d.getFullYear()}-${month[d.getMonth()]}-${DateDay.slice(-2)}`;
              //console.log(d.getMonth())
              //console.log("date =", dRet)
              return dRet;
  
          
  
            }
            return "";          
            //"2013-01-08" Date Format
      }

    /**============================================ */




    //var url = "https://en.wikipedia.org/w/api.php"
    
   /* var params2 = {
        action: "query",
        prop: "revisions",
        rvprop: "content",
        titles: brandName,
        rvsection: "0",
        formatversion: "2",
        format: "json",
        //rvparse : ''   // LIKE html

    }*/



 /*   const OnClickSuggetionButton = async () => {
        
        if (brandName != ''){

               Object.keys(namesReqApiResultWiSort).map(function(key, index) {
                                if (brandName.toUpperCase() == namesReqApiResultWiSort[key].name.toUpperCase()) {
                                    //setNativename(namesReqApiResultWiSort[key].name)
                                    setBrandName(namesReqApiResultWiSort[key].name)
                                    
                                    

                                }

                              
                               
                })
                        
            //setNativename("NativeNAMEcLICK") 
            

            url = url + "?origin=*";
            Object.keys(params2).forEach(function(key){url += "&" + key + "=" + params2[key];});
            
            //url = url + `titles=${brandName}`;


            console.log("url", url)


           
            let TestData 
            let TestDataFinal
            let test 

            fetch(url)
            .then(function(response){return response.json();})
            .then(function(response) {
                 console.log("result !: let fetch", response.query.pages[0].revisions[0].content)
                
                 TestData = response.query.pages[0].revisions[0].content

                 TestDataFinal = TestData.replace(/  +/g, ' ')   //
                 
           

                    if (TestDataFinal.includes("| name =" ) || TestDataFinal.includes("| website" )
                    || TestDataFinal.includes("| ISIN =" ) || TestDataFinal.includes("| native_name " ) ) {                  
                        test = TestDataFinal.split('<br').join('\n').replace(/<ref.*?<\/ref>/g, '').replace(/[\[\]']+/g,'').replace(/[{}]/g, "").split('\n')
                        //test = TestDataFinal.split('\n').join('\n').split('<br').join('\n').split('\n')
                        
                        console.log("Test DataForm  | name =")
                        console.log("test =====", test)
                        
                        
                    } else {
                    if (TestDataFinal.includes("|name =" ) || TestDataFinal.includes("|ISIN =" )) {                  
                        //test = TestDataFinal.split('\n').join('\n').split('<br').join('\n').split('\n')
                        test = TestDataFinal.split('<br').join('\n').replace(/<ref.*?<\/ref>/g, '').replace(/[\[\]']+/g,'').replace(/[{}]/g, "").split('\n')

                        
                    
                        console.log("Test DataForm |name =")
                        console.log("====================", test)
                    }  

                        

                    
                    }
                    return test


            }).then(function(test) {
                console.log("test conole then", test)
                
            if (test) {
                test.map(e => {
                    // console.log("e", e)
                    
                    if (e.includes("ISIN =") ) {
                        console.log("ISIN", e.slice(e.indexOf("ISIN =") + ("ISIN =").length))
                    }

                    let NameInclude 

                    if (e.includes(' name =') ) {
                        NameInclude = (e.slice(e.indexOf(" name =") + (" name =").length)).split(' ').join('')
                        console.log("name", e.slice(e.indexOf(" name =") + (" name = ").length))
                        //console.log("NameInclude", NameInclude)
                    }

                    
                    if (e.includes('native_name =') ) {

                        console.log("native_name", e.slice(e.indexOf("native_name =") + ("native_name =").length))
                        
                        setNativename(e.slice(e.indexOf("native_name =") + ("native_name =").length))

                    }

                    
                    if (e.includes('founded = ') ) {
                        console.log("founded date", e.slice(e.indexOf("founded =") + ("founded =").length))
                    }else {
                        if (e.includes('foundation = ') )
                        console.log("founded date", e.slice(e.indexOf("foundation =") + ("foundations =").length))

                        if (e.includes('introduced = ') ) {
                            console.log("founded date", e.slice(e.indexOf("introduced =") + ("introduced =").length))
                        }


                    }

                    
                    if (e.includes('hq_location_country = ') ) {
                        console.log("Oringin ", e.slice(e.indexOf("hq_location_country =") + ("hq_location_country =").length))
                    }else {
                       
                        if (e.includes('origin =') ) {
                                console.log("Oringin ", e.slice(e.indexOf("origin =") + ("origin =").length))
                            } 
                    }
                    

                    
                    if (e.includes('hq_location_city =') ) {
                        console.log("Headquarters ", e.slice(e.indexOf("hq_location_city =") + ("hq_location_city =").length))
                    } else {
                        if (e.includes('hq_location =') ) {
                        console.log("Headquarters ", e.slice(e.indexOf("hq_location  =") + ("hq_location =").length))
                        } 
                        if (e.includes('region =') ) {
                        console.log("Headquarters ", e.slice(e.indexOf("region =") + ("region =").length))
                        }

                        if (e.includes('location_city =') ) {
                        console.log("Headquarters ", e.slice(e.indexOf("location_city =") + ("location_city =").length))
                        }

                         if (e.includes('location =') ) {
                        console.log("Headquarters ", e.slice(e.indexOf("location =") + ("location =").length))
                        }
                        
                    }


                    if (e.includes('website =') ) {
                        console.log("website  ", e.slice(e.indexOf("website =") + ("website =").length))
                    }else {
                        if (e.includes('url =') ) {
                        console.log("website  ", e.slice(e.indexOf("url =") + ("url =").length))
                        }
                         if (e.includes('homepage =') ) {
                        console.log("website  ", e.slice(e.indexOf("homepage =") + ("homepage =").length))
                        }
                    }

                    if (e.includes('parent =') ) {
                        console.log("parent  ", e.slice(e.indexOf("parent =") + ("parent =").length))
                    }

                    if (e.includes('trading_name =') ) {
                        console.log("trading_name  ", e.slice(e.indexOf("trading_name =") + ("trading_name =").length))
                    }

                    let  LogoInclude 
                    if (e.includes('logo =') ) {
                        console.log("logo ", e.slice(e.indexOf("logo =") + ("logo =").length))
                        LogoInclude = (e.slice(e.indexOf("logo =") + ("logo =").length)).trim().split(' ').join('_')
                        let URLGenerate =(`https://en.wikipedia.org/wiki/Huawei#/media/File:${LogoInclude}`)
                        console.log('logoUrl =', URLGenerate )
                    }

                    
                    

                    })
                    

                    
                    

                }

            })
            .catch(function(error){console.log(error);});   

           
        }
    }
*/

/*===============================================================================*/



    const KeybordNavigationCountries = (e) =>{
          //console.log("KEY PRES")

        if (e.key ==="ArrowDown" ) {
            if (displayCountriesOptions) {
                /*setCursor(cursor+1)
                console.log("cursor", cursor)
                console.log("countriesOptionsFilter[cursor] = ", countriesOptionsFilter[cursor])
                
             
                if(cursor > 1) {
                    document.getElementById(`countryOptionN${cursor-1}`).style.color = "black";
                    document.getElementById(`countryOptionN${cursor}`).style.color = "blue";
    
                }else{
                    if (cursor == 1) {
                        document.getElementById(`countryOptionN0`).style.color = "black";
                    }
                    document.getElementById(`countryOptionN${cursor}`).style.color = "blue";
                }
                

                */
            }
        }

        if (e.key ==="ArrowUp" ) {
           
        }

        if (e.key ==="Escape" ) {
            setDisplayCountriesOptions(false)

        }

        if (e.key ==="Enter" ) {

        }
    }



    //https://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&format=xmlfm&titles=%20Huawei&rvsection=0
    

   /* var params = {

        action: "query",
        //prop: "revisions",
        prop: 'extracts',
        namespace: '0', 
        //titles: `API|${searchBox}`,
        titles: "Huawei",
        rvprop: "content",
        rvslots: "*",
        formatversion: "2",
        format: "json",
    };*/

    //http://en.wikipedia.org/w/api.php?action=query&titles=Al-Farabi&prop=pageimages&format=json&pithumbsize=100

   /* var paramsImags = {
        action: "query",
        //prop: "images",
        //prop: "pageimages",
        //titles: "Huawei",
        format: "json",
        
        //pithumbsize:'100'

        prop : 'pageimages|pageterms',
        //piprop : 'original',
        formatversion : '2'

    };*/



    
    //let searchUrl = `https://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&format=xmlfm&titles=%20Huawei&rvsection=0`

//$requestid=comapany
    /*let ArrayConditionSort = ['brand','brands','sub-brand','company','companies','founded','introduced','corporation', 
                                'markets','marketed','headquartered','started',
                                'produced','Groupe','announced','incorporated','released',
                                'under the name', 'owned by','billion', 'millions','Inc.' ]
                                */

    let urlS = "https://en.wikipedia.org/w/api.php?origin=*" 

    var SearchUrlParam ={
                action: "query",
                prop: 'extracts',
                list: "search",
                //list:'embeddedin',
                //rvprop: "content",
                //titles: "%20huawei",
                //srsearch:'us',
                //rvsection: "0",
                formatversion: "2",
                format: "json",
                srlimit:'20',

                srqiprofile : 'engine_autoselect',
                //srprop:'categorysnippet|extensiondata',
                srsort:'just_match',
               
            
            }

           // let urlTest = "https://en.wikipedia.org/w/api.php?origin=*" 








       /* var TestParms ={
            action: "query",
            list: "search",
            prop: 'pageimages',
            //prop: 'extracts',
            srsearch: "Algeria",
          
            format: "json",
            srlimit:'39',
            srqiprofile : 'engine_autoselect',
            //srprop:'categorysnippet|extensiondata',
            srsort:'just_match'
           
            //srnamespace :'0',

              //namespace :"0",
            //sroffset:"10",  //When more results are available, use this to continue. Defult 0
             
        
            }*/
            
            
    let InitilaArrayResult = []




    const sershWiki = async e => {
        console.log('ArrayConditionSort', ArrayConditionSort)
        //setSearchBrandName(e.target.value)

        if ( (e.target.value !== '' && e.target.value !== undefined )) {
            //let tra= e.target.value
            //let SearchUrl = `https://en.wikipedia.org/w/api.php?origin=*&action=query&prop=extracts&list=search&limit=17&format=json&srsearch=${e.target.value}&srlimit=22`
          
            

            
            /*
           Object.keys(TestParms).forEach(function(key){urlTest += "&" + key + "=" + TestParms[key];});

           console.log("TestParms Serch =", urlTest)
           */

           
           /*const responseTestSEARCH = await fetch(urlTest);
           let responseTestSEARCHrESULT = await responseTestSEARCH.json();

           console.log("responseTestSEARCHrESULT tET /// §§ /!:", responseTestSEARCHrESULT)*/
           /*

           fetch(urlTest)
            .then(function(response){return response.json();  })
            .then(function(response) {
                console.log("responseTestSEARCHrESULT tET /// §§ /!:", response ) 

                if (response.query.search[0].title == "Algeria"){
                    console.log("Your search exisste English Wikipedia" );
                    console.log("result Wikipedia :",  response.query.search[0] );
                   
                }
            })
            .catch(function(error){console.log(error);});
            */



            /**============================== */

           Object.keys(SearchUrlParam).forEach(function(key){urlS += "&" + key + "=" + SearchUrlParam[key];});
            urlS = urlS +`&srsearch=${e.target.value}`
            console.log("SearchUrl =", urlS)

            /*
            const responseSearch = await fetch(urlS);
            let responseSearchresult = await responseSearch.json();

            console.log("response SearchUrl resul", responseSearchresult)


            console.log("response SearchUrl resul", responseSearchresult.query.search)

            setNameReqApiSuggestion(responseSearchresult.query.searchinfo.suggestion)
            console.log("Seggetion Sarch", nameReqApiSuggestion)


            


            let resultArray = responseSearchresult.query.search
            let counterMap = 0
            */

            let resultArray 
            let counterMap = 0
            fetch(urlS)
            .then(function(response){return response.json();})
            .then(function(response) {

                resultArray = response.query.search
                console.log("response SearchUrl resul", response.query.search)

                setNameReqApiSuggestion(response.query.searchinfo.suggestion)
                console.log("Seggetion Sarch", nameReqApiSuggestion)
                return resultArray
              
                


            })
            .then(function(resultArray){
                

                
            resultArray.map( async e =>{
                console.log("title test", e.title)
                 let dd = `https://en.wikipedia.org/w/api.php?origin=*&format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=${e.title}`
 
                 const ddr = await fetch(dd);
                 let ddresult = await ddr.json();
                 //console.log("ddresult  wit result ==)*//", ddresult)
                 //let ArrayConditionSortWithTitel = []
                 //let ttaRR = [tra]
                 //ArrayConditionSortWithTitel = ArrayConditionSort.concat(ttaRR)
                 //ArrayConditionSort 
 
                 Object.keys(ddresult.query.pages).map(function(key, index) {
                     console.log(" => Titel == ", ddresult.query.pages[key].title)

                        //** ImageUrl */
                     
 
                     //console.log("ArrayConditionSortWithTitel", ArrayConditionSortWithTitel)
                     console.log("ArrayConditionSort", ArrayConditionSort)
 
                     console.log(" description", ddresult.query.pages[key].extract)
                     let Counter =0
                   
 
 
                     ArrayConditionSort.map(con=> {    //ver
                         console.log("Type Of", typeof(ddresult.query.pages[key].extract) )
                         if (typeof(ddresult.query.pages[key].extract) === "string")
                             {
                             if ((ddresult.query.pages[key].extract).includes(con)) {
                                 Counter = Counter+1;
                                 //console.log("INCLUDES", con)
                             }}
                         
                     })
 
                     if (typeof(ddresult.query.pages[key].extract) == "string"){
                         if ((ddresult.query.pages[key].extract).includes(brandName)) {
                             Counter = Counter+1;
                             //console.log("INCLUDES", con)
                         }
     
                     }
 
                    
                     InitilaArrayResult.push({name:ddresult.query.pages[key].title, 
                                             description:ddresult.query.pages[key].extract,
                                             Counter: Counter
                                              })
                    
                     console.log(' Counter result = ', Counter)
                     //ArrayConditionSortWithTitel = []
                     
                   });
 
                  
                   counterMap = counterMap +1 
 
                   if (counterMap === resultArray.length ) {
                       console.log('True counterMap ', counterMap)
                       console.log("*******")
                 console.log("*******")
                 console.log("InitilaArrayResult", InitilaArrayResult)
                 let InitilaArrayResultSorByCounter =  InitilaArrayResult.sort(function( a, b ){return b.Counter - a.Counter} )
                 console.log("  ***/ InitilaArrayResult 02 sort",  InitilaArrayResultSorByCounter)
                 setNamesReqApiResultWiSort(InitilaArrayResultSorByCounter)
 
                 
                   }
 
                 console.log("_________________________")
                 
             })
             
            })

            .catch(function(error){console.log(error);});




            /*
            resultArray.map( async e =>{
               console.log("title test", e.title)
                let dd = `https://en.wikipedia.org/w/api.php?origin=*&format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=${e.title}`

                const ddr = await fetch(dd);
                let ddresult = await ddr.json();
              

                Object.keys(ddresult.query.pages).map(function(key, index) {
                    console.log(" => Titel == ", ddresult.query.pages[key].title)
                    

                    //console.log("ArrayConditionSortWithTitel", ArrayConditionSortWithTitel)
                    console.log("ArrayConditionSort", ArrayConditionSort)

                    console.log(" description", ddresult.query.pages[key].extract)
                    let Counter =0
                  


                    ArrayConditionSort.map(con=> {    //ver
                        console.log("Type Of", typeof(ddresult.query.pages[key].extract) )
                        if (typeof(ddresult.query.pages[key].extract) == "string")
                            {
                            if ((ddresult.query.pages[key].extract).includes(con)) {
                                Counter = Counter+1;
                                //console.log("INCLUDES", con)
                            }}
                        
                    })

                    if (typeof(ddresult.query.pages[key].extract) == "string"){
                        if ((ddresult.query.pages[key].extract).includes(brandName)) {
                            Counter = Counter+1;
                            //console.log("INCLUDES", con)
                        }
    
                    }

                   
                    InitilaArrayResult.push({name:ddresult.query.pages[key].title, 
                                            description:ddresult.query.pages[key].extract,
                                            Counter: Counter
                                             })
                   
                    console.log(' Counter result = ', Counter)
                    //ArrayConditionSortWithTitel = []
                    
                  });

                 
                  counterMap = counterMap +1 

                  if (counterMap == resultArray.length ) {
                      console.log('True counterMap ', counterMap)
                      console.log("*******")
                console.log("*******")
                console.log("InitilaArrayResult", InitilaArrayResult)
                let InitilaArrayResultSorByCounter =  InitilaArrayResult.sort(function( a, b ){return b.Counter - a.Counter} )
                console.log("  InitilaArrayResult 02 sort",  InitilaArrayResultSorByCounter)
                setNamesReqApiResultWiSort(InitilaArrayResultSorByCounter)

                
                  }

                console.log("_________________________")
                
            })

            */

                

                  //singers.sort(compare);
                  


            //let dd = `https://en.wikipedia.org/w/api.php?origin=*&format=json&action=query&prop=extracts&explaintext=1&titles=Unix`

           

         


            /*
            url = url + "?origin=*";
            Object.keys(params2).forEach(function(key){url += "&" + key + "=" + params2[key];});

            console.log("url", url)


            const response = await fetch(url);

            console.log("response", response)


            let result = await response.json();
            console.log("result . json", result)

            let TestData = result.query.pages[0].revisions[0].content
            
            console.log("result", result.query.pages[0].revisions[0].content)
            console.log ("______________________________________")
            console.log ("______________________________________")
            */



            //let Z = TestData.slice(TestData.indexOf(Y) + Y.length);

            /*if (TestData.includes('ISIN =') )
            {
            let ISINWI=  TestData.split("ISIN =")[1].split(" ")[1];
            console.log("ISIN :", ISINWI )
            }

             if (TestData.includes('name =') )
            {
            let NameWI=  TestData.split('name =')[1].split(" ")[1];
            console.log("name :", NameWI )
            }*/

            //"a=b,c:d".split('=').join(',').split(':').join(',').split(',')
            //.split(/[<br\n]/) br or line brek
            // test = TestDataFinal.split('\n')
            //replace(/<script.*?<\/script>/g, '')
            //            test = TestDataFinal.split('<br').join('\n').replace(/<ref.*?<\/ref>/g, '').replace(/[{}]/g, "").split('\n')





            //image 

            

            //


              /*================================================ */
             
            /*let urlImages = "https://en.wikipedia.org/w/api.php"
            


            urlImages = urlImages + "?origin=*";
            Object.keys(paramsImags).forEach(function(key){urlImages += "&" + key + "=" + paramsImags[key];});

           
            console.log("urlImages", urlImages)


            const Imageresponse = await fetch(urlImages);

            console.log("Imageresponse", Imageresponse)

            let resultImage = await Imageresponse.json();
            console.log("resultImage", resultImage)
            */




            /*================================================ */






            /*fetch(urlImages)
                .then(function(response){return response.json();})
                .then(function(response) {
                    var pages = response.query.pages;
                    for (var page in pages) {
                        for (var img of pages[page].images) {
                            console.log("img.title",img.title);
                        }
                    }
                })
                .catch(function(error){console.log("error", error);});*/














/*
            let TestDataFinal = TestData.replace(/  +/g, ' ')   //with out spaces


            let test 

             if (TestDataFinal.includes("| name =" ) || TestDataFinal.includes("| ISIN =" )) {                  
                    test = TestDataFinal.split('<br').join('\n').replace(/<ref.*?<\/ref>/g, '').replace(/[\[\]']+/g,'').replace(/[{}]/g, "").split('\n')
                    //test = TestDataFinal.split('\n').join('\n').split('<br').join('\n').split('\n')

                  console.log("test =====", test)
                  
             } else {
              if (TestDataFinal.includes("|name =" ) || TestDataFinal.includes("|ISIN =" )) {                  
                    //test = TestDataFinal.split('\n').join('\n').split('<br').join('\n').split('\n')
                    test = TestDataFinal.split('<br').join('\n').replace(/<ref.*?<\/ref>/g, '').replace(/[\[\]']+/g,'').replace(/[{}]/g, "").split('\n')

                  console.log("test =====", test)
             }  

                
             }


                console.log("____________________")


    */

   /*        
            if (test) {
                        test.map(e => {
                            // console.log("e", e)
                            
                            if (e.includes("ISIN =") ) {
                                console.log("ISIN", e.slice(e.indexOf("ISIN =") + ("ISIN =").length))
                            }

                            let NameInclude 

                            if (e.includes(' name =') ) {
                                NameInclude = (e.slice(e.indexOf(" name =") + (" name =").length)).split(' ').join('')
                                console.log("name", e.slice(e.indexOf(" name =") + (" name =").length))
                                //console.log("NameInclude", NameInclude)
                            }

                            
                            if (e.includes('native_name =') ) {
                                console.log("native_name", e.slice(e.indexOf("native_name =") + ("native_name =").length))
                            }

                            
                            if (e.includes('founded = ') ) {
                                console.log("founded date", e.slice(e.indexOf("founded =") + ("founded =").length))
                            }else {
                                if (e.includes('foundation = ') )
                                console.log("founded date", e.slice(e.indexOf("foundation =") + ("foundations =").length))

                                if (e.includes('introduced = ') ) {
                                    console.log("founded date", e.slice(e.indexOf("introduced =") + ("introduced =").length))
                                }


                            }

                            
                            if (e.includes('hq_location_country = ') ) {
                                console.log("Oringin ", e.slice(e.indexOf("hq_location_country =") + ("hq_location_country =").length))
                            }else {
                               
                                if (e.includes('origin =') ) {
                                        console.log("Oringin ", e.slice(e.indexOf("origin =") + ("origin =").length))
                                    } 
                            }
                            

                            
                            if (e.includes('hq_location_city =') ) {
                                console.log("Headquarters ", e.slice(e.indexOf("hq_location_city =") + ("hq_location_city =").length))
                            } else {
                                if (e.includes('hq_location =') ) {
                                console.log("Headquarters ", e.slice(e.indexOf("hq_location  =") + ("hq_location =").length))
                                } 
                                if (e.includes('region =') ) {
                                console.log("Headquarters ", e.slice(e.indexOf("region =") + ("region =").length))
                                }

                                if (e.includes('location_city =') ) {
                                console.log("Headquarters ", e.slice(e.indexOf("location_city =") + ("location_city =").length))
                                }

                                 if (e.includes('location =') ) {
                                console.log("Headquarters ", e.slice(e.indexOf("location =") + ("location =").length))
                                }
                                
                            }


                            if (e.includes('website =') ) {
                                console.log("website  ", e.slice(e.indexOf("website =") + ("website =").length))
                            }else {
                                if (e.includes('url =') ) {
                                console.log("website  ", e.slice(e.indexOf("url =") + ("url =").length))
                                }
                                 if (e.includes('homepage =') ) {
                                console.log("website  ", e.slice(e.indexOf("homepage =") + ("homepage =").length))
                                }
                            }

                            if (e.includes('parent =') ) {
                                console.log("parent  ", e.slice(e.indexOf("parent =") + ("parent =").length))
                            }

                            if (e.includes('trading_name =') ) {
                                console.log("trading_name  ", e.slice(e.indexOf("trading_name =") + ("trading_name =").length))
                            }

                            let  LogoInclude 
                            if (e.includes('logo =') ) {
                                console.log("logo ", e.slice(e.indexOf("logo =") + ("logo =").length))
                                LogoInclude = (e.slice(e.indexOf("logo =") + ("logo =").length)).trim().split(' ').join('_')
                                let URLGenerate =(`https://en.wikipedia.org/wiki/Huawei#/media/File:${LogoInclude}`)
                                console.log('logoUrl =', URLGenerate )
                            }

                            
                            

                            })
                            

                            
                            
                            //console.log("result", result.query.pages[0].extract)

                        }

                */    
                    }
                
            
                

            }
            
    //fetchSearchInfoBoxes('republic of ireland').then(x => console.log(x))

    
    
    
    const sershWikiSuggetionArrayKeyDown = async DataBrandName => {
        console.log('DataBrandName 7arfi', DataBrandName)

        
        

        if ( DataBrandName!== undefined && DataBrandName!== '') {
            Object.keys(SearchUrlParam).forEach(function(key){urlS += "&" + key + "=" + SearchUrlParam[key];});
            urlS = urlS +`&srsearch=${DataBrandName}`
            console.log("SearchUrl =", urlS)

            
            const responseSearch = await fetch(urlS);
            let responseSearchresult = await responseSearch.json();

            console.log("response SearchUrl resul", responseSearchresult)

            console.log("response SearchUrl resul", responseSearchresult.query.search)

            setNameReqApiSuggestion(responseSearchresult.query.searchinfo.suggestion)
            console.log("Seggetion Sarch", nameReqApiSuggestion)
            

       


            let resultArray = responseSearchresult.query.search
            let counterMap = 0

            resultArray.map( async e =>{
               console.log("title test", e.title)
                let dd = `https://en.wikipedia.org/w/api.php?origin=*&format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=${e.title}`

                const ddr = await fetch(dd);
                let ddresult = await ddr.json();
                //console.log("ddresult  wit result ==)*//", ddresult)
                //let ArrayConditionSortWithTitel = []
                //let ttaRR = [tra]
                //ArrayConditionSortWithTitel = ArrayConditionSort.concat(ttaRR)
                //ArrayConditionSort 

                Object.keys(ddresult.query.pages).map(function(key, index) {
                    console.log(" => Titel == ", ddresult.query.pages[key].title)
                    

                    //console.log("ArrayConditionSortWithTitel", ArrayConditionSortWithTitel)
                    console.log("ArrayConditionSort", ArrayConditionSort)

                    console.log(" description", ddresult.query.pages[key].extract)
                    let Counter =0
                  


                    ArrayConditionSort.map(con=> {    //ver
                        console.log("Type Of", typeof(ddresult.query.pages[key].extract) )
                        if (typeof(ddresult.query.pages[key].extract) == "string")
                            {
                            if ((ddresult.query.pages[key].extract).includes(con)) {
                                Counter = Counter+1;
                                //console.log("INCLUDES", con)
                            }}
                        
                    })

                    if (typeof(ddresult.query.pages[key].extract) == "string"){
                        if ((ddresult.query.pages[key].extract).includes(brandName)) {
                            Counter = Counter+1;
                            //console.log("INCLUDES", con)
                        }
    
                    }

                   
                    InitilaArrayResult.push({name:ddresult.query.pages[key].title, 
                                            description:ddresult.query.pages[key].extract,
                                            Counter: Counter
                                             })
                   
                    console.log(' Counter result = ', Counter)
                    //ArrayConditionSortWithTitel = []
                    
                  });

                 
                  counterMap = counterMap +1 

                  if (counterMap === resultArray.length ) {
                     
                    
                console.log("InitilaArrayResult", InitilaArrayResult)
                let InitilaArrayResultSorByCounter =  InitilaArrayResult.sort(function( a, b ){return b.Counter - a.Counter} )
                console.log("  ***/ InitilaArrayResult 02 sort",  InitilaArrayResultSorByCounter)
                setNamesReqApiResultWiSort(InitilaArrayResultSorByCounter)

                Object.keys(InitilaArrayResultSorByCounter).map(function(key, index) {

                    if (DataBrandName.toUpperCase() === InitilaArrayResultSorByCounter[key].name.toUpperCase()) {
                        setBrandName(InitilaArrayResultSorByCounter[key].name)
                    }
                    
                })
                
                  }

                console.log("_________________________")
                
            })

                

        }
    
    
    }
 





    
    const submitPageForm /* Add Page*/ = (e) => {
       

        const form = new FormData();

        if (brandName === "") {
            alert ("Title is requirde");
            setCreateModal(false);
            return;
        }

        /*const payload = {   
            
            name : brandName,
            categoryId : categoryIds,

            Nativename: nativename,
            tradename: tradename,
            origin :origin,
            Headquarters :headquarters,
            ISIN: ISIN,
            Founded: founded,
            parentId: parentId,
            description: description,
            Website: website,
            
      
            brandPicture: brandImages,
            brandLogo: brandLogo, 
            
           
        };*/


        form.append('name', brandName)

        form.append('Nativename', nativename)

        form.append('tradename', tradename)
        form.append('origin', origin)
        form.append('Headquarters', headquarters)
        form.append('ISIN', ISIN)
        form.append('Founded', founded)
        form.append('parentId', parentId)
        form.append('description', description)
        form.append('Website', website)


        categoryIds.forEach((Id, index ) => {
            form.append('categoryId', Id)
        })
        
        brandImages.forEach((img, index) => {
            form.append('brandPicture', img)
        })

        form.append('brandLogo', brandLogo)
    

       
         /*dispatch(addBrand(brandName, nativename, tradename , origin , headquarters ,ISIN , founded , parentId,
            description, website ,categoryIds, brandImages, brandLogo))*/
            //dispatch(addBrand(payload));
            dispatch(addBrand(form));
    
        setCreateModal(false);
     }

     useEffect(() => {
       
        setRowsData(brand.brands);
      }, [brand.brands]);

      const OnSearchTabl = (e) => {
       // console.log("e.target.value", e.target.value)
            setSearchTaable(e.target.value )
           
           
            if (e.target.value !== "") {
                let rowsFiltr = brand.brands.filter((item) => {

                    if (selectValueSerch === "name")
                    {return item.name.toLowerCase().includes(e.target.value.toLowerCase())}
                    else {
                        if (selectValueSerch === "id")
                        {return item._id.toLowerCase().includes(e.target.value.toLowerCase())}
                        else {
                            if (selectValueSerch === "origin")
                            {return item.origin.toLowerCase().includes(e.target.value.toLowerCase())}
                            else {
                                if (selectValueSerch === "ISIN")
                                {return item.ISIN.toLowerCase().includes(e.target.value.toLowerCase())}
                            }
                        }
                    }
                 })
     
                 setRowsData(rowsFiltr)
            }
            else {
                setRowsData(brand.brands)

            }
       
      }

      const setSearchTaableEmty =e => {
        setSearchTaable('')
        setRowsData(brand.brands)


      }
 

     const columns = [
        { field: 'N', headerName: 'Nº', width: 70 },
        { field: 'id', headerName: 'ID', width: 220 },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'origin', headerName: 'Origin', width: 120 },
        { field: 'ISIN', headerName: 'ISIN', width: 130,} ,
        { field: 'founded', headerName: 'Founded', width: 115,} ,
        { field: 'description', headerName: 'Description', width: 344, sortable: false,} ,
        { field: 'logo', headerName: 'Logo', width: 100, sortable: false, renderCell: (params) =>{
            return (
               <div className="Table-logo-container">
                    <img style ={{maxWidth:"100%"}} src={params.row.logo} alt="Brand logo" />                                            
                </div>
            )
        } } ,

        { field: 'action', headerName: 'Action', width: 110,  sortable: false, renderCell: (params) =>{
            return(
                <>
                <ReadMore className="EditBrandButtonTable"  onClick={() => ShowBrandDetailsModal(params.row.BrandDetails)}  />
                <MdDeleteForever className="DeletBrandButtonTable" />
                </>
            )
        } }

       
       
      ];

      
      let rows = []
      
      
            rowsData.map((brand, index) => (
                rows.push( {N: index+1, id :brand._id, name: brand.name, origin :brand.origin, ISIN : brand.ISIN, 
              founded: DateFunction(brand.Founded) , description : brand.description, logo :  PublicUrlGenerator(brand.brandLogo), BrandDetails:brand  })
            ))
    

    /** */    
    

    










  


















    /** */
      const renderTable02 =() =>{
          return (
            <div style={{ height: 600, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                checkboxSelection
                disableSelectionOnClick
                //disableColumnMenu
               
            />
            </div>
          );

        
       /* return (
            <div style={{ height: 400, width: '100%' }}>
              <TableMu>
                  <TableBody>
                      <TableHead>
                           <TableRow>
                            {HeaderTable.map( HeaderTable =>  (
                                <TableCell key ={HeaderTable.id }>
                                    {HeaderTable.label}
                                </TableCell>
                                )
                                
                                
                                
                                )}
                          </TableRow>
                      </TableHead>

                      <TableRow>
                          <TableCell> Full Name </TableCell>
                          <TableCell> origin </TableCell>
                          <TableCell> description  </TableCell>
                      </TableRow>

                  </TableBody>
              </TableMu>
              
            </div>
          );
          */
      }
   


     const rendreBrandsTable = () =>{
         /*
        return (

        <Table responsive style={{fontSize:14}}>
                                <thead>
                                    <tr>
                                    <th>#</th>
                                    
                                        <th key={1}>Name</th>
                                        <th key={2}>origin</th> 
                                        <th key={3}>description</th>
                                        
                                        <th key={4} style ={{maxWidth:"4vw", display:"flex", justifyContent:"center", alignItems:"center"}}> 
                                        Logo</th>
                                        <th key={5} >
                                        <div className="btnContainerTable">
                                             param
                                        </div>
                                        </th>
                                
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                    brand.brands.length > 0 ?
                                    brand.brands.map((brand, index) =>
                                        
                                        <tr 
                                           
                                            key={brand.id}
                                        >
                                        <td>{index}</td>
                                       
                                            <td key={1}> {brand.name} </td>
                                            <td key={2}> {brand.origin} </td>
                                            <td key={3} className="des-containerTable"> 
                                                <div> 
                                                    {brand.description}
                                                </div>
                                                 
                                               
                                                
                                            </td>
                                            <td key={4} style ={{maxWidth:"4vw", display:"flex", justifyContent:"center", alignItems:"center"}}> 
                                            {brand.brandLogo ?
                                                <img  style ={{maxWidth:"100%"}} src={PublicUrlGenerator(brand.brandLogo)} />                                            
                                            :
                                                <span> __ </span>
                                            }
                                            </td>
                                          
                                            

                                            <td key={5} className="tdbtnContainerTable">
                                                <div className="btnContainerTable">
                                                <button  
                                                onClick={() => ShowBrandDetailsModal(brand)}  >
                                                Details
                                                </button>
                                                <button
                                         
                                                >
                                                Delete
                                                </button>
                                                </div>
                                            </td>
                                        
                                        </tr>)
                                        : null
                                    }

                                   
                                    
                                </tbody>
        </Table>
         ) 
         */                                    
    }
   /* const UpdaeBrandActivitisEmpty = () => {
        setUpdateBrandActivities([]) ;
        setUpdateBrandActivitiesNames([])
     }*/

    const ShowBrandDetailsModal = ( brand ) =>{

        setBrandDetails(brand);
        //console.log("brand", brand)
        setBrandDetailsModal(true);


        //

        setUpdateBrandId(brand._id)
        setUpdateBrandName(brand.name)

        setUpdateBrandNaitvename(brand.Nativename)

        setUpdateBrandTradename(brand.tradename)

        setUpdateBrandOrigin(brand.origin)

        setUpdateBrandHeadquarters(brand.Headquarters)

        setUpdateBrandISIN(brand.ISIN)
        
       
        //setUpdateBrandActivities(brand.Activities)
        

        //brand.Activities.length>0?
        /* brand.Activities.map( categoryI=> {
            setUpdateBrandActivities ( setUpdateBrandActivities => [...updateBrandActivities, categoryI] )
            setUpdateBrandActivitiesNames(setUpdateBrandActivitiesNames=>[...updateBrandActivitiesNames, categoryI.name])}
        ) */
            
        Object.keys(brand.Activities).map(function(key, index) {
                                        
           
                
            setUpdateBrandActivities ( updateBrandActivities => [...updateBrandActivities, brand.Activities[key].categoryId ] )
            
            const categoryName = categories.find(categoryName => categoryName.value === brand.Activities[key].categoryId)
            setUpdateBrandActivitiesNames(updateBrandActivitiesNames => [...updateBrandActivitiesNames,  categoryName.name])
            }
        )
        //:UpdaeBrandActivitisEmpty()
             
        //console.log("brand.Activities", brand.Activities )
        //console.log("Activities", updateBrandActivities )
        //console.log("Activities Names", updateBrandActivitiesNames )
        
        setUpdateBrandFounded(brand.Founded)

        setUpdateBrandParentId(brand.parentId)


        

        setUpdateBrandWebsite(brand.Website)
        setUpdateBrandDescription(brand.description)


        //setUpdateBrandPictures(brand.brandPictures)
        //setUpdateBrandLogo(brand.brandLogo)

        //initUpdateBrndCovers 
        
      
        
        Object.keys(brand.brandPictures).map(function(key, index) {
                                                 
            setInitUpdateBrandCovers ( initUpdateBrandCovers => [...initUpdateBrandCovers, brand.brandPictures[key] ] )
                 console.log("brand.initUpdateBrandCovers", brand.brandPictures[key])
                
            }
        )
        
        setInitUpdateBrandLogo(brand.brandLogo)
        setUpdateBrandLogo(null)
       
    
        
        
        
         
        
         
        
        

      
        
   
       
       /* 
        product.category? setUpdateProductCategoryName(brand.category._id) :setUpdateProductCategoryName("")
        
        if (product.brand) {
            setUpdateProductBrandName(brand.brand._id)
            console.log("product.brand._id", brand.brand._id);                
        }else {
            //console.log("product No Brand", product);                
                            
        }

        setUpdateBrandDescription(brand.description)
        //const [initUpdateProductImages, setInitUpdateProductImages] = useState ("");
        setInitUpdateBrandImages(brand.productPictures)

        setInitUpdateBrandLogo(brand.productPictures)

        setInitUpdateProductImagesDeletd([])
        setInitUpdateProductLogoDeletd()
        */

    }

    
    const handleCloseBrandDetailsModal = () =>{

        setBrandDetailsModal(false);
    }






    /*const handleCloseBrandDetailsModal = () => {}*/

    const UpdateBrand = () => {
        
        setUpdateBrand(true)
        //setErrorInput(false)
    }



    const CancelUpdateBrand = () => {
        setUpdateBrand(false)
        
        //setProductDetailsModal(false)
        //setErrorInput(false)
    }


    const UpdatBrandFormApi = () => {}



    
    
  

    
    let btn1 ={
        label: 'Update Brand',
        color: 'primary',
        onClick: () => UpdateBrand()
    }

    let btn2 ={
        label: 'Close',
        color: 'danger',
        onClick:  () => handleCloseBrandDetailsModal()
    }

    let btn3 = {
        label: 'Cancel',
        color: 'danger',
        onClick: () => CancelUpdateBrand()
    }
    

    
    let btn4 = {
        label: 'Save',
        color: 'warning',
        type : "submit",
        //onClick: () =>   alert('Save New updates')
        onClick: () => UpdatBrandFormApi()
    }

    

    let buttonsModalUppdate= [btn1, btn2]
    updateBrand ? buttonsModalUppdate= [btn3, btn4] :buttonsModalUppdate= [btn1, btn2] 

    
    const renderBrandDetailsModal = () => {

        if (! brandDetails) {
            return null
        }

        return (
            
            <ModalForm 
                modalTitle = {'Brand Details'}
                show = {brandDetatilsModal}
                handleClose= {handleCloseBrandDetailsModal}
                size="lg"
                buttons= {buttonsModalUppdate}
                onClick={()=> OnclickInModel()}

            >

{!updateBrand ?
               
            <>

            <Row>
                <Col md={6}>
                    <label className="key"> Name </label>
                    <p className="value" >{brandDetails.name}</p>
                </Col>

                <Col md={6}>
                    <label className="key"> Nativename </label>
                    <p className="value" >{brandDetails.Nativename}</p>
                </Col>

                <Col md={6}>
                    <label className="key"> origin </label>
                    <p className="value" >{brandDetails.origin}</p>
                </Col>


                <Col md={6}>
                    <label className="key"> Headquarters </label>
                    <p className="value" >{brandDetails.Headquarters}</p>
                </Col>

                <Col md={6}>
                    <label className="key"> ISIN </label>
                    <p className="value" >{brandDetails.ISIN}</p>
                </Col>

                
                <Col md={6}>
                    <label className="key"> Activities </label>
                    <p className="value" >{ /*brandDetails.Activities */}</p>
                </Col>

                <Col md={6}>
                    <label className="key"> Founded </label>
                    <p className="value" >{brandDetails.Founded}</p>
                </Col>

                <Col md={6}>
                    <label className="key"> parentId </label>
                    <p className="value" >{brandDetails.parentId}</p>
                </Col>

                <Col md={6}>
                    <label className="key"> Website </label>
                    <p className="value" >{brandDetails.Website}</p>
                </Col>

                <Col md={12}>
                    <label className="key"> description </label>
                    <p className="value" >{brandDetails.description}</p>
                </Col>

                



                <Col md={12}> <label className="key"> Brand Covers </label> </Col>

                <Col sm={12} style={{ display:"flex", flexWrap:"wrap"}}>

                                {
                                brandDetails.brandPictures.length > 0 ?
                                brandDetails.brandPictures.map((pic, index) =>
                                
                                    <div key={index}  className="prodctsImgsNewArrayUpdate">
                                           
                                           <img src={PublicUrlGenerator(pic.img)} alt= "Brand Cover" />
                                    </div>

                                
                                ) 
                                : null
                                }
            
                </Col>

                            
           
                <Col md={12}>             <label className="key"> Brand Logo </label> </Col>
                            
                            <Col sm={12} style={{ display:"flex", flexWrap:"wrap"}}>

                                            {
                                                brandDetails.brandLogo != null ?
                                        
                                            
                                                <div className="prodctsImgsNewArrayUpdate">
                                                    
                                                    <img src={PublicUrlGenerator(brandDetails.brandLogo)} alt="brand Logo"  />
                                                </div>

                                            
                                            
                                            : null
                                            }
                        
                            </Col>

         
                
            </Row>

            </>

            :
            <>
            {/*===================================================================================== */}
                    
            <Row>
                        <Col className="ColBrandName" data-placeholder={nameReqApiSuggestion} md={6}>
                            <Input
                                className="InputBrandName" 
                                label=" Name "
                               
                                placeholder="Brand Name "

                                value={updateBrandName}
                                type="text"
                                onChange={(e) =>{setUpdateBrandName(e.target.value)}}
           
                            />


                            {/*
                                errorInput ?
                                
                                ((updateProductName.replace(/^\s+|\s+$/g,"")) ? 
                                <FaCheckCircle className="inputIconCheck" />
                                :<FaExclamationCircle className="inputIconNotCheck" />
                                )
                                           
                                :null

                            */} 
                           

                        </Col>

                        <Col md={6}>
                            <Input
                                label=" Nativename "
                                type="text"
                                value = {updateBrandNaitvename}
                                onChange={(e) =>setUpdateBrandNaitvename( e.target.value)}
                                placeholder="ex. 小米集团"
                            />


                            {/*
                                errorInput ?
                                
                                ((updateProductName.replace(/^\s+|\s+$/g,"")) ? 
                                <FaCheckCircle className="inputIconCheck" />
                                :<FaExclamationCircle className="inputIconNotCheck" />
                                )
                                           
                                :null

                            */} 
                            

                        </Col>




                       
            </Row>

   
              

            <Row>
            <Col md={6}>
                            <Input
                                label=" tradename "
                                type="text"
                                value = {updateBrandTradename}
                                onChange={(e) =>setUpdateBrandTradename(e.target.value)}
                                placeholder="ex. MI"
                            />

                            {/*
                                errorInput ?
                                
                                ((updateProductName.replace(/^\s+|\s+$/g,"")) ? 
                                <FaCheckCircle className="inputIconCheck" />
                                :<FaExclamationCircle className="inputIconNotCheck" />
                                )
                                           
                                :null

                            */}                  

            </Col>
                 
            <Col md={6}  onClick={(e) => OncickdisplayCountriesOptions("dd", e)}>
                            <Input
                                label=" origin "
                                type="text"
                                value = {updateBrandOrigin}
                                onChange={(e) =>{onUpdateBrandOrigin(e)}}
                                onKeyDown = {e => KeybordNavigationCountries(e)}
                                placeholder="ex. China"
                            />

                            {/*
                                errorInput ?
                                
                                ((updateProductName.replace(/^\s+|\s+$/g,"")) ? 
                                <FaCheckCircle className="inputIconCheck" />
                                :<FaExclamationCircle className="inputIconNotCheck" />
                                )
                                           
                                :null

                            */}    

                            {displayUpadateCountriesOptions &&
                                (  <div className="autoContainer">
                                    {
                                    countriesOptionsFilter.map((countryOption, index) => {
                                        return(
                                        <div
                                        onClick={()=> setUpdateBrandOrigin(countryOption) }
                                        className="countriesOption" key={index} id={`countryOptionN${index}`}
                                        

                                        
                                        > 
                                            <span> {countryOption} </span>
                                        </div>)
                                    })
                                    }

                            

                                </div>
                                )
                            }
                             

            </Col>
                 
            </Row>


        

          
            <Row>
            <Col md={6}  >
                <Input
                    label=" Headquarters "
                    type="text"
                    value = {updateBrandHeadquarters}
                    onChange={(e) =>setUpdateBrandHeadquarters(e.target.value)}
                    placeholder="ex. Tokyo"
                />
                 {/*
                                errorInput ?    
                                ((updateProductName.replace(/^\s+|\s+$/g,"")) ? 
                                <FaCheckCircle className="inputIconCheck" />
                                :<FaExclamationCircle className="inputIconNotCheck" />
                                )
                                           
                                :null

                            */} 

           </Col>

           <Col md={6}  >
                <Input
                    label=" ISIN "
                    value = {updateBrandISIN}
                    onChange={(e) =>setUpdateBrandISIN( e.target.value)}
                    placeholder="ex. 1987OPM01"
                />
                 {/*
                                errorInput ?    
                                ((updateProductName.replace(/^\s+|\s+$/g,"")) ? 
                                <FaCheckCircle className="inputIconCheck" />
                                :<FaExclamationCircle className="inputIconNotCheck" />
                                )
                                           
                                :null

                            */} 

           </Col>

               
            </Row>




            <Row>
            <Col md={6}  >
                <Input
                    label=" Founded "
                    type="date"
                    value = {DateFunction(updateBrandFounded) /*"2013-01-08"*/ }
                    onChange={(e) =>{setUpdateBrandFounded(e.target.value); console.log("date", e.target.value)}}
                    placeholder="ex. 2014-11-11"
                />
                 {/*
                                errorInput ?    
                                ((updateProductName.replace(/^\s+|\s+$/g,"")) ? 
                                <FaCheckCircle className="inputIconCheck" />
                                :<FaExclamationCircle className="inputIconNotCheck" />
                                )
                                           
                                :null

                            */} 

           </Col>

         
               {/* <Input
                    label=" Parent company "
                    value = {parentId}
                    onChange={(e) =>setParentId( e.target.value)}
                    placeholder="ex. 613494862b85f60c448699fc"
                />
                */}

                 <Col md={6}  >
                <Input
                        label=" Parent company  "
                        type="select"
                        value={updateBrandParentId}
                        onChange={OnParentIdUpdateChange}
                        placeholder="Select"  
                        options = {
                            brandParentIds
                        }            />
                </Col>


                
                
                 {/*
                                errorInput ?    
                                ((updateProductName.replace(/^\s+|\s+$/g,"")) ? 
                                <FaCheckCircle className="inputIconCheck" />
                                :<FaExclamationCircle className="inputIconNotCheck" />
                                )
                                           
                                :null

                            */} 

      
               

            </Row>

            <Row>
            <Col md={6}  >
            <Input
                    label=" Categories "
                    type="select"
                    //value = {updateProductCategoryName}

                     onChange={OnCategoryUpdateChange}
                     placeholder="Select"  
                     options = {
                         categories
                     }            />
            </Col>

            <Col  style={{border : "1px solid #ced4da", margin:"1.98rem 1.05rem", padding:".35rem", borderRadius:"3px", minHeight:'2.4rem',}}>
            {            
                    updateBrandActivitiesNames.length > 0 ?
                    updateBrandActivitiesNames.map((cat, index) =>
                    
                       
                    <div style={{display:"inline-block",  background:"#ced4da", margin:"0rem .4rem .4rem 0", 
                                 paddingRight:"03px", paddingLeft:"5px"   }}>         
                    {cat}  
                    <span onClick={(e) => OnCategoryUpateRemove(cat, e)}
                    style={{ fontSize:"12px", marginLeft:"10px", fontWeight:"700", cursor:"pointer"}}> X </span>
                    </div>
                             
                     

                    
                    ) 
                    : null
               
            }
           
            </Col>
            </Row>


            <Row style={{marginTop:"-1rem"}}>
            <Col md={12}>
                        <label className = "model-titels"> Description </label>

                           
                           <textarea
                           className="textareaDesUpdate"
                           label=" Description "
                           
                           type="text"
                           rows="4" 

                           value = {updateBrandDescription}
                           onChange={(e) =>setUpdateBrandDescription( e.target.value)}
                           placeholder="ex. Xiaomi Corporation ..."
                            
                           
                           />

                            {/*
                                errorInput ?
                                
                                ((updateProductDescription.replace(/^\s+|\s+$/g,"")) ? 
                                <FaCheckCircle className="inputIconCheck" style={{right:"1.4rem"}} />
                                :<FaExclamationCircle className="inputIconNotCheck" style={{right:"2.2rem"}}/>
                                )
                                           
                                :null
                                */
                            } 
                           
                       </Col>
                
            </Row>

         

            <Row>
               
                <Col md={6}  >
                <Input
                    label=" Website "
                    type="text"
                    value = {updateBrandWebsite}
                    onChange={(e) =>setUpdateBrandWebsite( e.target.value)}
                    placeholder="ex. www.mi.com"
                />
                 {/*
                                errorInput ?    
                                ((updateProductName.replace(/^\s+|\s+$/g,"")) ? 
                                <FaCheckCircle className="inputIconCheck" />
                                :<FaExclamationCircle className="inputIconNotCheck" />
                                )
                                           
                                :null

                            */} 

                </Col>
               

            </Row>


    


            <Row style={{ margin:".1rem", padding:"0", marginBottom:"1.5rem",
                         border:"1px solid #DDD "  }} >
           
           
            <Col md={12} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", margin:"0px" }} >
            <label className = "model-titels" style={{fontSize:"1rem", fontWeight:"500"}}  for='ImgsUpdate'>  Brand Covers </label>
            {brandImages.length > 0 ?
                 <label className= "ImgsUpdateCLabel" for='ImgsUpdate' style={{width:'3.4rem', height:"3.4rem", fontSize:"3.1em"}} >
                    <BiAddToQueue />
                 </label>                            

                 : 

                <label className= "ImgsUpdateCLabel" for='ImgsUpdate' >
                    <span>Covers update</span>
                       <BiAddToQueue  />
                   </label>                       

            }
            </Col>

                         <Col md={12}>
                            

                            <div className="productImgconatianer">

                                {initUpdateBrandCovers.map(pic => 
                                    <div className="productImg">
                                         <span onClick={(e) => OninitupdateBrandCoversRemove(pic, e)}> x </span> 

                                        <img src={PublicUrlGenerator(pic.img)} alt="Brand Cover "/>
                                    </div>
                                )}
                                
                                {/*
                                errorInput ?
                                
                                ((!(initUpdateBrndCovers.length <1 && updateProductImages <1 ) ) ? 
                                <FaCheckCircle className="inputIconCheck" style={{top:"5.5rem", right:"2.4rem"}} />
                                :<FaExclamationCircle className="inputIconNotCheck" style={{top:"4.5rem", right:"2.4rem"}}/>
                                )
                                           
                                :null

                                */} 
                                
                            </div>
                        
                            <div className="sepaRow"> </div>
                        </Col >
                      

                               
                                <Col sm={12} style={{ display:"flex", flexWrap:"wrap"}}>
                                {
                                updateBrandCovers.length > 0 ?
                                updateBrandCovers.map((image, index) =>
                                
                                    <div key={index}  className="prodctsImgsNewArrayUpdate">
                                            <span onClick={(e) => OnBrandUpdateCoverRemove(image, e)}> x </span>
                                            <img src = {URL.createObjectURL(image)} alt='Brand Covers' />
                                    </div>

                                
                                ) 
                                : null
                                }




                                 <input
                                        
                                        id='ImgsUpdate'
                                        className = "ImgsUpdateC"
                                        name= "brandImages"
                                        accept ="image/*"
                                        type = 'file'                              
                                        onChange={handleBrandUpdateCovrs}
                                        placeholder="BrandImages"
                                        multiple="multiple"

                                    />
                                   
                           
                                   
                                </Col>
                            </Row>  

                     

   

              <Row style={{ margin:".1rem", padding:"0",
                         border:"1px solid #DDD "  }} >

            <Col md={12} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", margin:"0px" }} >
                <label className = "model-titels" style={{fontSize:"1rem", fontWeight:"500"}} for='LogoUpdate'>  Brand Logo </label>
                {
                     brandLogo != null ?
                    <label className= "ImgsUpdateCLabel" for='LogoUpdate' style={{width:'3.4rem', height:"3.4rem", fontSize:"3.1em"}} >
                    <BiAddToQueue />
                    </label>                            

                    : 

                    <label className= "ImgsUpdateCLabel" for='LogoUpdate' >
                        <span> Logo update </span>
                        <BiAddToQueue  />
                    </label>                            


                }
            </Col>
           
                               
                                <Col >
                                {
                                initUpdateBrandLogo != null ?
                                
                                
                                    <div  className="prodctsImgsNewArrayUpdate">
                                           <span onClick={(e) => setInitUpdateBrandLogo(null) }> x </span> 
                                            <img /*src = {URL.createObjectURL(updateBrandLogo)} */
                                                  src={PublicUrlGenerator(initUpdateBrandLogo)} alt="Brand Logo"/>
                                    </div>

                                
                                 
                                :   updateBrandLogo != null ?
                                    <>
                                    <div  className="prodctsImgsNewArrayUpdate">
                                           <span onClick={(e) => setUpdateBrandLogo(null) }> x </span> 
                                            <img src = {URL.createObjectURL(updateBrandLogo)} alt="Brand Logo" />                                               
                                    </div>
                                    </>
                                    :null
                                }

                              



                                 <input
                                        
                                        id='LogoUpdate'
                                        className = "ImgsUpdateC"
                                       
                                        accept ="image/*"
                                        
                                        placeholder="Brand Logo"

                                        name="brandLogo"
                                       
                                        type="file"
                                        onChange={handleUpdateBrandLogo}

                                    />
                                   
                                       
               
                                   
                                </Col>
                            </Row>  



            {/*============================================================================================ */}
            </>
        }


            
            </ModalForm>
        );

    }








var countriesOptions = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central Arfrican Republic","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cuba","Curacao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauro","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","North Korea","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];







    const renderCreateHomePageModal = () =>{

        return ( 
        <ModalForm
         show = {createModal}
         modalTitle = {'Create New Brand'}
         handleClose= {() => setCreateModal(false)}
         onSubmit= {submitPageForm}
         onClick={()=> OnclickInModel()}
         size="lg" 

         >
 
            {/* <Row>
                 <button onClick={
                     e => OnClickSuggetionButton()
                     }>
                      Show sugettions
                 </button>
             </Row>
             <br/>
                    */}

                <Row>
                        <Col className="ColBrandName" data-placeholder={nameReqApiSuggestion} md={6}>
                            <Input
                                className="InputBrandName" 
                                label=" Name "
                                list="InputBrandNameOptions"
                             
                                value={brandName}
                                onBlur = {(e) => {setDisplayNamesOptions(false) }}
                                placeholder="Ex. Redmi "
                                
                                onChange={(e) => {
                                    setBrandName( e.target.value); 
                                    sershWiki(e);    
                                   if( !e.target.value ===''){setDisplayNamesOptions(true)}else{setDisplayNamesOptions(false)} ;
                                                              
                               }}
       
                               
                                   
                               onKeyDown = {e => { if (e.key === "Enter" && nameReqApiSuggestion !== undefined) {
                                        if( nameReqApiSuggestion !=='') {
                                            setBrandName(nameReqApiSuggestion)
                                            sershWikiSuggetionArrayKeyDown(nameReqApiSuggestion)                                  
                                            setNameReqApiSuggestion('')
                                        }                                          
                                    }}
                               }
                            />


                            {/*
                                errorInput ?
                                
                                ((updateProductName.replace(/^\s+|\s+$/g,"")) ? 
                                <FaCheckCircle className="inputIconCheck" />
                                :<FaExclamationCircle className="inputIconNotCheck" />
                                )
                                           
                                :null

                            */} 
                             <datalist id="InputBrandNameOptions" className="OptionsDATAlist"
                                onClick={() => {  setNativename("NativeNAMEcLICK")  }
                                        }

                                >
                                    {
                                        Object.keys(namesReqApiResultWiSort).map(function(key, index) {
                                        
                                            return(
                                            <option value={namesReqApiResultWiSort[key].name} 
                                                 /*onClick={() => { console.log("Optin Clicked")} }*/
                                            />
                                            )
                                        })
                                    }

                                </datalist>
                            

                        </Col>

                        <Col md={6}>
                            <Input
                                label=" Nativename "
                                type="text"
                                value = {nativename}
                                onChange={(e) =>setNativename( e.target.value)}
                                placeholder="ex. 小米集团"
                            />


                            {/*
                                errorInput ?
                                
                                ((updateProductName.replace(/^\s+|\s+$/g,"")) ? 
                                <FaCheckCircle className="inputIconCheck" />
                                :<FaExclamationCircle className="inputIconNotCheck" />
                                )
                                           
                                :null

                            */} 
                            

                        </Col>




                       
            </Row>

               
{/*
                    
            <Row>
                
                <h5 className = "model-titels">  Brand Name </h5>

                 <Col className="ColBrandName" data-placeholder={nameReqApiSuggestion}>
               

                     <Input className="InputBrandName" 
                        list="InputBrandNameOptions"
                         value = {brandName}
                         onChange={(e) => {
                             setBrandName( e.target.value); 
                             sershWiki(e);
                             
                            if( !e.target.value ==''){setDisplayNamesOptions(true)}else{setDisplayNamesOptions(false)} ;
                                                       
                        }}

                        
                            
                        onKeyDown = {e => { if (e.key ==="Enter" && nameReqApiSuggestion != undefined) {
                            //sershWiki();

                           
                            if( nameReqApiSuggestion !='') {
                                setBrandName(nameReqApiSuggestion)
                                
                                
                                sershWikiSuggetionArrayKeyDown(nameReqApiSuggestion)

                           
                                setNameReqApiSuggestion('')
                            }

                                                         
                                                
                        }}
                        }

                         //onFocus= {(e) => {if (brandName ==''){setDisplayNamesOptions(false)}else {setDisplayNamesOptions(true)}  }}
                         onBlur = {(e) => {setDisplayNamesOptions(false) }}
                         placeholder="Redmi "

                        
                     />
                     

                    

                    <datalist id="InputBrandNameOptions" className="OptionsDATAlist"
                    onClick={() => {  setNativename("NativeNAMEcLICK")  }
                            }

                    >
                        {
                                        Object.keys(namesReqApiResultWiSort).map(function(key, index) {
   
                                                return(
                                                <option value={namesReqApiResultWiSort[key].name} 
                                                     
                                                />
                                                )
                                        })
                        }

                    </datalist>

 
                     

                        displayNamesOptions && 
                            (  <div className="autoContainer">
                                {
                                Object.keys(namesReqApiResultWiSort).map(function(key, index) {
                                   
                                    return(
                                        <div className="countriesOption" key={index} id={`__${index}`}
                                        > 
                                            <span> { namesReqApiResultWiSort[key].name } </span>
                                        </div>)
                                })
                                
                                }

                        

                            </div>
                            )
                        
                        }

                 </Col>
            </Row>
*/}

              

              

            <Row>
            <Col md={6}>
                            <Input
                                label=" tradename "
                                type="text"
                                value = {tradename}
                                onChange={(e) =>setTradename( e.target.value)}
                                placeholder="ex. MI"
                            />

                            {/*
                                errorInput ?
                                
                                ((updateProductName.replace(/^\s+|\s+$/g,"")) ? 
                                <FaCheckCircle className="inputIconCheck" />
                                :<FaExclamationCircle className="inputIconNotCheck" />
                                )
                                           
                                :null

                            */}                  

            </Col>
                 
            <Col md={6}  onClick={(e) => OncickdisplayCountriesOptions("dd", e)}>
                            <Input
                                label=" origin "
                                type="text"
                                value = {origin}
                                onChange={(e) =>{ onchangeorigin(e)}}
                                onKeyDown = {e => KeybordNavigationCountries(e)}
                                placeholder="ex. China"
                            />

                            {/*
                                errorInput ?
                                
                                ((updateProductName.replace(/^\s+|\s+$/g,"")) ? 
                                <FaCheckCircle className="inputIconCheck" />
                                :<FaExclamationCircle className="inputIconNotCheck" />
                                )
                                           
                                :null

                            */}    

                            {displayCountriesOptions &&
                                (  <div className="autoContainer">
                                    {
                                    countriesOptionsFilter.map((countryOption, index) => {
                                        return(
                                        <div
                                        onClick={()=> setOrigin(countryOption) }
                                        className="countriesOption" key={index} id={`countryOptionN${index}`}
                                        

                                        
                                        > 
                                            <span> {countryOption} </span>
                                        </div>)
                                    })
                                    }

                            

                                </div>
                                )
                            }
                             

            </Col>
                 
            </Row>


        

          
            <Row>
            <Col md={6}  >
                <Input
                    label=" Headquarters "
                    type="text"
                    value = {headquarters}
                    onChange={(e) =>setHeadquarters( e.target.value)}
                    placeholder="ex. Tokyo"
                />
                 {/*
                                errorInput ?    
                                ((updateProductName.replace(/^\s+|\s+$/g,"")) ? 
                                <FaCheckCircle className="inputIconCheck" />
                                :<FaExclamationCircle className="inputIconNotCheck" />
                                )
                                           
                                :null

                            */} 

           </Col>

           <Col md={6}  >
                <Input
                    label=" ISIN "
                    value = {ISIN}
                    onChange={(e) =>setISIN( e.target.value)}
                    placeholder="ex. 1987OPM01"
                />
                 {/*
                                errorInput ?    
                                ((updateProductName.replace(/^\s+|\s+$/g,"")) ? 
                                <FaCheckCircle className="inputIconCheck" />
                                :<FaExclamationCircle className="inputIconNotCheck" />
                                )
                                           
                                :null

                            */} 

           </Col>

               
            </Row>




            <Row>
            <Col md={6}  >
                <Input
                    label=" Founded "
                    type="date"
                    value = {founded}
                    onChange={(e) =>setFounded( e.target.value)}
                    placeholder="ex. 2014-11-11"
                />
                 {/*
                                errorInput ?    
                                ((updateProductName.replace(/^\s+|\s+$/g,"")) ? 
                                <FaCheckCircle className="inputIconCheck" />
                                :<FaExclamationCircle className="inputIconNotCheck" />
                                )
                                           
                                :null

                            */} 

           </Col>

         
               {/* <Input
                    label=" Parent company "
                    value = {parentId}
                    onChange={(e) =>setParentId( e.target.value)}
                    placeholder="ex. 613494862b85f60c448699fc"
                />
                */}

                 <Col md={6}  >
                <Input
                        label=" Parent company  "
                        type="select"
                        
                        onChange={OnParentIdChange}
                        placeholder="Select"  
                        options = {
                            brandParentIds
                        }            />
                </Col>
                 {/*
                                errorInput ?    
                                ((updateProductName.replace(/^\s+|\s+$/g,"")) ? 
                                <FaCheckCircle className="inputIconCheck" />
                                :<FaExclamationCircle className="inputIconNotCheck" />
                                )
                                           
                                :null

                            */} 

      
               

            </Row>

            <Row>
            <Col md={6}  >
            <Input
                    label=" Categories "
                    type="select"
                    
                     onChange={OnCategoryChange}
                     placeholder="Select"  
                     options = {
                         categories
                     }            />
            </Col>

            <Col  style={{border : "1px solid #ced4da", margin:"1.98rem 1.05rem", padding:".35rem", borderRadius:"3px", minHeight:'2.4rem',}}>
            {            
                    categoryIdsName.length > 0 ?
                    categoryIdsName.map((cat, index) =>
                    
                       
                    <div style={{display:"inline-block",  background:"#ced4da", margin:"0rem .4rem .4rem 0", 
                                 paddingRight:"03px", paddingLeft:"5px"   }}>         
                    {cat}  
                    <span onClick={(e) => OnCategoryRemove(cat, e)}
                    style={{ fontSize:"12px", marginLeft:"10px", fontWeight:"700", cursor:"pointer"}}> X </span>
                    </div>
                             
                     

                    
                    ) 
                    : null
               
            }
           
            </Col>
            </Row>


            <Row style={{marginTop:"-1rem"}}>
            <Col md={12}>
                        <label className = "model-titels"> Description </label>

                           
                           <textarea
                           className="textareaDesUpdate"
                           label=" Description "
                           
                           type="text"
                           rows="4" 

                           value = {description}
                           onChange={(e) =>setDescription( e.target.value)}
                           placeholder="ex. Xiaomi Corporation ..."
                            
                           
                           />

                            {/*
                                errorInput ?
                                
                                ((updateProductDescription.replace(/^\s+|\s+$/g,"")) ? 
                                <FaCheckCircle className="inputIconCheck" style={{right:"1.4rem"}} />
                                :<FaExclamationCircle className="inputIconNotCheck" style={{right:"2.2rem"}}/>
                                )
                                           
                                :null
                                */
                            } 
                           
                       </Col>
                
            </Row>

         

            <Row>
               
                <Col md={6}  >
                <Input
                    label=" Website "
                    type="text"
                    value = {website}
                    onChange={(e) =>setWebsite( e.target.value)}
                    placeholder="ex. www.mi.com"
                />
                 {/*
                                errorInput ?    
                                ((updateProductName.replace(/^\s+|\s+$/g,"")) ? 
                                <FaCheckCircle className="inputIconCheck" />
                                :<FaExclamationCircle className="inputIconNotCheck" />
                                )
                                           
                                :null

                            */} 

                </Col>
               

            </Row>





            <Row style={{ margin:".1rem", padding:"0", marginBottom:"1.5rem",
                         border:"1px solid #DDD "  }} >
           
           
            <Col md={12} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", margin:"0px" }} >
            <label className = "model-titels" style={{fontSize:"1rem", fontWeight:"500"}}  for='ImgsUpdate'>  Brand Covers </label>
            {brandImages.length > 0 ?
                 <label className= "ImgsUpdateCLabel" for='ImgsUpdate' style={{width:'3.4rem', height:"3.4rem", fontSize:"3.1em"}} >
                    <BiAddToQueue />
                 </label>                            

                 : 

                <label className= "ImgsUpdateCLabel" for='ImgsUpdate' >
                    <span>Add Covers</span>
                       <BiAddToQueue  />
                   </label>                       

            }
            </Col>

                               
                                <Col style={{ display:"flex", flexWrap:"wrap"}}>
                                {
                                brandImages.length > 0 ?
                                brandImages.map((image, index) =>
                                
                                    <div key={index}  className="prodctsImgsNewArrayUpdate">
                                            <span onClick={(e) => OnBrandImageRemove(image, e)}> x </span>
                                            <img src = {URL.createObjectURL(image)} alt="Brand Cover" />
                                    </div>

                                
                                ) 
                                : null
                                }




                                 <input
                                        
                                        id='ImgsUpdate'
                                        className = "ImgsUpdateC"
                                        name= "brandImages"
                                        accept ="image/*"
                                        type = 'file'                              
                                        onChange={handleBrandImages}
                                        placeholder="BrandImages"
                                        multiple="multiple"

                                    />
                                   
                           
                                   
                                </Col>
                            </Row>  

                     
                    




          
          { /* <Row>
            <h5 className = "model-titels">  Brand Covers </h5>

            <Col>
                <Input 
                className="form-control"
                    type = 'file'
                    name= "brandImages"
                    


                    onChange={handleBrandImages}
                    placeholder="BrandImages"
                />
            </Col>
               
            </Row>
            */
}
            
            
                {/* brandImages.length > 0 ?
                  <Row style={{ border : "1px solid #ced4da", margin:".1rem .1rem", padding:".5rem", paddingBottom:"0rem"}} 
                     className="brands-container">
                       {
                        brandImages.length > 0 ?
                        brandImages.map((image, index) =>
                        
                            <div key={index}  className="brands-img">
                                    <span onClick={(e) => OnBrandImageRemove(image, e)}> x </span>
                                    <img src = {URL.createObjectURL(image)} />
                                  
                                                                    
                            
                            </div>

                        
                        ) 
                        : null
                        }
                    </Row>  

                    :null  
                    */  
                }
              
            

   

              <Row style={{ margin:".1rem", padding:"0",
                         border:"1px solid #DDD "  }} >

            <Col md={12} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", margin:"0px" }} >
                <label className = "model-titels" style={{fontSize:"1rem", fontWeight:"500"}} for='LogoUpdate'>  Brand Logo </label>
                {
                     brandLogo != null ?
                    <label className= "ImgsUpdateCLabel" for='LogoUpdate' style={{width:'3.4rem', height:"3.4rem", fontSize:"3.1em"}} >
                    <BiAddToQueue />
                    </label>                            

                    : 

                    <label className= "ImgsUpdateCLabel" for='LogoUpdate' >
                        <span>Add Logo </span>
                        <BiAddToQueue  />
                    </label>                            


                }
            </Col>
           
                               
                                <Col >
                                {
                                brandLogo != null ?
                                
                                
                                    <div  className="prodctsImgsNewArrayUpdate">
                                            <span onClick={(e) => setBrandLogo(null) }> x </span>
                                            <img src = {URL.createObjectURL(brandLogo)} alt="Brand Logo" />
                                    </div>

                                
                                 
                                : null
                                }



                                 <input
                                        
                                        id='LogoUpdate'
                                        className = "ImgsUpdateC"
                                       
                                        accept ="image/*"
                                        
                                        placeholder="Brand Logo"

                                        name="brandLogo"
                                       
                                        type="file"
                                        onChange={handleBrandLogo}

                                    />
                                   
                                       
               
                                   
                                </Col>
                            </Row>  

                     
         



{/*
            <Row>
            <h5 className = "model-titels">  Brand Logo </h5>
            <Col>
                        <Input
                          
                            name="brandLogo"
                            placeholder="Category Name"
                            type="file"
                            onChange={handleBrandLogo}
                        />
                    </Col>
            </Row>
           <Row >
           {
                    

                    brandLogo != null ?
                    
                   
                    
                        
                            <div className="logo-container">
                            
                               <span onClick={(e) => OnBrandLogoRemove(e)}> x </span>
                                <img src = {URL.createObjectURL(brandLogo)} />
                    
                            </div>
                 
                    : null
                    
                }
           </Row>
*/
}
         
















           
 
             
 
         </ModalForm>
         )
     }
 





     



    // let UrlIMG ='https://upload.wikimedia.org/wikipedia/en/0/04/Huawei_Standard_logo.svg'


 


    return (
    <Layout sidebar>

        Brands 
    
        <br /> <br />
        {renderCreateHomePageModal()}


        <Row className="PageHeader">
            <div>
   
            <Button variant="contained" className="AddNewBrandBtn" endIcon={<AddCircleOutline className="AddNewBrandIcon"  />}
            
            onClick={ () => setCreateModal(true)}
            >
            Add new Brand
            </Button>
           
            </div>

            

            <div className="inputContainerSearch">
         
               
            <TextField 
                id="outlined-primary" color="primary" label="Search" variant="outlined"  className='TextFiledSearch' 
                placeholder="By Brand Name... " focused
                value={searchTaable}
                onChange={(e) => OnSearchTabl(e)}

                InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Search className="searcIcon"/>
                      </InputAdornment>
                    ),
                    endAdornment: (
                        <InputAdornment position="end">
                        { searchTaable? <Close className="closeIcon" onClick={e=>setSearchTaableEmty() } /> :null}
                        </InputAdornment>
                      ),
                  }}
              
            /> 
          
         
         
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label" focused >Options</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                //value={age}
                
                onChange={e => {setSelectValueSerch(e.target.value);
                                setSearchTaableEmty()}}
                  className="UlselectMUi"
                  focused
                  value={selectValueSerch}
                >
                <MenuItem value={"name"}>name</MenuItem>
                <MenuItem value={"id"}>ID</MenuItem>
                <MenuItem value={"origin"}>Counrty</MenuItem>
                <MenuItem value={"ISIN"}>ISIN</MenuItem>
                </Select>
            </FormControl>
        
                
          
            </div>


           
          
        </Row>

        {/*<Row>
                <Col md={12}>   

                {rendreBrandsTable()}
                                            
                </Col>
        </Row>

        <Row>
                <h2> Table 02</h2>
        </Row>*/}

        <Row>
                <Col md={12}>   

                {renderTable02()}
                                            
                </Col>
        </Row>

        

        {renderBrandDetailsModal()}

    
        

         
        
    </Layout>
    )
}
