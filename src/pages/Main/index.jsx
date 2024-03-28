import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Text, Button, Img, Input, GoogleMap, Heading } from "../../components";

export default function MainPage() {
  const [searchBarValue1, setSearchBarValue1] = React.useState("");

  return (
    <>
      <Helmet>
        <title>Medprima</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full border-gray-50_19 border border-solid bg-gray-50">
        <header className="p-[22px] sm:p-5 bg-teal-400">
          <div className="flex md:flex-col justify-between items-center w-full gap-5 mx-auto max-w-[1330px]">
            <div className="flex justify-center w-[8%] md:w-full">
              <div className="h-[105px] w-full md:h-auto relative">
                <Img src="images/img_vector_white_a700_105x113.svg" alt="vector_one" className="h-[105px]" />
                <div className="flex flex-col items-start w-[86%] h-max gap-[5px] left-0 bottom-0 right-0 top-0 m-auto absolute">
                  <Img src="images/img_vector.svg" alt="vector_three" className="h-[23px] ml-[11px] md:ml-0" />
                  <Text size="xl" as="p" className="!font-lora !font-medium">
                    МЕДПРИМА
                  </Text>
                </div>
              </div>
            </div>
            <ul className="flex self-start mt-[30px] gap-[45px] flex-wrap">
              <li>
                <a href="#" className="self-start">
                  <Text size="3xl" as="p">
                    О нас
                  </Text>
                </a>
              </li>
              <li>
                <a href="#" className="self-end">
                  <Text size="3xl" as="p">
                    Направления
                  </Text>
                </a>
              </li>
              <li>
                <a href="#" className="self-end">
                  <Text size="3xl" as="p">
                    Врачи
                  </Text>
                </a>
              </li>
              <li>
                <a href="#" className="self-start">
                  <Text size="3xl" as="p">
                    Клиентам
                  </Text>
                </a>
              </li>
              <li>
                <a href="#" className="self-start">
                  <Text size="3xl" as="p">
                    Контакты
                  </Text>
                </a>
              </li>
            </ul>
            <div className="flex justify-between w-[6%] md:w-full gap-5">
              <a href="./SignUPpacnum"><Img src="images/img_lock.svg" alt="lock_one" className="h-[23px]" /></a>
              <a href="#"><Img src="images/img_search.svg" alt="search_one" className="h-[23px] w-[23px]" /></a>
            </div>
          </div>
        </header>
        <div className="mt-16">
          <div>
            <div className="h-[555px] md:h-auto pt-[21px] pl-[21px] sm:pt-5 sm:pl-5 bg-yellow-100 relative">
              <div className="flex md:flex-col justify-center items-start w-full max-w-[1392px]">
                <Heading size="md" as="h1" className="w-[49%] md:w-full mt-[30px] right-[35px] z-[1] relative">
                  МедПрима — клиника для детей и взрослых
                </Heading>
                <Img
                  src="images/img_36_transformed_1.png"
                  alt="36transformed"
                  className="w-[51%] md:w-full ml-[-115px] top-[45px] md:ml-0 relative object-cover"
                />
              </div>
              <div className="flex flex-col items-start gap-[30px] bottom-[24%] left-[3%] m-auto absolute">
                <Text size="4xl" as="p" className="!text-black-900">
                  Круглосуточный прием
                </Text>
                <Text size="4xl" as="p" className="!text-black-900">
                  Вызов врача на дом{" "}
                </Text>
                <Text size="4xl" as="p" className="!text-black-900">
                  Собственная служба скорой помощи
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-start w-full mt-[50px] pt-1.5 gap-[42px] mx-auto md:p-5 max-w-[1285px]">
              <Text size="8xl" as="p" className="!text-black-900 !font-lora">
                Предоставляемые услуги
              </Text>
              <Input
                size="lg"
                shape="round"
                name="search"
                placeholder={`Введите запрос...`}
                value={searchBarValue1}
                onChange={(e) => setSearchBarValue1(e)}
                suffix={
                  <div className="flex justify-center items-center w-[23px] h-[23px]">
                    {searchBarValue1?.length > 0 ? (
                      <CloseSVG onClick={() => setSearchBarValue1("")} height={23} width={23} />
                    ) : (
                      <Img src="images/img_search_black_900.svg" alt="search" className="cursor-pointer" />
                    )}
                  </div>
                }
                className="self-stretch gap-[35px] sm:px-5 !text-black-900_7f border-black-900 border border-solid"
              />
            </div>
            <div className="w-full mt-[70px] py-1 mx-auto md:p-5 max-w-[1157px]">
              <div className="flex flex-col items-start mb-[33px]">
                <Text size="6xl" as="p" className="!text-black-900 !font-lora">
                  Популярные услуги
                </Text>
                <div className="flex justify-between w-[68%] md:w-full mt-[41px] gap-5 flex-wrap">
                  <Text size="3xl" as="p" className="self-end !text-black-900">
                    Гастроскопия
                  </Text>
                  <Text size="3xl" as="p" className="!text-black-900">
                    Лабораторная диагностка
                  </Text>
                  <Text size="3xl" as="p" className="self-start !text-black-900">
                    Рентген
                  </Text>
                </div>
                <div className="flex md:flex-col justify-between items-start w-[64%] md:w-full mt-[21px] gap-5">
                  <Text size="3xl" as="p" className="!text-black-900">
                    Колоноскопия
                  </Text>
                  <div className="flex sm:flex-col justify-between items-start w-[62%] md:w-full gap-5">
                    <Text size="3xl" as="p" className="w-[74%] sm:w-full !text-black-900">
                      <>
                        МРТ (магнитно-резонансная
                        <br />
                        томография)
                      </>
                    </Text>
                    <Text size="3xl" as="p" className="!text-black-900">
                      УЗИ
                    </Text>
                  </div>
                </div>
                <div className="flex md:flex-col self-stretch justify-between items-center mt-[84px] ml-1 gap-5 md:ml-0">
                  <div className="flex justify-center w-[68%] md:w-full">
                    <div className="flex flex-col items-start w-full">
                      <Text size="6xl" as="p" className="!text-black-900 !font-lora">
                        Популярные направления
                      </Text>
                      <div className="flex md:flex-col self-stretch justify-between items-center mt-[54px] gap-5">
                        <div className="flex justify-between w-[66%] md:w-full gap-5 flex-wrap">
                          <Text size="3xl" as="p" className="self-end !text-black-900">
                            Акушерство-гинекология
                          </Text>
                          <Text size="3xl" as="p" className="self-start !text-black-900">
                            Косметология
                          </Text>
                        </div>
                        <Text size="3xl" as="p" className="!text-black-900">
                          Офтальмология
                        </Text>
                      </div>
                      <div className="flex mt-[22px] flex-wrap">
                        <Text size="3xl" as="p" className="self-start !text-black-900">
                          Гастроэнтерология
                        </Text>
                        <Text size="3xl" as="p" className="self-end ml-[127px] !text-black-900">
                          Нервология
                        </Text>
                        <Text size="3xl" as="p" className="self-end ml-24 !text-black-900">
                          Педиатрия
                        </Text>
                      </div>
                      <div className="flex sm:flex-col self-stretch justify-between mt-[22px] gap-5">
                        <Text size="3xl" as="p" className="self-end !text-black-900">
                          Кардиология
                        </Text>
                        <div className="flex self-start justify-between w-[54%] sm:w-full gap-5 flex-wrap">
                          <Text size="3xl" as="p" className="!text-black-900">
                            Онкология
                          </Text>
                          <Text size="3xl" as="p" className="!text-black-900">
                            Ревматология
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col self-end items-center mb-[7px] gap-[11px] border-black-900 border-l-[0.5px] border-solid">
                    <Button color="black_900" size="4xl" variant="outline" shape="square" className="w-[64px]">
                      <Img src="images/img_plus.svg" />
                    </Button>
                    <Text as="p" className="!text-black-900">
                      Все услуги
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center h-screen">
              <Img src="images/map.svg"/>
            </div>
            <div className="flex flex-col items-start w-full mt-[70px] gap-12 mx-auto md:p-5 max-w-[1306px]">
              <Text size="8xl" as="p" className="!text-black-900 !font-lora">
                Наши специалисты
              </Text>
              <div className="flex md:flex-col self-stretch ml-[31px] gap-[25px] md:ml-0">
                <div className="flex flex-col items-start w-full">
                  <Img
                    src="images/img_rectangle_17.png"
                    alt="жуманова"
                    className="h-[300px] w-full md:h-auto object-cover rounded-[10px]"
                  />
                  <Text size="3xl" as="p" className="mt-[18px] !text-black-900">
                    Жуманова Екатерина
                  </Text>
                  <Text size="xl" as="p" className="mt-2 !text-black-900">
                    Педиатор
                  </Text>
                </div>
                <div className="flex flex-col items-start w-full">
                  <Img
                    src="images/img_rectangle_18.png"
                    alt="image"
                    className="h-[300px] w-full md:h-auto object-cover rounded-[10px]"
                  />
                  <Text size="3xl" as="p" className="mt-[18px] !text-black-900">
                    Руслова Анастасия
                  </Text>
                  <Text size="xl" as="p" className="mt-1.5 !text-black-900">
                    Онколог
                  </Text>
                </div>
                <div className="flex flex-col items-start w-full">
                  <Img
                    src="images/img_rectangle_19.png"
                    alt="image"
                    className="h-[300px] w-full md:h-auto object-cover rounded-[10px]"
                  />
                  <Text size="3xl" as="p" className="mt-[18px] !text-black-900">
                    Туршов Алексей
                  </Text>
                  <Text size="xl" as="p" className="mt-2 !text-black-900">
                    Хирург-травматолог
                  </Text>
                </div>
                <div className="flex flex-col items-start w-full">
                  <Img
                    src="images/img_rectangle_20.png"
                    alt="image"
                    className="h-[300px] w-full md:h-auto object-cover rounded-[10px]"
                  />
                  <Text size="3xl" as="p" className="mt-[18px] !text-black-900">
                    Шумко Валерия
                  </Text>
                  <Text size="xl" as="p" className="mt-1.5 !text-black-900">
                    Косметолог
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex justify-end w-full mt-[105px] p-[55px] mx-auto md:p-5 bg-orange-50 max-w-[1265px]">
              <div className="flex flex-col items-start w-[93%] md:w-full mb-[34px] mr-3.5 gap-[42px] md:mr-0">
                <Text size="7xl" as="p" className="ml-[241px] md:ml-0 !text-black-900 !font-lora">
                  Подпишитесь на рассылку
                </Text>
                <div className="flex md:flex-col self-stretch gap-[7px]">
                  <Input
                    shape="round"
                    name="электронная"
                    placeholder={`Электронная почта`}
                    className="sm:px-5 border-gray-600 border border-solid flex-grow"
                  />
                  <Button
                    color="teal_400"
                    size="3xl"
                    shape="round"
                    className="sm:px-5 border-gray-600 border border-solid min-w-[228px]"
                  >
                    Подписаться
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="mt-[152px] p-12 md:p-5 bg-teal-400">
          <div className="w-full mt-0.5 mx-auto max-w-[1248px]">
            <div className="flex md:flex-col justify-center items-center">
              <div className="flex flex-col items-start w-full gap-[37px] bottom-[60px] relative">
                <Text size="5xl" as="p" className="!font-lora">
                  Карта сайта
                </Text>
                <div className="flex self-stretch justify-between items-center gap-5">
                  <ul className="flex flex-col items-start gap-[18px]">
                    <li>
                      <a href="#">
                        <Text as="p">Услуги</Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p">Клиники</Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p">Пациентам</Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p">Врачи</Text>
                      </a>
                    </li>
                  </ul>
                  <ul className="flex flex-col items-start gap-[19px]">
                    <li>
                      <a href="#">
                        <Text as="p">Акции</Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p">Программы</Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p">О компании</Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p">Пресс-центр</Text>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col items-start w-full mt-[25px] ml-[53px] gap-[76px] md:gap-[57px] md:ml-0 sm:gap-[38px]">
                <div className="flex self-stretch justify-between items-center ml-[106px] gap-5 md:ml-0">
                  <ul className="flex flex-col self-end items-start mb-[27px] gap-[18px] top-[30px] relative">
                    <li>
                      <a href="#">
                        <Text as="p">Партнеры</Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p">Программа лояльности</Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p">Вопросы и ответы</Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p">Сотрудничество</Text>
                      </a>
                    </li>
                  </ul>
                  <div className="h-full w-px bg-white-A700" />
                </div>
                <Text size="md" as="p">
                  Авторское право © 2024. Все права защищены
                </Text>
              </div>
              <div className="flex flex-col items-start w-full mt-1 ml-6 gap-11 bottom-[75px] md:ml-0 relative">
                <Text size="5xl" as="p" className="!font-lora">
                  Присоединяйтесь к нам
                </Text>
                <div className="flex justify-between w-[66%] md:w-full gap-5">
                  <a href="#" shape="square" className="w-[45px]">
                    <Img src="images/tg.svg" />
                  </a>
                  <a href="#" shape="square" className="w-[45px]">
                    <Img src="images/vk.svg" />
                  </a>
                  <a href="#" shape="square" className="w-[45px]">
                    <Img src="images/wh.svg" />
                  </a>
                  <a href="#" shape="square" className="w-[45px]">
                    <Img src="images/yb.svg" />
                  </a>
                </div>
                <Text size="5xl" as="p">
                  +7 (111) 111 11 11
                </Text>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
