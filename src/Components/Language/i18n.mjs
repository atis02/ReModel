import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      aboutCompany: "About us",
      pages: "Pages",
      advantages: "Advantages",
      goals: "Missions and goals",
      services: "Our services",
      licences: "Licences",
      ourWorks: "Photo gallery",
      contacts: "Contacts",
      read: "Read More",
      nameCompany: " “REmodel” ",
      company: "Our company",
      description:
        "was founded in 2021. In this short time-period, our company has accumulated extensive experience and has created a wide network of partners around the world to carry out import, export and transit shipments. ",
      hideDesc:
        "We are professionals in the field of transportation organization and at present we provide a full spectrum of cargo delivery services related to container, sea, railway, road and air transportation across Europe and Asia, as well as the transportation of dangerous goods and temperature-controlled goods.<1/> Despite the fact that we are a young and developing company, we can confidently establish ourselves as a responsible, honest, reliable and Your professional partner in the field of logistics. ",
      aboutCompanyText:
        "Our kid`s model agency is dedicated to discovering and nurturing young talent, providing them with opportunities in fashion, advertising, television, and more. At",
      aboutCompanyText2:
        " company are always ready to calculate various transportation options, provide information about the cargo location, planned delivery date, and provide assistance in registration of all necessary permits.",
      advantages: "Advantages",
      advText1:
        "Our specialists have more than 10 years of experience in international cargo transportation.",
      advText2:
        "Extensive geography. We deliver goods throughout Europe and Asia.",
      advText3:
        "Individual approach. We will select the best delivery method based on the characteristics of your cargo.",
      advText4:
        "Our team knows how to find new solutions to logistics processes, which is especially important in the modern realities.",
      advText5:
        "We optimize the routes to speed up transportation as much as possible and reduce delivery costs. We always strive to preserve our clients’ financial resources.",
      advText6:
        "Qualitative service. We pay special attention to careful loading, unloading and securing the cargo. We guarantee the top safety and absence of damage.",
      advText7:
        "Well qualified assistance in the preparation of customs documents.",
      missionsGoals: "Mission and goals",
      missionsCompany: "Mission",
      missionText: "Organization of highly efficient business processes :",
      missionText2:
        "- Correct organization of the sequency of logistics operations, which makes it possible to achieve the transportations estimate and its settings specified for the planned period.",
      goals: "Goals",
      goalsText1:
        "- Srengthening the export potential and logistics communications of Turkmenistan in the world stage.",
      goalsText2:
        "- Export of domestic goods to world markets thanks to the efficient logistics.",
      export: "Export",
      tranzit: "Transit",
      soprowozden: "Logistics support",
      import: "Import",
      multiModal: "MULTIMODAL TRANSPORTATION",
      multiModalText:
        "Multimodal transportation is the calculation of shipment by combining several modes of transport. It helps to significantly reduce the overall costs of transportation.<1/> As part of multimodal transportation, we use railways, roads and sea shipping. <1/>We cooperate with warehouse terminals from all around the world for rail/sea/road logistics from Turkmenistan, which helps in the efficient calculation of the best transportation options.",
      railway: "RAILWAY TRANSPORTATION",
      railwayText:
        "Railway shipping is one of the most economical ways to transport goods. This especially applies to sending of a heavy cargo over long distances.<1/>Our team carries out international freight transportation by rail in the CIS countries, Europe, and China.<1/>Wagon shipment and transportation as part of a direct container train is possible.<1/>We offer the following services:<1/>– sum of the most profitable railway routes;<1/>– provision of wagons;<1/>– calculation of freight tariffs;<1/>– assistance in obtaining documents during the registration of wagons.",
      autoDeliver: "AUTO FREIGHT",
      autoDeliverText:
        "Freight transportation via highways is the most common type of logistics  services being practiced.<1/>Due to the wide coverage and a short delivery times, makes this type of cargo transportation very attractive.",
      autoDeliverText2:
        " company provides services:<1/>– during the transportation goods of general type and ones with the hazardous classes;<1/> – various consolidated shipments;<1/> – when transporting goods at temperature modes;<1/>– transfer arrangements for foreign freight trucks.",
      seaDelivery: "SEA SHIPPING",
      seaDeliveryText:
        "The most cost-effective, but at the same time the longest type of transportation in terms of transit time.<1/>With regular transportation and good planning, it helps to save resources and smoothly supply the logistics chain of your enterprise. <1/>Our team of specialists will help you:<1/>– choose the most profitable sea freight;<1/>– make calculations of all port and transit costs;<1/> – safely reload your cargo at sea ports.<1/>Our partners include such major shipping lines as Hapag-lloyd, Maersk, and Evergreen, which have established themselves as leaders in this market.",
      planeDelivery: "AIR TRANSPORTATION",
      planeDeliveryText:
        "The fastest and at the same time the most expensive method of freight.",
      planeDeliveryText2:
        " specialists have experience both in transporting general loads and cargo with temperature conditions and hazardous classes.<1/> Our specialists will assist you with:<1/>– booking a cargo space on an airplane;<1/>– delivery from the terminal to the airport;<1/>– registration of an air waybill;<1/>– pre-flight inspection;<1/>– payment of terminal fees;<1/>– storage, loading and unloading at airports. ",
      licence: "Licenses",
      licenceDesc: "Description",
      licenceDesc2: "Auto forwarding",
      licenceDesc3: "Sea forwarding",
      licenceDesc4: "Air forwarding",
      series: "Series",
      period: "Period",
      permit: "Permit Authority",
      permit2:
        "Agency for Transport and Communication under the Cabinet of Ministers of Turkmenistan.",
      permit3:
        "Agency for Transport and Communication under the Cabinet of Ministers of Turkmenistan.",

      medicaments: "Pharmaceutical transportation (Europe - Turkmenistan)",
      mebels: "Transportation of furniture (Europe-Turkmenistan)",
      warn: "Fire-resistant bricks (Germany-Turkmenistan)",
      railw: "Railway lines ",
      automobile: "Auto transportation",
      ourCompany: "",
      ourCompnanyText:
        "- offers optimal solutions in the field of logistics services. <1/>We have successfully accumulated experience in many industrial and large - scale projects in the country. <1/>We will be happy to meet for detailed talks and discuss options for cooperation.",
      location:
        "main office Nurmukhamet Andalib ave., №: 70/2, Pc: 747017 Ashgabat, Turkmenistan",
    },
  },
  ru: {
    translation: {
      aboutCompany: "О нас",
      pages: "Страницы",
      advantagesNav: "Преимущества",
      goals: "Миссия и цели",
      services: "Услуги компании",
      licences: "Лицензии",
      ourWorks: "Проекты",
      contacts: "Контакты",
      nameCompany: " “REmodel” ",
      read: "Читать",
      company: "Компания",
      description:
        " была основана в 2021 году. За этот короткий период наша компания накопила большой опыт и создала широкую сеть партнеров по всему миру для осуществления импортных, экспортных и транзитных перевозок.",
      hideDesc:
        "Мы являемся профессионалами в области организации перевозки и на сегодняшний день оказываем полный спектр услуг, связанных с контейнерными, морскими, железнодорожными, автомобильными и авиаперевозками  по странам Европы и Азии, а также перевозкой опасных грузов и грузов с температурным режимом.<1/>Несмотря на то, что мы являемся молодой и развивающейся компанией, мы с уверенностью можем зарекомендовать себя, как ответственного, добросовестного, надёжного и профессионального - Вашего партнёра в сфере логистики!",
      aboutCompanyText:
        "Наше детское модельное агентство посвящено открытию и развитию молодых талантов, предоставляя им возможности в сфере моды, рекламы, телевидения и многом другом. В ",
      aboutCompanyText2:
        "мы верим, что каждый ребенок уникален и заслуживает шанса проявить себя в индустрии моделинга. С многолетним опытом работы в отрасли, наше агентство гордится профессионализмом, честностью и индивидуальным подходом к карьере каждого ребенка.",
      advantages: "После обучения ваш ребенок получит:",
      advText1: "Уверенность и коммуникабельность ",
      advText2: "Навыки самопрезентации",
      advText3: "Съемка портфолио и участие в модных показах ",
      advText4: "Уверенный шаг и грациозность движения.",
      advText5: "Профессиональные навыки и опыт",
      advText6: "Поддержка преподавателей и карьерный рост ",
      missionsGoals: "Миссии и цели",
      missionsCompany: "Миссия компании",
      missionText: "Организация высокоэффективных бизнес процессов :",
      missionText2:
        "- правильная организация последовательности выполнения логистических операций, что позволяет достичь заданных на плановый период логистической сметы и ее настройки.",
      goals: "Цели компании",
      goalsText1:
        "- Усиление экспортного потенциала, логистических коммуникаций Туркменистана на международной арене.",
      goalsText2:
        "- Вывоз товаров отечественной продукции на мировые рынки благодаря эффективной логистике.",
      export: "Экспорт",
      tranzit: "Транзит",
      soprowozden: "Сопровождение",
      import: "Импорт",
      multiModal: "МУЛЬТИМОДАЛЬНЫЕ ПЕРЕВОЗКИ",
      multiModalText:
        " Мультимодальные перевозки – расчет перевозок комбинированием нескольких видов транспорта помогает существенно снизить стоимость перевозок.<1/> В рамках мультимодальных перевозок мы используем железнодорожный, автомобильный и морской транспорт. <1/> Мы сотрудничаем со складскими терминалами по всему миру для железнодорожныx / морских / авто транспортировок Туркменистана, что помогает в эффективном расчете перевозок.",
      railway: "ЖЕЛЕЗНОДОРОЖНЫЕ ПЕРЕВОЗКИ",
      railwayText:
        "Железнодорожные перевозки – один из наиболее экономных способов транспортировки грузов. Особенно это относится к отправке тяжелых грузов на дальние расстояния. <1 /> Наша команда осуществляет международные грузовые перевозки железнодорожным транспортом по странам СНГ, Европы,Китая.<1 /> Возможна повагонная отправка и перевозка в составе прямого контейнерного поезда.<1 />Предлагаем следующие услуги :<1 /> - расчет наиболее выгодных ж/д маршрутов; <1 />- предоставление вагонов;<1 /> - расчет провозных тарифов;<1 /> - помощь в получении документов при оформлении вагонов.",
      autoDeliver: "АВТОПЕРЕВОЗКИ",
      autoDeliverText:
        " Грузовые перевозки через автодороги являются наиболее распространённым видом перевозок. <1 /> Благодаря широкой географии и короткому транзитному времени делают этот вид грузоперевозок очень привлекательным.",
      autoDeliverText2:
        "оказывает услуги :<1 /> – при перевозке грузов общего типа и с классом опасности;<1 /> – консолидированные отправки;<1 /> – при перевозке грузов с температурными режимами;<1 />– организация перецепок для иностранных авто.",
      seaDelivery: "МОРСКИЕ ПЕРЕВОЗКИ",
      seaDeliveryText:
        " Самый оптимальный по затратам, но в тоже время самый долгий по транзитному времени вид перевозок.<1 /> При регулярных перевозках и при хорошем планировании помогает сэкономить ресурсы и бесперебойно снабжать логистическую цепь вашего предприятия.<1 />Наша команда специалистов поможет вам :<1 /> – выбрать наиболее выгодный морской фрахт;<1 /> – сделать расчет всех портовых и транзитных расходов;<1 />– безопасно перегрузить ваш груз в морских портах. <1 /> В числе наших партнеров такие крупнейшие морские линии как Hapag-lloyd, Maersk и Evergreen, зарекомендовавшие себя лидерами данного рынка.",
      planeDelivery: "АВИАПЕРЕВОЗКИ",
      planeDeliveryText:
        "Самый быстрый и в тоже время самый высокозатратный способ перевозок. <1 /> Специалисты",
      planeDeliveryText2:
        "имеют опыт как при перевозках грузов общего типа, так и с грузами с температурными режимами и классом опасности.<1 /> Наши специалисты окажут вам следующие услуги: <1 /> – бронирование места в самолете; <1 />– доставка от терминала в аэропорт; <1 />– оформление авианакладной; <1 />– предполетный досмотр;<1 /> – оплата терминальных сборов; <1 /> – хранение, погрузочные и разгрузочные работы в аэропортах.",
      licence: "Лицензии на транспортные услуги",
      licenceDesc: "Наименование",
      licenceDesc2: "Авто экспедирование",
      licenceDesc3: "Морское экспедирование",
      licenceDesc4: "Авиа экспедирование",
      series: "Серия",
      period: "Период",
      permit: "Выдавший орган",
      permit2:
        "Агентство транспорта и коммуникаций при Кабинете Министров Туркменистана.",
      permit3:
        "Агентство транспорта и коммуникаций при Кабинете Министров Туркменистана.",
      medicaments: "Перевозка медикоментов <1/> (Европа - Туркменистан)",
      mebels: "Перевозка мебели <1/>(Европа - Туркменистан)",
      warn: "Огнеупорные кирпичи <1/>(Германия - Туркменистан)",
      railw: "Железнодорожные перевозки",
      automobile: "Автоперевозки",
      ourCompany: "Наша компания",
      ourCompnanyText:
        " предлагает оптимальные решения в области логистики. <1 /> Мы накопили опыт во многих промышленных и масштабных проектах страны с достойным успехом.<1 /> Мы будем рады встретиться для проведения детальных переговоров и обсудить варианты сотрудничества вместе с Вами.",
      location:
        "Центральный офис пр. Нурмухаммета Андалиба №: 70/2, Па: 747017 .",
    },
  },
};
i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "ru",
  lng: localStorage.getItem("lng"),
  interpolation: {
    escapeValue: false,
  },
  debug: true,
  initImmediate: false,
});
export default i18n;
