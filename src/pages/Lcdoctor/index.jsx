import React from "react";
import { Helmet } from "react-helmet";
import { Text, Button, Img, Heading } from "../../components";

export default function LcdoctorPage() {
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
                  <Img src="images/img_vector.svg" alt="vector_one" className="h-[8px]" />
                  <Text size="xs" as="p" className="!font-lora">
                    МЕДПРИМА
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex w-[17%] items-center justify-center gap-2.5">
              <div className="w-[15%] rounded-[16px] bg-gray-200">
                <Img
                  src="images/img_ellipse_16.png"
                  alt="circleimage"
                  className="relative h-[32px] w-[32px] rounded-[50%]"
                />
              </div>
              <Text as="p" className="w-[200px]">
                Аноним Анонимов
              </Text>
            </div>
          </div>
        </header>
        <div className="mx-auto mt-4 flex w-full max-w-[1273px] justify-center md:p-5">
          <div className="flex w-full items-start justify-center gap-[15px] md:flex-col">
            <div className="flex w-[16%] flex-col items-center justify-center rounded-[10px] bg-teal-400 p-[21px] md:w-full sm:p-5">
              <div className="relative mt-[3px] self-stretch rounded-[75px] bg-gray-200">
                <Img
                  src="images/img_ellipse_10_150x150.png"
                  alt="circleimage_one"
                  className="relative h-[150px] w-[150px] rounded-[50%]"
                />
              </div>
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
                <div className="mt-[3px] flex flex-1 flex-col items-start md:self-stretch">
                  <Heading as="h2">Активность</Heading>
                  <div className="mt-[11px] flex flex-col gap-[21px] self-stretch">
                    <div className="flex flex-1 cursor-pointer items-center justify-between gap-5 rounded-[10px] bg-white-A700 p-[18px] shadow-xs hover:shadow-xs">
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
                      <div className="mr-[113px] flex w-[25%] justify-center self-end md:mr-0">
                        <div className="flex w-full items-start justify-center gap-[11px]">
                          <Img
                            src="images/img_ellipse_16.png"
                            alt="чат_с_пациентом"
                            className="h-[32px] w-[32px] rounded-[50%]"
                          />
                          <div className="mt-0.5 flex flex-col items-start">
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
                    <div className="flex flex-1 cursor-pointer items-center justify-between gap-5 rounded-[10px] bg-white-A700 p-[18px] hover:shadow-xs">
                      <div className="flex">
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
                      </div>
                      <div className="mb-0.5 mr-[113px] flex w-[25%] justify-center self-end md:mr-0">
                        <div className="flex w-full items-start justify-center gap-[11px]">
                          <Img
                            src="images/img_ellipse_16.png"
                            alt="circleimage"
                            className="h-[32px] w-[32px] rounded-[50%]"
                          />
                          <div className="mt-0.5 flex flex-col items-start">
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
                  <div className="mt-[21px] flex items-center gap-[15px] self-stretch rounded-[10px] bg-white-A700 p-4 shadow-xs">
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
                <div className="flex w-[33%] flex-col items-start justify-center gap-4 md:w-full">
                  <Heading as="h3" className="mt-[3px]">
                    Последний пациент
                  </Heading>
                  <div className="flex self-stretch rounded-[10px] bg-white-A700 p-2.5">
                    <div className="mt-[9px] flex w-[87%] flex-col items-start gap-[31px] md:w-full">
                      <div className="ml-3.5 flex items-start gap-[7px] self-stretch md:ml-0">
                        <div className="h-[64px] w-[64px] rounded-[32px] bg-gray-200" />
                        <Text size="lg" as="p" className="mt-[9px] w-[75%] !text-black-900">
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
        <footer className="mt-[284px] flex items-center justify-center self-stretch bg-teal-400 p-12 md:p-5">
          <div className="mx-auto mt-0.5 flex w-full max-w-[1248px] justify-center">
            <div className="flex w-full items-center justify-between gap-5 md:flex-col">
              <div className="relative bottom-[60px] flex w-[31%] flex-col items-start gap-[37px] md:w-full">
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
              <div className="mt-1 flex w-[62%] items-start justify-center gap-6 md:w-full md:flex-col">
                <div className="mt-[21px] flex w-full flex-col items-start gap-[76px] md:gap-[57px] sm:gap-[38px]">
                  <div className="ml-[73px] flex items-center justify-between gap-5 self-stretch md:ml-0">
                    <div className="relative top-[25px] mb-[27px] flex flex-col items-start gap-[18px] self-end">
                      <a href="Партнеры" target="_blank" rel="noreferrer">
                        <Text as="p">Партнеры</Text>
                      </a>
                      <Text as="p">Программа лояльности</Text>
                      <Text as="p">Вопросы и ответы</Text>
                      <a href="Сотрудничество" target="_blank" rel="noreferrer">
                        <Text as="p">Сотрудничество</Text>
                      </a>
                    </div>
                    <div className="h-full w-px bg-white-A700" />
                  </div>
                  <Text size="md" as="p">
                    Авторское право © 2024. Все права защищены
                  </Text>
                </div>
                <div className="relative bottom-[30px] flex w-full flex-col items-start gap-11">
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
        </footer>
      </div>
    </>
  );
}
