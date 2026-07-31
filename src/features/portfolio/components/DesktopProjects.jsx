import React, { useRef, useEffect } from 'react';
import { Card, Tag, theme } from 'antd';
import { FolderOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

export default function DesktopProjects({ projects, mainPurple }) {
    const { token } = theme.useToken();
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);

    const extendedProjects = [...projects, ...projects, ...projects];

    useEffect(() => {
        if (swiperRef.current && swiperRef.current.swiper) {
            const swiper = swiperRef.current.swiper;
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
        }
    }, []);

    return (
        <div style={{ position: 'relative', width: '100%', padding: '0 60px' }}>
            <button
                ref={prevRef}
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
                ref={nextRef}
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

            <Swiper
                ref={swiperRef}
                modules={[Autoplay, Navigation]}
                grabCursor={true}
                spaceBetween={30}
                slidesPerView={3}
                centeredSlides={true}
                loop={true}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                style={{ padding: '20px 0', width: '100%' }}
            >
                {extendedProjects.map((project, index) => (
                    <SwiperSlide key={`${project.id}-${index}`} style={{ height: 'auto', display: 'flex', justifyContent: 'center' }}>
                        {({ isActive }) => (
                            <motion.div
                                animate={{
                                    scale: isActive ? 1.05 : 0.95,
                                    y: isActive ? -5 : 0
                                }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                style={{ width: '100%', display: 'flex' }}
                            >
                                <Card
                                    hoverable
                                    style={{
                                        background: token.colorBgContainer,
                                        border: `2px solid ${isActive ? mainPurple : `${mainPurple}30`}`,
                                        // ظلال واضحة وقوية تمنح البطاقات عمقاً وبروزاً فخماً
                                        boxShadow: isActive
                                            ? `0 25px 50px -12px ${mainPurple}50, 0 10px 20px -5px rgba(0,0,0,0.15)`
                                            : `0 12px 30px -10px rgba(0,0,0,0.1)`,
                                        borderRadius: '24px',
                                        overflow: 'hidden',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        width: '100%',
                                        minHeight: '480px',
                                        transition: 'border 0.3s ease, box-shadow 0.3s ease'
                                    }}
                                    styles={{
                                        body: {
                                            padding: '24px',
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
                                                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }}
                                            />
                                        </div>
                                    }
                                >
                                    <div>
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '10px' }}>
                                            {project.tags.map((tag, tagIdx) => (
                                                <Tag
                                                    key={tagIdx}
                                                    style={{
                                                        background: `${mainPurple}1F`,
                                                        color: mainPurple,
                                                        border: `1.5px solid ${mainPurple}59`,
                                                        borderRadius: '6px',
                                                        fontSize: '10.5px',
                                                    }}
                                                >
                                                    {tag}
                                                </Tag>
                                            ))}
                                        </div>
                                        <h3 style={{ color: token.colorText, fontSize: '17px', fontWeight: '700', marginBottom: '6px' }}>
                                            {project.title}
                                        </h3>
                                        <p style={{ color: token.colorTextSecondary, fontSize: '13px', lineHeight: '1.5', marginBottom: '12px' }}>
                                            {project.description}
                                        </p>
                                    </div>
                                </Card>
                            </motion.div>
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
