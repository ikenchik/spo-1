import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Text, Button, Img, Input, Heading } from "../../components";

export default function MainPage() {
  const [searchBarValue1, setSearchBarValue1] = React.useState("");

  return (
    <>
      <Helmet>
        <title>Medprima</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full border border-solid border-gray-50_19 bg-gray-50">
        <header className="flex items-center justify-center bg-teal-400 p-[22px] sm:p-5">
          <div className="mx-auto flex w-full max-w-[1330px] items-center justify-between gap-5 md:flex-col">
            <div className="flex w-[8%] justify-center md:w-full">
              <div className="relative h-[105px] w-full md:h-auto">
                <Img src="images/img_vector_white_a700_105x113.svg" alt="vector_one" className="h-[105px] w-full" />
                <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-[86%] flex-col items-start gap-[5px]">
                  <Img src="images/img_vector.svg" alt="vector_three" className="ml-[11px] h-[23px] w-[78%] md:ml-0" />
                  <Text size="xl" as="p" className="!font-lora !font-medium">
                    МЕДПРИМА
                  </Text>
                </div>
              </div>
            </div>
            <ul className="mt-[30px] flex flex-wrap gap-[45px] self-start">
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
            <div className="flex w-[6%] justify-between gap-5 md:w-full">
              <a href="./SignUPpacnum" target="_blank">
                <Img src="images/img_lock.svg" alt="lock_one" className="h-[23px]" />
              </a>
              <Img src="images/img_search.svg" alt="search_one" className="h-[23px] w-[23px]" />
            </div>
          </div>
        </header>
        <div className="mt-16">
          <div className="flex flex-col items-center">
            <div className="relative h-[555px] self-stretch bg-yellow-100 pl-[21px] pt-[21px] md:h-auto sm:pl-5 sm:pt-5">
              <div className="flex w-full max-w-[1392px] items-start justify-center md:flex-col">
                <Heading size="md" as="h1" className="relative right-[35px] z-[1] mt-[30px] w-[49%] md:w-full">
                  МедПрима — клиника для детей и взрослых
                </Heading>
                <Img
                  src="images/img_36_transformed_1.png"
                  alt="36transformed"
                  className="relative top-[45px] ml-[-115px] h-[534px] w-[51%] object-cover md:ml-0 md:w-full"
                />
              </div>
              <div className="absolute bottom-[24%] left-[3%] m-auto flex flex-col items-start gap-[30px]">
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
            <div className="mx-auto mt-[50px] flex w-full max-w-[1285px] flex-col items-start gap-[42px] pt-1.5 md:p-5">
              <Text size="8xl" as="p" className="!font-lora !text-black-900">
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
                  <div className="flex h-[23px] w-[23px] items-center justify-center">
                    {searchBarValue1?.length > 0 ? (
                      <CloseSVG onClick={() => setSearchBarValue1("")} height={23} width={23} />
                    ) : (
                      <Img
                        src="images/img_search_black_900.svg"
                        alt="search"
                        className="h-[23px] w-[23px] cursor-pointer"
                      />
                    )}
                  </div>
                }
                className="gap-[35px] self-stretch border border-solid border-black-900 !text-black-900_7f sm:px-5"
              />
            </div>
            <div className="mx-auto mt-[70px] flex w-full max-w-[1157px] justify-center py-1 md:p-5">
              <div className="mb-[33px] flex w-full flex-col items-start">
                <Text size="6xl" as="p" className="!font-lora !text-black-900">
                  Популярные услуги
                </Text>
                <div className="mt-[41px] flex w-[68%] flex-wrap justify-between gap-5 md:w-full">
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
                <div className="mt-[21px] flex w-[64%] items-start justify-between gap-5 md:w-full md:flex-col">
                  <Text size="3xl" as="p" className="!text-black-900">
                    Колоноскопия
                  </Text>
                  <div className="flex w-[62%] items-start justify-between gap-5 md:w-full sm:flex-col">
                    <Text size="3xl" as="p" className="w-[74%] !text-black-900 sm:w-full">
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
                <div className="ml-1 mt-[84px] flex items-center justify-between gap-5 self-stretch md:ml-0 md:flex-col">
                  <div className="flex w-[68%] justify-center md:w-full">
                    <div className="flex w-full flex-col items-start">
                      <Text size="6xl" as="p" className="!font-lora !text-black-900">
                        Популярные направления
                      </Text>
                      <div>
                        <div className="flex md: flex-col self-stretch justify-between mt-[54px] gap-5">
                          <Text size="3xl" as="p" className="self-start !text-black-900">
                            Акушерство-гинекология
                          </Text>
                          <Text size="3xl" as="p" className="self-start !text-black-900">
                            Косметология
                          </Text>
                          <Text size="3xl" as="p" className=" self-start !text-black-900">
                            Офтальмология
                          </Text>
                        </div>
                        <div className="flex md: mt-[54px] self-stretch justify-between ml-[350px] flex-col">
                          <Text size="3xl" as="p" className="!text-black-900">
                            Гастроэнтерология
                          </Text>
                          <Text size="3xl" as="p" className="!text-black-900">
                            Нервология
                          </Text>
                          <Text size="3xl" as="p" className="!text-black-900">
                            Педиатрия
                          </Text>
                        </div>
                        <div className="">

                        </div>
                      </div>
                      {/* <div className="flex md:flex-col self-stretch justify-between items-center mt-[54px] gap-5">
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
                        </div> */}
                    </div>
                  </div>
                  <div className="mb-[7px] flex flex-col items-center gap-[11px] self-end border-l-[0.5px] border-solid border-black-900">
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
            <div className="mx-auto mt-[70px] flex w-full max-w-[1306px] flex-col items-start gap-12 md:p-5">
              <Text size="8xl" as="p" className="!font-lora !text-black-900">
                Наши специалисты
              </Text>
              <div className="ml-[31px] flex gap-[25px] self-stretch md:ml-0 md:flex-col">
                <div className="flex w-full flex-col items-start">
                  <Img
                    src="images/img_rectangle_17.png"
                    alt="жуманова"
                    className="h-[300px] w-full rounded-[10px] object-cover md:h-auto"
                  />
                  <Text size="3xl" as="p" className="mt-[18px] !text-black-900">
                    Жуманова Екатерина
                  </Text>
                  <Text size="xl" as="p" className="mt-2 !text-black-900">
                    Педиатор
                  </Text>
                </div>
                <div className="flex w-full flex-col items-start">
                  <Img
                    src="images/img_rectangle_18.png"
                    alt="image"
                    className="h-[300px] w-full rounded-[10px] object-cover md:h-auto"
                  />
                  <Text size="3xl" as="p" className="mt-[18px] !text-black-900">
                    Руслова Анастасия
                  </Text>
                  <Text size="xl" as="p" className="mt-1.5 !text-black-900">
                    Онколог
                  </Text>
                </div>
                <div className="flex w-full flex-col items-start">
                  <Img
                    src="images/img_rectangle_19.png"
                    alt="image"
                    className="h-[300px] w-full rounded-[10px] object-cover md:h-auto"
                  />
                  <Text size="3xl" as="p" className="mt-[18px] !text-black-900">
                    Туршов Алексей
                  </Text>
                  <Text size="xl" as="p" className="mt-2 !text-black-900">
                    Хирург-травматолог
                  </Text>
                </div>
                <div className="flex w-full flex-col items-start">
                  <Img
                    src="images/img_rectangle_20.png"
                    alt="image"
                    className="h-[300px] w-full rounded-[10px] object-cover md:h-auto"
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
            <div className="mx-auto mt-[105px] flex w-full max-w-[1265px] justify-end bg-orange-50 p-[55px] md:p-5">
              <div className="mb-[34px] mr-3.5 flex w-[93%] flex-col items-start gap-[42px] md:mr-0 md:w-full">
                <Text size="7xl" as="p" className="ml-[241px] !font-lora !text-black-900 md:ml-0">
                  Подпишитесь на рассылку
                </Text>
                <div className="flex gap-[7px] self-stretch md:flex-col">
                  <Input
                    shape="round"
                    name="электронная"
                    placeholder={`Электронная почта`}
                    className="flex-grow border border-solid border-gray-600 sm:px-5"
                  />
                  <Button
                    color="teal_400"
                    size="3xl"
                    shape="round"
                    className="min-w-[228px] border border-solid border-gray-600 sm:px-5"
                  >
                    Подписаться
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="mt-[152px] flex items-center justify-center bg-teal-400 p-12 md:p-5">
          <div className="mx-auto mt-0.5 flex w-full max-w-[1248px] justify-center">
            <div className="flex w-full items-center justify-center md:flex-col">
              <div className="relative bottom-[60px] flex w-full flex-col items-start gap-[37px]">
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
              <div className="ml-[53px] mt-[25px] flex w-full flex-col items-start gap-[76px] md:ml-0 md:gap-[57px] sm:gap-[38px]">
                <div className="ml-[106px] flex items-center justify-between gap-5 self-stretch md:ml-0">
                  <ul className="relative top-[30px] mb-[27px] flex flex-col items-start gap-[18px] self-end">
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
              <div className="relative bottom-[75px] ml-6 mt-1 flex w-full flex-col items-start gap-11 md:ml-0">
                <Text size="5xl" as="p" className="!font-lora">
                  Присоединяйтесь к нам
                </Text>
                <div className="flex w-[66%] justify-between gap-5 md:w-full">
                  <a href="#">
                    <Img src="images/img_save.svg" />
                  </a>
                  <a href="#">
                    <Img src="images/img_close.svg" />
                  </a>
                  <a href="#">
                    <Img src="images/img_warning.svg" />
                  </a>
                  <a href="#">
                    <Img src="images/img_volume.svg" />
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
