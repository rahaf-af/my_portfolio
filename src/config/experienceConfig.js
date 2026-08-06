export const getTimelineData = (isAr) => [
    {
        type: 'education',
        role: isAr ? 'درجة البكالوريوس، نظم المعلومات' : "Bachelor's degree, Information Systems",
        company: isAr ? 'جامعة أم القرى' : 'Umm Al-Qura University',
        period: isAr ? 'سبتمبر 2020 - نوفمبر 2024' : 'Sep 2020 - Nov 2024',
        location: isAr ? 'مكة المكرمة، المملكة العربية السعودية' : 'Makkah, Saudi Arabia',
        description: isAr
            ? 'تخرجت مع أساس قوي في نظم المعلومات، إدارة قواعد البيانات، ومبادئ هندسة البرمجيات.'
            : 'Graduated with a strong foundation in information systems, database management, and software principles.',
        tag: 'Education_01'
    },
    {
        type: 'work',
        role: isAr ? 'مطورة برمجيات متكاملة' : 'Full-stack Developer',
        company: isAr ? 'أكاديمية طويق' : 'Tuwaiq Academy',
        period: isAr ? 'فبراير 2025 - مايو 2025' : 'Feb 2025 - May 2025',
        location: isAr ? 'الرياض، المملكة العربية السعودية • حضوري' : 'Riyadh, Saudi Arabia • On-site',
        description: isAr
            ? 'طورت العديد من تطبيقات الويب باستخدام Django و HTML و CSS و Bootstrap كجزء من معسكر مكثف.'
            : 'Developed multiple web applications using Django, HTML, CSS, and Bootstrap as part of intensive bootcamp.',
        tag: 'Bootcamp_01'
    },
    {
        type: 'work',
        role: isAr ? 'مهندسة برمجيات' : 'Software Engineer',
        company: isAr ? 'أكاديمية السـعودية الرقمية' : 'Saudi Digital Academy',
        period: isAr ? 'أغسطس 2025 - نوفمبر 2025' : 'Aug 2025 - Nov 2025',
        location: isAr ? 'الرياض، المملكة العربية السعودية • عن بُعد' : 'Riyadh, Saudi Arabia • Remote',
        description: isAr
            ? 'طورت تطبيقات الويب و اختبرتها باستخدام Python , Django , Postman بجانب React.js.'
            : 'Developed and tested web applications using Python, Django, and Postman alongside React.js.',
        tag: 'Bootcamp_02'
    },
    {
        type: 'work',
        role: isAr ? 'مطورة واجهات أمامية' : 'Front-End Developer',
        company: 'TechWin',
        period: isAr ? 'نوفمبر 2025 - يوليو 2026' : 'Nov 2025 - Jul 2026',
        location: isAr ? 'مكة المكرمة، المملكة العربية السعودية • هجين' : 'Makkah, Saudi Arabia • Hybrid',
        description: isAr
            ? 'طورت واجهات مستخدم متجاوبة بمستوى الإنتاج من خلال ترجمة تصاميم واجهة المستخدم إلى مكونات React.js.'
            : 'Developed responsive production-level user interfaces by translating UI designs into React.js components.',
        tag: 'Experience_01'
    }
];
