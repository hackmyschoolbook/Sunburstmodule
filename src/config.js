const config = {
    // "curriculaserver": "http://172.1.34.127:5004",
    "curriculaserver": "http://127.0.0.1:5004",

    // "curriculaserver": "https://tlc.krgi.in/erpacademicmkce2021/server",
    "key": "john",
    "batchYear": 2021,
    "totalYear": "2021 - 2025",
    "toolname": "ERP Academic UG",
    "toolShortname": "ERP Academic UG",
    "toolSubName": "UG Batch 2021-2025",
    "studentIDdigits": 12,
    "studentProfile": 1,   //Student Profile View : 1 - ON,  0 - OFF
    "SEMESTER_START": 2021,
    "toolfullname": "ERP Academic UG",
    "institutionName": "Admin pannel sunburst",
    "institutionShortName": "MKCE",
    "collegeName": "MKCE",
    "CLAfullName": "Continous Learning Assessment",
    "CLAshortName": "CLA",
    "signupmsg": "For your Login credentials, pl contact Teaching Learning Centre, KRGI. http://tlc.krgi.in",
    "footer1": "v3.0 © 2020",
    "footer2": "Teaching Learning Centre",
    "mathJaxLib": 'https://tlc.krgi.in/apps/editor/MathJax.js?config=TeX-AMS-MML_HTMLorMML',
    "supportMailID": "support@krgi.in",
    "about": "ERP Academic exploits us to the digital resource development and utilizing the digital resource throUGh e-learning into quality courses and education. The use of technology to maximise the student learning experience is a vibrant area of interest across all tiers of global education",
    "departments": [
        "ALL",
        "CIVIL ENGINEERING",
        "COMPUTER SCIENCE AND ENGINEERING",
        "ELECTRONICS AND COMMUNICATION ENGINEERING",
        "ELECTRONICS AND INSTRUMENTATION ENGINEERING",
        "ELECTRICAL AND ELECTRONICS ENGINEERING",
        "INFORMATION TECHNOLOGY",
        "MECHANICAL ENGINEERING",
        "SCIENCE AND HUMANITIES",
        "ARTIFICIAL INTELLIGENCE AND DATA SCIENCE",
        "ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING",
        "COMPUTER SCIENCE AND BUSINESS SYSTEMS",
        "MASTER OF BUSINESS ADMINISTRATION",
        "MASTER OF COMPUTER APPLICATIONS",
        "ME COMPUTER SCIENCE AND ENGINEERING",
        "ME COMMUNICATION SYSTEMS",
        "ME POWER SYSTEMS ENGINEERING",
        "ME MANUFACTURING ENGINEERING",
        "MASTER OF BUSINESS ADMINISTRATION",
        "MASTER OF COMPUTER APPLICATIONS",
        "ME COMPUTER SCIENCE AND ENGINEERING",
        "ME COMMUNICATION SYSTEMS",
        "ME POWER SYSTEMS ENGINEERING",
        "ME MANUFACTURING ENGINEERING",

    ],
    "departmentsShort": {
        "ALL": "ALL",
        "CIVIL ENGINEERING ": "CE",
        "COMPUTER SCIENCE AND ENGINEERING": "CSE",
        "ELECTRONICS AND COMMUNICATION ENGINEERING": "ECE",
        "ELECTRONICS AND INSTRUMENTATION ENGINEERING": "EIE",
        "ELECTRICAL AND ELECTRONICS ENGINEERING": "EEE",
        "INFORMATION TECHNOLOGY": "IT",
        "MECHANICAL ENGINEERING": "ME",
        "SCIENCE AND HUMANITIES": "S&H",
        "ARTIFICIAL INTELLIGENCE AND DATA SCIENCE": "AI&DS",
        "ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING": "AI&ML",
        "COMPUTER SCIENCE AND BUSINESS SYSTEMS": "CS&BS",
        "MASTER OF BUSINESS ADMINISTRATION": "MBA",
        "MASTER OF COMPUTER APPLICATIONS": "MCA",
        "ME COMPUTER SCIENCE AND ENGINEERING": "ME CSE",
        "ME COMMUNICATION SYSTEMS": "ME CS",
        "ME POWER SYSTEMS ENGINEERING": "ME PSE",
        "ME MANUFACTURING ENGINEERING": "ME ME",

    },


    "courseCategory": [
        "BASIC SCIENCES",
        "HUMANITIES & SOCIAL SCIENCE",
        "ENGINEERING SCIENCES",
        "PROFESSIONAL CORE",
        "PROFESSIONAL ELECTIVE",
        "OPEN ELECTIVE"
    ],
    "apps": [
        { label: "4-Function Calculator", value: "4-Function Calculator", link: "http://tlc.krgi.in/apps/four-function/", svg: '4function' },
        { label: "Scientific Calculator", value: "Scientific Calculator", link: "http://tlc.krgi.in/apps/scientific-calc/", svg: "scientific-calculator" },
        { label: "Graphic Calculator", value: "Graphic Calculator", link: "http://tlc.krgi.in/apps/graphic-calc/gc.html", svg: "graphic" },
        { label: "Matrix Calculator", value: "Matrix Calculator", link: "http://tlc.krgi.in/apps/matrix-calc/", svg: "matrix" },
        { label: "Geometry Calculator", value: "Geometry Calculator", link: "http://tlc.krgi.in/apps/geometry/", svg: "geometry" },
        { label: "3D Calculator", value: "3D Calculator", link: "http://tlc.krgi.in/apps/3dcalculator/", svg: "3dcalc" },
        { label: "ICT Intercative Board", value: "ICT Intercative Board", link: "http://tlc.krgi.in/apps/ictboard/", svg: "ictboard" },
        { label: "HTML-JS Editor", value: "HTML-JS Editor", link: "http://tlc.krgi.in/apps/webeditor/", svg: "webeditor" },
        { label: "WhiteBoard", value: "WhiteBoard", link: "http://tlc.krgi.in/apps/whiteboard/", svg: "whiteboard" },
        { label: "Virtual WhiteBoard", value: "Virtual WhiteBoard", link: "http://tlc.krgi.in/apps/virtualwhiteboard/", svg: "vwhiteboard" },
        { label: "Countdown Timer", value: "Countdown Timer", link: "http://tlc.krgi.in/apps/countdown/", svg: "countdown" },
        { label: "Flowchart Tool", value: "Flowchart Tool", link: "http://tlc.krgi.in/apps/flowchart/", svg: "flowchart" },
        { label: "Online LaTeX Editor", value: "Online LaTeX Editor", link: "http://tlc.krgi.in/apps/latex/", svg: "latex" },
        { label: "LaTeX Equation Editor", value: "LaTeX Equation Editor", link: "http://tlc.krgi.in/apps/latexmath/", svg: "equation" },
        { label: "ICT Circuit", value: "ICT Circuit", link: "http://tlc.krgi.in/apps/circuit/", svg: "circuit" },
        { label: "CAD-3D", value: "CAD-3D", link: "http://tlc.krgi.in/apps/ictcad/", svg: "cad3d" },
        { label: "CAD-2D", value: "CAD-2D", link: "http://tlc.krgi.in/apps/ictcad/sketcher.html#__sample2D__", svg: "cad2d" },
        { label: "8 Bit Assembler", value: "8 Bit Assembler", link: "http://tlc.krgi.in/apps/assembler8bit/", svg: "assembler8bit" },
        { label: "16 Bit Assembler", value: "16 Bit Assembler", link: "http://tlc.krgi.in/apps/assembler16bit/", svg: "assembler16bit" },
        { label: "Automaton Simulator", value: "Automaton Simulator", link: "http://tlc.krgi.in/apps/automatonsimulator/", svg: "automaton" },
        { label: "Mindmap Tool", value: "Mindmap Tool", link: "http://tlc.krgi.in/apps/mindmap/", svg: "mindmap" },
        { label: "Online Spreadsheet", value: "Online Spreadsheet", link: "http://tlc.krgi.in/apps/spreadsheet/", svg: "excel" },
        { label: "Crossword Maker", value: "Crossword Maker", link: "http://tlc.krgi.in/apps/crossword/", svg: "crossword" },
        { label: "WordSearch Generator", value: "WordSearch Generator", link: "http://tlc.krgi.in/apps/word-search-generator/", svg: "wordsearch" },
        { label: "Webcam Capture", value: "Webcam Capture", link: "https://tlc.krgi.in/apps/webcam/", svg: "webcam" },
        { label: "Web PDF Editor", value: "Web PDF Editor", link: "https://tlc.krgi.in/apps/pdfeditor/", svg: "pdf" },
        { label: "Dicom Viewer", value: "Dicom Viewer", link: "https://tlc.krgi.in/apps/u-dicom-viewer/", svg: "file" },
        { label: "Arduino Simulator", value: "Arduino Simulator", link: "https://tlc.krgi.in/apps/netSwarm/", svg: "arduino" },
        { label: "Scilab on Web", value: "Scilab on Web", link: "https://tlc.krgi.in/apps/xcos/", svg: "arduino" },
    ],
    "level1":
        ['Choose', 'Count', 'Cite', 'Define', 'Describe', 'Distinguish', 'Draw', 'Find', 'Group', 'Identify', 'Know', 'Label', 'List', 'Listen', 'Locate', 'Match', 'Memorize', 'Name', 'Outline', 'Quote', 'Read', 'Repeat', 'Recall', 'Recite', 'Relate', 'Review', 'Recognize', 'Record', 'Reproduce', 'Select', 'State', 'Sequence', 'Show', 'Sort', 'Tell', 'Underline', 'Write',],
    "level2":
        ['Account for', 'Annotate', 'Associate', 'Comprehend', 'Convert', 'Conclude', 'Define', 'Defend', 'Describe', 'Distinguish', 'Demonstrate', 'Discuss', 'Estimate', 'Explain', 'Extend', 'Generalize', 'Gives', 'examples', 'Infer', 'Interpret', 'Identify', 'Predict', 'Illustrate', 'Rewrite', 'Observe', 'Report', 'Outline', 'Restate', 'Paraphrase', 'Retell', 'Research', 'Review', 'Recognize', 'Reorganize', 'Summarize', 'Translate'],
    'level3':
        ['Apply', 'Adapt', 'Change', 'Collect', 'Choose', 'Compute', 'Calculate', 'Construct', 'Draw', 'Dramatize', 'Demonstrate', 'Exhibit', 'Interview', 'Illustrate', 'Interpret', 'Make', 'Manipulate', 'Operate', 'Prepare', 'Produce', 'Practice', 'Sequence', 'Role-play', 'Transfer', 'Select', 'Translate', 'Show', 'Use'],
    'level4':
        ['Appraise', 'Analyze', 'Arrange', 'Break', 'down', 'Characterize', 'Classify', 'Compare', 'Contrast', 'Calculate', 'Criticize', 'Debate', 'Deconstruct', 'Deduce', 'Detect', 'Diagram', 'Differentiate', 'Discriminate', 'Dissect', 'Distinguish', 'Draw', 'Examine', 'Infer', 'Experiment', 'Inquire', 'Group', 'Inspect', 'Identify', 'Investigate', 'Illustrate', 'Outline', 'Order', 'Probe', 'Question', 'Relate', 'Research', 'Select', 'Separate', 'Sequence', 'Survey', 'Test'],
    'level5':
        ['Appraise', 'Argue', 'Assess', 'Choose', 'Compare', 'Conclude', 'Contrast', 'Criticize', 'Critique', 'Debate', 'Decide', 'Deduce', 'Defend', 'Describe', 'Determine', 'Discriminate', 'Evaluate', 'Explain', 'Interpret', 'Infer', 'Justify', 'Prove', 'Judge', 'Probe', 'Measure', 'Rank', 'Predict', 'Rate', 'Prioritize', 'Relate', 'Revise', 'Recommend', 'Reject', 'Score', 'Summarize', 'Support', 'Select', 'Validate', 'Value'],
    'level6':
        ['Assemble', 'Act', 'Blend', 'Categorize', 'Combine', 'Compile', 'Compose', 'Construct', 'Create', 'Devise', 'Design', 'Develop', 'Explain', 'Forecast', 'Formulate', 'Generate', 'Integrate', 'Invent', 'Improve', 'Imagine', 'Modify', 'Plan', 'Make', 'Prepare', 'Organize', 'Produce', 'Originate', 'Propose', 'Perform', 'Predict', 'Rearrange', 'Reconstruct', 'Relate', 'Reorganize', 'Revise', 'Rewrite', 'Summarize', 'Set up', 'Tell', 'Write'],
    "bloomstaxonomy": ["", "Remember", "Understand", "Apply", "Analyze", "Evaluate", "Create"],
    "firstPageSlogans": [
        "To enable the development of skills engaging latest learning technologies as aids to teaching-learning process.",
        "ERP Academic exploits us to the digital resource development and utilizing the digital resource throUGh e-learning into quality courses and education",
        "Learning is the process of acquiring new understanding, knowledge, behaviors, skills, values, attitudes, and preferences.",
        "E-learning refers to a learning system that we can obtain throUGh the internet using an electronic device.",
    ]
};

export default config;
//  keys: CreateCourses : "createnewcourse"&& Full Import / Export : "johnblesswinC"
//  "curriculaserver": "http://127.0.0.1:5000",
//  "curriculaserver": "http://172.1.34.102:5002",
//  "curriculaserver": "http://tlc.krgi.in/curricula/server",
//  "curriculaserver": "https://care.srmist.edu.in/dmcurricula/server",
//  Array.from({length: 5}, (v, k) => console.log(k+1));