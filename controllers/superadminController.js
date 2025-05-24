import connection from '../config.js'
import * as path from 'path';
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

import { sendTokenAdmin } from '../utils/jwtToken.js';


const super_home = async (req, res, next) => {

  res.render('superadmin/index')


}


const login = async (req, res, next) => {
 try {
 res.render('superadmin/login', {output:''})
  } catch (error) {
 res.render('superadmin/error500.ejs')
 }
}  

 export const loginAdmin = async (req,res,next)=>{     

  console.log(req.body)
  
  const con = await connection();  

  const {username,password} = req.body; 
  //if user don't enter email password
  if(!username || !password){    
      // res.json("Please Enter Email and Password")
       res.render('superadmin/login',{'output':'Please Enter Username and Password'})
      
  }
  else 
  {

      const [results] = await con.query('SELECT * FROM tbl_admin WHERE username = ?', [username]);                 
      const admin = results[0];    

       if(!admin){                
         //res.json("Invalid Email & Password")  
        res.render('superadmin/login',{'output':'Invalid Username'})         
          }
           else if (admin.password != password) {
                        
           res.render('superadmin/login',{'output':'Incorrect Password'})   
          }
          else {             
           sendTokenAdmin(admin,200,res)
           }  
   
 
  }    
}

const add_user = async (req, res, next) => {


  try {

    res.render('superadmin/add_user')

  } catch (error) {

    res.render('superadmin/error500.ejs')

  }

}



const view_users = async (req, res, next) => {


  try {

    res.render('superadmin/view_users')

  } catch (error) {

    res.render('superadmin/error500.ejs')

  }

}
const user_Withdrawl_Report = async (req, res, next) => {


  try {

    res.render('superadmin/user_Withdrawl_Report')

  } catch (error) {

    res.render('superadmin/error500.ejs')

  }

}
const User_Documents_mgmt = async (req, res, next) => {


  try {

    res.render('superadmin/User_Documents_mgmt')

  } catch (error) {

    res.render('superadmin/error500.ejs')

  }

}
const Owner_add_Owner = async (req, res, next) => {


  try {

    res.render('superadmin/Owner_add_Owner')

  } catch (error) {

    res.render('superadmin/error500.ejs')

  }

}
const Owner_view_Owner = async (req, res, next) => {


  try {

    res.render('superadmin/Owner_view_Owner')

  } catch (error) {

    res.render('superadmin/error500.ejs')

  }

}
const Owner_Withdrawl_Report = async (req, res, next) => {


  try {

    res.render('superadmin/Owner_Withdrawl_Report')

  } catch (error) {

    res.render('superadmin/error500.ejs')

  }

}

const owner_Documents_mgmt = async (req, res, next) => {


  try {

    res.render('superadmin/owner_Documents_mgmt')

  } catch (error) {

    res.render('superadmin/error500.ejs')

  }

}
const pending_report = async (req, res, next) => {


  try {

    res.render('superadmin/pending_report')

  } catch (error) {

    res.render('superadmin/error500.ejs')

  }

}
const report_Confirm_Report = async (req, res, next) => {


  try {

    res.render('superadmin/report_Confirm_Report')

  } catch (error) {

    res.render('superadmin/error500.ejs')

  }

}
const report_Ongoing_Report = async (req, res, next) => {


  try {

    res.render('superadmin/report_Ongoing_Report')

  } catch (error) {

    res.render('superadmin/error500.ejs')

  }

}
const report_Complete_Report = async (req, res, next) => {


  try {

    res.render('superadmin/report_Complete_Report')

  } catch (error) {

    res.render('superadmin/error500.ejs')

  }

}
const report_Cancel_Report = async (req, res, next) => {


  try {

    res.render('superadmin/report_Cancel_Report')

  } catch (error) {

    res.render('superadmin/error500.ejs')

  }

}

const Vehical_Category_make = async (req, res, next) => {


  try {

    res.render('superadmin/Vehical_Category_make')

  } catch (error) {

    res.render('superadmin/error500.ejs')

  }

}
const Vehical_Model = async (req, res, next) => {


  try {

    res.render('superadmin/Vehical_Model')

  } catch (error) {

    res.render('superadmin/error500.ejs')

  }

}
const Vehical_Type_Vehical = async (req, res, next) => {


  try {

    res.render('superadmin/Vehical_Type_Vehical')

  } catch (error) {

    res.render('superadmin/error500.ejs')

  }

}
const Vehical_Features = async (req, res, next) => {


  try {

    res.render('superadmin/Vehical_Features')

  } catch (error) {

    res.render('superadmin/error500.ejs')

  }

}
const Vehical_View_Vehical = async (req, res, next) => {
 try {
 res.render('superadmin/Vehical_View_Vehical')
  } catch (error) {
 res.render('superadmin/error500.ejs')
 }
}
const Vehial_Promotion_Details = async (req, res, next) => {
 try {
 res.render('superadmin/Vehial_Promotion_Details')
  } catch (error) {
 res.render('superadmin/error500.ejs')
 }
}
const Create_Subadmin = async (req, res, next) => {
 try {
 res.render('superadmin/Create_Subadmin')
  } catch (error) {
 res.render('superadmin/error500.ejs')
 }
}
const Country_Add_Country = async (req, res, next) => {
 try {
 res.render('superadmin/Country_Add_Country')
  } catch (error) {
 res.render('superadmin/error500.ejs')
 }
}
const Multi_Currency = async (req, res, next) => {
 try {
 res.render('superadmin/Multi_Currency')
  } catch (error) {
 res.render('superadmin/error500.ejs')
 }
}
const Setting_page = async (req, res, next) => {
 try {
 res.render('superadmin/Setting_page')
  } catch (error) {
 res.render('superadmin/error500.ejs')
 }
}
const Slide_Add_App_Slider = async (req, res, next) => {
 try {
 res.render('superadmin/Slide_Add_App_Slider')
  } catch (error) {
 res.render('superadmin/error500.ejs')
 }
}
const Video_add_Video = async (req, res, next) => {
 try {
 res.render('superadmin/Video_add_Video')
  } catch (error) {
 res.render('superadmin/error500.ejs')
 }
}
const Notification = async (req, res, next) => {
 try {
 res.render('superadmin/Notification')
  } catch (error) {
 res.render('superadmin/error500.ejs')
 }
}
 
