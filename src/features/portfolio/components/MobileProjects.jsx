import React from 'react';
import { Card, Tag, theme } from 'antd';

export default function MobileProjects({ projects, mainPurple }) {
    const { token } = theme.useToken();

    // عكس مرتبة البطاقات لتبدأ عملية التراص بالعكس
    const reversedProjects = [...projects].reverse();

    return (
        <div 
            style={{ 
                position: 'relative', 
                width: '100%', 
                padding: '20px 10px 60px 10px',
                display: 'flex',
                flexDirection: 'column',
                gap: '40px'
            }}
        >
            {reversedProjects.map((project, index) => {
                // جعل الـ top تنازلياً أو معكوساً لتبدأ البطاقات بالتراص من الأسفل للأعلى
                const stickyTop = 80 + (index * 15);

                return (
                    <div 
                        key={`${project.id || 'project'}-${index}`}
                        style={{
                            position: 'sticky',
                            top: `${stickyTop}px`,
                            zIndex: index + 1,
                            display: 'flex',
                            justifyContent: 'center',
                            width: '100%',
                        }}
                    >
                        <div style={{ width: '100%', maxWidth: '340px', display: 'flex' }}>
                            <Card
                                hoverable
                                style={{
                                    background: token.colorBgContainer,
                                    border: `1.5px solid ${mainPurple}60`,
                                    // ظل قوي وعميق يبرز تأثير التراص العكسي للطبقات
                                    boxShadow: `0 -15px 30px rgba(0,0,0,0.12), 0 20px 40px -10px ${mainPurple}40`,
                                    borderRadius: '24px',
                                    overflow: 'hidden',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    width: '100%',
                                    minHeight: '460px',
                                }}
                                styles={{
                                    body: {
                                        padding: '20px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        flexGrow: 1,
                                        justifyContent: 'space-between'
                                    }
                                }}
                                cover={
                                    <div style={{ height: '170px', overflow: 'hidden', position: 'relative' }}>
                                        <img
                                            alt={project.title}
                                            src={project.image}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
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
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
