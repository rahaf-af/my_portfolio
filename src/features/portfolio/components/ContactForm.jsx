import React, { useState } from 'react';
import { Form, Input, Button, Grid, message, theme } from 'antd';
import { SendOutlined, MailOutlined, EnvironmentOutlined, LinkedinOutlined, GithubOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const { useBreakpoint } = Grid;

export default function ContactForm() {
    const screens = useBreakpoint();
    const isDesktop = screens.lg;
    const isMobile = !screens.md;

    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);

    const { token } = theme.useToken();
    const mainPurple = token.colorPrimary;
    const isDarkMode = token.colorBgLayout === '#02060E' || token.colorBgLayout.startsWith('#0');

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const handleSubmit = async (values) => {
        if (values.website) {
            form.resetFields();
            return;
        }

        setLoading(true);

        const templateParams = {
            from_name: values.user_name,
            from_email: values.user_email,
            subject: values.subject,
            message: values.message,
        };

        try {
            await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
            message.success('Your message has been sent successfully! 🎉');
            form.resetFields();
        } catch (error) {
            console.error('EmailJS Error Details:', error);
            const errorMsg = error.text || error.message || 'Failed to send the message.';
            message.error(`Error: ${errorMsg}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section
            id="contact"
            style={{
                padding: isDesktop ? '100px 32px' : '60px 16px',
                position: 'relative',
                maxWidth: '1300px',
                margin: '0 auto',
                overflowX: 'hidden'
            }}
        >
            <motion.div
                initial={{ opacity: 0, y: -15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                style={{ textAlign: 'center', marginBottom: '60px' }}
            >
                <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: mainPurple,
                    fontSize: '12px',
                    fontWeight: '600',
                    letterSpacing: '1.2px',
                    textTransform: 'uppercase',
                    marginBottom: '6px'
                }}>
                    <SendOutlined /> Get In Touch
                </div>
                <h2 style={{
                    color: token.colorText,
                    fontSize: 'clamp(2rem, 3.5vw, 2.6rem)',
                    fontWeight: '800',
                    margin: 0
                }}>
                    Contact Me
                </h2>
            </motion.div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: isDesktop ? '1fr 1.4fr' : '1fr',
                gap: '60px',
                alignItems: 'center'
            }}>
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 style={{
                        color: token.colorText,
                        fontSize: isMobile ? '1.6rem' : '2.5rem',
                        fontWeight: '700',
                        lineHeight: '1.3',
                        marginBottom: '20px'
                    }}>
                        Let’s Build Something <br />
                        Amazing <span style={{ color: mainPurple }}>Together</span> 🚀
                    </h3>

                    <p style={{ color: token.colorTextSecondary, fontSize: '15.5px', lineHeight: '1.6', marginBottom: '35px' }}>
                        I’m currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open!
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', color: token.colorText, fontSize: '15.5px' }}>
                            <div style={{
                                width: '40px', height: '40px', borderRadius: '10px',
                                background: `${mainPurple}22`, border: `1px solid ${mainPurple}55`,
                                display: 'flex', alignItems: 'center', justifyContent: 'center', color: mainPurple
                            }}>
                                <MailOutlined style={{ fontSize: '18px' }} />
                            </div>
                            <a href="mailto:rahaf77553@gmail.com?subject=Hello%20Rahaf&body=I%20visited%20your%20portfolio%20and%20want%20to%20connect!" target="_blank" rel="noreferrer" style={{ color: token.colorText, textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = mainPurple} onMouseLeave={e => e.currentTarget.style.color = token.colorText}>
                                rahaf77553@gmail.com
                            </a>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', color: token.colorText, fontSize: '15.5px' }}>
                            <div style={{
                                width: '40px', height: '40px', borderRadius: '10px',
                                background: `${mainPurple}22`, border: `1px solid ${mainPurple}55`,
                                display: 'flex', alignItems: 'center', justifyContent: 'center', color: mainPurple
                            }}>
                                <EnvironmentOutlined style={{ fontSize: '18px' }} />
                            </div>
                            <span>Makkah, Saudi Arabia</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', color: token.colorText, fontSize: '15.5px' }}>
                            <div style={{
                                width: '40px', height: '40px', borderRadius: '10px',
                                background: `${mainPurple}22`, border: `1px solid ${mainPurple}55`,
                                display: 'flex', alignItems: 'center', justifyContent: 'center', color: mainPurple
                            }}>
                                <LinkedinOutlined style={{ fontSize: '18px' }} />
                            </div>
                            <a href="https://linkedin.com/in/rahaffalatah" target="_blank" rel="noreferrer" style={{ color: token.colorText, textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = mainPurple} onMouseLeave={e => e.currentTarget.style.color = token.colorText}>
                                linkedin.com/in/rahaffalatah
                            </a>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', color: token.colorText, fontSize: '15.5px' }}>
                            <div style={{
                                width: '40px', height: '40px', borderRadius: '10px',
                                background: `${mainPurple}22`, border: `1px solid ${mainPurple}55`,
                                display: 'flex', alignItems: 'center', justifyContent: 'center', color: mainPurple
                            }}>
                                <GithubOutlined style={{ fontSize: '18px' }} />
                            </div>
                            <a href="https://github.com/rahaf-af" target="_blank" rel="noreferrer" style={{ color: token.colorText, textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = mainPurple} onMouseLeave={e => e.currentTarget.style.color = token.colorText}>
                                github.com/rahaf-af
                            </a>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{
                        background: isDarkMode 
                            ? 'linear-gradient(145deg, rgba(20, 10, 35, 0.75) 0%, rgba(10, 5, 20, 0.9) 100%)'
                            : 'linear-gradient(145deg, rgba(255, 255, 255, 0.9) 100%, rgba(245, 240, 255, 0.5) 0%)',
                        border: `1.5px solid ${mainPurple}50`,
                        boxShadow: isDarkMode 
                            ? `0 20px 40px rgba(0, 0, 0, 0.4), 0 0 25px ${mainPurple}10`
                            : `0 15px 35px -10px ${mainPurple}15`,
                        backdropFilter: 'blur(20px)',
                        WebkitBackdropFilter: 'blur(20px)',
                        borderRadius: '28px',
                        padding: isDesktop ? '45px' : '28px',
                        position: 'relative',
                        overflow: 'hidden',
                        /* الإصلاح: يجبر Safari يقص التوهج المموّه بشكل صحيح حسب حواف الكارد المدورة */
                        WebkitMaskImage: '-webkit-radial-gradient(white, black)',
                        width: '100%',
                        boxSizing: 'border-box',
                        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = mainPurple;
                        e.currentTarget.style.boxShadow = isDarkMode
                            ? `0 25px 50px rgba(0, 0, 0, 0.5), 0 0 35px ${mainPurple}20`
                            : `0 20px 40px -10px ${mainPurple}25`;
                        e.currentTarget.style.transform = 'translateY(-4px)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = `${mainPurple}50`;
                        e.currentTarget.style.boxShadow = isDarkMode 
                            ? `0 20px 40px rgba(0, 0, 0, 0.4), 0 0 25px ${mainPurple}10`
                            : `0 15px 35px -10px ${mainPurple}15`;
                        e.currentTarget.style.transform = 'translateY(0)';
                    }}
                >
                    <div style={{
                        position: 'absolute', top: '-60px', right: '-60px', width: '160px', height: '160px',
                        background: mainPurple, filter: 'blur(70px)', opacity: 0.18, pointerEvents: 'none'
                    }} />

                    <Form
                        form={form}
                        layout="vertical"
                        onFinish={handleSubmit}
                        requiredMark={false}
                    >
                        <Form.Item
                            name="website"
                            style={{ position: 'absolute', left: '-9999px', width: 0, height: 0, overflow: 'hidden' }}
                            tabIndex="-1"
                            autoComplete="off"
                        >
                            <Input tabIndex="-1" autoComplete="off" />
                        </Form.Item>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: isDesktop ? '1fr 1fr' : '1fr',
                            rowGap: '16px',
                            columnGap: '16px',
                            marginBottom: '16px'
                        }}>
                            <Form.Item
                                name="user_name"
                                rules={[
                                    { required: true, message: 'Please enter your name!' },
                                    { whitespace: true, message: 'Name cannot be empty spaces!' },
                                    { min: 2, message: 'Name is too short!' },
                                    { max: 60, message: 'Name is too long!' },
                                ]}
                                style={{ marginBottom: 0 }}
                            >
                                <Input
                                    placeholder="Your Name"
                                    style={{
                                        background: isDarkMode ? 'rgba(255, 255, 255, 0.03)' : token.colorBgContainer,
                                        border: `2px solid ${mainPurple}40`,
                                        borderRadius: '12px',
                                        color: token.colorText,
                                        padding: '14px 18px',
                                        fontSize: '15px',
                                        transition: 'all 0.3s ease',
                                    }}
                                />
                            </Form.Item>

                            <Form.Item
                                name="user_email"
                                rules={[
                                    { required: true, message: 'Please enter your email!' },
                                    { type: 'email', message: 'Please enter a valid email!' },
                                    { max: 100, message: 'Email is too long!' },
                                ]}
                                style={{ marginBottom: 0 }}
                            >
                                <Input
                                    placeholder="Your Email"
                                    style={{
                                        background: isDarkMode ? 'rgba(255, 255, 255, 0.03)' : token.colorBgContainer,
                                        border: `2px solid ${mainPurple}40`,
                                        borderRadius: '12px',
                                        color: token.colorText,
                                        padding: '14px 18px',
                                        fontSize: '15px',
                                        transition: 'all 0.3s ease',
                                    }}
                                />
                            </Form.Item>
                        </div>

                        <Form.Item
                            name="subject"
                            rules={[
                                { required: true, message: 'Please enter a subject!' },
                                { whitespace: true, message: 'Subject cannot be empty spaces!' },
                                { min: 3, message: 'Subject is too short!' },
                                { max: 120, message: 'Subject is too long!' },
                            ]}
                            style={{ marginBottom: '16px' }}
                        >
                            <Input
                                placeholder="Subject"
                                style={{
                                    background: isDarkMode ? 'rgba(255, 255, 255, 0.03)' : token.colorBgContainer,
                                    border: `2px solid ${mainPurple}40`,
                                    borderRadius: '12px',
                                    color: token.colorText,
                                    padding: '14px 18px',
                                    fontSize: '15px',
                                    transition: 'all 0.3s ease',
                                }}
                            />
                        </Form.Item>

                        <Form.Item
                            name="message"
                            rules={[
                                { required: true, message: 'Please enter your message!' },
                                { whitespace: true, message: 'Message cannot be empty spaces!' },
                                { min: 10, message: 'Message is too short, please add more details!' },
                                { max: 1000, message: 'Message is too long!' },
                            ]}
                            style={{ marginBottom: '24px' }}
                        >
                            <Input.TextArea
                                rows={5}
                                placeholder="Your Message"
                                style={{
                                    background: isDarkMode ? 'rgba(255, 255, 255, 0.03)' : token.colorBgContainer,
                                    border: `2px solid ${mainPurple}40`,
                                    borderRadius: '12px',
                                    color: token.colorText,
                                    padding: '14px 18px',
                                    fontSize: '15px',
                                    resize: 'none',
                                    transition: 'all 0.3s ease',
                                }}
                            />
                        </Form.Item>

                        <Button
                            type="primary"
                            htmlType="submit"
                            loading={loading}
                            icon={<SendOutlined />}
                            style={{
                                width: '100%',
                                background: mainPurple,
                                border: 'none',
                                borderRadius: '14px',
                                height: '52px',
                                fontWeight: '700',
                                fontSize: '15.5px',
                                boxShadow: `0 8px 25px ${mainPurple}50`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '8px',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            Send Message
                        </Button>
                    </Form>
                </motion.div>
            </div>
        </section>
    );
}
