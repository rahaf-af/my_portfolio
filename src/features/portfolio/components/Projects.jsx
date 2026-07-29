import React, { useRef, useEffect, useState } from 'react';
import { Card, Tag, Button, Grid, theme } from 'antd';
import { ExportOutlined, GithubOutlined, FolderOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import Maqas from '../../../assets/Maqas.PNG'
import Aniverse from '../../../assets/Aniverse.PNG'
import Lafesta from '../../../assets/Lafesta.PNG'
import Lavendra from '../../../assets/Lavendra.PNG'



import 'swiper/css';
import 'swiper/css/navigation';

const { useBreakpoint } = Grid;

export default function Projects() {
    const screens = useBreakpoint();
    const isDesktop = screens.lg;
    const isTablet = screens.md && !screens.lg;

    const { token } = theme.useToken();
    const mainPurple = token.colorPrimary;

    // استخدام مراجع منفصلة لأزرار اللابتوب والآيباد عن أزرار الموبايل لكي تعمل بشكل صحيح تماماً
    const desktopPrevRef = useRef(null);
    const desktopNextRef = useRef(null);
    const mobilePrevRef = useRef(null);
    const mobileNextRef = useRef(null);
    const swiperRef = useRef(null);

    // حالة لتتبع السلايد الحالي بدقة تامة مع اللوب والـ Autoplay
    const [realIndex, setRealIndex] = useState(0);
    const baseProjects = [
        {
            id: 1,
            title: 'Lavendra - Salon Management System',
            description: 'A comprehensive production-level salon management system designed to streamline business operations, service tracking, and appointments.',
            image: Lavendra,
            tags: ['Next.js', 'TypeScript', 'Ant Design', 'Tailwind CSS', 'PostgreSQL', 'Prisma', 'Neon'],
            demoLink: '#',
            githubLink: '#',
        },
        {
            id: 2,
            title: 'Aniverse - Anime Community Platform',
            description: 'A full-stack anime community platform featuring dynamic user posts, interactive discussions, and full CRUD functionality for community engagement.',
            image: Aniverse,
            tags: ['React.js', 'Django', 'PostgreSQL', 'Postman'],
            demoLink: '#',
            githubLink: '#',
        },
        {
            id: 3,
            title: 'Lafesta - Dress Rental Platform',
            description: 'A full-stack dress rental web application integrated with secure checkout workflows and payment gateway redirection handling.',
            image: Lafesta,
            tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Django', 'Moyasar API'],
            demoLink: '#',
            githubLink: '#',
        },
        {
            id: 4,
            title: 'Maqas - Tailoring Management Platform',
            description: 'A responsive web application engineered with multiple operational screens, custom form validations, and a clean user interface tailored for management.',
            image: Maqas,
            tags: ['React.js', 'Ant Design', 'Tailwind CSS'],
            demoLink: '#',
            githubLink: '#',
        }
    ];

    // 2. مضاعفة البيانات برمجياً لمنح Swiper العدد الكافي لعمل الـ Loop بسلاسة وبدون تحذيرات الفراغ
    const projectsData = [...baseProjects, ...baseProjects];

    useEffect(() => {
        if (swiperRef.current && swiperRef.current.swiper) {
            const swiper = swiperRef.current.swiper;

            // ربط الأزرار بناءً على الشاشة النشطة
            if (isDesktop || isTablet) {
                swiper.params.navigation.prevEl = desktopPrevRef.current;
                swiper.params.navigation.nextEl = desktopNextRef.current;
            } else {
                swiper.params.navigation.prevEl = mobilePrevRef.current;
                swiper.params.navigation.nextEl = mobileNextRef.current;
            }
            swiper.navigation.init();
            swiper.navigation.update();
        }
    }, [isDesktop, isTablet]);

    return (
        <section
            id="projects"
            style={{
                padding: isDesktop ? '80px 20px' : '40px 12px',
                position: 'relative',
                maxWidth: '1400px',
                margin: '0 auto',
                overflow: 'hidden',
                perspective: '1200px'
            }}
        >
            {/* عنوان السكشن */}
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: mainPurple, fontSize: '13px', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px' }}>
                        <FolderOutlined /> My Portfolio
                    </div>
                    <h2 style={{ color: token.colorText, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: '800', margin: 0 }}>
                        Featured Projects
                    </h2>
                </motion.div>
            </div>

            {/* الحاوية الرئيسية */}
            <div style={{ position: 'relative', width: '100%', padding: isDesktop ? '0 60px' : isTablet ? '0 50px' : '0 4px' }}>

                {/* أزرار التنقل الجانبية للابتوب والآيباد */}
                {(isDesktop || isTablet) && (
                    <>
                        <button
                            ref={desktopPrevRef}
                            style={{
                                position: 'absolute',
                                left: '0px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                zIndex: 10,
                                background: `${token.colorBgContainer}CC`,
                                border: `1.5px solid ${mainPurple}66`,
                                color: mainPurple,
                                borderRadius: '50%',
                                width: '45px',
                                height: '45px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                backdropFilter: 'blur(8px)',
                                boxShadow: `0 8px 20px ${mainPurple}25`,
                                transition: 'all 0.3s ease'
                            }}
                        >
                            <LeftOutlined style={{ fontSize: '16px', fontWeight: 'bold' }} />
                        </button>

                        <button
                            ref={desktopNextRef}
                            style={{
                                position: 'absolute',
                                right: '0px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                zIndex: 10,
                                background: `${token.colorBgContainer}CC`,
                                border: `1.5px solid ${mainPurple}66`,
                                color: mainPurple,
                                borderRadius: '50%',
                                width: '45px',
                                height: '45px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                backdropFilter: 'blur(8px)',
                                boxShadow: `0 8px 20px ${mainPurple}25`,
                                transition: 'all 0.3s ease'
                            }}
                        >
                            <RightOutlined style={{ fontSize: '16px', fontWeight: 'bold' }} />
                        </button>
                    </>
                )}

                {/* Swiper */}
                <div style={{ width: '100%', overflow: 'hidden' }}>
                    <Swiper
                        ref={swiperRef}
                        modules={[Autoplay, Navigation]}
                        spaceBetween={20}
                        slidesPerView={1}
                        centeredSlides={true}
                        loop={true}
                        // loopedSlides={projectsData.length}
                        onSlideChange={(swiper) => setRealIndex(swiper.realIndex)}
                        breakpoints={{
                            768: { slidesPerView: 1, spaceBetween: 20 },
                            1024: { slidesPerView: 3, spaceBetween: 30 },
                        }}
                        navigation={{
                            prevEl: isDesktop || isTablet ? desktopPrevRef.current : mobilePrevRef.current,
                            nextEl: isDesktop || isTablet ? desktopNextRef.current : mobileNextRef.current,
                        }}
                        autoplay={{
                            delay: 4500,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        style={{
                            padding: '20px 0',
                            width: '100%',
                        }}
                    >
                        {projectsData.map((project, index) => (
                            <SwiperSlide
                                key={`${project.id}-${index}`}
                                style={{
                                    height: 'auto',
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}
                            >
                                {({ isActive }) => (
                                    <motion.div
                                        whileHover={isDesktop ? {
                                            scale: 1.03,
                                            rotateX: 3,
                                            rotateY: -3,
                                            z: 20
                                        } : {}}
                                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                        style={{
                                            width: '100%',
                                            maxWidth: isDesktop ? '100%' : isTablet ? '480px' : '100%',
                                            display: 'flex',
                                            transformStyle: 'preserve-3d',
                                            transform: isActive ? 'scale(1)' : 'scale(0.97)',
                                            opacity: isActive ? 1 : 0.7,
                                            transition: 'transform 0.4s ease, opacity 0.4s ease',
                                        }}
                                    >
                                        <Card
                                            hoverable
                                            style={{
                                                background: token.colorBgContainer,
                                                border: `1.5px solid ${isActive ? mainPurple : `${mainPurple}40`}`,
                                                boxShadow: isActive
                                                    ? `0 20px 40px ${mainPurple}30, 0 0 15px ${mainPurple}15`
                                                    : `0 8px 20px ${mainPurple}10`,
                                                borderRadius: '24px',
                                                overflow: 'hidden',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                width: '100%',
                                                minHeight: '500px',
                                            }}
                                            styles={{
                                                body: {
                                                    padding: isDesktop ? '24px' : '20px',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    flexGrow: 1,
                                                    justifyContent: 'space-between'
                                                }
                                            }}
                                            cover={
                                                <div style={{ height: '210px', overflow: 'hidden', position: 'relative' }}>
                                                    <img
                                                        alt={project.title}
                                                        src={project.image}
                                                        style={{
                                                            width: '100%',
                                                            height: '100%',
                                                            objectFit: 'cover',
                                                            transition: 'transform 0.6s ease'
                                                        }}
                                                        loading='lazy'
                                                    />
                                                </div>
                                            }
                                        >
                                            <div>
                                                {/* Tags */}
                                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '12px' }}>
                                                    {project.tags.map((tag, tagIdx) => (
                                                        <Tag
                                                            key={tagIdx}
                                                            style={{
                                                                background: `${mainPurple}1F`,
                                                                color: mainPurple,
                                                                border: `1px solid ${mainPurple}59`,
                                                                borderRadius: '6px',
                                                                fontSize: '11px',
                                                            }}
                                                        >
                                                            {tag}
                                                        </Tag>
                                                    ))}
                                                </div>

                                                {/* العنوان والوصف */}
                                                <h3 style={{ color: token.colorText, fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>
                                                    {project.title}
                                                </h3>
                                                <p style={{ color: token.colorTextSecondary, fontSize: '13.5px', lineHeight: '1.6', marginBottom: '16px' }}>
                                                    {project.description}
                                                </p>
                                            </div>

                                            {/* الأزرار */}
                                            {/* <div style={{ display: 'flex', gap: '10px', paddingTop: '12px', borderTop: `1px solid ${token.colorText}14` }}>
                                                <Button
                                                    type="primary"
                                                    size="middle"
                                                    icon={<ExportOutlined />}
                                                    href={project.demoLink}
                                                    target="_blank"
                                                    style={{
                                                        flex: 1,
                                                        background: mainPurple,
                                                        borderColor: mainPurple,
                                                        borderRadius: '10px',
                                                        fontWeight: '600',
                                                        fontSize: '13px',
                                                        height: '42px'
                                                    }}
                                                >
                                                    Live Demo
                                                </Button>
                                                <Button
                                                    size="middle"
                                                    icon={<GithubOutlined />}
                                                    href={project.githubLink}
                                                    target="_blank"
                                                    style={{
                                                        background: 'transparent',
                                                        borderColor: `${mainPurple}66`,
                                                        color: token.colorText,
                                                        borderRadius: '10px',
                                                        height: '42px',
                                                        width: '42px',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center'
                                                    }}
                                                />
                                            </div> */}
                                        </Card>
                                    </motion.div>
                                )}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* شريط التحكم السفلي للموبايل (نقاط يدوية مرتبطة بعدد العناصر الأصلية لتكون مختصرة وتتحرك بسلاسة) */}
                {!isDesktop && !isTablet && (
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '12px', marginTop: '16px' }}>
                        {/* زر السابق */}
                        <button
                            ref={mobilePrevRef}
                            style={{
                                background: `${token.colorBgContainer}E6`,
                                border: `1.5px solid ${mainPurple}50`,
                                color: mainPurple,
                                borderRadius: '50%',
                                width: '36px',
                                height: '36px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                backdropFilter: 'blur(6px)',
                                boxShadow: `0 4px 12px ${mainPurple}18`,
                                transition: 'all 0.2s ease',
                                flexShrink: 0
                            }}
                        >
                            <LeftOutlined style={{ fontSize: '12px', fontWeight: 'bold' }} />
                        </button>

                        {/* النقاط اليدوية المتزامنة */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            {baseProjects.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => {
                                        if (swiperRef.current && swiperRef.current.swiper) {
                                            swiperRef.current.swiper.slideToLoop(idx);
                                        }
                                    }}
                                    style={{
                                        background: mainPurple,
                                        opacity: realIndex === idx ? 1 : 0.35,
                                        width: realIndex === idx ? '22px' : '8px',
                                        height: '8px',
                                        borderRadius: realIndex === idx ? '4px' : '50%',
                                        border: 'none',
                                        padding: 0,
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                    }}
                                />
                            ))}
                        </div>

                        {/* زر التالي */}
                        <button
                            ref={mobileNextRef}
                            style={{
                                background: `${token.colorBgContainer}E6`,
                                border: `1.5px solid ${mainPurple}50`,
                                color: mainPurple,
                                borderRadius: '50%',
                                width: '36px',
                                height: '36px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                backdropFilter: 'blur(6px)',
                                boxShadow: `0 4px 12px ${mainPurple}18`,
                                transition: 'all 0.2s ease',
                                flexShrink: 0
                            }}
                        >
                            <RightOutlined style={{ fontSize: '12px', fontWeight: 'bold' }} />
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
