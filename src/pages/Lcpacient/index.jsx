import React from "react";
import { Helmet } from "react-helmet";
import { Text, Button, Img, Heading } from "../../components";

export default function LcpacientPage() {
  return (
    <>
      <Helmet>
        <title>Medprima</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex w-full flex-col items-center bg-gray-50">
        <header className="flex items-center justify-center self-stretch bg-teal-400">
          <div className="mx-auto flex w-full max-w-[1326px] items-center justify-between gap-5 md:p-5">
            <div className="flex w-[4%] justify-center">
              <div className="relative h-[41px] w-full md:h-auto">
                <Img src="images/img_favorite.svg" alt="favorite_one" className="h-[41px] w-full" />
                <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-max flex-col items-center">
                  <Img src="images/img_vector.svg" alt="vector_one" className="relative right-[3px] h-[10px]" />
                  <Text size="xs" as="p" className="relative right-[3px] !font-lora">
                    МЕДПРИМА
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex w-[17%] items-center justify-center gap-2.5">
              <div className="h-[32px] w-[32px] rounded-[16px] bg-gray-200" />
              <Text as="p" className="w-[200px]">
                Аноним Анонимов
              </Text>
            </div>
          </div>
        </header>
        <div className="mx-auto mt-4 flex w-full max-w-[1273px] justify-center md:p-5">
          <div className="flex w-full items-start justify-center gap-[15px] md:flex-col">
            <div className="flex w-[16%] flex-col items-center justify-center rounded-[10px] bg-teal-400 p-[21px] md:w-full sm:p-5">
              <div className="mt-[3px] h-[150px] w-[150px] self-stretch rounded-[75px] bg-gray-200" />
              <Heading as="h1" className="w-[86%] text-center !text-white-A700 md:w-full">
                Аноним Анонимов
              </Heading>
              <div className="mt-[11px] flex w-[60%] flex-col items-start gap-3.5 md:w-full">
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
            <div className="flex flex-1 flex-col gap-7 md:self-stretch">
              <div className="flex flex-col items-center gap-[11px] rounded-[10px] bg-gray-400_4c p-3.5">
                <Text size="xl" as="p" className="text-center !text-black-900">
                  Аноним, какого врача найти?
                </Text>
                <div className="mb-[54px] flex items-center justify-between gap-5 self-stretch rounded-[10px] bg-white-A700 p-1.5">
                  <Img
                    src="images/img_search_black_900.svg"
                    alt="search_one"
                    className="ml-[13px] h-[16px] w-[16px] md:ml-0"
                  />
                  <Text size="xl" as="p" className="mr-[406px] self-end text-center !text-black-900_4c md:mr-0">
                    Специализация или ФИО
                  </Text>
                </div>
              </div>
              <div className="flex items-start justify-center gap-3.5 md:flex-col">
                <div className="mt-[3px] flex flex-1 flex-col items-start gap-[11px] md:self-stretch">
                  <Heading as="h2">Активность</Heading>
                  <div className="flex flex-col gap-[21px] self-stretch">
                    <div className="flex flex-1 cursor-pointer rounded-[10px] bg-white-A700 p-[18px] shadow-xs hover:shadow-xs">
                      <div className="flex w-[83%] items-center justify-between gap-5 md:w-full">
                        <div className="flex items-center gap-[21px]">
                          <Button color="red_200" size="2xl" className="w-[49px] rounded-[24px]">
                            <Img src="images/img_vector_white_a700.svg" />
                          </Button>
                          <div className="flex flex-col">
                            <Text size="xl" as="p" className="!text-black-900">
                              Чат с врачом
                            </Text>
                            <Text size="md" as="p" className="!text-gray-700">
                              Сегодня в 14:00
                            </Text>
                          </div>
                        </div>
                        <div className="flex w-[25%] justify-center self-end">
                          <div className="flex w-full items-start justify-center gap-[11px]">
                            <Img
                              src="images/img_ellipse_16.png"
                              alt="чат_с_врачом"
                              className="h-[32px] w-[32px] rounded-[50%]"
                            />
                            <div className="mt-0.5 flex flex-col items-start">
                              <Text size="xl" as="p" className="w-[120px] !text-black-900">
                                Верпов А. С.
                              </Text>
                              <Text size="md" as="p" className="relative mt-[-2px] !text-gray-700">
                                Терапевт
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 cursor-pointer items-center gap-[15px] rounded-[10px] bg-white-A700 p-[18px] no-underline hover:shadow-xs">
                      <div className="flex w-[83%] items-center justify-between gap-5 md:w-full sm:flex-col">
                        <div className="flex items-start gap-[21px]">
                          <Button color="cyan_200" size="2xl" className="w-[49px] rounded-[24px]">
                            <Img src="images/img_upload.svg" />
                          </Button>
                          <div className="mt-0.5 flex flex-col items-start">
                            <Text size="xl" as="p" className="!text-black-900">
                              Видеоконсультация
                            </Text>
                            <Text size="md" as="p" className="!text-gray-700">
                              Сегодня в 14:00
                            </Text>
                          </div>
                        </div>
                        <div className="mb-0.5 flex w-[25%] items-start justify-center gap-[11px] self-end sm:w-full">
                          <Img
                            src="images/img_ellipse_16.png"
                            alt="circleimage"
                            className="h-[32px] w-[32px] rounded-[50%]"
                          />
                          <div className="mt-0.5 flex flex-col items-start">
                            <Text size="xl" as="p" className="w-[120px] !text-black-900">
                              Верпов А. С.
                            </Text>
                            <Text size="md" as="p" className="relative mt-[-2px] !text-gray-700">
                              Терапевт
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 cursor-pointer items-center gap-[15px] rounded-[10px] bg-white-A700 p-4 shadow-xs hover:shadow-xs">
                      <Button color="red_A700_4c" size="2xl" className="w-[49px] rounded-[24px]">
                        <Img src="images/img_television.svg" />
                      </Button>
                      <Text size="xl" as="p" className="w-[84%] !text-black-900">
                        <>
                          Заполнить анкету перед визитом <br />в клинику
                        </>
                      </Text>
                    </div>
                    <div className="flex flex-1 cursor-pointer rounded-[10px] bg-white-A700 p-4 shadow-xs hover:shadow-xs">
                      <div className="flex w-[83%] items-center justify-between gap-5 md:w-full sm:flex-col">
                        <div className="flex items-start gap-[15px]">
                          <Button color="orange_A100" size="2xl" className="w-[49px] rounded-[24px]">
                            <Img src="images/img_signal.svg" />
                          </Button>
                          <div className="flex flex-col items-start gap-0.5">
                            <Text size="xl" as="p" className="!text-black-900">
                              Поставить оценку врачу
                            </Text>
                            <Text size="s" as="p" className="!text-gray-700">
                              Оценку увидят только руководители клиники
                            </Text>
                          </div>
                        </div>
                        <div className="mb-0.5 flex w-[25%] items-start justify-center gap-2.5 self-end sm:w-full">
                          <Img
                            src="images/img_ellipse_16.png"
                            alt="circleimage"
                            className="h-[32px] w-[32px] rounded-[50%]"
                          />
                          <div className="flex flex-col items-start">
                            <Text size="xl" as="p" className="!text-black-900">
                              Верпов А. С.
                            </Text>
                            <Text size="md" as="p" className="relative mt-[-2px] !text-gray-700">
                              Терапевт
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[33%] md:w-full">
                  <div className="flex flex-col items-start">
                    <div className="flex items-start justify-between gap-5 self-stretch">
                      <Heading as="h3">Врачи онлайн</Heading>
                      <Button color="teal_400" size="sm" shape="round" className="mb-[3px] min-w-[115px]">
                        Поключиться
                      </Button>
                    </div>
                    <div className="mt-[11px] flex flex-col gap-3 self-stretch">
                      <div className="flex flex-1 justify-center rounded-[10px] bg-white-A700 px-2.5 pt-2.5 shadow-xs">
                        <div className="mt-[7px] flex w-full items-start justify-center">
                          <div className="mb-3 flex flex-1 flex-col items-start">
                            <Heading size="xs" as="h4">
                              Все врачи
                            </Heading>
                            <Text size="s" as="p" className="mt-[3px] !text-gray-700">
                              получите косультацию сейчас или в любое удобное для вас время
                            </Text>
                            <Button color="teal_400" size="xs" shape="round" className="mt-[15px] min-w-[94px]">
                              Выбрать
                            </Button>
                          </div>
                          <Img
                            src="images/img_juicy_doctor_in.png"
                            alt="image"
                            className="h-[109px] w-[41%] object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex flex-1 justify-center rounded-[10px] bg-white-A700 px-2.5 pt-2.5 shadow-xs">
                        <div className="mt-[7px] flex w-full items-start justify-between gap-5">
                          <div className="mb-3 flex flex-col items-start">
                            <Heading size="xs" as="h5">
                              Терапевт
                            </Heading>
                            <Text size="s" as="p" className="mt-[5px] !text-gray-700">
                              вам ответят в течение 5 минут
                            </Text>
                            <Button color="teal_400" size="xs" shape="round" className="mt-[46px] min-w-[94px]">
                              Связаться
                            </Button>
                          </div>
                          <Img
                            src="images/img_juicy_doctor_in.png"
                            alt="juicydoctorin"
                            className="h-[109px] w-[42%] object-cover"
                          />
                        </div>
                      </div>
                    </div>
                    <Heading as="h6" className="mt-[30px]">
                      Вы посетили
                    </Heading>
                    <div className="mt-[7px] flex self-stretch rounded-[10px] bg-white-A700 p-3">
                      <div className="ml-[7px] mt-1 flex w-[88%] flex-col gap-[23px] md:ml-0 md:w-full">
                        <div>
                          <div className="flex items-center gap-4">
                            <Img
                              src="images/img_ellipse_10.png"
                              alt="circleimage"
                              className="h-[64px] w-[64px] rounded-[50%]"
                            />
                            <div className="flex flex-1 flex-col items-start">
                              <Text size="lg" as="p" className="!text-black-900">
                                Верпов Александр Сергеевич
                              </Text>
                              <Text size="md" as="p" className="!text-gray-700">
                                Терапевт
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-[15px]">
                          <Button color="teal_400" size="md" shape="round" className="min-w-[120px]">
                            Записаться
                          </Button>
                          <Button color="teal_400" size="md" shape="round" className="min-w-[105px]">
                            Написать
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="mt-[57px] flex items-center justify-center self-stretch bg-teal-400 p-12 md:p-5">
          <div className="mx-auto mt-0.5 flex w-full max-w-[1248px] justify-center">
            <div className="flex w-full items-center justify-between gap-5 md:flex-col">
              <div className="relative bottom-20 flex w-[370px] flex-col items-start gap-[37px] md:w-full">
                <Text size="5xl" as="p" className="!font-lora">
                  Карта сайта
                </Text>
                <div className="flex items-center justify-between gap-5 self-stretch">
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
              <div className="mt-1 flex w-[62%] items-start justify-between gap-5 md:w-full md:flex-col">
                <div className="mt-[75px] flex flex-col items-end gap-[104px] md:gap-[78px] sm:gap-[52px]">
                  <div className="relative bottom-[18px] flex flex-col items-start gap-[18px] self-start">
                    <Text as="p">Партнеры</Text>
                    <Text as="p">Программа лояльности</Text>
                    <Text as="p">Вопросы и ответы</Text>
                    <Text as="p">Сотрудничество</Text>
                  </div>
                  <Text size="md" as="p">
                    Авторское право © 2024. Все права защищены
                  </Text>
                </div>
                <div className="flex w-[52%] justify-center md:w-full">
                  <div className="flex w-full items-start justify-center gap-6 sm:flex-col">
                    <div className="mt-[21px] h-[250px] w-px bg-white-A700 sm:h-px sm:w-[250px]" />
                    <div className="flex flex-1 flex-col items-start gap-11 sm:self-stretch">
                      <Text size="5xl" as="p" className="!font-lora">
                        Присоединяйтесь к нам
                      </Text>
                      <div className="flex w-[66%] justify-between gap-5 md:w-full">
                        <Button shape="square" className="w-[45px]">
                          <Img src="images/img_save.svg" />
                        </Button>
                        <Button shape="square" className="w-[45px]">
                          <Img src="images/img_close.svg" />
                        </Button>
                        <Button shape="square" className="w-[45px]">
                          <Img src="images/img_warning.svg" />
                        </Button>
                        <Button shape="square" className="w-[45px]">
                          <Img src="images/img_volume.svg" />
                        </Button>
                      </div>
                      <Text size="5xl" as="p">
                        +7 (111) 111 11 11
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
