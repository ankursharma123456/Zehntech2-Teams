import { LightningElement,api,wire,track } from 'lwc';
import { loadStyle} from "lightning/platformResourceLoader";
import teamsicons from '@salesforce/resourceUrl/teamsicons';
import customSR from "@salesforce/resourceUrl/custom"
import getManagedContentByContentKeys from "@salesforce/apex/ManagedContentCtrl3.getContent"; //testclass:ManagedContentCtrlTest3
import basePath from "@salesforce/community/basePath";

var network;
//  var count;
//  var name
//  var name1
//  var name2 
//  var name3
//  var name4 
//  var name5
//  var name6
//  var name7 
//  var name8

export default class Zehntech2 extends LightningElement {

  
  @api facebookicon = teamsicons + '/icon/icons8-facebook.svg';
  @api instagramicon = teamsicons + '/icon/icons8-instagram.svg';
  @api linkdinicon = teamsicons + '/icon/icons8-linkedin.svg';
  
    @api networkName;
    // clear image checkbox
    @api footer1 = false;  
    @api footer2 = false;  
    @api footer3 = false;  
    @api footer4 = false;     
    @api footer5 = false; 
    @api footer6 = false; 
    @api footer7 = false; 
    @api footer8 = false; 
    @api footer9 = false; 
    

    @api facebook;
    @api instagram;
    @api linkdin;

    @api facebook1;
    @api instagram1;
    @api linkdin1;

    @api facebook2;
    @api instagram2;
    @api linkdin2;

    @api facebook3;
    @api instagram3;
    @api linkdin3;

    @api facebook4;
    @api instagram4;
    @api linkdin4;

    @api facebook5;
    @api instagram5;
    @api linkdin5;

    @api facebook6;
    @api instagram6;
    @api linkdin6;

    @api facebook7;
    @api instagram7;
    @api linkdin7;

    @api facebook8;
    @api instagram8;
    @api linkdin8;

    
   //ContainerID
   @api contentId;
   @api contentId2;
   @api contentId3;
   @api contentId4;
   @api contentId5;
   @api contentId6;
   @api contentId7;
   @api contentId8;
   @api contentId9;

  @api showButton = false;
  @api componentStyle = false;
  @track shanData;
  @track shanError;
  @api communityId;
  @api communitykey;
    //imagesURL

  @track imageUrl;
  @track imageUrl2;
  @track imageUrl3;
  @track imageUrl4;
  @track imageUrl5;
  @track imageUrl6;
  @track imageUrl7;
  @track imageUrl8;
  @track imageUrl9;

     //Name
     @api name = '';
     @api name1 = '';
     @api name2 = '';
     @api name3 = '';
     @api name4 = '';
     @api name5 = '';
     @api name6 = '';
     @api name7 = '';
     @api name8 = '';
     
     @api position = '';
     @api position1 = '';
     @api position2 = '';
     @api position3 = '';
     @api position4 = '';
     @api position5 = '';
     @api position6 = '';
     @api position7 = '';
     @api position8 = '';

     @track nameCheckBl ;
     
   
     //first div show and hide of social icon

     get firstfacebook(){
      return !!this.facebook;
     }
     get firstInsta(){
      return !!this.instagram;
     }
     get firstLinkedin(){
      return !!this.linkdin;
     }

     //second div show and hide
     get secondfacebook(){
      return !!this.facebook1;
     }

     get secondlinkedin(){
      return !!this.linkdin1;
     }

     get secondinstagram(){
      return !!this.instagram1;
     }

    //third div show and hide
     get thirdfacebook(){
      return !!this.facebook2;
     }

     get thirdlinkedin(){
      return !!this.linkdin2;
     }

     get thirdinsta(){
      return !!this.instagram2;
     }
    // four div show and hide

     get fourfacebook(){
      return !!this.facebook3;
     }

     get fourlinkedin(){
      return !!this.linkdin3;

     }

     get fourinsta(){
      return !!this.instagram3;
      
     }
    //five div show and hide
     get fivefacebook(){
      return !!this.facebook4;
      
     }

     get fivelinkedin(){
      return !!this.linkdin4;
      
     }

