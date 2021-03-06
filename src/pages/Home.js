import React from 'react';
import home from '../assets/home.png'
import groomer from '../assets/groomer.png'

function Home() {
  return (
    <div>
      <h1>О НАС</h1>
      <section>
        <div>
          <img src={home} alt="Home" />
        </div>
        <div>
          <p>Команда ЛАПКИ — это профессионалы, объединенные любовью к животным. Наши грумеры найдут индивидуальный подход к каждому питомцу, а также предложат полезные и приятные процедуры в зависимости от породы и типа шерсти вашего домашнего любимца.<br />    Вы сможете наблюдать за ходом процедур из комфортной зоны ожидания через панорамное стекло, что позволит и вам и вашему питомцу спокойно наслаждаться процессом.</p>
        </div>
      </section>

      <h1>Наша команда</h1>
      <section>
        <div>
          <img src={groomer} alt="Home" />
          <h3>Мария<br/>Грумер</h3>
          <p>В 2017 году закончила школу груминга Романа Фомина в Москве. В 2018 году — курсы по салонному грумингу йоркширского терье      В 2017 году закончила школу груминга Романа Фомина в Москве. В 2018 году — курсы по салонному грумингу йоркширского терьера, ши-тцу и кошек у Марии Крук в Екатеринбурге. В 2019—2020 годах — курс по грумингу шпица у Евгении Кузнецовой и курсы «Йоркомания» у Ольги Остапенко в Краснодаре.<br/>С удовольствием работает в индустрии зоокрасоты и постоянно интересуется новыми стилями и направлениями в груминге. Любит животных — дома живут двое собак: карликовый пудель Джей и бишон фризеп Эмми, от которых в прошлом отказались хозяева.</p>
        </div>
        
        <div>
          <img src={groomer} alt="Home" />
          <h3>Наталия<br/>Администратор</h3>
          <p>Очень любит животных. С самого детства были собаки, сейчас есть кошка сфинкс зовут Клеопатра. Если бы жила одна, то дома был бы питомник, так как не может пройти мимо бездомного животного, обязательно накормит, погладит и каждый раз расстраивается, что не может забрать к себе домой.</p>
        </div>

        <div>
          <img src={groomer} alt="Home" />
          <h3>Дарья<br/>Грумер</h3>
          <p>В 2019 году закончила Академию груминга «Боншери» в Москве. Регулярно повышает квалификацию и посещает мастер-классы.<br/>Считает что без любви к друзьям нашим меньшим, эту профессию лучше не осваивать. За счет трепетного и нежного отношения ко всем питомцам, Дарья легко находит с ними общий язык. Как владелец собаки породы самоед, которую зовут Тая, знает насколько важен своевременный уход за питомцем, ведь в этом заключается одна из составляющих заботы и любви к ним.</p>
        </div>
      </section>

    </div>
  )
}
export default Home