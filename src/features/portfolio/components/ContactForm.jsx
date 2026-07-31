import React, { useState } from 'react';
import { Form, Input, Button, Grid, message, theme } from 'antd';
import { SendOutlined, MailOutlined, EnvironmentOutlined, LinkedinOutlined, GithubOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const { useBreakpoint } = Grid;

export default function ContactForm() {
    const screens = useBreakpoint();
    const isDesktop = screens.lg;
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);

    // جلب الثيم المركزي وتحديد الألوان بناءً عليه
    const { token } = theme.useToken();
    const mainPurple = token.colorPrimary;

    // قراءة البيانات من ملف الـ .env
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // دالة إرسال الرسالة عبر EmailJS
    const handleSubmit = async (values) => {
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
                margin: '0 auto'
            }}
        >
            {/* عنوان السكشن */}
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

            {/* الحاوية الرئيسية */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: isDesktop ? '1fr 1.4fr' : '1fr',
                gap: '60px',
                alignItems: 'center'
            }}>
                {/* القسم الأيمن: معلومات التواصل والنبذة */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 style={{
                        color: token.colorText,
                        fontSize: 'clamp(1.9rem, 3.2vw, 2.5rem)',
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

                    {/* معلومات التواصل */}
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

                {/* القسم الأيسر: نموذج الإرسال */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{
                        background: token.colorBgContainer,
                        border: `1.5px solid ${mainPurple}80`,
                        boxShadow: `0 15px 35px ${mainPurple}40`,
                        backdropFilter: 'blur(10px)',
                        WebkitBackdropFilter: 'blur(10px)',
                        borderRadius: '20px',
                        padding: isDesktop ? '40px' : '24px',
                        transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = mainPurple;
                        e.currentTarget.style.boxShadow = `0 18px 45px ${mainPurple}44`;
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = `${mainPurple}80`;
                        e.currentTarget.style.boxShadow = `0 15px 35px ${mainPurple}40`;
                    }}
                >
                    <Form
                        form={form}
                        layout="vertical"
                        onFinish={handleSubmit}
                        requiredMark={false}
                    >
                        {/* استخدام حاوية Grid بمسافات موحدة ومتساوية (rowGap & columnGap) */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: isDesktop ? '1fr 1fr' : '1fr',
                            rowGap: '16px',
                            columnGap: '16px',
                            marginBottom: '16px'
                        }}>
                            <Form.Item
                                name="user_name"
                                rules={[{ required: true, message: 'Please enter your name!' }]}
                                style={{ marginBottom: 0 }}
                            >
                                <Input
                                    placeholder="Your Name"
                                    style={{
                                        background: token.colorBgContainer, // مطابقة لخلفية الكارد المحيط
                                        border: `1px solid ${mainPurple}66`,
                                        borderRadius: '10px',
                                        color: token.colorText,
                                        padding: '14px 18px',
                                        fontSize: '15px',
                                    }}
                                />
                            </Form.Item>

                            <Form.Item
                                name="user_email"
                                rules={[
                                    { required: true, message: 'Please enter your email!' },
                                    { type: 'email', message: 'Please enter a valid email!' }
                                ]}
                                style={{ marginBottom: 0 }}
                            >
                                <Input
                                    placeholder="Your Email"
                                    style={{
                                        background: token.colorBgContainer, // مطابقة لخلفية الكارد المحيط
                                        border: `1px solid ${mainPurple}66`,
                                        borderRadius: '10px',
                                        color: token.colorText,
                                        padding: '14px 18px',
                                        fontSize: '15px',
                                    }}
                                />
                            </Form.Item>
                        </div>

                        <Form.Item
                            name="subject"
                            rules={[{ required: true, message: 'Please enter a subject!' }]}
                            style={{ marginBottom: '16px' }}
                        >
                            <Input
                                placeholder="Subject"
                                style={{
                                    background: token.colorBgContainer, // مطابقة لخلفية الكارد المحيط
                                    border: `1px solid ${mainPurple}66`,
                                    borderRadius: '10px',
                                    color: token.colorText,
                                    padding: '14px 18px',
                                    fontSize: '15px',
                                }}
                            />
                        </Form.Item>

                        <Form.Item
                            name="message"
                            rules={[{ required: true, message: 'Please enter your message!' }]}
                            style={{ marginBottom: '24px' }}
                        >
                            <Input.TextArea
                                rows={5}
                                placeholder="Your Message"
                                style={{
                                    background: token.colorBgContainer, // مطابقة لخلفية الكارد المحيط
                                    border: `1px solid ${mainPurple}66`,
                                    borderRadius: '10px',
                                    color: token.colorText,
                                    padding: '14px 18px',
                                    fontSize: '15px',
                                    resize: 'none'
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
                                borderRadius: '10px',
                                height: '50px',
                                fontWeight: '700',
                                fontSize: '15.5px',
                                boxShadow: `0 4px 20px ${mainPurple}55`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '8px',
                                cursor: 'pointer'
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
