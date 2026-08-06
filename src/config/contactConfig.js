export const getContactConfig = (isAr) => ({
    tagLabel: isAr ? 'لنتواصل' : 'Get In Touch',
    title: isAr ? 'تواصل معي' : 'Contact Me',

    heading: {
        part1: isAr ? 'لنبني معًا شيئًا' : "Let's Build Something",
        highlight: isAr ? 'مذهلاً' : 'Amazing',
        part2: isAr ? '🚀' : 'Together 🚀',
    },

    description: isAr
        ? 'أبحث حالياً عن فرص عمل جديدة. سواء كان لديك سؤال أو تريد فقط إلقاء التحية، صندوق بريدي مفتوح دائماً!'
        : "I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open!",

    location: isAr ? 'مكة المكرمة، المملكة العربية السعودية' : 'Makkah, Saudi Arabia',

    form: {
        namePlaceholder: isAr ? 'اسمك' : 'Your Name',
        emailPlaceholder: isAr ? 'بريدك الإلكتروني' : 'Your Email',
        subjectPlaceholder: isAr ? 'الموضوع' : 'Subject',
        messagePlaceholder: isAr ? 'رسالتك' : 'Your Message',
        submitButton: isAr ? 'إرسال الرسالة' : 'Send Message',
    },

    validation: {
        nameRequired: isAr ? 'الرجاء إدخال اسمك!' : 'Please enter your name!',
        nameWhitespace: isAr ? 'لا يمكن أن يكون الاسم مسافات فارغة!' : 'Name cannot be empty spaces!',
        nameMin: isAr ? 'الاسم قصير جداً!' : 'Name is too short!',
        nameMax: isAr ? 'الاسم طويل جداً!' : 'Name is too long!',

        emailRequired: isAr ? 'الرجاء إدخال بريدك الإلكتروني!' : 'Please enter your email!',
        emailInvalid: isAr ? 'الرجاء إدخال بريد إلكتروني صالح!' : 'Please enter a valid email!',
        emailMax: isAr ? 'البريد الإلكتروني طويل جداً!' : 'Email is too long!',

        subjectRequired: isAr ? 'الرجاء إدخال الموضوع!' : 'Please enter a subject!',
        subjectWhitespace: isAr ? 'لا يمكن أن يكون الموضوع مسافات فارغة!' : 'Subject cannot be empty spaces!',
        subjectMin: isAr ? 'الموضوع قصير جداً!' : 'Subject is too short!',
        subjectMax: isAr ? 'الموضوع طويل جداً!' : 'Subject is too long!',

        messageRequired: isAr ? 'الرجاء إدخال رسالتك!' : 'Please enter your message!',
        messageWhitespace: isAr ? 'لا يمكن أن تكون الرسالة مسافات فارغة!' : 'Message cannot be empty spaces!',
        messageMin: isAr ? 'الرسالة قصيرة جداً، الرجاء إضافة تفاصيل أكثر!' : 'Message is too short, please add more details!',
        messageMax: isAr ? 'الرسالة طويلة جداً!' : 'Message is too long!',
    },

    toast: {
        success: isAr ? 'تم إرسال رسالتك بنجاح! 🎉' : 'Your message has been sent successfully! 🎉',
        errorPrefix: isAr ? 'خطأ:' : 'Error:',
        errorFallback: isAr ? 'فشل إرسال الرسالة.' : 'Failed to send the message.',
    },
});
