import React from 'react';
import { GrGroup } from "react-icons/gr";
import { RiShoppingBag3Line } from "react-icons/ri";
import { IoSparklesOutline } from "react-icons/io5";
import { GiSewingMachine } from "react-icons/gi";

import Maqas from '../assets/Maqas.PNG';
import Aniverse from '../assets/Aniverse.PNG';
import Lafesta from '../assets/Lafesta.PNG';
import Lavendra from '../assets/Lavendra.PNG';

export const getProjectsConfig = (lang = 'en') => {
    const isAr = lang === 'ar';

    return {
        sectionHeader: {
            badge: isAr ? "معرض أعمالي" : "My Portfolio",
            title: isAr ? "المشاريع المميزة" : "Featured Projects",
        },
        projects: [
            {
                id: 1,
                title: isAr ? "Lafesta - منصة تأجير الفساتين" : "Lafesta - Dress Rental Platform",
                description: isAr
                    ? "تطبيق ويب متكامل لتأجير الفساتين مدمج مع مسارات دفع آمنة وإدارة إعادة توجيه بوابة الدفع."
                    : "A full-stack dress rental web application integrated with secure checkout workflows and payment gateway redirection handling.",
                image: Lafesta,
                tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Django', 'Moyasar API'],
                icon: <RiShoppingBag3Line />,
            },
            {
                id: 2,
                title: isAr ? "Aniverse - منصة مجتمع الأنمي" : "Aniverse - Anime Community Platform",
                description: isAr
                    ? "منصة مجتمع أنمي متكاملة تضم منشورات مستخدمين ديناميكية، تفاعلات وإعجاباعات وتعليقات، ووظائف CRUD كاملة للتفاعل المجتمعي."
                    : "A full-stack anime community platform featuring dynamic user posts, community interactions like likes and comments, and full CRUD functionality for community engagement.",
                image: Aniverse,
                tags: ['React.js', 'Django', 'PostgreSQL', 'Postman'],
                icon: <GrGroup />,
            },
            {
                id: 3,
                title: isAr ? "Maqas - نظام إدارة مشغل الخياطة" : "Maqas - Tailoring Workshop Management System",
                description: isAr
                    ? "منصة متجاوبة ومخصصة لمشاغل الخياطة لربطهم بالعملاء، وتسهيل وصولهم إلى خدمات خياطة عالية الجودة بمرونة وسهولة."
                    : "A responsive platform dedicated to tailoring workshops to connect them with customers, ensuring easy access to high-quality tailoring services.",
                image: Maqas,
                tags: ['React.js', 'Ant Design', 'Tailwind CSS'],
                icon: <GiSewingMachine />,
            },
            {
                id: 4,
                title: isAr ? "Lavendra - نظام إدارة الصالون" : "Lavendra - Salon Management System",
                description: isAr
                    ? "نظام إدارة صالون احترافي شامل مصمم لتبسيط العمليات التجارية، تتبع الخدمات، وإدارة المواعيد."
                    : "A comprehensive production-level salon management system designed to streamline business operations, service tracking, and appointments.",
                image: Lavendra,
                tags: ['Next.js', 'TypeScript', 'Ant Design', 'Tailwind CSS', 'PostgreSQL', 'Prisma', 'Neon'],
                icon: <IoSparklesOutline />,
            },
        ]
    };
};
