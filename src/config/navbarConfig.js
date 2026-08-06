export const navbarConfig = {
    // إعدادات الشعار والاسم
    brand: {
        name: "𝑅𝑎ℎ𝑎𝑓 𝐹𝑎𝑙𝑙𝑎𝑡𝑎ℎ",
        butterflySize: 30,
    },

    // خريطة الأقسام والروابط مع دعم اللغتين
    sections: {
        '1': { id: 'home', labels: { en: 'Home', ar: 'الرئيسية' } },
        '2': { id: 'about', labels: { en: 'About', ar: 'عني' } },
        '3': { id: 'projects', labels: { en: 'Projects', ar: 'المشاريع' } },
        '4': { id: 'skills', labels: { en: 'Skills', ar: 'المهارات' } },
        '5': { id: 'experience', labels: { en: 'Experience', ar: 'الخبرات' } },
        '6': { id: 'certificates', labels: { en: 'Certificates', ar: 'الشهادات' } },
        '7': { id: 'contact', labels: { en: 'Contact', ar: ' تواصل معي' } },
    },

    // نصوص الفوتر والقيم الافتراضية
    footerText: {
        en: (year) => `©${year} Rahaf.Fallatah All rights reserved.`,
        ar: (year) => `©${year} رهف فلاته. جميع الحقوق محفوظة.`
    },

    // تصميمات ثابتة وأبعاد
    offsets: {
        headerHeight: 50,
        desktopPadding: '0 40px',
        mobilePadding: '0 20px',
    }
};