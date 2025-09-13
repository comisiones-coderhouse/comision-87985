import 'antd/dist/reset.css'
import { Button, Card, Form, Input, Space, Typography } from 'antd'
import { MailOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons'

const { Title, Paragraph } = Typography
const { TextArea } = Input

export default function Contacto() {
    const onFinish = (values) => {
        console.log('Formulario enviado:', values)
    }

    return (
        <main className="main">
            <section className="main__section">
                <Space direction="vertical" size={24} style={{ width: '100%', maxWidth: 600, margin: '0 auto' }}>
                    <div style={{ textAlign: 'center' }}>
                        <Title level={2}>Contacto</Title>
                        <Paragraph style={{ fontSize: '16px', color: '#666' }}>
                            ¿Tenés alguna consulta o querés ponerte en contacto conmigo? 
                            Completá el formulario y te responderé a la brevedad.
                        </Paragraph>
                    </div>

                    <Card>
                        <Form
                            name="contacto"
                            layout="vertical"
                            onFinish={onFinish}
                            size="large"
                        >
                            <Form.Item
                                label="Nombre"
                                name="nombre"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Por favor ingresá tu nombre'
                                    }
                                ]}
                            >
                                <Input
                                    prefix={<UserOutlined />}
                                    placeholder="Tu nombre completo"
                                />
                            </Form.Item>

                            <Form.Item
                                label="Email"
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Por favor ingresá tu email'
                                    },
                                    {
                                        type: 'email',
                                        message: 'Ingresá un email válido'
                                    }
                                ]}
                            >
                                <Input
                                    prefix={<MailOutlined />}
                                    placeholder="tu.email@ejemplo.com"
                                />
                            </Form.Item>

                            <Form.Item
                                label="Mensaje"
                                name="mensaje"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Por favor escribí tu mensaje'
                                    }
                                ]}
                            >
                                <TextArea
                                    rows={4}
                                    placeholder="Escribí tu consulta o mensaje aquí..."
                                />
                            </Form.Item>

                            <Form.Item>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    size="large"
                                    style={{ width: '100%' }}
                                >
                                    Enviar Mensaje
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </Space>
            </section>
        </main>
    )
}