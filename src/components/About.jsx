import 'antd/dist/reset.css'
import { Avatar, Button, Card, Col, Divider, Row, Space, Tag, Timeline, Tooltip, Typography } from 'antd'
import { DownloadOutlined, EnvironmentOutlined, GithubOutlined, LinkedinOutlined, MailOutlined, UserOutlined } from '@ant-design/icons'

const { Title, Paragraph, Text } = Typography

export function About() {
    return (
        <main className="main">
            <section className="main__section">
                <Space direction="vertical" size={24} style={{ width: '100%' }}>
                    <Card bodyStyle={{ padding: 24 }}>
                        <Row gutter={[24, 24]} align="middle" justify="center">
                            <Col xs={24} md={6} style={{ display: 'flex', justifyContent: 'center' }}>
                                <Avatar size={96} icon={<UserOutlined />} />
                            </Col>
                            <Col xs={24} md={12}>
                                <Space direction="vertical" size={8} style={{ width: '100%' }}>
                                    <Title level={2} style={{ margin: 0 }}>Hola, soy Tu Nombre</Title>
                                    <Text type="secondary">Frontend Developer • React • UI/UX entusiasta</Text>
                                    <Space wrap>
                                        <Text type="secondary">
                                            <EnvironmentOutlined /> Buenos Aires, AR
                                        </Text>
                                        <Divider type="vertical" />
                                        <Tooltip title="Enviar email">
                                            <Button href="mailto:tu.email@ejemplo.com" icon={<MailOutlined />}>
                                                Contacto
                                            </Button>
                                        </Tooltip>
                                        <Tooltip title="Descargar CV">
                                            <Button type="default" icon={<DownloadOutlined />} href="#" target="_blank">
                                                CV
                                            </Button>
                                        </Tooltip>
                                    </Space>
                                </Space>
                            </Col>
                            <Col xs={24} md={6} style={{ textAlign: 'center' }}>
                                <Space>
                                    <Tooltip title="GitHub">
                                        <Button shape="circle" size="large" href="https://github.com/tu-usuario" target="_blank" icon={<GithubOutlined />} />
                                    </Tooltip>
                                    <Tooltip title="LinkedIn">
                                        <Button shape="circle" size="large" href="https://linkedin.com/in/tu-usuario" target="_blank" icon={<LinkedinOutlined />} />
                                    </Tooltip>
                                </Space>
                            </Col>
                        </Row>
                    </Card>

                    <Row gutter={[24, 24]}>
                        <Col xs={24} md={14}>
                            <Card title="Sobre mí" bordered>
                                <Paragraph>
                                    Me apasiona construir experiencias web rápidas, accesibles y estéticamente agradables.
                                    Disfruto trabajar con React y un buen sistema de diseño para crear interfaces escalables.
                                </Paragraph>
                                <Paragraph>
                                    Cuando no estoy codificando, seguramente estoy diseñando componentes, aprendiendo algo nuevo
                                    o colaborando en proyectos open-source.
                                </Paragraph>
                            </Card>

                            <Card title="Experiencia" style={{ marginTop: 24 }}>
                                <Timeline
                                    items={[
                                        {
                                            color: 'blue',
                                            children: (
                                                <Space direction="vertical" size={0}>
                                                    <Text strong>Frontend Developer — Empresa X</Text>
                                                    <Text type="secondary">2023 — Presente</Text>
                                                    <Text>React, Vite, Ant Design, optimización de performance</Text>
                                                </Space>
                                            )
                                        },
                                        {
                                            color: 'green',
                                            children: (
                                                <Space direction="vertical" size={0}>
                                                    <Text strong>UI Developer — Startup Y</Text>
                                                    <Text type="secondary">2021 — 2023</Text>
                                                    <Text>Componentes reutilizables, diseño responsivo, accesibilidad</Text>
                                                </Space>
                                            )
                                        }
                                    ]}
                                />
                            </Card>
                        </Col>

                        <Col xs={24} md={10}>
                            <Card title="Habilidades">
                                <Space direction="vertical" size={12} style={{ width: '100%' }}>
                                    <Text type="secondary">Frontend</Text>
                                    <Space wrap>
                                        <Tag color="blue">React</Tag>
                                        <Tag color="cyan">Vite</Tag>
                                        <Tag color="geekblue">Ant Design</Tag>
                                        <Tag color="purple">Tailwind</Tag>
                                    </Space>
                                    <Divider style={{ margin: '12px 0' }} />
                                    <Text type="secondary">Backend & Datos</Text>
                                    <Space wrap>
                                        <Tag color="green">Firebase</Tag>
                                    </Space>
                                    <Divider style={{ margin: '12px 0' }} />
                                    <Text type="secondary">Herramientas</Text>
                                    <Space wrap>
                                        <Tag>Git</Tag>
                                        <Tag>Figma</Tag>
                                        <Tag>Vercel</Tag>
                                    </Space>
                                </Space>
                            </Card>

                            <Card title="Contacto" style={{ marginTop: 24 }}>
                                <Space wrap>
                                    <Button type="primary" icon={<MailOutlined />} href="mailto:tu.email@ejemplo.com">Email</Button>
                                    <Button icon={<GithubOutlined />} href="https://github.com/tu-usuario" target="_blank">GitHub</Button>
                                    <Button icon={<LinkedinOutlined />} href="https://linkedin.com/in/tu-usuario" target="_blank">LinkedIn</Button>
                                </Space>
                            </Card>
                        </Col>
                    </Row>

                    <Divider />
                    <Typography style={{ textAlign: 'center' }}>
                        <Text type="secondary">Hecho con ❤️ usando Ant Design</Text>
                    </Typography>
                </Space>
            </section>
        </main>
    )
}