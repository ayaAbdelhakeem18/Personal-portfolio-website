import img1 from "../assets/1.webp";
import img2 from "../assets/2.png";
import img3 from "../assets/3.webp";
import section3img from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";
import img7 from "../assets/7.jpg";
import img8 from "../assets/8.webp";
import img9 from "../assets/9.jpg";
import img10 from "../assets/10.webp";
import img13 from "../assets/13.jpg";
import img14 from "../assets/14.jpg";

const content={

//NAV BAR LINKS NAMES  *they will appear in the same order*

    nav_links:[
    "Home"         ,
    "My-canvas"    ,
    "My-Journey"   ,
    "Work-samples" ,
    "Comissions"   ,
    "Contact me"
    ],

//header section ( home page )

    header:
    {
        name:
       "Ellen downing",
        role:
        "Visual artist",
        description:
        "I've been painting for eight years. While being an artist is a difficult tug-of-war between my inner dreamer and critic, I've grown to love this process a lot. It hasn't just taught me much about the world, but also about myself.",
    //Cover image in the home page    
        imgOne:{
            src: img1 ,
            alt:""   ,
        },
    //mini image in the home page
        imgTwo:{
            src: img2,
            alt:""   ,
        },
        
        button:
        "Contact me"
    },

//Second section that represents info about your work    

    section2:
    {
        mainHeading:
        "MY canva",
        img:{
            src:img3,
            alt:""
        },
        bold_Paragraph:
        "I specialize in oil on canvas and abstract concepts.",
        text_Paragraph:
        "While I've been trained in different mediums, I found a deep connection to traditional paintings. I love how it communicates so much of the creator to the audience. Ironically, the communication feels easier in the abstract.",
    },

//third section (achievements & educational background)    

    section3:
    {
        mainHeading:
        "my Journey",

        item1:{
            src: section3img   ,
            alt: ""
        },

        item2:{
            heading:
            "Education and Artist Residencies",
            list:[
                "Undergraduate Fine Arts Program at Trempleway Academy","Post-graduate Degree in Abstract Painting from Salguerro University","Artist-in-Residence at Salguerro Art Studios","Artist-in-Residence at Crystalshore Creative Retreats",
            ]},

        item3:{
            heading:
            "Galleries and Exhibits",
            list:[
                "Salguerro Sun Gallery (guest artist)","RKND Fine Arts Studio (group show)","Crystalshore Art Gallery (solo exhibit)"
            ]},
    },

//4th section for your work samples , special work & quote    

    section4:
    {
       mainHeading:
       "Work SAMPLES",
       work_list:[
       {img:img4,name:"VERSUS",dimension:" 24 x 36",concept:"Light and Space",year:"2020"},
       {img:img5,name:"RIGHTEOUS ANGER",dimension:" 24 x 36",concept:"Faces of Red",year:"2021"},
       {img:img6,name:"COLORS OF WAR",dimension:" 24 x 36",concept:" Rainbow of Life",year:"2022"}
    ],
  //special work page 
       special_section:{
    //The image behind your special work
        section_img:{
            src:img7,
            alt:""
        },special_work:{
            img:img8,name:"BLOOMING",dimension:"20 x 20",concept:"Secret Corners",year:"2023"}},
   //Quote page
       quote_section:{
        section_img:{
            src:img9  ,
            alt:""    ,
        },
        quote:" EVERYTHING IS EMOTION, TO HAVE SOMEONE ELSE FEEL THE SAME AS I DO IS A TINY MIRACLE "
    },
    },

//Commision & purchase info section

    section5:
    {    
        img:{
            src:img10,
            alt:""
        },
        mainHeading:
        "COMMISSION"
        ,firstdiv:{
            header:
            "TWO SLOTS PER MONTH",
            p:
            "In order to ensure quality and to be able to give my clients as much attention as possible, I only open two slots for commissions every month. "},
        seconddiv:{
            header:
            "TIMELINE",
            p:
            "Pricing and timeline will also depend on the difficulty of the commissioned artowrk. Feel free to message me for inquiries."},
    },

//Contact information section  

    contact:{
    bigimg:{
        src:img14,
        alt:""
    },
    smallimg:{
        src:img13,
        alt:""
    },
    mainHeading:
    "CONTACT ME",
    contact_info:{
        address:"123 ANYWHERE ST., ANY CITY STATE, COUNTRY 12345",
        phone:"(123) 456 7890",
        email:"HELLO@REALLYGREATSITE.COM",
        facebook_link:"",
        twitter_link:"",
        instagram_link:"",
    }
    },
}

export default content;