     get fiveinsta(){
      return !!this.instagram4;
      
     }
  //six
    get sixfacebook(){
    return !!this.facebook5;
  
    }

    get sixlinkedin(){
    return !!this.linkdin5;
  
     }

    get sixinsta(){
    return !!this.instagram5;
  
    }

//seven

    get sevenfacebook(){
      return !!this.facebook6;
  
    }

    get sevenlinkedin(){
      return !!this.linkdin6;
  
    }

    get seveninsta(){
    return !!this.instagram6;
  
    }


//eight social media icon
    get eightfacebook(){
        return !!this.facebook7;
  
    }

    get eightlinkedin(){
      return !!this.linkdin7;
  
    }

      get eightinsta(){
      return !!this.instagram7;
  
      }
 //nine social media icon
    get ninefacebook(){
      return !!this.facebook8;

    }

    get ninelinkedin(){
    return !!this.linkdin8;

    }

    get nineinsta(){
    return !!this.instagram8;

      }


//show and hide of div when upload image
     get firstdive (){
      return !!this.name;
     }
      get seconddiv(){
        return !!this.name1;
      }
      get thirddiv(){
        return !!this.name2;
      }
      get fourdiv(){
        return !!this.name3;
      }
      get fivediv(){
        return !!this.name4;
      }
      get sixdiv(){
        return !!this.name5;
      }
      get sevendiv(){
        return !!this.name6;
      }
      get eightdiv(){
        return !!this.name7;
      }
      get ninediv(){
        return !!this.name8;
      }
  //div hide 
      get imageOptn() {

        return !!this.name;
    
      }

      get imageOptn1() {

        return !!this.name1;
    
      }

      get imageOptn2() {

        return !!this.name2;
    
      }

      get imageOptn3() {

        return !!this.name3;
    
      }

      get imageOptn4() {

        return !!this.name4;
    
      }

      get imageOptn5() {

        return !!this.name5;
    
      }

      get imageOptn6() {

        return !!this.name6;
    
      }
      get imageOptn7() {

        return !!this.name7;
    
      }
      
      get imageOptn8() {

        return !!this.name8;
    
      }

    


     
     handleClick = () => {
        console.log("You clicked me!");
        console.log("contentId", this.contentkey);
      };
    // 1 profile
      @wire(getManagedContentByContentKeys, {
        contentId: "$contentId",
        page: 0,
        pageSize: 1,
        language: "en_US",
        filterby: "",
        networkName : network,
      })
      managedContent({ error, data }) {
        console.log("it entered the function:");
        if (data) {
          if (data.source) {
            this.imageUrl =
              basePath + "/sfsites/c" + data.source.url;
          }
        } else if (error) {
          console.log("error:", error);
          // Handle the error.
          this.shanError = error;
        }   
      }
   // 2 profile
      @wire(getManagedContentByContentKeys, {
        contentId: "$contentId2",
        page: 0,
        pageSize: 1,
        language: "en_US",
        filterby: "",
        networkName : network,
      })
      managedContent2({ error, data }) {
        console.log("it entered the function:");
        if (data) {
          if (data.source) {
            this.imageUrl2 =
              basePath + "/sfsites/c" + data.source.url;
          }
        } else if (error) {
          console.log("error:", error);
          // Handle the error.
          this.shanError = error;
        }   
      }

      // 3 Profile
      @wire(getManagedContentByContentKeys, {
        contentId: "$contentId3",
        page: 0,
        pageSize: 1,
        language: "en_US",
        filterby: "",
        networkName : network,
      })
      managedContent3({ error, data }) {
        console.log("it entered the function:");
        if (data) {
          if (data.source) {
            this.imageUrl3 =
              basePath + "/sfsites/c" + data.source.url;
          }
        } else if (error) {
          console.log("error:", error);
          // Handle the error.
          this.shanError = error;
        }   
      }

