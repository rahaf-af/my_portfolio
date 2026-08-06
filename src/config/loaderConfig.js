export const getLoaderConfig = (isAr) => ({
    terminalPath: '~/rahaf/portfolio-v2',
    name: isAr ? 'رهف فلاته' : 'Rahaf Fallatah',
    title: isAr ? 'جاري إعداد بيئة العمل...' : 'Compiling Workspace...',
    logs: {
        step1: 'git init & cloning modules...',
        step2: 'npm install react-dom framer-motion...',
        step3: 'compiling Tailwind & Ant Design styles...',
        step4: 'running unit tests (0 bugs found)...',
        step5: 'optimizing production bundle...',
        complete: isAr ? 'تم نشر الموقع بنجاح!' : 'portfolio successfully deployed!',
    }
});
