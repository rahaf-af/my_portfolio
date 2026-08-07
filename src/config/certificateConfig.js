export const getCertificateConfig = (isAr) => ({
    myAchievements: isAr ? 'إنجازاتي' : 'MY ACHIEVEMENTS',
    certificatesTitle: isAr ? 'الشهادات' : 'Certificates',
    previewMode: 'PREVIEW_MODE',
    secure: 'SECURE',
    viewFullCert: isAr ? 'عرض الشهادة الكاملة' : 'View Full Certificate',
    coreSkills: isAr ? 'المهارات الأساسية و التقنيات//':'// CORE_SKILLS & TECH',
    verifiedText: isAr 
        ? 'شهادة احترافية موثقة ومتحقق منها رقمياً.' 
        : 'Digitally verified professional certificate.',
    verifiedTextLarge: isAr 
        ? 'معتمدة ومتحقق منها رقمياً لأعلى المعايير المهنية.' 
        : 'Certified and digitally verified for advanced professional standards.',
    credentials: [
        {
            id: 1,
            title: isAr ? 'تطوير  تطبيقات الويب المتكاملة' : 'Full Stack Developement',
            institution: isAr ? 'أكاديمية طويق' : 'Tuwaiq Academy',
            period: isAr ? 'فبراير ٢٠٢٥ - مايو ٢٠٢٥' : 'Feb 2025 - May 2025',
            code: '01 // TWQ_FS',
            skills: ['Python', 'HTML', 'CSS', 'Django', 'Moyasar API'],
            desc: isAr 
                ? 'معسكر مكثف تركز على بناء تطبيقات الويب المتكاملة.' 
                : 'Intensive bootcamp focused on building full-stack web applications.'
        },
        {
            id: 2,
            title: isAr ? 'تطوير الواجهات باستخدام React.js' : 'Interface Development using React.js',
            institution: isAr ? 'أكاديمية طويق' : 'Tuwaiq Academy',
            period: isAr ? 'مايو ٢٠٢٥' : 'May 2025',
            code: '02 // TWQ_R.J',
            skills: ['React.js', 'Dynamic UI'],
            desc: isAr 
                ? 'برنامج في بناء واجهات مستخدم تفاعلية.' 
                : 'Program in building dynamic user interfaces.'
        },
        {
            id: 3,
            title: isAr ? 'هندسة البرمجيات' : 'Software Engineering',
            institution: isAr ? 'SDA' : 'SDA & General Assembly',
            period: isAr ? 'أغسطس ٢٠٢٥ - نوفمبر ٢٠٢٥' : 'Aug 2025 - Nov 2025',
            code: '03 // SDA_SE',
            skills: ['HTML', 'CSS', 'JavaScript', 'Python', 'SQL', 'PostgreSQL', 'Postman', 'React'],
            desc: isAr 
                ? 'معسكر متقدم في هندسة البرمجيات.' 
                : 'Advanced software engineering bootcamp.'
        },
        {
            id: 4,
            title: isAr ? 'تطوير الواجهات الأمامية' : 'Frontend Development',
            institution: isAr ? 'تكوين' : 'Techwin',
            period: isAr ? 'نوفمبر ٢٠٢٥ - يوليو ٢٠٢٦' : 'Nov 2025 - Jul 2026',
            code: '04 // TWN_FD',
            skills: ['Tailwind CSS', 'Ant Design', 'React', 'Responsive Design', 'Netlify', 'AWS'],
            desc: isAr 
                ? 'خبرة عملية واحترافية في تطوير الواجهات الأمامية.' 
                : 'Professional hands-on experience in frontend development.'
        }
    ]
});
