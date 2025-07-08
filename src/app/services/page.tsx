import Hero from "../../components/common/hero/Hero";
import assets from "../../assets/assets-min.webp";
import cardImage from "../../assets/about.png";
import Title from "../../components/common/title/Title";
import useAllServices from "./api/useAllServices";
import Loader from "../../components/common/loader/Loader";
import Head from "../../components/common/meta/Head";
import { tabTitle } from "../../utils/tabTitle";
import { useTranslation } from "react-i18next";
import ServiceCard from "./components/serviceCard";


const data = [
  {
    title: "Asset management",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde incidunt id saepe commodi,",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde incidunt id saepe commodi, praesentium nobis ipsam porro recusandae illo voluptates facilis amet voluptate dolore voluptatem inventore nesciunt vero vitae debitis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde incidunt id saepe commodi, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde incidunt id saepe commodi, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde incidunt id saepe commodi, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde incidunt id saepe commodi, ",
    footer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde incidunt id saepe commodi, praesentium"
  },
  {
    title: "Asset management",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde incidunt id saepe commodi,",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde incidunt id saepe commodi, praesentium nobis ipsam porro recusandae illo voluptates facilis amet voluptate dolore voluptatem inventore nesciunt vero vitae debitis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde incidunt id saepe commodi, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde incidunt id saepe commodi, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde incidunt id saepe commodi, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde incidunt id saepe commodi, ",
    footer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde incidunt id saepe commodi, praesentium"
  },
  {
    title: "Asset management",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde incidunt id saepe commodi,",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde incidunt id saepe commodi, praesentium nobis ipsam porro recusandae illo voluptates facilis amet voluptate dolore voluptatem inventore nesciunt vero vitae debitis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde incidunt id saepe commodi, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde incidunt id saepe commodi, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde incidunt id saepe commodi, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde incidunt id saepe commodi, ",
    footer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde incidunt id saepe commodi, praesentium"
  },
  {
    title: "Asset management",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde incidunt id saepe commodi,",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde incidunt id saepe commodi, praesentium nobis ipsam porro recusandae illo voluptates facilis amet voluptate dolore voluptatem inventore nesciunt vero vitae debitis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde incidunt id saepe commodi, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde incidunt id saepe commodi, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde incidunt id saepe commodi, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde incidunt id saepe commodi, ",
    footer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde incidunt id saepe commodi, praesentium"
  },
]


const investCards = [
  {
    image: cardImage,
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde incidunt id saepe commodi"
  },
  {
    image: cardImage,
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde incidunt id saepe commodi"
  },
  {
    image: cardImage,
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde incidunt id saepe commodi"
  },
]

const Services = () => {
  const {t} = useTranslation()
  // removing data for now until the api is completed.
  const { 
    isLoading, 
    // data: services 
  } = useAllServices();
  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <Head 
        title={tabTitle(t("Services"))}
      />
      <Hero 
        title= {t("all services")}
        descreption="licensed, integrated, Aligned with your Ambition"
        image={assets} 
      />
      <div className="flex flex-col gap-10 py-4 lg:px-20 md:px-10 px-2 mb-4">
        <Title title="Below is a close look at the three fully regulated offerings that power Itmam Invest end-to-end value proposition each service is delivered under our capital" />
          {
            data.map((card, index) => (
              <ServiceCard 
                card={card}
                index={index}
                key={index}
              />
            ))
          }
        <Title 
          title="Why Itmam Invest?"
        />
        <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
            {
              investCards.map((card, index) => (
                <div 
                  className={`flex justify-center overflow-hidden text-center px-2 py-1 bg-opacity-30 font-bold text-xl items-center bg-no-repeat bg-center bg-cover rounded-lg relative h-[400px] flex-shrink-0`}
                  key={index}
                >
                  <p className="text-7xl font-bold absolute w-fit opacity-80 text-mainColor top-10 left-8">
                    {index + 1}
                  </p>
                  <img 
                    src={card.image}
                    className="absolute opacity-70 z-0 w-full h-full object-cover object-center"
                  />
                  <p className="z-10 text-gray-800">
                    {card.content}
                  </p>
                </div>
              ))
            }
        </div>
        <p className="text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis commodi cumque exercitationem odio. Dolorem inventore ex cum vero, sapiente at quo natus dolorum hic nisi, incidunt consequuntur? Rerum, quibusdam similique.  
        </p>
      </div>
    </>
  );
};

export default Services;
