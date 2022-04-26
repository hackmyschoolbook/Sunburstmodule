const sunburst_config={
    
    
    label:"MCQ TOOL"  ,
    level:1,
    child:[ {
        "name": "Basic Details",
        "parent": "Semester Information",
        size: "110000",
    },
    {
        "name": "Registered Courses",
        "parent": "Semester Information",
        size: "140000",
    },
    {
        "name": "Attendance Performa",
        "parent": "Semester Information",
        size: "140000"
    }],
    level_one_children:2,
    level_two:1,
    server:'192.168.121.41:5004',
    key:'circle'
    

    

}
    // for(var i=0;i<level_one_children;i++){
    //     sunburst_config={...sunburst_config,}

    // }
export default sunburst_config