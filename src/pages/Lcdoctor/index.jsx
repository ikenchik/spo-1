import React from "react";
import { Helmet } from "react-helmet";
import { Text, Button, Img, Heading, Input } from "../../components";

export default function LcdoctorPage() {
  return (
    <>
      <Helmet>
        <title>Medprima</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-gray-50">
        <header className="bg-teal-400">
          <div className="flex justify-between items-center w-full gap-5 mx-auto md:p-5 max-w-[1326px]">
            <div className="flex justify-center w-[4%]">
              <div className="h-[41px] w-full md:h-auto relative">
                <Img src="images/img_favorite.svg" alt="favorite_one" className="h-[41px]" />
                <div className="flex flex-col items-center h-max w-max left-0 bottom-0 right-0 top-0 m-auto absolute">
                  <Img src="images/img_vector.svg" alt="vector_one" className="h-[8px]" />
                  <Text size="xs" as="p" className="!font-lora">
                    МЕДПРИМА
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center w-[17%] gap-2.5">
              <div className="w-[15%] bg-gray-200 rounded-[16px]">
                <Img
                  src="images/img_ellipse_16.png"
                  alt="circleimage"
                  className="h-[32px] w-[32px] rounded-[50%] relative"
                />
              </div>
              <Text as="p" className="w-[200px]">
                Аноним Анонимов
              </Text>
            </div>
          </div>
        </header>
        <div className="w-full mt-4 mx-auto md:p-5 max-w-[1273px]">
          <div className="flex md:flex-col justify-center items-start gap-[15px]">
            <div className="flex flex-col items-center justify-center w-[16%] md:w-full p-[21px] sm:p-5 bg-teal-400 rounded-[10px]">
              <Img
                src="images/img_ellipse_10_150x150.png"
                alt="circleimage_one"
                className="h-[150px] w-[150px] rounded-[50%] relative"
              />
              <Heading as="h1" className="w-[86%] md:w-full !text-white-A700 text-center">
                Аноним Анонимов
              </Heading>
              <div className="flex flex-col items-start w-[60%] md:w-full mt-[11px] gap-3.5">
                <Text size="md" as="p">
                  Здоровье
                </Text>
                <Text size="md" as="p">
                  <>
                    Медицинская
                    <br />
                    карта
                  </>
                </Text>
                <Text size="md" as="p">
                  Сообщения
                </Text>
                <Text size="md" as="p">
                  События
                </Text>
                <Text size="md" as="p">
                  Направления
                </Text>
                <Text size="md" as="p">
                  Врачи
                </Text>
                <Text size="md" as="p">
                  Рецепты
                </Text>
              </div>
            </div>
            <div className="flex flex-col md:self-stretch gap-7 flex-1">
              <div className="flex flex-col items-center gap-[11px] p-3.5 bg-gray-400_4c rounded-[10px]">
                <Text size="xl" as="p" className="!text-black-900 text-center">
                  Аноним, какого врача найти?
                </Text>
                <Input type="text" className="flex self-stretch justify-between items-center mb-[54px] gap-5 p-1.5 bg-white-A700 rounded-[10px] placeholder-center" placeholder="Специализация или ФИО" ></Input>
              </div>
              <div className="flex md:flex-col justify-center items-start gap-3.5">
                <div className="flex flex-col items-start md:self-stretch mt-[3px] flex-1">
                  <Heading as="h2">Активность</Heading>
                  <div className="flex flex-col self-stretch mt-[11px] gap-[21px]">
                    <div className="flex justify-between items-center gap-5 p-[18px] bg-white-A700 shadow-xs flex-1 cursor-pointer rounded-[10px] hover:shadow-xs">
                      <div className="flex items-center gap-[21px]">
                        <Button color="red_200" size="2xl" className="w-[49px] rounded-[24px]">
                          <Img src="images/img_vector_white_a700.svg" />
                        </Button>
                        <div className="flex flex-col items-start">
                          <Text size="xl" as="p" className="!text-black-900">
                            Чат с пациентом
                          </Text>
                          <Text size="md" as="p" className="!text-gray-700">
                            Сегодня в 14:00
                          </Text>
                        </div>
                      </div>
                      <div className="flex self-end justify-center w-[25%] mr-[113px] md:mr-0">
                        <div className="flex justify-center items-start w-full gap-[11px]">
                          <Img
                            src="images/img_ellipse_16.png"
                            alt="чат_с_пациентом"
                            className="h-[32px] w-[32px] rounded-[50%]"
                          />
                          <div className="flex flex-col items-start mt-0.5">
                            <Text size="xl" as="p" className="!text-black-900">
                              Верпов А. С.
                            </Text>
                            <Text size="md" as="p" className="mt-[-2px] !text-gray-700 relative">
                              Терапевт
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center gap-5 p-[18px] bg-white-A700 shadow-xs flex-1 cursor-pointer rounded-[10px] hover:shadow-xs">
                      <div className="flex">
                        <div className="flex items-start gap-[21px]">
                          <Button color="cyan_200" size="2xl" className="w-[49px] rounded-[24px]">
                            <Img src="images/img_upload.svg" />
                          </Button>
                          <div className="flex flex-col items-start mt-0.5">
                            <Text size="xl" as="p" className="!text-black-900">
                              Видеоконсультация
                            </Text>
                            <Text size="md" as="p" className="!text-gray-700">
                              Сегодня в 14:00
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex self-end justify-center w-[25%] mb-0.5 mr-[113px] md:mr-0">
                        <div className="flex justify-center items-start w-full gap-[11px]">
                          <Img
                            src="images/img_ellipse_16.png"
                            alt="circleimage"
                            className="h-[32px] w-[32px] rounded-[50%]"
                          />
                          <div className="flex flex-col items-start mt-0.5">
                            <Text size="xl" as="p" className="!text-black-900">
                              Верпов А. С.
                            </Text>
                            <Text size="md" as="p" className="mt-[-2px] !text-gray-700 relative">
                              Терапевт
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex self-stretch items-center mt-[21px] gap-[15px] p-4 bg-white-A700 shadow-xs rounded-[10px]">
                    <Button color="red_A700_4c" size="2xl" className="w-[49px] rounded-[24px]">
                      <Img src="images/img_television.svg" />
                    </Button>
                    <Text size="xl" as="p" className="w-[84%] !text-black-900">
                      <>
                        Заполнить анкету перед визитом <br />в клинику
                      </>
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-center w-[33%] md:w-full gap-4">
                  <Heading as="h3" className="mt-[3px]">
                    Последний пациент
                  </Heading>
                  <div className="flex self-stretch p-2.5 bg-white-A700 rounded-[10px]">
                    <div className="flex flex-col items-start w-[87%] md:w-full mt-[9px] gap-[31px]">
                      <div className="flex self-stretch items-start ml-3.5 gap-[7px] md:ml-0">
                        <div className="h-[64px] w-[64px] bg-gray-200 rounded-[32px]" />
                        <Text size="lg" as="p" className="w-[75%] mt-[9px] !text-black-900">
                          Верпов Александр Сергеевич
                        </Text>
                      </div>
                      <Button color="teal_400" size="xs" shape="round" className="min-w-[94px]">
                        Выбрать
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="mt-[284px] p-12 md:p-5 bg-teal-400">
          <div className="w-full mt-0.5 mx-auto max-w-[1248px]">
            <div className="flex md:flex-col justify-between items-center gap-5">
              <div className="flex flex-col items-start w-[31%] md:w-full gap-[37px] bottom-[60px] relative">
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
              <div className="flex md:flex-col justify-center items-start w-[62%] md:w-full mt-1 gap-6">
                <div className="flex flex-col items-start w-full mt-[21px] gap-[76px] md:gap-[57px] sm:gap-[38px]">
                  <div className="flex self-stretch justify-between items-center ml-[73px] gap-5 md:ml-0">
                    <div className="flex flex-col self-end items-start mb-[27px] gap-[18px] top-[25px] relative">
                      <a href="#">
                        <Text as="p">Партнеры</Text>
                      </a>
                      <a href="#">
                        <Text as="p">Программа лояльности</Text>
                      </a>
                      <a href="#">
                        <Text as="p">Вопросы и ответы</Text>
                      </a>
                      <a href="#">
                        <Text as="p">Сотрудничество</Text>
                      </a>
                    </div>
                    <div className="h-full w-px bg-white-A700" />
                  </div>
                  <Text size="md" as="p">
                    Авторское право © 2024. Все права защищены
                  </Text>
                </div>
                <div className="flex flex-col items-start w-full gap-11 bottom-[30px] relative">
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
          </div>
        </footer>
      </div>
    </>
  );
}