const user_rating = async (req, res, next) => {
 try {
 res.render('superadmin/user_rating')
  } catch (error) {
 res.render('superadmin/error500.ejs')
 }
}   
const owner_Rating = async (req, res, next) => {
 try {
 res.render('superadmin/owner_Rating')
  } catch (error) {
 res.render('superadmin/error500.ejs')
 }
}     
const Refer_Amount_Details = async (req, res, next) => {
 try {
 res.render('superadmin/Refer_Amount_Details')
  } catch (error) {
 res.render('superadmin/error500.ejs')
 }
}     
const Invitation_Amount_Details = async (req, res, next) => {
 try {
 res.render('superadmin/Invitation_Amount_Details')
  } catch (error) {
 res.render('superadmin/error500.ejs')
 }
}      
const Deposits_Fee_Details = async (req, res, next) => {
 try {
 res.render('superadmin/Deposits_Fee_Details')
  } catch (error) {
 res.render('superadmin/error500.ejs')
 }
}        
const faq_owner_faq   = async (req, res, next) => {
 try {
 res.render('superadmin/faq_owner_faq')
  } catch (error) {
 res.render('superadmin/error500.ejs')
 }
}     
const faq_user_faq   = async (req, res, next) => {
 try {
 res.render('superadmin/faq_user_faq')
  } catch (error) {
 res.render('superadmin/error500.ejs')
 }
}  

const Privacy_policy_user   = async (req, res, next) => {
 try {
 res.render('superadmin/Privacy_policy_user')
  } catch (error) {
 res.render('superadmin/error500.ejs')
 }
}  
const Add_coupan_code   = async (req, res, next) => {
 try {
 res.render('superadmin/Add_coupan_code')
  } catch (error) {
 res.render('superadmin/error500.ejs')
 }
}  
const Support_Inquiry   = async (req, res, next) => {
 try {
 res.render('superadmin/Support_Inquiry')
  } catch (error) {
 res.render('superadmin/error500.ejs')
 }
}  
const Support_About   = async (req, res, next) => {
 try {
 res.render('superadmin/Support_About')
  } catch (error) {
 res.render('superadmin/error500.ejs')
 }
}  
const Support_Contact = async (req, res, next) => {
 try {
 res.render('superadmin/Support_Contact')
  } catch (error) {
 res.render('superadmin/error500.ejs')
 }
}  
const Privacy_policy_owner = async (req, res, next) => {
 try {
 res.render('superadmin/Privacy_policy_owner')
  } catch (error) {
 res.render('superadmin/error500.ejs')
 }
}  
const Terms_Condition_user = async (req, res, next) => {
 try {
 res.render('superadmin/Terms_Condition_user')
  } catch (error) {
 res.render('superadmin/error500.ejs')
 }
}  
const Terms_Condition_owner = async (req, res, next) => {
 try {
 res.render('superadmin/Terms_Condition_owner')
  } catch (error) {
 res.render('superadmin/error500.ejs')
 }
}  



//--------------------- Export Start ------------------------------------------
export { super_home, add_user,view_users ,user_Withdrawl_Report ,User_Documents_mgmt ,Owner_add_Owner,Owner_view_Owner,Owner_Withdrawl_Report,owner_Documents_mgmt , pending_report, report_Confirm_Report , report_Ongoing_Report,report_Complete_Report , report_Cancel_Report ,Vehical_Category_make , Vehical_Model , Vehical_Type_Vehical,Vehical_Features,Vehical_View_Vehical, Vehial_Promotion_Details,Create_Subadmin
  ,Country_Add_Country , Multi_Currency ,Setting_page ,Slide_Add_App_Slider , Video_add_Video , Notification ,user_rating , owner_Rating , Refer_Amount_Details , Invitation_Amount_Details ,Deposits_Fee_Details , faq_owner_faq , faq_user_faq  , Privacy_policy_user
  , Add_coupan_code , Support_Inquiry , Support_About , Support_Contact , Privacy_policy_owner ,Terms_Condition_user , Terms_Condition_owner , login
}



