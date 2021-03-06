const data = {
    course_Structure: [
        "Basic Sciences",
        "Humanities & Social Science",
        "Engineering Sciences",
        "Professional Core",
        "Professional Elective",
        "Open Elective"],
    PROGRAM_OUTCOMES: {
        PLO1: "Engineering knowledge",
        PLO2: "Problem analysis",
        PLO3: "Design/development of solutions",
        PLO4: "Conduct investigations of complex problems",
        PLO5: "Modern tool usage",
        PLO6: "The engineer and society",
        PLO7: "Environment and sustainability",
        PLO8: "Ethics",
        PLO9: "Individual and team work",
        PLO10: "Communication",
        PLO11: "Project management and finance",
        PLO12: "Life-long learning"
    },
    OUTCOMES: [
        {
            DEPT: "CSE",
            PEO: {
                PEO1: 'To enable graduates to pursue higher education and research, or have a successful career in industries associated with Computer Science and Engineering, or as entrepreneurs. To ensure that graduates will have the ability and attitude to adapt to emerging technological changes.',
            },
            PLO: {
                PLO1: "Apply the knowledge of mathematics, science, engineering fundamentals and an engineering specialization to the solution of complex engineering problems.",
                PLO2: "Identify, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.",
                PLO3: "Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations.",
                PLO4: "Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.",
                PLO5: "Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations.",
                PLO6: "Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.",
                PLO7: "Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.",
                PLO8: "Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.",
                PLO9: "Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.",
                PLO10: "Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.",
                PLO11: "Demonstrate knowledge and understanding of the engineering and management principles and apply these to one???s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.",
                PLO12: "Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.",
            },
            PSO: {
                PSO1: "To analyze, design and develop computing solutions by applying foundational concepts of Computer Science and Engineering.",
                PSO2: "To apply software engineering principles and practices for developing quality software for scientific and business applications.",
                PSO3: "To adapt to emerging Information and Communication Technologies (ICT) to innovate ideas and solutions to existing/novel problems.",
            }
        },
        {
            DEPT: "ECE",
            PEO: {
                PEO1: "Equip the students with sufficient theoretical, analytical and initiative skills in Basic Sciences and Engineering necessary, to assimilate, analyze, synthesis and innovate solutions to meet societal needs.",
                PEO2: "To provide adequate research ambience enabling the students to inculcate thirst for life long learning and sustained research interest.",
                PEO3: "To instill and practice values, leadership qualities and team spirit to promote entrepreneurship and indigenization.",
            },
            PLO: {
                PLO1: "Ability to apply technical knowledge in mathematics, Science and Engineering leading to the realization and evaluation of complex systems, through research problems in the context of evolving societal needs ",
                PLO2: "Imaginative critical thinking with an ability to think critically, analyze and solve engineering problems ",
                PLO3: "Ability to design a system, component, or process to meet desired needs within realistic constraints.",
                PLO4: "Ability to, gather user needs and requirements, design, develop, integrate, and test complex systems by employing systems engineering thinking and processes, within required operational and acquisition system environments.",
                PLO5: "Personal and intellectual autonomy to independently and with an openness to reflect upon and use modern engineering tools necessary to engineering practices ",
                PLO6: "Educational practices necessary to understand the impact of engineering solutions in a global, economical, environmental and societal context.",
                PLO7: "An active and committed global citizen with an awareness of contemporary issues and their Impact on economic, environmental, social, political, ethical, health and safety, manufacturability and sustainability.",
                PLO8: "An understanding of professional, ethical, legal issues and responsibilities ",
                PLO9: "A creative, enterprising team player and engaged participative leader able to effect ",
                PLO10: "A confident, resilient and adaptable individual with good communication skills ",
                PLO11: "Exercise their responsibilities in the management of cost-effective systems product development by leading and participating in interdisciplinary teams",
                PLO12: "Active exploration of new ideas through lifelong learning."
            },
            PSO: {
                PSO1: "The curriculum of ECE includes mathematics and Engineering topics necessary to analyse and design complex Electronic Systems containing Hardware and Software components.",
                PSO2: "The curriculum of ECE includes mathematics and Engineering topics necessary to analyse and design complex Communication Systems containing Hardware and Software components.",
                PSO3: "The curriculum of ECE includes mathematics and Engineering topics necessary to analyse and design complex Communication Systems containing Hardware and Software components.",
            }
        },
        {
            DEPT: "IT",
            PEO: {
                PEO1: "Demonstrate core competence in basic engineering and mathematics to design, formulate, analyze, and solve hardware/software engineering problems.",
                PEO2: "Develop insights in foundational areas of Information Technology and related engineering to address real-world problems using digital and cognitive technologies.",
                PEO3: "Collaborate with industry, academic and research institutions for state-of-the- art product development and research.",
                PEO4: "Inculcate a high degree of professionalism, effective communication skills and team spirit to work on multidisciplinary projects in diverse environments.",
                PEO5: "Practice high ethical values and technical standards.",
            },
            PLO: {
                PLO1: "Apply knowledge of mathematics, basic science and engineering science.",
                PLO2: "Identify, formulate and solve engineering problems.",
                PLO3: "Design a system or process to improve its performance, satisfying its constraints.",
                PLO4: "Conduct experiments & collect, analyze and interpret the data.",
                PLO5: "Apply various tools and techniques to improve the efficiency of the system.",
                PLO6: "Conduct themselves to uphold the professional and social obligations.",
                PLO7: "Design the system with environment consciousness and sustainable development.",
                PLO8: "Interact in industry, business and society in a professional and ethical manner.",
                PLO9: "Function in a multidisciplinary team.",
                PLO10: "Proficiency in oral and written communication.",
                PLO11: "Implement cost effective and improved system.",
                PLO12: "Continue professional development and learning as a life-long activity.",
            },
            PSO: {
                PSO1: "Ability to apply programming principles and practices for the design of software solutions in an internet-enabled world of business and social activities.",
                PSO2: "Ability to identify the resources to build and manage the IT infrastructure using the current technologies in order to solve real world problems with an understanding of the tradeoffs involved in the design choices.",
                PSO3: "Ability to plan, design and execute projects for the development of intelligent systems with a focus on the future.",
            },
        },
        {
            DEPT: "EEE",
            PEO: {
                PEO1: "Find employment in Core Electrical and Electronics Engineering and service sectors.",
                PEO2: "Get elevated to technical lead position and lead the organization competitively.",
                PEO3: "Enter into higher studies leading to post-graduate and research degrees. Become consultant and provide solutions to the practical problems of core organization.",
                PEO4: "Become an entrepreneur and be part of electrical and electronics product and service industries.",
            },
            PLO: {
                PLO1: "Apply knowledge of mathematics, basic science and engineering science.",
                PLO2: "Identify, formulate and solve engineering problems.",
                PLO3: "Design an electrical system or process to improve its performance, satisfying its constraints.",
                PLO4: "Conduct experiments in electrical and electronics systems and interpret the data.",
                PLO5: "Apply various tools and techniques to improve the efficiency of the system.",
                PLO6: "Conduct themselves to uphold the professional and social obligations.",
                PLO7: "Interacting industry, business and society in a professional and ethical manner.",
                PLO8: "Function in a multidisciplinary team.",
                PLO9: "Design the system with environment consciousness and sustainable development.",
                PLO10: "Proficiency in Oral and written Communication",
                PLO11: "Implement cost effective and improved system.",
                PLO12: "Continue professional development and learning as a life-long activity.",
            },
            PSO: {
                PSO1: "Foundation of Electrical engineering: Ability to understand the principles and working of electrical components, circuits and systems, that are forming a part of power generation, transmission, distribution, energy saving. Students can assess the power management, auditing, crisis and saving aspects.",
                PSO2: "Foundations of power system development: Ability to understand the structure and development methodologies of electrical systems using knowledge on circuits, electronics for automation and control. Possess professional skills and knowledge of electrical system modeling and design of small and large systems. Familiarity and practical competence with a broad range of practice through experimentation on electrical circuits, electronic circuits and programming platforms.",
                PSO3: "Foundation of mathematical concepts: Ability to apply mathematical methodologies to solve computation task, model real world problem using appropriate engineering tools and suitable algorithm.",
                PSO4: "Applications of Computing and Research Ability: Ability to use knowledge in various domains to identify research gaps and hence to provide solution leading to new ideas and innovations.",
            }
        },
        {
            DEPT: "EIE",
            PEO: {
                PEO1: "Be successful in their technical, professional careers & in their chosen fields such as Electronics, Instrumentation, Process Control & Information Technology.",
                PEO2: "Engross in the life long process of learning to keep themselves abreast of new developments in the emerging areas of Electronics, Instrumentation, Process Control & Information Technology.",
                PEO3: "Start their own company or nurture innovative ideas and creativity in their work place.",
                PEO4: "Uphold the highest integrity and social responsibility in all their endeavors.",
                PEO5: "Exhibit leadership and inter-personal skills.",
            },
            PLO: {
                PLO1: "Apply the Mathematical knowledge and the basics of Science and Engineering to solve the problems pertaining to Electronics and Instrumentation Engineering.",
                PLO2: "Identify and formulate Instrumentation Engineering problems from research literature and be able to analyze the problem using first principles of Mathematics and Engineering Sciences.",
                PLO3: "Come out with solutions for the complex problems and to design system components or process that fulfill the particular needs taking into account public health and safety and the social, cultural and environmental issues.",
                PLO4: "Draw well-founded conclusions applying the knowledge acquired from research and research methods including design of experiments, analysis and interpretation of data and synthesis of information and to arrive at significant conclusion.",
                PLO5: "Form, select and apply relevant techniques, resources and Engineering and IT tools for Engineering activities like electronic prototyping, modeling and control of systems/processes and also being conscious of the limitations.",
                PLO6: "Understand the role and responsibility of the Professional Instrumentation Engineer and to assess societal, health, safety issues based on the reasoning received from the contextual knowledge.",
                PLO7: "Be aware of the impact of professional Engineering solutions in societal and environmental contexts and exhibit the knowledge and the need for sustainable Development.",
                PLO8: "Apply the principles of Professional Ethics to adhere to the norms of the engineering practice and to discharge ethical responsibilities.",
                PLO9: "Function actively and efficiently as an individual or a member/leader of different teams and multidisciplinary projects.",
                PLO10: "Communicate efficiently the engineering facts with a wide range of engineering community and others, to understand and prepare reports and design documents; to make effective presentations and to frame and follow instructions.",
                PLO11: "Demonstrate the knowledge and understanding of Engineering and Management principles and to apply these to one???s own work as a member / leader in a team to manage Electronics / Instrumentation / Control and Automation projects.",
                PLO12: "Recognize the need for self and life-long learning, keeping pace with technological challenges in the broadest sense.",
            },
            PSO: {
                PSO1: "Be able to Select, install, calibrate and maintain instruments used for measurement and analysis and interpret the data obtained to arrive at a significant conclusion.",
                PSO2: "Be able to analyze, design and develop signal conditioning circuits for sensors, actuators and select a suitable Embedded System for realizing various control schemes and smart instruments.",
                PSO3: "Be able to design, develop and implement control schemes for various industrial processes and gain hands on experience in configuring Industrial Automation System such as PLC and DCS.",
            }
        },
        {
            DEPT: "ME",
            PEO: {
                PEO1: "To provide the students a solid foundation in mathematical, scientific and engineering knowledge required to comprehend, analyze, design and develop innovative solutions for real time problems.",
                PEO2: "To impart the students a spirit of team work, effective communication and a commitment to professional ethics.",
                PEO3: "To imbibe the students and faculty with a desire for lifelong learning and successful career with professional excellence.",
                PEO4: "To create and maintain an ambience for Industry ??? Institute Collaborations.",
            },
            PLO: {
                PLO1: "Apply knowledge of mathematics, basic science and engineering science.",
                PLO2: "Identify, formulate and solve engineering problems.",
                PLO3: "Design an electrical system or process to improve its performance, satisfying its constraints.",
                PLO4: "Conduct experiments in electrical and electronics systems and interpret the data.",
                PLO5: "Apply various tools and techniques to improve the efficiency of the system.",
                PLO6: "Conduct themselves to uphold the professional and social obligations.",
                PLO7: "Interacting industry, business and society in a professional and ethical manner.",
                PLO8: "Function in a multidisciplinary team.",
                PLO9: "Design the system with environment consciousness and sustainable development.",
                PLO10: "Proficiency in Oral and written Communication",
                PLO11: "Implement cost effective and improved system.",
                PLO12: "Continue professional development and learning as a life-long activity.",
            },
            PSO: {
                PSO1: "Apply the knowledge gained in Mechanical Engineering for design and development and manufacture of engineering systems.",
                PSO2: "Apply the knowledge acquired to investigate research oriented problems in mechanical engineering with due consideration for environmental and social impacts.",
                PSO3: "Use the engineering analysis and data management tools for effective management of multidisciplinary projects.",
            }
        },
        {
            DEPT: "CE",
            PEO: {
                PEO1: "gain knowledge and skills in Civil engineering which will enable them to have a career and professional accomplishment in the public or private sector organisations ",
                PEO2: "become consultants on complex real life Civil Engineering problems related to Infrastructure development especially housing, construction, water supply, sewerage, transport, spatial planning.",
                PEO3: "become entrepreneurs and develop processes and technologies to meet desired infrastructure needs of society and formulate solutions that are technically sound, economically feasible, and socially acceptable.",
                PEO4: "perform investigation for solving Civil Engineering problems by conducting research using modern equipment and software tools.",
                PEO5: "function in multi-disciplinary teams and advocate policies, systems, processes and equipment to support civil engineering.",
            },
            PLO: {
                PLO1: "Apply the knowledge of mathematics, science and engineering fundamentals to the conceptualization of Civil Engineering models ",
                PLO2: "Identify, formulate and solve Civil Engineering problems ",
                PLO3: "Design solutions for complex Civil Engineering problems and design systems, components or processes that meet specified needs with appropriate consideration for public health and safety, cultural, societal and Civil engineering considerations.",
                PLO4: "Conduct investigations of Civil Engineering problems including literature survey, application of appropriate research methodologies, analysis and interpretation of data, and synthesis of information to provide valid conclusions ",
                PLO5: "Create, select and apply appropriate techniques and modern engineering tools including prediction and modelling software, with due understanding of the limitations.",
                PLO6: "Function effectively as an individual and as a member or leader in diverse teams and in multi-disciplinary settings and demonstrating a capacity for self-management and teamwork, decision-making based on open-mindedness, objectivity and rational analysis.",
                PLO7: "Communicate effectively on Civil Engineering issues with the engineering community and with society at large, and write reports and make effective presentations.",
                PLO8: "Demonstrate understanding of the societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to Civil Engineering practice.",
                PLO9: "Understand and commit to professional ethics and responsibilities of Civil Engineers and to contribute to the society for sustainable development.",
                PLO10: "Understand the socio economic impact of Civil Engineering solutions and demonstrate knowledge of sustainable development ",
                PLO11: "Demonstrate a knowledge and understanding of management and business practices, such as risk and change management, and understand their limitations ",
                PLO12: "Develop ability to engage in independent and life-long learning to improve competence by critical examination of the outcomes of one???s actions in addressing Civil Engineering issues and learning from corrective and preventive measures.",
            },
            PSO: {
                PSO1: "Demonstrate in-depth knowledge of Civil Engineering discipline, with an ability to evaluate, analyze and synthesize existing and new knowledge.",
                PSO2: "Critically analyze complex Civil Engineering problems, apply independent judgment for synthesizing information and make innovative advances in a theoretical, practical and policy context.",
                PSO3: "Conceptualize and solve Civil Engineering problems, evaluate potential solutions and arrive at technically feasible, economically viable and environmentally sound solutions with due consideration of health, safety, and socio cultural factors.",
            },
        },
        {
            DEPT: "CS&BS",
            PEO: {
                PEO1: 'To enable graduates to pursue higher education and research, or have a successful career in industries associated with Computer Science and Engineering, or as entrepreneurs. To ensure that graduates will have the ability and attitude to adapt to emerging technological changes.',
            },
            PLO: {
                PLO1: "Apply the knowledge of mathematics, science, engineering fundamentals and an engineering specialization to the solution of complex engineering problems.",
                PLO2: "Identify, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.",
                PLO3: "Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations.",
                PLO4: "Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.",
                PLO5: "Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations.",
                PLO6: "Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.",
                PLO7: "Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.",
                PLO8: "Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.",
                PLO9: "Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.",
                PLO10: "Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.",
                PLO11: "Demonstrate knowledge and understanding of the engineering and management principles and apply these to one???s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.",
                PLO12: "Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.",
            },
            PSO: {
                PSO1: "To analyze, design and develop computing solutions by applying foundational concepts of Computer Science and Engineering.",
                PSO2: "To apply software engineering principles and practices for developing quality software for scientific and business applications.",
                PSO3: "To adapt to emerging Information and Communication Technologies (ICT) to innovate ideas and solutions to existing/novel problems.",
            }
        },
        {
            DEPT: "AI&ML",
            PEO: {
                PEO1: 'To enable graduates to pursue higher education and research, or have a successful career in industries associated with Computer Science and Engineering, or as entrepreneurs. To ensure that graduates will have the ability and attitude to adapt to emerging technological changes.',
            },
            PLO: {
                PLO1: "Apply the knowledge of mathematics, science, engineering fundamentals and an engineering specialization to the solution of complex engineering problems.",
                PLO2: "Identify, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.",
                PLO3: "Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations.",
                PLO4: "Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.",
                PLO5: "Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations.",
                PLO6: "Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.",
                PLO7: "Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.",
                PLO8: "Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.",
                PLO9: "Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.",
                PLO10: "Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.",
                PLO11: "Demonstrate knowledge and understanding of the engineering and management principles and apply these to one???s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.",
                PLO12: "Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.",
            },
            PSO: {
                PSO1: "To analyze, design and develop computing solutions by applying foundational concepts of Computer Science and Engineering.",
                PSO2: "To apply software engineering principles and practices for developing quality software for scientific and business applications.",
                PSO3: "To adapt to emerging Information and Communication Technologies (ICT) to innovate ideas and solutions to existing/novel problems.",
            }
        },
        {
            DEPT: "AI&DS",
            PEO: {
                PEO1: 'To enable graduates to pursue higher education and research, or have a successful career in industries associated with Computer Science and Engineering, or as entrepreneurs. To ensure that graduates will have the ability and attitude to adapt to emerging technological changes.',
            },
            PLO: {
                PLO1: "Apply the knowledge of mathematics, science, engineering fundamentals and an engineering specialization to the solution of complex engineering problems.",
                PLO2: "Identify, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.",
                PLO3: "Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations.",
                PLO4: "Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.",
                PLO5: "Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations.",
                PLO6: "Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.",
                PLO7: "Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.",
                PLO8: "Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.",
                PLO9: "Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.",
                PLO10: "Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.",
                PLO11: "Demonstrate knowledge and understanding of the engineering and management principles and apply these to one???s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.",
                PLO12: "Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.",
            },
            PSO: {
                PSO1: "To analyze, design and develop computing solutions by applying foundational concepts of Computer Science and Engineering.",
                PSO2: "To apply software engineering principles and practices for developing quality software for scientific and business applications.",
                PSO3: "To adapt to emerging Information and Communication Technologies (ICT) to innovate ideas and solutions to existing/novel problems.",
            }
        },
    ]

};
export default data;