      // 4 Profile
      @wire(getManagedContentByContentKeys, {
        contentId: "$contentId4",
        page: 0,
        pageSize: 1,
        language: "en_US",
        filterby: "",
        networkName : network,
      })
      managedContent4({ error, data }) {
        console.log("it entered the function:");
        if (data) {
          if (data.source) {
            this.imageUrl4 =
              basePath + "/sfsites/c" + data.source.url;
          }
        } else if (error) {
          console.log("error:", error);
          // Handle the error.
          this.shanError = error;
        }   
      }
      // 5 Profile
      @wire(getManagedContentByContentKeys, {
        contentId: "$contentId5",
        page: 0,
        pageSize: 1,
        language: "en_US",
        filterby: "",
        networkName : network,
      })
      managedContent5({ error, data }) {
        console.log("it entered the function:");
        if (data) {
          if (data.source) {
            this.imageUrl5 =
              basePath + "/sfsites/c" + data.source.url;
          }
        } else if (error) {
          console.log("error:", error);
          // Handle the error.
          this.shanError = error;
        }   
      }
      // 6 Profile
      @wire(getManagedContentByContentKeys, {
        contentId: "$contentId6",
        page: 0,
        pageSize: 1,
        language: "en_US",
        filterby: "",
        networkName :network,
      })
      managedContent6({ error, data }) {
        console.log("it entered the function:");
        if (data) {
          if (data.source) {
            this.imageUrl6 =
              basePath + "/sfsites/c" + data.source.url;
          }
        } else if (error) {
          console.log("error:", error);
          // Handle the error.
          this.shanError = error;
        }   
      }
      // 7 Profile
      @wire(getManagedContentByContentKeys, {
        contentId: "$contentId7",
        page: 0,
        pageSize: 1,
        language: "en_US",
        filterby: "",
        networkName : network,
      })
      managedContent7({ error, data }) {
        console.log("it entered the function:");
        if (data) {
          if (data.source) {
            this.imageUrl7 =
              basePath + "/sfsites/c" + data.source.url;
          }
        } else if (error) {
          console.log("error:", error);
          // Handle the error.
          this.shanError = error;
        }   
      }
      // 8 Profile
      @wire(getManagedContentByContentKeys, {
        contentId: "$contentId8",
        page: 0,
        pageSize: 1,
        language: "en_US",
        filterby: "",
        networkName :network,
      })
      managedContent8({ error, data }) {
        console.log("it entered the function:");
        if (data) {
          if (data.source) {
            this.imageUrl8 =
              basePath + "/sfsites/c" + data.source.url;
          }
        } else if (error) {
          console.log("error:", error);
          // Handle the error.
          this.shanError = error;
        }   
      }
      //9 profile
      @wire(getManagedContentByContentKeys, {
        contentId: "$contentId9",
        page: 0,
        pageSize: 1,
        language: "en_US",
        filterby: "",
        networkName :network,
      })
      managedContent9({ error, data }) {
        console.log("it entered the function:");
        if (data) {
          if (data.source) {
            this.imageUrl9 =
              basePath + "/sfsites/c" + data.source.url;
          }
        } else if (error) {
          console.log("error:", error);
          // Handle the error.
          this.shanError = error;
        }   
      }

      
     
     currentPos = 0;
     elements = [];
     directionToNext = true;
     
    //  get nameCheck() {
    //   return !!this.name1 ;
    //  }

     constructor() {
     
      //  count = 0;
      super();
      // console.log("nameCheck", this.nameCheck);
      // console.log("name vale is",this.name);
      // console.log("name1 vale is",this.name1);

      //   if(this.name != null  ){

      //   count=count+1;
        

      // }
      // console.log("value name",this.name);


      // if(this.name1 != null ){

      // count=count + 1;

      // }
      // console.log("value name",this.name1);

      // if(this.name2 != null ){

      //   count=count+1;

      // }

      //  if(this.name3 != null ){

      //   count=count+1;
      // }

      // if(this.name4 != null){

      // count=count+1;

      // } 
      // if(this.name5 != null ){

      //   count=count+1;
  
      //   }
      // if(this.name6 != null ){

      //     count=count+1;
    
      // }
      // if(this.name7 != undefined ){

      //   count=count+1;
  
      // }
      // console.log("Value",name7)
      //  if(this.name8 != null ){

      //    count=count+1;

      //   }
        // console.log('In check Function',count);
   
          for (let i = 0; i < 9; i++) {
              this.elements.push({
                'txt': `Div number : ${i+1}`,
              });
          }
     }
     
