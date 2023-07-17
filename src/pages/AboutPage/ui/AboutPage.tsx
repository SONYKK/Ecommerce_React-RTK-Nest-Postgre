import React from 'react';
import { useTranslation } from 'react-i18next';
import cls from './AboutPage.module.scss'
import {Page} from "widgets/Page/Page";

const AboutPage = () => {
    const { t } = useTranslation('about');

    return (
        <Page>
            <h2>Данная страница нагло пизжена с сайта Визард-Трэйда</h2>
            <p>{t('Компания «Rodonit» рада приветствовать Вас на сайте нашего интернет магазина. ' +
                'Основная деятельность компании направлена на поставки корпоративному сектору, ' +
                'при этом мы всегда удовлетворяем потребности физических лиц. ' +
                'Своих корпоративных клиентов мы считаем партнерами по бизнесу и предоставляем ' +
                'наиболее выгодные условия и цены. В нашей работе мы ориентируемся на долгосрочные ' +
                'партнерские отношения и стараемся найти индивидуальный подход к каждому клиенту. ')}</p>
                <p>{t('Почему работать с "Rodonit" удобно и выгодно для любой компании')}</p>
            <ol>
                <li>
                    {t('широкий ассортимент товаров - на сегодняшний день в нашем ассортименте более 15000 позиций, представленных мировыми брендами с основными из которых мы имеем официальные партнерские соглашения')}
                </li>
                <li>
                    {t('низкий уровень цен – "Rodonit" является официальным партнером большинства производителей и крупнейших дистрибьюторов, обладая преимуществом перед последними в широте ассортимента')}
                </li>
                <li>
                    {t('работа под заказ - у наших клиентов есть возможность приобрести товар, отсутствующий в прайс-листе - под заказ (срок поставки товара определяется Вашим персональным менеджером)')}
                </li>
                <li>
                    {t('надежность для региональных клиентов - для работы с региональными партнерами через транспортные компании, нами разработана система упаковки товара, что позволяет контролировать при получении сохранность коробок.')}
                </li>
            </ol>
            
            <p>
                {t(' При работе с партнерами нашей целью не является формальная поставка ' +
                    'оборудования определенной конфигурации и комплектации в согласованные сроки. ' +
                    'Это априори подразумевается и обсуждению не подлежит. Однако формальный подход - ' +
                    'это не наш метод. В отношениях с заказчиком для нас главным является именно ' +
                    'сотрудничество, полноценное партнерство. Компания стремится к тому, ' +
                    'чтобы поставляемое оборудование максимально отвечало целям и задачам нашего партнера. ' +
                    'С этой целью мы стараемся подключиться к работе на этапе формирования технического ' +
                    'задания партнера для оптимизации принятия им окончательного решения. ' +
                    'То есть мы, и наш клиент совместно работаем над проектом, что позволяет оптимизировать ' +
                    'бизнес-процессы и избежать многочисленных ошибок ещё на стадии предварительных расчетов.')}
            </p>
        </Page>
    );
};

export default AboutPage;
