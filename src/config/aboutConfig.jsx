import React from 'react';
import { CodeOutlined, UserOutlined, DatabaseOutlined, RocketOutlined, BugOutlined } from '@ant-design/icons';

export const getAboutConfig = (mainPurple) => ({
    en: {
        whoAmI: "WHO AM I",
        sectionTitle: "About Me",
        mainTitle: (
            <>
                Frontend Developer with a <br />
                Passion for <span style={{ color: mainPurple }}>Full-Stack</span> Growth 🚀
            </>
        ),
        descDesktop1: "Detail-oriented Frontend and Full-Stack Developer with a Bachelor's degree in Information Systems and hands-on experience designing, developing, and deploying web applications using JavaScript, Python, React.js, and Django.",
        descDesktop2: 'Skilled in writing clean, well-structured code, integrating RESTful APIs, and collaborating within cross-functional teams across the full software development lifecycle.',
        descMobile: "Detail-oriented Frontend and Full-Stack Developer with a Bachelor's degree in Information Systems and hands-on experience building dynamic web apps using JavaScript, Python, and React.js.",
        tags: [
            { label: 'Problem Solver', icon: <CodeOutlined style={{ color: mainPurple }} /> },
            { label: 'Clean Code', icon: <span style={{ color: mainPurple, fontFamily: 'monospace', fontWeight: 'bold' }}>{`{}`}</span> },
            { label: 'UI/UX Enthusiast', icon: <UserOutlined style={{ color: mainPurple }} /> },
            { label: 'Bug Slayer', icon: <BugOutlined style={{ color: mainPurple }} /> },
        ],
        features: [
            {
                icon: <CodeOutlined style={{ fontSize: '18px' }} />,
                title: 'Frontend Expertise',
                desc: 'Specialized in building modern, dynamic user interfaces using React, Next.js, TypeScript, and Ant Design.',
            },
            {
                icon: <DatabaseOutlined style={{ fontSize: '18px' }} />,
                title: 'Full-Stack Vision',
                desc: 'Keen understanding of backend logic, handling REST APIs, databases, and full CRUD application flows.',
            },
            {
                icon: <RocketOutlined style={{ fontSize: '18px' }} />,
                title: 'Ready for New Challenges',
                desc: 'Actively seeking professional opportunities as a Frontend / Full-Stack Developer to build impactful apps.',
            },
        ],
    },
    ar: {
        whoAmI: "من أنا",
        sectionTitle: "نبذة عني",
        mainTitle: (
            <>
                مطورة واجهات أمامية شغوفة <br />
                بالتطور في <span style={{ color: mainPurple }}>تطوير البرمجيات المتكاملة</span> 🚀
            </>
        ),
        descDesktop1: "مطورة واجهات أمامية  و برمجيات متكاملة دقيقة التفاصيل، حاصلة على درجة البكالوريوس في نظم المعلومات، لدي خبرة عمليّة في تصميم، وتطوير، ونشر تطبيقات الويب باستخدام JavaScript و Python و React.js و Django.",
        descDesktop2: 'متمكنة من كتابة أكواد نظيفة ومنظمة، وربط واجهات برمجة التطبيقات (RESTful APIs), والعمل بتعاون ضمن فرق متكاملة طوال دورة حياة تطوير البرمجيات.',
        descMobile: "مطورة واجهات أمامية و برمجيات متكاملة دقيقة التفاصيل، حاصلة على درجة البكالوريوس في نظم المعلومات، لدي خبرة عمليّة في بناء تطبيقات الويب الديناميكية باستخدام JavaScript و Python و React.js.",
        tags: [
            { label: 'حالمة بحل المشكلات', icon: <CodeOutlined style={{ color: mainPurple }} /> },
            { label: 'كود نظيف', icon: <span style={{ color: mainPurple, fontFamily: 'monospace', fontWeight: 'bold' }}>{`{}`}</span> },
            { label: 'شغوفة بتطوير واجهات المستخدم', icon: <UserOutlined style={{ color: mainPurple }} /> },
            { label: 'صائدة الأخطاء البرمجية', icon: <BugOutlined style={{ color: mainPurple }} /> },
        ],
        features: [
            {
                icon: <CodeOutlined style={{ fontSize: '18px' }} />,
                title: 'خبرة في الواجهات الأمامية',
                desc: 'متخصصة في بناء واجهات مستخدم حديثة وديناميكية باستخدام React و Next.js و TypeScript و Ant Design.',
            },
            {
                icon: <DatabaseOutlined style={{ fontSize: '18px' }} />,
                title: 'نظرة شاملة (تطوير متكامل)',
                desc: 'فهم عميق لمنطق الواجهة الخلفية ، والتعامل مع REST APIs، وقواعد البيانات، ومسارات تطبيقات CRUD الكاملة.',
            },
            {
                icon: <RocketOutlined style={{ fontSize: '18px' }} />,
                title: 'مستعدة لتحديات جديدة',
                desc: 'أبحث بجدية عن فرص مهنية كمطورة واجهات أمامية أو تطبيقات متكاملة لبناء تطبيقات ذات أثر.',
            },
        ],
    }
});