     renderedCallback(){
      Promise.all([loadStyle(this,customSR)]);
      network = basePath.split("/")[1];
      console.log("nameCheck",this.nameCheck);
      console.log("networj" , network);
      console.log("netncdcssf",network[1]);
      console.log("basepath",basePath);
      // count = 0;

      // if(this.name != null  ){

      //   count=count+1;
        

      // }
      // console.log("value name",this.name);


      // if(this.name1 != null ){

      // count=count + 1;

      // }
      // console.log("value name",this.name1);

      // if(this.name2 != null ){

      //   count=count+1;

      // }

      //  if(this.name3 != null ){

      //   count=count+1;
      // }

      // if(this.name4 != null){

      // count=count+1;

      // } 
      // if(this.name5 != null ){

      //   count=count+1;
  
      //   }
      // if(this.name6 != null ){

      //     count=count+1;
    
      // }
      // if(this.name7 != undefined ){

      //   count=count+1;
  
      // }
      // console.log("Value",name7)
      //  if(this.name8 != null ){

      //    count=count+1;

      //   }


       
  
       

      //background-color
      this.template
      .querySelector("lightning-layout-item")
      .style.setProperty("--my-bgclr", this.bgdcolor);

      //Name
      this.template //color
      .querySelector("lightning-layout-item")
      .style.setProperty("--my-color", this.namecolor);

      this.template   //font
      .querySelector("lightning-layout-item")
      .style.setProperty("--my-size", this.namefontsize);

       //position
      this.template     //font-size
      .querySelector("lightning-layout-item")
      .style.setProperty("--my-size1", this.namefontsize1);

      this.template     //font-color
      .querySelector("lightning-layout-item")
      .style.setProperty("--my-color1", this.namecolor1);

  
      //Social Media Icon Size
    

      this.template     //change the social media icon color
      .querySelector("lightning-layout-item")
      .style.setProperty("--my-prev", this.prev);  

      console.log("count", this.count);

     }

    //carousel
     
     connectedCallback() {
     
       
        
         // eslint-disable-next-line @lwc/lwc/no-async-operation
         setInterval(() => {
             let c = 0;
             if (Math.floor(this.elements.length / 4) === (this.elements.length / 4)) {
                 c = 1;
             }
             if (this.currentPos === 0) {
                 this.directionToNext = true;
             } else if (this.currentPos === (-(Math.floor(this.elements.length / 4)) + c)) {
                 this.directionToNext = false;
             }
             if (this.directionToNext) {
                 this.next();
             } else {
                 this.previous();
             }
         }, 800000); //set time for carousel
     }

     previous() {
         this.directionToNext = false;
         if (this.currentPos < 0) {
             const a = (this.currentPos) * 100;
             const b = (this.currentPos + 1) * 100;
             let firstDiv = this.template.querySelector(`[data-id="firstDiv"]`);
 
             firstDiv.animate([{
                     transform: `translateX(${a}%)`
                 },
                 {
                     transform: `translateX(${b}%)`
                 }
             ], {
                  duration: 800,
                 fill: "forwards"
             });
             this.currentPos++;
         }
 
     }
     next() {
        
         this.directionToNext = true;
         let c = 0;

        if(this.elements != null || this.elements != ''){

            if (Math.floor(this.elements.length / 4) === (this.elements.length / 4)) {
                c = 1;
            }
            if (this.currentPos > (-(Math.floor(this.elements.length / 4)) + c)) {
                const a = (this.currentPos) * 100;
                const b = (this.currentPos - 1) * 100;
                let firstDiv = this.template.querySelector(`[data-id="firstDiv"]`);
                firstDiv.animate([{
                        transform: `translateX(${a}%)`
                    },
                    {
                        transform: `translateX(${b}%)`
                    }
                ], {
                    duration: 800,
                    fill: "forwards"
                });
                this.currentPos--;
            }
        }

 
     }

     //variable of font color and size
  @api namefontsize;
  @api namecolor;
  @api namefontsize1;
  @api namecolor1;
  @api namefontsize2;
  @api namecolor2;
  @api namefontsize3;
  @api namecolor4;
  @api namefontsize4;
  @api prev;
  @api bgdcolor;

}