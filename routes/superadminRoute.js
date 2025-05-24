import express from 'express'
import { Add_coupan_code, add_user, Country_Add_Country, Create_Subadmin, Deposits_Fee_Details, faq_owner_faq, faq_user_faq, Invitation_Amount_Details, login, loginAdmin, Multi_Currency, Notification, Owner_add_Owner, owner_Documents_mgmt, owner_Rating, Owner_view_Owner, Owner_Withdrawl_Report, pending_report, Privacy_policy_owner, Privacy_policy_user, Refer_Amount_Details, report_Complete_Report, report_Confirm_Report, report_Ongoing_Report, Setting_page, Slide_Add_App_Slider, super_home, Support_About, Support_Contact, Support_Inquiry, Terms_Condition_owner, Terms_Condition_user, User_Documents_mgmt, user_rating, user_Withdrawl_Report, Vehial_Promotion_Details, Vehical_Category_make, Vehical_Features, Vehical_Model, Vehical_Type_Vehical, Vehical_View_Vehical, Video_add_Video, view_users } from '../controllers/superadminController.js';
import { isAuthenticatedAdmin } from '../middleware/Adminauth.js';



const router = express.Router(); 


//------------- Routing Start -----------------------

router.route('/').get( isAuthenticatedAdmin , super_home)

router.route('/login').get(login)
router.route('/login').post(loginAdmin)

router.route('/add_user').get(add_user)

router.route('/view_users').get(view_users)
router.route('/user_Withdrawl_Report').get(user_Withdrawl_Report)
router.route('/User_Documents_mgmt').get(User_Documents_mgmt)
router.route('/Owner_add_Owner').get(Owner_add_Owner)
router.route('/Owner_view_Owner').get(Owner_view_Owner)
router.route('/Owner_Withdrawl_Report').get(Owner_Withdrawl_Report)
router.route('/owner_Documents_mgmt').get(owner_Documents_mgmt)
router.route('/pending_report').get(pending_report)
router.route('/report_Confirm_Report').get(report_Confirm_Report)
router.route('/report_Ongoing_Report').get(report_Ongoing_Report)
router.route('/report_Complete_Report ').get(report_Complete_Report)
router.route('/Vehical_Category_make').get(Vehical_Category_make)
router.route('/Vehical_Model').get(Vehical_Model)
router.route('/Vehical_Type_Vehical').get(Vehical_Type_Vehical)
router.route('/Vehical_Features').get(Vehical_Features)  
 router.route('/Vehical_View_Vehical').get(Vehical_View_Vehical)  
 router.route('/Vehial_Promotion_Details').get( Vehial_Promotion_Details) 
 router.route('/Create_Subadmin').get( Create_Subadmin)   
 router.route('/Country_Add_Country').get( Country_Add_Country)     
  router.route('/Multi_Currency').get( Multi_Currency)      
router.route('/Setting_page').get( Setting_page)       
router.route('/Slide_Add_App_Slider').get(  Slide_Add_App_Slider)    
router.route('/Video_add_Video').get( Video_add_Video)     
router.route('/Notification').get(  Notification)    
router.route('/user_rating').get( user_rating)    
router.route('/owner_Rating').get(owner_Rating)      
router.route('/Refer_Amount_Details').get(Refer_Amount_Details)        
router.route('/Invitation_Amount_Details').get(Invitation_Amount_Details)    
router.route('/Deposits_Fee_Details').get(Deposits_Fee_Details)     
router.route('/faq_owner_faq').get(faq_owner_faq)        
router.route('/faq_user_faq').get(faq_user_faq)    
router.route('/Privacy_policy_user').get(Privacy_policy_user)   
router.route('/Add_coupan_code').get( Add_coupan_code)       
router.route('/Support_Inquiry').get( Support_Inquiry)    
router.route('/Support_About').get(Support_About)      
router.route('/Support_Contact').get(Support_Contact)      
router.route('/Privacy_policy_owner').get(Privacy_policy_owner)    
router.route('/Terms_Condition_user').get(Terms_Condition_user)      
router.route('/Terms_Condition_owner').get(Terms_Condition_owner)    
//------------- Routing End  -----------------------


export default router





















