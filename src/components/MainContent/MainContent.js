import React from 'react';
import './MainContent.css';
import peterImg from '../../images/peter.jpg';
import stairsImg from '../../images/stairs.jpg';
import chekhovImg from '../../images/chekhov.jpg';

function MainContent() {
  return React.createElement(
    'main',
    { className: 'main-container' },

    // Секция Bento-сетки (информация)
    React.createElement(
      'section',
      { className: 'bento-section' },
      React.createElement(
        'div',
        { className: 'bento-grid' },
        
        // Главная текстовая карточка
        React.createElement(
          'div',
          { className: 'bento-card span-2' },
          React.createElement('h2', null, 'Первая военно-морская база'),
          React.createElement('p', null, 'Основанный в 1698 году Петром I, Таганрог стал первой военно-морской базой России и первым портом на открытом морском побережье. Этот город строился по заранее разработанному генеральному плану, что сделало его архитектуру уникальной для своего времени. Сегодня это важнейший промышленный и культурный центр Юга России, сохранивший очарование старинных купеческих особняков и уютных мощеных улиц.')
        ),

        // Карточка фактов
        React.createElement(
          'div',
          { className: 'bento-card accent-card' },
          React.createElement('h3', null, 'Паспорт города'),
          React.createElement('ul', { className: 'fact-list' },
            React.createElement('li', null, React.createElement('span', null, 'Страна:'), ' Россия'),
            React.createElement('li', null, React.createElement('span', null, 'Основан:'), ' 1698 год'),
            React.createElement('li', null, React.createElement('span', null, 'Статус:'), ' Город воинской славы')
          )
        ),

        // Карточка Чехова
        React.createElement(
          'div',
          { className: 'bento-card span-3' },
          React.createElement('h2', null, 'Родина Антона Павловича Чехова'),
          React.createElement('p', null, 'Таганрог неразрывно связан с именем одного из величайших драматургов мира — А.П. Чехова. Здесь он родился, провел детство и юность, впитал колорит провинциальной жизни, который позже гениально отразил в своих произведениях. Город бережно хранит память о писателе: здесь работают музеи, театр его имени и знаменитая библиотека, основанная при его участии.')
        )
      )
    ),

    // Секция галереи
    React.createElement(
      'section',
      { className: 'gallery-section' },
      React.createElement('h2', { className: 'section-title' }, 'Визитные карточки города'),
      React.createElement(
        'div',
        { className: 'modern-gallery' },
        
        React.createElement(
          'figure',
          { className: 'gallery-card' },
          React.createElement('img', { src: peterImg, alt: 'Памятник Петру I' }),
          React.createElement('figcaption', null, 
            React.createElement('h4', null, 'Памятник Петру I'),
            React.createElement('p', null, 'Оригинальный монумент работы скульптора М.М. Антокольского (1903 год).')
          )
        ),

        React.createElement(
          'figure',
          { className: 'gallery-card' },
          React.createElement('img', { src: stairsImg, alt: 'Каменная лестница' }),
          React.createElement('figcaption', null, 
            React.createElement('h4', null, 'Каменная лестница'),
            React.createElement('p', null, 'Построена в 1823 году. Связывает центральную улицу с набережной.')
          )
        ),

        React.createElement(
          'figure',
          { className: 'gallery-card' },
          React.createElement('img', { src: chekhovImg, alt: 'Домик Чехова' }),
          React.createElement('figcaption', null, 
            React.createElement('h4', null, 'Домик Чехова'),
            React.createElement('p', null, 'Небольшой флигель, где в 1860 году родился будущий писатель.')
          )
        )
      )
    )
  );
}

export default MainContent;