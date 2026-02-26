import React from 'react'
import PageLayout from '../components/PageLayout'
import { Link } from 'react-router-dom'

export default function BlogDetailPage() {
    return (
        <PageLayout>
            <section className="page-header">
                <h1 className="color-white">ДЕТАЛИ БЛОГА</h1>
            </section>
            <section className="py-64">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="box-blur-bg mb-32">
                                <img src="/assets/media/blogs/blog_1.png" alt="" className="b-radius-20 w-100" />
                            </div>
                            <div className="mb-16">
                                <span className="date me-3">12-Окт-2024</span>
                                <span className="author-inline">от Юлия Фернандес</span>
                            </div>
                            <h2 className="mb-24">Идеальные идеи для пикника на природе</h2>
                            <p className="mb-24">Мы верим, что каждое путешествие — это уникальная история, которую стоит прожить. Наша команда стремится сделать ваш отдых не просто поездкой, а настоящим приключением, наполненным яркими эмоциями и незабываемыми открытиями. Мы заботимся о каждой детали, чтобы вы могли полностью погрузиться в атмосферу новых мест и наслаждаться каждым моментом своего отпуска.</p>
                            <p className="mb-24">Наша цель — предложить вам самые интересные и качественные туристические маршруты по всему миру. Мы тщательно отбираем направления и партнеров, чтобы гарантировать безопасность, комфорт и высокий уровень обслуживания на каждом этапе вашего пути.</p>
                            <h4 className="mb-16">Советы для идеального пикника</h4>
                            <ul className="mb-24">
                                <li>Выберите правильное место</li>
                                <li>Возьмите одежду по погоде</li>
                                <li>Приготовьте удобную еду</li>
                                <li>Возьмите с собой развлечения</li>
                                <li>Не оставляйте после себя мусор</li>
                            </ul>
                            <p className="mb-24">Каждое приключение начинается с первого шага, и мы здесь, чтобы сделать этот шаг незабываемым и безопасным для вас и ваших близких.</p>
                        </div>
                        <div className="col-lg-4">
                            <div className="sidebar">
                                <div className="sidebar-widget mb-32">
                                    <div className="widget-title-row"><h6>ПОСЛЕДНИЕ ЗАПИСИ</h6><i className="fa-light fa-horizontal-rule"></i></div>
                                    <div className="widget-content-block">
                                        <ul className="unstyled item-list">
                                            <li><Link to="/blog-detail">Идеальные идеи для пикника на природе</Link></li>
                                            <li><Link to="/blog-detail">Полное руководство по пикникам</Link></li>
                                            <li><Link to="/blog-detail">Лучшие места для пикника в мире</Link></li>
                                            <li><Link to="/blog-detail">Вкусные идеи еды для пикника</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="sidebar-widget mb-32">
                                    <div className="widget-title-row"><h6>КАТЕГОРИИ</h6><i className="fa-light fa-horizontal-rule"></i></div>
                                    <div className="widget-content-block">
                                        <ul className="unstyled item-list">
                                            <li><a href="#">Советы путешественникам</a></li>
                                            <li><a href="#">Направления</a></li>
                                            <li><a href="#">Еда и напитки</a></li>
                                            <li><a href="#">Приключения</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </PageLayout>
    )
}
